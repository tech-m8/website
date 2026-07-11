import { members } from '@/lib/team';

export const dynamic = 'force-static';

const BASE = 'https://tech-m8.solutions';

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/service', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/products', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/products/square-frame', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/droidm8', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/job-hunter', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/products/job-hunter/changelog', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/products/square-frame/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/products/job-hunter/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/team', priority: 0.6, changeFrequency: 'monthly' },
  ];

  const routes = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const teamRoutes = members.map((m) => ({
    url: `${BASE}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.4,
  }));

  return [...routes, ...teamRoutes];
}
