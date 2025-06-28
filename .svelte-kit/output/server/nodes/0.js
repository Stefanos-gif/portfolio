import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.f8ba510c.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/index.8c25f7e9.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.7851f53b.js","_app/immutable/chunks/singletons.fb8c7878.js","_app/immutable/chunks/index.655c5ab4.js","_app/immutable/chunks/fa-layers-text.svelte_svelte_type_style_lang.ac1aa595.js","_app/immutable/chunks/TripleImage.20fd03c4.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.0bd7db4e.js"];
export const stylesheets = ["_app/immutable/assets/0.29f51433.css","_app/immutable/assets/fa-layers-text.377cf851.css","_app/immutable/assets/TripleImage.fb417689.css"];
export const fonts = [];
