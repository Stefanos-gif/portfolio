

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.05e33eec.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js","_app/immutable/chunks/stores.4018d8a6.js","_app/immutable/chunks/singletons.e9ee667c.js","_app/immutable/chunks/index.dc83b1f6.js"];
export const stylesheets = [];
export const fonts = [];
