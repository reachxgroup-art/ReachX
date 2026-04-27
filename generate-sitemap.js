import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });

const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });

// Add more pages if needed
// sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });

sitemap.end();

streamToPromise(sitemap).then((sm) => {
  writeStream.write(sm.toString());
  console.log('✅ Sitemap created!');
});