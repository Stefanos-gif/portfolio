import { c as create_ssr_component, o as onDestroy, f as escape } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title-block.svelte-keyn6y.svelte-keyn6y{text-align:left;position:fixed;top:30%;text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000}#hi-text.svelte-keyn6y.svelte-keyn6y{font-size:2em;font-weight:bold;color:var(--color-primary);margin:0}#name-text.svelte-keyn6y.svelte-keyn6y{font-size:6em;font-weight:bold;color:var(--color-secondary);margin:0}#sub-name-text.svelte-keyn6y.svelte-keyn6y{font-size:3em;font-weight:bold;color:var(--color-secondary);margin:0}#type-text.svelte-keyn6y.svelte-keyn6y{color:var(--color-primary)}.cursor.svelte-keyn6y.svelte-keyn6y{display:inline-block;background-color:var(--color-secondary);margin-left:0.1rem;width:3px}#colored-cursor.svelte-keyn6y.svelte-keyn6y{background-color:var(--color-primary)}@media only screen and (max-width: 768px){#title-block.svelte-keyn6y.svelte-keyn6y{font-size:0.5em}#hi-text.svelte-keyn6y.svelte-keyn6y{font-size:2.5em}#sub-name-text.svelte-keyn6y.svelte-keyn6y{font-size:3em}}#portrait.svelte-keyn6y.svelte-keyn6y,#portrait-dark.svelte-keyn6y.svelte-keyn6y,#portrait-dark2.svelte-keyn6y.svelte-keyn6y{position:fixed;left:65vw;top:20vh;width:25vw;border-radius:7px;border:solid 5px var(--color-primary);transition:all 0.08s ease-in-out}#img-hover.svelte-keyn6y:hover #portrait.svelte-keyn6y{transform:scale(1.05) rotate(10deg)}#img-hover.svelte-keyn6y:hover #portrait-dark.svelte-keyn6y{transform:scale(1.05);filter:brightness(0.5)}#img-hover.svelte-keyn6y:hover #portrait-dark2.svelte-keyn6y{transform:scale(1.05) rotate(-10deg);filter:brightness(0.25)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const text = ["", "", "", ""];
  let timeout;
  onDestroy(() => clearTimeout(timeout));
  $$result.css.add(css);
  return `<head data-svelte-h="svelte-147gr9g"><meta property="og:title" content="Stefanos Siathas"> <meta property="og:description" content="My portfolio!!!"> <meta property="og:type" content="website"> <meta property="og:url" content="https://stefanossiathas.com"> <meta property="og:image" content="/favicon.ico"></head>  <div id="title-block" class="svelte-keyn6y"><p id="hi-text" class="svelte-keyn6y">${escape(text[0])} ${`<span id="colored-cursor" class="cursor svelte-keyn6y" data-svelte-h="svelte-ondwei"> </span>`}</p> <p id="name-text" class="svelte-keyn6y">${escape(text[1])} ${``}</p> <p id="sub-name-text" class="svelte-keyn6y">${escape(text[2])} <span id="type-text" class="svelte-keyn6y">${escape(text[3])}</span> ${`${``}`}</p> <div id="img-hover" class="svelte-keyn6y" data-svelte-h="svelte-2ll9t0"><img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait-dark2" class="svelte-keyn6y"> <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait-dark" class="svelte-keyn6y"> <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait" class="svelte-keyn6y"></div> </div>`;
});
export {
  Page as default
};
