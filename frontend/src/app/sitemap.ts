import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://truthlens.ai';

  const routes = [
    '',
    '/features',
    '/solutions',
    '/solutions/journalism',
    '/solutions/government',
    '/solutions/legal',
    '/solutions/cybersecurity',
    '/solutions/finance',
    '/solutions/insurance',
    '/technology',
    '/pricing',
    '/resources',
    '/about',
    '/contact',
    '/verify',
    '/dashboard',
    '/admin',
    '/reports',
    '/settings',
    '/profile',
    '/security',
    '/responsible-ai',
    '/trust',
    '/privacy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));
}
