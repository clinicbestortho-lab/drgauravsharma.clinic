'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import {
  CLINIC_LOCATION,
  CLINIC_TIMINGS,
  CLINIC_CONTACT,
  CLINIC_INSURANCE_NOTE,
} from '@/lib/clinic';
import {
  MapPin,
  Clock,
  Navigation,
  CreditCard,
  Building,
  Car,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { Button } from '../ui/Button';

export function ClinicLocation() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('clinicLocation');

  return (
    <section id="clinic-location" className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D7E8A]/10 text-[#095962] text-xs font-semibold tracking-wide border border-[#0D7E8A]/20 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#566474] leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Hours, Insurance & Localities (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0F2744]/8 text-[#0F2744] flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-[#0D7E8A]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E8A]">
                    {t('facilityLabel')}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0F2744] mt-0.5">
                    {isHi && CLINIC_LOCATION.hindiName ? CLINIC_LOCATION.hindiName : CLINIC_LOCATION.name}
                  </h3>
                  <address className="not-italic text-sm text-[#475569] mt-2 leading-relaxed">
                    <p className="font-semibold text-[#1A2530]">
                      {isHi && CLINIC_LOCATION.hindiAddressLine1
                        ? CLINIC_LOCATION.hindiAddressLine1
                        : CLINIC_LOCATION.addressLine1}
                    </p>
                    <p>
                      {isHi && CLINIC_LOCATION.hindiAddressLine2
                        ? CLINIC_LOCATION.hindiAddressLine2
                        : CLINIC_LOCATION.addressLine2}
                    </p>
                    <p>
                      {isHi ? 'सिकंदरा, आगरा' : CLINIC_LOCATION.locality + ', ' + CLINIC_LOCATION.city} – {CLINIC_LOCATION.postalCode}, {isHi ? 'उत्तर प्रदेश' : CLINIC_LOCATION.state}
                    </p>
                  </address>
                </div>
              </div>

              {/* Landmark Callout */}
              <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] text-xs sm:text-sm text-[#334155]">
                <strong className="text-[#0F2744]">{t('landmark')}</strong>{' '}
                {isHi && CLINIC_LOCATION.hindiLandmark ? CLINIC_LOCATION.hindiLandmark : CLINIC_LOCATION.landmark}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  href={CLINIC_LOCATION.mapsUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  className="font-semibold shadow-xs"
                >
                  <Navigation className="w-4 h-4 mr-1.5" />
                  {t('getDirections')}
                </Button>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                    isHi
                      ? 'नमस्ते डॉ. गौरव शर्मा क्लिनिक, कृपया क्लिनिक की लोकेशन और परामर्श समय साझा करें।'
                      : CLINIC_CONTACT.whatsappPrefill
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25D366]/15 text-[#075E54] border border-[#25D366]/30 text-xs font-semibold hover:bg-[#25D366]/25 transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>{t('whatsappLocation')}</span>
                </a>
              </div>
            </div>

            {/* OPD Consultation Hours */}
            <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-8 shadow-xs space-y-4">
              <h4 className="font-serif text-xl font-bold text-[#0F2744] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C28E38]" />
                {t('scheduleTitle')}
              </h4>

              <div className="space-y-3">
                {CLINIC_TIMINGS.map((timing, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#0F2744] block">
                        {isHi && timing.hindiLabel ? timing.hindiLabel : timing.label}
                      </span>
                      <span className="text-xs text-[#64748B]">
                        {isHi && timing.hindiDays ? timing.hindiDays : timing.days}
                      </span>
                      {timing.note && (
                        <span className="text-[11px] text-[#C28E38] block mt-0.5">
                          {isHi && timing.hindiNote ? timing.hindiNote : timing.note}
                        </span>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#0F2744] bg-white px-3 py-1 rounded-lg border border-[#E2DBD0] self-start sm:self-center">
                      {isHi && timing.hindiTime ? timing.hindiTime : timing.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance & TPA Note */}
            <div className="p-5 rounded-3xl bg-[#0F2744]/5 border border-[#0F2744]/15 flex items-start gap-3.5">
              <CreditCard className="w-5 h-5 text-[#0D7E8A] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0F2744]">
                  {t('insuranceTitle')}
                </h5>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                  {isHi
                    ? 'क्लिनिक ओपीडी परामर्श शुल्क ₹500 एवं इन-हाउस एक्स-रे की सुविधा उपलब्ध है। अस्पताल में भर्ती, जोड़ प्रत्यारोपण एवं फ्रैक्चर सर्जरी हेतु आयुष्मान भारत कार्ड (PM-JAY) व सभी प्रमुख टीपीए (TPA) कैशलेस स्वास्थ्य बीमा पैनलों की सुविधा संबद्ध अस्पतालों में उपलब्ध है।'
                    : CLINIC_INSURANCE_NOTE}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map & Travel Guide (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Interactive Google Map */}
            <div className="bg-white rounded-3xl border border-[#E2DBD0] overflow-hidden shadow-xs">
              <div className="p-4 sm:p-5 border-b border-[#F0EBE1] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#0F2744]">
                    {t('interactiveMap')}
                  </h4>
                  <p className="text-xs text-[#7C8894]">
                    {isHi ? 'सत्यम कॉम्प्लेक्स, सेक्टर-12A, सिकंदरा, आगरा' : 'Satyam Complex, Sector-12A, Sikandra'}
                  </p>
                </div>
                <a
                  href={CLINIC_LOCATION.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0D7E8A] hover:underline flex items-center gap-1"
                >
                  <span>{t('openFullMap')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative aspect-[16/10] bg-[#E2E8F0] w-full flex items-center justify-center">
                <iframe
                  title="Dr Gaurav Sharma Clinic Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    'Satyam Complex Sector 12A Sikandra Agra'
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  className="border-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Visiting from Agra & Nearby Guide */}
            <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-7 shadow-xs space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#0F2744] flex items-center gap-2">
                <Car className="w-5 h-5 text-[#0D7E8A]" />
                {t('visitingTitle')}
              </h4>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {t('visitingIntro')}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                {(isHi && CLINIC_LOCATION.hindiLocalitiesServed
                  ? CLINIC_LOCATION.hindiLocalitiesServed
                  : CLINIC_LOCATION.localitiesServed
                ).map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9] text-xs font-medium text-[#334155] text-center"
                  >
                    {loc}
                  </div>
                ))}
              </div>

              {/* Regional ~150km Corridor & Outstation Pre-Travel Check */}
              <div className="pt-4 border-t border-[#F0EBE1] space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#0D7E8A]" />
                  <span>{t('outstationTitle')}</span>
                </h5>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {t('outstationDesc')}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(isHi && CLINIC_LOCATION.hindiRegionalDistrictsServed
                    ? CLINIC_LOCATION.hindiRegionalDistrictsServed
                    : CLINIC_LOCATION.regionalDistrictsServed
                  ).map((city, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-[#0F2744]/5 border border-[#0F2744]/10 text-[11px] font-medium text-[#0F2744]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                    isHi
                      ? 'नमस्ते डॉ. गौरव शर्मा क्लिनिक, मैं आगरा के बाहर से आ रहा/रही हूँ। कृपया मेरे परामर्श समय व रिपोर्ट जांच हेतु मार्गदर्शन करें।'
                      : 'Hello Dr. Gaurav Sharma Clinic, I am planning to travel from outside Agra for a consultation. Could you please confirm OPD slot availability before I travel?'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#0D7E8A]/10 hover:bg-[#0D7E8A]/15 text-[#095962] border border-[#0D7E8A]/25 text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#0D7E8A]" />
                  <span>{t('outstationCta')}</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-[#64748B] leading-relaxed border-t border-[#F0EBE1]">
                <strong className="text-[#1A2530]">{t('transitTip')}</strong>{' '}
                {t('transitTipText')}
              </div>
            </div>
          </div>
        </div>

        {/* Real Clinic & Surgical Environment Gallery */}
        <div className="mt-14 pt-12 border-t border-[#EAE4D9]">
          <div className="max-w-2xl mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2744]">
              {t('galleryTitle')}
            </h3>
            <p className="text-sm text-[#566474] mt-1.5">
              {t('gallerySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                src: '/images/clinic/viewbox-consultation.jpg',
                title: t('gal1Title'),
                desc: t('gal1Desc'),
                pos: 'object-center',
              },
              {
                src: '/images/clinic/consultation-chamber.jpg',
                title: t('gal2Title'),
                desc: t('gal2Desc'),
                pos: 'object-center',
              },
              {
                src: '/images/clinic/ot-hip-prosthesis.jpg',
                title: t('gal3Title'),
                desc: t('gal3Desc'),
                pos: 'object-top',
              },
              {
                src: '/images/clinic/c-arm-orif-fixation.jpg',
                title: t('gal4Title'),
                desc: t('gal4Desc'),
                pos: 'object-center',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-[#E2DBD0] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={`${item.title} — ${item.desc}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover ${item.pos} group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>
                <div className="p-4 space-y-1 flex-1">
                  <h4 className="font-serif font-bold text-sm text-[#0F2744]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#566474] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
