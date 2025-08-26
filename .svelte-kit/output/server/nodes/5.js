

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/ai-pro/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.af40031f.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js"];
export const stylesheets = ["_app/immutable/assets/5.08b85258.css"];
export const fonts = [];
