import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SurgeriesSection } from '@/components/sections/SurgeriesSection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BookingCTA } from '@/components/layout/BookingCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title:
      locale === 'hi'
        ? 'सर्जिकल प्रक्रियाएं एवं जोड़ प्रत्यारोपण | डॉ. गौरव शर्मा'
        : 'Surgical Procedures & Reconstructive Joint Surgery Catalog',
    description:
      locale === 'hi'
        ? 'डॉ. गौरव शर्मा द्वारा ऑर्थोपेडिक सर्जरी: टोटल नी रिप्लेसमेंट (TKR), पार्शियल नी रिप्लेसमेंट, टोटल हिप रिप्लेसमेंट (THR), एसीएल पुनर्निर्माण एवं फ्रैक्चर फिक्सेशन।'
        : 'Detailed catalogue of orthopaedic surgeries by Dr. Gaurav Sharma in Agra: Total Knee Replacement (TKR), Partial UKA, Total Hip Replacement (THR), ACL reconstruction, arthroscopy, and trauma fracture fixation.',
    path: '/surgeries',
    locale: locale as 'en' | 'hi',
  });
}

export default async function SurgeriesIndexPage({
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
              label: isHi ? 'सर्जिकल प्रक्रियाएं' : 'Surgical Procedures',
              href: `/${locale}/surgeries`,
              active: true,
            },
          ]}
        />
      </div>

      <div className="pt-4 pb-2">
        <SurgeriesSection asH1 />
      </div>

      <BookingCTA
        concern="surgical-evaluation"
        title={
          isHi
            ? 'सर्जिकल मूल्यांकन अथवा दूसरी निष्पक्ष राय (Second Opinion) लें'
            : 'Request a Surgical Evaluation or Second Opinion'
        }
        subtitle={
          isHi
            ? 'अपनी पुरानी एक्स-रे, सीटी स्कैन या एमआरआई फिल्में सत्यम कॉम्प्लेक्स, सिकंदरा क्लिनिक में निष्पक्ष क्लिनिकल जांच हेतु लाएं।'
            : 'Bring your existing physical X-rays, CT scans, or MRI films to Satyam Complex, Sikandra for an objective, unbiased clinical review.'
        }
      />
    </div>
  );
}
