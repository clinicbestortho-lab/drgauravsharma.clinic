'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ShieldCheck, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { DOCTOR_PROFILE } from '@/lib/clinic';

export function CredentialsStrip() {
  const locale = useLocale();
  const t = useTranslations('credentialsStrip');

  return (
    <section className="bg-[#0F2744] text-white py-10 border-y border-[#1E4273]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
          {/* Item 1: Registration */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 border border-white/15">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider block font-semibold">
                {t('regLabel')}
              </span>
              <span className="text-sm font-bold text-white block">
                {t('regValue')}
              </span>
            </div>
          </div>

          {/* Item 2: Surgical Qualification */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F59E0B] shrink-0 border border-white/15">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider block font-semibold">
                {t('degreeLabel')}
              </span>
              <span className="text-sm font-bold text-white block">
                {t('degreeValue')}
              </span>
            </div>
          </div>

          {/* Item 3: Faculty Background */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 border border-white/15">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider block font-semibold">
                {t('profLabel')}
              </span>
              <span className="text-sm font-bold text-white block">
                {t('profValue')}
              </span>
            </div>
          </div>

          {/* Item 4: Experience */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#34D399] shrink-0 border border-white/15">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider block font-semibold">
                {t('expLabel')}
              </span>
              <span className="text-sm font-bold text-white block">
                {t('expValue')}
              </span>
            </div>
          </div>

          {/* Link Action */}
          <div className="flex justify-start lg:justify-end">
            <Link
              href={`/${locale}/credentials`}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#38BDF8] hover:text-white border border-white/20 transition-all duration-200"
            >
              <span>{t('viewAll')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
