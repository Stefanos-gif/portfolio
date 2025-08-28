import { F as head, Q as escape_html, B as pop, z as push } from "../../chunks/index2.js";
import { o as onDestroy } from "../../chunks/index-server.js";
function _page($$payload, $$props) {
  push();
  const text = ["", "", "", ""];
  let timeout;
  onDestroy(() => clearTimeout(timeout));
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Stefanos Siathas</title>`;
    $$payload2.out.push(`<meta property="og:title" content="Stefanos Siathas" class="svelte-l7qk6e"/> <meta property="og:description" content="My portfolio!!!" class="svelte-l7qk6e"/> <meta property="og:type" content="website" class="svelte-l7qk6e"/> <meta property="og:url" content="https://stefanossiathas.com" class="svelte-l7qk6e"/> <meta property="og:image" content="/favicon.ico" class="svelte-l7qk6e"/>`);
  });
  $$payload.out.push(`<div id="title-block" class="svelte-l7qk6e"><p id="hi-text" class="svelte-l7qk6e">${escape_html(text[0])} `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span id="colored-cursor" class="cursor svelte-l7qk6e"> </span>`);
  }
  $$payload.out.push(`<!--]--></p> <p id="name-text" class="svelte-l7qk6e">${escape_html(text[1])} `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></p> <p id="sub-name-text" class="svelte-l7qk6e">${escape_html(text[2])} <span id="type-text" class="svelte-l7qk6e">${escape_html(text[3])}</span> `);
  {
    $$payload.out.push("<!--[!-->");
    {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></p> <div id="img-hover" aria-hidden="true" class="svelte-l7qk6e"><img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait-dark2" alt="" class="svelte-l7qk6e"/> <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait-dark" alt="" class="svelte-l7qk6e"/> <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait" alt="Portrait of Stefanos Siathas" class="svelte-l7qk6e"/></div></div>`);
  pop();
}
export {
  _page as default
};
