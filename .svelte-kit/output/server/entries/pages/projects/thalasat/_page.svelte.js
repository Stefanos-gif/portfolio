import { X as ensure_array_like, F as head, T as attr, U as attr_class, Q as escape_html, V as stringify } from "../../../../chunks/index2.js";
function _page($$payload) {
  const galleryImages = ["/1stpage.png", "/2nd.png", "/3rd.png", "/4th.png"];
  let currentGalleryIndex = 0;
  const solutionImages = ["/l1.png", "/l2.png", "/l3.png", "/L4.png"];
  const solutionBoxes = [
    {
      title: "The solution",
      p: "We created a website that will allow people to track the sea surface temperature, chlorofil type a concentration etc."
    },
    {
      title: "Cooperate",
      p: "We talked with a lot of buissnesses about helping us and improving our knowledge about the sea and improving our kowledge and capability of out-reach."
    },
    {
      title: "Open Access Platform",
      p: "All collected data is visualized and made freely available through an intuitive web platform, supporting research and local decision-making except of custom tracking abilities that will be priced accordingly."
    },
    {
      title: "AI-Driven Alerts",
      p: "Our AI models detect anomalies and send early warnings about pollution, algal blooms, or other threats, helping to protect the Mediterranean Sea."
    }
  ];
  let currentSolutionIndex = 0;
  let solutionTransitioning = false;
  const venetoImages = [
    "/ven1.jpg",
    "/ven2.jpg",
    "/ven3.jpg",
    "/ven4.jpg",
    "/ven5.jpg",
    "/ven6.jpg",
    "/ven7.jpg",
    "/ven8.jpg",
    "/ven9.jpg",
    "/ven10.jpg",
    "/ven11.jpg",
    "/ven12.jpg",
    "/ven13.jpg",
    "/ven14.jpg"
  ];
  let venetoIndex = 0;
  const each_array = ensure_array_like(galleryImages);
  const each_array_1 = ensure_array_like(venetoImages);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Thalasat</title>`;
    $$payload2.out.push(`<meta name="viewport" content="width=device-width, initial-scale=1" class="svelte-7h3708"/> <meta property="og:title" content="Thalasat Project - Stefanos Siathas" class="svelte-7h3708"/> <meta property="og:description" content="Thalasat: Youth-led initiative for marine monitoring and environmental protection. Discover our award-winning project!" class="svelte-7h3708"/> <meta property="og:type" content="website" class="svelte-7h3708"/> <meta property="og:url" content="https://stefanossiathas.com/projects/thalasat" class="svelte-7h3708"/> <meta property="og:image" content="/namet.png" class="svelte-7h3708"/>`);
  });
  $$payload.out.push(`<div id="animated-background" aria-hidden="true" class="svelte-7h3708"></div> <div id="animation" class="container section svelte-7h3708" aria-label="Thalasat Title"><span class="letter left svelte-7h3708" style="--delay: 0s">T</span> <span class="letter left svelte-7h3708" style="--delay: 0.15s">h</span> <span class="letter left svelte-7h3708" style="--delay: 0.3s">a</span> <span class="letter left svelte-7h3708" style="--delay: 0.45s">l</span> <span class="letter left svelte-7h3708" style="--delay: 0.6s">a</span> <span class="letter right svelte-7h3708" style="--delay: 0.75s">s</span> <span class="letter right svelte-7h3708" style="--delay: 0.9s">a</span> <span class="letter right svelte-7h3708" style="--delay: 1.05s">t</span></div> <section class="section container svelte-7h3708"><div id="start" class="svelte-7h3708"><p class="svelte-7h3708">Thalasat is a youth-led initiative born in Cyprus. I'm happy to be able to work with the team that I've met and take up the challenge of Venetostars.
      The name “Thalasat” comes from the Greek word “θάλασσα” (thalassa), meaning “sea”.</p></div> <div class="fire-border svelte-7h3708" aria-hidden="true"><img src="/namet.png" alt="Thalasat project" class="bordered-img svelte-7h3708"/></div></section> <div class="arrow-animated-container container svelte-7h3708" aria-hidden="true"><div class="arrow-animated-with-text svelte-7h3708"><div class="arrow-animated svelte-7h3708"><div class="arrow-shaft svelte-7h3708"></div> <div class="arrow-head svelte-7h3708"></div></div> <span class="arrow-animated-text svelte-7h3708">The Problem</span></div></div> <section class="section container problems-grid svelte-7h3708"><div id="problems-left" class="animated-box svelte-7h3708"><h2 class="problem-title svelte-7h3708">The Problem</h2> <p class="problem-main svelte-7h3708">The problems we are trying to combat through our system can be broken down into three main categories: marine ecological crises,
      lack of public awareness, and limited access to useful marine-related data for smaller local communities and regions.</p> <h3 class="problem-section-title svelte-7h3708">Marine Ecological Crises</h3> <p class="problem-section svelte-7h3708">Starting off with marine ecological crises. These include issues like algal blooms, coral bleaching, declining fish populations,
      and increasing pollution levels, all of which pose serious threats to the health of the Mediterranean Sea. The Mediterranean Sea
      is under growing pressure from climate-related and human-driven changes. Rising temperatures aren’t just warming the water, they’re
      disrupting entire ecosystems, leading to oxygen-depleted zones that can no longer support marine life. At the same time, nutrient
      runoff from coastal development and agriculture fuel harmful algal blooms, which further destabilize the environment. These shifts
      have serious consequences as seen in recent years where nearly a quarter of assessed marine species in the region are already
      classified as threatened. It’s a complex, cascading crisis that demands proactive, data-informed solutions.</p></div> <div class="problems-gallery svelte-7h3708"><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let img = each_array[i];
    $$payload.out.push(`<img${attr("src", img)}${attr("alt", `Problem gallery image ${i + 1}`)}${attr_class(`gallery-img-3d ${stringify(i === currentGalleryIndex ? "active" : "")}`, "svelte-7h3708")} tabindex="0" role="button" aria-label="Open image fullscreen"/>`);
  }
  $$payload.out.push(`<!--]--> <button class="gallery-arrow-btn left svelte-7h3708" aria-label="Previous image"${attr("disabled", currentGalleryIndex === 0, true)}>←</button> <button class="gallery-arrow-btn right svelte-7h3708" aria-label="Next image"${attr("disabled", currentGalleryIndex === galleryImages.length - 1, true)}>→</button></div></section> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="arrow-animated-container container svelte-7h3708" aria-hidden="true"><div class="arrow-animated-with-text svelte-7h3708"><div class="arrow-animated svelte-7h3708"><div class="arrow-shaft svelte-7h3708"></div> <div class="arrow-head svelte-7h3708"></div></div> <span class="arrow-animated-text svelte-7h3708">Our Solution</span></div></div> <section class="section container solution-grid svelte-7h3708"><div${attr_class(
    `solution-box solution-3d-anim ${stringify("")}`,
    "svelte-7h3708"
  )}><h2 class="svelte-7h3708">${escape_html(solutionBoxes[currentSolutionIndex].title)}</h2> <p class="svelte-7h3708">${escape_html(solutionBoxes[currentSolutionIndex].p)}</p></div> <div${attr_class(
    `solution-gallery solution-3d-anim ${stringify("")}`,
    "svelte-7h3708"
  )}><img${attr("src", solutionImages[currentSolutionIndex])}${attr("alt", `Solution image ${currentSolutionIndex + 1}`)} class="solution-img svelte-7h3708" tabindex="0" role="button" aria-label="Open solution image fullscreen"/> <button class="solution-arrow-btn left svelte-7h3708" aria-label="Previous solution"${attr("disabled", currentSolutionIndex === 0, true)}>←</button> <button class="solution-arrow-btn right svelte-7h3708" aria-label="Next solution"${attr("disabled", currentSolutionIndex === solutionImages.length - 1 || solutionTransitioning, true)}>→</button></div></section> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <section class="section container svelte-7h3708" id="venetostars"><h2 class="svelte-7h3708">Triumph in Venice</h2> <p class="svelte-7h3708">At just 15 years old, I stepped onto the stage of the VeneToStars Space &amp; Blue Economy Challenge alongside my talented teammates from @thalasat_cy, and together we took home the top prize—an outcome that still feels utterly unexpected. From brainstorming satellite-based coastal monitoring solutions to late-night rehearsals, our team’s collaboration and creativity shone through at every turn. Beyond the thrill of competition, Venice itself stole my heart: freshly made cicchetti along the canals, creamy gelato beside St. Mark’s Basilica, and unforgettable seafood risottos that fueled each day’s adventures.</p> <p class="svelte-7h3708">To top it all off, we had the honor of meeting the President and the Minister of Innovation, who personally congratulated our team and posed for photos with us—moments I’ll never forget. Winning against so many brilliant entrants was an incredible rush—proof that passion and teamwork can defy all expectations. It was an amazing experience I’ll carry with me forever. Look at the pictures under.</p></section> <section class="section container veneto-gallery-section svelte-7h3708"><h2 class="veneto-title svelte-7h3708">VenetoStars Gallery</h2> <div class="veneto-gallery-3d svelte-7h3708"><!--[-->`);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let img = each_array_1[i];
    $$payload.out.push(`<img${attr("src", img)}${attr("alt", `Veneto photo ${i + 1}`)}${attr_class(`veneto-img-3d ${stringify(i === venetoIndex ? "active" : "")} ${stringify(i < venetoIndex ? "left" : "")} ${stringify(i > venetoIndex ? "right" : "")}`, "svelte-7h3708")} tabindex="0" role="button" aria-label="Open Veneto photo fullscreen"/>`);
  }
  $$payload.out.push(`<!--]--> <button class="veneto-arrow-btn left svelte-7h3708" aria-label="Previous photo"${attr("disabled", venetoIndex === 0, true)}>←</button> <button class="veneto-arrow-btn right svelte-7h3708" aria-label="Next photo"${attr("disabled", venetoIndex === venetoImages.length - 1, true)}>→</button> <div class="veneto-photo-count svelte-7h3708">Photo ${escape_html(venetoIndex + 1)} of ${escape_html(venetoImages.length)}</div></div></section> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <section class="section container svelte-7h3708" id="thal"><p class="svelte-7h3708">Thalasat has its own website <a href="https://github.com/Stefanos-gif/Programming/tree/main" target="_blank" rel="noopener noreferrer" class="svelte-7h3708">here</a>,
    and its Instagram is <a href="https://github.com/Stefanos-gif/Programming/tree/main" target="_blank" rel="noopener noreferrer" class="svelte-7h3708">here</a>.</p></section>`);
}
export {
  _page as default
};
