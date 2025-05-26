

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/thalasat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.932ab913.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.8c25f7e9.js"];
export const stylesheets = ["_app/immutable/assets/12.8079b25c.css"];
export const fonts = [];
