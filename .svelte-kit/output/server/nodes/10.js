

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/flask-web-app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.2c2f5ac8.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/index.5405a8ee.js","_app/immutable/chunks/TripleImage.ecc703be.js"];
export const stylesheets = ["_app/immutable/assets/9.67d24a80.css","_app/immutable/assets/TripleImage.fb417689.css"];
export const fonts = [];
