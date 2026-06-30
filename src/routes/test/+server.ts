export function GET() {
	return new Response('Route test works', {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
}
