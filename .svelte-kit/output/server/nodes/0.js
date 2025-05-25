import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.d3fa328b.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/index.5405a8ee.js","_app/immutable/chunks/stores.0ef4e782.js","_app/immutable/chunks/singletons.39dac941.js","_app/immutable/chunks/index.c90c51eb.js","_app/immutable/chunks/fa-layers-text.svelte_svelte_type_style_lang.1a1ee1e9.js","_app/immutable/chunks/TripleImage.ecc703be.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.94b5d769.js"];
export const stylesheets = ["_app/immutable/assets/0.29f51433.css","_app/immutable/assets/fa-layers-text.377cf851.css","_app/immutable/assets/TripleImage.fb417689.css"];
export const fonts = [];
