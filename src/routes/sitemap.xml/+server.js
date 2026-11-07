import { SITE_URL, getProjectRoutes } from '$lib/seo';

export const prerender = true;

export function GET() {
	const staticPages = ['/', '/about', '/background'];
	const urlPaths = [...new Set([...staticPages, ...getProjectRoutes()])];
	const urls = urlPaths
		.map((path) => {
			const loc = `${SITE_URL}${path === '/' ? '' : path}`;
			return `  <url><loc>${loc}</loc></url>`;
		})
		.join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
