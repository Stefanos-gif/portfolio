

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/flask-web-app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.86cfeb2a.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js","_app/immutable/chunks/TripleImage.40e2fb67.js"];
export const stylesheets = ["_app/immutable/assets/9.f7a0e4ad.css","_app/immutable/assets/TripleImage.fb417689.css"];
export const fonts = [];
