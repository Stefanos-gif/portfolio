

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.527fd908.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/index.8c25f7e9.js","_app/immutable/chunks/stores.68354971.js","_app/immutable/chunks/singletons.9f36a23c.js","_app/immutable/chunks/index.655c5ab4.js"];
export const stylesheets = [];
export const fonts = [];
