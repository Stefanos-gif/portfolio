import { F as head } from "../../../../chunks/index2.js";
import { T as TripleImage } from "../../../../chunks/TripleImage.js";
function _page($$payload) {
  const IMG_H = "clamp(220px, 50vh, 560px)";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>C++ Level 3</title>`;
    $$payload2.out.push(`<meta property="og:title" content="C++ Level 3 Project - Stefanos Siathas" class="svelte-vd2s1x"/> <meta property="og:description" content="Explore my C++ Level 3 project, featuring advanced code, libraries, and interactive demos. See the code and results!" class="svelte-vd2s1x"/> <meta property="og:type" content="website" class="svelte-vd2s1x"/> <meta property="og:url" content="https://stefanossiathas.com/projects/cpp-lvl3" class="svelte-vd2s1x"/> <meta property="og:image" content="/Prog1.png" class="svelte-vd2s1x"/>`);
  });
  $$payload.out.push(`<section class="wrap title svelte-vd2s1x"><h1 class="svelte-vd2s1x">Welcome to my C++ Level 3 Project</h1> <p class="intro svelte-vd2s1x">This contains my C++ Level 3 project, which I’ll continue to expand as I improve. I’ve incorporated numerous libraries and defined a wide range of keywords. Most of my future projects will be hosted here—feel free to explore the code on this <a href="https://github.com/Stefanos-gif/Programming/tree/main" target="_blank" rel="noopener noreferrer" class="svelte-vd2s1x">Repository</a>!</p></section> <section class="wrap arrows svelte-vd2s1x"><div class="fire-arrow-container svelte-vd2s1x"><div class="fire-arrow svelte-vd2s1x"><div class="arrow-body svelte-vd2s1x"><div class="fire svelte-vd2s1x"><span class="flame flame1 svelte-vd2s1x"></span> <span class="flame flame2 svelte-vd2s1x"></span> <span class="flame flame3 svelte-vd2s1x"></span> <span class="flame flame4 svelte-vd2s1x"></span> <span class="flame flame5 svelte-vd2s1x"></span> <span class="flame flame6 svelte-vd2s1x"></span> <span class="flame flame7 svelte-vd2s1x"></span> <span class="flame flame8 svelte-vd2s1x"></span></div></div> <div class="arrow-head svelte-vd2s1x"><div class="fire fire-head svelte-vd2s1x"><span class="flame flame9 svelte-vd2s1x"></span> <span class="flame flame10 svelte-vd2s1x"></span> <span class="flame flame11 svelte-vd2s1x"></span></div></div></div></div></section> <section class="wrap media svelte-vd2s1x"><figure class="img-card svelte-vd2s1x">`);
  TripleImage($$payload, {
    img_url1: "/Prog1.png",
    img_url2: "/Prog1.png",
    img_url3: "/Prog1.png",
    img_height: IMG_H,
    aspect_ratio: "17/11",
    alt: "C++ Level 3 Preview"
  });
  $$payload.out.push(`<!----></figure></section> <section class="wrap keywords svelte-vd2s1x"><div class="letters svelte-vd2s1x"><span style="animation-delay:.0s" class="svelte-vd2s1x">K</span> <span style="animation-delay:.05s" class="svelte-vd2s1x">e</span> <span style="animation-delay:.1s" class="svelte-vd2s1x">y</span> <span style="animation-delay:.15s" class="svelte-vd2s1x">w</span> <span style="animation-delay:.2s" class="svelte-vd2s1x">o</span> <span style="animation-delay:.25s" class="svelte-vd2s1x">r</span> <span style="animation-delay:.3s" class="svelte-vd2s1x">d</span> <span style="animation-delay:.35s" class="svelte-vd2s1x">s</span></div> <div class="decor svelte-vd2s1x"><span class="line svelte-vd2s1x"></span> <span class="line svelte-vd2s1x"></span></div></section> <section class="wrap note svelte-vd2s1x"><p class="svelte-vd2s1x">Below you’ll find the list of keywords corresponding to the various projects I’ve successfully completed, along with a brief description of each project’s scope and outcomes.</p></section> <section class="wrap media svelte-vd2s1x"><figure class="img-card wide svelte-vd2s1x">`);
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
