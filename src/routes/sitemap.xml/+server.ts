export async function GET({ url }) {
	const site = url.origin;
	const staticPages = ['about', 'contact', 'resume'];
	const dynamicProjects = ['aquawise', 'task-manager', 'solar-system'];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
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
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
