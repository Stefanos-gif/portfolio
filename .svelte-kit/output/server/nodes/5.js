

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/ai-pro/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.3c68fa8a.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/index.5405a8ee.js"];
export const stylesheets = ["_app/immutable/assets/5.df949efa.css"];
export const fonts = [];
