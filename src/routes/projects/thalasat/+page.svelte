<script>
  // Pure CSS animation; no JS required
  let galleryImages = [
    '/1stpage.png',
    '/2nd.png',
    '/3rd.png',
    '/4th.png'
  ];
  let currentGalleryIndex = 0;
  let animating = false;

  function nextGalleryImage() {
    if (animating || currentGalleryIndex === galleryImages.length - 1) return;
    animating = true;
    currentGalleryIndex = Math.min(currentGalleryIndex + 1, galleryImages.length - 1);
    setTimeout(() => {
      animating = false;
    }, 700);
  }
  function prevGalleryImage() {
    if (animating || currentGalleryIndex === 0) return;
    animating = true;
    currentGalleryIndex = Math.max(currentGalleryIndex - 1, 0);
    setTimeout(() => {
      animating = false;
    }, 700);
  }

  let showFullscreen = false;
  let fullscreenImg = '';
  function openFullscreen(img) {
    fullscreenImg = img;
    showFullscreen = true;
    document.body.style.overflow = 'hidden';
  }
  function closeFullscreen() {
    showFullscreen = false;
    fullscreenImg = '';
    document.body.style.overflow = '';
  }

  let solutionImages = [
    '/l1.png',
    '/l2.png',
    '/l3.png',
    '/L4.png'
  ];
  let solutionBoxes = [
    { title: 'Smart Data Collection', p: 'Our system uses IoT sensors and satellite data to monitor marine conditions in real time, providing actionable insights for local communities.' },
    { title: 'Community Engagement', p: 'We empower citizens and schools to participate in data collection and environmental stewardship through interactive apps and educational programs.' },
    { title: 'Open Access Platform', p: 'All collected data is visualized and made freely available through an intuitive web platform, supporting research and local decision-making.' },
    { title: 'AI-Driven Alerts', p: 'Our AI models detect anomalies and send early warnings about pollution, algal blooms, or other threats, helping to protect the Mediterranean Sea.' }
  ];
  let currentSolutionIndex = 0;
  let showSolutionFullscreen = false;
  function openSolutionFullscreen() {
    showSolutionFullscreen = true;
    document.body.style.overflow = 'hidden';
  }
  function closeSolutionFullscreen() {
    showSolutionFullscreen = false;
    document.body.style.overflow = '';
  }

  let venetoImages = [
    '/ven1.jpg', '/ven2.jpg', '/ven3.jpg', '/ven4.jpg', '/ven5.jpg', '/ven6.jpg', '/ven7.jpg', '/ven8.jpg', '/ven9.jpg', '/ven10.jpg', '/ven11.jpg', '/ven12.jpg', '/ven13.jpg', '/ven14.jpg'
  ];
  let currentVenetoIndex = 0;
  let showVenetoFullscreen = false;
  function nextVenetoImage() {
    currentVenetoIndex = Math.min(currentVenetoIndex + 1, venetoImages.length - 1);
  }
  function prevVenetoImage() {
    currentVenetoIndex = Math.max(currentVenetoIndex - 1, 0);
  }
  function openVenetoFullscreen() {
    showVenetoFullscreen = true;
    document.body.style.overflow = 'hidden';
  }
  function closeVenetoFullscreen() {
    showVenetoFullscreen = false;
    document.body.style.overflow = '';
  }

  // Veneto 3D Animated Gallery logic
  let venetoIndex = 0;
  let venetoAnimating = false;
  let showVenetoGalleryFullscreen = false;
  function nextVeneto() {
    if (venetoAnimating || venetoIndex === venetoImages.length - 1) return;
    venetoAnimating = true;
    venetoIndex = Math.min(venetoIndex + 1, venetoImages.length - 1);
    setTimeout(() => { venetoAnimating = false; }, 700);
  }
  function prevVeneto() {
    if (venetoAnimating || venetoIndex === 0) return;
    venetoAnimating = true;
    venetoIndex = Math.max(venetoIndex - 1, 0);
    setTimeout(() => { venetoAnimating = false; }, 700);
  }
  function openVenetoGalleryFullscreen() {
    showVenetoGalleryFullscreen = true;
    document.body.style.overflow = 'hidden';
  }
  function closeVenetoGalleryFullscreen() {
    showVenetoGalleryFullscreen = false;
    document.body.style.overflow = '';
  }
</script>

<!-- Keep animated background at top level -->
<div id="animated-background">
  <!-- your existing animated canvas here -->
</div>

<!-- Animated title replaces static heading -->
<div id="animation">
  <span class="letter left" style="--delay: 0s">T</span>
  <span class="letter left" style="--delay: 0.15s">h</span>
  <span class="letter left" style="--delay: 0.3s">a</span>
  <span class="letter left" style="--delay: 0.45s">l</span>
  <span class="letter left" style="--delay: 0.6s">a</span>
  <span class="letter right" style="--delay: 0.75s">s</span>
  <span class="letter right" style="--delay: 0.9s">a</span>
  <span class="letter right" style="--delay: 1.05s">t</span>
</div>

<div id="start">
  <p>Thalasat is a youth-led initiative born in cyprus,the name, Thalasat comes from the greek word "θαλασσα" (thalassa), meaning "sea".</p>
  
</div>
<!-- Purple fire animated border image under #start -->
<div class="fire-border">
  <img src="/namet.png" alt="Thalasat project" class="bordered-img" />
</div>

<div id="problems-left" class="animated-box">
  <h2 class="problem-title">The Problem</h2>
  <p class="problem-main">The problems we are trying to combat through our system can be broken down into three main categories: marine ecological crises, lack of public awareness, and limited access to useful marine-related data for smaller local communities and regions.</p>
  <h3 class="problem-section-title">Marine Ecological Crises</h3>
  <p class="problem-section">Starting off with marine ecological crises. These include issues like algal blooms, coral bleaching, declining fish populations, and increasing pollution levels, all of which pose serious threats to the health of the Mediterranean Sea. The Mediterranean Sea is under growing pressure from climate-related and human-driven changes. Rising temperatures aren’t just warming the water, they’re disrupting entire ecosystems, leading to oxygen-depleted zones that can no longer support marine life. At the same time, nutrient runoff from coastal development and agriculture, fuel harmful algal blooms, which further destabilize the environment. These shifts have serious consequences as seen in recent years where nearly a quarter of assessed marine species in the region are already classified as threatened. It’s a complex, cascading crisis that demands proactive, data-informed solutions.</p>
</div>

<div class="arrow-animated-container">
  <div class="arrow-animated-with-text">
    <div class="arrow-animated">
      <div class="arrow-shaft"></div>
      <div class="arrow-head"></div>
    </div>
    <span class="arrow-animated-text">The Problem</span>
  </div>
</div>

<div class="problems-gallery-container">
  <div class="problems-gallery-3d">
    {#each galleryImages as img, i}
      <img
        src={img}
        alt={`Gallery image ${i+1}`}
        class="gallery-img-3d {i === currentGalleryIndex ? 'active' : ''}"
        style="z-index: {i === currentGalleryIndex ? 2 : 1};"
        on:click={() => openFullscreen(img)}
        tabindex="0"
        role="button"
        aria-label="Open image fullscreen"
      />
    {/each}
    <button class="gallery-arrow-btn left" on:click={prevGalleryImage} aria-label="Previous image" disabled={currentGalleryIndex === 0}>&larr;</button>
    <button class="gallery-arrow-btn right" on:click={nextGalleryImage} aria-label="Next image" disabled={currentGalleryIndex === galleryImages.length - 1}>&rarr;</button>
  </div>
</div>
{#if showFullscreen}
  <div class="fullscreen-overlay" on:click={closeFullscreen} tabindex="0">
    <img src={fullscreenImg} alt="Fullscreen slide" class="fullscreen-img" />
    <button class="close-fullscreen" on:click|stopPropagation={closeFullscreen} aria-label="Close fullscreen">&times;</button>
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

<div class="arrow-animated-container solution-arrow">
  <div class="arrow-animated-with-text">
    <div class="arrow-animated">
      <div class="arrow-shaft"></div>
      <div class="arrow-head"></div>
    </div>
    <span class="arrow-animated-text">Our Solution</span>
  </div>
</div>

<!-- Solution section moved directly under the solution arrow -->
<div class="solution-section">
  <div class="solution-box">
    <h2>{solutionBoxes[currentSolutionIndex].title}</h2>
    <p>{solutionBoxes[currentSolutionIndex].p}</p>
  </div>
  <div class="solution-gallery">
    <img
      src={solutionImages[currentSolutionIndex]}
      alt={`Solution image ${currentSolutionIndex+1}`}
      class="solution-img"
      on:click={openSolutionFullscreen}
      tabindex="0"
      role="button"
      aria-label="Open solution image fullscreen"
    />
    <button class="solution-arrow-btn left" on:click={() => currentSolutionIndex = Math.max(currentSolutionIndex - 1, 0)} aria-label="Previous solution" disabled={currentSolutionIndex === 0}>&larr;</button>
    <button class="solution-arrow-btn right" on:click={() => currentSolutionIndex = Math.min(currentSolutionIndex + 1, solutionImages.length - 1)} aria-label="Next solution" disabled={currentSolutionIndex === solutionImages.length - 1}>&rarr;</button>
  </div>
</div>
{#if showSolutionFullscreen}
  <div class="fullscreen-overlay" on:click={closeSolutionFullscreen} tabindex="0">
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
<div id="venetostars">
    <h2>Triumph in Venice</h2>

<p>At just 15 years old, I stepped onto the stage of the VeneToStars Space & Blue Economy Challenge alongside my talented teammates from @thalasat_cy, and together we took home the top prize—an outcome that still feels utterly unexpected. From brainstorming satellite-based coastal monitoring solutions to late-night rehearsals, our team’s collaboration and creativity shone through at every turn. Beyond the thrill of competition, Venice itself stole my heart: freshly made cicchetti along the canals, creamy gelato beside St. Mark’s Basilica, and unforgettable seafood risottos that fueled each day’s adventures.

To top it all off, we had the honor of meeting the President and the Minister of Innovation, who personally congratulated our team and posed for photos with us—moments I’ll never forget. Winning against so many brilliant entrants was an incredible rush—proof that passion and teamwork can defy all expectations. It was an amazing experience I’ll carry with me forever. Look at the pictures under</p>
</div>

<div class="veneto-gallery-section">
  <h2 class="veneto-title">VenetoStars Gallery</h2>
  <div class="veneto-gallery-3d">
    {#each venetoImages as img, i}
      <img
        src={img}
        alt={`Veneto photo ${i+1}`}
        class="veneto-img-3d {i === venetoIndex ? 'active' : ''} {i < venetoIndex ? 'left' : ''} {i > venetoIndex ? 'right' : ''}"
        style="z-index: {i === venetoIndex ? 2 : 1};"
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
</div>
{#if showVenetoGalleryFullscreen}
  <div class="fullscreen-overlay" on:click={closeVenetoGalleryFullscreen} tabindex="0">
    <div class="veneto-fullscreen-content" on:click|stopPropagation>
      <img src={venetoImages[venetoIndex]} alt="Fullscreen Veneto photo" class="veneto-fullscreen-img" />
      <button class="close-fullscreen" on:click={closeVenetoGalleryFullscreen} aria-label="Close fullscreen">&times;</button>
      <button class="fullscreen-arrow-btn left" on:click|stopPropagation={() => { if (venetoIndex > 0) { venetoIndex -= 1; }}} aria-label="Previous photo" disabled={venetoIndex === 0}>&larr;</button>
      <button class="fullscreen-arrow-btn right" on:click|stopPropagation={() => { if (venetoIndex < venetoImages.length - 1) { venetoIndex += 1; }}} aria-label="Next photo" disabled={venetoIndex === venetoImages.length - 1}>&rarr;</button>
      <div class="veneto-photo-count fullscreen">Photo {venetoIndex+1} of {venetoImages.length}</div>
    </div>
  </div>
{/if}

<style>
    :root {
      overflow-x: hidden;
    }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: none; /* let animated background shine */
    color: #fff;
  }

  /* Animated background sits behind everything */
  #animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  /* Animated title styling */
  #animation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto 0.5rem;
    cursor: pointer;
  }
  .letter {
    display: inline-block;
    font-size: 8rem;
    font-weight: bold;
    color: var(--color-primary);
    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-delay: var(--delay);
    transition: transform 0.4s ease, text-shadow 0.4s ease;
  }
  .letter.left { animation-name: fly-in-left; }
  .letter.right { animation-name: fly-in-right; }

  /* Unique hover effect on the entire title */
  #animation:hover .letter {
    transform: scale(1.2) rotate(10deg);
    text-shadow: 0 0 8px #ff00ff, 0 0 16px var(--color-primary);
  }

  @keyframes fly-in-left {
    from { transform: translateX(-250px); opacity: 0; }
    to   { transform: translateX(0);      opacity: 1; }
  }
  @keyframes fly-in-right {
    from { transform: translateX(250px); opacity: 0; }
    to   { transform: translateX(0);     opacity: 1; }
  }

  /* Description box styling */
  #start {
    /* vertical margin stays 0.1rem, horizontal margins auto-center */
    margin: 0.1rem auto;
    padding: 1rem;
    width: 40vw;
    max-width: 1000px;
    border: 4px solid var(--color-primary);
    border-radius: 8px;
    background: rgba(97,20,128,0.7);
    text-align: center;
    transition:ease-in-out 0.3s;
    }
    
    #start:hover {
        transform: scale(1.05);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
    } 
    #venetostars {
    position:absolute;
    /* vertical margin stays 0.1rem, horizontal margins auto-center */
    left:33rem;
    top: 200rem;
    margin: 0.1rem auto;
    padding: 1rem;
    width: 40vw;
    max-width: 1000px;
    border: 4px solid var(--color-primary);
    border-radius: 8px;
    background: rgba(97,20,128,0.7);
    text-align: center;
    transition:ease-in-out 0.3s;
    
    }
    
    #venetostars:hover {
        transform: scale(1.05);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
    }     

  #start p {
    font-size: 1.25rem;
    display: inline-block;
    background-color: rgba(97,20,128,0.7);
    padding: 0.5rem;
    border-radius: 8px;
    color: #fff;
    margin: 0;
  }

  /* Purple fire animated border effect */
  .fire-border {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 0 auto;
    width: 800px;
    height: 200px;
    position: relative;
    border-radius: 24px;
    z-index: 1;
  }
  .fire-border .bordered-img {
    width: 780px;
    height: 180px;
    object-fit: cover;
    border-radius: 16px;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 32px #c77dff88, 0 0 64px #7b2ff288;
    background: #222;
  }
  .fire-border::before {
    content: '';
    position: absolute;
    top: -20px; left: -20px; right: -20px; bottom: -20px;
    border-radius: 48px;
    z-index: 0;
    pointer-events: none;
    background: conic-gradient(from 0deg, #ff47f0 0%, #c77dff 30%, #7b2ff2 60%, #ff47f0 100%);
    filter: blur(8px) brightness(1.3) saturate(1.5);
    opacity: 0.85;
    animation: fire-flicker 1.2s linear infinite;
    background-size: 200% 200%;
  }
  @keyframes fire-flicker {
    0% { filter: blur(8px) brightness(1.3) saturate(1.5); opacity: 0.85; }
    20% { filter: blur(10px) brightness(1.5) saturate(2); opacity: 1; }
    40% { filter: blur(7px) brightness(1.2) saturate(1.2); opacity: 0.8; }
    60% { filter: blur(12px) brightness(1.6) saturate(2.2); opacity: 1; }
    80% { filter: blur(9px) brightness(1.4) saturate(1.7); opacity: 0.9; }
    100% { filter: blur(8px) brightness(1.3) saturate(1.5); opacity: 0.85; }
  }

  /* New animated box for problems on the left */
  #problems-left.animated-box {
    position: absolute;
    top: 120vh;
    left: 2vw;
    right: unset;
    margin: 40px 0 0 0;
    width: 38vw;
    min-width: 340px;
    max-width: 600px;
    padding: 2rem 2.2rem;
    border: 4px solid var(--color-primary);
    border-radius: 12px;
    background: rgba(97,20,128,0.7);
    text-align: left;
    transition: ease-in-out 0.3s;
    z-index: 10;
    box-shadow: 0 0 24px #7b2ff244;
  }
  #problems-left.animated-box:hover {
    transform: scale(1.05);
    text-decoration: underline solid #ff00ff;
    text-shadow: 4px 4px 2px var(--color-primary);
  }
  .problem-title {
    font-size: 2.3rem;
    color: #ff47f0;
    margin-bottom: 1.2rem;
    text-shadow: 0 0 8px #c77dff88;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .problem-main {
    font-size: 1.35rem;
    margin-bottom: 1.5rem;
    color: #fff;
    font-weight: 500;
  }
  .problem-section-title {
    font-size: 1.5rem;
    color: #c77dff;
    margin-bottom: 0.7rem;
    margin-top: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.5px;
  }
  .problem-section {
    font-size: 1.18rem;
    color: #fff;
    margin-bottom: 1.2rem;
    font-weight: 400;
  }
  #problems-left.animated-box p {
    font-size: 1.18rem;
    background-color: rgba(97,20,128,0.7);
    padding: 0.5rem 0.2rem;
    border-radius: 8px;
    color: #fff;
    margin: 0 0 1rem 0;
    display: block;
  }

  @keyframes box-fade-in {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .arrow-animated-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3.5rem auto 0 auto;
    width: 0;
    min-width: 0;
    height: 220px;
    position: relative;
    left: 0rem;
    transform: translateX(-50%);
    z-index: 5;
    padding-top: 60px;
  }
  .arrow-animated {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: arrow-bounce-updown 1.3s infinite cubic-bezier(0.4,0.2,0.2,1);
  }
  .arrow-shaft {
    width: 4.5rem;
    height: 13rem;
    border-radius: 2.2rem;
    background: linear-gradient(180deg, #c77dff 60%, #ff47f0 100%);
    box-shadow: 0 0 64px 16px #c77dff99;
    position: relative;
    z-index: 2;
  }
  .arrow-head {
    width: 0;
    height: 0;
    border-left: 5.5rem solid transparent;
    border-right: 5.5rem solid transparent;
    border-top: 8rem solid #ff47f0;
    margin-top: -1.2rem;
    filter: drop-shadow(0 0 48px #c77dffcc);
    z-index: 2;
  }
  .arrow-animated-with-text {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 2.5rem;
    /* Ensures both arrow and text are horizontally centered as a group */
    
  }
  .arrow-animated-text {
    font-size: 3.2rem;
    font-weight: bold;
    color: #ff47f0;
    text-shadow: 0 0 24px #c77dff, 0 0 8px #fff2;
    letter-spacing: 2px;
    user-select: none;
    animation: arrow-bounce-updown 1.3s infinite cubic-bezier(0.4,0.2,0.2,1);
    display: flex;
    align-items: center;
    height: 8rem;

  }
  @keyframes arrow-bounce-updown {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(80px); }
  }

  .problems-gallery-container {
    position: absolute;
    top: 132vh;
    left: calc(2vw + 40vw + 40px); /* Move for symmetry */
    width: 1000px; /* Half previous width */
    height: 700px; /* Half previous height */
    display: flex;
    align-items: flex-start;
    z-index: 12;
  }
  .problems-gallery-3d {
    position: relative;
    width: 960px; /* Half previous width */
    height: 640px; /* Half previous height */
    perspective: 1600px; /* Adjusted for new size */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gallery-img-3d {
    position: absolute;
    top: 0; left: 0;
    width: 960px;
    height: 640px;
    object-fit: contain;
    border-radius: 24px;
    box-shadow: 0 0 64px #c77dff99, 0 0 16px #fff2;
    opacity: 0;
    transform: scale(0.95) rotateY(0deg);
    transition: opacity 0.3s, transform 0.7s cubic-bezier(0.4,0.2,0.2,1);
    z-index: 1;
    pointer-events: none;
  }
  .gallery-img-3d.active {
    opacity: 1;
    transform: scale(1) rotateY(0deg);
    z-index: 2;
    pointer-events: auto;
  }
  .gallery-img-3d:not(.active) {
    opacity: 0;
    transform: scale(0.9) rotateY(-80deg);
    z-index: 1;
  }
  .gallery-arrow-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%);
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 16px #c77dff88;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.95;
  }
  .gallery-arrow-btn.left {
    left: -40px;
  }
  .gallery-arrow-btn.right {
    right: -40px;
  }
  .gallery-arrow-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }
  .gallery-arrow-btn:not(:disabled):hover {
    transform: scale(1.15) translateY(-50%);
    box-shadow: 0 0 32px #ff47f0cc;
  }

  /* Fullscreen overlay styles */
.fullscreen-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 0, 50, 0.97);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade-in-overlay 0.3s;
}
@keyframes fade-in-overlay {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fullscreen-img {
  max-width: 92vw;
  max-height: 92vh;
  border-radius: 32px;
  box-shadow: 0 0 128px #c77dffcc, 0 0 32px #ff47f0cc;
  background: #222;
  object-fit: contain;
  border: 6px solid #c77dff;
  animation: pop-in-img 0.3s;
}
@keyframes pop-in-img {
  from { transform: scale(0.92); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.close-fullscreen {
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 3.5rem;
  color: #fff;
  background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%);
  border: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  box-shadow: 0 0 32px #c77dff88;
  cursor: pointer;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
  transition: background 0.2s, transform 0.2s;
}
.close-fullscreen:hover {
  background: linear-gradient(90deg, #ff47f0 40%, #c77dff 100%);
  transform: scale(1.15);
}

.fullscreen-arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%);
  color: #fff;
  font-size: 2.8rem;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  box-shadow: 0 0 32px #c77dff88;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
}
.fullscreen-arrow-btn.left {
  left: 32px;
}
.fullscreen-arrow-btn.right {
  right: 32px;
}
.fullscreen-arrow-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}
.fullscreen-arrow-btn:not(:disabled):hover {
  transform: scale(1.15) translateY(-50%);
  box-shadow: 0 0 48px #ff47f0cc;
}

.solution-arrow {
  margin-top: 60px;
  margin-bottom: 0;
  position: absolute;
  top: calc(132vh + 720px); /* below gallery and box */
  left: 63rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  pointer-events: none;
}
.solution-arrow .arrow-animated-with-text,
.solution-arrow .arrow-animated-text {
  pointer-events: auto;
}

.solution-section {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  margin-top: 120px;
  position: relative;
  z-index: 30;
  top: 90rem;
  right:22.9rem
}
.solution-box {
  width: calc(38vw * 1.35);
  min-width: calc(340px * 1.35);
  max-width: calc(600px * 1.35);
  margin-left: calc(2vw * 1.35);
  margin-right: calc(3vw * 1.35);
  padding: calc(2rem * 1.35) calc(2.2rem * 1.35);
  border: 4px solid var(--color-primary);
  border-radius: 22px;
  background: rgba(97,20,128,0.7);
  text-align: left;
  box-shadow: 0 0 32px #7b2ff244;
  animation: box-fade-in 0.7s;
}
.solution-box h2 {
  font-size: calc(2.1rem * 1.35);
  color: #ff47f0;
  margin-bottom: calc(1.1rem * 1.35);
  text-shadow: 0 0 12px #c77dff88;
  font-weight: bold;
}
.solution-box p {
  font-size: calc(1.18rem * 1.35);
  color: #fff;
  margin-bottom: 0;
}
.solution-gallery {
  position: relative;
  width: calc(600px * 1.35);
  height: calc(400px * 1.35);
  display: flex;
  align-items: center;
  justify-content: center;
}
.solution-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 28px;
  box-shadow: 0 0 64px #c77dff99, 0 0 12px #fff2;
  background: #222;
  border: 5px solid #c77dff;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.solution-img:hover {
  transform: scale(1.04);
  box-shadow: 0 0 64px #ff47f0cc;
}
.solution-arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%);
  color: #fff;
  font-size: calc(2.2rem * 1.35);
  font-weight: bold;
  border: none;
  border-radius: 50%;
  width: calc(56px * 1.35);
  height: calc(56px * 1.35);
  box-shadow: 0 0 24px #c77dff88;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
}
.solution-arrow-btn.left {
  left: calc(-64px * 1.35);
}
.solution-arrow-btn.right {
  right: calc(-64px * 1.35);
}
.solution-arrow-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}
.solution-arrow-btn:not(:disabled):hover {
  transform: scale(1.15) translateY(-50%);
  box-shadow: 0 0 32px #ff47f0cc;
}
.solution-fullscreen-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  width: 100vw;
  height: 100vh;
}
.solution-fullscreen-box {
  width: calc(32vw * 1.35);
  min-width: calc(320px * 1.35);
  max-width: calc(520px * 1.35);
  padding: calc(2rem * 1.35) calc(2.2rem * 1.35);
  border: 5px solid var(--color-primary);
  border-radius: 22px;
  background: rgba(97,20,128,0.9);
  text-align: left;
  box-shadow: 0 0 32px #7b2ff244;
  animation: box-fade-in 0.7s;
}
.solution-fullscreen-box h2 {
  font-size: calc(2.1rem * 1.35);
  color: #ff47f0;
  margin-bottom: calc(1.1rem * 1.35);
  text-shadow: 0 0 12px #c77dff88;
  font-weight: bold;
}
.solution-fullscreen-box p {
  font-size: calc(1.18rem * 1.35);
  color: #fff;
  margin-bottom: 0;
}

.veneto-gallery-section {
  
  position: absolute;
  margin: 0 auto;
  margin-top: 220rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 50;
  top: 2rem;
  left: 0rem;
  right:1.3rem;

}
.veneto-title {
  font-size: 3.2rem;
  color: #ff47f0;
  margin-bottom: 2.5rem;
  text-shadow: 0 0 24px #c77dff, 0 0 8px #fff2;
  font-weight: bold;
  letter-spacing: 2px;
}
.veneto-gallery-3d {
  position: relative;
  width: 1100px;
  height: 700px;
  perspective: 2000px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
}
.veneto-img-3d {
  position: absolute;
  top: 0; left: 0;
  width: 1100px;
  height: 700px;
  object-fit: cover;
  border-radius: 40px;
  box-shadow: 0 0 80px #c77dffcc, 0 0 32px #ff47f0cc;
  border: 8px solid transparent;
  opacity: 0;
  transform: scale(0.92) rotateY(0deg);
  transition: opacity 0.3s, transform 0.7s cubic-bezier(0.4,0.2,0.2,1), border 0.5s;
  z-index: 1;
  pointer-events: none;
  background: #1a0033;
}
.veneto-img-3d.active {
  opacity: 1;
  transform: scale(1) rotateY(0deg);
  z-index: 2;
  pointer-events: auto;
  border-image: linear-gradient(135deg, #ff47f0 10%, #c77dff 50%, #7b2ff2 90%) 1;
  animation: veneto-border-glow 1.2s infinite alternate;
}
.veneto-img-3d.left {
  opacity: 0.3;
  transform: scale(0.85) rotateY(-60deg) translateX(-120px);
  z-index: 1;
}
.veneto-img-3d.right {
  opacity: 0.3;
  transform: scale(0.85) rotateY(60deg) translateX(120px);
  z-index: 1;
}
@keyframes veneto-border-glow {
  0% { box-shadow: 0 0 80px #c77dffcc, 0 0 32px #ff47f0cc; border-color: #ff47f0; }
  100% { box-shadow: 0 0 120px #ff47f0cc, 0 0 64px #c77dffcc; border-color: #c77dff; }
}
.veneto-arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%);
  color: #fff;
  font-size: 2.8rem;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  box-shadow: 0 0 32px #c77dff88;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
}
.veneto-arrow-btn.left { left: -90px; }
.veneto-arrow-btn.right { right: -90px; }
.veneto-arrow-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}
.veneto-arrow-btn:not(:disabled):hover {
  transform: scale(1.15) translateY(-50%);
  box-shadow: 0 0 64px #ff47f0cc;
}
.veneto-photo-count {
  position: absolute;
  bottom: -48px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.6rem;
  color: #fff;
  background: rgba(97,20,128,0.8);
  border-radius: 16px;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 0 16px #c77dff88;
  border: 2px solid #ff47f0;
  z-index: 20;
  user-select: none;
  font-weight: bold;
  letter-spacing: 1px;
}
.veneto-photo-count.fullscreen {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.1rem;
  background: rgba(97,20,128,0.95);
  border-radius: 20px;
  padding: 0.7rem 2.2rem;
  border: 3px solid #ff47f0;
  box-shadow: 0 0 32px #c77dffcc;
}
.veneto-fullscreen-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
}
.veneto-fullscreen-img {
  max-width: 92vw;
  max-height: 82vh;
  border-radius: 40px;
  box-shadow: 0 0 128px #c77dffcc, 0 0 32px #ff47f0cc;
  background: #222;
  object-fit: contain;
  border: 8px solid #ff47f0;
  animation: pop-in-img 0.3s;
  margin-bottom: 2.5rem;
}
</style>
