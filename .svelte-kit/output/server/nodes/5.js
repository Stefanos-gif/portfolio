

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/ai-pro/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.bf60fb23.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/index.8c25f7e9.js"];
export const stylesheets = ["_app/immutable/assets/5.df949efa.css"];
export const fonts = [];
