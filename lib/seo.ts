import { Metadata } from 'next';
import {
  DOCTOR_PROFILE,
  CLINIC_LOCATION,
  CLINIC_CONTACT,
  CLINIC_SOCIALS,
} from './clinic';
import { SurgeryItem } from '@/content/surgeries';
import { FaqItem } from '@/content/faqs';
import { VideoGuidanceItem } from '@/content/videos';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://drgauravsharma.clinic';
export const SITE_NAME =
  'Dr. Gaurav Sharma Orthopaedic Clinic | Sikandra, Agra';
export const DEFAULT_DESCRIPTION =
  'Senior Orthopaedic & Joint Replacement Surgeon in Sikandra, Agra — Dr. Gaurav Sharma (MBBS, MS Orthopaedics, Former Assistant Professor, 20+ Yrs Surgical Exp). Specializing in Total Knee Replacement (TKR), Total Hip Replacement (THR), Arthroscopic ACL & Shoulder Surgery, Revision Arthroplasty, and 24/7 Fracture Trauma Surgery.';

export const SEO_KEYWORDS = [
  'orthopaedic doctor in Agra',
  'knee replacement Agra',
  'Sikandra orthopaedic',
  'ACL surgery Agra',
  'shoulder pain doctor Agra',
  'fracture clinic Sikandra',
  'joint pain specialist Agra',
  'Dr Gaurav Sharma orthopaedic surgeon',
  'best orthopaedic clinic Agra',
  'hip replacement surgeon Agra',
  'sports injury specialist Agra',
  'orthopaedic doctor Bodla Dayalbagh',
];

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  locale = 'en',
}: {
  title: string;
  description?: string;
  path?: string;
  locale?: 'en' | 'hi';
}): Metadata {
  const fullTitle = `${title} | Dr. Gaurav Sharma Orthopaedics, Sikandra Agra`;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const enUrl = `${SITE_URL}${cleanPath}`;
  const hiUrl = `${SITE_URL}/hi${cleanPath === '/' ? '' : cleanPath}`;
  const canonicalUrl = locale === 'hi' ? hiUrl : enUrl;

  return {
    title: fullTitle,
    description,
    keywords: SEO_KEYWORDS,
    authors: [{ name: 'Dr. Gaurav Sharma, M.B.B.S., M.S. (Orthopaedics)' }],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-IN': enUrl,
        'hi-IN': hiUrl,
      },
      types: {
        'application/rss+xml': `${SITE_URL}/feed.xml`,
      },
    },
    other: {
      'article:published_time': '2025-01-15T00:00:00+05:30',
      'article:modified_time': '2026-11-25T00:00:00+05:30',
      'last-modified': '2026-11-25',
      'dc.date': '2026-11-25',
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: locale === 'hi' ? 'hi_IN' : 'en_IN',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: `Dr. Gaurav Sharma Orthopaedic Clinic, Sikandra, Agra`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-default.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Split opening hours to reflect the doctor break:
 * Session 1: Mo-Sa 09:30-16:00
 * Session 2: Mo-Sa 18:00-21:30
 * Sunday: Su 10:00-14:00
 */
export function getClinicJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'LocalBusiness', 'MedicalBusiness'],
    '@id': `${SITE_URL}/#clinic`,
    name: CLINIC_LOCATION.name,
    alternateName: "Dr. Gaurav Sharma Orthopaedic & Joint Clinic",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/clinic-facade.jpg`,
    telephone: CLINIC_CONTACT.primaryPhone,
    priceRange: '₹₹',
    medicalSpecialty: [
      'Orthopedic',
      'OrthopedicSurgery',
      'SportsMedicine',
      'MusculoskeletalMedicine',
    ],
    knowsAbout: [
      'Total Knee Replacement (TKR)',
      'Partial / Unicondylar Knee Replacement (UKA)',
      'Total Hip Replacement (THR)',
      'Complex & Revision Joint Replacement Surgery',
      'Knee Arthroscopy & ACL / PCL Reconstruction',
      'Shoulder Arthroscopy & Rotator Cuff Repair',
      'Orthopaedic Fracture & Trauma Surgery (ORIF & Interlocking Nailing)',
    ],
    availableService: [
      'Total Knee Replacement (TKR)',
      'Partial / Unicondylar Knee Replacement (UKA)',
      'Total Hip Replacement (THR)',
      'Revision Knee & Hip Replacement Surgery',
      'Arthroscopic ACL / PCL & Meniscus Surgery',
      'Shoulder Arthroscopy & Rotator Cuff Repair',
      'Complex Fracture Fixation (ORIF & Nailing)',
    ].map((proc) => ({
      '@type': 'SurgicalProcedure',
      name: proc,
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${CLINIC_LOCATION.addressLine1}, ${CLINIC_LOCATION.addressLine2}`,
      addressLocality: CLINIC_LOCATION.locality,
      addressRegion: CLINIC_LOCATION.state,
      postalCode: CLINIC_LOCATION.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_LOCATION.geo.latitude,
      longitude: CLINIC_LOCATION.geo.longitude,
    },
    hasMap: CLINIC_LOCATION.mapsUrl,
    sameAs: [
      CLINIC_LOCATION.googleBusinessProfileUrl,
      CLINIC_SOCIALS.youtubeChannel,
      CLINIC_SOCIALS.instagramReel,
      CLINIC_SOCIALS.facebookPost,
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:30',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '18:00',
        closes: '21:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '14:00',
      },
    ],
    areaServed: CLINIC_LOCATION.localitiesServed.map((loc) => ({
      '@type': 'AdministrativeArea',
      name: `${loc}, Agra`,
    })),
  };
}

export function getPhysicianJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/about#doctor`,
    name: DOCTOR_PROFILE.name,
    honorificPrefix: DOCTOR_PROFILE.honorific,
    jobTitle: DOCTOR_PROFILE.designation,
    description: DOCTOR_PROFILE.bioShort,
    medicalSpecialty: 'OrthopedicSurgery',
    alumniOf: 'U.P. Medical University',
    worksFor: {
      '@type': 'MedicalClinic',
      name: CLINIC_LOCATION.name,
    },
    availableService: [
      ...[
        'Total Knee Replacement (TKR)',
        'Partial Knee Replacement (UKA)',
        'Total Hip Replacement (THR)',
        'Complex & Revision Joint Replacement',
        'Knee & Shoulder Arthroscopy (ACL, Meniscus, Rotator Cuff)',
        'Orthopaedic Trauma & Fracture Fixation Surgery',
      ].map((proc) => ({
        '@type': 'SurgicalProcedure',
        name: proc,
      })),
      ...DOCTOR_PROFILE.focusAreas.map((area) => ({
        '@type': 'MedicalTherapy',
        name: area,
      })),
    ],
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'UPMC Registration Number',
        value: DOCTOR_PROFILE.registrationNumber,
      },
    ],
    knowsAbout: DOCTOR_PROFILE.focusAreas,
  };
}

export function getMedicalProcedureJsonLd(surgery: SurgeryItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: surgery.title,
    procedureType: 'SurgicalProcedure',
    bodyLocation: surgery.category,
    description: surgery.summary,
    indication: {
      '@type': 'MedicalIndication',
      name: surgery.indication,
    },
    followup: surgery.recoveryTimeline.map((milestone) => ({
      '@type': 'MedicalConditionStage',
      name: milestone.timeframe,
      stageDescription: `${milestone.headline}: ${milestone.description}`,
    })),
    relevantSpecialty: 'OrthopedicSurgery',
    code: {
      '@type': 'MedicalCode',
      code: surgery.slug,
      codingSystem: 'Internal-Procedure-Catalog',
    },
  };
}

export function getFaqPageJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace('// NEEDS DOCTOR REVIEW: ', ''),
      },
    })),
  };
}

export function getVideoObjectJsonLd(video: VideoGuidanceItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.titleHindi,
    alternateName: video.titleEnglish,
    description: video.descriptionHindi,
    thumbnailUrl: [video.thumbnailUrl],
    uploadDate: video.uploadDate,
    contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
    inLanguage: 'hi',
  };
}

export function getBreadcrumbListJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
