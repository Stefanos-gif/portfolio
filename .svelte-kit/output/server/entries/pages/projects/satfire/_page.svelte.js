import { c as create_ssr_component, d as add_attribute, f as escape, i as each, v as validate_component } from "../../../../chunks/ssr.js";
const ArrowDown_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-5w7aem-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}.arrow.svelte-5w7aem{display:inline-block;animation-name:svelte-5w7aem-bounce;animation-timing-function:ease-in-out;animation-iteration-count:infinite}",
  map: null
};
const ArrowDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 24 } = $$props;
  let { color = "#000" } = $$props;
  let { duration = 1.5 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  $$result.css.add(css$1);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 24 24"${add_attribute("fill", color, 0)} class="arrow svelte-5w7aem" style="${"animation-duration: " + escape(duration, true) + "s;"}"><path d="M7 10l5 5 5-5H7z"></path></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--color-primary:#7b2ff2;--color-secondary:#e9d8ff;--bg:#0b0710;--neon-pink:#ff00ff;--arrow-color:#fa43f1}.container.svelte-1u50fg8.svelte-1u50fg8{width:min(100%, 1100px);margin-inline:auto;padding-inline:clamp(12px, 4vw, 24px)}#tit.svelte-1u50fg8.svelte-1u50fg8{display:flex;flex-direction:column;align-items:center;text-align:center}#tit.svelte-1u50fg8 h1.svelte-1u50fg8{margin:clamp(16px, 3vw, 2.5vw);font-size:clamp(2rem, 6vw, 3rem);transition:transform .3s ease, text-shadow .3s ease}#tit.svelte-1u50fg8 h1.svelte-1u50fg8:hover{transform:scale(1.12);text-decoration:underline solid var(--neon-pink);text-shadow:4px 4px 2px var(--color-primary)}#boxes.svelte-1u50fg8.svelte-1u50fg8{display:flex;flex-direction:column;align-items:center;text-align:center}#boxes.svelte-1u50fg8 p.svelte-1u50fg8{background-color:rgba(97, 20, 128, 0.5);padding:clamp(10px, 2.2vw, 20px);border-radius:12px;border:5px solid var(--color-primary);transition:transform .25s ease, background-color .25s ease, color .25s ease, box-shadow .25s ease;font-size:clamp(0.95rem, 2.2vw, 1.05rem);line-height:1.5;width:min(900px, 100%)}#boxes.svelte-1u50fg8 p.svelte-1u50fg8:hover{transform:translateY(-2px) scale(1.02);background-color:rgba(97, 18, 128, 0.7);color:var(--color-secondary);box-shadow:0 0 24px #ff00ff55}.slides.svelte-1u50fg8.svelte-1u50fg8{display:flex;flex-direction:column;gap:clamp(16px, 4vw, 28px);padding-block:clamp(12px, 4vw, 24px)}.arrow-wrap.svelte-1u50fg8.svelte-1u50fg8{display:flex;justify-content:center;align-items:center}.arrow-scale.svelte-1u50fg8.svelte-1u50fg8{transform-origin:center;transform:scale(1);will-change:transform;transition:transform .2s ease}@media(max-width: 768px){.arrow-scale.svelte-1u50fg8.svelte-1u50fg8{transform:scale(0.7)}}@media(max-width: 480px){.arrow-scale.svelte-1u50fg8.svelte-1u50fg8{transform:scale(0.6)}}.img-card.svelte-1u50fg8.svelte-1u50fg8{margin:0;display:flex;justify-content:center}.img-card.svelte-1u50fg8 img.svelte-1u50fg8{width:min(92vw, 980px);height:auto;border-radius:1rem;border:6px solid var(--neon-pink);box-shadow:0 0 28px 6px #ff00ff88, 0 0 64px 12px #fa43f155;transition:transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);background:#111}.img-card.svelte-1u50fg8 img.svelte-1u50fg8:hover{transform:scale(1.02);box-shadow:0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;border-color:var(--neon-pink)}@media(prefers-reduced-motion: reduce){.svelte-1u50fg8.svelte-1u50fg8{animation:none !important;transition:none !important}}",
  map: null
};
const arrowColor = "#fa43f1";
const arrowDuration = 1;
const arrowSize = 200;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const slides = [
    {
      src: "/pres1.png",
      alt: "Presentation page 1"
    },
    {
      src: "/pres2.png",
      alt: "Presentation page 2"
    },
    {
      src: "/pres3.png",
      alt: "Presentation page 3"
    },
    {
      src: "/pres4.png",
      alt: "Presentation page 4"
    },
    {
      src: "/pres5.png",
      alt: "Presentation page 5"
    },
    {
      src: "/pres6.png",
      alt: "Presentation page 6"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-9od9vq_START --><meta property="og:title" content="Satfire Project - Stefanos Siathas" class="svelte-1u50fg8"><meta property="og:description" content="Satfire: 1st place winner in the Cassini Camp Hackathon. Learn about our project to protect Cyprus and beyond!" class="svelte-1u50fg8"><meta property="og:type" content="website" class="svelte-1u50fg8"><meta property="og:url" content="https://stefanossiathas.com/projects/satfire" class="svelte-1u50fg8"><meta property="og:image" content="/pres1.png" class="svelte-1u50fg8">${$$result.title = `<title>Satfire</title>`, ""}<!-- HEAD_svelte-9od9vq_END -->`, ""}  <section id="tit" class="container svelte-1u50fg8" data-svelte-h="svelte-1bhmpbu"><h1 class="svelte-1u50fg8">Satfire</h1></section>  <section id="boxes" class="container svelte-1u50fg8" data-svelte-h="svelte-1uro7r8"><p class="svelte-1u50fg8">1st place winner in the Cassini Camp Hackathon was a project me and the Satfire team are working on that
    plans on preventing, protecting and helping the citizens of Cyprus and in the future to expand
    internationally! You can see the pitch that won first place under</p></section>  <section class="slides container svelte-1u50fg8">${each(slides, (s, i) => {
    return `<div class="arrow-wrap svelte-1u50fg8" aria-hidden="true"><div class="arrow-scale svelte-1u50fg8">${validate_component(ArrowDown, "ArrowDown").$$render(
      $$result,
      {
        size: arrowSize,
        color: arrowColor,
        duration: arrowDuration
      },
      {},
      {}
    )} </div></div> <figure class="img-card svelte-1u50fg8"><img${add_attribute("src", s.src, 0)}${add_attribute("alt", s.alt, 0)} loading="lazy" decoding="async" class="svelte-1u50fg8"> </figure>`;
  })} </section>`;
});
export {
  Page as default
};
