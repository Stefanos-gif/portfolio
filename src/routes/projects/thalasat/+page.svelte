<script>
  // ---------- DATA ----------
  const galleryImages = ['/1stpage.png', '/2nd.png', '/3rd.png', '/4th.png'];
  let currentGalleryIndex = 0;
  let galleryAnimating = false;

  const solutionImages = ['/l1.png', '/l2.png', '/l3.png', '/L4.png'];
  const solutionBoxes = [
    {
      title: 'The solution',
      p: 'We created a website that will allow people to track the sea surface temperature, chlorofil type a concentration etc.'
    },
    {
      title: 'Cooperate',
      p: 'We talked with a lot of buissnesses about helping us and improving our knowledge about the sea and improving our kowledge and capability of out-reach.'
    },
    {
      title: 'Open Access Platform',
      p: 'All collected data is visualized and made freely available through an intuitive web platform, supporting research and local decision-making except of custom tracking abilities that will be priced accordingly.'
    },
    {
      title: 'AI-Driven Alerts',
      p: 'Our AI models detect anomalies and send early warnings about pollution, algal blooms, or other threats, helping to protect the Mediterranean Sea.'
    }
  ];
  let currentSolutionIndex = 0;
  let solutionTransitioning = false;
  let solutionDirection = 'right';
  let showSolutionFullscreen = false;

  const venetoImages = [
    '/ven1.jpg','/ven2.jpg','/ven3.jpg','/ven4.jpg','/ven5.jpg','/ven6.jpg','/ven7.jpg',
    '/ven8.jpg','/ven9.jpg','/ven10.jpg','/ven11.jpg','/ven12.jpg','/ven13.jpg','/ven14.jpg'
  ];
  let venetoIndex = 0;
  let venetoAnimating = false;
  let showVenetoGalleryFullscreen = false;

  // ---------- HELPERS ----------
  function lockScroll(lock) {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = lock ? 'hidden' : '';
  }

  // Problems gallery controls
  function nextGalleryImage() {
    if (galleryAnimating || currentGalleryIndex === galleryImages.length - 1) return;
    galleryAnimating = true;
    currentGalleryIndex = Math.min(currentGalleryIndex + 1, galleryImages.length - 1);
    setTimeout(() => (galleryAnimating = false), 700);
  }
  function prevGalleryImage() {
    if (galleryAnimating || currentGalleryIndex === 0) return;
    galleryAnimating = true;
    currentGalleryIndex = Math.max(currentGalleryIndex - 1, 0);
    setTimeout(() => (galleryAnimating = false), 700);
  }

  // Solution controls
  function goToNextSolution() {
    if (solutionTransitioning || currentSolutionIndex === solutionImages.length - 1) return;
    solutionDirection = 'right';
    solutionTransitioning = true;
    setTimeout(() => {
      currentSolutionIndex = Math.min(currentSolutionIndex + 1, solutionImages.length - 1);
      solutionTransitioning = false;
    }, 500);
  }
  function goToPrevSolution() {
    if (solutionTransitioning || currentSolutionIndex === 0) return;
    solutionDirection = 'left';
    solutionTransitioning = true;
    setTimeout(() => {
      currentSolutionIndex = Math.max(currentSolutionIndex - 1, 0);
      solutionTransitioning = false;
    }, 500);
  }

  // Fullscreen toggles (Problems)
  let showGalleryFullscreen = false;
  let fullscreenImg = '';
  function openGalleryFullscreen(img) {
    fullscreenImg = img;
    showGalleryFullscreen = true;
    lockScroll(true);
  }
  function closeGalleryFullscreen() {
    showGalleryFullscreen = false;
    fullscreenImg = '';
    lockScroll(false);
  }

  // Fullscreen toggles (Solution)
  function openSolutionFullscreen() {
    showSolutionFullscreen = true;
    lockScroll(true);
  }
  function closeSolutionFullscreen() {
    showSolutionFullscreen = false;
    lockScroll(false);
  }

  // Veneto controls
  function nextVeneto() {
    if (venetoAnimating || venetoIndex === venetoImages.length - 1) return;
    venetoAnimating = true;
    venetoIndex = Math.min(venetoIndex + 1, venetoImages.length - 1);
    setTimeout(() => (venetoAnimating = false), 700);
  }
  function prevVeneto() {
    if (venetoAnimating || venetoIndex === 0) return;
    venetoAnimating = true;
    venetoIndex = Math.max(venetoIndex - 1, 0);
    setTimeout(() => (venetoAnimating = false), 700);
  }
  function openVenetoGalleryFullscreen() {
    showVenetoGalleryFullscreen = true;
    lockScroll(true);
  }
  function closeVenetoGalleryFullscreen() {
    showVenetoGalleryFullscreen = false;
    lockScroll(false);
  }
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title"       content="Thalasat Project - Stefanos Siathas" />
  <meta property="og:description" content="Thalasat: Youth-led initiative for marine monitoring and environmental protection. Discover our award-winning project!" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://stefanossiathas.com/projects/thalasat" />
  <meta property="og:image"       content="/namet.png" />
  <title>Thalasat</title>
</svelte:head>

<!-- BACKGROUND -->
<div id="animated-background" aria-hidden="true">
  <!-- place your animated canvas / shader here if you have one -->
</div>

<!-- TITLE -->
<div id="animation" class="container section" aria-label="Thalasat Title">
  <span class="letter left" style="--delay: 0s">T</span>
  <span class="letter left" style="--delay: 0.15s">h</span>
  <span class="letter left" style="--delay: 0.3s">a</span>
  <span class="letter left" style="--delay: 0.45s">l</span>
  <span class="letter left" style="--delay: 0.6s">a</span>
  <span class="letter right" style="--delay: 0.75s">s</span>
  <span class="letter right" style="--delay: 0.9s">a</span>
  <span class="letter right" style="--delay: 1.05s">t</span>
</div>

<!-- INTRO -->
<section class="section container">
  <div id="start">
    <p>
      Thalasat is a youth-led initiative born in Cyprus. I'm happy to be able to work with the team that I've met and take up the challenge of Venetostars.
      The name “Thalasat” comes from the Greek word “θάλασσα” (thalassa), meaning “sea”.
    </p>
  </div>

  <div class="fire-border" aria-hidden="true">
    <img src="/namet.png" alt="Thalasat project" class="bordered-img" />
  </div>
</section>

<!-- PROBLEM ARROW -->
<div class="arrow-animated-container container" aria-hidden="true">
  <div class="arrow-animated-with-text">
    <div class="arrow-animated">
      <div class="arrow-shaft"></div>
      <div class="arrow-head"></div>
    </div>
    <span class="arrow-animated-text">The Problem</span>
  </div>
</div>

<!-- PROBLEMS: TEXT + GALLERY -->
<section class="section container problems-grid">
  <div id="problems-left" class="animated-box">
    <h2 class="problem-title">The Problem</h2>
    <p class="problem-main">
      The problems we are trying to combat through our system can be broken down into three main categories: marine ecological crises,
      lack of public awareness, and limited access to useful marine-related data for smaller local communities and regions.
    </p>
    <h3 class="problem-section-title">Marine Ecological Crises</h3>
    <p class="problem-section">
      Starting off with marine ecological crises. These include issues like algal blooms, coral bleaching, declining fish populations,
      and increasing pollution levels, all of which pose serious threats to the health of the Mediterranean Sea. The Mediterranean Sea
      is under growing pressure from climate-related and human-driven changes. Rising temperatures aren’t just warming the water, they’re
      disrupting entire ecosystems, leading to oxygen-depleted zones that can no longer support marine life. At the same time, nutrient
      runoff from coastal development and agriculture fuel harmful algal blooms, which further destabilize the environment. These shifts
      have serious consequences as seen in recent years where nearly a quarter of assessed marine species in the region are already
      classified as threatened. It’s a complex, cascading crisis that demands proactive, data-informed solutions.
    </p>
  </div>

  <div class="problems-gallery">
    {#each galleryImages as img, i}
      <img
        src={img}
        alt={`Problem gallery image ${i+1}`}
        class="gallery-img-3d {i === currentGalleryIndex ? 'active' : ''}"
        on:click={() => openGalleryFullscreen(img)}
        tabindex="0"
        role="button"
        aria-label="Open image fullscreen"
      />
    {/each}
    <button class="gallery-arrow-btn left" on:click={prevGalleryImage} aria-label="Previous image" disabled={currentGalleryIndex === 0}>&larr;</button>
    <button class="gallery-arrow-btn right" on:click={nextGalleryImage} aria-label="Next image" disabled={currentGalleryIndex === galleryImages.length - 1}>&rarr;</button>
  </div>
</section>

{#if showGalleryFullscreen}
  <div class="fullscreen-overlay" on:click={closeGalleryFullscreen} tabindex="0" role="dialog" aria-label="Fullscreen image viewer">
    <img src={fullscreenImg} alt="Fullscreen slide" class="fullscreen-img" />
    <button class="close-fullscreen" on:click|stopPropagation={closeGalleryFullscreen} aria-label="Close fullscreen">&times;</button>
    <button class="fullscreen-arrow-btn left" on:click|stopPropagation={() => {
      if (currentGalleryIndex > 0) {
        currentGalleryIndex -= 1;
        fullscreenImg = galleryImages[currentGalleryIndex];
      }
    }} aria-label="Previous image" disabled={currentGalleryIndex === 0}>&larr;</button>
    <button class="fullscreen-arrow-btn right" on:click|stopPropagation={() => {
      if (currentGalleryIndex < galleryImages.length - 1) {
        currentGalleryIndex += 1;
        fullscreenImg = galleryImages[currentGalleryIndex];
      }
    }} aria-label="Next image" disabled={currentGalleryIndex === galleryImages.length - 1}>&rarr;</button>
  </div>
{/if}

<!-- SOLUTION ARROW -->
<div class="arrow-animated-container container" aria-hidden="true">
  <div class="arrow-animated-with-text">
    <div class="arrow-animated">
      <div class="arrow-shaft"></div>
      <div class="arrow-head"></div>
    </div>
    <span class="arrow-animated-text">Our Solution</span>
  </div>
</div>

<!-- SOLUTION: TEXT + IMAGE -->
<section class="section container solution-grid">
  <div class="solution-box solution-3d-anim {solutionTransitioning ? (solutionDirection === 'right' ? 'slide-out-left' : 'slide-out-right') : ''}">
    <h2>{solutionBoxes[currentSolutionIndex].title}</h2>
    <p>{solutionBoxes[currentSolutionIndex].p}</p>
  </div>

  <div class="solution-gallery solution-3d-anim {solutionTransitioning ? (solutionDirection === 'right' ? 'slide-out-left' : 'slide-out-right') : ''}">
    <img
      src={solutionImages[currentSolutionIndex]}
      alt={`Solution image ${currentSolutionIndex+1}`}
      class="solution-img"
      on:click={openSolutionFullscreen}
      tabindex="0"
      role="button"
      aria-label="Open solution image fullscreen"
    />
    <button class="solution-arrow-btn left" on:click={goToPrevSolution} aria-label="Previous solution" disabled={currentSolutionIndex === 0 || solutionTransitioning}>&larr;</button>
    <button class="solution-arrow-btn right" on:click={goToNextSolution} aria-label="Next solution" disabled={currentSolutionIndex === solutionImages.length - 1 || solutionTransitioning}>&rarr;</button>
  </div>
</section>

{#if showSolutionFullscreen}
  <div class="fullscreen-overlay" on:click={closeSolutionFullscreen} tabindex="0" role="dialog" aria-label="Fullscreen solution viewer">
    <div class="solution-fullscreen-content" on:click|stopPropagation>
      <div class="solution-fullscreen-box">
        <h2>{solutionBoxes[currentSolutionIndex].title}</h2>
        <p>{solutionBoxes[currentSolutionIndex].p}</p>
      </div>
      <img src={solutionImages[currentSolutionIndex]} alt="Fullscreen solution" class="fullscreen-img" />
      <button class="close-fullscreen" on:click={closeSolutionFullscreen} aria-label="Close fullscreen">&times;</button>
    </div>
  </div>
{/if}

<!-- VENETOSTARS TEXT -->
<section class="section container" id="venetostars">
  <h2>Triumph in Venice</h2>
  <p>
    At just 15 years old, I stepped onto the stage of the VeneToStars Space &amp; Blue Economy Challenge alongside my talented teammates from @thalasat_cy, and together we took home the top prize—an outcome that still feels utterly unexpected. From brainstorming satellite-based coastal monitoring solutions to late-night rehearsals, our team’s collaboration and creativity shone through at every turn. Beyond the thrill of competition, Venice itself stole my heart: freshly made cicchetti along the canals, creamy gelato beside St. Mark’s Basilica, and unforgettable seafood risottos that fueled each day’s adventures.
  </p>
  <p>
    To top it all off, we had the honor of meeting the President and the Minister of Innovation, who personally congratulated our team and posed for photos with us—moments I’ll never forget. Winning against so many brilliant entrants was an incredible rush—proof that passion and teamwork can defy all expectations. It was an amazing experience I’ll carry with me forever. Look at the pictures under.
  </p>
</section>

<!-- VENETOSTARS GALLERY -->
<section class="section container veneto-gallery-section">
  <h2 class="veneto-title">VenetoStars Gallery</h2>
  <div class="veneto-gallery-3d">
    {#each venetoImages as img, i}
      <img
        src={img}
        alt={`Veneto photo ${i+1}`}
        class="veneto-img-3d {i === venetoIndex ? 'active' : ''} {i < venetoIndex ? 'left' : ''} {i > venetoIndex ? 'right' : ''}"
        on:click={openVenetoGalleryFullscreen}
        tabindex="0"
        role="button"
        aria-label="Open Veneto photo fullscreen"
      />
    {/each}
    <button class="veneto-arrow-btn left" on:click={prevVeneto} aria-label="Previous photo" disabled={venetoIndex === 0}>&larr;</button>
    <button class="veneto-arrow-btn right" on:click={nextVeneto} aria-label="Next photo" disabled={venetoIndex === venetoImages.length - 1}>&rarr;</button>
    <div class="veneto-photo-count">Photo {venetoIndex+1} of {venetoImages.length}</div>
  </div>
</section>

{#if showVenetoGalleryFullscreen}
  <div class="fullscreen-overlay" on:click={closeVenetoGalleryFullscreen} tabindex="0" role="dialog" aria-label="Fullscreen Veneto gallery">
    <div class="veneto-fullscreen-content" on:click|stopPropagation>
      <img src={venetoImages[venetoIndex]} alt="Fullscreen Veneto photo" class="veneto-fullscreen-img" />
      <button class="close-fullscreen" on:click={closeVenetoGalleryFullscreen} aria-label="Close fullscreen">&times;</button>
      <button class="fullscreen-arrow-btn left" on:click|stopPropagation={() => { if (venetoIndex > 0) venetoIndex -= 1; }} aria-label="Previous photo" disabled={venetoIndex === 0}>&larr;</button>
      <button class="fullscreen-arrow-btn right" on:click|stopPropagation={() => { if (venetoIndex < venetoImages.length - 1) venetoIndex += 1; }} aria-label="Next photo" disabled={venetoIndex === venetoImages.length - 1}>&rarr;</button>
      <div class="veneto-photo-count fullscreen">Photo {venetoIndex+1} of {venetoImages.length}</div>
    </div>
  </div>
{/if}

<!-- LINKS -->
<section class="section container" id="thal">
  <p>
    Thalasat has its own website
    <a href="https://github.com/Stefanos-gif/Programming/tree/main" target="_blank" rel="noopener noreferrer">here</a>,
    and its Instagram is
    <a href="https://github.com/Stefanos-gif/Programming/tree/main" target="_blank" rel="noopener noreferrer">here</a>.
  </p>
</section>

<style>
  :root{
    --color-primary:#7b2ff2;
    --card-bg: rgba(97,20,128,0.7);
    --ring: #ff47f0;
    --shadow-neon: 0 0 32px #c77dff88, 0 0 64px #7b2ff288;
    overflow-x: hidden;
  }

  :global(body){
    margin:0;
    padding:0;
    font-family: system-ui, Inter, Segoe UI, Roboto, Arial, sans-serif;
    background:none;
    color:#fff;
  }

  /* layout helpers */
  .container{ width:min(100%, 1200px); margin-inline:auto; padding-inline:clamp(12px, 4vw, 32px); }
  .section{ padding-block: clamp(24px, 6vw, 80px); }

  /* background */
  #animated-background{ position:fixed; inset:0; width:100%; height:100%; z-index:-1; }

  /* title */
  #animation{ display:flex; justify-content:center; align-items:center; margin: clamp(8px, 2vw, 16px) auto; }
  .letter{
    display:inline-block; font-size: clamp(2.5rem, 12vw, 8rem); font-weight:800; color:var(--color-primary);
    opacity:0; animation-duration:.6s; animation-timing-function:ease-out; animation-fill-mode:forwards;
    transition: transform .4s ease, text-shadow .4s ease;
    animation-delay: var(--delay);
  }
  .letter.left{ animation-name: fly-in-left; }
  .letter.right{ animation-name: fly-in-right; }
  #animation:hover .letter{ transform: scale(1.1) rotate(6deg); text-shadow:0 0 8px #ff00ff, 0 0 16px var(--color-primary); }
  @keyframes fly-in-left{ from{transform:translateX(-250px);opacity:0} to{transform:translateX(0);opacity:1} }
  @keyframes fly-in-right{ from{transform:translateX(250px);opacity:0}  to{transform:translateX(0);opacity:1} }

  /* intro card */
  #start{
    margin: 0 auto;
    padding: clamp(12px, 3.5vw, 24px);
    width: 100%;
    max-width: 900px;
    border: 4px solid var(--color-primary);
    border-radius: 12px;
    background: var(--card-bg);
    text-align:center;
    transition: transform .3s ease;
  }
  #start:hover{ transform: translateY(-2px); }
  #start p{ font-size: clamp(1rem, 2.6vw, 1.25rem); background-color: var(--card-bg); padding:.5rem; border-radius:8px; margin:0; }

  /* fire border image */
  .fire-border{
    display:flex; justify-content:center; align-items:center;
    margin: clamp(16px, 4vw, 32px) auto 0;
    width:min(100%, 980px); aspect-ratio: 4 / 1; position:relative; border-radius:24px; z-index:1;
  }
  .fire-border .bordered-img{ width:100%; height:100%; object-fit:cover; border-radius:16px; position:relative; z-index:2; box-shadow: var(--shadow-neon); background:#222; }
  .fire-border::before{
    content:""; position:absolute; inset:-20px; border-radius:48px; z-index:0; pointer-events:none;
    background: conic-gradient(from 0deg, #ff47f0 0%, #c77dff 30%, #7b2ff2 60%, #ff47f0 100%);
    filter: blur(8px) brightness(1.3) saturate(1.5); opacity:.85;
    animation: fire-flicker 1.2s linear infinite; background-size:200% 200%;
  }
  @keyframes fire-flicker{
    0%{filter:blur(8px) brightness(1.3) saturate(1.5);opacity:.85}
    20%{filter:blur(10px) brightness(1.5) saturate(2);opacity:1}
    40%{filter:blur(7px) brightness(1.2) saturate(1.2);opacity:.8}
    60%{filter:blur(12px) brightness(1.6) saturate(2.2);opacity:1}
    80%{filter:blur(9px) brightness(1.4) saturate(1.7);opacity:.9}
    100%{filter:blur(8px) brightness(1.3) saturate(1.5);opacity:.85}
  }

  /* arrow label */
  .arrow-animated-container{ display:flex; justify-content:center; align-items:center; margin: clamp(24px, 7vw, 56px) auto 0; height: clamp(120px, 22vw, 220px); }
  .arrow-animated{ display:flex; flex-direction:column; align-items:center; animation:arrow-bounce 1.3s infinite cubic-bezier(.4,.2,.2,1); }
  .arrow-shaft{
    width: clamp(32px, 8vw, 72px); height: clamp(80px, 18vw, 208px);
    border-radius: clamp(16px, 4vw, 36px);
    background: linear-gradient(180deg, #c77dff 60%, #ff47f0 100%); box-shadow: 0 0 64px 16px #c77dff99; position:relative; z-index:2;
  }
  .arrow-head{
    width:0; height:0;
    border-left: clamp(40px, 10vw, 88px) solid transparent;
    border-right: clamp(40px, 10vw, 88px) solid transparent;
    border-top: clamp(64px, 14vw, 128px) solid #ff47f0;
    margin-top:-1rem; filter: drop-shadow(0 0 48px #c77dffcc); z-index:2;
  }
  .arrow-animated-with-text{ display:flex; align-items:flex-start; justify-content:center; gap: clamp(12px, 3vw, 28px); }
  .arrow-animated-text{ font-size: clamp(1.5rem, 6vw, 3.2rem); font-weight:800; color:#ff47f0; text-shadow:0 0 24px #c77dff, 0 0 8px #ffffff22; letter-spacing:2px; display:flex; align-items:center; height: clamp(48px, 12vw, 128px); }
  @keyframes arrow-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10%)} }

  /* problems grid */
  .problems-grid{
    display:grid; gap: clamp(16px, 4vw, 32px);
    grid-template-columns: 1fr;
  }
  @media (min-width: 980px){
    .problems-grid{ grid-template-columns: 1fr 1fr; align-items: start; }
  }

  #problems-left.animated-box{
    padding: clamp(16px, 3vw, 28px);
    border: 4px solid var(--color-primary);
    border-radius: 12px;
    background: var(--card-bg);
    text-align:left;
    box-shadow: 0 0 24px #7b2ff244;
    transition: transform .3s ease;
  }
  #problems-left.animated-box:hover{ transform: translateY(-2px); }
  .problem-title{ font-size: clamp(1.5rem, 5vw, 2.3rem); color:#ff47f0; margin: 0 0 .8rem; text-shadow:0 0 8px #c77dff88; font-weight:800; letter-spacing:1px; }
  .problem-main{ font-size: clamp(1rem, 2.6vw, 1.35rem); margin: 0 0 1rem; }
  .problem-section-title{ font-size: clamp(1.1rem, 3.2vw, 1.5rem); color:#c77dff; margin: 1rem 0 .5rem; font-weight:700; }
  .problem-section{ font-size: clamp(1rem, 2.6vw, 1.18rem); margin: 0 0 1rem; }
  #problems-left.animated-box p{ background-color: var(--card-bg); padding:.4rem .3rem; border-radius:8px; margin:0 0 .75rem; display:block; }

  .problems-gallery{
    position:relative; width:100%; aspect-ratio: 3 / 2;
    display:flex; align-items:center; justify-content:center; perspective:1600px;
  }
  .gallery-img-3d{
    position:absolute; inset:0; width:100%; height:100%; object-fit:contain; border-radius:24px;
    box-shadow: 0 0 64px #c77dff99, 0 0 16px #ffffff22; opacity:0; transform: scale(.95) rotateY(0deg);
    transition: opacity .3s, transform .7s cubic-bezier(.4,.2,.2,1);
    z-index:1; pointer-events:none; background:#222;
  }
  .gallery-img-3d.active{ opacity:1; transform: scale(1) rotateY(0deg); z-index:2; pointer-events:auto; }
  .gallery-img-3d:not(.active){ opacity:0; transform: scale(.9) rotateY(-80deg); }
  .gallery-arrow-btn{
    position:absolute; top:50%; transform: translateY(-50%);
    background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%); color:#fff; font-size: 1.8rem; font-weight:700;
    border:none; border-radius:50%; width:54px; height:54px; box-shadow: 0 0 16px #c77dff88; cursor:pointer;
    transition: transform .2s, box-shadow .2s, opacity .2s; z-index:5; display:flex; align-items:center; justify-content:center; opacity:.95;
  }
  .gallery-arrow-btn.left{ left: -8px; }
  .gallery-arrow-btn.right{ right: -8px; }
  .gallery-arrow-btn:disabled{ opacity:.4; cursor:not-allowed; box-shadow:none; }
  .gallery-arrow-btn:not(:disabled):hover{ transform: scale(1.1) translateY(-50%); box-shadow: 0 0 32px #ff47f0cc; }

  /* fullscreen overlay (shared) */
  .fullscreen-overlay{
    position: fixed; inset:0; width:100vw; height:100vh; background: rgba(30,0,50,.97); z-index:9999;
    display:flex; align-items:center; justify-content:center; animation: fade-in-overlay .25s;
  }
  @keyframes fade-in-overlay{ from{opacity:0} to{opacity:1} }
  .fullscreen-img{
    max-width: 92vw; max-height: 92vh; border-radius: 28px; box-shadow: 0 0 128px #c77dffcc, 0 0 32px #ff47f0cc;
    background:#222; object-fit: contain; border: 6px solid #c77dff; animation: pop-in-img .25s;
  }
  @keyframes pop-in-img{ from{ transform: scale(.92); opacity:0 } to{ transform: scale(1); opacity:1 } }
  .close-fullscreen{
    position:absolute; top: 24px; right: 28px; font-size: 2.25rem; color:#fff;
    background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%); border:none; border-radius:50%; width:56px; height:56px;
    box-shadow: 0 0 32px #c77dff88; cursor:pointer; z-index:10000; display:flex; align-items:center; justify-content:center; opacity:.95;
    transition: transform .2s;
  }
  .close-fullscreen:hover{ transform: scale(1.08); }
  .fullscreen-arrow-btn{
    position:absolute; top:50%; transform: translateY(-50%); background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%);
    color:#fff; font-size: 2.2rem; font-weight:700; border:none; border-radius:50%; width:64px; height:64px;
    box-shadow: 0 0 32px #c77dff88; cursor:pointer; transition: transform .2s, box-shadow .2s, opacity .2s; z-index:10001; display:flex; align-items:center; justify-content:center; opacity:.95;
  }
  .fullscreen-arrow-btn.left{ left: 16px; }
  .fullscreen-arrow-btn.right{ right: 16px; }
  .fullscreen-arrow-btn:disabled{ opacity:.4; cursor:not-allowed; box-shadow:none; }
  .fullscreen-arrow-btn:not(:disabled):hover{ transform: scale(1.1) translateY(-50%); box-shadow: 0 0 48px #ff47f0cc; }

  /* solution grid */
  .solution-grid{
    display:grid; gap: clamp(16px, 4vw, 32px);
    grid-template-columns: 1fr;
  }
  @media (min-width: 980px){
    .solution-grid{ grid-template-columns: 1.1fr 1fr; align-items: start; }
  }
  .solution-box{
    border: 4px solid var(--color-primary); border-radius: 16px; background: var(--card-bg);
    padding: clamp(16px, 3vw, 28px); box-shadow: 0 0 24px #7b2ff244;
  }
  .solution-box h2{ font-size: clamp(1.4rem, 4.6vw, 2.1rem); color:#ff47f0; margin:0 0 .6rem; text-shadow:0 0 12px #c77dff88; font-weight:800; }
  .solution-box p{ font-size: clamp(1rem, 2.8vw, 1.18rem); margin:0; }
  .solution-gallery{ position:relative; width:100%; aspect-ratio: 3 / 2; display:flex; align-items:center; justify-content:center; }
  .solution-img{
    width:100%; height:100%; object-fit: contain; border-radius: 20px; box-shadow: 0 0 64px #c77dff99, 0 0 12px #ffffff22; background:#222; border: 5px solid #c77dff;
    cursor:pointer; transition: transform .2s, box-shadow .2s;
  }
  .solution-img:hover{ transform: scale(1.02); box-shadow: 0 0 64px #ff47f0cc; }
  .solution-arrow-btn{
    position:absolute; top:50%; transform: translateY(-50%); background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%);
    color:#fff; font-size: 1.8rem; font-weight:700; border:none; border-radius:50%; width:54px; height:54px; box-shadow: 0 0 24px #c77dff88; cursor:pointer;
    transition: transform .2s, box-shadow .2s, opacity .2s; z-index:5; display:flex; align-items:center; justify-content:center; opacity:.95;
  }
  .solution-arrow-btn.left{ left: -8px; }
  .solution-arrow-btn.right{ right: -8px; }
  .solution-arrow-btn:disabled{ opacity:.4; cursor:not-allowed; box-shadow:none; }
  .solution-arrow-btn:not(:disabled):hover{ transform: scale(1.1) translateY(-50%); box-shadow: 0 0 32px #ff47f0cc; }

  .solution-3d-anim{ transition: transform .5s cubic-bezier(.4,.2,.2,1), opacity .5s cubic-bezier(.4,.2,.2,1); }
  .slide-out-left{ transform: perspective(800px) translateX(-120px) rotateY(-60deg) scale(.92); opacity:0; }
  .slide-out-right{ transform: perspective(800px) translateX(120px) rotateY(60deg) scale(.92); opacity:0; }
  .solution-3d-anim:not(.slide-out-left):not(.slide-out-right){ transform: perspective(800px) translateX(0) rotateY(0deg) scale(1); opacity:1; }

  /* veneto text card */
  #venetostars{
    border: 4px solid var(--color-primary); border-radius: 12px; background: var(--card-bg);
    padding: clamp(16px, 3vw, 24px); box-shadow: 0 0 24px #7b2ff244;
  }
  #venetostars h2{ font-size: clamp(1.6rem, 5.4vw, 2.4rem); color:#ff47f0; margin:0 0 .6rem; }
  #venetostars p{ font-size: clamp(1rem, 2.6vw, 1.125rem); margin:.5rem 0; }

  /* veneto gallery */
  .veneto-gallery-section{ display:flex; flex-direction:column; align-items:center; gap: clamp(12px, 3vw, 24px); }
  .veneto-title{ font-size: clamp(1.6rem, 5.4vw, 2.4rem); color:#ff47f0; margin:0 0 .5rem; text-shadow:0 0 24px #c77dff, 0 0 8px #ffffff22; font-weight:800; letter-spacing:2px; text-align:center; }
  .veneto-gallery-3d{
    position:relative; width:100%; max-width: 1100px; aspect-ratio: 16 / 10; perspective: 2000px; display:flex; align-items:center; justify-content:center; border-radius:24px;
  }
  .veneto-img-3d{
    position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border-radius:24px;
    box-shadow: 0 0 80px #c77dffcc, 0 0 32px #ff47f0cc; border: 6px solid transparent; opacity:0; transform: scale(.92) rotateY(0deg);
    transition: opacity .3s, transform .7s cubic-bezier(.4,.2,.2,1), border .5s; z-index:1; pointer-events:none; background:#1a0033;
  }
  .veneto-img-3d.active{
    opacity:1; transform: scale(1) rotateY(0deg); z-index:2; pointer-events:auto;
    border-image: linear-gradient(135deg, #ff47f0 10%, #c77dff 50%, #7b2ff2 90%) 1; animation: veneto-border-glow 1.2s infinite alternate;
  }
  .veneto-img-3d.left{ opacity:.3; transform: scale(.88) rotateY(-60deg) translateX(-4%); }
  .veneto-img-3d.right{ opacity:.3; transform: scale(.88) rotateY(60deg) translateX(4%); }
  @keyframes veneto-border-glow{
    0% { box-shadow: 0 0 80px #c77dffcc, 0 0 32px #ff47f0cc; border-color:#ff47f0; }
    100%{ box-shadow: 0 0 120px #ff47f0cc, 0 0 64px #c77dffcc; border-color:#c77dff; }
  }
  .veneto-arrow-btn{
    position:absolute; top:50%; transform: translateY(-50%);
    background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%); color:#fff; font-size: 1.8rem; font-weight:700; border:none; border-radius:50%;
    width:56px; height:56px; box-shadow: 0 0 32px #c77dff88; cursor:pointer; transition: transform .2s, box-shadow .2s, opacity .2s; z-index:5; display:flex; align-items:center; justify-content:center; opacity:.95;
  }
  .veneto-arrow-btn.left{ left: -10px; }
  .veneto-arrow-btn.right{ right: -10px; }
  .veneto-arrow-btn:disabled{ opacity:.4; cursor:not-allowed; box-shadow:none; }
  .veneto-arrow-btn:not(:disabled):hover{ transform: scale(1.1) translateY(-50%); box-shadow: 0 0 64px #ff47f0cc; }
  .veneto-photo-count{
    position:absolute; bottom: -36px; left:50%; transform: translateX(-50%);
    font-size: clamp(1rem, 3.6vw, 1.25rem); color:#fff; background: rgba(97,20,128,.8); border-radius: 12px; padding: .4rem 1rem; box-shadow: 0 0 16px #c77dff88; border: 2px solid #ff47f0; z-index:6; font-weight:700; letter-spacing:1px;
  }
  .veneto-photo-count.fullscreen{
    position:absolute; bottom: 24px; left:50%; transform: translateX(-50%); font-size: clamp(1rem, 3.6vw, 1.3rem);
    background: rgba(97,20,128,.95); border-radius: 14px; padding: .5rem 1.2rem; border: 3px solid #ff47f0; box-shadow: 0 0 32px #c77dffcc;
  }
  .veneto-fullscreen-content{ display:flex; flex-direction:column; align-items:center; justify-content:center; width:100vw; height:100vh; position:relative; }
  .veneto-fullscreen-img{ max-width: 92vw; max-height: 82vh; border-radius: 24px; box-shadow: 0 0 128px #c77dffcc, 0 0 32px #ff47f0cc; background:#222; object-fit:contain; border: 6px solid #ff47f0; animation: pop-in-img .25s; margin-bottom: 1.25rem; }

  /* links card */
  #thal{
    border: 4px solid var(--color-primary); border-radius: 12px; background: var(--card-bg);
    padding: clamp(14px, 3vw, 22px); box-shadow: 0 0 24px #7b2ff244; text-align:center;
  }
  #thal a{ color: #2eff23; text-decoration: underline; }

</style>
