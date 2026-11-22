'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface ComplianceBannerProps {
  showCta?: boolean;
  ctaConcern?: string;
  className?: string;
}

export function ComplianceBanner({
  showCta = true,
  ctaConcern,
  className = '',
}: ComplianceBannerProps) {
  const locale = useLocale();
  const isHi = locale === 'hi';

  const href = ctaConcern
    ? `/${locale}/contact?concern=${encodeURIComponent(ctaConcern)}`
    : `/${locale}/contact`;

  return (
    <div
      className={`rounded-2xl border border-[#D8D2C6] bg-[#F7F4EE] p-6 md:p-8 ${className}`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-[#0F2744]/10 text-[#0F2744] shrink-0 mt-0.5">
            <ShieldCheck className="w-6 h-6 text-[#0D7E8A]" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-[#0F2744] mb-1">
              {isHi
                ? 'राष्ट्रीय चिकित्सा आयोग (NMC) आचार संहिता एवं सर्जिकल सूचना'
                : 'NMC Regulatory Compliance & Surgical Ethics Notice'}
            </h4>
            <p className="text-sm text-[#566474] leading-relaxed max-w-3xl">
              {isHi
                ? 'सर्जिकल उपचार की सलाह केवल क्लिनिक में प्रत्यक्ष शारीरिक जांच, डिजिटल एक्स-रे व एमआरआई रिपोर्ट की समीक्षा के बाद ही दी जाती है, जब बिना ऑपरेशन के अन्य सभी सुरक्षित विकल्प समाप्त हो चुके हों। यहां कोई व्यावसायिक गारंटी या प्रचार का दावा नहीं है।'
                : 'Operative treatment is recommended strictly after in-person physical clinical examination, physical film review (X-rays/MRI), and when conservative joint preservation avenues have been exhausted or acute skeletal trauma mandates anatomical reconstruction. No commercial guarantees or solicitations are implied.'}
            </p>
          </div>
        </div>
        {showCta && (
          <div className="shrink-0 self-start md:self-center">
            <Button href={href} variant="primary" size="md">
              {isHi ? 'सर्जिकल परामर्श का समय लें' : 'Request Surgical Evaluation'}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
