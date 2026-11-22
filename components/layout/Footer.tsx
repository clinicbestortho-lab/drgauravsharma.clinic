'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import {
  DOCTOR_PROFILE,
  CLINIC_LOCATION,
  CLINIC_CONTACT,
  CLINIC_SOCIALS,
  CLINIC_INSURANCE_NOTE,
  COMPLIANCE_NOTICE,
  HINDI_COMPLIANCE_NOTICE,
} from '@/lib/clinic';
import {
  MapPin,
  Clock,
  Youtube,
  Instagram,
  Facebook,
  AlertTriangle,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';

export function Footer() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1828] text-[#E2E8F0] border-t border-[#162C46] pt-16 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Alert Banner Link */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-[#EF4444]/20 text-[#FCA5A5] shrink-0 mt-0.5 sm:mt-0">
              <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm sm:text-base">
                {t('emergencyTitle')}
              </p>
              <p className="text-xs sm:text-sm text-[#CBD5E1]">
                {t('emergencySubtitle')}
              </p>
            </div>
          </div>
          <Link
            href={`/${locale}/contact#emergency`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FCA5A5] hover:text-white underline underline-offset-4 shrink-0"
          >
            {t('emergencyLink')}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1E3A5F]">
          {/* Column 1: Doctor & Clinic Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center font-serif font-bold text-lg border border-white/20">
                GS
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white leading-tight">
                  {isHi && DOCTOR_PROFILE.hindiName ? DOCTOR_PROFILE.hindiName : DOCTOR_PROFILE.name}
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  {isHi && DOCTOR_PROFILE.hindiDesignation ? DOCTOR_PROFILE.hindiDesignation : DOCTOR_PROFILE.designation}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {t('doctorSummary')}
            </p>

            <div className="pt-2 text-xs text-[#94A3B8] space-y-1">
              <p>
                <strong className="text-[#E2E8F0]">{t('qualifications')}</strong>{' '}
                {isHi ? 'एम.बी.बी.एस., एम.एस. (हड्डी रोग)' : DOCTOR_PROFILE.degrees.join(', ')}
              </p>
              <p>
                <strong className="text-[#E2E8F0]">{t('faculty')}</strong>{' '}
                {isHi && DOCTOR_PROFILE.hindiFormerDesignation ? DOCTOR_PROFILE.hindiFormerDesignation : DOCTOR_PROFILE.formerDesignation}
              </p>
              <p>
                <strong className="text-[#E2E8F0]">{t('registration')}</strong>{' '}
                {isHi && DOCTOR_PROFILE.hindiRegistrationCouncil ? DOCTOR_PROFILE.hindiRegistrationCouncil : DOCTOR_PROFILE.registrationCouncil} {isHi ? 'पंजीकरण संख्या' : 'Reg. No.'} {DOCTOR_PROFILE.registrationNumber}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLINIC_SOCIALS.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E2E8F0] hover:text-red-400 hover:bg-white/10 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_SOCIALS.instagramReel}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E2E8F0] hover:text-pink-400 hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_SOCIALS.facebookPost}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E2E8F0] hover:text-blue-400 hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_LOCATION.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#38BDF8] hover:bg-white/10 transition-colors ml-1"
              >
                <span>{isHi ? 'गूगल प्रोफाइल' : 'Google Profile'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Sessions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C28E38]" />
              {t('opdTimings')}
            </h4>

            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-semibold text-[#38BDF8] block">
                  {t('morningSession')}
                </span>
                <span className="text-white font-medium">{t('morningTime')}</span>
                <span className="text-xs text-[#94A3B8] block mt-0.5">{t('monSat')}</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-semibold text-[#F59E0B] block">
                  {t('eveningSession')}
                </span>
                <span className="text-white font-medium">{t('eveningTime')}</span>
                <span className="text-xs text-[#94A3B8] block mt-0.5">{t('monSat')}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="font-semibold text-white">{t('sundaySession')}</span>{' '}
                <span className="text-[#CBD5E1]">{t('sundayTime')}</span>
              </div>

              <p className="text-[11px] text-[#64748B] italic">
                {t('doctorBreak')}
              </p>
            </div>
          </div>

          {/* Column 3: Explore & Clinical Guides (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">
              {t('explore')}
            </h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                  {t('profileLink')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/credentials`} className="hover:text-white transition-colors">
                  {t('credentialsLink')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/conditions`} className="hover:text-white transition-colors">
                  {t('careLink')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/surgeries`} className="hover:text-white transition-colors">
                  {t('surgeriesLink')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/videos`} className="hover:text-white transition-colors">
                  {t('videosLink')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/clinic`} className="hover:text-white transition-colors">
                  {t('clinicLink')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="hover:text-white transition-colors">
                  {t('faqsLink')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  {t('consultLink')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0D7E8A]" />
              {t('addressTitle')}
            </h4>

            <address className="not-italic text-sm text-[#94A3B8] leading-relaxed">
              <p className="font-medium text-white">
                {isHi && CLINIC_LOCATION.hindiName ? CLINIC_LOCATION.hindiName : CLINIC_LOCATION.name}
              </p>
              <p>
                {isHi && CLINIC_LOCATION.hindiAddressLine1 ? CLINIC_LOCATION.hindiAddressLine1 : CLINIC_LOCATION.addressLine1}
              </p>
              <p>
                {isHi && CLINIC_LOCATION.hindiAddressLine2 ? CLINIC_LOCATION.hindiAddressLine2 : CLINIC_LOCATION.addressLine2}
              </p>
              <p>
                {isHi ? 'सिकंदरा, आगरा' : CLINIC_LOCATION.locality + ', ' + CLINIC_LOCATION.city} – {CLINIC_LOCATION.postalCode}
              </p>
              <p className="mt-1 text-xs text-[#CBD5E1]">
                <strong className="text-white">{t('landmark')}</strong>{' '}
                {isHi && CLINIC_LOCATION.hindiLandmark ? CLINIC_LOCATION.hindiLandmark : CLINIC_LOCATION.landmark}
              </p>
            </address>

            <div className="pt-2">
              <a
                href={CLINIC_LOCATION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-lg border border-white/20 transition-colors"
              >
                <span>{t('openMaps')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2">
              <p className="text-xs text-[#94A3B8]">{t('directDesk')}</p>
              <a
                href={`tel:${CLINIC_CONTACT.primaryPhone}`}
                className="text-sm font-semibold text-[#38BDF8] hover:underline"
              >
                {CLINIC_CONTACT.displayPhone}
              </a>
            </div>
          </div>
        </div>

        {/* Insurance and Cashless Note */}
        <div className="py-6 border-b border-[#1E3A5F] text-xs text-[#94A3B8] leading-relaxed">
          <p>
            <strong className="text-[#E2E8F0]">{t('insuranceLabel')}</strong>{' '}
            {isHi
              ? 'अस्पताल में भर्ती प्रक्रिया, जोड़ प्रत्यारोपण एवं फ्रैक्चर सर्जरी हेतु सभी प्रमुख टीपीए (TPA) एवं कैशलेस स्वास्थ्य बीमा की सुविधा उपलब्ध है।'
              : CLINIC_INSURANCE_NOTE}
          </p>
        </div>

        {/* NMC Compliance & Legal Strip */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-[#64748B]">
          <p className="max-w-3xl text-center lg:text-left">
            {isHi ? HINDI_COMPLIANCE_NOTICE : COMPLIANCE_NOTICE}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[#94A3B8]">
            <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <span>•</span>
            <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">
              {t('terms')}
            </Link>
            <span>•</span>
            <Link href={`/${locale}/consent`} className="hover:text-white transition-colors">
              {t('consent')}
            </Link>
            <span>•</span>
            <Link href={`/${locale}/contact#emergency`} className="hover:text-red-400 transition-colors">
              {t('emergency')}
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 text-center text-[11px] text-[#475569]">
          <p>
            © {currentYear} {isHi ? 'डॉ. गौरव शर्मा ऑर्थोपेडिक क्लिनिक' : 'Dr. Gaurav Sharma Orthopaedic Clinic'}. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
