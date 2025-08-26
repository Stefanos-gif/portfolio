

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/background/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.042802c4.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js","_app/immutable/chunks/stores.53dd97fd.js","_app/immutable/chunks/index.dc83b1f6.js"];
export const stylesheets = ["_app/immutable/assets/4.b923dc40.css"];
export const fonts = [];
