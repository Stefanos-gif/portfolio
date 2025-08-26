<script>
  const DEMO_URL = "https://meteor-counter-7kn5-dun.vercel.app/";
  const REPO_URL = "https://github.com/Stefanos-gif/Meteor-Counter";
</script>

<svelte:head>
  <title>Meteor Counter — Stefanos Siathas</title>
  <meta name="description" content="Meteor Counter: enter your name, meteors seen, and minutes observed to see meteors/hour and a live leaderboard. Built by Stefanos." />
  <meta property="og:title" content="Meteor Counter — Stefanos Siathas" />
  <meta property="og:description" content="Enter meteors and minutes, get meteors/hour, and compare on a live leaderboard." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://stefanossiathas.com/projects/meteor-counter" />
  <meta property="og:image" content="/meteor-counter-og.png" />
</svelte:head>

<section class="wrap title">
  <h1>Meteor Counter</h1>
  <p class="lead">
    Track your observing rate: enter your name, meteors seen, and minutes observed. See your meteors/hour, compare to an expected 60/hr baseline, and check the live leaderboard.
  </p>
  <div class="cta">
    <a class="btn" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Open Live App</a>
    <a class="btn ghost" href={REPO_URL} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
</section>

<section class="wrap how">
  <div class="card">
    <h3>How it works</h3>
    <ol>
      <li>Enter your name, meteors counted, and minutes observed.</li>
      <li>The app computes your meteors/hour and compares to an expected 60/hr line.</li>
      <li>Leaderboard sorts by rate; green is above average, red is below.</li>
    </ol>
  </div>
  <div class="card">
    <h3>Why it’s handy</h3>
    <p>Simple inputs, quick rates, crowd leaderboard, and a clear baseline make it great for group meteor watches and outreach nights.</p>
  </div>
</section>

<section class="wrap embed">
  <div class="frame-wrap">
    <iframe src={DEMO_URL} title="Meteor Counter live demo" loading="lazy" referrerpolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
  </div>
  <p class="fallback">
    If the embed doesn’t load, <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">open the live app in a new tab</a>.
  </p>
</section>

<section class="wrap tech">
  <div class="card">
    <h3>Tech</h3>
    <ul>
      <li>Svelte + TypeScript</li>
      <li>Deployed on Vercel</li>
    </ul>
    <div class="mini-cta">
      <a class="btn ghost" href={REPO_URL} target="_blank" rel="noopener noreferrer">Source Code</a>
    </div>
  </div>
</section>

<style>
  :root{
    --color-primary:#7b2ff2;
    --color-secondary:#e9d8ff;
    --neon:#ff00ff;
  }
  .wrap{ width:min(100%,1100px); margin-inline:auto; padding-inline:clamp(12px,4vw,24px); }
  .title{ display:flex; flex-direction:column; align-items:center; text-align:center; gap:12px; padding-block:clamp(12px,4vw,24px); }
  .title h1{ font-size:clamp(2rem,6vw,3rem); margin:8px 0; text-shadow:4px 4px 2px var(--color-primary); }
  .lead{
    background-color:rgba(97,20,128,.5);
    padding:clamp(12px,2.4vw,18px);
    border:5px solid var(--color-primary);
    border-radius:12px;
    width:min(900px,100%);
    line-height:1.55;
  }
  .cta{ display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }
  .btn{
    border:2px solid var(--color-primary);
    background:linear-gradient(90deg,#c77dff22,#ff47f022);
    color:#fff;
    padding:.7rem 1rem; border-radius:10px; font-weight:800; letter-spacing:.02em; cursor:pointer;
    transition:transform .15s ease, box-shadow .2s ease, background .2s ease;
    text-decoration:none;
  }
  .btn:hover{ transform:translateY(-1px); box-shadow:0 0 18px #ff00ff55; }
  .btn.ghost{ background:transparent; }

  .how{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:clamp(12px,2vw,20px); }
  .card{
    background:linear-gradient(180deg, rgba(22,11,34,.9), rgba(15,6,25,.95));
    border:5px solid var(--color-primary); border-radius:12px; padding:14px;
    box-shadow:0 0 24px #7b2ff244;
  }
  .card h3{ margin:.2rem 0 .6rem 0; }
  .card ol{ padding-left:1.2rem; margin:0; }

  .embed{ display:flex; flex-direction:column; align-items:center; gap:10px; padding-block:clamp(12px,4vw,24px); }
  .frame-wrap{
    width:100%;
    border:6px solid var(--neon);
    border-radius:16px;
    box-shadow:0 0 28px 6px #ff00ff88, 0 0 64px 12px #ff47f155;
    overflow:hidden;
    background:#0b0710;
  }
  .frame-wrap iframe{
    display:block;
    width:100%;
    height:clamp(720px, 120vh, 1200px);
    border:0;
  }
  .fallback{ opacity:.9; }
  .fallback a{ color:#2eff23; text-decoration:underline; }

  .tech{ padding-block:clamp(12px,4vw,24px); }
  .mini-cta{ margin-top:10px; }

  @media (prefers-reduced-motion: reduce){
    *{ animation:none !important; transition:none !important; }
  }
</style>
