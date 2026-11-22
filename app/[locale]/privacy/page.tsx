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
    title: 'Privacy Policy | Dr. Gaurav Sharma Orthopaedic Clinic',
    description: 'Privacy policy and patient healthcare information handling standards.',
    path: '/privacy',
    locale: locale as 'en' | 'hi',
  });
}

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy', active: true }]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <header className="border-b border-[#EAE4D9] pb-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F2744]">
            Privacy Policy & Health Data Handling
          </h1>
          <p className="text-xs text-[#7C8894] mt-2">
            Last Updated: November 2024 • In compliance with Indian Information Technology & Digital Personal Data Protection (DPDP) Acts.
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-[#E2DBD0] p-6 sm:p-10 shadow-xs space-y-6 text-sm text-[#475569] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              1. Commitment to Patient Confidentiality
            </h2>
            <p>
              Dr. Gaurav Sharma Orthopaedic Clinic respects your confidentiality and adheres strictly to
              medical privacy ethics. Any personal contact details, consultation inquiries, or clinical notes
              submitted through this website are used exclusively for scheduling appointments and direct clinical
              coordination.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              2. Data Collected Online
            </h2>
            <p>
              When requesting a consultation slot, we collect your name, phone number, preferred session,
              and stated orthopaedic concern. We do not collect credit card numbers, net banking credentials, or
              charge fees online through this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              3. Protection of Diagnostic Records
            </h2>
            <p>
              Any clinical information or reports shared with our clinic desk are stored securely and never
              disclosed to third-party commercial marketing entities. Diagnostic films (X-rays, MRI scans)
              remain the physical property of the patient.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              4. Cookies and Web Analytics
            </h2>
            <p>
              This website employs minimal, privacy-friendly technical cookies solely to remember language
              preferences (English / Hindi) and text-size accessibility toggles. No invasive cross-site user
              tracking or third-party advertising cookies are deployed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#0F2744]">
              5. Contact for Privacy Inquiries
            </h2>
            <p>
              For questions concerning health data privacy or record verification, please contact our clinic
              desk at Satyam Complex, Sector-12A, Sikandra, Agra, or call +91 97602 30687.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
