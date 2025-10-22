const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://ribh.io';

const staticRoutes = [
  { url: BASE_URL, changeFreq: 'monthly', priority: '1.0' },
  { url: `${BASE_URL}/en`, changeFreq: 'monthly', priority: '0.9' },
  { url: `${BASE_URL}/fr`, changeFreq: 'monthly', priority: '0.9' },
  { url: `${BASE_URL}/en/contact`, changeFreq: 'yearly', priority: '0.8' },
  { url: `${BASE_URL}/fr/contact`, changeFreq: 'yearly', priority: '0.8' },
  { url: `${BASE_URL}/en/blog`, changeFreq: 'weekly', priority: '0.7' },
  { url: `${BASE_URL}/fr/blog`, changeFreq: 'weekly', priority: '0.7' },
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

staticRoutes.forEach(route => {
  sitemap += `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
});

// Add blog posts if they exist
try {
  const blogDataPath = path.join(process.cwd(), 'public/blog-data.json');
  if (fs.existsSync(blogDataPath)) {
    const blogData = JSON.parse(fs.readFileSync(blogDataPath, 'utf8'));

    blogData.forEach(post => {
      sitemap += `
  <url>
    <loc>${BASE_URL}/${post.lang}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });
  }
} catch (error) {
  // Blog data doesn't exist yet, that's fine
}

sitemap += `
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemap);
console.log('Sitemap generated');
