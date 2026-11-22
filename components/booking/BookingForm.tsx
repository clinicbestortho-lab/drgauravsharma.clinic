'use client';

import React, { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
  submitBookingConsultation,
  BookingResponse,
} from '@/app/actions/booking';
import { CLINIC_CONTACT } from '@/lib/clinic';
import {
  Calendar,
  Clock,
  Phone,
  User,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'motion/react';
import { EASE } from '@/lib/animations';

export function BookingForm({ initialConcern }: { initialConcern?: string }) {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('contact');

  const searchParams = useSearchParams();
  const queryConcern = searchParams?.get('concern') || initialConcern || '';

  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<BookingResponse | null>(null);

  // Form field state
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSession, setPreferredSession] = useState<'morning' | 'evening' | 'sunday'>('morning');
  const [concern, setConcern] = useState(
    queryConcern || (isHi ? 'सामान्य ऑर्थोपेडिक परामर्श' : 'General Orthopaedic Consultation')
  );
  const [notes, setNotes] = useState('');

  // Calculate tomorrow's date string for input min
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await submitBookingConsultation(null, formData);
      setResponse(res);
      if (res.success) {
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
    });
  };

  // Pre-aggregated concern list
  const concernOptions = isHi
    ? [
        'सामान्य ऑर्थोपेडिक परामर्श',
        'टोटल नी रिप्लेसमेंट (TKR) मूल्यांकन',
        'पार्शियल नी रिप्लेसमेंट (UKA) मूल्यांकन',
        'टोटल हिप रिप्लेसमेंट (THR) / AVN जांच',
        'एसीएल / पीसीएल लिगामेंट टियर व आर्थ्रोस्कोपी',
        'मेनिस्कस कार्टिलेज रिपेयर व जोड़ का अटकना',
        'कंधा रोटेटर कफ टियर / कंधा उतरना',
        'कमर दर्द, सायटिका एवं स्लिप डिस्क',
        'फ्रैक्चर केयर एवं चोट के बाद की समीक्षा',
        'सर्जरी की सलाह पर दूसरी निष्पक्ष राय (Second Opinion)',
        'डे-केयर कार्पल टनल / ट्रिगर फिंगर रिलीज',
        'अन्य जोड़ या हड्डी की समस्या',
      ]
    : [
        'General Orthopaedic Consultation',
        'Total Knee Replacement (TKR) Evaluation',
        'Partial Knee Replacement (UKA) Evaluation',
        'Total Hip Replacement (THR) / AVN Evaluation',
        'ACL / PCL Ligament Tear & Arthroscopy',
        'Meniscus Cartilage Repair & Catching',
        'Shoulder Rotator Cuff Tear / Dislocation',
        'Back Pain, Sciatica & Lumbar Disc',
        'Fracture Care & Post-Trauma Review',
        'Second Opinion on Recommended Surgery',
        'Daycare Hand / Carpal Tunnel / Trigger Finger',
        'Other Joint or Bone Condition',
      ];

  if (response?.success && response.data) {
    const booking = response.data;
    const whatsappDeepLink = `https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      isHi
        ? `नमस्ते डॉ. गौरव शर्मा क्लिनिक, मैंने ऑनलाइन अपॉइंटमेंट बुक किया है।\nरेफरेंस: ${booking.bookingId}\nनाम: ${booking.fullName}\nतारीख: ${booking.preferredDate} (${booking.preferredSession})\nसमस्या: ${booking.concern}`
        : `Hello Dr. Gaurav Sharma Clinic, I have requested an appointment.\nRef: ${booking.bookingId}\nName: ${booking.fullName}\nDate: ${booking.preferredDate} (${booking.preferredSession})\nConcern: ${booking.concern}`
    )}`;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE.power3Out }}
        className="rounded-3xl bg-white border border-[#E2DBD0] p-8 sm:p-12 shadow-md text-center max-w-2xl mx-auto space-y-6"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D7E8A]">
            Reference #{booking.bookingId}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2744]">
            {t('successTitle')}
          </h3>
          <p className="text-sm text-[#566474] leading-relaxed max-w-lg mx-auto">
            {t('successMsg', { name: booking.fullName, phone: booking.phoneNumber })}
          </p>
        </div>

        {/* Booking Summary Box */}
        <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
          <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
            <span className="text-[#7C8894]">{t('dateLabel')}:</span>
            <span className="font-semibold text-[#0F2744]">{booking.preferredDate}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
            <span className="text-[#7C8894]">{t('sessionLabel')}:</span>
            <span className="font-semibold text-[#0F2744] capitalize">
              {booking.preferredSession === 'morning'
                ? t('morningSession')
                : booking.preferredSession === 'evening'
                ? t('eveningSession')
                : t('sundaySession')}
            </span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-[#7C8894]">{t('concernLabel')}:</span>
            <span className="font-semibold text-[#0F2744] truncate max-w-[200px]">
              {booking.concern}
            </span>
          </div>
        </div>

        {/* WhatsApp Deep Link CTA */}
        <div className="pt-2 space-y-3">
          <a
            href={whatsappDeepLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors shadow-md text-sm cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{t('sendWhatsapp')}</span>
          </a>

          <p className="text-xs text-[#7C8894]">
            {t('bringReports')}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-sm space-y-6 max-w-3xl mx-auto"
    >
      <div className="border-b border-[#F0EBE1] pb-4">
        <h3 className="font-serif text-2xl font-bold text-[#0F2744]">
          {t('formTitle')}
        </h3>
        <p className="text-xs sm:text-sm text-[#566474] mt-1">
          {t('formDesc')}
        </p>
      </div>

      {response && !response.success && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{response.message}</p>
            {response.errors && (
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs">
                {Object.entries(response.errors).map(([field, errs]) => (
                  <li key={field}>{errs.join(', ')}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Honeypot field (hidden from view) */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="patientReferralCode">{isHi ? 'रेफरल कोड' : 'Referral Code'}</label>
        <input
          type="text"
          id="patientReferralCode"
          name="patientReferralCode"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="text-xs font-bold text-[#0F2744] block">
            {t('nameLabel')} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              placeholder={t('namePlaceholder')}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D5DFEA] bg-[#FAF8F4] text-sm text-[#1A2530] focus:bg-white focus:border-[#0D7E8A] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Mobile Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phoneNumber" className="text-xs font-bold text-[#0F2744] block">
            {t('phoneLabel')} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              placeholder="e.g. 98XXXXXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D5DFEA] bg-[#FAF8F4] text-sm text-[#1A2530] focus:bg-white focus:border-[#0D7E8A] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Preferred Date */}
        <div className="space-y-1.5">
          <label htmlFor="preferredDate" className="text-xs font-bold text-[#0F2744] block">
            {t('dateLabel')} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              required
              min={minDateString}
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D5DFEA] bg-[#FAF8F4] text-sm text-[#1A2530] focus:bg-white focus:border-[#0D7E8A] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Preferred Session */}
        <div className="space-y-1.5">
          <label htmlFor="preferredSession" className="text-xs font-bold text-[#0F2744] block">
            {t('sessionLabel')} <span className="text-red-500">*</span>
          </label>
          <select
            id="preferredSession"
            name="preferredSession"
            value={preferredSession}
            onChange={(e) => setPreferredSession(e.target.value as any)}
            className="w-full px-4 py-2.5 rounded-xl border border-[#D5DFEA] bg-[#FAF8F4] text-sm text-[#1A2530] focus:bg-white focus:border-[#0D7E8A] focus:outline-none transition-colors"
          >
            <option value="morning">{t('morningSession')}</option>
            <option value="evening">{t('eveningSession')}</option>
            <option value="sunday">{t('sundaySession')}</option>
          </select>
        </div>
      </div>

      {/* Primary Concern */}
      <div className="space-y-1.5">
        <label htmlFor="concern" className="text-xs font-bold text-[#0F2744] block">
          {t('concernLabel')} <span className="text-red-500">*</span>
        </label>
        <select
          id="concern"
          name="concern"
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-[#D5DFEA] bg-[#FAF8F4] text-sm text-[#1A2530] focus:bg-white focus:border-[#0D7E8A] focus:outline-none transition-colors"
        >
          {concernOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Clinical Notes / Symptoms */}
      <div className="space-y-1.5">
        <label htmlFor="notes" className="text-xs font-bold text-[#0F2744] block">
          {t('notesLabel')}
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder={t('notesPlaceholder')}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-[#D5DFEA] bg-[#FAF8F4] text-sm text-[#1A2530] focus:bg-white focus:border-[#0D7E8A] focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={isPending}
          className="w-full font-bold shadow-sm justify-center"
        >
          {isPending ? t('submitting') : t('submitBtn')}
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Button>
      </div>
    </form>
  );
}
