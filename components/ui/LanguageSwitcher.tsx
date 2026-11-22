'use client';

import React from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = (newLocale: 'en' | 'hi') => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-1 rounded-full bg-[#FAF8F4] border border-[#E5DFD5] text-xs font-semibold ${className}`}
    >
      <button
        type="button"
        onClick={() => handleToggle('en')}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          locale === 'en'
            ? 'bg-[#0F2744] text-white shadow-xs'
            : 'text-[#566474] hover:text-[#0F2744]'
        }`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleToggle('hi')}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          locale === 'hi'
            ? 'bg-[#0F2744] text-white shadow-xs'
            : 'text-[#566474] hover:text-[#0F2744]'
        }`}
        aria-pressed={locale === 'hi'}
      >
        हिन्दी
      </button>
    </div>
  );
}
