'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import {
  Calendar,
  Award,
  ShieldCheck,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
  ArrowRight,
  UserCheck,
  CheckCircle2,
} from 'lucide-react';
import {
  DOCTOR_PROFILE,
  CLINIC_LOCATION,
  CLINIC_CONTACT,
  CLINIC_TIMINGS,
} from '@/lib/clinic';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CountUp } from '../motion/CountUp';
import { Reveal } from '../motion/Reveal';

export function HeroSection() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#FAF8F4] hero-gradient-mesh border-b border-[#EAE4D9]">
      {/* Decorative architectural background rings */}
      <div className="absolute top-10 right-5 md:right-20 w-72 h-72 rounded-full border border-[#0D7E8A]/10 pointer-events-none" />
      <div className="absolute top-24 right-16 md:right-32 w-96 h-96 rounded-full border border-[#C28E38]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Clinical Positioning & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="down" distance={16} delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2744]/8 border border-[#0F2744]/15 text-[#0F2744] text-xs font-semibold tracking-wide">
                <Award className="w-3.5 h-3.5 text-[#C28E38]" />
                <span>
                  {isHi
                    ? 'वरिष्ठ ऑर्थोपेडिक एवं जोड़ प्रत्यारोपण विशेषज्ञ • सिकंदरा, आगरा'
                    : 'Senior Orthopaedic & Joint Replacement Care • Sikandra, Agra'}
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.15}>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#0F2744] leading-[1.14] tracking-tight">
                {isHi
                  ? 'आपकी गतिशीलता व रिकवरी को समर्पित ऑर्थोपेडिक देखभाल।'
                  : 'Orthopaedic Care, Built Around Your Recovery.'}
              </h1>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.25}>
              <p className="text-base sm:text-lg text-[#4B5868] leading-relaxed max-w-2xl font-normal">
                {isHi ? (
                  <>
                    <strong className="text-[#0F2744] font-semibold">डॉ. गौरव शर्मा ऑर्थोपेडिक क्लिनिक</strong> सिकंदरा, आगरा में{' '}
                    <strong className="text-[#0F2744] font-semibold">
                      {DOCTOR_PROFILE.hindiName || 'डॉ. गौरव शर्मा'}
                    </strong>{' '}
                    (एम.बी.बी.एस., एम.एस. ऑर्थोपेडिक्स, यूपीएमसी पंजी. 48757) द्वारा संचालित वरिष्ठ हड्डी एवं जोड़ प्रत्यारोपण केंद्र है, जहाँ 20+ वर्षों के अनुभव के साथ गहन शारीरिक जांच, गैर-सर्जिकल जोड़ संरक्षण (70%+ मरीज बिना सर्जरी के ठीक) व पारदर्शी उपचार को प्राथमिकता दी जाती है।
                  </>
                ) : (
                  <>
                    <strong className="text-[#0F2744] font-semibold">Dr. Gaurav Sharma Orthopaedic Clinic</strong> is a consultant orthopaedic and joint replacement centre in Sikandra, Agra led by{' '}
                    <strong className="text-[#0F2744] font-semibold">Dr. Gaurav Sharma</strong> (M.B.B.S., M.S. Orthopaedics, UPMC Reg. 48757) with 20+ years of surgical experience. Care is structured around hands-on clinical examination, non-surgical joint preservation (70%+ of patients), and measurable recovery milestones.
                  </>
                )}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" distance={20} delay={0.35}>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Button
                  href={`/${locale}/contact`}
                  variant="accent"
                  size="lg"
                  className="shadow-md hover:shadow-lg font-semibold"
                >
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {isHi ? 'क्लिनिकल परामर्श बुक करें' : 'Book Consultation'}
                </Button>

                <Button
                  href={`/${locale}/credentials`}
                  variant="secondary"
                  size="lg"
                  className="font-medium"
                >
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-[#0D7E8A]" />
                  {isHi ? 'डॉक्टर की योग्यता व पंजीयन' : 'Doctor Credentials'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Reveal>

            {/* Trust Stats Bar with CountUp */}
            <Reveal direction="up" distance={24} delay={0.45}>
              <div className="pt-8 border-t border-[#E5DFD5] grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2744]">
                    <CountUp end={20} suffix="+" />
                  </div>
                  <div className="text-xs font-medium text-[#566474] mt-0.5">
                    {isHi ? 'वर्षों का सर्जिकल अनुभव' : 'Years Surgical Experience'}
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0D7E8A] flex items-center">
                    <span>UPMC</span>
                  </div>
                  <div className="text-xs font-medium text-[#566474] mt-0.5">
                    {isHi ? 'पंजी. 48757 विशेषज्ञ' : 'Reg. 48757 Specialist'}
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2744]">
                    <span>{isHi ? 'सिकंदरा' : 'Sikandra'}</span>
                  </div>
                  <div className="text-xs font-medium text-[#566474] mt-0.5">
                    {isHi ? 'सत्यम कॉम्प्लेक्स, आगरा' : 'Satyam Complex, Sector-12A'}
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#C28E38]">
                    <span>{isHi ? 'मार्गदर्शिका' : 'Guides'}</span>
                  </div>
                  <div className="text-xs font-medium text-[#566474] mt-0.5">
                    {isHi ? 'रोगी पुनर्वास व देखभाल' : 'Patient Rehab Education'}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Doctor Portrait Card (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal direction="left" distance={28} delay={0.2}>
              <div className="relative rounded-3xl bg-white border border-[#E2DBD0] p-6 sm:p-7 shadow-xl">
                {/* Header within card */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#F0EBE1]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                        {isHi ? 'ओपीडी क्लिनिक खुला है' : 'Outpatient Clinic'}
                      </span>
                    </div>
                    <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#0F2744]">
                      {isHi ? DOCTOR_PROFILE.hindiName : DOCTOR_PROFILE.name}
                    </h2>
                    <p className="text-xs text-[#566474] font-medium mt-0.5">
                      {isHi ? DOCTOR_PROFILE.hindiDesignation : DOCTOR_PROFILE.designation}
                    </p>
                  </div>

                  <span className="text-[11px] font-semibold bg-[#0F2744]/10 text-[#0F2744] px-2.5 py-1 rounded-full border border-[#0F2744]/15 shrink-0">
                    {isHi ? 'सिकंदरा, आगरा' : 'Sikandra, Agra'}
                  </span>
                </div>

                {/* Real Doctor Portrait Image */}
                <div className="my-4 relative rounded-2xl overflow-hidden aspect-[4/4.2] sm:aspect-[4/4] bg-slate-900 shadow-md group">
                  <Image
                    src="/images/doctor-portrait.jpg"
                    alt={
                      isHi
                        ? 'डॉ. गौरव शर्मा - वरिष्ठ ऑर्थोपेडिक एवं जोड़ प्रत्यारोपण सर्जन'
                        : 'Dr. Gaurav Sharma - Consultant Orthopaedic & Joint Replacement Surgeon'
                    }
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15 shadow-sm">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isHi ? 'एम.एस. (हड्डी रोग)' : 'MS (Orthopaedics)'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-950/75 backdrop-blur-md text-[#38BDF8] text-[11px] font-mono font-medium border border-white/15 shadow-sm">
                      {isHi ? 'पंजी: 48757 UPMC' : 'Reg: 48757 UPMC'}
                    </span>
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-3 left-3 right-3 pointer-events-none text-white">
                    <p className="font-serif font-bold text-lg leading-tight">
                      {isHi ? 'एम.बी.बी.एस., एम.एस. (हड्डी रोग)' : 'M.B.B.S., M.S. (Orthopaedics)'}
                    </p>
                    <p className="text-xs text-[#CBD5E1] mt-0.5">
                      {isHi
                        ? 'पूर्व असिस्टेंट प्रोफेसर, ऑर्थोपेडिक्स विभाग'
                        : 'Former Assistant Professor of Orthopaedics'}
                    </p>
                  </div>
                </div>

                {/* Badges & Hours strip */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C28E38] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#0F2744] block">
                          {isHi ? 'ओपीडी: सुबह 09:30 – रात 09:30' : 'OPD: 09:30 AM – 09:30 PM'}
                        </span>
                        <span className="text-[#64748B]">
                          {isHi ? 'विश्राम: शाम 4:00 – 6:00 (सर्जरी व वार्ड)' : 'Break: 4:00 PM – 6:00 PM (Surgeries)'}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" size="sm">
                      {isHi ? 'सोम–शनि' : 'Mon–Sat'}
                    </Badge>
                  </div>

                  {/* Actions inside card */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={`tel:${CLINIC_CONTACT.primaryPhone}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0F2744] text-white text-xs font-semibold hover:bg-[#16365D] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{isHi ? 'कॉल करें' : `Call ${CLINIC_CONTACT.displayPhone}`}</span>
                    </a>

                    <a
                      href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                        isHi ? CLINIC_CONTACT.whatsappPrefill : CLINIC_CONTACT.whatsappPrefill
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366]/15 text-[#075E54] border border-[#25D366]/30 text-xs font-semibold hover:bg-[#25D366]/25 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>{isHi ? 'व्हाट्सएप परामर्श' : 'WhatsApp Consult'}</span>
                    </a>
                  </div>

                  {/* Directions link */}
                  <div className="pt-2 text-center">
                    <a
                      href={CLINIC_LOCATION.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D7E8A] hover:text-[#095962] hover:underline"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>
                        {isHi
                          ? 'सत्यम कॉम्प्लेक्स क्लिनिक का मार्ग (गूगल मैप्स)'
                          : 'Directions to Satyam Complex, Sikandra'}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
