

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a5120e60.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js"];
export const stylesheets = ["_app/immutable/assets/2.7f9ae619.css"];
export const fonts = [];
