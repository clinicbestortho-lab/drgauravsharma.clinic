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
    <div className="w-full bg-[#0A1D33] text-[#CBD5E1] text-xs py-1.5 px-4 border-b border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
          <span className="font-medium text-white flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            {isHi && DOCTOR_PROFILE.hindiName ? `${DOCTOR_PROFILE.hindiName} ऑर्थोपेडिक क्लिनिक` : 'Dr. Gaurav Sharma Orthopaedic Clinic'}
          </span>
          <span className="hidden sm:inline text-[#64748B]">•</span>
          <span className="hidden sm:flex items-center gap-1 text-[#94A3B8] whitespace-nowrap">
            <MapPin className="w-3 h-3 text-[#0D7E8A] shrink-0" />
            {isHi ? 'सिकंदरा, आगरा (सत्यम कॉम्प्लेक्स)' : 'Sikandra, Agra (Satyam Complex)'}
          </span>
          <span className="hidden xl:inline text-[#64748B]">•</span>
          <span className="hidden xl:flex items-center gap-1 text-[#94A3B8] whitespace-nowrap">
            <Clock className="w-3 h-3 text-[#C28E38] shrink-0" />
            {isHi ? 'ओपीडी परामर्श: केवल पूर्व अपॉइंटमेंट द्वारा' : 'OPD Consultations by Prior Appointment'}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_CONTACT.primaryPhone}`}
            className="hidden sm:inline-flex items-center gap-1.5 font-medium text-white hover:text-[#38BDF8] transition-colors whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-[#38BDF8]" />
            <span>{CLINIC_CONTACT.displayPhone}</span>
          </a>
          <div className="h-3.5 w-px bg-[#1E3A5F] hidden sm:block" />
          <TextSizeToggle />
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
