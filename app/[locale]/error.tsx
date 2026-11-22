'use client';

import React, { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useLocale();
  const isHi = locale === 'hi';

  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAF8F4] px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2744]">
          {isHi ? 'कुछ तकनीकी समस्या आई है' : 'Something went wrong'}
        </h2>
        <p className="text-sm text-[#566474]">
          {isHi
            ? 'इस भाग को लोड करने में अनपेक्षित त्रुटि हुई है। कृपया पुनः प्रयास करें या सीधे क्लिनिक सहायता नंबर +91 97602 30687 पर संपर्क करें।'
            : 'An unexpected error occurred while loading this section. Please try refreshing or contact our clinic desk at +91 97602 30687.'}
        </p>
        <div className="pt-2">
          <Button onClick={() => reset()} variant="primary" size="md">
            {isHi ? 'पुनः प्रयास करें' : 'Try again'}
          </Button>
        </div>
      </div>
    </div>
  );
}
