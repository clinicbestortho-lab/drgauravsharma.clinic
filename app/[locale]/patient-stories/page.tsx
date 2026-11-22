import React from 'react';
import type { Metadata } from 'next';
import {
  FEATURE_FLAG_PATIENT_STORIES,
  SEED_PATIENT_STORIES,
} from '@/content/patientStories';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookingCTA } from '@/components/layout/BookingCTA';
import { ShieldCheck, AlertCircle, Quote, CheckCircle2, User } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title:
      locale === 'hi'
        ? 'मरीजों के अनुभव एवं रिकवरी मार्गदर्शिका | डॉ. गौरव शर्मा'
        : 'Patient Recovery Records & Regulatory Notice | Dr. Gaurav Sharma',
    description:
      'Information regarding patient recovery pathways and National Medical Commission (NMC) regulatory standards on clinical transparency and patient testimonials.',
    path: '/patient-stories',
    locale: locale as 'en' | 'hi',
  });
}

export default function PatientStoriesPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: 'Patient Stories', href: '/patient-stories', active: true }]} />
      </div>

      <header className="py-12 md:py-16 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="teal" size="sm" className="mb-3">
            Clinical Transparency & NMC Ethics
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight leading-tight">
            Patient Recovery Experiences
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
            Ethical clinical communication governed by National Medical Commission (NMC) professional
            standards and written patient consent.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {!FEATURE_FLAG_PATIENT_STORIES ? (
          /* Feature Flag Disabled State (Default per NMC Regulations) */
          <div className="bg-white rounded-3xl border border-[#E2DBD0] p-8 sm:p-12 shadow-xs space-y-6 text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#0F2744]/8 text-[#0F2744] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-7 h-7 text-[#0D7E8A]" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-bold text-[#0F2744]">
                Regulatory Compliance Notice
              </h2>
              <p className="text-xs font-semibold text-[#0D7E8A] uppercase tracking-wider">
                National Medical Commission (NMC) Professional Conduct Regulations
              </p>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed">
              In strict accordance with the professional code of ethics established by the National
              Medical Commission (NMC) and the Uttar Pradesh Medical Council, public display of commercial
              testimonials and comparative solicitation is strictly restricted.
            </p>

            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EAE4D9] text-xs text-[#566474] text-left space-y-1.5">
              <p className="font-semibold text-[#1A2530]">Our Commitment to Clinical Integrity:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Every joint presentation and surgical outcome depends on individual biological factors.</li>
                <li>We do not publish commercial before-and-after promotional claims.</li>
                <li>Operative intervention is recommended solely following physical in-person examination.</li>
              </ul>
            </div>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md">
                Schedule Personal Clinical Evaluation
              </Button>
            </div>
          </div>
        ) : (
          /* Feature Flag Enabled State with Seed Data */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SEED_PATIENT_STORIES.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-3xl border border-[#E2DBD0] p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-full bg-[#0F2744]/10 text-[#0F2744] flex items-center justify-center font-bold text-sm">
                          {story.patientInitials.slice(0, 2)}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-[#0F2744]">{story.patientInitials}</h3>
                          <span className="text-xs text-[#7C8894]">
                            Age {story.age} • {story.location}
                          </span>
                        </div>
                      </div>
                      <Badge variant="green" size="sm">
                        Consent on File
                      </Badge>
                    </div>

                    <div className="mb-3">
                      <span className="text-xs font-bold text-[#0D7E8A] block">Condition:</span>
                      <p className="text-xs font-semibold text-[#1A2530]">{story.condition}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE4D9] mb-4 text-xs">
                      <span className="font-bold text-[#0F2744] block mb-0.5">Clinical Pathway:</span>
                      <p className="text-[#475569]">{story.clinicalPathway}</p>
                    </div>

                    <blockquote className="text-xs text-[#475569] italic relative pl-4 border-l-2 border-[#C28E38] leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#F0EBE1] text-[11px] text-[#64748B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{story.outcomeSummary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <BookingCTA />
    </div>
  );
}
