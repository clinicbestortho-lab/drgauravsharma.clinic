'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  const locale = useLocale();
  const isHi = locale === 'hi';

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF8F4] px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-5">
        <span className="font-serif text-6xl font-bold text-[#0F2744]">404</span>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2744]">
          {isHi ? 'पेज उपलब्ध नहीं है' : 'Clinical Page Not Found'}
        </h1>
        <p className="text-sm text-[#566474] leading-relaxed">
          {isHi
            ? 'माफ कीजिए, यह पृष्ठ या क्लिनिकल गाइड उपलब्ध नहीं है। आप होम पेज पर लौट सकते हैं या क्लिनिक से संपर्क कर सकते हैं।'
            : 'The requested page or procedure guide could not be located. You can navigate back to the home page, explore our areas of care, or contact the clinic reception.'}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href={`/${locale}`} variant="primary" size="md">
            <Home className="w-4 h-4 mr-1.5" />
            {isHi ? 'मुख्य पृष्ठ पर जाएं' : 'Back to Home'}
          </Button>

          <Button href={`/${locale}/surgeries`} variant="secondary" size="md">
            {isHi ? 'सर्जरी प्रक्रियाएं देखें' : 'Browse Surgeries'}
          </Button>
        </div>
      </div>
    </div>
  );
}
