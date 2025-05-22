import { c as create_ssr_component, f as escape, d as add_attribute } from "./ssr.js";
/* empty css                                           */const css = {
  code: "#img-hover.svelte-u7tcs2 img.svelte-u7tcs2{position:absolute;top:0;left:0;transition:opacity 0.3s ease-in-out, transform 0.3s ease-in-out;border-radius:7px;border:solid 5px #55146e}#img-hover.svelte-u7tcs2:hover img.svelte-u7tcs2{transform:scale(1.05)}#img-hover.svelte-u7tcs2:hover img.svelte-u7tcs2:nth-child(1){filter:brightness(0.5);transform:rotate(-10deg)}#img-hover.svelte-u7tcs2:hover img.svelte-u7tcs2:nth-child(2){filter:brightness(0.75)}#img-hover.svelte-u7tcs2:hover img.svelte-u7tcs2:nth-child(3){transform:rotate(10deg)}",
  map: null
};
const TripleImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img_url1 } = $$props;
  let { img_url2 } = $$props;
  let { img_url3 } = $$props;
  let { img_height } = $$props;
  let { aspect_ratio = "9/11" } = $$props;
  if ($$props.img_url1 === void 0 && $$bindings.img_url1 && img_url1 !== void 0)
    $$bindings.img_url1(img_url1);
  if ($$props.img_url2 === void 0 && $$bindings.img_url2 && img_url2 !== void 0)
    $$bindings.img_url2(img_url2);
  if ($$props.img_url3 === void 0 && $$bindings.img_url3 && img_url3 !== void 0)
    $$bindings.img_url3(img_url3);
  if ($$props.img_height === void 0 && $$bindings.img_height && img_height !== void 0)
    $$bindings.img_height(img_height);
  if ($$props.aspect_ratio === void 0 && $$bindings.aspect_ratio && aspect_ratio !== void 0)
    $$bindings.aspect_ratio(aspect_ratio);
  $$result.css.add(css);
  return `  <div id="img-hover" style="${"position: relative; height: " + escape(img_height, true) + "; aspect-ratio: " + escape(aspect_ratio, true) + ";"}" class="svelte-u7tcs2"><img style="${"height: " + escape(img_height, true) + "; aspect-ratio: " + escape(aspect_ratio, true)}"${add_attribute("src", img_url1, 0)} alt="Image 1" class="svelte-u7tcs2"> <img style="${"height: " + escape(img_height, true) + "; aspect-ratio: " + escape(aspect_ratio, true)}"${add_attribute("src", img_url2, 0)} alt="Image 2" class="svelte-u7tcs2"> <img style="${"height: " + escape(img_height, true) + "; aspect-ratio: " + escape(aspect_ratio, true)}"${add_attribute("src", img_url3, 0)} alt="Image 3" class="svelte-u7tcs2"> </div>`;
});
export {
  TripleImage as T
};
