'use client';

import React, { useRef, useEffect } from 'react';
import { HeartHandshake } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export interface PhilosophyStep {
  number: string;
  title: string;
  hindiTitle: string;
  subtitle: string;
  hindiSubtitle: string;
  description: string;
  hindiDescription: string;
  clinicalActions: string[];
  hindiClinicalActions: string[];
}

const PHILOSOPHY_STEPS: PhilosophyStep[] = [
  {
    number: '01',
    title: 'Understanding Your Condition',
    hindiTitle: 'रोग की गहन समझ व सटीक परीक्षण',
    subtitle: 'Comprehensive Physical Examination & Diagnostic Correlation',
    hindiSubtitle: 'विस्तृत शारीरिक जांच एवं एक्स-रे/एमआरआई फिल्मों का प्रत्यक्ष मिलान',
    description:
      'We do not treat imaging reports in isolation. Every consultation begins with hands-on physical joint testing, gait observation, and direct review of your physical X-rays or MRI films on the viewbox with you.',
    hindiDescription:
      'हम केवल रिपोर्टों के आधार पर इलाज नहीं करते। प्रत्येक परामर्श की शुरुआत प्रत्यक्ष शारीरिक जोड़ परीक्षण, चाल के अवलोकन और क्लिनिक में आपके साथ एक्स-रे व एमआरआई फिल्मों की विस्तृत जांच से होती है।',
    clinicalActions: [
      'Detailed clinical history taking regarding functional limitations and pain timeline',
      'Joint stability, range of motion, and ligament integrity assessments',
      'Direct explanation of radiographic wear, alignment angles, and joint space',
    ],
    hindiClinicalActions: [
      'दर्द के इतिहास और दैनिक जीवन में आने वाली रुकावटों की संपूर्ण जानकारी',
      'जोड़ की स्थिरता, लचक और लिगामेंट की मजबूती का प्रत्यक्ष शारीरिक परीक्षण',
      'एक्स-रे फिल्मों पर जोड़ के घिसाव व अलाइनमेंट का मरीज को सरल भाषा में विवरण',
    ],
  },
  {
    number: '02',
    title: 'Understanding Your Options',
    hindiTitle: 'उपचार विकल्पों की पूर्ण पारदर्शिता',
    subtitle: 'Transparent Non-Surgical & Surgical Alternatives',
    hindiSubtitle: 'बिना सर्जरी व सर्जिकल विकल्पों की स्पष्ट व ईमानदार तुलना',
    description:
      'We outline both conservative joint preservation pathways and surgical interventions in clear, plain language. You are guided through the exact indications, expected timelines, and realistic goals of each approach.',
    hindiDescription:
      'हम बिना सर्जरी जोड़ संरक्षण और सर्जिकल विकल्पों दोनों को स्पष्ट, सरल भाषा में समझाते हैं। मरीज को प्रत्येक विकल्प के लाभ, समयसीमा और वास्तविक परिणामों की पूरी जानकारी दी जाती है।',
    clinicalActions: [
      'Exhausting non-operative modalities: physical therapy, bracing, and injections',
      'Clear definition of when surgery becomes necessary vs. optional',
      'Frank discussion of implant materials, surgical risks, and longevity data',
    ],
    hindiClinicalActions: [
      'सर्वप्रथम गैर-सर्जिकल उपचार: फिजियोथेरेपी, ब्रेस और बायोलॉजिकल इंजेक्शन',
      'सर्जरी कब अनिवार्य है और कब वैकल्पिक, इसका स्पष्ट चिकित्सकीय अंतर',
      'इम्प्लांट सामग्री, संभावित जोखिम और जोड़ की उम्र (20-25 वर्ष) पर खुली चर्चा',
    ],
  },
  {
    number: '03',
    title: 'Planning the Next Step',
    hindiTitle: 'व्यक्तिगत उपचार योजना व तैयारी',
    subtitle: 'Precision Templating & Individualized Care Roadmap',
    hindiSubtitle: 'सटीक डिजिटल टेम्पलेटिंग और सुगम उपचार योजना',
    description:
      'If surgical intervention is indicated, meticulous pre-operative digital templating ensures that implants are sized and positioned to match your unique bone anatomy. For conservative care, structured physical therapy milestones are defined.',
    hindiDescription:
      'यदि सर्जरी आवश्यक हो, तो डिजिटल टेम्पलेटिंग द्वारा इम्प्लांट के आकार और स्थिति को आपकी प्राकृतिक हड्डी के अनुसार निर्धारित किया जाता है। गैर-सर्जिकल उपचार में चरणबद्ध सुधार के लक्ष्य तय होते हैं।',
    clinicalActions: [
      'Digital pre-operative templating for knee and hip reconstructive alignment',
      'Medical co-morbidity clearance and pre-anesthetic optimization',
      'Clear scheduling coordination with cashless Mediclaim assistance desks',
    ],
    hindiClinicalActions: [
      'घुटने व कूल्हे के सटीक अलाइनमेंट हेतु डिजिटल प्री-ऑपरेटिव प्लानिंग',
      'मधुमेह, बीपी आदि की संपूर्ण मेडिकल जांच व प्री-एनेस्थीसिया क्लीयरेंस',
      'कैशलेस मेडिक्लेम एवं टीपीए सहायता डेस्क के साथ सुगम समन्वय',
    ],
  },
  {
    number: '04',
    title: 'Supporting Recovery',
    hindiTitle: 'पुनर्वास व निरंतर सहयोग',
    subtitle: 'Milestone-Based Rehabilitation & Long-Term Joint Health',
    hindiSubtitle: 'चरणबद्ध फिजियोथेरेपी एवं दीर्घकालिक जोड़ों का स्वास्थ्य',
    description:
      'Recovery is not left to chance. Whether standing on Day 1 after joint replacement or progressing through post-fracture weight-bearing, we monitor every step with objective functional milestones.',
    hindiDescription:
      'मरीज की रिकवरी केवल संयोग पर नहीं छोड़ी जाती। सर्जरी के अगले दिन से वॉकर से चलने से लेकर पूर्ण स्वस्थ होने तक, हर चरण की निगरानी विशेषज्ञ मार्गदर्शन में की जाती है।',
    clinicalActions: [
      'Early Day-1 or Day-2 bedside mobilization with trained physiotherapists',
      'Stage-specific home exercise protocols with clear dos and don\'ts',
      'Long-term radiographic and functional follow-ups for sustained joint durability',
    ],
    hindiClinicalActions: [
      'सर्जरी के 24–48 घंटे में प्रशिक्षित फिजियोथेरेपिस्ट के सहयोग से चलना शुरू करना',
      'घर पर किए जाने वाले सुरक्षित व्यायाम, क्या करें और क्या न करें के स्पष्ट नियम',
      'जोड़ की दीर्घकालिक मजबूती के लिए नियमित फॉलो-अप व एक्स-रे समीक्षा',
    ],
  },
];

export function DoctorPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('philosophy');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = document.querySelectorAll('.philosophy-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-75', 'translate-y-4');
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="py-14 md:py-20 bg-white border-b border-[#EAE4D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2744]/8 text-[#0F2744] text-xs font-semibold tracking-wide border border-[#0F2744]/15 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#0D7E8A]" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#566474] leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps Stack */}
        <div ref={pinSectionRef} className="space-y-6 md:space-y-8">
          {PHILOSOPHY_STEPS.map((step) => {
            const stepTitle = isHi ? step.hindiTitle : step.title;
            const stepSubtitle = isHi ? step.hindiSubtitle : step.subtitle;
            const stepDesc = isHi ? step.hindiDescription : step.description;
            const stepActions = isHi ? step.hindiClinicalActions : step.clinicalActions;

            return (
              <div
                key={step.number}
                className="philosophy-card bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number & Title (5 cols) */}
                  <div className="lg:col-span-5 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0F2744] text-white flex items-center justify-center font-serif text-2xl font-bold shrink-0 shadow-xs">
                      {step.number}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E8A] block">
                        {isHi ? `चरण ${step.number}` : `Phase ${step.number}`}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2744] mt-0.5 leading-snug">
                        {stepTitle}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[#7C8894] mt-1">
                        {stepSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* Step Description & Key Clinical Actions (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                      {stepDesc}
                    </p>

                    <div className="pt-2 border-t border-[#F0EBE1] space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0F2744] block">
                        {isHi ? 'मुख्य चिकित्सकीय केंद्र बिंदु:' : 'Clinical Focus:'}
                      </span>
                      <div className="space-y-1.5">
                        {stepActions.map((action, actionIdx) => (
                          <div
                            key={actionIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C28E38] mt-2 shrink-0" />
                            <span>{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
