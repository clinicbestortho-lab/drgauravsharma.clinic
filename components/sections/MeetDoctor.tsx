'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import {
  DOCTOR_PROFILE,
  CLINIC_TIMINGS,
} from '@/lib/clinic';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../motion/Reveal';

export function MeetDoctor() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('meetDoctor');

  const docName = isHi && DOCTOR_PROFILE.hindiName ? DOCTOR_PROFILE.hindiName : DOCTOR_PROFILE.name;
  const docFormer = isHi && DOCTOR_PROFILE.hindiFormerDesignation ? DOCTOR_PROFILE.hindiFormerDesignation : DOCTOR_PROFILE.formerDesignation;
  const bio1 = isHi && DOCTOR_PROFILE.hindiBioDetailed ? DOCTOR_PROFILE.hindiBioDetailed[0] : DOCTOR_PROFILE.bioDetailed[0];
  const bio2 = isHi && DOCTOR_PROFILE.hindiBioDetailed ? DOCTOR_PROFILE.hindiBioDetailed[1] : DOCTOR_PROFILE.bioDetailed[1];
  const focusAreas = isHi && DOCTOR_PROFILE.hindiFocusAreas ? DOCTOR_PROFILE.hindiFocusAreas : DOCTOR_PROFILE.focusAreas;

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Doctor Portrait / Clinical Credentials Visual (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal direction="right" distance={24}>
              <div className="rounded-3xl bg-white border border-[#E2DBD0] p-6 sm:p-8 shadow-md relative overflow-hidden">
                <div className="aspect-[4/5] rounded-2xl relative overflow-hidden bg-slate-900 shadow-md group mb-6">
                  <Image
                    src="/images/doctor-portrait.jpg"
                    alt={docName}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/75 backdrop-blur-md text-amber-400 text-xs font-bold border border-white/15 shadow-sm">
                      <Award className="w-3.5 h-3.5" />
                      <span>{isHi ? 'एम.एस. (हड्डी रोग)' : 'MS (Orthopaedics)'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-950/75 backdrop-blur-md text-[#38BDF8] text-xs font-mono font-medium border border-white/15 shadow-sm">
                      {isHi ? 'पंजी. 48757 UPMC' : 'Reg: 48757 UPMC'}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none text-white">
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {docName}
                    </h3>
                    <p className="text-xs text-[#38BDF8] font-medium tracking-wide mt-0.5">
                      {DOCTOR_PROFILE.degrees.join(' • ')}
                    </p>
                    <p className="text-xs text-[#CBD5E1] mt-0.5">
                      {docFormer}
                    </p>
                  </div>
                </div>

                {/* Session Timings Overview */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C8894] block">
                    {t('sessionHeading')}
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9]">
                      <span className="font-bold text-[#0F2744] block">
                        {isHi ? CLINIC_TIMINGS[0].hindiLabel : CLINIC_TIMINGS[0].label}
                      </span>
                      <span className="text-[#566474]">
                        {isHi && CLINIC_TIMINGS[0].hindiTime ? CLINIC_TIMINGS[0].hindiTime : CLINIC_TIMINGS[0].time}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9]">
                      <span className="font-bold text-[#0F2744] block">
                        {isHi ? CLINIC_TIMINGS[2].hindiLabel : CLINIC_TIMINGS[2].label}
                      </span>
                      <span className="text-[#566474]">
                        {isHi && CLINIC_TIMINGS[2].hindiTime ? CLINIC_TIMINGS[2].hindiTime : CLINIC_TIMINGS[2].time}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#64748B] italic">
                    {isHi
                      ? '* दोपहर 04:00 से 06:00 बजे डॉक्टर ब्रेक सर्जिकल केस व अस्पताल राउंड हेतु आरक्षित है।'
                      : '* Doctor break 04:00 PM–06:00 PM reserved for surgical cases & inpatient rounds.'}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Doctor Bio & Key Clinical Focus (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" distance={20}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2744]/8 text-[#0F2744] text-xs font-semibold tracking-wide border border-[#0F2744]/15">
                <UserCheck className="w-3.5 h-3.5 text-[#0D7E8A]" />
                <span>{t('badge')}</span>
              </div>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0F2744] tracking-tight leading-tight">
                {t('title')}
              </h2>
              <p className="text-base text-[#0D7E8A] font-semibold mt-1">
                {t('subtitle')}
              </p>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.2}>
              <div className="space-y-4 text-base text-[#475569] leading-relaxed">
                <p>{bio1}</p>
                <p>{bio2}</p>
              </div>
            </Reveal>

            {/* Key Clinical Focus Areas */}
            <Reveal direction="up" distance={20} delay={0.3}>
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-3">
                  {t('keyFocusHeading')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A2530]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0D7E8A] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.4}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button href="/about" variant="primary" size="md">
                  {t('viewFullProfile')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <Button href="/credentials" variant="secondary" size="md">
                  <ShieldCheck className="w-4 h-4 mr-1 text-[#0D7E8A]" />
                  {isHi ? 'यूपीएमसी पंजीकरण सत्यापन' : 'Verify UPMC Registration'}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
