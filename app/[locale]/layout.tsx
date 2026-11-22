import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing, Locale } from '@/i18n/routing';
import { fontPlayfair, fontJakarta, fontDevanagari } from '@/lib/fonts';
import { buildMetadata, getClinicJsonLd, getPhysicianJsonLd } from '@/lib/seo';
import { TopUtilityStrip } from '@/components/layout/TopUtilityStrip';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return buildMetadata({
    title: isHi
      ? 'डॉ. गौरव शर्मा ऑर्थोपेडिक क्लिनिक | सिकंदरा, आगरा'
      : 'Dr. Gaurav Sharma Orthopaedic Clinic | Sikandra, Agra',
    description: isHi
      ? 'सिकंदरा, आगरा में डॉ. गौरव शर्मा (एम.एस. ऑर्थोपेडिक्स, 20+ वर्ष अनुभव) द्वारा विशेषज्ञ हड्डी एवं जोड़ प्रत्यारोपण परामर्श। घुटना प्रत्यारोपण, आर्थ्रोस्कोपी, फ्रैक्चर उपचार एवं जोड़ संरक्षण।'
      : 'Consultant orthopaedic and joint replacement care in Sikandra, Agra by Dr. Gaurav Sharma (MS Orthopaedics, 20+ Years Experience). Specializing in knee replacement, arthroscopy, fracture care, and joint preservation.',
    locale: locale as 'en' | 'hi',
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const isHi = locale === 'hi';
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${fontPlayfair.variable} ${fontJakarta.variable} ${fontDevanagari.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Global Clinic & Physician Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getClinicJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPhysicianJsonLd()),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between selection:bg-[#0D7E8A] selection:text-white">
        <a href="#main-content" className="skip-link">
          {isHi ? 'मुख्य सामग्री पर जाएं' : 'Skip to main clinical content'}
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen">
            <TopUtilityStrip />
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <MobileStickyBar />
          </div>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
