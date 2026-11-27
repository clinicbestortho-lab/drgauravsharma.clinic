import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SURGERIES } from '@/content/surgeries';
import { FAQS } from '@/content/faqs';
import { buildMetadata, getMedicalProcedureJsonLd } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ComplianceBanner } from '@/components/ui/ComplianceBanner';
import { BookingCTA } from '@/components/layout/BookingCTA';
import { CLINIC_CONTACT } from '@/lib/clinic';
import { routing } from '@/i18n/routing';
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  routing.locales.forEach((locale) => {
    SURGERIES.forEach((surgery) => {
      params.push({ locale, slug: surgery.slug });
    });
  });
  return params;
}

const SURGERY_VISUALS: Record<
  string,
  { src: string; enCaption: string; hiCaption: string; pos?: string }
> = {
  'total-hip-replacement': {
    src: '/images/clinic/ot-hip-prosthesis.jpg',
    enCaption: 'Dr. Gaurav Sharma in sterile OT attire with hip replacement prosthesis.',
    hiCaption: 'ऑपरेशन थिएटर में हिप रिप्लेसमेंट प्रोस्थेसिस के साथ डॉ. गौरव शर्मा।',
    pos: 'object-top',
  },
  'bipolar-hemiarthroplasty': {
    src: '/images/clinic/ot-hip-prosthesis.jpg',
    enCaption: 'Dr. Gaurav Sharma with bipolar hemiarthroplasty femoral head implant.',
    hiCaption: 'बाइपोलर हेमीआर्थ्रोप्लास्टी हिप इम्प्लांट के साथ डॉ. गौरव शर्मा।',
    pos: 'object-top',
  },
  'complex-revision-joint-replacement': {
    src: '/images/clinic/ot-hip-prosthesis.jpg',
    enCaption: 'Revision joint arthroplasty surgical instrumentation and implant readiness.',
    hiCaption: 'रिवीजन जॉइंट रिप्लेसमेंट सर्जरी इम्प्लांट एवं स्टेराइल तैयारी।',
    pos: 'object-top',
  },
  'total-knee-replacement': {
    src: '/images/clinic/ot-sterile-instruments.jpg',
    enCaption: 'Sterile knee arthroplasty surgical trays prepared under laminar OT lighting.',
    hiCaption: 'टोटल नी रिप्लेसमेंट सर्जरी हेतु स्टेराइल ऑर्थोपेडिक उपकरण ट्रे।',
    pos: 'object-center',
  },
  'partial-knee-replacement': {
    src: '/images/clinic/ot-sterile-instruments.jpg',
    enCaption: 'Precision unicondylar knee replacement instrumentation setup.',
    hiCaption: 'पार्शियल नी रिप्लेसमेंट के लिए सटीक स्टेराइल सर्जिकल उपकरण।',
    pos: 'object-center',
  },
  'intra-articular-fracture-orif': {
    src: '/images/clinic/c-arm-orif-fixation.jpg',
    enCaption: 'Intraoperative C-Arm fluoroscopy confirming titanium locking plate & screw fixation.',
    hiCaption: 'सर्जरी के दौरान C-Arm एक्स-रे पर लॉकिंग प्लेट और स्क्रू फिक्सेशन की सटीक स्थिति।',
    pos: 'object-center',
  },
  'closed-interlocking-nailing': {
    src: '/images/clinic/ot-radiation-protection.jpg',
    enCaption: 'Dr. Gaurav Sharma in C-Arm trauma theatre performing closed fracture nailing.',
    hiCaption: 'C-Arm ट्रॉमा ओटी में क्लोज्ड इंटरलॉकिंग नेलिंग प्रक्रिया के दौरान डॉ. शर्मा।',
    pos: 'object-top',
  },
  'knee-arthroscopy-acl-pcl': {
    src: '/images/clinic/ot-precision-surgery.jpg',
    enCaption: 'Dr. Gaurav Sharma performing precision orthopaedic surgery under OT lighting.',
    hiCaption: 'ऑपरेशन थिएटर में सूक्ष्म ऑर्थोपेडिक सर्जरी करते हुए डॉ. गौरव शर्मा।',
    pos: 'object-top',
  },
  'meniscus-repair-preservation': {
    src: '/images/clinic/ot-precision-surgery.jpg',
    enCaption: 'Tissue-preserving arthroscopic repair technique in sterile theatre.',
    hiCaption: 'जोड़ व ऊतक संरक्षण केंद्रित सूक्ष्म सर्जिकल प्रक्रिया।',
    pos: 'object-top',
  },
  'shoulder-arthroscopy-rotator-cuff': {
    src: '/images/clinic/ot-precision-surgery.jpg',
    enCaption: 'Focused surgical intervention in sterile orthopaedic operating room.',
    hiCaption: 'स्टेराइल ऑर्थोपेडिक ऑपरेशन थिएटर में सटीक सर्जिकल देखभाल।',
    pos: 'object-top',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const surgery = SURGERIES.find((s) => s.slug === slug);
  if (!surgery) return {};

  const isHi = locale === 'hi';
  const title = isHi && surgery.hindiTitle ? surgery.hindiTitle : surgery.title;
  const desc = isHi && surgery.hindiSummary ? surgery.hindiSummary : surgery.summary;

  return buildMetadata({
    title: `${title} | डॉ. गौरव शर्मा आगरा`,
    description: desc,
    path: `/surgeries/${surgery.slug}`,
    locale: locale as 'en' | 'hi',
  });
}

export default async function SurgeryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  const isHi = locale === 'hi';
  const surgery = SURGERIES.find((s) => s.slug === slug);

  if (!surgery) {
    notFound();
  }

  // Related procedures
  const relatedList = SURGERIES.filter((s) =>
    surgery.relatedProcedures.includes(s.slug)
  );

  // Related FAQs
  const relatedFaqs = FAQS.filter((f) => surgery.relatedFaqIds.includes(f.id));

  const displayTitle = isHi && surgery.hindiTitle ? surgery.hindiTitle : surgery.title;
  const displayShortTitle = isHi && surgery.hindiShortTitle ? surgery.hindiShortTitle : surgery.shortTitle;
  const displayCategory = isHi && surgery.hindiCategory ? surgery.hindiCategory : surgery.category;
  const displayStay = isHi && surgery.hindiHospitalStay ? surgery.hindiHospitalStay : surgery.hospitalStay;
  const displaySummary = isHi && surgery.hindiSummary ? surgery.hindiSummary : surgery.summary;
  const displayIndication = isHi && surgery.hindiIndication ? surgery.hindiIndication : surgery.indication;

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      {/* MedicalProcedure JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getMedicalProcedureJsonLd(surgery)),
        }}
      />

      {/* Breadcrumb strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            {
              label: isHi ? 'सर्जिकल प्रक्रियाएं' : 'Surgical Procedures',
              href: `/${locale}/surgeries`,
            },
            {
              label: displayShortTitle,
              href: `/${locale}/surgeries/${surgery.slug}`,
              active: true,
            },
          ]}
        />
      </div>

      {/* Hero Header */}
      <header className="py-12 md:py-16 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="teal" size="sm">
              {displayCategory}
            </Badge>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#566474] bg-[#FAF8F4] px-3 py-1 rounded-full border border-[#E5DFD5]">
              <Clock className="w-3.5 h-3.5 text-[#C28E38]" />
              {isHi ? `अस्पताल में ठहराव: ${displayStay}` : `Hospital Stay: ${displayStay}`}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight leading-tight">
            {displayTitle}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
            {displaySummary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button
              href={`/${locale}/contact?concern=${encodeURIComponent(surgery.slug)}`}
              variant="accent"
              size="lg"
              className="font-semibold shadow-xs"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {isHi ? 'इस प्रक्रिया हेतु डॉ. शर्मा से परामर्श लें' : 'Consult Dr. Sharma for this Procedure'}
            </Button>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                isHi
                  ? `नमस्ते डॉ. गौरव शर्मा क्लिनिक, मुझे ${displayTitle} के संबंध में परामर्श लेना है।`
                  : `Hello Dr. Gaurav Sharma Clinic, I would like to consult regarding ${surgery.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/15 text-[#075E54] border border-[#25D366]/30 text-sm font-semibold hover:bg-[#25D366]/25 transition-colors min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>{isHi ? 'व्हाट्सएप परामर्श' : 'WhatsApp Consultation'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        {SURGERY_VISUALS[surgery.slug] && (
          <div className="bg-white rounded-3xl border border-[#E2DBD0] overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 relative aspect-[4/3] bg-slate-900">
              <Image
                src={SURGERY_VISUALS[surgery.slug].src}
                alt={
                  isHi
                    ? SURGERY_VISUALS[surgery.slug].hiCaption
                    : SURGERY_VISUALS[surgery.slug].enCaption
                }
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, 720px"
                className={`object-cover ${SURGERY_VISUALS[surgery.slug].pos || 'object-center'}`}
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E8A] block">
                {isHi ? 'वास्तविक ऑपरेशन थिएटर झलक' : 'Operative Theatre Proof'}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2744]">
                {displayShortTitle}
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {isHi
                  ? SURGERY_VISUALS[surgery.slug].hiCaption
                  : SURGERY_VISUALS[surgery.slug].enCaption}
              </p>
            </div>
          </div>
        )}

        {/* Section 1: Clinical Indication */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#0D7E8A]/10 text-[#0D7E8A]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
              {isHi ? 'क्लिनिकल आवश्यकता (सर्जरी कब आवश्यक होती है)' : 'Clinical Indication (When Surgery Is Indicated)'}
            </h2>
          </div>
          <p className="text-base text-[#334155] leading-relaxed pl-0 sm:pl-10">
            {displayIndication}
          </p>
        </section>

        {/* Section 2: Operative Highlights */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#0F2744]/10 text-[#0F2744]">
              <ShieldCheck className="w-5 h-5 text-[#0D7E8A]" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
              {isHi ? 'सर्जरी के मुख्य बिंदु एवं सर्जिकल तकनीक' : 'Operative Highlights & Surgical Craft'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(isHi && surgery.hindiHighlights ? surgery.hindiHighlights : surgery.highlights).map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] space-y-2 flex flex-col justify-between"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0F2744] text-white flex items-center justify-center text-xs font-bold font-mono">
                  0{idx + 1}
                </div>
                <p className="text-sm text-[#334155] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Step-by-Step Procedure in Plain Language */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#C28E38]/15 text-[#C28E38]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
              {isHi ? 'सर्जरी के चरण (सरल भाषा में)' : 'Procedure Steps in Plain Language'}
            </h2>
          </div>

          <div className="space-y-3.5 pl-0 sm:pl-2">
            {(isHi && surgery.hindiProcedureSteps ? surgery.hindiProcedureSteps : surgery.procedureSteps).map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] flex items-start gap-3.5"
              >
                <span className="w-6 h-6 rounded-full bg-[#0F2744] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-sm text-[#334155] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Recovery & Mobilization Timeline */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E8A] block">
              {isHi ? 'पुनर्वास एवं स्वास्थ्य लाभ' : 'Patient Rehabilitation'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2744] mt-1">
              {isHi ? 'रिकवरी एवं चलने-फिरने की समय-सीमा' : 'Recovery & Mobilization Timeline'}
            </h2>
            <p className="text-xs sm:text-sm text-[#566474] mt-1">
              {isHi
                ? 'स्वतंत्र रूप से चलने और सामान्य दिनचर्या में सुरक्षित वापसी हेतु चरणबद्ध लक्ष्य।'
                : 'Objective milestones guiding your safe return to independent walking and daily routine.'}
            </p>
          </div>

          <div className="space-y-4">
            {surgery.recoveryTimeline.map((milestone, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0F2744]/5 border border-[#0F2744]/10 space-y-1.5"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E8A]">
                  {isHi && milestone.hindiTimeframe ? milestone.hindiTimeframe : milestone.timeframe}
                </span>
                <h3 className="font-serif font-bold text-base text-[#0F2744]">
                  {isHi && milestone.hindiHeadline ? milestone.hindiHeadline : milestone.headline}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {isHi && milestone.hindiDescription ? milestone.hindiDescription : milestone.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Risks & Alternatives */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
              {isHi ? 'गैर-सर्जिकल विकल्प, जोखिम एवं पारदर्शिता' : 'Alternatives, Risks & Surgical Transparency'}
            </h2>
            <Badge variant="gold" size="sm">
              {isHi ? 'पारदर्शी सहमति' : 'Informed Consent'}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Non-Surgical Alternatives */}
            <div className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2744]">
                {isHi ? 'सुरक्षित गैर-सर्जिकल विकल्प' : 'Conservative & Non-Surgical Alternatives'}
              </h3>
              <ul className="space-y-2">
                {(isHi && surgery.risksAndAlternatives.hindiAlternatives ? surgery.risksAndAlternatives.hindiAlternatives : surgery.risksAndAlternatives.alternatives).map((alt, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#475569] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{alt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documented Risks & Mitigations */}
            <div className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                {isHi ? 'संभावित जोखिम एवं सुरक्षा उपाय' : 'Documented Risks & Prophylaxis'}
              </h3>
              <ul className="space-y-2">
                {(isHi && surgery.risksAndAlternatives.hindiRisks ? surgery.risksAndAlternatives.hindiRisks : surgery.risksAndAlternatives.risks).map((risk, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#475569] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{risk.replace('// NEEDS DOCTOR REVIEW: ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-xs text-[#64748B] italic leading-relaxed border-t border-[#F0EBE1] pt-4">
            {isHi && surgery.risksAndAlternatives.hindiNote ? surgery.risksAndAlternatives.hindiNote : surgery.risksAndAlternatives.note}
          </p>
        </section>

        {/* Section 6: Related Surgical Procedures */}
        {relatedList.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
              {isHi ? 'संबंधित जोड़ पुनर्निर्माण प्रक्रियाएं' : 'Related Reconstructive Procedures'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedList.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${locale}/surgeries/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white border border-[#E2DBD0] hover:border-[#0D7E8A] transition-all shadow-xs flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E8A]">
                      {isHi && rel.hindiCategory ? rel.hindiCategory : rel.category}
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#0F2744] group-hover:text-[#0D7E8A] transition-colors">
                      {isHi && rel.hindiTitle ? rel.hindiTitle : rel.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#94A3B8] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 7: Related FAQs */}
        {relatedFaqs.length > 0 && (
          <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#0F2744] mb-2">
              {isHi ? 'इस प्रक्रिया से जुड़े सामान्य प्रश्न' : 'Frequently Asked Questions for this Procedure'}
            </h2>
            <div className="space-y-3">
              {relatedFaqs.map((faq) => (
                <div key={faq.id} className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9]">
                  <h3 className="font-bold text-sm text-[#0F2744]">
                    {isHi && faq.hindiQuestion ? faq.hindiQuestion : faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1.5 leading-relaxed">
                    {(isHi && faq.hindiAnswer ? faq.hindiAnswer : faq.answer).replace('// NEEDS DOCTOR REVIEW: ', '')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ethical Compliance Banner */}
        <ComplianceBanner showCta={true} ctaConcern={surgery.slug} />
      </div>

      <BookingCTA
        concern={surgery.slug}
        title={
          isHi
            ? `${displayShortTitle} हेतु परामर्श बुक करें`
            : `Schedule Consultation for ${surgery.shortTitle}`
        }
        subtitle={
          isHi
            ? `सत्यम कॉम्प्लेक्स, सिकंदरा में डॉ. गौरव शर्मा के साथ अपनी सर्जिकल जांच पर सीधी चर्चा करें। अपनी पुरानी एक्स-रे व एमआरआई फिल्में साथ लाएं।`
            : `Discuss your surgical options directly with Dr. Gaurav Sharma at Satyam Complex, Sikandra. Bring your physical X-ray or MRI films.`
        }
      />
    </div>
  );
}
