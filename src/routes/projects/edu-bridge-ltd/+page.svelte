<script lang="ts">
  const links = {
    demo: "#",
    source: "#"
  };
</script>

<svelte:head>
  <title>Edu Bridge LTD — Industry Project | Stefanos Siathas</title>
  <meta name="description" content="Educational technology platform bridging traditional learning and modern digital education" />
  <meta property="og:title" content="Edu Bridge LTD — Industry Project" />
  <meta property="og:description" content="Educational technology platform showcasing advanced web development capabilities" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://stefanossiathas.com/projects/edu-bridge-ltd" />
  <meta property="og:image" content="/edu-bridge-preview.png" />
</svelte:head>

<h1 class="project-title">Edu Bridge LTD</h1>

<div id="container">
  <p id="first-p">
    Edu Bridge LTD is an educational technology platform designed to bridge the gap between traditional learning and modern digital education.
    <br>
    This project showcases advanced web development and educational content management capabilities.
  </p>
  <p class="pilot-note">
    <b>Status:</b> Project Template - Content Coming Soon
  </p>
</div>

<div id="features">
  <h2>Description</h2>
  <p>
    Edu Bridge LTD represents a comprehensive educational technology solution designed to modernize learning experiences. 
    This platform combines intuitive user interfaces with powerful backend systems to deliver seamless educational content management and delivery.
  </p>
  <h3>Technologies Used</h3>
  <ul>
    <li><strong>Frontend Framework</strong> - Modern JavaScript/TypeScript</li>
    <li><strong>Backend API</strong> - Node.js/Express or similar</li>
    <li><strong>Database</strong> - PostgreSQL/MongoDB</li>
    <li><strong>Authentication</strong> - JWT/OAuth integration</li>
  </ul>
</div>

<div id="problem-solution" class="flex-row">
  <div class="problem-box">
    <h3>The Problem</h3>
    <p>
      Traditional educational systems often struggle to adapt to modern digital learning expectations, creating gaps between institutional capabilities and student needs.
    </p>
  </div>
  <div class="solution-box">
    <h3>My Solution</h3>
    <p>
      A comprehensive educational technology platform that bridges traditional and digital learning through intuitive interfaces, robust content management, and scalable architecture.
    </p>
  </div>
</div>

<div id="core-features">
  <h2>Core Features</h2>
  <ul>
    <li><b>Content Management:</b> Comprehensive system for educational content creation, organization, and delivery</li>
    <li><b>User Dashboard:</b> Personalized learning interfaces for students, educators, and administrators</li>
    <li><b>Progress Tracking:</b> Advanced analytics and reporting for learning progress and outcomes</li>
    <li><b>Interactive Learning:</b> Engaging educational tools and multimedia content integration</li>
  </ul>
</div>

<div id="security">
  <h2>Security & Privacy</h2>
  <ul>
    <li>Encrypted data transmission and storage for all user information</li>
    <li>Role-based access control ensuring appropriate content visibility</li>
    <li>GDPR compliance with comprehensive privacy protection measures</li>
  </ul>
</div>

<div id="architecture">
  <h2>Architecture</h2>
  <ul>
    <li><b>Frontend:</b> React/SvelteKit with TypeScript</li>
    <li><b>Auth:</b> JWT-based authentication with OAuth integration</li>
    <li><b>Data:</b> PostgreSQL with Redis caching layer</li>
    <li><b>Hosting:</b> Cloud deployment with CDN integration</li>
  </ul>
</div>

<div id="coming-soon">
  <h2>Screenshots Coming Soon</h2>
  <p>Project screenshots will be added once the development is complete.</p>
</div>

<div id="results-roadmap" class="flex-row">
  <div class="results-box">
    <h3>What's built</h3>
    <ul>
      <li>Core platform architecture and design</li>
      <li>User authentication and authorization system</li>
      <li>Content management foundation</li>
    </ul>
  </div>
  <div class="roadmap-box">
    <h3>What's next</h3>
    <ul>
      <li>Advanced analytics and reporting dashboard</li>
      <li>Mobile application development</li>
      <li>AI-powered learning recommendations</li>
    </ul>
  </div>
</div>

<div id="cta-links">
  <button class="cta-btn disabled" disabled>Demo Coming Soon</button>
  <button class="cta-btn disabled" disabled>Source Coming Soon</button>
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
  #features, #core-features, #security, #architecture, #coming-soon {
    margin: 2.5rem auto 1.5rem auto;
    max-width: 900px;
    background: rgba(97,20,128,0.35);
    border-radius: 14px;
    border: 2px solid var(--color-primary, #c77dff);
    box-shadow: 0 0 16px #c77dff33;
    padding: 1.5rem 2vw;
  }
  #features h2, #core-features h2, #security h2, #architecture h2, #coming-soon h2 {
    color: #fff;
    text-shadow: 0 0 8px #c77dff;
    margin-bottom: 0.7rem;
  }
  
  #coming-soon {
    text-align: center;
  }
  
  #coming-soon p {
    color: #ddd;
    font-style: italic;
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
  
  .cta-btn.disabled {
    background: linear-gradient(90deg, #666 40%, #888 100%);
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .cta-btn.disabled:hover {
    transform: none;
    box-shadow: 0 0 24px #66666688;
    opacity: 0.6;
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