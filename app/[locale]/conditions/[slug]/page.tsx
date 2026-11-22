import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AREAS_OF_CARE } from '@/content/conditions';
import { SURGERIES } from '@/content/surgeries';
import { FAQS } from '@/content/faqs';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookingCTA } from '@/components/layout/BookingCTA';
import { CLINIC_CONTACT } from '@/lib/clinic';
import { routing } from '@/i18n/routing';
import {
  CheckCircle2,
  HelpCircle,
  Users,
  ChevronRight,
  Calendar,
  MessageSquare,
} from 'lucide-react';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  routing.locales.forEach((locale) => {
    AREAS_OF_CARE.forEach((area) => {
      params.push({ locale, slug: area.slug });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const area = AREAS_OF_CARE.find((a) => a.slug === slug);
  if (!area) return {};

  const isHi = locale === 'hi';
  const title = isHi && area.hindiTitle ? area.hindiTitle : area.title;
  const desc = isHi && area.hindiShortSummary ? area.hindiShortSummary : area.shortSummary;

  return buildMetadata({
    title: `${title} | डॉ. गौरव शर्मा आगरा`,
    description: desc,
    path: `/conditions/${area.slug}`,
    locale: locale as 'en' | 'hi',
  });
}

export default async function ConditionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  const isHi = locale === 'hi';
  const area = AREAS_OF_CARE.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  // Related surgeries
  const relatedSurgeries = SURGERIES.filter((s) =>
    area.relatedSurgeries.includes(s.slug)
  );

  // Related FAQs
  const relatedFaqs = FAQS.filter((f) => area.relatedFaqIds.includes(f.id));

  const displayTitle = isHi && area.hindiTitle ? area.hindiTitle : area.title;
  const displaySummary = isHi && area.hindiShortSummary ? area.hindiShortSummary : area.shortSummary;
  const overviewList = isHi && area.hindiFullOverview ? area.hindiFullOverview : area.fullOverview;
  const whoList = isHi && area.hindiWhoShouldConsult ? area.hindiWhoShouldConsult : area.whoShouldConsult;
  const conservativeList = isHi && area.hindiConservativeOptions ? area.hindiConservativeOptions : area.conservativeOptions;
  const surgicalList = isHi && area.hindiSurgicalConsiderations ? area.hindiSurgicalConsiderations : area.surgicalConsiderations;
  const questionsList = isHi && area.hindiCommonQuestions ? area.hindiCommonQuestions : area.commonQuestions;

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            {
              label: isHi ? 'उपचार क्षेत्र' : 'Areas of Care',
              href: `/${locale}/conditions`,
            },
            {
              label: displayTitle,
              href: `/${locale}/conditions/${area.slug}`,
              active: true,
            },
          ]}
        />
      </div>

      {/* Hero Header */}
      <header className="py-12 md:py-16 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="teal" size="sm" className="mb-3">
            {isHi ? 'क्लिनिकल विशेषज्ञता क्षेत्र' : 'Clinical Focus Area'}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight leading-tight">
            {displayTitle}
          </h1>
          {!isHi && area.hindiTitle && (
            <p className="text-sm font-semibold text-[#7C8894] mt-1">{area.hindiTitle}</p>
          )}

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
            {displaySummary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button
              href={`/${locale}/contact?concern=${encodeURIComponent(area.slug)}`}
              variant="accent"
              size="lg"
              className="font-semibold shadow-xs"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {isHi ? 'परामर्श समय बुक करें' : 'Schedule In-Person Consultation'}
            </Button>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                isHi
                  ? `नमस्ते डॉ. गौरव शर्मा क्लिनिक, मुझे ${displayTitle} के संबंध में परामर्श लेना है।`
                  : `Hello Dr. Gaurav Sharma Clinic, I would like to consult regarding ${area.title}.`
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
        {/* Section 1: Overview */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
            {isHi ? 'क्लिनिकल अवलोकन एवं परीक्षण दृष्टिकोण' : 'Clinical Overview & Diagnostic Approach'}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
            {overviewList.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Section 2: Who Should Consult */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#0F2744]/10 text-[#0F2744]">
              <Users className="w-5 h-5 text-[#0D7E8A]" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
              {isHi ? 'किन्हें परामर्श लेना चाहिए' : 'Who Should Consider Consultation'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {whoList.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] text-xs sm:text-sm text-[#334155] leading-relaxed flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0D7E8A] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Conservative Care & Surgical Considerations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Conservative Options */}
          <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#0F2744]">
              {isHi ? 'सुरक्षित गैर-सर्जिकल विकल्प' : 'Conservative Non-Surgical Options'}
            </h3>
            <ul className="space-y-2.5">
              {conservativeList.map((opt, i) => (
                <li key={i} className="text-xs sm:text-sm text-[#475569] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Surgical Considerations */}
          <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#0F2744]">
              {isHi ? 'सर्जिकल विचार एवं विकल्प' : 'Surgical Considerations'}
            </h3>
            <ul className="space-y-2.5">
              {surgicalList.length > 0 ? (
                surgicalList.map((surg, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#475569] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D7E8A] mt-2 shrink-0" />
                    <span>{surg}</span>
                  </li>
                ))
              ) : (
                <li className="text-xs sm:text-sm text-[#566474]">
                  {isHi
                    ? 'मुख्य रूप से लक्षित फिजियोथेरेपी, जीवनशैली में बदलाव और गैर-सर्जिकल उपचार द्वारा प्रबंधित किया जाता है।'
                    : 'Managed primarily via structured physical rehabilitation, lifestyle adjustments, and targeted non-operative therapies.'}
                </li>
              )}
            </ul>
          </section>
        </div>

        {/* Section 4: Related Surgeries */}
        {relatedSurgeries.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
              {isHi ? 'संबंधित जोड़ पुनर्निर्माण प्रक्रियाएं' : 'Related Reconstructive Procedures'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedSurgeries.map((surg) => (
                <Link
                  key={surg.slug}
                  href={`/${locale}/surgeries/${surg.slug}`}
                  className="p-5 rounded-2xl bg-white border border-[#E2DBD0] hover:border-[#0D7E8A] transition-all shadow-xs flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E8A]">
                      {isHi && surg.hindiHospitalStay ? surg.hindiHospitalStay : surg.hospitalStay}
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#0F2744] group-hover:text-[#0D7E8A] transition-colors">
                      {isHi && surg.hindiTitle ? surg.hindiTitle : surg.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#94A3B8] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: Common Questions */}
        <section className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 mb-2">
            <HelpCircle className="w-5 h-5 text-[#C28E38]" />
            <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
              {isHi ? 'प्रायः पूछे जाने वाले सवाल' : 'Common Clinical Inquiries Evaluated'}
            </h2>
          </div>
          <div className="space-y-3">
            {questionsList.map((q, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9]">
                <p className="font-semibold text-sm text-[#0F2744]">{q}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BookingCTA
        concern={area.slug}
        title={
          isHi
            ? `${displayTitle} हेतु क्लिनिकल परामर्श बुक करें`
            : `Book Clinical Evaluation for ${area.title.split(' ')[0]}`
        }
        subtitle={
          isHi
            ? 'सत्यम कॉम्प्लेक्स, सिकंदरा में डॉ. गौरव शर्मा के साथ अपनी एक्स-रे या एमआरआई फिल्मों की प्रत्यक्ष समीक्षा हेतु परामर्श बुक करें।'
            : 'Bring your physical X-rays, MRI plates, or past diagnostic reports for an in-depth review with Dr. Gaurav Sharma at Satyam Complex, Sikandra.'
        }
      />
    </div>
  );
}
