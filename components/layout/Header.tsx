'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Phone, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { CLINIC_CONTACT, DOCTOR_PROFILE } from '@/lib/clinic';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { AnimatePresence, motion } from 'motion/react';
import { FEATURE_FLAG_PATIENT_STORIES } from '@/content/patientStories';

export function Header() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('nav');

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t('about'), href: `/${locale}/about` },
    { label: t('doctor'), href: `/${locale}/about#doctor` },
    { label: t('specialities'), href: `/${locale}/conditions` },
    { label: t('surgeries'), href: `/${locale}/surgeries` },
    ...(FEATURE_FLAG_PATIENT_STORIES ? [{ label: t('patientStories'), href: `/${locale}/patient-stories` }] : []),
    { label: t('clinic'), href: `/${locale}/clinic` },
    { label: t('faqs'), href: `/${locale}/faq` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F4]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#E5DFD5]'
            : 'bg-[#FAF8F4] py-3.5 border-b border-[#EAE4D9]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Doctor Title */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white border border-[#E2DBD0] overflow-hidden flex items-center justify-center p-0.5 shadow-xs group-hover:border-[#0D7E8A] transition-colors">
              <Image
                src="/images/logo/logo-icon-square.png"
                alt="Dr. Gaurav Sharma Orthopaedic Clinic Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base md:text-lg text-[#0F2744] tracking-tight group-hover:text-[#0D7E8A] transition-colors leading-snug">
                {isHi && DOCTOR_PROFILE.hindiName ? DOCTOR_PROFILE.hindiName : DOCTOR_PROFILE.name}
              </span>
              <span className="text-xs text-[#566474] font-medium tracking-tight">
                {isHi ? 'ऑर्थोपेडिक एवं जोड़ प्रत्यारोपण' : 'Orthopaedics & Joint Replacement'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-[#4B5563]"
          >
            {navLinks.map((link) => {
              const baseHref = link.href.split('#')[0];
              const isActive =
                baseHref === `/${locale}`
                  ? pathname === `/${locale}` || pathname === '/'
                  : pathname?.startsWith(baseHref);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-[#0F2744] relative py-1 ${
                    isActive ? 'text-[#0F2744] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D7E8A] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Phone */}
          <div className="hidden lg:flex items-center gap-3.5">
            <a
              href={`tel:${CLINIC_CONTACT.primaryPhone}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#0F2744] hover:text-[#0D7E8A] px-3 py-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0D7E8A]" />
              <span>{CLINIC_CONTACT.displayPhone}</span>
            </a>

            <Button href={`/${locale}/contact`} variant="primary" size="sm" className="shadow-xs">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {t('bookConsultation')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? (isHi ? 'मेनू बंद करें' : 'Close navigation menu') : (isHi ? 'मेनू खोलें' : 'Open navigation menu')}
              className="p-2 rounded-lg text-[#0F2744] hover:bg-[#EAE4D9] focus-visible:outline-[#0F2744]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 top-[96px] z-30 bg-[#FAF8F4] overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-[#E5DFD5] lg:hidden"
          >
            <div className="space-y-4">
              <div className="pb-4 border-b border-[#E5DFD5]">
                <p className="text-xs uppercase tracking-wider text-[#7C8894] font-semibold mb-3">
                  {t('clinicNav')}
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-[#1A2530] hover:text-[#0D7E8A] p-2 rounded-lg hover:bg-[#F3EFEA] transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#8C9BAA]" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <p className="text-xs uppercase tracking-wider text-[#7C8894] font-semibold">
                  {t('directInquiries')}
                </p>
                <a
                  href={`tel:${CLINIC_CONTACT.primaryPhone}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5DFD5] text-[#0F2744] font-semibold text-base"
                >
                  <Phone className="w-5 h-5 text-[#0D7E8A]" />
                  <span>{t('call')} {CLINIC_CONTACT.displayPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                    isHi
                      ? 'नमस्ते डॉ. गौरव शर्मा क्लिनिक, मुझे ऑर्थोपेडिक परामर्श हेतु जानकारी चाहिए।'
                      : CLINIC_CONTACT.whatsappPrefill
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#075E54] font-semibold text-base"
                >
                  <span className="w-5 h-5 flex items-center justify-center font-bold">WA</span>
                  <span>{t('whatsappMsg')}</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5DFD5] text-center text-xs text-[#7C8894]">
              <p>{isHi ? 'सत्यम कॉम्प्लेक्स, सेक्टर-12A, सिकंदरा, आगरा' : 'Satyam Complex, Sector-12A, Sikandra, Agra'}</p>
              <p className="mt-1">
                {isHi && DOCTOR_PROFILE.hindiName ? DOCTOR_PROFILE.hindiName : DOCTOR_PROFILE.name} • {DOCTOR_PROFILE.degrees.join(', ')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
