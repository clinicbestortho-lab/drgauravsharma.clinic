'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  Stethoscope,
  ScanLine,
  Activity,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../ui/Button';

export function PatientJourney() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('patientJourney');

  const steps = [
    {
      number: t('step1Num'),
      title: t('step1Title'),
      subtitle: t('step1Sub'),
      description: t('step1Desc'),
      keyFocus: isHi
        ? [
            'जोड़ का स्पर्श परीक्षण, सूजन, गर्माहट एवं विकृति की जांच',
            'चलने के ढंग (गैट) और पैर पर वजन संभालने की क्षमता का विश्लेषण',
            'दर्द का इतिहास, पूर्व में किए गए इलाज और दैनिक जीवन की जरूरतों की समीक्षा',
          ]
        : [
            'Hands-on joint inspection, warmth, swelling, and deformity check',
            'Functional gait observation and weight-bearing limb stability',
            'Comprehensive timeline review of pain, past treatments, and lifestyle demands',
          ],
      icon: Stethoscope,
    },
    {
      number: t('step2Num'),
      title: t('step2Title'),
      subtitle: t('step2Sub'),
      description: t('step2Desc'),
      keyFocus: isHi
        ? [
            'खड़े होकर लिए गए डिजिटल एक्स-रे से कार्टिलेज के वास्तविक घिसाव का आकलन',
            'हड्डियों के किनारों पर बढ़े उभार (ऑस्टियोफाइट्स) या विकृति की सीधी पहचान',
            'एमआरआई रिपोर्ट को मरीज के दर्द वाले मुख्य बिंदुओं से प्रत्यक्ष मिलाना',
          ]
        : [
            'Weight-bearing digital radiographs assessing real cartilage space',
            'Direct identification of bone spurs, subchondral sclerosis, or loose bodies',
            'Correlation of MRI findings with exact physical tender points',
          ],
      icon: ScanLine,
    },
    {
      number: t('step3Num'),
      title: t('step3Title'),
      subtitle: t('step3Sub'),
      description: t('step3Desc'),
      keyFocus: isHi
        ? [
            'जोड़ के घिसाव की अवस्था के अनुसार बिना सर्जरी सुरक्षित दवा व व्यायाम प्रोटोकॉल',
            'यदि सर्जरी आवश्यक हो, तो आधुनिक टिशू-प्रिजर्विंग तकनीक से पहले दिन खड़ा करना',
            'नियमित फॉलो-अप द्वारा मरीज की सुरक्षित गतिशीलता और दर्दमुक्ति की निगरानी',
          ]
        : [
            'Stage-specific conservative joint preservation regimens',
            'Advanced tissue-sparing surgical techniques for Day-1 standing',
            'Close follow-up schedule monitoring progressive mobility gains',
          ],
      icon: Activity,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D7E8A]/10 text-[#095962] text-xs font-semibold tracking-wide border border-[#0D7E8A]/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#566474] leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#0F2744]">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0F2744]/8 text-[#0F2744] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#0D7E8A]" />
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E8A] block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0F2744] mt-1 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#475569] mt-3 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#F0EBE1] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F2744] block">
                      {t('keyFocus')}
                    </span>
                    <ul className="space-y-2">
                      {step.keyFocus.map((focus, i) => (
                        <li
                          key={i}
                          className="text-xs text-[#334155] flex items-start gap-2.5 leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conservative Management Before Surgery Callout */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0F2744] to-[#16365D] text-white p-8 sm:p-10 shadow-lg border border-[#1E4273]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#38BDF8] text-xs font-semibold tracking-wide border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('pledgeBadge')}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t('pledgeTitle')}
              </h3>
              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                {t('pledgeDesc')}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Button href={`/${locale}/contact`} variant="accent" size="lg" className="w-full sm:w-auto font-semibold">
                {t('requestEval')}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
