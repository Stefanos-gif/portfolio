

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.807b5cb3.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js","_app/immutable/chunks/fa-layers-text.svelte_svelte_type_style_lang.4c87b704.js"];
export const stylesheets = ["_app/immutable/assets/3.01968db6.css","_app/immutable/assets/fa-layers-text.377cf851.css"];
export const fonts = [];
