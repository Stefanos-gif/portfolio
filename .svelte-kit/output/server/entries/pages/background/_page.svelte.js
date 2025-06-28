import { c as create_ssr_component, a as subscribe, d as add_attribute } from "../../../chunks/ssr.js";
import { s as settings } from "../../../chunks/stores2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-1qn3bfh{border:1px solid var(--color-primary);border-radius:5px;backdrop-filter:blur(5px);padding:20px;margin-bottom:20px;transition:0.3s;color:var(--color-secondary)}.text-column.svelte-1qn3bfh{top:30%}h1.svelte-1qn3bfh,.card.svelte-1qn3bfh,.refresh-button.svelte-1qn3bfh{text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000}h1.svelte-1qn3bfh{color:var(--color-primary)}.refresh-button.svelte-1qn3bfh{cursor:pointer;color:var(--color-primary);font-weight:bold}.refresh-button.svelte-1qn3bfh:hover{color:var(--color-secondary)}input.svelte-1qn3bfh{accent-color:var(--color-primary)}.sliders.svelte-1qn3bfh{display:flex;justify-content:space-between;text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000}@media only screen and (max-width: 768px){.sliders.svelte-1qn3bfh{flex-direction:column}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$result.css.add(css);
  $$unsubscribe_settings();
  return `<head data-svelte-h="svelte-qal8uo"><meta property="og:title" content="Background - Stefanos Siathas"> <meta property="og:description" content="Play with the interactive backround  "> <meta property="og:type" content="website"> <meta property="og:url" content="https://stefanossiathas.com/background"> <meta property="og:image" content="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg"></head>  <div class="text-column svelte-1qn3bfh"><h1 class="svelte-1qn3bfh" data-svelte-h="svelte-lzt9ms">Background</h1> <div class="card svelte-1qn3bfh"><p data-svelte-h="svelte-fmka67">I&#39;m an upcoming stem ambassador studying computer science and physics.
            I love building all sorts of things,</p> <p><br>Feel free to tinker with the settings below or click to <span class="refresh-button svelte-1qn3bfh" data-svelte-h="svelte-1emvyo5">refresh</span> the animation.</p> <div class="sliders svelte-1qn3bfh"><label>Particle Count
                <input type="range" min="0" max="10000" name="force" class="svelte-1qn3bfh"${add_attribute("value", $settings.particleCount, 0)}></label> <label>Particle Size
                <input type="range" min="1" max="10" name="strokeWeight" class="svelte-1qn3bfh"${add_attribute("value", $settings.strokeWeight, 0)}></label> <label>Noise
                <input type="range" min="0" max="0.05" step="0.001" name="noiseScale" class="svelte-1qn3bfh"${add_attribute("value", $settings.noiseScale, 0)}></label> <label>Repel Distance
                <input type="range" min="0" max="500" name="noiseScale" class="svelte-1qn3bfh"${add_attribute("value", $settings.repelDistance, 0)}></label></div></div> </div>`;
});
export {
  Page as default
};
