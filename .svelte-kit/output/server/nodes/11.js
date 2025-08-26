

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/meteor/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.a648e7b4.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js"];
export const stylesheets = ["_app/immutable/assets/11.c8c42c9c.css"];
export const fonts = [];
