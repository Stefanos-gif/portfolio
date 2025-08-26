import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.59a6e748.js","_app/immutable/chunks/scheduler.7c1f51a2.js","_app/immutable/chunks/index.28fe98d6.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.4018d8a6.js","_app/immutable/chunks/singletons.e9ee667c.js","_app/immutable/chunks/index.dc83b1f6.js","_app/immutable/chunks/fa-layers-text.svelte_svelte_type_style_lang.4c87b704.js","_app/immutable/chunks/TripleImage.40e2fb67.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.53dd97fd.js"];
export const stylesheets = ["_app/immutable/assets/0.ea46c073.css","_app/immutable/assets/fa-layers-text.377cf851.css","_app/immutable/assets/TripleImage.fb417689.css"];
export const fonts = [];
