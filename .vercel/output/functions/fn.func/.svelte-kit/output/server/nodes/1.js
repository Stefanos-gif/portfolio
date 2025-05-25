

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5934fe04.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/index.5405a8ee.js","_app/immutable/chunks/stores.0ef4e782.js","_app/immutable/chunks/singletons.39dac941.js","_app/immutable/chunks/index.c90c51eb.js"];
export const stylesheets = [];
export const fonts = [];
