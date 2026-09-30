<script>
  import { onMount } from 'svelte';

  // Lines typed once, in order. They never change after being typed.
  const lines = ['Hi, my name is', 'Stefanos Siathas', "I'm a"];
  // Descriptions that cycle forever after the lines above are typed.
  const words = ['software engineer', 'Student', 'Developer', 'STEM Ambassador'];

  const TYPE_MS = 100;     // delay per typed character
  const ERASE_MS = 50;     // delay per erased character
  const GAP_MS = 300;      // short pause between lines / words
  const PAUSE_MS = 3000;   // how long a finished word stays on screen

  let typed = ['', '', ''];
  let word = '';
  let active = 0;          // 0–2 = typing that line, 3 = cycling words, -1 = no cursor
  let blinking = false;

  onMount(() => {
    // Respect reduced-motion: show everything at once and just swap the word.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      typed = [...lines];
      word = words[0];
      active = -1;
      let w = 0;
      const id = setInterval(() => {
        w = (w + 1) % words.length;
        word = words[w];
      }, PAUSE_MS);
      return () => clearInterval(id);
    }

    const timers = new Set();
    const sleep = (ms) =>
      new Promise((resolve) => {
        const t = setTimeout(() => {
          timers.delete(t);
          resolve();
        }, ms);
        timers.add(t);
      });

    async function run() {
      // 1. Type each fixed line once, one after another.
      for (let i = 0; i < lines.length; i++) {
        active = i;
        for (let c = 1; c <= lines[i].length; c++) {
          typed[i] = lines[i].slice(0, c);
          await sleep(TYPE_MS);
        }
        await sleep(GAP_MS);
      }

      // 2. Cycle through the descriptions. Only the word changes from here on.
      active = 3;
      for (let w = 0; ; w = (w + 1) % words.length) {
        const target = words[w];
        for (let c = 1; c <= target.length; c++) {
          word = target.slice(0, c);
          await sleep(TYPE_MS);
        }
        blinking = true;
        await sleep(PAUSE_MS);
        blinking = false;
        for (let c = target.length - 1; c >= 0; c--) {
          word = target.slice(0, c);
          await sleep(ERASE_MS);
        }
        await sleep(GAP_MS);
      }
    }

    run();

    // Clearing pending timers stops the loop when the page is left.
    return () => timers.forEach(clearTimeout);
  });
</script>

<div id="title-block">
  <!-- Full text for search engines and screen readers (always in the server HTML) -->
  <div class="sr-only">
    <p>Hi, my name is</p>
    <h1>Stefanos Siathas</h1>
    <p>I'm a software engineer, student, developer and STEM Ambassador.</p>
  </div>

  <!-- Visual typing animation -->
  <div id="typed" aria-hidden="true">
    <p id="hi-text">{typed[0] || '\u00a0'}{#if active === 0}<span class="cursor primary">&nbsp;</span>{/if}</p>

    <p id="name-text">{typed[1] || '\u00a0'}{#if active === 1}<span class="cursor">&nbsp;</span>{/if}</p>

    <p id="sub-name-text">{typed[2] || '\u00a0'}{typed[2] === lines[2] ? ' ' : ''}<span id="type-text">{word}</span>{#if active === 2}<span class="cursor">&nbsp;</span>{:else if active === 3}<span class="cursor primary" class:blink={blinking}>&nbsp;</span>{/if}</p>
  </div>

  <div id="img-hover" aria-hidden="true">
    <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait-dark2" alt="" />
    <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait-dark" alt="" />
    <img src="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" id="portrait" alt="Portrait of Stefanos Siathas" />
  </div>
</div>

<style>
  #title-block {
    text-align: left;
    position: fixed;
    top: 30%;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
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
  .cursor.primary { background-color: var(--color-primary); }
  .cursor.blink { animation: blink 1s step-end infinite; }

  @keyframes blink {
    50% { opacity: 0; }
  }

  #portrait, #portrait-dark, #portrait-dark2 {
    position: fixed;
    left: 65vw;
    top: 20vh;
    width: 25vw;
    border-radius: 7px;
    border: solid 5px var(--color-primary);
    transition: all 0.08s ease-in-out;
  }

  #img-hover:hover #portrait       { transform: scale(1.05) rotate(10deg); }
  #img-hover:hover #portrait-dark  { transform: scale(1.05); filter: brightness(0.5); }
  #img-hover:hover #portrait-dark2 { transform: scale(1.05) rotate(-10deg); filter: brightness(0.25); }

  @media (max-width: 1100px) {
    #name-text { font-size: clamp(3rem, 7vw, 4.2rem); }
    #sub-name-text { font-size: clamp(1.6rem, 3.6vw, 2.2rem); }
    #portrait, #portrait-dark, #portrait-dark2 {
      left: 62vw;
      width: 28vw;
    }
  }

  @media (max-width: 820px) {
    #title-block {
      position: static;
      text-align: center;
      margin: 0 auto;
      padding: clamp(96px, 14vh, 140px) 20px 48px;
      max-inline-size: 32ch;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 100%;
      max-width: 100vw;
      box-sizing: border-box;
    }

    /* The lines now sit inside #typed, so give them the same spacing as before */
    #typed {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    #img-hover {
      position: static;
      width: auto;
      max-width: calc(100vw - 32px);
      margin: 12px auto 0;
      display: block;
    }

    #portrait-dark, #portrait-dark2 { display: none !important; }

    #portrait {
      position: static !important;
      display: block;
      width: min(92vw, 380px) !important;
      height: auto !important;
      margin: 0 auto;
      border-radius: 16px;
      border: 4px solid var(--color-primary);
      box-shadow: 0 0 20px #7b2ff255;
      transform: none !important;
      filter: none !important;
    }

    #hi-text       { font-size: clamp(1.05rem, 5vw, 1.35rem); margin: 0; }
    #name-text     { font-size: clamp(2.3rem, 12vw, 3.4rem); line-height: 1.1; margin: 0; }
    #sub-name-text { font-size: clamp(1.1rem, 6vw, 1.7rem); line-height: 1.3; margin: 0; }
    .cursor { width: 2px; }
  }

  @media (max-width: 420px) {
    #title-block { max-inline-size: 28ch; padding: clamp(84px, 12vh, 120px) 14px 40px; }
    #portrait    { width: min(94vw, 320px) !important; }
    #hi-text       { font-size: clamp(1rem, 4.5vw, 1.2rem); }
    #name-text     { font-size: clamp(2.2rem, 11vw, 3rem); }
    #sub-name-text { font-size: clamp(1.1rem, 5.5vw, 1.6rem); }
  }

  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
</style>