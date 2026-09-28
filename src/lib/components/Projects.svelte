<script>
  import TripleImage from "./TripleImage.svelte";
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  const IMG_H = 'clamp(200px, 45vh, 360px)';

  const categories = [
    { id: 'industry', label: 'Industry Projects' },
    { id: 'cpp', label: 'C++ Projects' },
    { id: 'python', label: 'Python Projects' },
    { id: 'debates', label: 'Debates' },
    { id: 'svelte', label: 'SvelteKit Projects' }
  ];

  const projects = [
    { title: "Thalasat", img1: "/prog3.png", img2: "/prog3.png", img3: "/l5.png", imgHeight: IMG_H, category: "industry", url: "/projects/thalasat" },
    { title: "Satfire", img1: "/prog3.png", img2: "/prog3.png", img3: "/satfire.png", imgHeight: IMG_H, category: "industry", url: "/projects/satfire" },
    { title: "Barbershop Website", img1: "/prog3.png", img2: "/prog3.png", img3: "/barbw.png", imgHeight: IMG_H, category: "industry", url: "/projects/barbershop-website" },
    { title: "AquaWise", img1: "/prog3.png", img2: "/prog3.png", img3: "/aquawise/aq.jpg", imgHeight: IMG_H, category: "industry", url: "/projects/aquawise" },
    { title: "Eratosthenes — Promo Console", img1: "/prog3.png", img2: "/prog3.png", img3: "/eratosthenes/era.jpg", imgHeight: IMG_H, category: "industry", url: "/projects/eratosthenes" },
    { title: "Stemfreak Taskmanager", img1: "/prog3.png", img2: "/prog3.png", img3: "/taskmanager20.png", imgHeight: IMG_H, category: "industry", url: "/projects/taskmanager" },
    { title: "Watchlist app", img1: "/prog3.png", img2: "/prog3.png", img3: "/watchlistss.png", imgHeight: IMG_H, category: "industry", url: "/projects/watchlist-app" },
    { title: "Edu Bridge LTD", img1: "/prog3.png", img2: "/prog3.png", img3: "/edu-bridge-preview.png", imgHeight: IMG_H, category: "industry", url: "/projects/coming-soon" },

    { title: "C++ Level 3", img1: "/prog3.png", img2: "/prog3.png", img3: "/cpplvl3.png", imgHeight: IMG_H, category: "cpp", url: "/projects/cpp-lvl3" },
    { title: "C++ Games", img1: "/prog3.png", img2: "/prog3.png", img3: "/cppGames.png", imgHeight: IMG_H, category: "cpp", url: "/projects/cpp-games" },

    { title: "Python Data Visualizer", img1: "/prog3.png", img2: "/prog3.png", img3: "/flaskwe.png", imgHeight: IMG_H, category: "python", url: "/projects/flask-web-app" },
    { title: "Python Data analysis with pandas", img1: "/prog3.png", img2: "/prog3.png", img3: "/dataan.png", imgHeight: IMG_H, category: "python", url: "/projects/data-analysis-with-pandas" },
    { title: "Python Web Scraper", img1: "/prog3.png", img2: "/prog3.png", img3: "/webscrap.png", imgHeight: IMG_H, category: "python", url: "/projects/python-web-scraper" },

    { title: "AI(pro)", img1: "/prog3.png", img2: "/prog3.png", img3: "/ai.png", imgHeight: IMG_H, category: "debates", url: "/projects/ai-pro" },
    { title: "Meteor Counter", img1: "/prog3.png", img2: "/prog3.png", img3: "/meteor.png", imgHeight: IMG_H, category: "svelte", url: "/projects/meteor" },
    { title: "Solar System", img1: "/prog3.png", img2: "/prog3.png", img3: "/solar-system-preview.png", imgHeight: IMG_H, category: "svelte", url: "/projects/solar-system" }
  ];

  const groups = categories.map((c) => ({
    ...c,
    items: projects.filter((p) => p.category === c.id)
  }));

  // The ONE horizontal scroller that holds every category.
  let scroller;

  onMount(() => {
    const el = scroller;
    if (!el) return;
    const desktop = window.matchMedia('(min-width: 769px)');

    // Mouse wheel (vertical) -> horizontal scroll. Real horizontal gestures
    // (trackpads) and mobile layouts are left alone.
    const wheelHandler = (e) => {
      if (!desktop.matches) return;
      if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
      if (el.scrollWidth <= el.clientWidth) return;
      const dy = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY; // Firefox line mode
      el.scrollLeft += dy;
      e.preventDefault();
    };

    const keyHandler = (e) => {
      if (!desktop.matches) return;
      if (e.key === 'ArrowRight') {
        el.scrollBy({ left: 320, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        el.scrollBy({ left: -320, behavior: 'smooth' });
      }
    };

    el.addEventListener('wheel', wheelHandler, { passive: false });
    window.addEventListener('keydown', keyHandler);

    return () => {
      el.removeEventListener('wheel', wheelHandler);
      window.removeEventListener('keydown', keyHandler);
    };
  });
</script>

<style>
  /* ---------- Desktop: one horizontal strip, all categories inline ---------- */
  .categories-viewport {
    --card-w: clamp(220px, 25vw, 360px);
    --block-gap: 3rem;

    display: flex;
    align-items: flex-start;
    gap: var(--block-gap);
    box-sizing: border-box;
    width: 100%;
    padding: 1rem 1.5rem 0.75rem;

    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #ffffff55 transparent;
  }
  .categories-viewport::-webkit-scrollbar { height: 8px; }
  .categories-viewport::-webkit-scrollbar-thumb { background: #ffffff33; border-radius: 10px; }

  .category-block {
    flex: 0 0 auto;
    position: relative;
  }

  /* Divider sits in the middle of the gap between two categories,
     behind the cards, and never intercepts clicks. */
  .category-block:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(100% + var(--block-gap) / 2);
    width: 2px;
    transform: translateX(-50%);
    border-radius: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.4) 12%,
      rgba(255, 255, 255, 0.4) 88%,
      transparent
    );
    pointer-events: none;
  }

  .category-title {
    font-size: clamp(1.2rem, 2.8vw, 1.5rem);
    margin: 0.5rem 0;
    white-space: nowrap;
  }

  /* Fixed-width grid columns: every browser computes the same width for
     the track (cards x card width + gaps), so a category can never be
     narrower than its cards and spill into the next one. */
  .projects-track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: var(--card-w);
    gap: 2rem;
    width: max-content;
  }

  .project {
    width: var(--card-w);
    min-width: 0;
    box-sizing: border-box;
    margin: 0;
    position: relative;
    cursor: pointer;
    /* center title + image in the slot so spacing between cards is even */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Keep the image component inside its card */
  .project > :global(*) {
    max-width: 100%;
  }

  .project h3 {
    font-size: clamp(0.95rem, 2.2vw, 1.1rem);
    margin: 0 0 0.35rem 0;
    padding: 0 0.25rem;
    max-width: 100%;
    box-sizing: border-box;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ---------- Mobile: stacked categories, grid of cards ---------- */
  @media (max-width: 768px) {
    .categories-viewport {
      flex-direction: column;
      align-items: stretch;
      gap: 2rem;
      padding: 1rem 0.5rem 2rem;
      overflow: visible;
    }

    .category-block:not(:last-child)::after {
      display: none;
    }

    .projects-track {
      grid-auto-flow: row;
      grid-auto-columns: auto;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      width: 100%;
    }

    .project {
      width: 100%;
      background: rgba(123, 47, 242, 0.1);
      border: 2px solid rgba(123, 47, 242, 0.3);
      border-radius: 16px;
      padding: 1rem;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .project:hover {
      background: rgba(123, 47, 242, 0.2);
      border-color: var(--color-primary, #7b2ff2);
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(123, 47, 242, 0.4);
    }

    .project h3 {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
      color: var(--color-secondary, #e9d8ff);
      text-align: center;
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
    }
  }

  @media (max-width: 480px) {
    .projects-track {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>

<div class="categories-viewport" bind:this={scroller}>
  {#each groups.filter((g) => g.items.length) as group (group.id)}
    <section class="category-block">
      <h2 class="category-title">{group.label}</h2>
      <div class="projects-track">
        {#each group.items as project (project.url)}
          <div class="project" on:click={() => goto(project.url)}>
            <h3>{project.title}</h3>
            <TripleImage
              img_url1={project.img1}
              img_url2={project.img2}
              img_url3={project.img3}
              img_height={project.imgHeight}
            />
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>