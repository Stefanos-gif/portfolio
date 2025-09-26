<script>
  
  let showFullscreen = false;
  let fullscreenImg = '';

  function openFullscreen(imgSrc) {
    fullscreenImg = imgSrc;
    showFullscreen = true;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeFullscreen() {
    showFullscreen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
</script>

<svelte:head>
  <title>Solar System — SvelteKit Project | Stefanos Siathas</title>
  <meta name="description" content="Interactive Solar System visualization with daily planet facts API built with SvelteKit" />
</svelte:head>

<main>
  <h1 class="project-title">Solar System — SvelteKit Project</h1>

  <div id="container">
    <p id="first-p">
      An interactive Solar System page that visualizes the planets (Sun + 8) and shows daily rotating facts for any selected celestial body. 
      Facts are fetched from a custom Planet API via a local SvelteKit proxy to avoid CORS and maintain backend flexibility.
    </p>
    <div id="pilot-status">
      Live Demo Available • API Documentation Included
    </div>
  </div>

  <div id="core-features">
    <h2>Core Features</h2>
    <ul>
      <li>Interactive Solar System visualization with animated planets</li>
      <li>Daily rotating facts for Sun + 8 planets based on current date</li>
      <li>Clickable planet selection with smooth UI updates</li>
      <li>Server-side rendering for fast initial page loads</li>
      <li>Client-side dynamic fact fetching and display</li>
      <li>Responsive design for desktop and mobile devices</li>
    </ul>
  </div>

  <div id="architecture">
    <h2>Architecture</h2>
    <ul>
      <li><b>Frontend:</b> SvelteKit + TypeScript + CSS Animations</li>
      <li><b>Backend API:</b> SvelteKit API Routes (planet-api repository)</li>
      <li><b>Integration:</b> Local SvelteKit proxy (/api/planet-fact) to avoid CORS</li>
      <li><b>Deployment:</b> Frontend on Vercel, API on Vercel</li>
      <li><b>Configuration:</b> Environment variables for API endpoint swapping</li>
    </ul>
  </div>

  <div id="how-it-works">
    <h2>How It Works</h2>
    <ul>
      <li><b>1. Initial Load:</b> User visits /projects/solarsystem, server loads default Earth fact via proxy</li>
      <li><b>2. Planet Selection:</b> User clicks planet or dropdown to select celestial body</li>
      <li><b>3. Fact Fetch:</b> Client calls /api/planet-fact?planet=&lt;name&gt; proxy endpoint</li>
      <li><b>4. API Forward:</b> Proxy forwards to PLANET_API_BASE environment variable</li>
      <li><b>5. Daily Rotation:</b> API returns fact based on current day (EST timezone)</li>
      <li><b>6. UI Update:</b> Fact card updates with new content and planet information</li>
    </ul>
  </div>
</main>

  <div id="screenshots">
    <h2 class="screenshots-title">Screenshots</h2>
    <div class="screenshots-row">
      <img src="/solar-system-main.png" alt="Solar System Main View" class="screenshot-img" on:click={() => openFullscreen('/solar-system-main.png')} tabindex="0" role="button" aria-label="Open main view fullscreen"/>
      <img src="/solar-system-planets.png" alt="Solar System Planet Selection" class="screenshot-img" on:click={() => openFullscreen('/solar-system-planets.png')} tabindex="0" role="button" aria-label="Open planet selection fullscreen"/>
    </div>
    <div class="screenshots-row">
      <img src="/planet-api-docs.png" alt="Planet API Documentation" class="screenshot-img" on:click={() => openFullscreen('/planet-api-docs.png')} tabindex="0" role="button" aria-label="Open API docs fullscreen"/>
      <img src="/solar-system-mobile.png" alt="Solar System Mobile View" class="screenshot-img" on:click={() => openFullscreen('/solar-system-mobile.png')} tabindex="0" role="button" aria-label="Open mobile view fullscreen"/>
    </div>
  </div>

  {#if showFullscreen}
    <div class="fullscreen-overlay" on:click={closeFullscreen} tabindex="0">
      <img src={fullscreenImg} alt="Fullscreen Screenshot" class="fullscreen-img" />
      <button class="close-fullscreen" on:click|stopPropagation={closeFullscreen} aria-label="Close fullscreen">&times;</button>
    </div>
  {/if}

  <div id="cta-links">
    <a href="https://solarsystem-app.vercel.app" class="cta-btn" target="_blank" rel="noopener noreferrer">Try the Solar System Demo</a>
    <a href="https://planet-api-mu.vercel.app" class="cta-btn" target="_blank" rel="noopener noreferrer">View Planet API</a>
    <a href="https://github.com/Stefanos-gif/solarsystem-app" class="cta-btn" target="_blank" rel="noopener noreferrer">Frontend Source</a>
    <a href="https://github.com/Stefanos-gif/planet-api" class="cta-btn" target="_blank" rel="noopener noreferrer">API Source</a>
  </div>

<style>
  .project-title {
    font-size: 3rem;
    font-weight: bold;
    color: var(--color-primary, #c77dff);
    margin-bottom: 0.5rem;
    margin-top: 2.5rem;
    text-align: center;
    text-shadow: 0 0 12px #ff00ff99;
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

  #pilot-status {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: #ffcc00;
    background: rgba(255, 204, 0, 0.1);
    padding: 0.8rem 1rem;
    border-radius: 12px;
    border: 2px solid #ffcc00;
    display: inline-block;
  }

  #core-features, #architecture, #how-it-works {
    margin: 2.5rem auto 1.5rem auto;
    max-width: 900px;
    background: rgba(97,20,128,0.35);
    border-radius: 14px;
    border: 2px solid var(--color-primary, #c77dff);
    box-shadow: 0 0 24px #c77dff33;
    padding: 2rem 2vw;
  }

  #core-features h2, #architecture h2, #how-it-works h2 {
    color: var(--color-primary, #c77dff);
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    text-align: center;
    text-shadow: 0 0 8px #c77dff66;
  }

  #core-features ul, #architecture ul, #how-it-works ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #core-features li, #architecture li, #how-it-works li {
    padding: 0.8rem 0;
    font-size: 1rem;
    border-bottom: 1px solid rgba(199, 125, 255, 0.2);
    position: relative;
    padding-left: 1.5rem;
  }

  #core-features li:last-child, #architecture li:last-child, #how-it-works li:last-child {
    border-bottom: none;
  }

  #core-features li::before, #architecture li::before, #how-it-works li::before {
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
    .project-title {
      font-size: 2.2rem;
    }

    #container, #core-features, #architecture, #how-it-works {
      margin: 1.5rem auto;
      padding: 1.5rem 1rem;
    }

    .screenshots-row {
      flex-direction: column;
      align-items: center;
    }

    .screenshot-img {
      width: 90%;
      max-width: 400px;
    }

    #cta-links {
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
    }

    .cta-btn {
      width: 80%;
      max-width: 300px;
    }

    .close-fullscreen {
      top: 1rem;
      right: 1rem;
      width: 50px;
      height: 50px;
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .project-title {
      font-size: 1.8rem;
      margin-top: 1.5rem;
    }

    #first-p {
      font-size: 1rem;
    }

    #core-features h2, #architecture h2, #how-it-works h2, .screenshots-title {
      font-size: 1.5rem;
    }

    .screenshot-img {
      width: 95%;
    }
  }
</style>