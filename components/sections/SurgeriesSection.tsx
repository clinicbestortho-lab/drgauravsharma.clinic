'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { SURGERIES, SurgeryCategory } from '@/content/surgeries';
import { motion, AnimatePresence } from 'motion/react';
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ComplianceBanner } from '../ui/ComplianceBanner';
import { CLINIC_CONTACT } from '@/lib/clinic';
import { EASE } from '@/lib/animations';

type FilterType = 'All' | SurgeryCategory;

export function SurgeriesSection() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('surgeries');

  const [activeCategory, setActiveCategory] = useState<FilterType>('All');
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const categories: { label: FilterType; displayLabel: string; count: number }[] = useMemo(() => {
    return [
      {
        label: 'All',
        displayLabel: t('allProcedures'),
        count: SURGERIES.length,
      },
      {
        label: 'Joint Replacement',
        displayLabel: t('jointReplacement'),
        count: SURGERIES.filter((s) => s.category === 'Joint Replacement').length,
      },
      {
        label: 'Arthroscopy & Sports',
        displayLabel: t('arthroscopy'),
        count: SURGERIES.filter((s) => s.category === 'Arthroscopy & Sports').length,
      },
      {
        label: 'Trauma & Fractures',
        displayLabel: t('trauma'),
        count: SURGERIES.filter((s) => s.category === 'Trauma & Fractures').length,
      },
      {
        label: 'Daycare Surgeries',
        displayLabel: t('daycare'),
        count: SURGERIES.filter((s) => s.category === 'Daycare Surgeries').length,
      },
    ];
  }, [t]);

  const filteredSurgeries = useMemo(() => {
    if (activeCategory === 'All') return SURGERIES;
    return SURGERIES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const toggleExpand = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <section id="surgeries" className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2744]/8 text-[#0F2744] text-xs font-semibold tracking-wide border border-[#0F2744]/15 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0D7E8A]" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#566474] leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Filter Chips with Live Counts and Motion layoutId Sliding Indicator */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar gap-2">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#E2DBD0] shadow-xs">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.label;

              return (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setActiveCategory(cat.label)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 min-h-[44px] cursor-pointer whitespace-nowrap select-none ${
                    isSelected ? 'text-white' : 'text-[#475569] hover:text-[#0F2744]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="surgery-filter-indicator"
                      className="absolute inset-0 bg-[#0F2744] rounded-xl shadow-xs"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{cat.displayLabel}</span>
                  <span
                    className={`relative z-10 px-1.5 py-0.5 rounded-md text-[11px] font-mono font-bold transition-colors ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-[#FAF8F4] text-[#7C8894] border border-[#E5DFD5]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Re-flowing Procedure Cards (Motion layout animation) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSurgeries.map((surgery) => {
              const isExpanded = expandedSlug === surgery.slug;

              return (
                <motion.div
                  layout
                  key={surgery.slug}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: EASE.power3Out }}
                  className={`rounded-3xl border bg-white shadow-xs transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isExpanded
                      ? 'border-[#0D7E8A] ring-2 ring-[#0D7E8A]/15 md:col-span-2 lg:col-span-3'
                      : 'border-[#E2DBD0] hover:border-[#D1C7B7] hover:shadow-md'
                  }`}
                >
                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <Badge variant="teal" size="sm">
                        {isHi && surgery.hindiCategory ? surgery.hindiCategory : surgery.category}
                      </Badge>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#566474] bg-[#FAF8F4] px-2.5 py-1 rounded-full border border-[#E5DFD5]">
                        <Clock className="w-3.5 h-3.5 text-[#C28E38]" />
                        {isHi && surgery.hindiHospitalStay ? surgery.hindiHospitalStay : surgery.hospitalStay}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2744] leading-snug">
                      {isHi && surgery.hindiTitle ? surgery.hindiTitle : surgery.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-[#475569] mt-3 leading-relaxed">
                      {isHi && surgery.hindiSummary ? surgery.hindiSummary : surgery.summary}
                    </p>

                    {/* Expandable Section Details */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: EASE.power3Out }}
                        className="mt-6 pt-6 border-t border-[#F0EBE1] space-y-6"
                      >
                        {/* Clinical Indication */}
                        <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9]">
                          <div className="flex items-start gap-2.5">
                            <AlertCircle className="w-5 h-5 text-[#0D7E8A] shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744]">
                                {t('indicationHeader')}
                              </h4>
                              <p className="text-xs sm:text-sm text-[#334155] mt-1 leading-relaxed">
                                {isHi && surgery.hindiIndication ? surgery.hindiIndication : surgery.indication}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Operative Highlights */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-3">
                            {t('highlightsHeader')}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {(isHi && surgery.hindiHighlights ? surgery.hindiHighlights : surgery.highlights).map((highlight, idx) => (
                              <div
                                key={idx}
                                className="p-3.5 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9] text-xs sm:text-sm text-[#334155] leading-relaxed flex items-start gap-2.5"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Recovery & Mobilization Timeline */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-4">
                            {t('recoveryHeader')}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                            {surgery.recoveryTimeline.map((milestone, idx) => (
                              <div
                                key={idx}
                                className="relative p-4 rounded-2xl bg-[#0F2744]/5 border border-[#0F2744]/10 space-y-1.5"
                              >
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E8A]">
                                  {isHi && milestone.hindiTimeframe ? milestone.hindiTimeframe : milestone.timeframe}
                                </span>
                                <h5 className="font-serif font-bold text-sm text-[#0F2744]">
                                  {isHi && milestone.hindiHeadline ? milestone.hindiHeadline : milestone.headline}
                                </h5>
                                <p className="text-xs text-[#566474] leading-relaxed">
                                  {isHi && milestone.hindiDescription ? milestone.hindiDescription : milestone.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Expanded Actions */}
                        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#F0EBE1]">
                          <div className="flex flex-wrap items-center gap-3">
                            <Button
                              href={`/${locale}/contact?concern=${encodeURIComponent(surgery.slug)}`}
                              variant="accent"
                              size="md"
                              className="font-semibold"
                            >
                              <Calendar className="w-4 h-4 mr-1.5" />
                              {t('consultDoctor')}
                            </Button>

                            <a
                              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                                isHi
                                  ? `नमस्ते डॉ. गौरव शर्मा क्लिनिक, मुझे ${surgery.hindiTitle || surgery.title} के बारे में जानकारी चाहिए।`
                                  : `Hello Dr. Gaurav Sharma Clinic, I would like to enquire about ${surgery.title}.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366]/15 text-[#075E54] border border-[#25D366]/30 text-xs font-semibold hover:bg-[#25D366]/25 transition-colors min-h-[44px]"
                            >
                              <MessageSquare className="w-4 h-4 text-[#25D366]" />
                              {t('whatsappEnquiry')}
                            </a>
                          </div>

                          <Link
                            href={`/${locale}/surgeries/${surgery.slug}`}
                            className="text-xs font-bold text-[#0F2744] hover:text-[#0D7E8A] hover:underline inline-flex items-center gap-1"
                          >
                            <span>{t('readGuide')}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Card Bottom Actions (Collapsed / Footer) */}
                  <div className="px-6 py-4 bg-[#FAF8F4] border-t border-[#F0EBE1] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleExpand(surgery.slug)}
                      className="text-xs font-bold text-[#0F2744] hover:text-[#0D7E8A] inline-flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                    >
                      <span>{isExpanded ? t('collapse') : t('viewHighlights')}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#0D7E8A]' : ''
                        }`}
                      />
                    </button>

                    <Link
                      href={`/${locale}/surgeries/${surgery.slug}`}
                      className="text-xs font-semibold text-[#0D7E8A] hover:underline inline-flex items-center gap-1"
                    >
                      <span>{t('fullPage')}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Surgery Closing Notice & Ethic Warning */}
        <div className="mt-14">
          <ComplianceBanner showCta={true} ctaConcern="surgical-evaluation" />
        </div>
      </div>
    </section>
  );
}
