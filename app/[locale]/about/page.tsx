import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DOCTOR_PROFILE } from '@/lib/clinic';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookingCTA } from '@/components/layout/BookingCTA';
import {
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title:
      locale === 'hi'
        ? 'डॉ. गौरव शर्मा - वरिष्ठ हड्डी एवं जोड़ प्रत्यारोपण विशेषज्ञ'
        : 'About Dr. Gaurav Sharma | Consultant Orthopaedic Surgeon Agra',
    description:
      locale === 'hi'
        ? 'डॉ. गौरव शर्मा का परिचय: एम.एस. (हड्डी एवं जोड़ रोग), 20+ वर्ष सर्जिकल अनुभव, पूर्व असिस्टेंट प्रोफेसर, सत्यम कॉम्प्लेक्स, सिकंदरा, आगरा।'
        : 'Profile of Dr. Gaurav Sharma: MS (Orthopaedics), 20+ years surgical background, former Assistant Professor of Orthopaedics, practising at Satyam Complex, Sikandra, Agra.',
    path: '/about',
    locale: locale as 'en' | 'hi',
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  const bioParas = isHi && DOCTOR_PROFILE.hindiBioDetailed ? DOCTOR_PROFILE.hindiBioDetailed : DOCTOR_PROFILE.bioDetailed;
  const focusAreas = isHi && DOCTOR_PROFILE.hindiFocusAreas ? DOCTOR_PROFILE.hindiFocusAreas : DOCTOR_PROFILE.focusAreas;

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            {
              label: isHi ? 'डॉक्टर परिचय एवं क्लिनिक' : 'About Doctor & Practice',
              href: `/${locale}/about`,
              active: true,
            },
          ]}
        />
      </div>

      {/* Hero Header */}
      <header className="py-12 md:py-16 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="gold" size="sm" className="mb-3 font-bold">
            {isHi ? 'एम.एस. (हड्डी एवं जोड़ रोग) • 20+ वर्ष सर्जिकल अनुभव' : 'MS (Orthopaedics) • 20+ Years Practice'}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight leading-tight">
            {isHi && DOCTOR_PROFILE.hindiName ? DOCTOR_PROFILE.hindiName : DOCTOR_PROFILE.name}
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#0D7E8A] mt-1">
            {isHi && DOCTOR_PROFILE.hindiDesignation ? DOCTOR_PROFILE.hindiDesignation : DOCTOR_PROFILE.designation}
          </p>
          <p className="text-xs text-[#566474]">
            {isHi && DOCTOR_PROFILE.hindiRegistrationCouncil ? DOCTOR_PROFILE.hindiRegistrationCouncil : DOCTOR_PROFILE.registrationCouncil} • {isHi ? 'पंजीकरण संख्या' : 'Registration No.'} {DOCTOR_PROFILE.registrationNumber}
          </p>

          <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
            {isHi && DOCTOR_PROFILE.hindiBioShort ? DOCTOR_PROFILE.hindiBioShort : DOCTOR_PROFILE.bioShort}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button href={`/${locale}/contact`} variant="accent" size="lg" className="font-semibold shadow-xs">
              {isHi ? 'परामर्श बुक करें' : 'Book Consultation'}
            </Button>
            <Button href={`/${locale}/credentials`} variant="secondary" size="lg">
              <ShieldCheck className="w-4 h-4 mr-1 text-[#0D7E8A]" />
              {isHi ? 'प्रमाणित योग्यता देखें' : 'View Verified Credentials'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div id="doctor" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        {/* Detailed Biography + Real Viewbox Consultation Photo */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
                {isHi ? 'चिकित्सीय पृष्ठभूमि एवं सर्जिकल अनुभव' : 'Clinical Background & Surgical Journey'}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
                {bioParas.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E2DBD0] bg-[#FAF8F4] shadow-xs">
                <div className="relative aspect-[16/10] bg-slate-900">
                  <Image
                    src="/images/clinic/viewbox-consultation.jpg"
                    alt={
                      isHi
                        ? 'डॉ. गौरव शर्मा क्लिनिक में एक्स-रे व्यूबॉक्स और जोड़ों के मॉडल पर मरीज को समझाते हुए'
                        : 'Dr. Gaurav Sharma reviewing X-rays on clinic viewbox with anatomical joint models'
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
                <p className="p-3 text-xs text-[#566474] font-medium">
                  {isHi
                    ? 'सिकंदरा क्लिनिक में एक्स-रे व्यूबॉक्स और 3D एनाटॉमिकल मॉडल द्वारा प्रत्यक्ष परामर्श।'
                    : 'Direct X-ray viewbox correlation and anatomical joint demonstration at our Sikandra clinic.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Credentials & Experience Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F2744]">
              {isHi ? 'मास्टर ऑफ सर्जरी (M.S.)' : 'Master of Surgery (M.S.)'}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {isHi
                ? 'हड्डी एवं जोड़ रोग में स्नातकोत्तर सर्जिकल डिग्री, जिसमें जोड़ प्रत्यारोपण, आर्थ्रोस्कोपी एवं ट्रॉमा सर्जरी का व्यापक प्रशिक्षण शामिल है।'
                : 'Postgraduate surgical degree in Orthopaedics with comprehensive residency training in joint replacement, arthroscopy, and trauma surgery.'}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F2744]">
              {isHi ? 'पूर्व असिस्टेंट प्रोफेसर' : 'Former Assistant Professor'}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {isHi
                ? 'मेडिकल कॉलेज में एमबीबीएस छात्रों और पोस्ट ग्रेजुएट ऑर्थोपेडिक डॉक्टरों को पढ़ाने और प्रशिक्षण देने का दीर्घकालिक अकादमिक अनुभव।'
                : 'Spent years training undergraduate and postgraduate orthopaedic residents, embedding a culture of evidence-based medical literature and surgical discipline.'}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F2744]">
              {isHi ? 'पश्चिमी यूपी में 20+ वर्ष' : '20+ Years in Western UP'}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {isHi
                ? 'आगरा एवं आसपास के जिलों में प्राथमिक व जटिल जोड़ प्रत्यारोपण, ट्रॉमा पुनर्निर्माण एवं बिना सर्जरी सुरक्षित जोड़ संरक्षण का व्यापक अनुभव।'
                : 'Extensive surgical practice across primary joint replacement, trauma reconstruction, and non-surgical joint preservation in Agra and surrounding districts.'}
            </p>
          </div>
        </section>

        {/* Clinical Focus Areas */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
            {isHi ? 'मुख्य सर्जिकल एवं क्लिनिकल विशेषज्ञता क्षेत्र' : 'Core Areas of Surgical & Clinical Practice'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9] text-xs sm:text-sm text-[#1A2530] flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0D7E8A] shrink-0 mt-0.5" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BookingCTA />
    </div>
  );
}
