'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import {
  DOCTOR_PROFILE,
  CLINIC_TIMINGS,
} from '@/lib/clinic';
import {
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  GraduationCap,
  Building2,
} from 'lucide-react';
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
          {/* Academic & Clinical Credentials Dossier (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal direction="right" distance={24}>
              <div className="rounded-3xl bg-white border border-[#E2DBD0] p-6 sm:p-7 shadow-lg relative overflow-hidden">
                {/* Decorative background watermark */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-[#0D7E8A]/10 to-transparent rounded-bl-full pointer-events-none" />

                {/* Dossier Header */}
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#F0EBE1] relative">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0F2744] flex items-center justify-center text-white shadow-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D7E8A] block">
                        {t('dossierBadge')}
                      </span>
                      <span className="text-xs font-semibold text-[#0F2744]">
                        {t('upmcVerified')}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-semibold bg-[#0F2744]/8 text-[#0F2744] px-2.5 py-1 rounded-full border border-[#0F2744]/15 shrink-0">
                    {t('regNumber')}
                  </span>
                </div>

                {/* Academic & Surgical Pedigree Box */}
                <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-[#0F2744] to-[#16365D] text-white shadow-md relative overflow-hidden">
                  <div className="relative z-10 space-y-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>{t('qualificationDegree')}</span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        {docName}
                      </h3>
                      <p className="text-xs text-[#94A3B8] font-medium mt-0.5">
                        {isHi ? DOCTOR_PROFILE.hindiDesignation : DOCTOR_PROFILE.designation}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
                      <div className="flex items-start gap-2 text-[#E2E8F0]">
                        <GraduationCap className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white block">
                            {t('facultyTenure')}
                          </span>
                          <span className="text-[11px] text-[#94A3B8]">
                            {t('facultyDept')}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-[#E2E8F0]">
                        <Building2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white block">
                            {t('practiceMilestone')}
                          </span>
                          <span className="text-[11px] text-[#94A3B8]">
                            {t('practiceSub')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Standards Checklist */}
                <div className="mb-5 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C8894] block">
                    {t('ethicsHeading')}
                  </span>
                  <div className="space-y-1.5 text-xs text-[#334155]">
                    <div className="flex items-start gap-2 p-2 rounded-lg bg-[#FAF8F4] border border-[#EAE4D9]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E8A] shrink-0 mt-0.5" />
                      <span>{t('ethic1')}</span>
                    </div>
                    <div className="flex items-start gap-2 p-2 rounded-lg bg-[#FAF8F4] border border-[#EAE4D9]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E8A] shrink-0 mt-0.5" />
                      <span>{t('ethic2')}</span>
                    </div>
                    <div className="flex items-start gap-2 p-2 rounded-lg bg-[#FAF8F4] border border-[#EAE4D9]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E8A] shrink-0 mt-0.5" />
                      <span>{t('ethic3')}</span>
                    </div>
                  </div>
                </div>

                {/* Session Timings Overview */}
                <div className="space-y-2.5 pt-4 border-t border-[#F0EBE1]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C8894] block">
                    {t('sessionHeading')}
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9]">
                      <span className="font-bold text-[#0F2744] block">
                        {isHi ? CLINIC_TIMINGS[0].hindiLabel : CLINIC_TIMINGS[0].label}
                      </span>
                      <span className="text-[#566474]">
                        {isHi && CLINIC_TIMINGS[0].hindiTime ? CLINIC_TIMINGS[0].hindiTime : CLINIC_TIMINGS[0].time}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9]">
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
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-3">
                  {t('keyFocusHeading')}
                </h3>
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
