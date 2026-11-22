'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Phone, MessageSquare, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { CLINIC_CONTACT, CLINIC_LOCATION } from '@/lib/clinic';
import { Button } from '../ui/Button';

interface BookingCTAProps {
  concern?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function BookingCTA({
  concern,
  title,
  subtitle,
  className = '',
}: BookingCTAProps) {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('cta');

  const displayTitle = title || t('title');
  const displaySubtitle = subtitle || t('subtitle');

  const bookingUrl = concern
    ? `/${locale}/contact?concern=${encodeURIComponent(concern)}`
    : `/${locale}/contact`;

  const whatsappUrl = `https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    concern
      ? isHi
        ? `नमस्ते डॉ. गौरव शर्मा क्लिनिक, मुझे ${concern} के बारे में परामर्श लेना है।`
        : `Hello Dr. Gaurav Sharma Clinic, I would like to consult regarding ${concern}.`
      : isHi
      ? 'नमस्ते डॉ. गौरव शर्मा क्लिनिक, मुझे परामर्श हेतु अपॉइंटमेंट लेना है।'
      : CLINIC_CONTACT.whatsappPrefill
  )}`;

  return (
    <section className={`py-16 md:py-20 bg-[#FAF8F4] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F2744] via-[#15345C] to-[#0A1A2E] text-white p-8 md:p-14 shadow-xl border border-[#1E4273]">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#0D7E8A]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#C28E38]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#38BDF8] text-xs font-semibold tracking-wide border border-white/15">
                <Clock className="w-3.5 h-3.5" />
                <span>{t('badge')}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                {displayTitle}
              </h2>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl">
                {displaySubtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#94A3B8]">
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t('bullet1')}
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t('bullet2')}
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t('bullet3')}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Button
                href={bookingUrl}
                variant="accent"
                size="lg"
                className="w-full text-base font-semibold shadow-md"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('bookBtn')}
              </Button>

              <a
                href={`tel:${CLINIC_CONTACT.primaryPhone}`}
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full min-h-[44px] px-6 py-2.5 text-base gap-2 bg-white text-[#0F2744] hover:bg-[#F4EFE6] border border-white shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#0D7E8A]" />
                {t('callBtn', { phone: CLINIC_CONTACT.displayPhone })}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full min-h-[44px] px-6 py-2.5 text-base gap-2 bg-[#25D366]/20 text-[#86EFAC] hover:bg-[#25D366]/30 border border-[#25D366]/40 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                {t('whatsappBtn')}
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#94A3B8] flex flex-wrap items-center justify-between gap-3">
            <span>
              <strong>{t('addressLabel')}</strong>{' '}
              {isHi
                ? `${CLINIC_LOCATION.hindiAddressLine1}, ${CLINIC_LOCATION.hindiLandmark}`
                : `${CLINIC_LOCATION.addressLine1}, ${CLINIC_LOCATION.locality}, Agra (${CLINIC_LOCATION.landmark})`}
            </span>
            <span className="text-white/80">
              {t('timings')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
