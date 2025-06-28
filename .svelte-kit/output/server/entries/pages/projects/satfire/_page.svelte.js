import { c as create_ssr_component, d as add_attribute, f as escape, v as validate_component } from "../../../../chunks/ssr.js";
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
  code: "#arrow1.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%, -50%);margin-top:200px}#pres1.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:300px;transition:transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);border-radius:1rem;border-color:#ff00ff}#pres1.svelte-1163y80.svelte-1163y80:hover{transform:translateX(-50%) scale(1.02);box-shadow:0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;border-color:#ff00ff;border-radius:1rem}#pres1.svelte-1163y80 img.svelte-1163y80{border-radius:1rem}#arrow2.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:1051px}#pres2.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:1251px;transition:transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);border-radius:1rem;border-color:#ff00ff}#pres2.svelte-1163y80.svelte-1163y80:hover{transform:translateX(-50%) scale(1.02);box-shadow:0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;border-color:#ff00ff;border-radius:1rem}#pres2.svelte-1163y80 img.svelte-1163y80{border-radius:1rem}#arrow3.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:2002px}#pres3.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:2202px;transition:transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);border-radius:1rem;border-color:#ff00ff}#pres3.svelte-1163y80.svelte-1163y80:hover{transform:translateX(-50%) scale(1.02);box-shadow:0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;border-color:#ff00ff;border-radius:1rem}#pres3.svelte-1163y80 img.svelte-1163y80{border-radius:1rem}#arrow4.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:2953px}#pres4.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:3153px;transition:transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);border-radius:1rem;border-color:#ff00ff}#pres4.svelte-1163y80.svelte-1163y80:hover{transform:translateX(-50%) scale(1.02);box-shadow:0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;border-color:#ff00ff;border-radius:1rem}#pres4.svelte-1163y80 img.svelte-1163y80{border-radius:1rem}#arrow5.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:3764px}#pres5.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:3964px;transition:transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);border-radius:1rem;border-color:#ff00ff}#pres5.svelte-1163y80.svelte-1163y80:hover{transform:translateX(-50%) scale(1.02);box-shadow:0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;border-color:#ff00ff;border-radius:1rem}#pres5.svelte-1163y80 img.svelte-1163y80{border-radius:1rem}#arrow6.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:4515px}#pres6.svelte-1163y80.svelte-1163y80{position:absolute;left:250px;left:50%;transform:translate(-50%);margin-top:4715px;transition:transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);border-radius:1rem;border-color:#ff00ff}#pres6.svelte-1163y80.svelte-1163y80:hover{transform:translateX(-50%) scale(1.02);box-shadow:0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;border-color:#ff00ff;border-radius:1rem}#pres6.svelte-1163y80 img.svelte-1163y80{border-radius:1rem}#tit.svelte-1163y80.svelte-1163y80{display:flex;flex-direction:column;align-items:center;text-align:center}#tit.svelte-1163y80 h1.svelte-1163y80{margin:2.5vw;transition:all 0.3s ease-in-out;font-size:3rem}#tit.svelte-1163y80 h1.svelte-1163y80:hover{transform:scale(1.2);text-decoration:underline solid #ff00ff;text-shadow:4px 4px 2px var(--color-primary)}#boxes.svelte-1163y80.svelte-1163y80{display:flex;flex-direction:column;align-items:center;text-align:center}#boxes.svelte-1163y80 p.svelte-1163y80{position:absolute;top:21.68vh;left:34rem;background-color:rgba(97, 20, 128, 0.5);padding:1vw;border-radius:7px;border:solid 5px var(--color-primary);transition:all 0.3s ease-in-out;font-size:2vh;width:40vw}#boxes.svelte-1163y80 p.svelte-1163y80:hover{transform:scale(1.05);background-color:rgba(97, 18, 128, 0.7);color:var(--color-secondary);left:34rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="tit" class="svelte-1163y80" data-svelte-h="svelte-1j0u05m"><h1 class="svelte-1163y80">Satfire</h1></div> <div id="boxes" class="svelte-1163y80" data-svelte-h="svelte-ldleao"><p class="svelte-1163y80">1st place winner in the cassini camp hackathon was a project me and the satfire team are working on that plans on preventing protecting and helping the citizens of cyprus and in the future to expand internationally! You cansee the pitch that won first place under</p></div> <div id="arrow1" class="svelte-1163y80">${validate_component(ArrowDown, "ArrowDown").$$render(
    $$result,
    {
      id: "a1",
      size: 200,
      color: "#fa43f1",
      duration: 1
    },
    {},
    {}
  )}</div> <div id="pres1" class="svelte-1163y80" data-svelte-h="svelte-g8w3fo"><img src="/pres1.png" alt="Presentation page 1" class="svelte-1163y80"></div> <div id="arrow2" class="svelte-1163y80">${validate_component(ArrowDown, "ArrowDown").$$render(
    $$result,
    {
      id: "a2",
      size: 200,
      color: "#fa43f1",
      duration: 1
    },
    {},
    {}
  )}</div> <div id="pres2" class="svelte-1163y80" data-svelte-h="svelte-tr1ca7"><img src="/pres2.png" alt="Presentation page 2" class="svelte-1163y80"></div> <div id="arrow3" class="svelte-1163y80">${validate_component(ArrowDown, "ArrowDown").$$render(
    $$result,
    {
      id: "a3",
      size: 200,
      color: "#fa43f1",
      duration: 1
    },
    {},
    {}
  )}</div> <div id="pres3" class="svelte-1163y80" data-svelte-h="svelte-10qtie8"><img src="/pres3.png" alt="Presentation page 3" class="svelte-1163y80"></div> <div id="arrow4" class="svelte-1163y80">${validate_component(ArrowDown, "ArrowDown").$$render(
    $$result,
    {
      id: "a4",
      size: 200,
      color: "#fa43f1",
      duration: 1
    },
    {},
    {}
  )}</div> <div id="pres4" class="svelte-1163y80" data-svelte-h="svelte-1bfjusx"><img src="/pres4.png" alt="Presentation page 4" class="svelte-1163y80"></div> <div id="arrow5" class="svelte-1163y80">${validate_component(ArrowDown, "ArrowDown").$$render(
    $$result,
    {
      id: "a5",
      size: 200,
      color: "#fa43f1",
      duration: 1
    },
    {},
    {}
  )}</div> <div id="pres5" class="svelte-1163y80" data-svelte-h="svelte-slnsq"><img src="/pres5.png" alt="Presentation page 5" class="svelte-1163y80"></div> <div id="arrow6" class="svelte-1163y80">${validate_component(ArrowDown, "ArrowDown").$$render(
    $$result,
    {
      id: "a6",
      size: 200,
      color: "#fa43f1",
      duration: 1
    },
    {},
    {}
  )}</div> <div id="pres6" class="svelte-1163y80" data-svelte-h="svelte-1yvnxcz"><img src="/pres6.png" alt="Presentation page 6" class="svelte-1163y80"></div>  <head data-svelte-h="svelte-14ku6lh"><meta property="og:title" content="Satfire Project - Stefanos Siathas"> <meta property="og:description" content="Satfire: 1st place winner in the Cassini Camp Hackathon. Learn about our project to protect Cyprus and beyond!"> <meta property="og:type" content="website"> <meta property="og:url" content="https://stefanossiathas.com/projects/satfire"> <meta property="og:image" content="/pres1.png"></head>`;
});
export {
  Page as default
};
