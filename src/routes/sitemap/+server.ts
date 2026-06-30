export async function GET({ url }) {
    // Automatically grabs your domain (e.g., https://yourportfolio.com)
    const site = url.origin; 
    
    // 1. Define any static top-level pages
    const staticPages = ['about', 'contact', 'resume'];
    
    // 2. Fetch or define your dynamic routes
    // If you are using a database or CMS, you would fetch your project slugs here.
    const dynamicProjects = ['aquawise', 'task-manager', 'solar-system']; 
    
    // 3. Construct the XML structure
    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}

  ${dynamicProjects
    .map(
      (project) => `
  <url>
    <loc>${site}/projects/${project}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}
</urlset>`.trim();

    // 4. Return the response with proper XML headers
    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            // Tells the browser and CDN to cache the sitemap for 1 hour
            'Cache-Control': 'max-age=0, s-maxage=3600' 
        }
    });
}