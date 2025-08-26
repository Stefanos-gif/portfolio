

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/satfire/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.b2f7b82b.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/13.5e48b669.css"];
export const fonts = [];
