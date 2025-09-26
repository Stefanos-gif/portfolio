<script>
  import ArrowDown from '$lib/ArrowDown.svelte';

  const slides = [
    { src: '/pres1.png', alt: 'Presentation page 1' },
    { src: '/pres2.png', alt: 'Presentation page 2' },
    { src: '/pres3.png', alt: 'Presentation page 3' },
    { src: '/pres4.png', alt: 'Presentation page 4' },
    { src: '/pres5.png', alt: 'Presentation page 5' },
    { src: '/pres6.png', alt: 'Presentation page 6' }
  ];

  const arrowColor = '#fa43f1';
  const arrowDuration = 1;
  const arrowSize = 200; 
</script>

<svelte:head>
  <meta property="og:title"       content="Satfire Project - Stefanos Siathas" />
  <meta property="og:description" content="Satfire: 1st place winner in the Cassini Camp Hackathon. Learn about our project to protect Cyprus and beyond!" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://stefanossiathas.com/projects/satfire" />
  <meta property="og:image"       content="/pres1.png" />
  <title>Satfire</title>
</svelte:head>

<section id="tit" class="container">
  <h1>Satfire</h1>
</section>

<section id="boxes" class="container">
  <p>
    1st place winner in the Cassini Camp Hackathon was a project me and the Satfire team are working on that
    plans on preventing, protecting and helping the citizens of Cyprus and in the future to expand
    internationally! You can see the pitch that won first place under
  </p>
</section>

<section class="slides container">
  {#each slides as s, i}
    <div class="arrow-wrap" aria-hidden="true">
      <div class="arrow-scale">
        <ArrowDown size={arrowSize} color={arrowColor} duration={arrowDuration} />
      </div>
    </div>

    <figure class="img-card">
      <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
    </figure>
  {/each}
</section>

<style>
  :root{
    --color-primary: #7b2ff2;      
    --color-secondary: #e9d8ff;
    --bg: #0b0710;

    --neon-pink: #ff00ff;
    --arrow-color: #fa43f1;
  }

  .container{
    width: min(100%, 1100px);
    margin-inline: auto;
    padding-inline: clamp(12px, 4vw, 24px);
  }

  #tit{
    display:flex; flex-direction:column; align-items:center; text-align:center;
  }
  #tit h1{
    margin: clamp(16px, 3vw, 2.5vw);
    font-size: clamp(2rem, 6vw, 3rem);
    transition: transform .3s ease, text-shadow .3s ease;
  }
  #tit h1:hover{
    transform: scale(1.12);
    text-decoration: underline solid var(--neon-pink);
    text-shadow: 4px 4px 2px var(--color-primary);
  }

  #boxes{
    display:flex; flex-direction:column; align-items:center; text-align:center;
  }
  #boxes p{
    background-color: rgba(97, 20, 128, 0.5);
    padding: clamp(10px, 2.2vw, 20px);
    border-radius: 12px;
    border: 5px solid var(--color-primary);
    transition: transform .25s ease, background-color .25s ease, color .25s ease, box-shadow .25s ease;
    font-size: clamp(0.95rem, 2.2vw, 1.05rem);
    line-height: 1.5;
    width: min(900px, 100%);
  }
  #boxes p:hover{
    transform: translateY(-2px) scale(1.02);
    background-color: rgba(97, 18, 128, 0.7);
    color: var(--color-secondary);
    box-shadow: 0 0 24px #ff00ff55;
  }

  .slides{
    display:flex;
    flex-direction:column;
    gap: clamp(16px, 4vw, 28px);
    padding-block: clamp(12px, 4vw, 24px);
  }

  .arrow-wrap{
    display:flex; justify-content:center; align-items:center;
  }

  .arrow-scale{
    transform-origin: center;
    transform: scale(1);
    will-change: transform;
    transition: transform .2s ease;
  }
  @media (max-width: 768px){
    .arrow-scale{ transform: scale(0.7); }
  }
  @media (max-width: 480px){
    .arrow-scale{ transform: scale(0.6); }
  }

  .img-card{
    margin: 0;
    display:flex;
    justify-content:center;
  }
  .img-card img{
    width: min(92vw, 980px);
    height: auto;
    border-radius: 1rem;
    border: 6px solid var(--neon-pink);
    box-shadow: 0 0 28px 6px #ff00ff88, 0 0 64px 12px #fa43f155;
    transition: transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);
    background: #111;
  }
  .img-card img:hover{
    transform: scale(1.02);
    box-shadow: 0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;
    border-color: var(--neon-pink);
  }

  @media (prefers-reduced-motion: reduce){
    *{ animation: none !important; transition: none !important; }
  }
</style>
