'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { AREAS_OF_CARE, AreaOfCare } from '@/content/conditions';
import {
  Activity,
  ArrowRight,
  ShieldCheck,
  Layers,
  Compass,
  Maximize2,
  RotateCw,
  Zap,
  Crosshair,
  HeartPulse,
  HelpCircle,
  Users,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { EASE } from '@/lib/animations';

export function AreasOfCare({ asH1 = false }: { asH1?: boolean } = {}) {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('areasOfCare');
  const [selectedCare, setSelectedCare] = useState<AreaOfCare | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#0D7E8A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C28E38]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#0F2744]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#0D7E8A]" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-[#0F2744]" />;
      case 'RotateCw':
        return <RotateCw className="w-5 h-5 text-[#C28E38]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#0D7E8A]" />;
      case 'Crosshair':
        return <Crosshair className="w-5 h-5 text-[#0F2744]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#15803D]" />;
      default:
        return <Activity className="w-5 h-5 text-[#0D7E8A]" />;
    }
  };

  return (
    <section id="areas-of-care" className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E8A] block mb-2">
              {t('badge')}
            </span>
            {asH1 ? (
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
                {t('title')}
              </h1>
            ) : (
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
                {t('title')}
              </h2>
            )}
            <p className="mt-3 text-base text-[#566474] leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="shrink-0">
            <Button href={`/${locale}/conditions`} variant="outline" size="md">
              {t('viewAll')}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Bento Grid (9 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS_OF_CARE.map((area, idx) => (
            <div
              key={area.slug}
              className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(area.iconName)}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCare(area)}
                    className="text-xs font-semibold text-[#0D7E8A] hover:underline px-2.5 py-1 rounded-full bg-[#0D7E8A]/8 hover:bg-[#0D7E8A]/15 transition-colors cursor-pointer"
                  >
                    {t('quickInsights')}
                  </button>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#0F2744] group-hover:text-[#0D7E8A] transition-colors leading-snug">
                  {isHi ? area.hindiTitle : area.title}
                </h3>
                {!isHi && (
                  <p className="text-xs text-[#7C8894] mt-0.5">
                    {area.hindiTitle}
                  </p>
                )}

                <p className="text-sm text-[#475569] mt-3 leading-relaxed">
                  {isHi && area.hindiShortSummary ? area.hindiShortSummary : area.shortSummary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                <Link
                  href={`/${locale}/conditions/${area.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2744] group-hover:text-[#0D7E8A] transition-colors"
                >
                  <span>{t('exploreGuide')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-[#94A3B8] font-mono">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal / Drawer when "Quick Insights" is clicked */}
        <AnimatePresence>
          {selectedCare && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.25, ease: EASE.power3Out }}
                className="bg-white rounded-3xl border border-[#E2DBD0] max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] space-y-6"
              >
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#F0EBE1]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E8A]">
                      {t('quickInsights')}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0F2744] mt-1">
                      {isHi ? selectedCare.hindiTitle : selectedCare.title}
                    </h3>
                    {!isHi && (
                      <p className="text-xs text-[#7C8894]">
                        {selectedCare.hindiTitle}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCare(null)}
                    aria-label="Close dialog"
                    className="p-2 rounded-full hover:bg-[#FAF8F4] text-[#566474] hover:text-[#0F2744] cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {/* Who Should Consult */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-2.5 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#0D7E8A]" />
                    {t('whoConsult')}
                  </h4>
                  <ul className="space-y-1.5">
                    {(isHi && selectedCare.hindiWhoShouldConsult ? selectedCare.hindiWhoShouldConsult : selectedCare.whoShouldConsult).map((item, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#475569] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D7E8A] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Common Questions Evaluated */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-2.5 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C28E38]" />
                    {t('commonQuestions')}
                  </h4>
                  <ul className="space-y-1.5">
                    {(isHi && selectedCare.hindiCommonQuestions ? selectedCare.hindiCommonQuestions : selectedCare.commonQuestions).map((q, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#475569] bg-[#FAF8F4] p-2.5 rounded-xl border border-[#EAE4D9]">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F0EBE1] flex flex-wrap items-center justify-between gap-4">
                  <Button
                    href={`/${locale}/conditions/${selectedCare.slug}`}
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    {t('readPage')}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button
                    href={`/${locale}/contact?concern=${encodeURIComponent(selectedCare.slug)}`}
                    variant="accent"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    {t('consult')}
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
