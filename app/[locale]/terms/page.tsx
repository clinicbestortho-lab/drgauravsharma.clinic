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
    title: 'Terms of Use | Dr. Gaurav Sharma Orthopaedic Clinic',
    description: 'Terms of use, clinical disclaimer, and website terms of service.',
    path: '/terms',
    locale: locale as 'en' | 'hi',
  });
}

export default function TermsPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: 'Terms of Use', href: '/terms', active: true }]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <header className="border-b border-[#EAE4D9] pb-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F2744]">
            Terms of Use & Clinical Disclaimer
          </h1>
          <p className="text-xs text-[#7C8894] mt-2">
            Published in accordance with National Medical Commission (NMC) professional conduct standards.
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6 text-sm text-[#475569] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              1. Informational Purpose Only
            </h2>
            <p>
              The content published on this website (including condition summaries, procedure guides,
              recovery milestones, and educational videos) is intended solely for patient guidance, clinic
              orientation, and public awareness. It does NOT constitute formal medical advice, clinical diagnosis,
              or a definitive prescription.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              2. Necessity of In-Person Clinical Examination
            </h2>
            <p>
              An orthopaedic condition cannot be definitively diagnosed or treated remotely. Every surgical
              or non-surgical treatment recommendation by Dr. Gaurav Sharma is made strictly after an in-person
              physical consultation, anatomical palpation, and review of physical radiology films (X-rays, MRI).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              3. Emergency Trauma Protocol & Online Form Limitation
            </h2>
            <p>
              Online appointment booking forms on this website are designed for scheduled outpatient evaluations
              and must not be relied upon as the sole communication channel during acute emergencies. In cases of
              sudden fractures, joint dislocations, or severe trauma, attendants should directly contact the clinic
              emergency helpline (+91 97602 30687) for immediate surgical coordination or proceed to an emergency trauma facility.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              4. No Commercial Guarantee of Clinical Outcome
            </h2>
            <p>
              In adherence to NMC medical ethics, no guaranteed surgical outcomes, recovery speeds, or
              comparative superlatives are implied. Human healing varies according to patient biology,
              age, bone density, and compliance with rehabilitation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
