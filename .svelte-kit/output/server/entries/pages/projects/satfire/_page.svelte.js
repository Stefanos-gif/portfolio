import { E as fallback, T as attr, I as attr_style, G as bind_props, V as stringify, X as ensure_array_like, F as head } from "../../../../chunks/index2.js";
function ArrowDown($$payload, $$props) {
  let size = fallback($$props["size"], 24);
  let color = fallback($$props["color"], "#000");
  let duration = fallback($$props["duration"], 1.5);
  $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24"${attr("fill", color)} class="arrow svelte-va49rc"${attr_style(`animation-duration: ${stringify(duration)}s;`)}><path d="M7 10l5 5 5-5H7z" class="svelte-va49rc"></path></svg>`);
  bind_props($$props, { size, color, duration });
}
function _page($$payload) {
  const slides = [
    { src: "/pres1.png", alt: "Presentation page 1" },
    { src: "/pres2.png", alt: "Presentation page 2" },
    { src: "/pres3.png", alt: "Presentation page 3" },
    { src: "/pres4.png", alt: "Presentation page 4" },
    { src: "/pres5.png", alt: "Presentation page 5" },
    { src: "/pres6.png", alt: "Presentation page 6" }
  ];
  const arrowColor = "#fa43f1";
  const arrowDuration = 1;
  const arrowSize = 200;
  const each_array = ensure_array_like(slides);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Satfire</title>`;
    $$payload2.out.push(`<meta property="og:title" content="Satfire Project - Stefanos Siathas" class="svelte-dxy72n"/> <meta property="og:description" content="Satfire: 1st place winner in the Cassini Camp Hackathon. Learn about our project to protect Cyprus and beyond!" class="svelte-dxy72n"/> <meta property="og:type" content="website" class="svelte-dxy72n"/> <meta property="og:url" content="https://stefanossiathas.com/projects/satfire" class="svelte-dxy72n"/> <meta property="og:image" content="/pres1.png" class="svelte-dxy72n"/>`);
  });
  $$payload.out.push(`<section id="tit" class="container svelte-dxy72n"><h1 class="svelte-dxy72n">Satfire</h1></section> <section id="boxes" class="container svelte-dxy72n"><p class="svelte-dxy72n">1st place winner in the Cassini Camp Hackathon was a project me and the Satfire team are working on that
    plans on preventing, protecting and helping the citizens of Cyprus and in the future to expand
    internationally! You can see the pitch that won first place under</p></section> <section class="slides container svelte-dxy72n"><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let s = each_array[i];
    $$payload.out.push(`<div class="arrow-wrap svelte-dxy72n" aria-hidden="true"><div class="arrow-scale svelte-dxy72n">`);
    ArrowDown($$payload, { size: arrowSize, color: arrowColor, duration: arrowDuration });
    $$payload.out.push(`<!----></div></div> <figure class="img-card svelte-dxy72n"><img${attr("src", s.src)}${attr("alt", s.alt)} loading="lazy" decoding="async" class="svelte-dxy72n"/></figure>`);
  }
  $$payload.out.push(`<!--]--></section>`);
}
export {
  _page as default
};
