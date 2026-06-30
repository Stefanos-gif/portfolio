export async function GET({ url }) {
  const site = url.origin;
  
  // Static pages
  const pages = ['', '/about', '/background'];
  
  // Your dynamic project routes
  const projects = [
    'ai-pro',
    'barbershop-website',
    'cpp-games',
    'cpp-lvl3',
    'data-analysis-with-pandas',
    'edu-bridge-ltd',
    'flask-web-app',
    'meteor',
    'python-web-scraper',
    'satfire',
    'solar-system',
    'taskmanager',
    'thalasat',
    'watchlist-app'
  ];

  const xml = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${site}${page}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        </url>
      `).join('')}
      ${projects.map(project => `
        <url>
          <loc>${site}/projects/${project}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        </url>
      `).join('')}
    </urlset>
  `.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}