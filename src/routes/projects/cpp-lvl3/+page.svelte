<script>
  import TripleImage from "../../../lib/components/TripleImage.svelte";

  const IMG_H = "clamp(220px, 50vh, 560px)";

  let overlaySrc = null;
  function openFullscreen(src) { overlaySrc = src; document.body.style.overflow = "hidden"; }
  function closeFullscreen() { overlaySrc = null; document.body.style.overflow = ""; }
</script>

<svelte:head>
  <meta property="og:title" content="C++ Level 3 Project - Stefanos Siathas" />
  <meta property="og:description" content="Explore my C++ Level 3 project, featuring advanced code, libraries, and interactive demos. See the code and results!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://stefanossiathas.com/projects/cpp-lvl3" />
  <meta property="og:image" content="/Prog1.png" />
  <title>C++ Level 3</title>
</svelte:head>

<section class="wrap title">
  <h1>Welcome to my C++ Level 3 Project</h1>
  <p class="intro">
    This contains my C++ Level 3 project, which I’ll continue to expand as I improve. I’ve incorporated numerous libraries and defined a wide range of keywords. Most of my future projects will be hosted here—feel free to explore the code on this
    <a href="https://github.com/Stefanos-gif/Programming/tree/main" target="_blank" rel="noopener noreferrer">Repository</a>!
  </p>
</section>

<section class="wrap arrows">
  <div class="fire-arrow-container">
    <div class="fire-arrow">
      <div class="arrow-body">
        <div class="fire">
          <span class="flame flame1"></span>
          <span class="flame flame2"></span>
          <span class="flame flame3"></span>
          <span class="flame flame4"></span>
          <span class="flame flame5"></span>
          <span class="flame flame6"></span>
          <span class="flame flame7"></span>
          <span class="flame flame8"></span>
        </div>
      </div>
      <div class="arrow-head">
        <div class="fire fire-head">
          <span class="flame flame9"></span>
          <span class="flame flame10"></span>
          <span class="flame flame11"></span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="wrap media">
  <figure class="img-card" aria-label="C++ Level 3 Preview" on:click={() => openFullscreen('/Prog1.png')}>
    <TripleImage
      img_url1={"/Prog1.png"}
      img_url2={"/Prog1.png"}
      img_url3={"/Prog1.png"}
      img_height={IMG_H}
      aspect_ratio={"17/11"}
      alt={"C++ Level 3 Preview"}
    />
  </figure>
</section>

<section class="wrap keywords">
  <div class="letters">
    <span style="animation-delay:.0s">K</span>
    <span style="animation-delay:.05s">e</span>
    <span style="animation-delay:.1s">y</span>
    <span style="animation-delay:.15s">w</span>
    <span style="animation-delay:.2s">o</span>
    <span style="animation-delay:.25s">r</span>
    <span style="animation-delay:.3s">d</span>
    <span style="animation-delay:.35s">s</span>
  </div>
  <div class="decor">
    <span class="line"></span>
    <span class="line"></span>
  </div>
</section>

<section class="wrap note">
  <p>
    Below you’ll find the list of keywords corresponding to the various projects I’ve successfully completed, along with a brief description of each project’s scope and outcomes.
  </p>
</section>

<section class="wrap media">
  <figure class="img-card wide" aria-label="Keywords Overview" on:click={() => openFullscreen('/prog2.png')}>
    <TripleImage
      img_url1={"/prog2.png"}
      img_url2={"/prog2.png"}
      img_url3={"/prog2.png"}
      img_height={IMG_H}
      aspect_ratio={"17/11"}
      alt={"Keywords Overview"}
    />
  </figure>
</section>

{#if overlaySrc}
  <div class="fullscreen-overlay" on:click|self={closeFullscreen}>
    <img src={overlaySrc} alt="Fullscreen" class="fullscreen-img" />
    <button class="close-btn" on:click={closeFullscreen} aria-label="Close fullscreen">&times;</button>
  </div>
{/if}

<style>
  :root{
    --color-primary:#7b2ff2;
    --color-secondary:#e9d8ff;
    --bg:#0b0710;
    --neon-pink:#ff00ff;
  }
  .wrap{
    width:min(100%, 1100px);
    margin-inline:auto;
    padding-inline:clamp(12px,4vw,24px);
  }
  .title{
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:clamp(8px,1.8vw,16px);
    padding-top:clamp(12px,3vw,24px);
  }
  .title h1{
    margin:clamp(12px,2.5vw,24px);
    font-size:clamp(2rem,6vw,3rem);
    transition:transform .3s ease, text-shadow .3s ease;
  }
  .title h1:hover{
    transform:scale(1.12);
    text-decoration:underline solid var(--neon-pink);
    text-shadow:4px 4px 2px var(--color-primary);
  }
  .intro{
    background-color:rgba(97,20,128,.5);
    padding:clamp(10px,2.2vw,20px);
    border-radius:12px;
    border:5px solid var(--color-primary);
    transition:transform .25s ease, background-color .25s ease, color .25s ease, box-shadow .25s ease;
    font-size:clamp(.95rem,2.2vw,1.05rem);
    line-height:1.5;
    width:min(900px,100%);
  }
  .intro:hover{
    transform:translateY(-2px) scale(1.02);
    background-color:rgba(97,18,128,.7);
    color:var(--color-secondary);
    box-shadow:0 0 24px #ff00ff55;
  }
  .intro a{ color:#2eff23; text-decoration:underline; }

  .arrows{
    display:flex;
    justify-content:center;
    align-items:center;
    padding-block:clamp(10px,3vw,20px);
  }
  .fire-arrow-container{
    position:relative;
    width:clamp(8rem,20vw,12rem);
    height:clamp(16rem,40vw,24rem);
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:2;
  }
  .fire-arrow{ display:flex; flex-direction:column; align-items:center; width:100%; height:100%; position:relative; }
  .arrow-body{
    width:2.4rem;
    height:14.4rem;
    border-radius:1.2rem;
    margin-top:4.2rem;
    box-shadow:0 0 28.8px 9.6px #ff47f0aa;
    background:linear-gradient(180deg,#ff47f0 60%,#ffb300 100%);
    animation:arrow-bounce 1s infinite;
    position:relative;
    z-index:2;
    overflow:hidden;
  }
  .arrow-head{
    width:0;
    height:0;
    border-left:4.2rem solid transparent;
    border-right:4.2rem solid transparent;
    border-top:6rem solid #ff47f0;
    margin-top:-0.48rem;
    filter:drop-shadow(0 0 24px #ff47f0cc);
    animation:arrow-bounce 1s infinite;
    z-index:2;
    position:relative;
    overflow:hidden;
  }
  @keyframes arrow-bounce{
    0%,100%{ transform: translateY(0); }
    50%{ transform: translateY(-1.2rem); }
  }
  .fire{ position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:3; }
  .fire-head{ width:200%; left:-50%; top:-30%; height:150%; }
  .flame{
    position:absolute;
    border-radius:50% 50% 50% 50%/60% 60% 40% 40%;
    opacity:.7;
    filter:blur(1.2px);
    background:radial-gradient(ellipse at center,#fff0ff 0%,#c77dff 40%,#7b2ff2 80%,#5f1a8a 100%);
    animation:flame-flicker 1s infinite alternate;
  }
  .flame1{ left:10%; top:10%; width:.5rem; height:1.2rem; animation-delay:0s; }
  .flame2{ left:60%; top:20%; width:.6rem; height:1.3rem; animation-delay:.2s; }
  .flame3{ left:30%; top:40%; width:.7rem; height:1.1rem; animation-delay:.4s; }
  .flame4{ left:70%; top:60%; width:.5rem; height:1.2rem; animation-delay:.1s; }
  .flame5{ left:20%; top:70%; width:.6rem; height:1.1rem; animation-delay:.3s; }
  .flame6{ left:60%; top:80%; width:.5rem; height:1rem; animation-delay:.5s; }
  .flame7{ left:40%; top:85%; width:.7rem; height:1rem; animation-delay:.6s; }
  .flame8{ left:70%; top:90%; width:.5rem; height:1rem; animation-delay:.7s; }
  .flame9{ left:30%; top:60%; width:1.2rem; height:1.6rem; animation-delay:.1s; }
  .flame10{ left:60%; top:70%; width:1.1rem; height:1.5rem; animation-delay:.3s; }
  .flame11{ left:45%; top:80%; width:1.3rem; height:1.7rem; animation-delay:.5s; }
  @keyframes flame-flicker{
    0%{ transform:scaleY(1) scaleX(1); opacity:.9; }
    30%{ transform:scaleY(1.1) scaleX(1.05); opacity:1; }
    60%{ transform:scaleY(.95) scaleX(.95); opacity:.8; }
    100%{ transform:scaleY(1.05) scaleX(1.1); opacity:.85; }
  }

  .media{ display:flex; justify-content:center; padding-block:clamp(8px,3vw,16px); }
  .img-card{ margin:0; display:flex; justify-content:center; width:100%; }
  .img-card :global(img){
    width:min(92vw,980px);
    height:auto;
    border-radius:1rem;
    border:6px solid var(--neon-pink);
    box-shadow:0 0 28px 6px #ff00ff88, 0 0 64px 12px #ff47f155;
    transition:transform 1s ease, box-shadow .7s cubic-bezier(.4,.2,.2,1), border-color .7s cubic-bezier(.4,.2,.2,1);
    background:#111;
  }
  .img-card :global(img):hover{
    transform:scale(1.02);
    box-shadow:0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;
    border-color:var(--neon-pink);
  }
  .img-card.wide{ width:100%; }

  .keywords{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:clamp(8px,2vw,16px);
    padding-block:clamp(8px,3vw,16px);
  }
  .letters{
    display:flex;
    gap:clamp(6px,1.6vw,12px);
    font-weight:900;
    letter-spacing:.08em;
  }
  .letters span{
    font-size:clamp(1.2rem,5vw,2rem);
    color:#ffc2ff;
    background-color:rgba(97,20,128,.5);
    border:1px solid var(--color-primary);
    border-radius:8px;
    padding:.15em .35em;
    animation:bounce 1.1s ease-in-out infinite;
    display:inline-block;
  }
  @keyframes bounce{
    0%,100%{ transform:translateY(0); }
    50%{ transform:translateY(-6%); }
  }
  .decor{ display:flex; gap:12px; }
  .decor .line{
    width:clamp(80px,24vw,220px);
    height:6px;
    background:linear-gradient(90deg,#ff47f0,#7b2ff2);
    border-radius:6px;
    filter:drop-shadow(0 0 12px #c77dff);
  }

  .note{ display:flex; justify-content:center; }
  .note p{
    background-color:rgba(97,20,128,.5);
    padding:clamp(10px,2.2vw,20px);
    border-radius:12px;
    border:5px solid var(--color-primary);
    font-size:clamp(.95rem,2.2vw,1.05rem);
    width:min(900px,100%);
    text-align:center;
  }

  .fullscreen-overlay{
    position:fixed;
    inset:0;
    width:100vw;
    height:100vh;
    background:rgba(20,10,30,.95);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:9999;
    animation:fadeIn .2s;
  }
  .fullscreen-img{
    max-width:90vw;
    max-height:90vh;
    border-radius:1rem;
    box-shadow:0 0 40px #ff47f0cc;
    background:#222;
  }
  .close-btn{
    position:absolute;
    top:2rem;
    right:2rem;
    font-size:3rem;
    background:rgba(0,0,0,.5);
    color:#fff;
    border:none;
    border-radius:50%;
    width:3.5rem;
    height:3.5rem;
    cursor:pointer;
    z-index:10000;
    transition:background .2s;
  }
  .close-btn:hover{ background:#ff47f0; color:#fff; }
  @keyframes fadeIn{ from{opacity:0} to{opacity:1} }

  @media (max-width: 820px){
  .wrap.media{ padding-inline: 0; }
  .img-card{
    width: 100%;
    display: grid;
    place-items: center;
    margin: 0 auto;
    text-align: center;
  }

  .img-card :global(img:nth-of-type(n+2)),
  .img-card :global(picture:nth-of-type(n+2)),
  .img-card :global(.ti-layer:nth-child(n+2)) {
    display: none !important;
  }

  .img-card :global(img),
  .img-card :global(picture),
  .img-card :global(canvas),
  .img-card :global(.triple-image),
  .img-card :global(.ti-wrap),
  .img-card :global(.ti-frame),
  .img-card :global(.ti-inner),
  .img-card :global(.ti-layer:first-child){
    position: static !important;
    transform: none !important;
    left: auto !important; right: auto !important;
    margin: 0 auto !important;
    width: min(96vw, 700px) !important;
    height: auto !important;
    aspect-ratio: auto !important;
    object-fit: contain !important;
  }
}

  @media (prefers-reduced-motion: reduce){
    *{ animation:none !important; transition:none !important; }
  }
</style>
