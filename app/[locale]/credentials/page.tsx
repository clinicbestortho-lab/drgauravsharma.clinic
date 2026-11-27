import React from 'react';
import type { Metadata } from 'next';
import { DOCTOR_PROFILE } from '@/lib/clinic';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { BookingCTA } from '@/components/layout/BookingCTA';
import {
  ShieldCheck,
  Award,
  GraduationCap,
  Building2,
  FileCheck2,
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
        ? 'प्रमाणित डिग्रियाँ एवं चिकित्सा पंजीकरण | डॉ. गौरव शर्मा'
        : 'Doctor Credentials & Medical Registration Verification | Dr. Gaurav Sharma',
    description:
      locale === 'hi'
        ? 'डॉ. गौरव शर्मा के आधिकारिक चिकित्सा प्रमाण पत्र एवं डिग्रियां: यूपी मेडिकल काउंसिल पंजीकरण संख्या 48757, एम.बी.बी.एस. (SNMC आगरा), एम.एस. हड्डी रोग (MLB झांसी)।'
        : 'Official credentials, medical registrations, and qualifications of Dr. Gaurav Sharma: UPMC Reg. No. 48757, MBBS (SNMC Agra), MS Orthopaedics (MLB Medical College Jhansi).',
    path: '/credentials',
    locale: locale as 'en' | 'hi',
  });
}

export default async function CredentialsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  const credentials = isHi
    ? [
        {
          title: 'राज्य चिकित्सा परिषद पंजीकरण',
          authority: 'उत्तर प्रदेश मेडिकल काउंसिल (UPMC)',
          registrationNumber: `पंजीकरण संख्या: ${DOCTOR_PROFILE.registrationNumber}`,
          year: 'सक्रिय एवं सत्यापित',
          icon: ShieldCheck,
          details:
            'उत्तर प्रदेश मेडिकल काउंसिल के अंतर्गत पंजीकरण संख्या 48757 के साथ पंजीकृत। राष्ट्रीय चिकित्सा आयोग (NMC) के नियमों के अनुसार पूरे भारत में ऑर्थोपेडिक एवं रीकंस्ट्रक्टिव सर्जन के रूप में चिकित्सा पद्धति हेतु अधिकृत।',
        },
        {
          title: 'मास्टर ऑफ सर्जरी (M.S. Orthopaedics)',
          authority: 'पोस्टग्रेजुएट मेडिकल एग्जामिनेशन बोर्ड',
          registrationNumber: 'विशेषज्ञ स्नातकोत्तर सर्जिकल डिग्री',
          year: 'स्नातकोत्तर योग्यता',
          icon: Award,
          details:
            'हड्डी एवं जोड़ रोग में तीन वर्षीय गहन रेजिडेंसी सर्जिकल प्रशिक्षण, जिसमें जोड़ प्रत्यारोपण (TKR व THR), जटिल फ्रैक्चर स्थिरीकरण, आर्थ्रोस्कोपी एवं जोड़ पुनर्निर्माण शामिल है।',
        },
        {
          title: 'बैचलर ऑफ मेडिसिन एंड बैचलर ऑफ सर्जरी (M.B.B.S.)',
          authority: 'सरोजिनी नायडू मेडिकल कॉलेज (SNMC), आगरा',
          registrationNumber: 'प्राथमिक चिकित्सा डिग्री',
          year: 'स्नातक उपाधि (2004)',
          icon: GraduationCap,
          details:
            'सरोजिनी नायडू मेडिकल कॉलेज, आगरा से एम.बी.बी.एस. की उपाधि, जिसमें आपातकालीन चिकित्सा, सामान्य सर्जरी, मस्कुलोस्केलेटल एनाटॉमी एवं आंतरिक चिकित्सा का व्यापक क्लिनिकल प्रशिक्षण सम्मिलित है।',
        },
        {
          title: 'मास्टर ऑफ सर्जरी — एम.एस. (ऑर्थोपेडिक्स)',
          authority: 'महारानी लक्ष्मीबाई (MLB) मेडिकल कॉलेज, झांसी',
          registrationNumber: 'स्नातकोत्तर सर्जिकल उपाधि',
          year: 'स्नातकोत्तर (2008)',
          icon: Award,
          details:
            'MLB मेडिकल कॉलेज, झांसी से तीन वर्षीय गहन ऑर्थोपेडिक सर्जिकल रेजीडेंसी प्रशिक्षण, जिसमें जोड़ प्रत्यारोपण, जटिल फ्रैक्चर फिक्सेशन, आर्थ्रोस्कोपी व हड्डी रोग उपचार शामिल हैं।',
        },
      ]
    : [
        {
          title: 'State Medical Council Registration',
          authority: 'Uttar Pradesh Medical Council (UPMC)',
          registrationNumber: DOCTOR_PROFILE.registrationNumber,
          year: 'Active & Verified',
          icon: ShieldCheck,
          details:
            'Registered with the Uttar Pradesh Medical Council under Registration No. 48757, entitled to practice as a Consultant Orthopaedic & Reconstructive Surgeon across India in accordance with National Medical Commission (NMC) regulations.',
        },
        {
          title: 'Master of Surgery (M.S. Orthopaedics)',
          authority: 'Maharani Laxmi Bai (MLB) Medical College, Jhansi',
          registrationNumber: 'Postgraduate Surgical Degree',
          year: 'Postgraduate (2008)',
          icon: Award,
          details:
            'Three-year intensive postgraduate surgical residency training spanning joint replacement, complex fracture fixation, reconstructive joint surgery, and bone pathology.',
        },
        {
          title: 'Bachelor of Medicine & Bachelor of Surgery (M.B.B.S.)',
          authority: 'Sarojini Naidu Medical College (SNMC), Agra',
          registrationNumber: 'Primary Medical Qualification',
          year: 'Graduation (2004)',
          icon: GraduationCap,
          details:
            'Undergraduate medical graduation from SNMC Agra encompassing clinical rotations in emergency medicine, general surgery, musculoskeletal anatomy, and internal medicine.',
        },
        {
          title: '20+ Years Clinical & Surgical Practice',
          authority: 'Sikandra, Agra & Western Uttar Pradesh',
          registrationNumber: 'Specialist Clinical Practice',
          year: 'Active Practice',
          icon: Building2,
          details:
            'Over two decades of outpatient consultation, non-surgical joint preservation, Total Knee & Hip Replacement (TKR/THR), arthroscopy, and emergency fracture trauma surgery.',
        },
      ];

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            {
              label: isHi ? 'प्रमाणित चिकित्सा योग्यता' : 'Doctor Credentials',
              href: `/${locale}/credentials`,
              active: true,
            },
          ]}
        />
      </div>

      {/* Hero Header */}
      <header className="py-12 md:py-16 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="teal" size="sm" className="mb-3">
            {isHi ? 'मेडिकल काउंसिल पारदर्शिता' : 'Medical Council Transparency'}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight leading-tight">
            {isHi ? 'प्रमाणित योग्यता एवं चिकित्सा पंजीकरण' : 'Verified Credentials & Academic Qualifications'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
            {isHi
              ? 'चिकित्सा पद्धति में पारदर्शिता ही मरीज के विश्वास का मुख्य आधार है। नीचे डॉ. गौरव शर्मा के वैधानिक पंजीकरण, स्नातकोत्तर सर्जिकल डिग्री एवं शैक्षणिक अनुभव का विवरण दिया गया है।'
              : 'In medical practice, transparency is the cornerstone of patient trust. Below are the verified statutory registrations, postgraduate qualifications, and academic teaching tenures of Dr. Gaurav Sharma.'}
          </p>
        </div>
      </header>

      {/* Main Credentials Stack */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">
        <div className="space-y-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-8 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F2744]/8 text-[#0F2744] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#0D7E8A]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E8A]">
                        {cred.authority}
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2744] mt-0.5">
                        {cred.title}
                      </h2>
                      <span className="text-xs font-mono font-bold text-[#C28E38] block mt-1">
                        {cred.registrationNumber}
                      </span>
                    </div>
                  </div>

                  <Badge variant="green" size="sm" className="self-start">
                    {isHi ? 'सत्यापित' : 'Verified'}
                  </Badge>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed pt-2 border-t border-[#F0EBE1]">
                  {cred.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* NMC Ethics Notice */}
        <div className="p-6 rounded-3xl bg-[#FAF8F4] border border-[#E2DBD0] text-xs text-[#566474] leading-relaxed space-y-2">
          <h3 className="font-bold text-sm text-[#0F2744] flex items-center gap-2">
            <FileCheck2 className="w-4 h-4 text-[#0D7E8A]" />
            {isHi ? 'वैधानिक अनुपालन घोषणा' : 'Statutory Compliance Declaration'}
          </h3>
          <p>
            {isHi
              ? 'यह सत्यापन पृष्ठ राष्ट्रीय चिकित्सा आयोग (NMC) के नियमों के अनुसार मरीजों और नियामक प्राधिकरणों के लिए तथ्यात्मक, गैर-व्यावसायिक योग्यता प्रकटीकरण प्रदान करने हेतु प्रकाशित किया गया है। किसी भी प्रकार के अतिशयोक्तिपूर्ण दावे अथवा अवास्तविक प्रचार का पूर्णतः निषेध है।'
              : 'This verification page is published to provide factual, non-promotional professional qualification disclosures for patients and regulatory authorities, in accordance with the National Medical Commission (NMC) regulations. No superlative claims, commercial awards, or unverified institutional claims are made.'}
          </p>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
