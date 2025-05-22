

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.01acf6d4.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/index.5405a8ee.js"];
export const stylesheets = ["_app/immutable/assets/2.3a35ee69.css"];
export const fonts = [];
