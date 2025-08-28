<svelte:head>
  <meta property="og:title"       content="Stefanos Siathas" />
  <meta property="og:description" content="My portfolio!!!" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://stefanossiathas.com" />
  <meta property="og:image"       content="/favicon.ico" />
  <title>Stefanos Siathas</title>
</svelte:head>

<script>
  import { onDestroy, onMount } from 'svelte';

  const words = ['software engineer', 'student', 'developer','upcoming STEM ambassador'];
  const baseText = ['Hi, my name is', 'Stefanos Siathas', "I'm a", words[0]];
  const text = ['', '', '', ''];
  const cycleIdx = baseText.length - 1;
  const typeMillis = 100;
  const pauseMillis = 3000;
  const blinkMillis = 500;

  let timeout;
  let wordIdx = 0;
  let cursorVisible = true;

  function type(lineIdx = 0, charIdx = 0) {
    if (charIdx < baseText[lineIdx].length) {
      text[lineIdx] += baseText[lineIdx][charIdx];
      timeout = setTimeout(() => type(lineIdx, charIdx + 1), typeMillis);
    } else if (lineIdx !== cycleIdx) {
      timeout = setTimeout(() => type(lineIdx + 1), typeMillis);
    } else {
      timeout = setTimeout(() => {
        cycleType();
        cursorVisible = true;
      }, pauseMillis);
      for (let i = 1; i <= pauseMillis / blinkMillis; i++) {
        setTimeout(() => (cursorVisible = i % 2 === 0), i * blinkMillis);
      }
    }
  }

  function untype() {
    if (text[cycleIdx].length > 0) {
      text[cycleIdx] = text[cycleIdx].slice(0, -1);
      timeout = setTimeout(untype, typeMillis);
    } else {
      cycleType();
    }
  }

  function cycleType() {
    if (text[cycleIdx].length > 0) {
      untype();
    } else {
      wordIdx = (wordIdx + 1) % words.length;
      baseText[cycleIdx] = words[wordIdx];
      type(cycleIdx);
    }
  }

  onMount(type);
  onDestroy(() => clearTimeout(timeout));
</script>

<div id="title-block">
  <p id="hi-text">
    {text[0]}
    {#if text[0] !== baseText[0]}
      <span id="colored-cursor" class="cursor">&nbsp;</span>
    {/if}
  </p>

  <p id="name-text">
    {text[1]}
    {#if text[1] !== baseText[1] && text[0] === baseText[0]}
      <span class="cursor">&nbsp;</span>
    {/if}
  </p>

  <p id="sub-name-text">
    {text[2]}
    <span id="type-text">{text[3]}</span>
    {#if text[1] === baseText[1] && text[2] === baseText[2] && cursorVisible}
      <span id="colored-cursor" class="cursor">&nbsp;</span>
    {:else if text[1] === baseText[1] && cursorVisible}
      <span class="cursor">&nbsp;</span>
    {/if}
  </p>

  <div id="img-hover" aria-hidden="true">
    <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait-dark2" alt="" />
    <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait-dark"  alt="" />
    <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait"       alt="Portrait of Stefanos Siathas" />
  </div>
</div>

<style>
  /* ===== Desktop / Default ===== */
  #title-block {
    text-align: left;
    position: fixed;
    top: 30%;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  #hi-text {
    font-size: 2em;
    font-weight: bold;
    color: var(--color-primary);
    margin: 0;
  }

  #name-text {
    font-size: 6em;
    font-weight: bold;
    color: var(--color-secondary);
    margin: 0;
  }

  #sub-name-text {
    font-size: 3em;
    font-weight: bold;
    color: var(--color-secondary);
    margin: 0;
  }

  #type-text { color: var(--color-primary); }

  .cursor {
    display: inline-block;
    background-color: var(--color-secondary);
    margin-left: 0.1rem;
    width: 3px;
  }
  #colored-cursor { background-color: var(--color-primary); }

  #portrait, #portrait-dark, #portrait-dark2 {
    position: fixed;
    left: 65vw;
    top: 20vh;
    width: 25vw;
    border-radius: 7px;
    border: solid 5px var(--color-primary);
    transition: all 0.08s ease-in-out;
  }

  /* Desktop hover effects */
  #img-hover:hover #portrait      { transform: scale(1.05) rotate(10deg); }
  #img-hover:hover #portrait-dark { transform: scale(1.05); filter: brightness(0.5); }
  #img-hover:hover #portrait-dark2{ transform: scale(1.05) rotate(-10deg); filter: brightness(0.25); }

  /* ===== Tablet tweaks ===== */
  @media (max-width: 1100px){
    #name-text { font-size: clamp(3rem, 7vw, 4.2rem); }
    #sub-name-text { font-size: clamp(1.6rem, 3.6vw, 2.2rem); }
    #portrait, #portrait-dark, #portrait-dark2 {
      left: 62vw;
      width: 28vw;
    }
  }

  /* ===== Phone: stacked, centered text; image under text with layered cards ===== */
  @media (max-width: 820px){
    /* Title area becomes normal-flow, centered */
    #title-block{
      position: static; /* cancel desktop fixed */
      text-align: center;
      margin: 0 auto;
      padding: clamp(40px, 8vh, 72px) clamp(12px, 4vw, 24px) 0;
      max-inline-size: 28ch;
      text-wrap: balance;
    }

    /* Friendlier fluid type on phones */
    #hi-text       { font-size: clamp(1rem, 4.5vw, 1.25rem); }
    #name-text     { font-size: clamp(2rem, 10vw, 2.75rem); line-height: 1.08; letter-spacing: -0.01em; }
    #sub-name-text { font-size: clamp(1rem, 5.5vw, 1.5rem); line-height: 1.22; }
    .cursor { width: 2px; }

    /* Image stack container under text */
    #img-hover{
      position: relative;
      margin: clamp(10px, 4vw, 20px) auto 0;
      width: min(68vw, 280px);
      aspect-ratio: 4/5;
    }

    /* Override desktop fixed positioning for images and stack them */
    #img-hover img{
      position: absolute; inset: 0;
      width: 100%; height: 100%; object-fit: cover;
      border-radius: 12px;
      border: 5px solid var(--color-primary);
      box-shadow: 0 0 18px #7b2ff244;
      transition: transform .25s ease, filter .25s ease, box-shadow .25s ease;
      left: auto; top: auto; /* ensure desktop coords are canceled */
    }

    /* Layering/brightness for the “stacked cards” look */
    #portrait-dark2 { transform: rotate(-5deg) translate(-3%, -2%); filter: brightness(.5);   z-index: 1; }
    #portrait-dark  { transform: translate(0, 0);                       filter: brightness(.85); z-index: 2; }
    #portrait       { transform: rotate(5deg) translate(3%, 2%);                              z-index: 3; }

    /* Hover polish on devices that support hover */
    @media (hover:hover){
      #img-hover:hover img             { transform: scale(1.03); }
      #img-hover:hover #portrait-dark2 { transform: scale(1.03) rotate(-7deg) translate(-5%, -3%); }
      #img-hover:hover #portrait-dark  { transform: scale(1.05); filter: brightness(1); box-shadow: 0 0 24px #ff00ff66; }
      #img-hover:hover #portrait       { transform: scale(1.03) rotate(7deg) translate(5%, 3%); }
    }
  }

  /* Extra-small phones */
  @media (max-width: 420px){
    #title-block { max-inline-size: 25ch; }
    #img-hover   { width: min(76vw, 240px); }
  }

  /* Accessibility: respect reduced motion */
  @media (prefers-reduced-motion: reduce){
    *{ animation: none !important; transition: none !important; }
  }
</style>
