'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Type } from 'lucide-react';

export function TextSizeToggle({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('dr_sharma_font_size');
    if (saved === 'large') {
      setIsLarge(true);
      document.documentElement.setAttribute('data-font-size', 'large');
    }
  }, []);

  const toggleSize = () => {
    const next = !isLarge;
    setIsLarge(next);
    if (next) {
      document.documentElement.setAttribute('data-font-size', 'large');
      localStorage.setItem('dr_sharma_font_size', 'large');
    } else {
      document.documentElement.removeAttribute('data-font-size');
      localStorage.setItem('dr_sharma_font_size', 'standard');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleSize}
      title={
        isLarge
          ? isHi
            ? 'सामान्य फॉन्ट आकार पर रीसेट करें'
            : 'Reset to normal text size'
          : isHi
          ? 'सुविधाजनक पढ़ने हेतु बड़ा फॉन्ट'
          : 'Enlarge text for easier reading'
      }
      aria-label={
        isLarge
          ? isHi
            ? 'सामान्य फॉन्ट आकार'
            : 'Normal text size'
          : isHi
          ? 'बड़ा फॉन्ट आकार'
          : 'Larger text size'
      }
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border border-[#E5DFD5] bg-[#FAF8F4] text-[#566474] hover:text-[#0F2744] hover:border-[#D1C7B7] transition-colors ${className}`}
    >
      <Type className="w-3.5 h-3.5" />
      <span>{isLarge ? (isHi ? 'A सामान्य' : 'A Normal') : (isHi ? 'A+ बड़ा फॉन्ट' : 'A+ Large')}</span>
    </button>
  );
}
