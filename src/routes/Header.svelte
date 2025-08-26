<!-- Header.svelte (or paste into +layout.svelte header block) -->
<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import Projects from '../lib/components/Projects.svelte';

  const routes = ['/', '/about', '/background'];
  let pageIdx = 0;

  export let opened = false;

  const navTransition = { duration: 1000, axis: 'y' };
  let y = 0;
  let ready = false;

  function navigate(newPageIdx) {
    pageIdx = newPageIdx;
    goto(routes[pageIdx]);
  }

  function handleArrowNavigation(event) {
    switch (event.key) {
      case 'ArrowRight':
        navigate((pageIdx + 1) % routes.length);
        break;
      case 'ArrowLeft':
        navigate(pageIdx === 0 ? routes.length - 1 : pageIdx - 1);
        break;
    }
  }

  onMount(() => {
    ready = true;
    pageIdx = routes.indexOf($page.url.pathname);
    if (pageIdx < 0) pageIdx = 0;
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

    <nav in:slide={navTransition} class:opened>
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
  {/if}
</header>

<style>
  :root{
    /* keep your colors; these are fallbacks */
    --color-primary: #7b2ff2;
    --color-secondary: #e9d8ff;
    --background-color: #0b0710;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: contents; /* header wrapper does not affect layout */
    z-index: 9999;
  }

  /* Projects drawer (same look, responsive height) */
  #project-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70vh;
    background-color: var(--color-primary);
    z-index: 9998;
    transform-origin: top center;
    overflow: auto;
  }

  /* Main nav bar (same style) */
  nav {
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

  /* Push nav down when opened (same values as before) */
  .opened { top: 70vh; }

  /* Wing svgs unchanged; just scale on small screens */
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

    /* phone friendliness: allow sideways scroll when cramped */
    overflow-x: auto;
    overflow-y: hidden;
    gap: 0.25rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }
  ul::-webkit-scrollbar { height: 6px; }
  ul::-webkit-scrollbar-thumb { background: #ffffff33; border-radius: 10px; }

  li {
    position: relative;
    height: 100%;
    flex: 0 0 auto; /* keep each button compact on small screens */
  }

  nav button {
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

    /* bigger tap target on phones */
    min-width: 2.75rem;
  }

  .current-section button { color: var(--background-color); }
  button:hover { color: var(--background-color); }

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

  /* --- Mobile responsiveness (keep same look, scale down) --- */
  @media (max-width: 768px) {
    /* slightly shorter drawer so more content shows below */
    #project-screen { height: 60vh; }
    .opened { top: 60vh; }

    /* shrink wings to keep proportions */
    .wing,
    svg { width: 1.5em; height: 4em; }

    ul {
      height: 2.5em;
      gap: 0.15rem;
      padding-inline: 0.25rem;
    }
    nav button {
      padding: 0 0.35rem;
      font-size: 0.7rem;
      letter-spacing: 0.09em;
      min-width: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    .wing,
    svg { width: 1.2em; height: 3.5em; }
    ul { height: 2.2em; }
    nav button {
      padding: 0 0.25rem;
      font-size: 0.62rem;
      letter-spacing: 0.06em;
      min-width: 2.25rem;
    }
  }
</style>
