'use client';

import React from 'react';
import { useLocale } from 'next-intl';

export default function Loading() {
  const locale = useLocale();
  const isHi = locale === 'hi';

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAF8F4] px-4">
      <div className="w-12 h-12 rounded-full border-4 border-[#0F2744]/20 border-t-[#0F2744] animate-spin" />
      <p className="text-sm font-semibold text-[#0F2744] mt-4 tracking-wide">
        {isHi
          ? 'क्लिनिकल जानकारी लोड हो रही है...'
          : 'Loading Orthopaedic Clinic Information...'}
      </p>
    </div>
  );
}
