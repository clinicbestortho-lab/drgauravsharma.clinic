import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: 'Patient Media & Informed Consent Policy | Dr. Gaurav Sharma',
    description: 'Guidelines on clinical photography, patient consent, and educational media standards.',
    path: '/consent',
    locale: locale as 'en' | 'hi',
  });
}

export default function ConsentPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: 'Patient Media Consent', href: '/consent', active: true }]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <header className="border-b border-[#EAE4D9] pb-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F2744]">
            Patient Media & Informed Consent Policy
          </h1>
          <p className="text-xs text-[#7C8894] mt-2">
            Published in accordance with medical ethics and Indian clinical documentation standards.
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6 text-sm text-[#475569] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              1. Policy on Clinical Photography & Videos
            </h2>
            <p>
              Dr. Gaurav Sharma Orthopaedic Clinic strictly limits clinical photography and video recording.
              Any diagnostic or procedural imagery captured during examinations or surgeries is conducted solely
              for clinical case records, surgical progress tracking, or peer-reviewed educational discussion.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              2. Explicit Written Informed Consent
            </h2>
            <p>
              No patient image, video, X-ray film, or recovery log is ever used for educational illustration
              without the patient&apos;s (or legal guardian&apos;s) prior explicit written informed consent. Consent forms
              are maintained physically within clinical archives and may be revoked by the patient at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              3. Anonymization & De-identification
            </h2>
            <p>
              When clinical case data or radiographs are presented in academic conferences, research papers,
              or educational video diagrams, all personal identifiable information (full names, patient IDs,
              identifying facial marks) is permanently de-identified and redacted to preserve absolute confidentiality.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              4. Patient Rights
            </h2>
            <p>
              Refusal to participate in any educational photography or video documentation does NOT in any way
              affect the quality, attentiveness, or standard of orthopaedic medical care provided to the patient.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
