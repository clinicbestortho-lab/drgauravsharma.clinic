'use server';

// Simple in-memory rate limiter per IP / timestamp
const rateLimitMap = new Map<string, number>();

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  preferredDate: string;
  preferredSession: 'morning' | 'evening' | 'sunday';
  concern: string;
  preferredLanguage: 'English' | 'Hindi';
  notes?: string;
  patientReferralCode?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  data?: {
    bookingId: string;
    fullName: string;
    phoneNumber: string;
    concern: string;
    preferredSession: string;
    preferredDate: string;
  };
}

export async function submitBookingConsultation(
  prevState: any,
  formData: FormData
): Promise<BookingResponse> {
  const fullName = ((formData.get('fullName') as string) || '').trim();
  const phoneNumber = ((formData.get('phoneNumber') as string) || '').trim();
  const preferredDate = ((formData.get('preferredDate') as string) || '').trim();
  const preferredSession = ((formData.get('preferredSession') as string) || '').trim();
  const concern = ((formData.get('concern') as string) || '').trim();
  const notes = ((formData.get('notes') as string) || '').trim();
  const patientReferralCode = ((formData.get('patientReferralCode') as string) || '').trim();

  // 1. Honeypot check (silently drop bots)
  if (patientReferralCode.length > 0) {
    return {
      success: true,
      message: 'Your consultation request has been recorded.',
    };
  }

  // 2. Native validation without external dependencies
  const errors: Record<string, string[]> = {};

  if (!fullName || fullName.length < 2) {
    errors.fullName = ['Full name must be at least 2 characters long'];
  } else if (fullName.length > 100) {
    errors.fullName = ['Full name cannot exceed 100 characters'];
  }

  if (!phoneNumber || !/^(?:\+91|91)?[6-9]\d{9}$/.test(phoneNumber)) {
    errors.phoneNumber = ['Please provide a valid 10-digit Indian mobile number'];
  }

  if (!preferredDate) {
    errors.preferredDate = ['Preferred date is required'];
  }

  if (!['morning', 'evening', 'sunday'].includes(preferredSession)) {
    errors.preferredSession = ['Please select an OPD session'];
  }

  if (!concern) {
    errors.concern = ['Please select your primary clinical concern'];
  }

  if (notes.length > 500) {
    errors.notes = ['Notes cannot exceed 500 characters'];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please correct the highlighted errors.',
      errors,
    };
  }

  // 3. Rate limiting check by phone number
  const now = Date.now();
  const lastSubmission = rateLimitMap.get(phoneNumber);
  if (lastSubmission && now - lastSubmission < 30000) {
    return {
      success: false,
      message: 'A request was just received for this number. Please wait 30 seconds before retrying.',
    };
  }
  rateLimitMap.set(phoneNumber, now);

  // Generate unique booking reference
  const bookingId = `GS-${Math.floor(100000 + Math.random() * 900000)}`;

  // Log clinical booking request for clinic records
  console.log('[CLINIC BOOKING SUBMISSION]', {
    bookingId,
    fullName,
    phoneNumber,
    preferredDate,
    preferredSession,
    concern,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: 'Your appointment consultation request has been received. Our clinic desk will verify doctor availability and confirm your time slot shortly.',
    data: {
      bookingId,
      fullName,
      phoneNumber,
      concern,
      preferredSession,
      preferredDate,
    },
  };
}
