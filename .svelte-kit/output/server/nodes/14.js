

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/taskmanager/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/14.42e58ef9.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.28fe98d6.js"];
export const stylesheets = ["_app/immutable/assets/14.0119b3a3.css"];
export const fonts = [];
