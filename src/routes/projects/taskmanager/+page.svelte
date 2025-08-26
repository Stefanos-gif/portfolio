<script lang="ts">
  const links = {
    demo: "https://task-manager-gray-delta.vercel.app",
    source: "https://github.com/Stefanos-gif/Task-Manager"
  };

  // Fullscreen logic for screenshots
  let showFullscreen = false;
  let fullscreenImg = '';

  function openFullscreen(img: string) {
    fullscreenImg = img;
    showFullscreen = true;
    document.body.style.overflow = 'hidden';
  }
  function closeFullscreen() {
    showFullscreen = false;
    fullscreenImg = '';
    document.body.style.overflow = '';
  }
</script>

<svelte:head>
  <title>Stemfreak Task Manager — Industry Project | Stefanos Siathas</title>
  <meta name="description" content="A student- and teacher-friendly task manager built with SvelteKit + TypeScript, Prisma + PostgreSQL, Lucia auth (Argon2), deployed on Vercel." />
  <meta property="og:title" content="Stemfreak Task Manager — Industry Project" />
  <meta property="og:description" content="Simple tasks for classes, clubs, and personal use. Secure auth, fast UI, mobile-ready." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://stefanossiathas.com/projects/taskmanager" />
  <meta property="og:image" content="/taskmanager-preview.png" />
</svelte:head>

<h1 class="project-title">Stemfreak Task Manager</h1>

<div id="container">
  <p id="first-p">
    This <a
      href={links.demo}
      target="_blank"
      rel="noopener noreferrer"
      style="color: #2eff23;"
    >task manager app</a> is designed for students, teachers, and anyone who needs to stay organized. 
    <br>
    <a
      href={links.source}
      target="_blank"
      rel="noopener noreferrer"
      style="color: #2eff23;"
    >View the source code</a>
  </p>
  <p class="pilot-note">
    <b>Status:</b> Currently in pilot testing at Stemfreak. We are expecting lots of users by the end of the year!
  </p>
</div>

<div id="features">
  <h2>Description</h2>
  <p>
    A clean, secure task app for students, teachers, and busy humans—create tasks, add notes, check them off, and stay organized across devices.
  </p>
  <h3>Technologies Used</h3>
  <ul>
    <li><strong>SvelteKit</strong> + <strong>TypeScript</strong></li>
    <li><strong>Prisma</strong> ORM + <strong>PostgreSQL</strong></li>
    <li><strong>Lucia</strong> (Argon2) authentication</li>
    <li><strong>Vercel</strong> for hosting</li>
  </ul>
</div>

<div id="problem-solution" class="flex-row">
  <div class="problem-box">
    <h3>The Problem</h3>
    <p>
      Tasks end up scattered across chats, paper, and random notes. Classes and teams need a simple, shared place to capture and finish work.
    </p>
  </div>
  <div class="solution-box">
    <h3>My Solution</h3>
    <p>
      A focused web app: fast CRUD, clean UI, and reliable authentication—so students and teachers can add items quickly and check them off without friction.
    </p>
  </div>
</div>

<div id="core-features">
  <h2>Core Features</h2>
  <ul>
    <li><b>Create & manage tasks:</b> Add titles and optional notes; edit or delete anytime.</li>
    <li><b>Mark complete:</b> Track progress with a single click and keep history.</li>
    <li><b>Secure sign-up / login:</b> Lucia sessions with Argon2 password hashing.</li>
    <li><b>Mobile-ready:</b> Responsive layout and fast interactions.</li>
  </ul>
</div>

<div id="security">
  <h2>Security & Privacy</h2>
  <ul>
    <li>Password hashing with Argon2; session cookies are HTTP-only.</li>
    <li>All traffic over HTTPS on Vercel; database hosted on Prisma Cloud PostgreSQL.</li>
    <li>Only essential data stored (no analytics/ads by default).</li>
  </ul>
</div>

<div id="architecture">
  <h2>Architecture</h2>
  <ul>
    <li><b>Frontend:</b> SvelteKit + TypeScript</li>
    <li><b>Auth:</b> Lucia (Argon2) with secure cookie sessions</li>
    <li><b>Data:</b> Prisma ORM + PostgreSQL (Prisma Cloud)</li>
    <li><b>Hosting:</b> Vercel</li>
  </ul>
</div>

<div id="screenshots">
  <h2 class="screenshots-title">Screenshots</h2>
  <div class="screenshots-row">
    <img src="/taskmanager1.png" alt="Task Manager Screenshot 1" class="screenshot-img" on:click={() => openFullscreen('/taskmanager1.png')} tabindex="0" role="button" aria-label="Open screenshot 1 fullscreen"/>
    <img src="/taskmanager2.png" alt="Task Manager Screenshot 2" class="screenshot-img" on:click={() => openFullscreen('/taskmanager2.png')} tabindex="0" role="button" aria-label="Open screenshot 2 fullscreen"/>
  </div>
  <div class="screenshots-row">
    <img src="/taskmanager3.png" alt="Task Manager Screenshot 3" class="screenshot-img" on:click={() => openFullscreen('/taskmanager3.png')} tabindex="0" role="button" aria-label="Open screenshot 3 fullscreen"/>
    <img src="/taskmanager4.png" alt="Task Manager Screenshot 4" class="screenshot-img" on:click={() => openFullscreen('/taskmanager4.png')} tabindex="0" role="button" aria-label="Open screenshot 4 fullscreen"/>
  </div>
</div>

{#if showFullscreen}
  <div class="fullscreen-overlay" on:click={closeFullscreen} tabindex="0">
    <img src={fullscreenImg} alt="Fullscreen Screenshot" class="fullscreen-img" />
    <button class="close-fullscreen" on:click|stopPropagation={closeFullscreen} aria-label="Close fullscreen">&times;</button>
  </div>
{/if}

<div id="results-roadmap" class="flex-row">
  <div class="results-box">
    <h3>What’s built</h3>
    <ul>
      <li>Authenticated CRUD for tasks</li>
      <li>Session management with Lucia</li>
      <li>Responsive UI and deploy on Vercel</li>
    </ul>
  </div>
  <div class="roadmap-box">
    <h3>What’s next</h3>
    <ul>
      <li>Due dates, priorities, and tags</li>
      <li>Class templates & shared lists (teacher → class)</li>
      <li>Attachments & reminders</li>
      <li>Admin dashboard for school-wide overview</li>
    </ul>
  </div>
</div>

<div id="cta-links">
  <a href={links.demo} class="cta-btn" target="_blank" rel="noopener noreferrer">Try the app</a>
  <a href={links.source} class="cta-btn" target="_blank" rel="noopener noreferrer">View the code</a>
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
  .pilot-note {
    margin-top: 1.2rem;
    color: #ff47f0;
    font-size: 1.1rem;
    font-weight: bold;
    text-shadow: 0 0 8px #c77dff;
  }
  #features, #core-features, #security, #architecture {
    margin: 2.5rem auto 1.5rem auto;
    max-width: 900px;
    background: rgba(97,20,128,0.35);
    border-radius: 14px;
    border: 2px solid var(--color-primary, #c77dff);
    box-shadow: 0 0 16px #c77dff33;
    padding: 1.5rem 2vw;
  }
  #features h2, #core-features h2, #security h2, #architecture h2, #screenshots h2 {
    color: #fff;
    text-shadow: 0 0 8px #c77dff;
    margin-bottom: 0.7rem;
  }
  #problem-solution, #results-roadmap {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin: 2.5rem auto 1.5rem auto;
    max-width: 900px;
  }
  .problem-box, .solution-box, .results-box, .roadmap-box {
    flex: 1 1 320px;
    background: rgba(97,20,128,0.25);
    border-radius: 14px;
    border: 2px solid var(--color-primary, #c77dff);
    box-shadow: 0 0 12px #c77dff22;
    padding: 1.2rem 1.2rem;
    min-width: 260px;
  }
  .problem-box h3, .solution-box h3, .results-box h3, .roadmap-box h3 {
    color: #ff47f0;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  .screenshots-title {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #fff;
    text-shadow: 0 0 8px #c77dff;
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .screenshots-row {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  .screenshot-img {
    width: 100%;
    max-width: 380px;
    aspect-ratio: 16/9;
    border-radius: 12px;
    border: 2px solid #c77dff;
    box-shadow: 0 0 24px #c77dff55;
    background: #181028;
    object-fit: cover;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }
  .screenshot-img:hover {
    transform: scale(1.04);
    box-shadow: 0 0 48px #ff47f0cc;
    border-color: #ff47f0;
  }
  .fullscreen-overlay {
    position: fixed;
    inset: 0;
    background: rgba(20, 0, 30, 0.95);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s;
  }
  .fullscreen-img {
    max-width: 90vw;
    max-height: 85vh;
    border-radius: 18px;
    border: 4px solid #ff47f0;
    box-shadow: 0 0 64px #c77dffcc, 0 0 24px #ff47f0cc;
    background: #181028;
    object-fit: contain;
    animation: popIn 0.3s;
  }
  .close-fullscreen {
    position: fixed;
    top: 2.5rem;
    right: 3.5rem;
    font-size: 3rem;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1100;
    text-shadow: 0 0 16px #ff47f0, 0 0 8px #c77dff;
    transition: color 0.2s;
  }
  .close-fullscreen:hover {
    color: #ff47f0;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes popIn {
    from { transform: scale(0.92); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  #cta-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin: 2.5rem auto 2rem auto;
  }
  .cta-btn {
    background: linear-gradient(90deg, #c77dff 40%, #ff47f0 100%);
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 0.8rem 2.2rem;
    box-shadow: 0 0 24px #c77dff88;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
    opacity: 0.95;
  }
  .cta-btn:hover {
    transform: scale(1.07);
    box-shadow: 0 0 48px #ff47f0cc;
    opacity: 1;
  }
  ul {
    margin: 0.5rem 0 0.5rem 1.2rem;
    padding: 0;
    color: #fff;
  }
  li {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 900px) {
    #container, #features, #core-features, #security, #architecture, #problem-solution, #results-roadmap {
      max-width: 98vw;
      padding: 1rem 2vw;
      margin: 1.5rem auto;
    }
    .screenshots-row {
      flex-direction: column;
      align-items: center;
    }
    .screenshot-img {
      max-width: 98vw;
    }
    .close-fullscreen {
      top: 1rem;
      right: 1.5rem;
      font-size: 2.2rem;
    }
    .project-title {
      font-size: 2.5rem;
      margin-top: 1.5rem;
    }
    #cta-links {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    #container, #features, #core-features, #security, #architecture, #problem-solution, #results-roadmap {
      padding: 0.75rem 1rem;
      margin: 1rem auto;
    }
    .project-title {
      font-size: 2rem;
      margin-top: 1rem;
    }
    #first-p {
      font-size: 1rem;
    }
    .pilot-note {
      font-size: 1rem;
    }
    .close-fullscreen {
      top: 0.5rem;
      right: 1rem;
      font-size: 2rem;
    }
  }
</style>
