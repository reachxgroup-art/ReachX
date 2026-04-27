import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://reachxgroup.com' });

const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.write({ url: '/',                    changefreq: 'weekly',  priority: 1.0, lastmod: new Date().toISOString() });
sitemap.write({ url: '/privacy-policy',      changefreq: 'monthly', priority: 0.4, lastmod: new Date().toISOString() });
sitemap.write({ url: '/terms-and-conditions',changefreq: 'monthly', priority: 0.4, lastmod: new Date().toISOString() });

sitemap.end();

streamToPromise(sitemap).then((sm) => {
  writeStream.write(sm.toString());
  console.log('✅ Sitemap created at public/sitemap.xml');
});