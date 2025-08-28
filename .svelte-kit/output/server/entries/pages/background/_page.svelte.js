import { F as head, T as attr, K as store_get, M as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index2.js";
import { s as settings } from "../../../chunks/stores.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<meta property="og:title" content="Background - Stefanos Siathas"/> <meta property="og:description" content="Play with the interactive backround  "/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://stefanossiathas.com/background"/> <meta property="og:image" content="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg"/>`);
  });
  $$payload.out.push(`<div class="text-column svelte-1qn3bfh"><h1 class="svelte-1qn3bfh">Background</h1> <div class="card svelte-1qn3bfh"><p>I'm an upcoming stem ambassador studying computer science and physics.
            I love building all sorts of things,</p> <p><br/>Feel free to tinker with the settings below or click to <span class="refresh-button svelte-1qn3bfh">refresh</span> the animation.</p> <div class="sliders svelte-1qn3bfh"><label>Particle Count <input type="range" min="0" max="10000"${attr("value", store_get($$store_subs ??= {}, "$settings", settings).particleCount)} name="force" class="svelte-1qn3bfh"/></label> <label>Particle Size <input type="range" min="1" max="10"${attr("value", store_get($$store_subs ??= {}, "$settings", settings).strokeWeight)} name="strokeWeight" class="svelte-1qn3bfh"/></label> <label>Noise <input type="range" min="0" max="0.05" step="0.001"${attr("value", store_get($$store_subs ??= {}, "$settings", settings).noiseScale)} name="noiseScale" class="svelte-1qn3bfh"/></label> <label>Repel Distance <input type="range" min="0" max="500"${attr("value", store_get($$store_subs ??= {}, "$settings", settings).repelDistance)} name="noiseScale" class="svelte-1qn3bfh"/></label></div></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
