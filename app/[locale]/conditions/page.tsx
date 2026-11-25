import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { AreasOfCare } from '@/components/sections/AreasOfCare';
import { SymptomNavigator } from '@/components/sections/SymptomNavigator';
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
        ? 'उपचार क्षेत्र एवं जोड़ संरक्षण | डॉ. गौरव शर्मा'
        : 'Areas of Care & Orthopaedic Specialities Directory',
    description:
      locale === 'hi'
        ? 'डॉ. गौरव शर्मा द्वारा ऑर्थोपेडिक उपचार क्षेत्र: घुटना दर्द, हिप आर्थराइटिस, रीढ़ व कमर दर्द, आर्थ्रोस्कोपी एवं खेल चोटें।'
        : 'Explore clinical areas of care by Dr. Gaurav Sharma in Agra: Knee pain, hip arthroplasty, complex knee revision, spine & back pain, arthroscopy, sports injuries, and trauma management.',
    path: '/conditions',
    locale: locale as 'en' | 'hi',
  });
}

export default async function ConditionsIndexPage({
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
              label: isHi ? 'उपचार एवं देखभाल क्षेत्र' : 'Areas of Care',
              href: `/${locale}/conditions`,
              active: true,
            },
          ]}
        />
      </div>

      <div className="pt-2">
        <AreasOfCare asH1 />
      </div>

      <div className="border-t border-[#EAE4D9]">
        <SymptomNavigator />
      </div>

      <BookingCTA
        concern="conditions-consultation"
        title={
          isHi
            ? 'क्लिनिकल जोड़ परीक्षण हेतु परामर्श बुक करें'
            : 'Schedule an In-Person Clinical Assessment'
        }
        subtitle={
          isHi
            ? 'डॉ. गौरव शर्मा सत्यम कॉम्प्लेक्स, सिकंदरा, आगरा में सटीक शारीरिक जांच और बिना सर्जरी जोड़ संरक्षण योजना प्रदान करते हैं।'
            : 'Dr. Gaurav Sharma provides clear anatomical diagnosis and conservative joint preservation pathways at Satyam Complex, Sikandra, Agra.'
        }
      />
    </div>
  );
}
