<script>
  import TripleImage from "./TripleImage.svelte";
  import { goto } from '$app/navigation';

  const IMG_H = 'clamp(200px, 45vh, 360px)';

  const projects = [
    { title: "Thalasat", img1: "/prog3.png", img2: "/prog3.png", img3: "/l5.png", imgHeight: IMG_H, category: "industry", url: "/projects/thalasat" },
    { title: "Satfire", img1: "/prog3.png", img2: "/prog3.png", img3: "/satfire.png", imgHeight: IMG_H, category: "industry", url: "/projects/satfire" },
    { title: "Barbershop Website", img1: "/prog3.png", img2: "/prog3.png", img3: "/barbw.png", imgHeight: IMG_H, category: "industry", url: "/projects/barbershop-website" },
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
    { title: "Solar System", img1: "/prog3.png", img2: "/prog3.png", img3: "/solar-system-preview.png", imgHeight: IMG_H, category: "svelte", url: "/projects/solar-system" },

  ];
</script>

<style>
  .categories-viewport {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 2rem;
    padding: 1rem 1rem 0.5rem;
    margin: 0;

    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }
  .categories-viewport::-webkit-scrollbar { height: 8px; }
  .categories-viewport::-webkit-scrollbar-thumb { background:#ffffff33; border-radius: 10px; }

  @media (max-width: 768px) {
    .categories-viewport {
      flex-direction: column;
      overflow-x: visible;
      overflow-y: visible;
      gap: 2rem;
      padding: 1rem 0.5rem 2rem;
    }
  }

  .category-block {
    flex: 0 0 auto;
    box-sizing: border-box;
    position: relative;
    scroll-snap-align: start;
    min-width: fit-content;
    max-width: min(92vw, 1200px);
  }

  @media (max-width: 768px) {
    .category-block {
      flex: 1 1 100%;
      min-width: 100%;
      max-width: 100%;
      margin-bottom: 1rem;
    }
  }

  .category-title {
    font-size: clamp(1.2rem, 2.8vw, 1.5rem);
    margin: 0.5rem 0;
    padding: 0 1rem;
    position: relative;
    display: inline-block;
    z-index: 3;
    white-space: nowrap;
  }

  .category-title:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 1vh;
    left: -50%;
    transform: translateX(-50%);
    width: 3px;
    height: 60vh;
    background: #888888;
    z-index: 1;
    border-radius: 3px;
  }

  .projects-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    padding: 1.2rem 0.6rem 0.6rem;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
  }

  .projects-track {
    display: flex;
    gap: 2rem;
    padding: 0 0.6rem 0.6rem;
    position: relative;
    width: fit-content;
    min-width: 100%;
  }

  @media (max-width: 768px) {
    .projects-viewport {
      overflow-x: visible;
      overflow-y: visible;
      padding: 1rem 0;
    }

    .projects-track {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      padding: 0;
      width: 100%;
      min-width: auto;
    }
  }

  @media (max-width: 480px) {
    .projects-track {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .project {
    flex: 0 0 clamp(220px, 25vw, 360px);
    box-sizing: border-box;
    margin: 0;
    position: relative;
    z-index: 2;
    scroll-snap-align: start;
    cursor: pointer;
  }

  .project h3{
    font-size: clamp(0.95rem, 2.2vw, 1.1rem);
    margin: 0 0 0.35rem 0;
    padding: 0 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    .category-title:not(:last-child)::after { display: none; }
    
    .project {
      flex-basis: auto;
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
      border-color: var(--color-primary);
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(123, 47, 242, 0.4);
    }

    .project h3 {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
      color: var(--color-secondary);
      text-align: center;
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
    }
  }
</style>

<div class="categories-viewport">
  <div class="category-block">
    <h2 class="category-title">Industry Projects</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'industry') as project}
          <div on:click={() => goto(project.url)} class="project">
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
    </div>
  </div>

  <div class="category-block">
    <h2 class="category-title">C++ Projects</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'cpp') as project}
          <div on:click={() => goto(project.url)} class="project">
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
    </div>
  </div>

  <div class="category-block">
    <h2 class="category-title">Python Projects</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'python') as project}
          <div on:click={() => goto(project.url)} class="project">
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
    </div>
  </div>

  <div class="category-block">
    <h2 class="category-title">Debates</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'debates') as project}
          <div on:click={() => goto(project.url)} class="project">
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
    </div>
  </div>

  <div class="category-block">
    <h2 class="category-title">SvelteKit Projects</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'svelte') as project}
          <div on:click={() => goto(project.url)} class="project">
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
    </div>
  </div>
</div>
