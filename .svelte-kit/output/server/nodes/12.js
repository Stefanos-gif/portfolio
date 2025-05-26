

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/thalasat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.b1eb6ca1.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.8c25f7e9.js"];
export const stylesheets = ["_app/immutable/assets/12.760aba5b.css"];
export const fonts = [];
