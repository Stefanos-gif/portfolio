import { SITE_URL, getProjectRoutes } from '$lib/seo';

export const prerender = true;

export function GET() {
	const staticPages = ['/', '/about', '/background'];
	const urlPaths = [...new Set([...staticPages, ...getProjectRoutes()])];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
		${urlPaths
			.map((path) => {
				const loc = `${SITE_URL}${path === '/' ? '' : path}`;
				return `
				<url>
					<loc>${loc}</loc>
					<lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
				</url>`;
			})
			.join('')}
	</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
