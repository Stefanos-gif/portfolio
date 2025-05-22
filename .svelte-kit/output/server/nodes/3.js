

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.609dc334.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/index.5405a8ee.js","_app/immutable/chunks/fa-layers-text.svelte_svelte_type_style_lang.1a1ee1e9.js"];
export const stylesheets = ["_app/immutable/assets/3.bb804db8.css","_app/immutable/assets/fa-layers-text.377cf851.css"];
export const fonts = [];
