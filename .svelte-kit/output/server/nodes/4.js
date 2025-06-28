

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/background/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.80bc5a23.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/index.8c25f7e9.js","_app/immutable/chunks/stores.0bd7db4e.js","_app/immutable/chunks/index.655c5ab4.js"];
export const stylesheets = ["_app/immutable/assets/4.b923dc40.css"];
export const fonts = [];
