'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { CLINIC_VIDEOS } from '@/content/videos';
import { CLINIC_SOCIALS } from '@/lib/clinic';
import { getVideoObjectJsonLd } from '@/lib/seo';
import {
  Play,
  Youtube,
  Instagram,
  Facebook,
  ExternalLink,
  CheckCircle2,
  Tv,
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function VideoGuidance() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const t = useTranslations('videoGuidance');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#EAE4D9]">
      {/* VideoObject JSON-LD schemas */}
      {CLINIC_VIDEOS.map((video) => (
        <script
          key={video.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getVideoObjectJsonLd(video)),
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 text-red-700 text-xs font-semibold tracking-wide border border-red-600/20 mb-3">
              <Tv className="w-3.5 h-3.5" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2744] tracking-tight">
              {t('title')}
            </h2>
            <p className="mt-3 text-base text-[#566474] leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={CLINIC_SOCIALS.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors shadow-xs"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </a>
            <a
              href={CLINIC_SOCIALS.instagramReel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2DBD0] text-[#0F2744] text-xs font-semibold hover:bg-[#F3EFEA] transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Instagram</span>
            </a>
            <a
              href={CLINIC_SOCIALS.facebookPost}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2DBD0] text-[#0F2744] text-xs font-semibold hover:bg-[#F3EFEA] transition-colors"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CLINIC_VIDEOS.map((video) => {
            const isPlaying = activeVideoId === video.id;

            return (
              <div
                key={video.id}
                className="bg-white rounded-3xl border border-[#E2DBD0] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Lite Embed Container */}
                <div className="relative aspect-video bg-[#0A1828] w-full overflow-hidden">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                      title={isHi ? video.titleHindi : video.titleEnglish}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setActiveVideoId(video.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveVideoId(video.id);
                        }
                      }}
                      className="relative w-full h-full cursor-pointer group"
                      aria-label={`Play video: ${video.titleEnglish}`}
                    >
                      <Image
                        src={video.thumbnailUrl}
                        alt={video.titleEnglish}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-red-700 transition-all">
                          <Play className="w-7 h-7 fill-white ml-1" />
                        </div>
                      </div>

                      {/* Video Duration & Badge */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                        <Badge variant="teal" size="sm" className="bg-black/60 text-white border-white/20">
                          {isHi ? 'हिन्दी मार्गदर्शन' : 'Hindi Guidance'}
                        </Badge>
                        <span className="bg-black/70 px-2 py-0.5 rounded text-[11px] font-mono">
                          {video.durationDisplay}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2744] leading-snug">
                      {isHi ? video.titleHindi : video.titleEnglish}
                    </h3>
                    {!isHi && video.titleHindi && (
                      <p className="text-xs font-medium text-[#7C8894] mt-1">
                        {video.titleHindi}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed">
                      {video.descriptionHindi}
                    </p>

                    {/* Key Discussion Points */}
                    <div className="mt-4 pt-4 border-t border-[#F0EBE1] space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F2744] block">
                        {t('keyTopics')}
                      </span>
                      {video.keyPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-red-600 hover:text-red-700 hover:underline inline-flex items-center gap-1.5"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>{t('watchYoutube')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <Button
                      href={`/${locale}/contact?concern=knee-consultation`}
                      variant="ghost"
                      size="sm"
                      className="text-xs"
                    >
                      {t('consultDoctor')}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic In-OT Hindi Clinical Awareness Clip */}
        <div className="mt-10 bg-white rounded-3xl border border-[#E2DBD0] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 bg-[#0A1828] flex items-center justify-center p-4">
            <video
              controls
              preload="metadata"
              playsInline
              poster="/images/clinic/ot-radiation-protection.jpg"
              className="w-full max-h-[420px] rounded-2xl object-contain bg-black"
            >
              <source src="/videos/pediatric-fracture-ot-guide.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <Badge variant="teal" size="sm">
              {t('otClipBadge')}
            </Badge>
            <h3 className="font-serif text-2xl font-bold text-[#0F2744]">
              {t('otClipTitle')}
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              {t('otClipDesc')}
            </p>
            <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-[#334155]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t('otClipPoint1')}</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-[#334155]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t('otClipPoint2')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
