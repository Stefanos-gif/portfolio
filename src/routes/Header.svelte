<script>
  import { onMount, onDestroy } from 'svelte';
  import { slide, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { faCaretDown, faCaretUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import Projects from '../lib/components/Projects.svelte';

  const routes = ['/', '/about', '/background'];
  let pageIdx = 0;

  export let opened = false;
  let mobileMenuOpen = false;

  const navTransition = { duration: 1000, axis: 'y' };
  let y = 0;
  let ready = false;
  let isMobile = false;

  const unsubscribePage = page.subscribe(() => {
    mobileMenuOpen = false;
    if (browser) {
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
    }
  });

  function navigate(newPageIdx) {
    pageIdx = newPageIdx;
    goto(routes[pageIdx]);
    mobileMenuOpen = false;
    if (browser) {
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
    }
  }

  function handleArrowNavigation(event) {
    if (!isMobile) {
      switch (event.key) {
        case 'ArrowRight':
          navigate((pageIdx + 1) % routes.length);
          break;
        case 'ArrowLeft':
          navigate(pageIdx === 0 ? routes.length - 1 : pageIdx - 1);
          break;
      }
    }
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (browser) {
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        document.body.style.overflowX = 'hidden';
      }
    }
  }

  function checkIfMobile() {
    if (browser) {
      isMobile = window.innerWidth <= 768;
    }
  }

  onMount(() => {
    ready = true;
    pageIdx = routes.indexOf($page.url.pathname);
    if (pageIdx < 0) pageIdx = 0;
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    document.body.style.overflow = '';
    document.body.style.overflowX = 'hidden';
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
      unsubscribePage();
    };
  });
</script>

<svelte:window on:keydown={handleArrowNavigation} bind:scrollY={y} />

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Stefanos Siathas</title>
</svelte:head>

<header>
  {#if ready && y < 50}
    {#if opened}
      <div
        transition:slide={{ duration: 300, easing: cubicOut, axis: 'y' }}
        id="project-screen"
      >
        <Projects />
      </div>
    {/if}

    {#if !isMobile}
      <nav in:slide={navTransition} class:opened class="desktop-nav">
        <svg class="wing" viewBox="0 0 2 5" aria-hidden="true">
          <path d="M0,0 L1,4 C1.5,5 1.5,5 2,5 L2,0 Z" />
        </svg>

        <div class="links-container">
          <ul>
            {#each routes as route, i}
              <li class:current-section={pageIdx === i}>
                <button on:click={() => navigate(i)}>
                  {route === '/' ? 'home' : route.slice(1)}
                </button>
              </li>
            {/each}
          </ul>

          <div
            id="arrow-container"
            on:click={() => { opened = !opened; }}
            role="button"
            aria-label={opened ? 'Hide projects' : 'Show projects'}
            aria-expanded={opened}
            tabindex="0"
          >
            {#if opened}
              <Fa icon={faCaretUp} class="arrow" />
            {:else}
              <Fa icon={faCaretDown} class="arrow" />
            {/if}
          </div>
        </div>

        <svg class="wing" viewBox="0 0 2 5" aria-hidden="true">
          <path d="M0,0 L0,5 C0.5,5 0.5,5 1,4 L2,0 Z" />
        </svg>
      </nav>
    {:else}
      
      <div class="mobile-nav">
        
        <div class="nav-instructions" in:fade={{ duration: 200 }}>
          <p>Tap menu to navigate • Swipe up for projects</p>
        </div>

        <button 
          class="mobile-menu-btn" 
          on:click={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <Fa icon={mobileMenuOpen ? faTimes : faBars} />
        </button>

        <button 
          class="mobile-projects-btn"
          on:click={() => { opened = !opened; }}
          aria-label={opened ? 'Hide projects' : 'Show projects'}
        >
          <Fa icon={opened ? faCaretUp : faCaretDown} />
        </button>
      </div>

      {#if mobileMenuOpen}
        <div 
          class="mobile-menu-overlay" 
          transition:fade={{ duration: 200 }}
          on:click={toggleMobileMenu}
        >
          <div class="mobile-menu" on:click|stopPropagation>
            <div class="mobile-menu-header">
              <h3>Navigation</h3>
              <button on:click={toggleMobileMenu} aria-label="Close menu">
                <Fa icon={faTimes} />
              </button>
            </div>
            <ul class="mobile-menu-list">
              {#each routes as route, i}
                <li class:current-section={pageIdx === i}>
                  <button on:click={() => navigate(i)}>
                    {route === '/' ? 'Home' : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                  </button>
                </li>
              {/each}
            </ul>
            
          </div>
        </div>
      {/if}
    {/if}
  {/if}
</header>

<style>
  :root{
    --color-primary: #7b2ff2;
    --color-secondary: #e9d8ff;
    --background-color: #0b0710;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: contents;
    z-index: 9999;
  }

  #project-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60vh;
    background-color: var(--color-primary);
    z-index: 9998;
    transform-origin: top center;
    overflow: auto;
  }

    .desktop-nav {
       position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;

    transition: top 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    pointer-events: auto;
    z-index: 9999;
    }

  .desktop-nav.opened { 
    top: 60vh; 
  }

  .wing,
  svg {
    width: 2em;
    height: 5em;
    display: block;
    transition: all 0.3s;
  }
  path { fill: var(--color-primary); }

  .links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--color-primary);
    background-size: contain;
    gap: 0.25rem;
  }

  li {
    position: relative;
    height: 100%;
    flex: 0 0 auto;
  }

  .desktop-nav button {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-secondary);
    font-weight: 700;
    font-size: clamp(0.7rem, 2vw, 0.8rem);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
    cursor: pointer;
    border: none;
    background-color: transparent;
    min-width: 2.75rem;
  }

  .current-section button { color: var(--background-color); }
  .desktop-nav button:hover { color: var(--background-color); }

  :global(.arrow) { margin-top: 0.25rem; }

  #arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% + 0.5rem);
    background-color: var(--color-primary);
    padding-bottom: 0.75rem;
    cursor: pointer;
    user-select: none;
  }

  .mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background: rgba(11, 7, 16, 0.98);
    backdrop-filter: blur(15px);
    border-bottom: 2px solid var(--color-primary);
    box-shadow: 0 2px 30px rgba(123, 47, 242, 0.4);
    width: 100vw;
    box-sizing: border-box;
    overflow: hidden;
  }

  .nav-instructions {
    flex: 1;
    text-align: center;
  }

  .nav-instructions p {
    margin: 0;
    font-size: 0.75rem;
    color: var(--color-secondary);
    opacity: 0.8;
    font-weight: 500;
  }

  .mobile-menu-btn,
  .mobile-projects-btn {
    background: var(--color-primary);
    border: none;
    border-radius: 8px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-secondary);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(123, 47, 242, 0.4);
  }

  .mobile-menu-btn:hover,
  .mobile-projects-btn:hover {
    background: #8b3ff7;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(123, 47, 242, 0.6);
  }

  .mobile-projects-btn {
    margin-left: 1rem;
  }

  .mobile-menu-overlay {
    position: fixed;
    inset: 0;
    background: rgba(11, 7, 16, 0.95);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(15px);
  }

  .mobile-menu {
    background: linear-gradient(135deg, rgba(11, 7, 16, 0.95) 0%, rgba(25, 15, 35, 0.95) 100%);
    border: 3px solid var(--color-primary);
    border-radius: 24px;
    width: 95%;
    max-width: 420px;
    min-height: 400px;
    max-height: 90vh;
    box-shadow: 
      0 25px 80px rgba(123, 47, 242, 0.6),
      0 0 60px rgba(255, 71, 240, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(25px);
    position: relative;
    overflow: visible;
    display: flex;
    flex-direction: column;
  }
  
  .mobile-menu::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(123, 47, 242, 0.1) 50%, transparent 70%);
    pointer-events: none;
  }

  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.5rem 1rem;
    border-bottom: 2px solid rgba(123, 47, 242, 0.5);
    background: linear-gradient(90deg, transparent, rgba(123, 47, 242, 0.1), transparent);
    flex-shrink: 0;
  }

  .mobile-menu-header h3 {
    margin: 0;
    color: var(--color-secondary);
    font-size: 1.6rem;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(123, 47, 242, 0.8);
    background: linear-gradient(45deg, var(--color-secondary), var(--color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .mobile-menu-header button {
    background: none;
    border: none;
    color: var(--color-secondary);
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: background 0.2s ease;
  }

  .mobile-menu-header button:hover {
    background: rgba(123, 47, 242, 0.2);
  }

  .mobile-menu-list {
    list-style: none;
    padding: 2rem 2rem 2.5rem;
    margin: 0;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .mobile-menu-list li {
    margin: 0;
  }

  .mobile-menu-list button {
    width: 100%;
    background: rgba(11, 7, 16, 0.6);
    border: 2px solid rgba(123, 47, 242, 0.4);
    color: var(--color-secondary);
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1.4rem 1.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: capitalize;
    letter-spacing: 0.05em;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    flex-shrink: 0;
    min-height: 58px;
  }

  .mobile-menu-list button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(123, 47, 242, 0.4) 0%, transparent 70%);
    transition: all 0.4s ease;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  .mobile-menu-list button:hover::before {
    width: 300px;
    height: 300px;
  }

  .mobile-menu-list button:hover {
    background: rgba(123, 47, 242, 0.2);
    border-color: var(--color-primary);
    color: #fff;
    text-shadow: 0 0 8px rgba(123, 47, 242, 0.6);
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 8px 20px rgba(123, 47, 242, 0.3);
  }

  .mobile-menu-list .current-section button {
    background: linear-gradient(135deg, var(--color-primary) 0%, #8b3ff7 100%);
    border-color: var(--color-primary);
    color: #ffffff;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(11, 7, 16, 0.8);
    box-shadow: 0 0 25px rgba(123, 47, 242, 0.5);
  }

  .mobile-menu-list .current-section button:hover {
    background: linear-gradient(135deg, #8b3ff7 0%, #ff47f0 100%);
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 10px 30px rgba(123, 47, 242, 0.6);
  }

  .mobile-menu-footer {
    padding: 1rem 2rem 1.5rem;
    text-align: center;
    border-top: 1px solid rgba(123, 47, 242, 0.3);
  }

  .mobile-menu-footer p {
    margin: 0;
    font-size: 0.75rem;
    color: var(--color-secondary);
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    #project-screen { 
      height: 75vh; 
      top: 70px; 
      width: 100vw;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 0.5rem;
    }
    
    .mobile-nav.projects-open {
      top: 75vh;
    }

    body {
      overflow-x: hidden !important;
      width: 100vw;
      max-width: 100vw;
    }

    * {
      max-width: 100vw;
      box-sizing: border-box;
    }
  }

  @media (max-width: 480px) {
    .nav-instructions p {
      font-size: 0.65rem;
    }

    .mobile-menu {
      width: 96%;
      max-width: 360px;
      min-height: 450px;
    }

    .mobile-menu-header {
      padding: 2rem 2rem 1.5rem;
    }

    .mobile-menu-header h3 {
      font-size: 1.8rem;
    }

    .mobile-menu-list {
      padding: 2.5rem 2rem 3rem;
      gap: 1.2rem;
    }

    .mobile-menu-list button {
      font-size: 1.3rem;
      padding: 1.6rem 1.8rem;
      min-height: 64px;
    }
  }
</style>
