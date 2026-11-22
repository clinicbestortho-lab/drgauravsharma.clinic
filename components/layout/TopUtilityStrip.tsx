'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Phone, Clock, MapPin } from 'lucide-react';
import { CLINIC_CONTACT, CLINIC_LOCATION, DOCTOR_PROFILE } from '@/lib/clinic';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { TextSizeToggle } from '../ui/TextSizeToggle';

export function TopUtilityStrip() {
  const locale = useLocale();
  const isHi = locale === 'hi';

  return (
    <div className="bg-[#0A1D33] text-[#CBD5E1] text-xs py-2 px-4 border-b border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-center md:text-left">
          <span className="font-medium text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {isHi && DOCTOR_PROFILE.hindiName ? `${DOCTOR_PROFILE.hindiName} ऑर्थोपेडिक क्लिनिक` : 'Dr. Gaurav Sharma Orthopaedic Clinic'}
          </span>
          <span className="hidden sm:inline text-[#64748B]">•</span>
          <span className="flex items-center gap-1 text-[#94A3B8]">
            <MapPin className="w-3 h-3 text-[#0D7E8A]" />
            {isHi ? 'सिकंदरा, आगरा (सत्यम कॉम्प्लेक्स)' : 'Sikandra, Agra (Satyam Complex)'}
          </span>
          <span className="hidden md:inline text-[#64748B]">•</span>
          <span className="hidden md:flex items-center gap-1 text-[#94A3B8]">
            <Clock className="w-3 h-3 text-[#C28E38]" />
            {isHi ? 'ओपीडी परामर्श: केवल पूर्व अपॉइंटमेंट द्वारा' : 'OPD Consultations by Prior Appointment'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC_CONTACT.primaryPhone}`}
            className="hidden sm:inline-flex items-center gap-1.5 font-medium text-white hover:text-[#38BDF8] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#38BDF8]" />
            <span>{CLINIC_CONTACT.displayPhone}</span>
          </a>
          <div className="h-3.5 w-px bg-[#1E3A5F] hidden sm:block" />
          <TextSizeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
