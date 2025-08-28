import { E as fallback, T as attr, U as attr_class, I as attr_style, V as stringify, Q as escape_html, G as bind_props, B as pop, z as push, F as head } from "../../../chunks/index2.js";
import "clsx";
/* empty css                                                           */
import { faPython, faJs } from "@fortawesome/free-brands-svg-icons";
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
function Fa($$payload, $$props) {
  push();
  let i, transform;
  let clazz = fallback($$props["class"], () => void 0, true);
  let id = fallback($$props["id"], () => void 0, true);
  let style = fallback($$props["style"], () => void 0, true);
  let icon = $$props["icon"];
  let title = fallback($$props["title"], () => void 0, true);
  let size = fallback($$props["size"], () => void 0, true);
  let color = fallback($$props["color"], () => void 0, true);
  let fw = fallback($$props["fw"], false);
  let pull = fallback($$props["pull"], () => void 0, true);
  let scale = fallback($$props["scale"], 1);
  let translateX = fallback($$props["translateX"], 0);
  let translateY = fallback($$props["translateY"], 0);
  let rotate = fallback($$props["rotate"], () => void 0, true);
  let flip = fallback($$props["flip"], () => void 0, true);
  let spin = fallback($$props["spin"], false);
  let pulse = fallback($$props["pulse"], false);
  let primaryColor = fallback($$props["primaryColor"], "");
  let secondaryColor = fallback($$props["secondaryColor"], "");
  let primaryOpacity = fallback($$props["primaryOpacity"], 1);
  let secondaryOpacity = fallback($$props["secondaryOpacity"], 0.4);
  let swapOpacity = fallback($$props["swapOpacity"], false);
  i = icon && icon.icon || [0, 0, "", [], ""];
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  if (i[4]) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<svg${attr("id", id)}${attr_class(`svelte-fa svelte-fa-base ${stringify(clazz)}`, "svelte-bvo74f", {
      "pulse": pulse,
      "svelte-fa-size-lg": size === "lg",
      "svelte-fa-size-sm": size === "sm",
      "svelte-fa-size-xs": size === "xs",
      "svelte-fa-fw": fw,
      "svelte-fa-pull-left": pull === "left",
      "svelte-fa-pull-right": pull === "right",
      "spin": spin
    })}${attr_style(style)}${attr("viewBox", `0 0 ${stringify(i[0])} ${stringify(i[1])}`)}${attr("aria-hidden", title === void 0)} role="img" xmlns="http://www.w3.org/2000/svg">`);
    if (title) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<title class="svelte-bvo74f">${escape_html(title)}</title>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--><g${attr("transform", `translate(${stringify(i[0] / 2)} ${stringify(i[1] / 2)})`)}${attr("transform-origin", `${stringify(i[0] / 4)} 0`)} class="svelte-bvo74f"><g${attr("transform", transform)} class="svelte-bvo74f">`);
    if (typeof i[4] == "string") {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<path${attr("d", i[4])}${attr("fill", color || primaryColor || "currentColor")}${attr("transform", `translate(${stringify(i[0] / -2)} ${stringify(i[1] / -2)})`)} class="svelte-bvo74f"></path>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<path${attr("d", i[4][0])}${attr("fill", secondaryColor || color || "currentColor")}${attr("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity)}${attr("transform", `translate(${stringify(i[0] / -2)} ${stringify(i[1] / -2)})`)} class="svelte-bvo74f"></path><path${attr("d", i[4][1])}${attr("fill", primaryColor || color || "currentColor")}${attr("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity)}${attr("transform", `translate(${stringify(i[0] / -2)} ${stringify(i[1] / -2)})`)} class="svelte-bvo74f"></path>`);
    }
    $$payload.out.push(`<!--]--></g></g></svg>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, {
    class: clazz,
    id,
    style,
    icon,
    title,
    size,
    color,
    fw,
    pull,
    scale,
    translateX,
    translateY,
    rotate,
    flip,
    spin,
    pulse,
    primaryColor,
    secondaryColor,
    primaryOpacity,
    secondaryOpacity,
    swapOpacity
  });
  pop();
}
function Accivmnets($$payload) {
  $$payload.out.push(`<div id="achivment-container" class="svelte-1lm738i"><section class="card svelte-1lm738i"><h2 class="svelte-1lm738i">Achievements</h2> <img src="/paint.jpg" alt="Creative project collage" class="svelte-1lm738i"/> <ul class="svelte-1lm738i"><li class="svelte-1lm738i"><b>Completed 46 Programming Projects:</b> 26 public GitHub repositories and 20+ small apps/scripts across multiple stacks.</li> <li class="svelte-1lm738i"><b>Hackathon Winner — Cassini Camp (Cyprus):</b> Core member of <em>SSATfire</em>, 1st place for an innovative space-data solution.</li> <li class="svelte-1lm738i"><b>Champion — Venetostars 2025:</b> With <em>Team Thalassat</em>, delivered rapid prototyping and seamless teamwork.</li> <li class="svelte-1lm738i"><b>STEM &amp; Robotics Mentor:</b> Tutored C++ and robotics fundamentals through hands-on projects.</li></ul></section> <section class="card svelte-1lm738i"><h2 class="svelte-1lm738i">Strengths</h2> <img src="/write.png" alt="Notes and planning" class="svelte-1lm738i"/> <ul class="svelte-1lm738i"><li class="svelte-1lm738i"><b>Polyglot &amp; Full-Stack:</b> `);
  Fa($$payload, { icon: faPython });
  $$payload.out.push(`<!----> Python, `);
  Fa($$payload, { icon: faJs });
  $$payload.out.push(`<!----> JavaScript/TypeScript, C++, C# (`);
  Fa($$payload, { icon: faHashtag });
  $$payload.out.push(`<!---->), Lua; Node.js, React, SvelteKit.</li> <li class="svelte-1lm738i"><b>Ethical Hacking:</b> Practical security mindset: assessment, hardening, best practices.</li> <li class="svelte-1lm738i"><b>Analytical Problem-Solving:</b> Break down complexity, design clean solutions, execute.</li> <li class="svelte-1lm738i"><b>Clear Communication:</b> Teach and explain technical ideas to any audience.</li> <li class="svelte-1lm738i"><b>Adaptability:</b> Learn tools fast; stay current with modern stacks.</li></ul></section> <section class="card svelte-1lm738i"><h2 class="svelte-1lm738i">Goals</h2> <img src="/comp.png" alt="Computing and engineering goals" class="svelte-1lm738i"/> <ul class="svelte-1lm738i"><li class="svelte-1lm738i"><b>Advance in Electrical Engineering</b> with hands-on experience.</li> <li class="svelte-1lm738i"><b>Go to MIT</b> to push research and impact.</li> <li class="svelte-1lm738i"><b>Contribute to real projects</b> with measurable outcomes.</li> <li class="svelte-1lm738i"><b>Expand mentoring</b> for the next generation of builders.</li> <li class="svelte-1lm738i"><b>Build innovative robots &amp; software</b> that solve real problems.</li></ul></section></div>`);
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About — Stefanos Siathas</title>`;
    $$payload2.out.push(`<meta property="og:title" content="About - Stefanos Siathas"/> <meta property="og:description" content="Learn about Stefanos Siathas: STEM ambassador, computer science and physics student, and builder of creative projects."/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://stefanossiathas.com/background"/> <meta property="og:image" content="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg"/>`);
  });
  $$payload.out.push(`<section id="container" class="svelte-2bl0qe"><div id="about" class="svelte-2bl0qe"><h1 class="svelte-2bl0qe">About Me</h1> <p class="svelte-2bl0qe">Hi, I'm Stefanos Siathas, a passionate computer scientist with a strong background in various programming languages,
      including Python, C++, JavaScript, C#, and Lua. I have experience in ethical hacking and enjoy tutoring others in
      computer science concepts. My goal is to leverage my skills to build creative, useful projects and help more people
      learn and grow in tech.</p></div> `);
  Accivmnets($$payload);
  $$payload.out.push(`<!----></section>`);
}
export {
  _page as default
};
