import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { VideoGuidance } from '@/components/sections/VideoGuidance';
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
        ? 'वीडियो मार्गदर्शन (हिन्दी) | डॉ. गौरव शर्मा क्लिनिक'
        : 'Patient Educational Videos in Hindi | Dr. Gaurav Sharma Orthopaedics',
    description:
      locale === 'hi'
        ? 'डॉ. गौरव शर्मा द्वारा हिन्दी में वीडियो गाइड: घुटना प्रत्यारोपण सावधानियां, सर्दियों में जोड़ों की देखभाल और आम गलतियों से बचाव।'
        : 'Video guides by Dr. Gaurav Sharma in Hindi covering knee replacement recovery precautions, managing joint pain in winter, and avoiding common patient errors.',
    path: '/videos',
    locale: locale as 'en' | 'hi',
  });
}

export default async function VideosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            {
              label: isHi ? 'वीडियो मार्गदर्शन (हिन्दी)' : 'Video Guidance',
              href: `/${locale}/videos`,
              active: true,
            },
          ]}
        />
      </div>

      <header className="py-12 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="teal" size="sm" className="mb-3">
            {isHi ? 'रोगी शिक्षा एवं वीडियो मार्गदर्शन' : 'हिन्दी वीडियो मार्गदर्शन (Hindi Video Series)'}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
            {isHi ? 'क्लिनिकल मार्गदर्शन एवं रिकवरी वीडियो' : 'Clinical Guidance & Recovery Videos'}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
            {isHi
              ? 'डॉ. गौरव शर्मा द्वारा घुटना प्रत्यारोपण सावधानियां, सर्दियों में जोड़ों की देखभाल और घरेलू व्यायाम पर आसान हिन्दी में व्यावहारिक मार्गदर्शन।'
              : 'Practical advice from Dr. Gaurav Sharma on knee replacement precautions, winter joint care, and home exercises, presented in clear Hindi.'}
          </p>
        </div>
      </header>

      <div className="py-4">
        <VideoGuidance />
      </div>

      <BookingCTA
        concern="video-inquiry"
        title={isHi ? 'डॉ. गौरव शर्मा से प्रत्यक्ष परामर्श लें' : 'Schedule an Examination with Dr. Gaurav Sharma'}
        subtitle={
          isHi
            ? 'सत्यम कॉम्प्लेक्स, सिकंदरा, आगरा में जोड़ दर्द या सर्जिकल मूल्यांकन हेतु व्यक्तिगत परामर्श प्राप्त करें।'
            : 'Consult directly at Satyam Complex, Sikandra, Agra to discuss your joint pain or surgical evaluation.'
        }
      />
    </div>
  );
}
