import { c as create_ssr_component, a as subscribe, b as createEventDispatcher, d as add_attribute, o as onDestroy, v as validate_component, e as set_store_value } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                                                         *//* empty css                                                      */import { s as settings, a as sketchKey } from "../../chunks/stores2.js";
const app = "";
const Projects_svelte_svelte_type_style_lang = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--color-primary:#7b2ff2;--color-secondary:#e9d8ff;--background-color:#0b0710}header.svelte-amhpom.svelte-amhpom{position:fixed;top:0;left:0;right:0;display:contents;z-index:9999}#project-screen.svelte-amhpom.svelte-amhpom{position:fixed;top:0;left:0;width:100vw;height:70vh;background-color:var(--color-primary);z-index:9998;transform-origin:top center;overflow:auto}nav.svelte-amhpom.svelte-amhpom{position:fixed;top:0;left:0;right:0;display:flex;justify-content:center;align-items:flex-start;width:100vw;transition:top 300ms cubic-bezier(0.215, 0.61, 0.355, 1);pointer-events:auto;z-index:9999}.opened.svelte-amhpom.svelte-amhpom{top:70vh}.wing.svelte-amhpom.svelte-amhpom,svg.svelte-amhpom.svelte-amhpom{width:2em;height:5em;display:block;transition:all 0.3s}path.svelte-amhpom.svelte-amhpom{fill:var(--color-primary)}.links-container.svelte-amhpom.svelte-amhpom{display:flex;flex-direction:column;align-items:center;max-width:100%}ul.svelte-amhpom.svelte-amhpom{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--color-primary);background-size:contain;overflow-x:auto;overflow-y:hidden;gap:0.25rem;-webkit-overflow-scrolling:touch;scrollbar-width:thin}ul.svelte-amhpom.svelte-amhpom::-webkit-scrollbar{height:6px}ul.svelte-amhpom.svelte-amhpom::-webkit-scrollbar-thumb{background:#ffffff33;border-radius:10px}li.svelte-amhpom.svelte-amhpom{position:relative;height:100%;flex:0 0 auto}nav.svelte-amhpom button.svelte-amhpom{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-secondary);font-weight:700;font-size:clamp(0.7rem, 2vw, 0.8rem);text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear;cursor:pointer;border:none;background-color:transparent;min-width:2.75rem}.current-section.svelte-amhpom button.svelte-amhpom{color:var(--background-color)}button.svelte-amhpom.svelte-amhpom:hover{color:var(--background-color)}.arrow{margin-top:0.25rem}#arrow-container.svelte-amhpom.svelte-amhpom{display:flex;justify-content:center;align-items:center;width:100%;height:calc(100% + 0.5rem);background-color:var(--color-primary);padding-bottom:0.75rem;cursor:pointer;user-select:none}@media(max-width: 768px){#project-screen.svelte-amhpom.svelte-amhpom{height:60vh}.opened.svelte-amhpom.svelte-amhpom{top:60vh}.wing.svelte-amhpom.svelte-amhpom,svg.svelte-amhpom.svelte-amhpom{width:1.5em;height:4em}ul.svelte-amhpom.svelte-amhpom{height:2.5em;gap:0.15rem;padding-inline:0.25rem}nav.svelte-amhpom button.svelte-amhpom{padding:0 0.35rem;font-size:0.7rem;letter-spacing:0.09em;min-width:2.5rem}}@media(max-width: 480px){.wing.svelte-amhpom.svelte-amhpom,svg.svelte-amhpom.svelte-amhpom{width:1.2em;height:3.5em}ul.svelte-amhpom.svelte-amhpom{height:2.2em}nav.svelte-amhpom button.svelte-amhpom{padding:0 0.25rem;font-size:0.62rem;letter-spacing:0.06em;min-width:2.25rem}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { opened = false } = $$props;
  if ($$props.opened === void 0 && $$bindings.opened && opened !== void 0)
    $$bindings.opened(opened);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `   ${$$result.head += `<!-- HEAD_svelte-1w5sd33_START --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">${$$result.title = `<title>Stefanos Siathas</title>`, ""}<!-- HEAD_svelte-1w5sd33_END -->`, ""} <header class="svelte-amhpom">${``} </header>`;
});
const P5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { target = void 0 } = $$props;
  let { sketch = void 0 } = $$props;
  let { parentDivStyle = "display: block;" } = $$props;
  let { debug = false } = $$props;
  createEventDispatcher();
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.sketch === void 0 && $$bindings.sketch && sketch !== void 0)
    $$bindings.sketch(sketch);
  if ($$props.parentDivStyle === void 0 && $$bindings.parentDivStyle && parentDivStyle !== void 0)
    $$bindings.parentDivStyle(parentDivStyle);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  return `<div${add_attribute("style", parentDivStyle, 0)} class="m-0"></div>`;
});
const Sketch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  let p5Instance;
  let particles = [];
  const sketch = (p5) => {
    p5Instance = p5;
    p5.setup = () => {
      p5.createCanvas(window.innerWidth, window.innerHeight);
      if (window.innerWidth < 768 || window.innerHeight < 500) {
        set_store_value(settings, $settings.particleCount = 400, $settings);
        set_store_value(settings, $settings.strokeWeight = 5, $settings);
      }
      for (let i = 0; i < $settings.particleCount; i++) {
        particles.push(p5.createVector(Math.random() * p5.width, Math.random() * p5.height));
      }
      p5.stroke("#5e0a80");
    };
    p5.draw = () => {
      p5.strokeWeight($settings.strokeWeight);
      p5.background(30, 15, 30, 10);
      for (let i = 0; i < $settings.particleCount; i++) {
        if (i >= particles.length) {
          particles.push(p5.createVector(Math.random() * p5.width, Math.random() * p5.height));
        }
        let p = particles[i];
        p5.point(p.x, p.y);
        let a = p5.TAU * p5.noise(p.x * $settings.noiseScale, p.y * $settings.noiseScale);
        p.x += Math.cos(a);
        p.y += Math.sin(a);
        if ($settings.repelDistance > 0) {
          let mouseToParticle = p5.createVector(p.x - p5.mouseX, p.y - p5.mouseY);
          let distance = mouseToParticle.mag();
          if (distance < $settings.repelDistance) {
            mouseToParticle.setMag(p5.map(distance, 0, $settings.repelDistance, 5, 0));
            p.add(mouseToParticle);
          }
        }
        if (p.x < 0 || p.x > p5.width || p.y < 0 || p.y > p5.height) {
          p.x = p5.width;
          p.y = Math.random() * p5.windowHeight;
        }
      }
    };
    p5.mousePressed = () => {
      p5.noiseSeed(p5.millis());
    };
    p5.keyPressed = () => {
      const spacebar = 32;
      if (p5.keyCode === p5.LEFT_ARROW || p5.keyCode === p5.RIGHT_ARROW) {
        p5.noiseSeed(p5.millis());
      } else if (p5.keyCode === spacebar) {
        set_store_value(settings, $settings.playing = !$settings.playing, $settings);
        $settings.playing ? p5.loop() : p5.noLoop();
      }
    };
    p5.windowResized = () => {
      p5.canvas.remove();
      p5.setup();
    };
  };
  onDestroy(() => {
    p5Instance?.remove();
  });
  $$unsubscribe_settings();
  return `${validate_component(P5, "P5").$$render($$result, { sketch }, {}, {})}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1ebsv34{display:flex;flex-direction:column;min-height:100vh}main.svelte-1ebsv34{flex:1;display:flex;flex-direction:column;padding:1rem;padding-top:10vh;width:100%;max-width:80rem;margin:0 auto;box-sizing:border-box}#sketch.svelte-1ebsv34{position:fixed !important;top:0;left:0;z-index:-1;animation:svelte-1ebsv34-fadein 2s}@keyframes svelte-1ebsv34-fadein{from{opacity:0}to{opacity:1}}@media(max-width: 768px){main.svelte-1ebsv34{padding:0.5rem;padding-top:8vh;max-width:100%}}@media(max-width: 480px){main.svelte-1ebsv34{padding:0.25rem;padding-top:7vh}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_sketchKey;
  $$unsubscribe_sketchKey = subscribe(sketchKey, (value) => value);
  let { data } = $$props;
  let opened = false;
  const unsubscribe = page.subscribe(() => {
    opened = false;
  });
  onDestroy(unsubscribe);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <div class="app svelte-1ebsv34"><div id="sketch" class="svelte-1ebsv34">${validate_component(Sketch, "Sketch").$$render($$result, {}, {}, {})}</div> ${validate_component(Header, "Header").$$render(
      $$result,
      { opened },
      {
        opened: ($$value) => {
          opened = $$value;
          $$settled = false;
        }
      },
      {}
    )} <main class="svelte-1ebsv34"><div>${slots.default ? slots.default({}) : ``}</div></main> </div>`;
  } while (!$$settled);
  $$unsubscribe_sketchKey();
  return $$rendered;
});
export {
  Layout as default
};
