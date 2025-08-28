import { E as fallback, I as attr_style, T as attr, G as bind_props, V as stringify } from "./index2.js";
/* empty css                                          */
function TripleImage($$payload, $$props) {
  let img_url1 = $$props["img_url1"];
  let img_url2 = $$props["img_url2"];
  let img_url3 = $$props["img_url3"];
  let img_height = $$props["img_height"];
  let aspect_ratio = fallback($$props["aspect_ratio"], "9/11");
  $$payload.out.push(`<div id="img-hover"${attr_style(` position: relative; height: ${stringify(img_height)}; aspect-ratio: ${stringify(aspect_ratio)}; `)} class="svelte-u7tcs2"><img${attr_style(`height: ${stringify(img_height)}; aspect-ratio: ${stringify(aspect_ratio)}`)}${attr("src", img_url1)} alt="Image 1" class="svelte-u7tcs2"/> <img${attr_style(`height: ${stringify(img_height)}; aspect-ratio: ${stringify(aspect_ratio)}`)}${attr("src", img_url2)} alt="Image 2" class="svelte-u7tcs2"/> <img${attr_style(`height: ${stringify(img_height)}; aspect-ratio: ${stringify(aspect_ratio)}`)}${attr("src", img_url3)} alt="Image 3" class="svelte-u7tcs2"/></div>`);
  bind_props($$props, { img_url1, img_url2, img_url3, img_height, aspect_ratio });
}
export {
  TripleImage as T
};
