import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { SymptomNavigator } from '@/components/sections/SymptomNavigator';
import { MeetDoctor } from '@/components/sections/MeetDoctor';
import { DoctorPhilosophy } from '@/components/sections/DoctorPhilosophy';
import { CredentialsStrip } from '@/components/sections/CredentialsStrip';
import { AreasOfCare } from '@/components/sections/AreasOfCare';
import { SurgeriesSection } from '@/components/sections/SurgeriesSection';
import { VideoGuidance } from '@/components/sections/VideoGuidance';
import { PatientJourney } from '@/components/sections/PatientJourney';
import { PatientStories } from '@/components/sections/PatientStories';
import { ClinicLocation } from '@/components/sections/ClinicLocation';
import { FaqSection } from '@/components/sections/FaqSection';
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
        ? 'वरिष्ठ हड्डी एवं जोड़ प्रत्यारोपण विशेषज्ञ सिकंदरा आगरा'
        : 'Consultant Orthopaedic & Joint Replacement Care | Sikandra, Agra',
    description:
      locale === 'hi'
        ? 'सिकंदरा, आगरा में डॉ. गौरव शर्मा (एम.एस. ऑर्थोपेडिक्स, 20+ वर्ष सर्जिकल अनुभव) द्वारा टोटल नी रिप्लेसमेंट (TKR), हिप रिप्लेसमेंट (THR), आर्थ्रोस्कोपी (ACL/कंधा) व फ्रैक्चर सर्जरी।'
        : 'Senior Orthopaedic & Joint Replacement Surgeon in Sikandra, Agra — Dr. Gaurav Sharma (MS Orthopaedics, 20+ Yrs Surgical Exp). Specializing in Total Knee Replacement (TKR), Total Hip Replacement (THR), Arthroscopic ACL & Shoulder Surgery, Revision Arthroplasty, and Fracture Trauma Surgery.',
    locale: locale as 'en' | 'hi',
    path: '/',
  });
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Symptom Navigator ("Where Does It Hurt?") */}
      <SymptomNavigator />

      {/* 3. Meet the Doctor */}
      <MeetDoctor />

      {/* 4. Philosophy ("How We Structure Your Care") */}
      <DoctorPhilosophy />

      {/* 5. Verified Credentials Strip */}
      <CredentialsStrip />

      {/* 6. Areas of Care (Bento Grid) */}
      <AreasOfCare />

      {/* 7. Surgical Procedures (Featured Preview on Home) */}
      <SurgeriesSection limit={6} />

      {/* 8. Video Guidance (Hindi Lite-Embed) */}
      <VideoGuidance />

      {/* 9. Patient Care Journey (3 Steps + Conservative Callout) */}
      <PatientJourney />

      {/* 10. Patient Stories (NMC Restricted - Feature Flagged) */}
      <PatientStories />

      {/* 11. Clinic Location & Hours (Click-to-Load Map & Agra Travel Guide) */}
      <ClinicLocation />

      {/* 12. FAQ Preview */}
      <FaqSection limit={6} />

      {/* 13. Final Booking CTA */}
      <BookingCTA />
    </>
  );
}
