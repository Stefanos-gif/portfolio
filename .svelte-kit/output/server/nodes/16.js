

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/watchlist-app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.99d4eca9.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.28fe98d6.js"];
export const stylesheets = ["_app/immutable/assets/16.0da595c2.css"];
export const fonts = [];
