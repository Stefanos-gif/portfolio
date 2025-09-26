import { F as head } from "../../../../chunks/index2.js";
import { T as TripleImage } from "../../../../chunks/TripleImage.js";
function _page($$payload) {
  const IMG_H = "clamp(220px, 50vh, 560px)";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>C++ Level 3</title>`;
    $$payload2.out.push(`<meta property="og:title" content="C++ Level 3 Project - Stefanos Siathas" class="svelte-29cqtw"/> <meta property="og:description" content="Explore my C++ Level 3 project, featuring advanced code, libraries, and interactive demos. See the code and results!" class="svelte-29cqtw"/> <meta property="og:type" content="website" class="svelte-29cqtw"/> <meta property="og:url" content="https://stefanossiathas.com/projects/cpp-lvl3" class="svelte-29cqtw"/> <meta property="og:image" content="/Prog1.png" class="svelte-29cqtw"/>`);
  });
  $$payload.out.push(`<section class="wrap title svelte-29cqtw"><h1 class="svelte-29cqtw">Welcome to my C++ Level 3 Project</h1> <p class="intro svelte-29cqtw">This contains my C++ Level 3 project, which I’ll continue to expand as I improve. I’ve incorporated numerous libraries and defined a wide range of keywords. Most of my future projects will be hosted here—feel free to explore the code on this <a href="https://github.com/Stefanos-gif/Programming/tree/main" target="_blank" rel="noopener noreferrer" class="svelte-29cqtw">Repository</a>!</p></section> <section class="wrap arrows svelte-29cqtw"><div class="fire-arrow-container svelte-29cqtw"><div class="fire-arrow svelte-29cqtw"><div class="arrow-body svelte-29cqtw"><div class="fire svelte-29cqtw"><span class="flame flame1 svelte-29cqtw"></span> <span class="flame flame2 svelte-29cqtw"></span> <span class="flame flame3 svelte-29cqtw"></span> <span class="flame flame4 svelte-29cqtw"></span> <span class="flame flame5 svelte-29cqtw"></span> <span class="flame flame6 svelte-29cqtw"></span> <span class="flame flame7 svelte-29cqtw"></span> <span class="flame flame8 svelte-29cqtw"></span></div></div> <div class="arrow-head svelte-29cqtw"><div class="fire fire-head svelte-29cqtw"><span class="flame flame9 svelte-29cqtw"></span> <span class="flame flame10 svelte-29cqtw"></span> <span class="flame flame11 svelte-29cqtw"></span></div></div></div></div></section> <section class="wrap media svelte-29cqtw"><figure class="img-card svelte-29cqtw" aria-label="C++ Level 3 Preview">`);
  TripleImage($$payload, {
    img_url1: "/Prog1.png",
    img_url2: "/Prog1.png",
    img_url3: "/Prog1.png",
    img_height: IMG_H,
    aspect_ratio: "17/11",
    alt: "C++ Level 3 Preview"
  });
  $$payload.out.push(`<!----></figure></section> <section class="wrap keywords svelte-29cqtw"><div class="letters svelte-29cqtw"><span style="animation-delay:.0s" class="svelte-29cqtw">K</span> <span style="animation-delay:.05s" class="svelte-29cqtw">e</span> <span style="animation-delay:.1s" class="svelte-29cqtw">y</span> <span style="animation-delay:.15s" class="svelte-29cqtw">w</span> <span style="animation-delay:.2s" class="svelte-29cqtw">o</span> <span style="animation-delay:.25s" class="svelte-29cqtw">r</span> <span style="animation-delay:.3s" class="svelte-29cqtw">d</span> <span style="animation-delay:.35s" class="svelte-29cqtw">s</span></div> <div class="decor svelte-29cqtw"><span class="line svelte-29cqtw"></span> <span class="line svelte-29cqtw"></span></div></section> <section class="wrap note svelte-29cqtw"><p class="svelte-29cqtw">Below you’ll find the list of keywords corresponding to the various projects I’ve successfully completed, along with a brief description of each project’s scope and outcomes.</p></section> <section class="wrap media svelte-29cqtw"><figure class="img-card wide svelte-29cqtw" aria-label="Keywords Overview">`);
  TripleImage($$payload, {
    img_url1: "/prog2.png",
    img_url2: "/prog2.png",
    img_url3: "/prog2.png",
    img_height: IMG_H,
    aspect_ratio: "17/11",
    alt: "Keywords Overview"
  });
  $$payload.out.push(`<!----></figure></section> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
}
export {
  _page as default
};
