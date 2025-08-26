<script>
  import { onMount, onDestroy } from "svelte";

  const words = ['software engineer','student','developer','upcoming STEM ambassador'];
  const baseText = ['Hi, my name is','Stefanos Siathas',"I'm a", words[0]];
  const text = ['', '', '', ''];
  const cycleIdx = 3, typeMillis = 100, pauseMillis = 3000, blinkMillis = 500;
  let timeout, wordIdx = 0, cursorVisible = true;

  function type(lineIdx = 0, charIdx = 0){
    if (charIdx < baseText[lineIdx].length){
      text[lineIdx] += baseText[lineIdx][charIdx];
      timeout = setTimeout(() => type(lineIdx, charIdx + 1), typeMillis);
    } else if (lineIdx !== cycleIdx){
      timeout = setTimeout(() => type(lineIdx + 1), typeMillis);
    } else {
      timeout = setTimeout(() => { cycleType(); cursorVisible = true; }, pauseMillis);
      for (let i = 1; i <= pauseMillis / blinkMillis; i++){
        setTimeout(() => (cursorVisible = i % 2 === 0), i * blinkMillis);
      }
    }
  }
  function untype(){
    if (text[cycleIdx].length){
      text[cycleIdx] = text[cycleIdx].slice(0, -1);
      timeout = setTimeout(untype, typeMillis);
    } else cycleType();
  }
  function cycleType(){
    if (text[cycleIdx].length) untype();
    else { wordIdx = (wordIdx + 1) % words.length; baseText[cycleIdx] = words[wordIdx]; type(cycleIdx); }
  }

  onMount(type);
  onDestroy(() => clearTimeout(timeout));
</script>

<div class="hero">
  <div id="title-block">
    <p id="hi-text">
      {text[0]}
      {#if text[0] !== baseText[0]}<span id="colored-cursor" class="cursor">&nbsp;</span>{/if}
    </p>

    <h1 id="name-text">
      {text[1]}
      {#if text[1] !== baseText[1] && text[0] === baseText[0]}<span class="cursor">&nbsp;</span>{/if}
    </h1>

    <p id="sub-name-text">
      {text[2]} <span id="type-text">{text[3]}</span>
      {#if text[1] === baseText[1] && text[2] === baseText[2] && cursorVisible}
        <span id="colored-cursor" class="cursor">&nbsp;</span>
      {:else if text[1] === baseText[1] && cursorVisible}
        <span class="cursor">&nbsp;</span>
      {/if}
    </p>
  </div>

  <div class="portrait-stack" aria-hidden="true">
    <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" class="portrait back" />
    <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" class="portrait mid" />
    <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" class="portrait top" />
  </div>
</div>

<style>
  .hero{
    /* Text column grows; photo column caps so text never feels squeezed */
    display:grid;
    grid-template-columns: minmax(28rem, 1fr) min(34vw, 320px);
    align-items:center;
    column-gap:clamp(12px,5vw,28px);
    width:min(100%, 1200px);
    margin-inline:auto;
    padding-inline:clamp(12px,4vw,24px);
    padding-top:clamp(64px, 10vh, 96px);
  }

  #title-block{
    text-align:left;
    max-inline-size: 34ch;        /* readable line length */
    text-wrap: balance;           /* nicer breaks (progressive enhancement) */
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  #hi-text{
    font-size: clamp(1rem, 2.6vw, 1.4rem);
    font-weight: 800;
    color: var(--color-primary);
    margin: 0 0 .35rem 0;
  }
  #name-text{
    font-size: clamp(2rem, 6.2vw, 3.6rem); /* gentler scaling than before */
    font-weight: 900;
    color: var(--color-secondary);
    margin: 0 0 .25rem 0;
    line-height: 1.05;
    letter-spacing: -0.01em;
  }
  #sub-name-text{
    font-size: clamp(1rem, 3.6vw, 1.8rem);
    font-weight: 800;
    color: var(--color-secondary);
    margin: .2rem 0 0 0;
    line-height: 1.22;
    word-break: break-word; /* long roles won’t overflow */
  }
  #type-text{ color: var(--color-primary); }

  .cursor{ display:inline-block; background: var(--color-secondary); margin-left:.1rem; width:3px; }
  #colored-cursor{ background: var(--color-primary); }

  .portrait-stack{
    position: relative;
    width: 100%;
    max-width: 320px;            /* photo column cap matches grid column */
    aspect-ratio: 4/5;
    justify-self:center;
  }
  .portrait{
    position:absolute; inset:0;
    width:100%; height:100%; object-fit:cover;
    border-radius: 12px; border: 5px solid var(--color-primary);
    box-shadow: 0 0 18px #7b2ff244;
    transition: transform .25s ease, filter .25s ease, box-shadow .25s ease;
  }
  .portrait.back{ transform: rotate(-5deg) translate(-3%, -2%); filter: brightness(.5); }
  .portrait.mid{ transform: translate(0,0); filter: brightness(.85); }
  .portrait.top{ transform: rotate(5deg) translate(3%, 2%); }

  @media (hover:hover){
    .portrait-stack:hover .portrait{ transform: scale(1.03); }
    .portrait-stack:hover .portrait.back{ transform: scale(1.03) rotate(-7deg) translate(-5%, -3%); }
    .portrait-stack:hover .portrait.mid{ transform: scale(1.05); filter:brightness(1); box-shadow:0 0 24px #ff00ff66; }
    .portrait-stack:hover .portrait.top{ transform: scale(1.03) rotate(7deg) translate(5%, 3%); }
  }

  /* Tablet: give photo a little more room, keep text comfortable */
  @media (max-width: 1100px){
    .hero{
      grid-template-columns: minmax(22rem, 1fr) min(38vw, 300px);
    }
    #title-block{ max-inline-size: 32ch; }
  }

  /* Phones: single column; image under text; still balanced lines */
  @media (max-width: 820px){
    .hero{
      grid-template-columns: 1fr;
      row-gap: clamp(10px, 4vw, 20px);
      padding-top:clamp(40px, 8vh, 72px);
    }
    #title-block{
      text-align:center;
      justify-self:center;
      max-inline-size: 28ch;
    }
    .cursor{ width:2px; }
    .portrait-stack{
      order: 2;
      max-width: min(68vw, 280px);
    }
  }

  @media (max-width: 420px){
    #title-block{ max-inline-size: 25ch; }
    .portrait-stack{ max-width: min(76vw, 240px); }
  }

  @media (prefers-reduced-motion: reduce){
    *{ animation:none !important; transition:none !important; }
  }
</style>
