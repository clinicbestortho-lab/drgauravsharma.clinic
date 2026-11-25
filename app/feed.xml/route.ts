import { SURGERIES } from '@/content/surgeries';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from '@/lib/seo';

export const dynamic = 'force-static';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const lastBuildDate = 'Tue, 25 Nov 2026 12:00:00 +0530';

  const corePages = [
    {
      title: 'Dr. Gaurav Sharma Orthopaedic Clinic — Sikandra, Agra',
      link: `${SITE_URL}/en`,
      description: DEFAULT_DESCRIPTION,
      pubDate: lastBuildDate,
    },
    {
      title: 'Patient FAQs & Practical Clinical Answers',
      link: `${SITE_URL}/en/faq`,
      description:
        'Verified clinical answers regarding orthopaedic consultations, knee replacement recovery, X-ray/MRI film reviews, and acute fracture care.',
      pubDate: lastBuildDate,
    },
    {
      title: 'Verified Medical Credentials — UPMC Reg. 48757',
      link: `${SITE_URL}/en/credentials`,
      description:
        'M.B.B.S., M.S. (Orthopaedics), Former Assistant Professor of Orthopaedics, with 20+ years of clinical and surgical experience.',
      pubDate: lastBuildDate,
    },
  ];

  const surgeryItems = SURGERIES.slice(0, 8).map((s) => ({
    title: s.title,
    link: `${SITE_URL}/en/surgeries/${s.slug}`,
    description: s.summary,
    pubDate: lastBuildDate,
  }));

  const itemsXml = [...corePages, ...surgeryItems]
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="true">${escapeXml(item.link)}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(DEFAULT_DESCRIPTION)}</description>
    <language>en-IN</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
