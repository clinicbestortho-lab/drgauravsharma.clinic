import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { SURGERIES } from '@/content/surgeries';
import { AREAS_OF_CARE } from '@/content/conditions';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/credentials',
    '/surgeries',
    '/conditions',
    '/clinic',
    '/faq',
    '/videos',
    '/contact',
    '/patient-stories',
    '/privacy',
    '/terms',
    '/consent',
  ];

  // Procedure pages
  SURGERIES.forEach((s) => {
    routes.push(`/surgeries/${s.slug}`);
  });

  // Condition pages
  AREAS_OF_CARE.forEach((c) => {
    routes.push(`/conditions/${c.slug}`);
  });

  const currentDate = new Date().toISOString();

  const entries: MetadataRoute.Sitemap = [];

  // Generate both English (canonical) and Hindi entries
  routes.forEach((route) => {
    // English default
    entries.push({
      url: `${SITE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : route.startsWith('/surgeries/') ? 0.9 : 0.8,
    });

    // Hindi mirror
    entries.push({
      url: `${SITE_URL}/hi${route === '' ? '' : route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 0.9 : route.startsWith('/surgeries/') ? 0.85 : 0.75,
    });
  });

  return entries;
}
