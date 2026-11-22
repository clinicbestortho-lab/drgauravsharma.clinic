import React from 'react';
import type { Metadata } from 'next';
import { FAQS } from '@/content/faqs';
import { buildMetadata, getFaqPageJsonLd } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FaqSection } from '@/components/sections/FaqSection';
import { BookingCTA } from '@/components/layout/BookingCTA';
import { Badge } from '@/components/ui/Badge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title:
      locale === 'hi'
        ? 'अक्सर पूछे जाने वाले सवाल (FAQs) | डॉ. गौरव शर्मा क्लिनिक'
        : 'Patient FAQs & Practical Clinical Answers | Dr. Gaurav Sharma Agra',
    description:
      locale === 'hi'
        ? 'ऑर्थोपेडिक परामर्श, घुटना प्रत्यारोपण रिकवरी, क्लिनिक आने की तैयारी और पुरानी एक्स-रे या एमआरआई फिल्में साथ लाने से संबंधित सामान्य प्रश्नों के उत्तर।'
        : 'Answers to common questions regarding orthopaedic consultations, knee replacement recovery, preparing for your visit, and bringing external X-rays or MRI films.',
    path: '/faq',
    locale: locale as 'en' | 'hi',
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqPageJsonLd(FAQS)),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            {
              label: isHi ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions',
              href: `/${locale}/faq`,
              active: true,
            },
          ]}
        />
      </div>

      <header className="py-12 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="teal" size="sm" className="mb-3">
            {isHi ? 'मरीजों एवं परिजनों हेतु जानकारी' : 'Patient & Family Knowledgebase'}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
            {isHi ? 'अक्सर पूछे जाने वाले सवाल (FAQs)' : 'Frequently Asked Questions'}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
            {isHi
              ? 'परामर्श की तैयारी, एक्स-रे व एमआरआई जांच, जोड़ प्रत्यारोपण एवं क्लिनिक प्रक्रिया से जुड़े स्पष्ट और व्यावहारिक उत्तर।'
              : 'Clear, transparent answers to help patients and families navigate consultation preparation, diagnostic imaging reviews, and joint reconstruction.'}
          </p>
        </div>
      </header>

      <div className="py-4">
        {/* Render all FAQs without limit */}
        <FaqSection />
      </div>

      <BookingCTA
        concern="faq-inquiry"
        title={isHi ? 'क्या आपका कोई विशेष सवाल है?' : 'Have a Specific Clinical Question?'}
        subtitle={
          isHi
            ? 'सत्यम कॉम्प्लेक्स, सिकंदरा में डॉ. गौरव शर्मा के साथ अपनी एक्स-रे या एमआरआई फिल्मों की प्रत्यक्ष समीक्षा हेतु परामर्श बुक करें।'
            : 'Schedule an in-person evaluation with Dr. Gaurav Sharma at Satyam Complex, Sikandra to review your films directly on the viewbox.'
        }
      />
    </div>
  );
}
