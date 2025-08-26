

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b2417731.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js","_app/immutable/chunks/stores.ee4ec32a.js","_app/immutable/chunks/singletons.3f1d2eac.js","_app/immutable/chunks/index.dc83b1f6.js"];
export const stylesheets = [];
export const fonts = [];
