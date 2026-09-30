<script>
  import { onMount } from 'svelte';

  const galleryImages = ['/eratosthenes/era1.jpg', '/eratosthenes/era2.jpg'];
  let showFullscreen = false;
  let fullscreenImg = '';

  function openFullscreen(img) {
    fullscreenImg = img;
    showFullscreen = true;
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  }
  function closeFullscreen() {
    showFullscreen = false;
    fullscreenImg = '';
    if (typeof document !== 'undefined') document.body.style.overflow = '';
  }
</script>

<section class="section container">
  <h1 class="project-title">Promotional Game Console</h1>
  <div class="meta">Completed · July 2026</div>

  <div class="logo-row">
    <img src="/eratosthenes/logo.svg" alt="Promotional Game Console logo" class="logo-img" />
    <div class="cta-links">
      <a class="cta-btn" href="https://eratosthenes.org.cy/" target="_blank" rel="noopener">Eratosthenes Centre</a>
    </div>
  </div>

  <div id="start" class="card">
    <p>
      As part of a small intern team at the Eratosthenes Centre of Excellence, we designed and built a fully functional handheld game console from scratch in a single month. The device promotes the centre’s antenna partnerships through a custom mini-game that introduces students of all educational levels to satellite telemetry and ground-station communication concepts.
    </p>
  </div>

  <div id="gallery" class="card gallery">
    {#each galleryImages as img}
      <button type="button" class="screenshot-button" on:click={() => openFullscreen(img)} aria-label="Open project photo fullscreen">
        <img src={img} alt="" aria-hidden="true" class="screenshot-img" />
      </button>
    {/each}
  </div>

  <div id="writeup" class="card">
    <h2>Project Writeup</h2>
    <p>
      This project was an end-to-end product development sprint carried out entirely by interns. Our team of three handled every dimension of the build — 3D enclosure design, electronics and firmware, and game software — with a hard deadline of just four weeks from concept to finished unit. I focused primarily on the hardware side: part sourcing, component integration, and iterative prototyping under intense time pressure. We used off-the-shelf 3.7V 18650 rechargeable batteries for ease of sourcing and field replacement, with a USB-C charger module for convenient recharging. Our original plan was to pair the battery with a step-up converter to deliver a stable 5V rail, but that was derailed by a combination of supplier errors — they shipped parts that did not perform any voltage stepping — and the fact that step-up modules simply aren’t available locally. With the clock ticking, we made the pragmatic call to power the ESP32-S3 directly from the battery. It is not electrically ideal, but it is functional and has held up reliably during demos. A dedicated PCB was on the roadmap but was scrapped in favour of direct soldering to stay on schedule; tactile buttons were chosen for their low cost and durability. We also managed to include a battery percentage indicator and implemented power-saving options in firmware to extend runtime during events. Beyond the hardware, we produced a comprehensive user manual covering gameplay instructions, maintenance procedures, and debugging steps to ensure the device can be operated and serviced by centre staff without our involvement. The enclosure went through multiple 3D-printed revisions to get the fit just right. Despite these hurdles, we delivered a polished, self-contained game console that the centre now uses at outreach events to give students hands-on experience with satellite communications. The experience taught me how to drive a project from idea to physical prototype at speed, manage supply-chain surprises, and coordinate effectively with teammates working on overlapping subsystems.
    </p>
  </div>

  <div id="credits" class="card">
    <h2>Credits</h2>
    <ul>
      <li><strong>Andriana Georgiou</strong> — Unicode and Greek glyph rendering on the display (ILI9341), UI development, difficulty engineering, and parametric enclosure design. (Computer Science and Engineering student, Cyprus University of Technology) <a href="https://www.linkedin.com/in/andriana-georgiou-694203319/" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><strong>Stefanos Siathas</strong> — Game engine and firmware, component selection, and hardware assembly. (Lyceum senior) <a href="https://www.stefanossiathas.com/" target="_blank" rel="noopener">Website</a></li>
      <li><strong>Lambros Savva</strong> — Software development, component selection, power optimisation, and hardware assembly. (Electrical & Computer Engineering student, NTUA)</li>
    </ul>
  </div>
</section>

{#if showFullscreen}
  <div class="fullscreen-overlay" on:click={closeFullscreen} on:keydown={(event) => { if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') { event.preventDefault(); closeFullscreen(); } }} tabindex="0" role="button" aria-label="Close fullscreen image viewer">
    <img src={fullscreenImg} alt="" aria-hidden="true" class="fullscreen-img" />
    <button class="close-fullscreen" on:click|stopPropagation={closeFullscreen} aria-label="Close fullscreen">&times;</button>
  </div>
{/if}

<style>
  :root{ --color-primary: #7b2ff2; }
  .section{ padding: clamp(20px, 6vw, 48px); }
  .container{ width:min(100%, 1000px); margin-inline:auto; padding-inline:clamp(12px, 4vw, 28px); }
  .project-title{ font-size:2.6rem; color:#fff; text-align:center; margin-bottom:0.2rem; font-weight:800; text-shadow:0 2px 10px rgba(0,0,0,0.6); }
  .project-title::after{ content:''; display:block; width:5.5rem; height:6px; margin:0.5rem auto 0 auto; border-radius:4px; background:linear-gradient(90deg,var(--color-primary,#7b2ff2),#ff47f0); }
  .meta{ text-align:center; color:#ddd; margin-bottom:1rem; }
  .logo-row{ display:flex; gap:1rem; justify-content:center; align-items:center; margin-bottom:1rem; }
  .logo-img{ width:140px; height:auto; }
  .card{ background: rgba(20,12,32,0.6); border-radius:12px; border:2px solid rgba(123,47,242,0.18); padding:1.2rem; margin:1rem 0; }
  .gallery{ display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
  .screenshot-img{ width:48%; max-width:420px; border-radius:10px; cursor:pointer; border:3px solid rgba(123,47,242,0.6); box-shadow:0 12px 30px rgba(123,47,242,0.12); }
  .fullscreen-overlay{ position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.9); z-index:10000; }
  .fullscreen-img{ max-width:95%; max-height:95%; border-radius:12px; }
  .close-fullscreen{ position:absolute; top:1.2rem; right:1.2rem; font-size:2.4rem; background:none; color:#fff; border:none; }
  .cta-btn{ background:linear-gradient(135deg,var(--color-primary,#c77dff),#ff47f0); color:#fff; padding:.6rem 1rem; border-radius:8px; text-decoration:none }
</style>
