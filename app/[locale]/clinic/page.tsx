import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ClinicLocation } from '@/components/sections/ClinicLocation';
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
        ? 'क्लिनिक का पता एवं समय | सिकंदरा आगरा'
        : 'Clinic Location, OPD Timings & Directions | Sikandra, Agra',
    description:
      locale === 'hi'
        ? 'सत्यम कॉम्प्लेक्स, सिकंदरा, आगरा में डॉ. गौरव शर्मा ऑर्थोपेडिक क्लिनिक: ओपीडी समय, होटल भावना क्लार्क्स इन के पास लैंडमार्क, गूगल मैप्स दिशा-निर्देश।'
        : 'Visiting Dr. Gaurav Sharma Orthopaedic Clinic in Sikandra, Agra: OPD hours, landmark near Hotel Bhawna Clarks, Google Maps directions, and transit guidance from Agra Cantt, Bodla, and Dayalbagh.',
    path: '/clinic',
    locale: locale as 'en' | 'hi',
  });
}

export default async function ClinicPage({
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
              label: isHi ? 'क्लिनिक स्थान एवं ओपीडी समय' : 'Clinic & OPD Timings',
              href: `/${locale}/clinic`,
              active: true,
            },
          ]}
        />
      </div>

      <header className="py-12 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="teal" size="sm" className="mb-3">
            {isHi ? 'ओपीडी सुविधाएं एवं समय-सारिणी' : 'Outpatient Facilities & Schedule'}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
            {isHi ? 'क्लिनिक का पता एवं परामर्श समय' : 'Clinic Location & Consultation Hours'}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
            {isHi
              ? 'सत्यम कॉम्प्लेक्स, सेक्टर-12A, सिकंदरा, आगरा में डॉ. गौरव शर्मा ऑर्थोपेडिक क्लिनिक में परामर्श हेतु आवश्यक सभी दिशा-निर्देश।'
              : 'Everything you need to plan your visit to Dr. Gaurav Sharma Orthopaedic Clinic at Satyam Complex, Sector-12A, Sikandra, Agra.'}
          </p>
        </div>
      </header>

      <div className="py-4">
        <ClinicLocation />
      </div>

      <BookingCTA />
    </div>
  );
}
