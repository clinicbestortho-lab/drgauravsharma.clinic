'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbListJsonLd } from '@/lib/seo';

export interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const locale = useLocale();
  const isHi = locale === 'hi';

  const homeLabel = isHi ? 'होम' : 'Home';
  const homeHref = `/${locale}`;

  const jsonLdItems = [
    { name: homeLabel, url: homeHref },
    ...items.map((item) => ({ name: item.label, url: item.href })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListJsonLd(jsonLdItems)),
        }}
      />
      <nav aria-label={isHi ? 'नेविगेशन पथ' : 'Breadcrumb'} className="py-3 text-sm text-[#566474]">
        <ol className="flex flex-wrap items-center gap-1.5 md:gap-2">
          <li className="inline-flex items-center">
            <Link
              href={homeHref}
              className="inline-flex items-center gap-1 hover:text-[#0F2744] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{homeLabel}</span>
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.href} className="inline-flex items-center gap-1.5 md:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#A0AAB5]" />
              {item.active ? (
                <span
                  aria-current="page"
                  className="font-medium text-[#0F2744] truncate max-w-[200px] md:max-w-none"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#0F2744] transition-colors truncate max-w-[160px] md:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
