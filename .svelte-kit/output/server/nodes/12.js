

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/satfire/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.09b4abf2.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/index.8c25f7e9.js"];
export const stylesheets = ["_app/immutable/assets/12.d6766ecd.css"];
export const fonts = [];
