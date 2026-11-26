'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { FAQS, FaqCategory } from '@/content/faqs';
import { getFaqPageJsonLd } from '@/lib/seo';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { motion, AnimatePresence } from 'motion/react';
import { EASE } from '@/lib/animations';

export function FaqSection({ limit }: { limit?: number }) {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('faq');

  const [activeCategory, setActiveCategory] = useState<FaqCategory>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-how-to-book');

  const categoryMap: { key: FaqCategory; label: string }[] = useMemo(() => [
    { key: 'All', label: t('catAll') },
    { key: 'General', label: t('catGeneral') },
    { key: 'Before Consultation', label: t('catBefore') },
    { key: 'Appointments', label: t('catAppointments') },
    { key: 'Clinic', label: t('catClinic') },
    { key: 'Treatment Information', label: t('catTreatment') },
    { key: 'Recovery', label: t('catRecovery') },
  ], [t]);

  const filteredFaqs = useMemo(() => {
    let list =
      activeCategory === 'All'
        ? FAQS
        : FAQS.filter((f) => f.category === activeCategory);

    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }
    return list;
  }, [activeCategory, limit]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-14 md:py-20 bg-white border-b border-[#EAE4D9]">
      {/* FAQPage JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqPageJsonLd(filteredFaqs)),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2744]/8 text-[#0F2744] text-xs font-semibold tracking-wide border border-[#0F2744]/15 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C28E38]" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-base text-[#566474] leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 no-scrollbar gap-2">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#E2DBD0] shadow-xs">
            {categoryMap.map((cat) => {
              const isSelected = activeCategory === cat.key;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[38px] whitespace-nowrap cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#0F2744] text-white shadow-xs'
                      : 'text-[#475569] hover:text-[#0F2744]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E2DBD0] overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F4]/50 transition-colors"
                >
                  <div className="space-y-1 pr-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E8A]">
                      {isHi
                        ? faq.category === 'Appointments'
                          ? 'अपॉइंटमेंट'
                          : faq.category === 'Before Consultation'
                          ? 'परामर्श पूर्व तैयारी'
                          : faq.category === 'Clinic'
                          ? 'क्लिनिक व स्थान'
                          : faq.category === 'Treatment Information'
                          ? 'उपचार व सर्जरी'
                          : faq.category === 'Recovery'
                          ? 'रिकवरी व देखभाल'
                          : 'सामान्य जानकारी'
                        : faq.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#0F2744] leading-snug">
                      {isHi && faq.hindiQuestion ? faq.hindiQuestion : faq.question}
                    </h3>
                    {!isHi && faq.hindiQuestion && (
                      <p className="text-xs text-[#7C8894] font-normal">
                        {faq.hindiQuestion}
                      </p>
                    )}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#FAF8F4] border border-[#E2DBD0] flex items-center justify-center shrink-0 text-[#0F2744]">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0D7E8A]' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE.power3Out }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#475569] leading-relaxed border-t border-[#F0EBE1] space-y-2">
                        <p>
                          {(isHi && faq.hindiAnswer ? faq.hindiAnswer : faq.answer).replace(
                            '// NEEDS DOCTOR REVIEW: ',
                            ''
                          )}
                        </p>
                        {faq.doctorReviewFlag && (
                          <div className="pt-2">
                            <Badge variant="gold" size="sm">
                              {isHi ? 'डॉक्टर समीक्षा हेतु चिन्हित' : 'Flagged for Doctor Review'}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* View All FAQs Link if limit is applied */}
        {limit && (
          <div className="mt-10 text-center">
            <Button href={`/${locale}/faq`} variant="outline" size="md">
              {t('viewAll', { count: FAQS.length })}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
