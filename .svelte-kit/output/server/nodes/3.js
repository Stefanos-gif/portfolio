

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9fe4873b.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/index.8c25f7e9.js","_app/immutable/chunks/fa-layers-text.svelte_svelte_type_style_lang.ac1aa595.js"];
export const stylesheets = ["_app/immutable/assets/3.bb804db8.css","_app/immutable/assets/fa-layers-text.377cf851.css"];
export const fonts = [];
