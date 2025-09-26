import { D as getContext, E as fallback, F as head, G as bind_props, B as pop, z as push, I as attr_style, J as store_mutate, K as store_get, M as unsubscribe_stores, N as copy_payload, O as assign_payload, P as slot } from "../../chunks/index2.js";
import { o as onDestroy } from "../../chunks/index-server.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "clsx";
import "../../chunks/state.svelte.js";
/* empty css                                                        */
/* empty css                                                     */
import { s as settings } from "../../chunks/stores.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Header($$payload, $$props) {
  push();
  let opened = fallback($$props["opened"], false);
  page.subscribe(() => {
  });
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Stefanos Siathas</title>`;
    $$payload2.out.push(`<meta charset="UTF-8" class="svelte-1feajrt"/> <meta name="viewport" content="width=device-width, initial-scale=1" class="svelte-1feajrt"/>`);
  });
  $$payload.out.push(`<header class="svelte-1feajrt">`);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></header>`);
  bind_props($$props, { opened });
  pop();
}
function P5($$payload, $$props) {
  push();
  let target = fallback($$props["target"], void 0);
  let sketch = fallback($$props["sketch"], void 0);
  let parentDivStyle = fallback($$props["parentDivStyle"], "display: block;");
  let debug = fallback($$props["debug"], false);
  $$payload.out.push(`<div${attr_style(parentDivStyle)} class="m-0"></div>`);
  bind_props($$props, { target, sketch, parentDivStyle, debug });
  pop();
}
function Sketch($$payload, $$props) {
  push();
  var $$store_subs;
  let p5Instance;
  let particles = [];
  const sketch = (p5) => {
    p5Instance = p5;
    p5.setup = () => {
      p5.createCanvas(window.innerWidth, window.innerHeight);
      if (window.innerWidth < 768 || window.innerHeight < 500) {
        store_mutate($$store_subs ??= {}, "$settings", settings, store_get($$store_subs ??= {}, "$settings", settings).particleCount = 400);
        store_mutate($$store_subs ??= {}, "$settings", settings, store_get($$store_subs ??= {}, "$settings", settings).strokeWeight = 5);
      }
      for (let i = 0; i < store_get($$store_subs ??= {}, "$settings", settings).particleCount; i++) {
        particles.push(p5.createVector(Math.random() * p5.width, Math.random() * p5.height));
      }
      p5.stroke("#5e0a80");
    };
    p5.draw = () => {
      p5.strokeWeight(store_get($$store_subs ??= {}, "$settings", settings).strokeWeight);
      p5.background(30, 15, 30, 10);
      for (let i = 0; i < store_get($$store_subs ??= {}, "$settings", settings).particleCount; i++) {
        if (i >= particles.length) {
          particles.push(p5.createVector(Math.random() * p5.width, Math.random() * p5.height));
        }
        let p = particles[i];
        p5.point(p.x, p.y);
        let a = p5.TAU * p5.noise(p.x * store_get($$store_subs ??= {}, "$settings", settings).noiseScale, p.y * store_get($$store_subs ??= {}, "$settings", settings).noiseScale);
        p.x += Math.cos(a);
        p.y += Math.sin(a);
        if (store_get($$store_subs ??= {}, "$settings", settings).repelDistance > 0) {
          let mouseToParticle = p5.createVector(p.x - p5.mouseX, p.y - p5.mouseY);
          let distance = mouseToParticle.mag();
          if (distance < store_get($$store_subs ??= {}, "$settings", settings).repelDistance) {
            mouseToParticle.setMag(p5.map(distance, 0, store_get($$store_subs ??= {}, "$settings", settings).repelDistance, 5, 0));
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
        store_mutate($$store_subs ??= {}, "$settings", settings, store_get($$store_subs ??= {}, "$settings", settings).playing = !store_get($$store_subs ??= {}, "$settings", settings).playing);
        store_get($$store_subs ??= {}, "$settings", settings).playing ? p5.loop() : p5.noLoop();
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
  P5($$payload, { sketch });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  let data = $$props["data"];
  let opened = false;
  const unsubscribe = page.subscribe(() => {
    opened = false;
  });
  onDestroy(unsubscribe);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="app svelte-8rqcn6"><!---->`);
    {
      $$payload2.out.push(`<div id="sketch" class="svelte-8rqcn6">`);
      Sketch($$payload2);
      $$payload2.out.push(`<!----></div>`);
    }
    $$payload2.out.push(`<!----> `);
    Header($$payload2, {
      get opened() {
        return opened;
      },
      set opened($$value) {
        opened = $$value;
        $$settled = false;
      }
    });
    $$payload2.out.push(`<!----> <main class="svelte-8rqcn6"><!---->`);
    {
      $$payload2.out.push(`<div><!---->`);
      slot($$payload2, $$props, "default", {});
      $$payload2.out.push(`<!----></div>`);
    }
    $$payload2.out.push(`<!----></main></div>`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { data });
  pop();
}
export {
  _layout as default
};
