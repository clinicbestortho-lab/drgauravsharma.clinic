'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { CLINIC_CONTACT } from '@/lib/clinic';

export function MobileStickyBar() {
  const locale = useLocale();
  const isHi = locale === 'hi';

  return (
    <aside
      aria-label={isHi ? 'त्वरित संपर्क विकल्प' : 'Quick Actions'}
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F4]/95 backdrop-blur-md border-t border-[#E5DFD5] px-3 py-2.5 shadow-lg lg:hidden"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_CONTACT.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#E5DFD5] text-[#0F2744] hover:bg-[#F3EFEA] active:scale-[0.98] transition-all text-center min-h-[48px]"
        >
          <Phone className="w-5 h-5 text-[#0D7E8A] mb-0.5" />
          <span className="text-[12px] font-bold leading-none tracking-tight">
            {isHi ? 'कॉल करें' : 'Call'}
          </span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
            isHi
              ? 'नमस्ते डॉ. गौरव शर्मा क्लिनिक, मुझे ऑर्थोपेडिक परामर्श हेतु जानकारी चाहिए।'
              : CLINIC_CONTACT.whatsappPrefill
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#075E54] hover:bg-[#25D366]/25 active:scale-[0.98] transition-all text-center min-h-[48px]"
        >
          <MessageSquare className="w-5 h-5 text-[#25D366] mb-0.5" />
          <span className="text-[12px] font-bold leading-none tracking-tight">
            {isHi ? 'व्हाट्सएप' : 'WhatsApp'}
          </span>
        </a>

        <Link
          href={`/${locale}/contact`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#0F2744] text-white hover:bg-[#16365D] active:scale-[0.98] transition-all text-center min-h-[48px] shadow-sm"
        >
          <Calendar className="w-5 h-5 text-[#C28E38] mb-0.5" />
          <span className="text-[12px] font-bold leading-none tracking-tight">
            {isHi ? 'अपॉइंटमेंट' : 'Book'}
          </span>
        </Link>
      </div>
    </aside>
  );
}
