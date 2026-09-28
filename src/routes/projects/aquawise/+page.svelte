<script>
  let showFullscreen = false;
  let fullscreenImg = '';

  function openFullscreen(imgSrc) {
    fullscreenImg = imgSrc;
    showFullscreen = true;
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  }

  function closeFullscreen() {
    showFullscreen = false;
    if (typeof document !== 'undefined') document.body.style.overflow = '';
  }
</script>

<svelte:head>
  <title>AquaWise — Smart Irrigation | Stefanos Siathas</title>
  <meta name="description" content="AquaWise — AI-powered smart irrigation system for efficient water management." />
</svelte:head>

<main>
  <h1 class="project-title">AquaWise — SMART WATER. SMART FUTURE.</h1>

  <div id="container">
    <p id="first-p">
      AquaWise offers an AI-powered smart irrigation system that reduces water waste, improves agricultural efficiency and ensures sustainable water management through realtime environmental monitoring and automated decision-making.
    </p>
  </div>

  <div id="core-features">
    <h2>Who We Are</h2>
    <p>
      AquaWise is an innovative smart irrigation company developed to address water scarcity and promote sustainable resource management. The system integrates soil moisture sensors, real-time weather data and intelligent automation to provide precise irrigation only when needed.
    </p>
    <h2>Mission & Goals</h2>
    <ul>
      <li>Minimize unnecessary water consumption.</li>
      <li>Increase agricultural productivity.</li>
      <li>Support sustainable resource management.</li>
      <li>Enable intelligent, automated irrigation decisions.</li>
    </ul>
  </div>

  <div id="story">
    <h2>Story</h2>
    <p>
      This project began from observing local water scarcity and grew into a full research and field-tested system deployed in school gardens and municipal parks. AquaWise combines sensor networks, weather data and ML-driven thresholds to optimize irrigation.
    </p>
  </div>

  <div id="screenshots">
    <h2 class="screenshots-title">Images & Media</h2>
    <div class="screenshots-row">
      <img src="/aquawise/aq1.jpg" alt="AquaWise field" class="screenshot-img" on:click={() => openFullscreen('/aquawise/aq1.jpg')} tabindex="0" role="button"/>
      <img src="/aquawise/aq2.jpg" alt="AquaWise facility" class="screenshot-img" on:click={() => openFullscreen('/aquawise/aq2.jpg')} tabindex="0" role="button"/>
    </div>
    <div class="screenshots-row">
      <img src="/aquawise/aq3.jpg" alt="AquaWise sensors" class="screenshot-img" on:click={() => openFullscreen('/aquawise/aq3.jpg')} tabindex="0" role="button"/>
      <img src="/aquawise/aq4.jpg" alt="AquaWise deployment" class="screenshot-img" on:click={() => openFullscreen('/aquawise/aq4.jpg')} tabindex="0" role="button"/>
    </div>
  </div>

  <div id="collaborations">
    <h2>Collaborations</h2>
    <p>
      Implementations at Lyceum of Agios Georgios (Lakatamia), deployments in municipal parks with the Municipality of Lakatamia, data partnerships with the Department of Meteorology (Nicosia) and Limassol Water Supply, and research collaboration with KOIOS (University of Cyprus). Outreach via Stockholm Water Foundation and local nurseries.
    </p>
  </div>

  {#if showFullscreen}
    <div class="fullscreen-overlay" on:click={closeFullscreen} tabindex="0">
      <img src={fullscreenImg} alt="Fullscreen" class="fullscreen-img" />
      <button class="close-fullscreen" on:click|stopPropagation={closeFullscreen} aria-label="Close fullscreen">&times;</button>
    </div>
  {/if}

  <div id="cta-links">
    <a href="https://www.aquawise.ltd" class="cta-btn" target="_blank" rel="noopener">Visit AquaWise</a>
    <a href="mailto:aquawise.cy@gmail.com" class="cta-btn">Contact</a>
  </div>
</main>

<style>
  :root{
    --color-primary:#c77dff;
  }

  .project-title {
    font-size: 3rem;
    font-weight: 800;
    color: #ffffff; /* higher contrast for readability */
    margin-bottom: 0.5rem;
    margin-top: 2.2rem;
    text-align: center;
    text-shadow: 0 2px 10px rgba(0,0,0,0.6);
    position: relative;
    padding-bottom: 0.45rem;
  }

  /* accent underline matching the project's primary color but keeping title white */
  .project-title::after {
    content: '';
    display: block;
    width: 6rem;
    height: 6px;
    margin: 0.6rem auto 0 auto;
    border-radius: 4px;
    background: linear-gradient(90deg, var(--color-primary,#c77dff), #ff47f0);
    box-shadow: 0 6px 24px rgba(199,125,255,0.18);
  }

  #container {
    margin: 2rem auto 1.5rem auto;
    padding: 2rem 2vw;
    max-width: 900px;
    background: rgba(97,20,128,0.5);
    border-radius: 18px;
    border: 4px solid var(--color-primary, #c77dff);
    box-shadow: 0 0 32px #c77dff44;
    text-align: center;
  }

  #first-p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  #core-features, #story, #collaborations {
    margin: 2.5rem auto 1.5rem auto;
    max-width: 900px;
    background: rgba(97,20,128,0.35);
    border-radius: 14px;
    border: 2px solid var(--color-primary, #c77dff);
    box-shadow: 0 0 24px #c77dff33;
    padding: 2rem 2vw;
  }

  #core-features h2, #story h2, #collaborations h2 {
    color: #ffffff; /* easier to read */
    font-size: 1.8rem;
    margin-bottom: 1rem;
    margin-top: 0;
    text-align: center;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 8px;
  }

  #core-features ul, #story ul, #collaborations ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #core-features li, #story li, #collaborations li {
    padding: 0.8rem 0;
    font-size: 1rem;
    border-bottom: 1px solid rgba(199, 125, 255, 0.2);
    position: relative;
    padding-left: 1.5rem;
  }

  #core-features li:last-child, #story li:last-child, #collaborations li:last-child {
    border-bottom: none;
  }

  #core-features li::before, #story li::before, #collaborations li::before {
    content: '•';
    color: var(--color-primary, #c77dff);
    font-size: 1.2rem;
    position: absolute;
    left: 0;
  }

  #screenshots {
    margin: 3rem auto 2rem auto;
    max-width: 1000px;
    padding: 0 2vw;
  }

  .screenshots-title {
    color: var(--color-primary, #c77dff);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 0 0 8px #c77dff66;
  }

  .screenshots-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    justify-content: center;
  }

  .screenshot-img {
    width: 48%;
    height: auto;
    border-radius: 12px;
    border: 3px solid var(--color-primary, #c77dff);
    box-shadow: 0 0 20px #c77dff33;
    cursor: pointer;
    transition: all 0.3s ease;
    object-fit: cover;
  }

  .screenshot-img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px #c77dff66;
  }

  .fullscreen-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  }

  .fullscreen-img {
    max-width: 95%;
    max-height: 95%;
    border-radius: 12px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  }

  .close-fullscreen {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    font-size: 3rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .close-fullscreen:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  #cta-links {
    text-align: center;
    margin: 3rem auto 2rem auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    max-width: 800px;
  }

  .cta-btn {
    background: linear-gradient(135deg, var(--color-primary, #c77dff) 0%, #ff47f0 100%);
    color: white;
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(199, 125, 255, 0.4);
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(199, 125, 255, 0.6);
    background: linear-gradient(135deg, #ff47f0 0%, var(--color-primary, #c77dff) 100%);
  }

  @media (max-width: 768px) {
    .project-title { font-size: 2.2rem; }
    #container, #core-features, #story, #collaborations { margin: 1.5rem auto; padding: 1.5rem 1rem; }
    .screenshots-row { flex-direction: column; align-items: center; }
    .screenshot-img { width: 90%; max-width: 400px; }
    #cta-links { flex-direction: column; align-items: center; gap: 0.8rem; }
    .cta-btn { width: 80%; max-width: 300px; }
  }

  @media (max-width: 480px) {
    .project-title { font-size: 1.8rem; margin-top: 1.5rem; }
    #first-p { font-size: 1rem; }
    #core-features h2, #story h2, #collaborations h2, .screenshots-title { font-size: 1.5rem; }
    .screenshot-img { width: 95%; }
  }

</style>
