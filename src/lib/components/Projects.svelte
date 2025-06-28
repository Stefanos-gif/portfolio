<script>
    import TripleImage from "./TripleImage.svelte";
	import { goto } from '$app/navigation';
  
    const projects = [
    { title: "Thalasat", img1: "/paint.jpg", img2: "/prog3.png", img3: "/l5.png", imgHeight: "45vh", category: "industry", url: "/projects/thalasat" },
    { title: "Satfire", img1: "/paint.jpg", img2: "/write.png", img3: "/satfire.png", imgHeight: "45vh", category: "industry", url: "/projects/satfire" },
    { title: "Barbershop Website", img1: "/cppgback.png", img2: "/cppgback.png", img3: "/barbw.png", imgHeight: "45vh", category: "industry", url: "/projects/barbershop-website" },
    { title: "WasteManagement App (in Progress)", img1: "/paint.jpg", img2: "/prog3.png", img3: "/prog3.png", imgHeight: "45vh", category: "industry", url: "/projects/wma" },
    { title: "C++ Level 3", img1: "/prog3.png", img2: "/prog3.png", img3: "/cpplvl3.png", imgHeight: "45vh", category: "cpp", url: "/projects/cpp-lvl3" },
    { title: "C++ Games", img1: "/cppgback.png", img2: "/cppgback.png", img3: "/cppGames.png", imgHeight: "45vh", category: "cpp", url: "/projects/cpp-games" },
    
    // Python projects
    { title: "Python Data Visualizer", img1: "/prog3.png", img2: "/cppgback.png", img3: "/flaskwe.png", imgHeight: "45vh", category: "python", url: "/projects/flask-web-app" },
    { title: "Python Data analysis with pandas", img1: "/prog3.png", img2: "/cppgback.png", img3: "/dataan.png", imgHeight: "45vh", category: "python", url: "/projects/data-analysis-with-pandas" },
    { title: "Python Web Scraper", img1: "/prog3.png", img2: "/cppgback.png", img3: "/webscrap.png", imgHeight: "45vh", category: "python", url: "/projects/python-web-scraper" },
    { title: "AI(pro)", img1: "/prog3.png", img2: "/cppgback.png", img3: "/ai.png", imgHeight: "45vh", category: "debates", url: "/projects/ai-pro" },

    ...Array(18).fill(0).map((_, i) => ({
        title: `Project ${i + 3}(not working)`,
        img1: "/paint.jpg",
        img2: "/write.png",
        img3: "/comp.png",
        imgHeight: "45vh",
        category: "general"
        }))
    ];
</script>

<style>
  .categories-viewport {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 5vh;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  .category-block {
    flex: 0 0 auto;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .category-title {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    padding: 0 1rem;
    position: relative;
    display: inline-block;
    z-index: 3;
  }

  .projects-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    padding: 2.2rem 1.1rem;
  }

  .projects-track {
    display: flex;
    gap: 2rem;
    padding: 0 1rem;
    position: relative;
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

  .project {
    flex: 0 0 25vw;
    box-sizing: border-box;
    margin: 0;
    position: relative;
    z-index: 2;
  }

</style>

<div class="categories-viewport">
  <!-- Industry -->
  <div class="category-block">
    <h2 class="category-title">Industry Projects</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'industry') as project}
          <div on:click={() => { goto(project.url) }} class="project">
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

  <!-- C++ -->
  <div class="category-block">
    <h2 class="category-title">C++ Projects</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'cpp') as project}
          <div on:click={() => { goto(project.url) }} class="project">
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

  <!-- Python -->
  <div class="category-block">
    <h2 class="category-title">Python Projects</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'python') as project}
          <div on:click={() => { goto(project.url) }} class="project">
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

  <!-- Debates -->
  <div class="category-block">
    <h2 class="category-title">Debates</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'debates') as project}
          <div on:click={() => { goto(project.url) }} class="project">
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

  <!-- General -->
  <div class="category-block">
    <h2 class="category-title">Other Projects</h2>
    <div class="projects-viewport">
      <div class="projects-track">
        {#each projects.filter(p => p.category === 'general') as project}
          <div class="project">
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
