import { c as create_ssr_component, d as add_attribute, f as escape, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                                                            */import { faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import { faC, faHashtag, faL } from "@fortawesome/free-solid-svg-icons";
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
  code: "#achivment-container.svelte-v1y7hx.svelte-v1y7hx{text-align:center;display:grid;grid-template-columns:repeat(3, 1fr);gap:3vw;padding-left:1vw;padding-right:1vw;background-color:rgba(57, 32, 66, 0.5);border-radius:7px;border:solid 5px #361144}#achivment-container.svelte-v1y7hx img.svelte-v1y7hx{width:100%;border-radius:7px;border:solid 5px #643077}",
  map: null
};
const Accivmnets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="achivment-container" class="svelte-v1y7hx"><div data-svelte-h="svelte-1i3qnvk"><h2>Achievements</h2> <img src="/paint.jpg" alt="Painting achievement illustration" class="svelte-v1y7hx"> <ul><li><b>Completed 43 Programming Projects:</b> Built and maintained 23 public GitHub repositories and over 20 additional small-scale applications and scripts across multiple languages and frameworks.</li> <li><b>Hackathon Winner – Cassini Camp (Cyprus):</b> As a core member of <em>SSATfire</em>, won 1st place by architecting and demoing an innovative solution under a 48-hour deadline.</li> <li><b>Champion – Venetostars 2025 Challenge:</b> Collaborated with <em>Team Thalassat</em> to secure top honors in Venetostars 2025, showcasing rapid prototyping and seamless teamwork.</li> <li><b>STEM &amp; Robotics Mentor:</b> Tutored junior programmers in C++ and robotics engineering fundamentals, guiding them through hands-on projects and reinforcing core STEM concepts.</li></ul></div> <div><h2 data-svelte-h="svelte-abhqfo">Strengths</h2> <img src="/write.png" class="svelte-v1y7hx"> <ul><li><b data-svelte-h="svelte-c7t4m4">Polyglot &amp; Full-Stack Developer:</b> Fluent in ${validate_component(Fa, "Fa").$$render($$result, { icon: faPython }, {}, {})} Python, ${validate_component(Fa, "Fa").$$render($$result, { icon: faJs }, {}, {})} JavaScript,  TypeScript, ${validate_component(Fa, "Fa").$$render($$result, { icon: faC }, {}, {})} C++, ${validate_component(Fa, "Fa").$$render($$result, { icon: faHashtag }, {}, {})} C#, ${validate_component(Fa, "Fa").$$render($$result, { icon: faL }, {}, {})} Lua, with hands-on experience in Node.js, React, and SvelteKit.</li> <li data-svelte-h="svelte-icatd8"><b>Ethical Hacking Expertise:</b> Deep knowledge and practical skills in vulnerability assessment, penetration testing, and security best practices.</li> <li data-svelte-h="svelte-166akgf"><b>Analytical Problem-Solving:</b> Strong ability to break down complex issues, craft innovative solutions, and execute them effectively.</li> <li data-svelte-h="svelte-14fn59l"><b>Clear Communication:</b> Excel at conveying technical concepts clearly to students, peers, and non-technical stakeholders.</li> <li data-svelte-h="svelte-12dyxbw"><b>Adaptability &amp; Continuous Learning:</b> Quick to master new tools and technologies, staying current with evolving industry trends.</li></ul></div> <div data-svelte-h="svelte-19616dm"><h2>Goals</h2> <img src="/comp.png" class="svelte-v1y7hx"> <ul><li><b>Advance in Cybersecurity:</b> Gain advanced certifications in cybersecurity to enhance expertise and contribute to securing critical systems and data.</li> <li><b>Master Data Science and Machine Learning:</b> Acquire deep knowledge and practical skills in data science and machine learning to develop intelligent and data-driven applications.</li> <li><b>Contribute to Open Source Projects:</b> Actively participate in open-source communities by contributing to meaningful projects, gaining experience, and giving back to the developer community.</li> <li><b>Expand Tutoring and Mentoring:</b> Continue to tutor and mentor aspiring programmers, fostering the next generation of tech talent.</li> <li><b>Build Innovative Software Solutions:</b> Develop innovative software solutions that solve real-world problems, improve efficiency, and positively impact society.</li></ul></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#container.svelte-1cgixoa.svelte-1cgixoa{display:flex;flex-direction:column;align-items:center;text-align:center}#container.svelte-1cgixoa h1.svelte-1cgixoa{margin:3vw;transition:all 0.3s ease-in-out}#container.svelte-1cgixoa h1.svelte-1cgixoa:hover,p.svelte-1cgixoa.svelte-1cgixoa:hover{transform:scale(1.2);text-decoration:underline solid #ff00ff;text-shadow:4px 4px 2px var(--color-primary)}#container.svelte-1cgixoa p.svelte-1cgixoa{background-color:rgb(97, 20, 128, 0.5);padding:1.5vw;border-radius:7px;border:solid 5px var(--color-primary);transition:all 0.3s ease-in-out;font-size:2vh}#about.svelte-1cgixoa.svelte-1cgixoa{max-width:64rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<head data-svelte-h="svelte-4knwwu"><meta property="og:title" content="About - Stefanos Siathas"> <meta property="og:description" content="Learn about Stefanos Siathas: STEM ambassador, computer science and physics student, and builder of creative projects."> <meta property="og:type" content="website"> <meta property="og:url" content="https://stefanossiathas.com/background"> <meta property="og:image" content="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg"></head>  <div id="container" class="svelte-1cgixoa"><div id="about" class="svelte-1cgixoa" data-svelte-h="svelte-xv9exp"><h1 class="svelte-1cgixoa">About Me</h1> <p class="svelte-1cgixoa">Hi, I&#39;m Stefanos Siathas, a passionate computer scientist with a strong background in various programming languages, including Python, C++, JavaScript, C#, and Lua. I have extensive experience in ethical hacking and a talent for tutoring others in computer science concepts. My goal is to leverage my skills and knowledge to contribute to innovative projects and help others learn and grow in the field of technology.</p></div> ${validate_component(Accivmnets, "Accivmnets").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
