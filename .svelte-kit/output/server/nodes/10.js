

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/flask-web-app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.77ccad0d.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/index.8c25f7e9.js","_app/immutable/chunks/TripleImage.20fd03c4.js"];
export const stylesheets = ["_app/immutable/assets/9.67d24a80.css","_app/immutable/assets/TripleImage.fb417689.css"];
export const fonts = [];
