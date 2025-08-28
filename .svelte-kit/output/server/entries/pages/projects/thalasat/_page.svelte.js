import { X as ensure_array_like, F as head, T as attr, U as attr_class, Q as escape_html, V as stringify } from "../../../../chunks/index2.js";
function _page($$payload) {
  const galleryImages = ["/1stpage.png", "/2nd.png", "/3rd.png", "/4th.png"];
  let currentGalleryIndex = 0;
  const solutionImages = ["/l1.png", "/l2.png", "/l3.png", "/L4.png"];
  const solutionBoxes = [
    {
      title: "The Solution",
      p: "We fuse Copernicus satellite data with machine learning to monitor sea surface temperature, chlorophyll-a, turbidity, and coastal erosion across the Mediterranean. The platform turns raw imagery into near real-time maps, analytics, and short-term predictions that are clear and actionable."
    },
    {
      title: "AI-Driven Insights & Alerts",
      p: "Our models detect anomalies and issue early warnings for marine heatwaves, harmful algal blooms, coral-bleaching risk, and shoreline retreat. These alerts help coastal communities, policymakers, and environmental organizations respond faster and plan better."
    },
    {
      title: "Open Access Platform",
      p: "Core layers and indicators are free for the public and researchers. Partner features add custom areas of interest, historical trend analysis, downloadable reports, and tailored alert thresholds for municipalities, NGOs, and agencies."
    },
    {
      title: "Collaboration & Ground Truth",
      p: "We work with local experts and stakeholders (e.g., research institutes and coastal authorities) to validate signals, improve datasets, and ensure the platform solves real coastal-management needs."
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
    $$payload2.out.push(`<meta name="viewport" content="width=device-width, initial-scale=1" class="svelte-7wy3fg"/> <meta property="og:title" content="Thalasat — Space &amp; AI for the Mediterranean" class="svelte-7wy3fg"/> Cyprus <meta property="og:description" content="From  — we use space technologies and AI to protect the Mediterranean Sea. Thalasat combines Copernicus satellite data with machine learning to monitor sea surface temperature, chlorophyll-a, turbidity, and coastal erosion, delivering near real-time insights and predictive models for faster response." class="svelte-7wy3fg"/> <meta property="og:type" content="website" class="svelte-7wy3fg"/> <meta property="og:url" content="https://stefanossiathas.com/projects/thalasat" class="svelte-7wy3fg"/> <meta property="og:image" content="/namet.png" class="svelte-7wy3fg"/>`);
  });
  $$payload.out.push(`<div id="animated-background" aria-hidden="true" class="svelte-7wy3fg"></div> <div id="animation" class="container section svelte-7wy3fg" aria-label="Thalasat Title"><span class="letter left svelte-7wy3fg" style="--delay: 0s">T</span> <span class="letter left svelte-7wy3fg" style="--delay: 0.15s">h</span> <span class="letter left svelte-7wy3fg" style="--delay: 0.3s">a</span> <span class="letter left svelte-7wy3fg" style="--delay: 0.45s">l</span> <span class="letter left svelte-7wy3fg" style="--delay: 0.6s">a</span> <span class="letter right svelte-7wy3fg" style="--delay: 0.75s">s</span> <span class="letter right svelte-7wy3fg" style="--delay: 0.9s">a</span> <span class="letter right svelte-7wy3fg" style="--delay: 1.05s">t</span></div> <section class="section container svelte-7wy3fg"><div id="start" class="svelte-7wy3fg"><p class="svelte-7wy3fg">Thalasat is a youth-led initiative born in Cyprus. I'm happy to be able to work with the team that I've met and take up the challenge of Venetostars. The name “Thalasat” comes from the Greek word “θάλασσα” (thalassa), meaning “sea”.</p></div> <div class="fire-border svelte-7wy3fg" aria-hidden="true"><img src="/namet.png" alt="Thalasat logo over water" class="bordered-img svelte-7wy3fg"/></div></section> <div class="arrow-animated-container container svelte-7wy3fg" aria-hidden="true"><div class="arrow-animated-with-text svelte-7wy3fg"><div class="arrow-animated svelte-7wy3fg"><div class="arrow-shaft svelte-7wy3fg"></div> <div class="arrow-head svelte-7wy3fg"></div></div> <span class="arrow-animated-text svelte-7wy3fg">The Problem</span></div></div> <section class="section container problems-grid svelte-7wy3fg"><div id="problems-left" class="animated-box svelte-7wy3fg"><h2 class="problem-title svelte-7wy3fg">The Problem</h2> <p class="problem-main svelte-7wy3fg">We address three connected gaps in the Mediterranean: (1) marine ecological crises, (2) lack of awareness, and (3) limited access to decision-ready data for local communities.</p> <h3 class="problem-section-title svelte-7wy3fg">1) Marine Ecological Crises</h3> <p class="problem-section svelte-7wy3fg">Warming waters and human pressure drive harmful algal blooms, coral-bleaching risk, oxygen-poor zones, pollution, and shoreline change. These cascading effects threaten biodiversity and coastal livelihoods — demanding proactive, data-informed action.</p> <h3 class="problem-section-title svelte-7wy3fg">2) Lack of Awareness</h3> <p class="problem-section svelte-7wy3fg">Critical ocean signals often remain invisible to the public. We translate complex satellite products into simple maps, timelines, and alerts that anyone can understand.</p> <h3 class="problem-section-title svelte-7wy3fg">3) Limited Access for Local Communities</h3> <p class="problem-section svelte-7wy3fg">Smaller municipalities and NGOs struggle to use raw Earth-observation data. Thalasat delivers decision-ready layers and configurable alerts so they can respond quickly on the coast.</p></div> <div class="problems-gallery svelte-7wy3fg"><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let img = each_array[i];
    $$payload.out.push(`<img${attr("src", img)}${attr("alt", `Problem slide ${i + 1}`)}${attr_class(`gallery-img-3d ${stringify(i === currentGalleryIndex ? "active" : "")}`, "svelte-7wy3fg")} tabindex="0" role="button" aria-label="Open image fullscreen"/>`);
  }
  $$payload.out.push(`<!--]--> <button class="gallery-arrow-btn left svelte-7wy3fg" aria-label="Previous image"${attr("disabled", currentGalleryIndex === 0, true)}>←</button> <button class="gallery-arrow-btn right svelte-7wy3fg" aria-label="Next image"${attr("disabled", currentGalleryIndex === galleryImages.length - 1, true)}>→</button></div></section> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="arrow-animated-container container svelte-7wy3fg" aria-hidden="true"><div class="arrow-animated-with-text svelte-7wy3fg"><div class="arrow-animated svelte-7wy3fg"><div class="arrow-shaft svelte-7wy3fg"></div> <div class="arrow-head svelte-7wy3fg"></div></div> <span class="arrow-animated-text svelte-7wy3fg">Our Solution</span></div></div> <section class="section container solution-grid svelte-7wy3fg"><div${attr_class(
    `solution-box solution-3d-anim ${stringify("")}`,
    "svelte-7wy3fg"
  )}><h2 class="svelte-7wy3fg">${escape_html(solutionBoxes[currentSolutionIndex].title)}</h2> <p class="svelte-7wy3fg">${escape_html(solutionBoxes[currentSolutionIndex].p)}</p></div> <div${attr_class(
    `solution-gallery solution-3d-anim ${stringify("")}`,
    "svelte-7wy3fg"
  )}><img${attr("src", solutionImages[currentSolutionIndex])}${attr("alt", `Solution image ${currentSolutionIndex + 1}`)} class="solution-img svelte-7wy3fg" tabindex="0" role="button" aria-label="Open solution image fullscreen"/> <button class="solution-arrow-btn left svelte-7wy3fg" aria-label="Previous solution"${attr("disabled", currentSolutionIndex === 0, true)}>←</button> <button class="solution-arrow-btn right svelte-7wy3fg" aria-label="Next solution"${attr("disabled", currentSolutionIndex === solutionImages.length - 1 || solutionTransitioning, true)}>→</button></div></section> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <section class="section container svelte-7wy3fg" id="venetostars"><h2 class="svelte-7wy3fg">Winner — VeneToStars Space &amp; Blue Economy Challenge</h2> <p class="svelte-7wy3fg">At just 15 years old, I stepped onto the stage of the VeneToStars Space &amp; Blue Economy Challenge alongside my talented teammates from @thalasat_cy, and together we took home the top prize—an outcome that still feels utterly unexpected. From brainstorming satellite-based coastal monitoring solutions to late-night rehearsals, our team’s collaboration and creativity shone through at every turn. Beyond the thrill of competition, Venice itself stole my heart: freshly made cicchetti along the canals, creamy gelato beside St. Mark’s Basilica, and unforgettable seafood risottos that fueled each day’s adventures.

    To top it all off, we had the honor of meeting the President and the Minister of Innovation, who personally congratulated our team and posed for photos with us—moments I’ll never forget. Winning against so many brilliant entrants was an incredible rush—proof that passion and teamwork can defy all expectations. It was an amazing experience I’ll carry with me forever. Look at the pictures under.</p> <p class="svelte-7wy3fg">To top it all off, we had the honor of meeting the President and the Minister of Innovation, who personally congratulated our team and posed for photos with us—moments I’ll never forget. Winning against so many brilliant entrants was an incredible rush—proof that passion and teamwork can defy all expectations. It was an amazing experience I’ll carry with me forever. Look at the pictures under.</p></section> <section class="section container veneto-gallery-section svelte-7wy3fg"><h2 class="veneto-title svelte-7wy3fg">VeneToStars Gallery</h2> <div class="veneto-gallery-3d svelte-7wy3fg"><!--[-->`);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let img = each_array_1[i];
    $$payload.out.push(`<img${attr("src", img)}${attr("alt", `VeneToStars photo ${i + 1}`)}${attr_class(`veneto-img-3d ${stringify(i === venetoIndex ? "active" : "")} ${stringify(i < venetoIndex ? "left" : "")} ${stringify(i > venetoIndex ? "right" : "")}`, "svelte-7wy3fg")} tabindex="0" role="button" aria-label="Open Veneto photo fullscreen"/>`);
  }
  $$payload.out.push(`<!--]--> <button class="veneto-arrow-btn left svelte-7wy3fg" aria-label="Previous photo"${attr("disabled", venetoIndex === 0, true)}>←</button> <button class="veneto-arrow-btn right svelte-7wy3fg" aria-label="Next photo"${attr("disabled", venetoIndex === venetoImages.length - 1, true)}>→</button> <div class="veneto-photo-count svelte-7wy3fg">Photo ${escape_html(venetoIndex + 1)} of ${escape_html(venetoImages.length)}</div></div></section> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
}
export {
  _page as default
};
