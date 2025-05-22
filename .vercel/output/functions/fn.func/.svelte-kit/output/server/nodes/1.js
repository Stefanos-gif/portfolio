

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0e500669.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/index.5405a8ee.js","_app/immutable/chunks/stores.4981fec6.js","_app/immutable/chunks/singletons.fbe0a442.js","_app/immutable/chunks/index.c90c51eb.js"];
export const stylesheets = [];
export const fonts = [];
