import { c as create_ssr_component, d as add_attribute, f as escape, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                                                            */import { faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  if (typeof scale === "string") {
    scale = parseFloat(scale);
  }
  if (typeof translateX === "string") {
    translateX = parseFloat(translateX);
  }
  if (typeof translateY === "string") {
    translateY = parseFloat(translateY);
  }
  const x = `${translateX * translateTimes}${translateUnit}`;
  const y = `${translateY * translateTimes}${translateUnit}`;
  let output = `translate(${x},${y}) scale(${flipX * scale},${flipY * scale})`;
  if (rotate) {
    output += ` rotate(${rotate}${rotateUnit})`;
  }
  return output;
}
const css$2 = {
  code: ".svelte-fa-base{height:1em;overflow:visible;transform-origin:center;vertical-align:-0.125em}.svelte-fa-fw{text-align:center;width:1.25em}.svelte-fa-pull-left.svelte-bvo74f{float:left}.svelte-fa-pull-right.svelte-bvo74f{float:right}.svelte-fa-size-lg.svelte-bvo74f{font-size:1.33333em;line-height:0.75em;vertical-align:-0.225em}.svelte-fa-size-sm.svelte-bvo74f{font-size:0.875em}.svelte-fa-size-xs.svelte-bvo74f{font-size:0.75em}.spin.svelte-bvo74f{animation:svelte-bvo74f-spin 2s 0s infinite linear}.pulse.svelte-bvo74f{animation:svelte-bvo74f-spin 1s infinite steps(8)}@keyframes svelte-bvo74f-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let i;
  let transform;
  let { class: clazz = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { style = void 0 } = $$props;
  let { icon } = $$props;
  let { title = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { fw = false } = $$props;
  let { pull = void 0 } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = void 0 } = $$props;
  let { flip = void 0 } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let svgElement;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$2);
  i = icon && icon.icon || [0, 0, "", [], ""];
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? ` <svg${add_attribute("id", id, 0)} class="${[
    "svelte-fa svelte-fa-base " + escape(clazz, true) + " svelte-bvo74f",
    (pulse ? "pulse" : "") + " " + (size === "lg" ? "svelte-fa-size-lg" : "") + " " + (size === "sm" ? "svelte-fa-size-sm" : "") + " " + (size === "xs" ? "svelte-fa-size-xs" : "") + " " + (fw ? "svelte-fa-fw" : "") + " " + (pull === "left" ? "svelte-fa-pull-left" : "") + " " + (pull === "right" ? "svelte-fa-pull-right" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", style, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}"${add_attribute("aria-hidden", title === void 0, 0)} role="img" xmlns="http://www.w3.org/2000/svg"${add_attribute("this", svgElement, 0)}>${title ? `<title>${escape(title)}</title>` : ``}<g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : ` <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const Accivmnets_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#achivment-container.svelte-w3vaao.svelte-w3vaao{width:100%;display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:clamp(18px, 3vw, 32px);padding:clamp(18px, 4vw, 36px);background:linear-gradient(120deg, rgba(57,32,66,0.7) 60%, rgba(123,47,242,0.18) 100%);border-radius:18px;border:5px solid #361144;box-shadow:0 0 32px #7b2ff244, 0 0 0 2px #36114444;margin-block:clamp(18px, 4vw, 36px)}.card.svelte-w3vaao.svelte-w3vaao{background:linear-gradient(180deg, rgba(22,11,34,0.93), rgba(15,6,25,0.98));border:4px solid #7b2ff2;border-radius:14px;padding:clamp(18px, 3vw, 28px);display:flex;flex-direction:column;gap:clamp(10px, 2vw, 18px);box-shadow:0 0 24px #7b2ff244, 0 2px 12px #0002;text-align:left;transition:transform 0.18s, box-shadow 0.18s}.card.svelte-w3vaao.svelte-w3vaao:hover{transform:translateY(-4px) scale(1.02);box-shadow:0 8px 32px #7b2ff299, 0 0 0 2px #ff00ff55;border-color:#ff00ff}.card.svelte-w3vaao h2.svelte-w3vaao{margin:0 0 0.5em 0;text-align:center;font-size:clamp(1.3rem, 2.5vw, 2rem);background:linear-gradient(90deg, #7b2ff2 40%, #ff00ff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:800;letter-spacing:0.01em}.card.svelte-w3vaao img.svelte-w3vaao{width:100%;height:auto;border-radius:10px;border:4px solid #7b2ff2;object-fit:cover;box-shadow:0 0 12px #7b2ff244}.card.svelte-w3vaao ul.svelte-w3vaao{margin:0;padding-left:1.1rem;display:flex;flex-direction:column;gap:0.7rem}.card.svelte-w3vaao li.svelte-w3vaao{line-height:1.6;font-size:clamp(1rem, 1.2vw, 1.08rem);color:#fff;text-shadow:0 1px 2px #0008}.card.svelte-w3vaao svg{vertical-align:middle;margin:0 .15rem;width:1em;height:1em}@media(max-width: 800px){#achivment-container.svelte-w3vaao.svelte-w3vaao{grid-template-columns:1fr;padding:clamp(10px, 4vw, 18px)}.card.svelte-w3vaao.svelte-w3vaao{padding:clamp(12px, 4vw, 18px)}}",
  map: null
};
const Accivmnets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="achivment-container" class="svelte-w3vaao"><section class="card svelte-w3vaao" data-svelte-h="svelte-1rm09fp"><h2 class="svelte-w3vaao">Achievements</h2> <img src="/paint.jpg" alt="Creative project collage" class="svelte-w3vaao"> <ul class="svelte-w3vaao"><li class="svelte-w3vaao"><b>Completed 46 Programming Projects:</b> 26 public GitHub repositories and 20+ small apps/scripts across multiple stacks.</li> <li class="svelte-w3vaao"><b>Hackathon Winner — Cassini Camp (Cyprus):</b> Core member of <em>SSATfire</em>, 1st place for an innovative space-data solution.</li> <li class="svelte-w3vaao"><b>Champion — Venetostars 2025:</b> With <em>Team Thalassat</em>, delivered rapid prototyping and seamless teamwork.</li> <li class="svelte-w3vaao"><b>STEM &amp; Robotics Mentor:</b> Tutored C++ and robotics fundamentals through hands-on projects.</li></ul></section> <section class="card svelte-w3vaao"><h2 class="svelte-w3vaao" data-svelte-h="svelte-abhqfo">Strengths</h2> <img src="/write.png" alt="Notes and planning" class="svelte-w3vaao"> <ul class="svelte-w3vaao"><li class="svelte-w3vaao"><b data-svelte-h="svelte-ns02e6">Polyglot &amp; Full-Stack:</b> ${validate_component(Fa, "Fa").$$render($$result, { icon: faPython }, {}, {})} Python, ${validate_component(Fa, "Fa").$$render($$result, { icon: faJs }, {}, {})} JavaScript/TypeScript, C++, C# (${validate_component(Fa, "Fa").$$render($$result, { icon: faHashtag }, {}, {})}), Lua; Node.js, React, SvelteKit.</li> <li class="svelte-w3vaao" data-svelte-h="svelte-1u7qtl3"><b>Ethical Hacking:</b> Practical security mindset: assessment, hardening, best practices.</li> <li class="svelte-w3vaao" data-svelte-h="svelte-6szo50"><b>Analytical Problem-Solving:</b> Break down complexity, design clean solutions, execute.</li> <li class="svelte-w3vaao" data-svelte-h="svelte-w234pf"><b>Clear Communication:</b> Teach and explain technical ideas to any audience.</li> <li class="svelte-w3vaao" data-svelte-h="svelte-1y252jf"><b>Adaptability:</b> Learn tools fast; stay current with modern stacks.</li></ul></section> <section class="card svelte-w3vaao" data-svelte-h="svelte-d7ekj3"><h2 class="svelte-w3vaao">Goals</h2> <img src="/comp.png" alt="Computing and engineering goals" class="svelte-w3vaao"> <ul class="svelte-w3vaao"><li class="svelte-w3vaao"><b>Advance in Electrical Engineering</b> with hands-on experience.</li> <li class="svelte-w3vaao"><b>Go to MIT</b> to push research and impact.</li> <li class="svelte-w3vaao"><b>Contribute to real projects</b> with measurable outcomes.</li> <li class="svelte-w3vaao"><b>Expand mentoring</b> for the next generation of builders.</li> <li class="svelte-w3vaao"><b>Build innovative robots &amp; software</b> that solve real problems.</li></ul></section> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--neon:#ff00ff}#container.svelte-2bl0qe.svelte-2bl0qe{width:min(100%, 1100px);margin-inline:auto;padding-inline:clamp(12px,4vw,24px);display:flex;flex-direction:column;align-items:center;text-align:center;color:#fff;gap:clamp(14px,3vw,24px)}#about.svelte-2bl0qe.svelte-2bl0qe{width:100%;max-width:64rem;display:flex;flex-direction:column;align-items:center;gap:clamp(8px,1.8vw,16px)}#about.svelte-2bl0qe h1.svelte-2bl0qe{margin:clamp(12px,3vw,24px) 0;font-size:clamp(2rem,6vw,3rem);line-height:1.1;transition:transform .25s ease, text-shadow .25s ease;text-shadow:4px 4px 2px var(--color-primary)}@media(hover:hover){#about.svelte-2bl0qe h1.svelte-2bl0qe:hover{transform:scale(1.08);text-decoration:underline solid var(--neon);text-shadow:4px 4px 2px var(--color-primary)}}#about.svelte-2bl0qe p.svelte-2bl0qe{background-color:rgba(97,20,128,.5);padding:clamp(12px,2.4vw,20px);border-radius:12px;border:5px solid var(--color-primary);font-size:clamp(.95rem,2.2vw,1.1rem);line-height:1.6;width:100%;transition:transform .2s ease, background-color .2s ease, color .2s ease, box-shadow .2s ease}@media(hover:hover){#about.svelte-2bl0qe p.svelte-2bl0qe:hover{transform:translateY(-2px);background-color:rgba(97,18,128,.7);color:var(--color-secondary);box-shadow:0 0 24px #ff00ff55}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13jtpyi_START --><meta property="og:title" content="About - Stefanos Siathas"><meta property="og:description" content="Learn about Stefanos Siathas: STEM ambassador, computer science and physics student, and builder of creative projects."><meta property="og:type" content="website"><meta property="og:url" content="https://stefanossiathas.com/background"><meta property="og:image" content="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg">${$$result.title = `<title>About — Stefanos Siathas</title>`, ""}<!-- HEAD_svelte-13jtpyi_END -->`, ""} <section id="container" class="svelte-2bl0qe"><div id="about" class="svelte-2bl0qe" data-svelte-h="svelte-5tal28"><h1 class="svelte-2bl0qe">About Me</h1> <p class="svelte-2bl0qe">Hi, I&#39;m Stefanos Siathas, a passionate computer scientist with a strong background in various programming languages,
      including Python, C++, JavaScript, C#, and Lua. I have experience in ethical hacking and enjoy tutoring others in
      computer science concepts. My goal is to leverage my skills to build creative, useful projects and help more people
      learn and grow in tech.</p></div> ${validate_component(Accivmnets, "Accivmnets").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
