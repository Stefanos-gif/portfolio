<!-- Header.svelte -->
<script>
  import { onMount } from 'svelte';
  import { slide, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { faCaretDown, faCaretUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import Projects from '../lib/components/Projects.svelte';

  // Routes shown in nav
  const routes = ['/', '/about', '/background'];

  // State
  let pageIdx = 0;
  export let opened = false;          // projects panel
  let mobileMenuOpen = false;
  let ready = false;
  let isMobile = false;
  let y = 0;

  // Helpers
  function navigate(newIdx) {
    pageIdx = newIdx;
    goto(routes[pageIdx]);
    closeMobileMenu();
  }

  function checkIfMobile() {
    if (!browser) return;
    isMobile = window.innerWidth <= 768;
  }

  function openMobileMenu() {
    mobileMenuOpen = true;
    if (browser) {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    if (browser) {
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
    }
  }

  function toggleMobileMenu() {
    mobileMenuOpen ? closeMobileMenu() : openMobileMenu();
  }

  function handleArrowNavigation(event) {
    // Left/Right for desktop, Esc to close things on mobile
    if (event.key === 'Escape') {
      if (mobileMenuOpen) closeMobileMenu();
      if (opened) opened = false;
      return;
    }
    if (!isMobile) {
      if (event.key === 'ArrowRight') {
        navigate((pageIdx + 1) % routes.length);
      } else if (event.key === 'ArrowLeft') {
        navigate(pageIdx === 0 ? routes.length - 1 : pageIdx - 1);
      }
    }
  }

  // Init
  onMount(() => {
    ready = true;
    if (browser) {
      pageIdx = routes.indexOf($page.url.pathname);
      if (pageIdx < 0) pageIdx = 0;

      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);

      // keep horizontal scroll disabled
      document.body.style.overflowX = 'hidden';
    }

    const unsub = page.subscribe(() => {
      // close overlays on route change
      closeMobileMenu();
    });

    return () => {
      if (browser) window.removeEventListener('resize', checkIfMobile);
      unsub();
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
    };
  });

  const navTransition = { duration: 220, easing: cubicOut, axis: 'y' };
</script>

<svelte:window on:keydown={handleArrowNavigation} bind:scrollY={y} />

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Stefanos Siathas</title>
</svelte:head>

<header>
  {#if ready && y < 50}
    <!-- Projects Drop (shared desktop/mobile) -->
    {#if opened}
      <div id="project-screen" transition:slide={{ duration: 260, easing: cubicOut, axis: 'y' }}>
        <Projects />
      </div>
    {/if}

    <!-- DESKTOP NAV -->
    {#if !isMobile}
      <nav class="desktop-nav" in:slide={navTransition} class:opened={opened}>
        <div class="bar">
          <ul class="links">
            {#each routes as route, i}
              <li class:current={pageIdx === i}>
                <button on:click={() => navigate(i)}>
                  {route === '/' ? 'home' : route.slice(1)}
                </button>
              </li>
            {/each}
          </ul>

          <button
            class="projects-toggle"
            on:click={() => (opened = !opened)}
            aria-label={opened ? 'Hide projects' : 'Show projects'}
            aria-expanded={opened}
          >
            <Fa icon={opened ? faCaretUp : faCaretDown} />
          </button>
        </div>
      </nav>
    {:else}
      <!-- MOBILE TOP BAR -->
      <div class="mobile-top">
        <button class="icon-btn" on:click={toggleMobileMenu} aria-label="Toggle navigation menu">
          <Fa icon={mobileMenuOpen ? faTimes : faBars} />
        </button>

        <div class="hint" in:fade={{ duration: 150 }}>
          Tap menu • Swipe up for projects
        </div>

        <button
          class="icon-btn"
          on:click={() => (opened = !opened)}
          aria-label={opened ? 'Hide projects' : 'Show projects'}
        >
          <Fa icon={opened ? faCaretUp : faCaretDown} />
        </button>
      </div>

      <!-- MOBILE OVERLAY -->
      {#if mobileMenuOpen}
        <div class="overlay" transition:fade={{ duration: 120 }} on:click={closeMobileMenu}>
          <div class="sheet" on:click|stopPropagation>
            <div class="sheet-header">
              <h3>Navigation</h3>
              <button class="close-x" on:click={closeMobileMenu} aria-label="Close menu">
                <Fa icon={faTimes} />
              </button>
            </div>

            <ul class="sheet-list">
              <li class:current={pageIdx === 0}>
                <button on:click={() => navigate(0)}>Home</button>
              </li>
              <li class:current={pageIdx === 1}>
                <button on:click={() => navigate(1)}>About</button>
              </li>
              <li class:current={pageIdx === 2}>
                <button on:click={() => navigate(2)}>Background</button>
              </li>
            </ul>
          </div>
        </div>
      {/if}
    {/if}
  {/if}
</header>

<style>
  :root{
    --bg: #0b0710;
    --primary: #7b2ff2;
    --primary-2: #8b3ff7;
    --accent: #ff47f0;
    --text: #e9d8ff;
    --card: #1a0f28;
  }

  /* --- Layout anchors --- */
  header {
    position: fixed;
    inset: 0 0 auto 0;
    display: contents;
    z-index: 9999;
  }

  /* Projects area */
  :global(html, body){
  margin: 0;
  padding: 0;
}

#project-screen {
  position: fixed;
  top: 0;                 /* flush with viewport top on desktop */
  left: 0;
  right: 0;
  height: 60vh;
  background-color: var(--primary);
  z-index: 9998;
  transform-origin: top center;
  overflow-y: auto;
  overflow-x: hidden;     /* optional: remove inner horizontal bar */
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
}

/* keep an offset only on mobile, so the top bar isn’t covered */
@media (max-width: 768px) {
  #project-screen {
    top: 60px;            /* matches your mobile header height */
    height: 72vh;
  }
}

  /* ================= DESKTOP ================= */
  .desktop-nav{
    position: fixed;
    top: 0;
    left: 0; right: 0;
    display: flex;
    justify-content: center;
    z-index: 9999;
    backdrop-filter: blur(10px);
  }

  .desktop-nav .bar{
    margin: .5rem auto;
    height: 48px;                         /* slimmer desktop height */
    display: flex;
    align-items: stretch;
    gap: .5rem;
    background: var(--primary);
    border-radius: 14px;
    padding: 0 .5rem 0 .75rem;
    box-shadow: 0 6px 22px rgba(123,47,242,.35);
  }

  .desktop-nav.opened { transform: translateY(60vh); transition: transform .24s cubic-bezier(.2,.7,.2,1); }

  .links{
    display: flex;
    align-items: center;
    gap: .25rem;
    list-style: none;
    padding: 0; margin: 0;
  }

  .links li { height: 100%; display: flex; }
  .links li.current button{ color: #0b0710; background: rgba(233,216,255,.85); }

  .links button{
    height: 100%;
    border: 0;
    background: transparent;
    color: var(--text);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .1em;
    padding: 0 .75rem;
    border-radius: 10px;
    cursor: pointer;
    transition: background .15s ease, color .15s ease, transform .08s ease;
    font-size: clamp(.72rem, 1.6vw, .82rem);
  }
  .links button:hover{ background: rgba(233,216,255,.18); transform: translateY(-1px); }

  .projects-toggle{
    border: 0;
    background: #2a1740;
    color: var(--text);
    width: 48px;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    display: grid;
    place-items: center;
    transition: transform .08s ease, background .15s ease;
  }
  .projects-toggle:hover{ background:#3a2158; transform: translateY(-1px); }

  /* ================= MOBILE ================= */
  .mobile-top{
    position: fixed; inset: 0 0 auto 0;
    display: grid;
    grid-template-columns: 44px 1fr 44px;
    align-items: center;
    gap: .5rem;
    padding: .6rem .8rem;
    background: rgba(11,7,16,.96);
    border-bottom: 2px solid var(--primary);
    box-shadow: 0 2px 30px rgba(123,47,242,.35);
    z-index: 9999;
  }
  .hint{
    text-align: center;
    font-size: .78rem;
    color: var(--text);
    opacity: .8;
    user-select: none;
    white-space: nowrap;
  }
  .icon-btn{
    width: 44px; height: 44px;
    display: grid; place-items: center;
    border: 0; border-radius: 10px;
    background: var(--primary);
    color: var(--text);
    box-shadow: 0 2px 10px rgba(123,47,242,.45);
    cursor: pointer;
    transition: transform .08s ease, background .15s ease;
  }
  .icon-btn:hover{ transform: translateY(-1px); background: var(--primary-2); }

  /* Overlay */
  .overlay{
    position: fixed; inset: 0;
    background: radial-gradient(70% 70% at 50% 50%, rgba(123,47,242,.12), rgba(11,7,16,.95) 60%);
    backdrop-filter: blur(16px);
    display: grid; place-items: center;
    z-index: 10000;
  }

  /* Neon card */
  .sheet{
    width: min(420px, 90vw);
    border-radius: 22px;
    background: linear-gradient(140deg, rgba(26,15,40,.98), rgba(20,12,32,.98));
    border: 3px solid var(--primary);
    box-shadow:
      0 0 80px rgba(123,47,242,.55),
      0 20px 60px rgba(0,0,0,.55),
      inset 0 1px 0 rgba(255,255,255,.06);
    overflow: hidden;
  }

  /* Title bar like in screenshot */
  .sheet-header{
    display: flex; align-items: center; justify-content: space-between;
    padding: .9rem 1rem;
    background: linear-gradient(90deg, rgba(123,47,242,.18), rgba(123,47,242,.06) 60%, transparent);
    border-bottom: 2px solid rgba(123,47,242,.5);
  }
  .sheet-header h3{
    margin: 0;
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: .02em;
    color: var(--text);
    text-shadow: 0 0 10px rgba(123,47,242,.7);
  }
  .close-x{
    border: 0; background: transparent; color: var(--text);
    width: 40px; height: 40px; border-radius: 10px; cursor: pointer;
  }
  .close-x:hover{ background: rgba(123,47,242,.18); }

  /* Buttons list */
  .sheet-list{
    list-style: none; padding: 1.25rem; margin: 0;
    display: grid; gap: .85rem;
  }
  .sheet-list li { width: 100%; }

  .sheet-list button{
    width: 100%;
    border: 2px solid rgba(123,47,242,.45);
    background: #140c20;
    color: var(--text);
    padding: 1rem 1.25rem;
    font-size: 1.05rem;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    box-shadow:
      0 8px 20px rgba(123,47,242,.25),
      inset 0 0 0 0 rgba(123,47,242,.0);
    transition: transform .09s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
  }
  .sheet-list button:hover{
    transform: translateY(-1px) scale(1.01);
    border-color: var(--primary);
    background: #1b112b;
    box-shadow:
      0 12px 28px rgba(123,47,242,.35),
      inset 0 0 18px rgba(123,47,242,.18);
  }

  /* Active/current page style (bright pill like screenshot) */
  .sheet-list li.current button{
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-2) 100%);
    border-color: var(--primary);
    color: #fff;
    text-shadow: 0 1px 12px rgba(11,7,16,.75);
    box-shadow:
      0 0 28px rgba(123,47,242,.55),
      0 14px 30px rgba(123,47,242,.40);
  }

  /* ================= SMALL SCREENS TWEAKS ================= */
  @media (max-width: 768px){
    #project-screen{ top: 60px; height: 72vh; }
    .sheet{ width: min(380px, 92vw); }
  }

  @media (max-width: 420px){
    .hint{ font-size: .68rem; }
    .sheet{ width: 94vw; }
    .sheet-list{ padding: 1rem; gap: .8rem; }
    .sheet-list button{ font-size: 1.06rem; padding: 1rem 1.1rem; }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce){
    *{ transition: none !important; animation: none !important; }
  }
</style>
