import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { CLINIC_LOCATION, CLINIC_TIMINGS, CLINIC_CONTACT } from '@/lib/clinic';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BookingForm } from '@/components/booking/BookingForm';
import { EmergencyBlock } from '@/components/booking/EmergencyBlock';
import { Badge } from '@/components/ui/Badge';
import { Phone, Clock, MessageSquare } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title:
      locale === 'hi'
        ? 'अपॉइंटमेंट बुकिंग एवं संपर्क | डॉ. गौरव शर्मा क्लिनिक'
        : 'Book Orthopaedic Consultation & Clinic Contact | Sikandra, Agra',
    description:
      locale === 'hi'
        ? 'सत्यम कॉम्प्लेक्स, सिकंदरा, आगरा में डॉ. गौरव शर्मा के साथ ऑर्थोपेडिक परामर्श बुक करें। फोन +91 97602 30687 पर संपर्क करें या ऑनलाइन समय चुनें।'
        : 'Schedule an outpatient orthopaedic consultation with Dr. Gaurav Sharma at Satyam Complex, Sikandra, Agra. Call +91 97602 30687 or request your slot online.',
    path: '/contact',
    locale: locale as 'en' | 'hi',
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            {
              label: isHi ? 'संपर्क एवं बुकिंग' : 'Contact & Booking',
              href: `/${locale}/contact`,
              active: true,
            },
          ]}
        />
      </div>

      <header className="py-12 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="teal" size="sm" className="mb-3">
            {isHi ? 'पूर्व-निर्धारित समय ओपीडी परामर्श' : 'Outpatient Consultations by Prior Appointment'}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
            {isHi ? 'ऑर्थोपेडिक परामर्श समय बुक करें' : 'Schedule Your Orthopaedic Consultation'}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
            {isHi
              ? 'सत्यम कॉम्प्लेक्स, सिकंदरा में डॉ. गौरव शर्मा से अपॉइंटमेंट बुक करें। विस्तृत जांच हेतु अपनी पुरानी एक्स-रे, एमआरआई या मेडिकल जांच रिपोर्ट साथ लाएं।'
              : 'Book an appointment with Dr. Gaurav Sharma at Satyam Complex, Sikandra. Please bring any previous X-rays, MRI scans, or test reports for an in-depth clinical review.'}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Quick Contact & Timings Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0F2744]/8 text-[#0F2744] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#0D7E8A]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0F2744]">
              {isHi ? 'रिसेप्शन पर कॉल करें' : 'Call Reception'}
            </h3>
            <p className="text-xs text-[#566474]">
              {isHi ? 'सीधी पूछताछ एवं मौखिक समय पुष्टि' : 'Direct inquiries & verbal slot confirmation'}
            </p>
            <a
              href={`tel:${CLINIC_CONTACT.primaryPhone}`}
              className="text-base font-bold text-[#0F2744] hover:text-[#0D7E8A] block"
            >
              {CLINIC_CONTACT.displayPhone}
            </a>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#25D366]/15 text-[#075E54] flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0F2744]">
              {isHi ? 'व्हाट्सएप डेस्क' : 'WhatsApp Desk'}
            </h3>
            <p className="text-xs text-[#566474]">
              {isHi ? 'अपॉइंटमेंट बुकिंग हेतु सीधा संदेश भेजें' : 'Message for consultation scheduling'}
            </p>
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                isHi
                  ? 'नमस्ते डॉ. गौरव शर्मा क्लिनिक, मुझे परामर्श हेतु अपॉइंटमेंट लेना है।'
                  : CLINIC_CONTACT.whatsappPrefill
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-[#075E54] hover:underline block"
            >
              {isHi ? 'व्हाट्सएप पर बात करें →' : 'Chat on WhatsApp →'}
            </a>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C28E38]/15 text-[#C28E38] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0F2744]">
              {isHi ? 'ओपीडी परामर्श समय' : 'OPD Hours'}
            </h3>
            <p className="text-xs text-[#566474]">
              {isHi
                ? 'सोम–शनि: सुबह 9:30–दोपहर 4:00 एवं शाम 6:00–रात 9:30'
                : 'Mon–Sat: 9:30 AM–4 PM & 6 PM–9:30 PM'}
            </p>
            <span className="text-xs font-semibold text-[#0F2744] block">
              {isHi
                ? 'रविवार: सुबह 10:00–दोपहर 2:00 (पूर्व अपॉइंटमेंट)'
                : 'Sunday: 10 AM–2 PM (Prior Appointment)'}
            </span>
          </div>
        </div>

        {/* Booking Form (wrapped in suspense for search params) */}
        <div>
          <Suspense
            fallback={
              <div className="text-center py-12">
                {isHi ? 'बुकिंग फॉर्म लोड हो रहा है...' : 'Loading booking form...'}
              </div>
            }
          >
            <BookingForm />
          </Suspense>
        </div>

        {/* Emergency Casualty Protocol Disclaimer */}
        <div id="emergency">
          <EmergencyBlock />
        </div>
      </div>
    </div>
  );
}
