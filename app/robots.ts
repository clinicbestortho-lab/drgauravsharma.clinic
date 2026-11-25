import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'GPTBot',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'OAI-SearchBot',
          'anthropic-ai',
          'ChatGPT-User',
          'Bytespider',
          'CCBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
