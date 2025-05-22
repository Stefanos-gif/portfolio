

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/background/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.3b10cd4e.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/index.5405a8ee.js","_app/immutable/chunks/stores.94b5d769.js","_app/immutable/chunks/index.c90c51eb.js"];
export const stylesheets = ["_app/immutable/assets/4.b923dc40.css"];
export const fonts = [];
