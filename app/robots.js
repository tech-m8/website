export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://tech-m8.solutions/sitemap.xml',
    host: 'https://tech-m8.solutions',
  };
}
