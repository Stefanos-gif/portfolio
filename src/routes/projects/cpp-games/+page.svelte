<script>
  import TripleImage from "../../../lib/components/TripleImage.svelte";
  const IMG_TIC_H = "clamp(220px, 51vh, 560px)";
  const IMG_SCGAME_H = "clamp(220px, 51vh, 560px)";
  let overlaySrc = null;
  function openFullscreen(src) { overlaySrc = src; document.body.style.overflow = "hidden"; }
  function closeFullscreen() { overlaySrc = null; document.body.style.overflow = ""; }
</script>

<svelte:head>
  <title>C++ Games | Stefanos Portfolio</title>
  <meta property="og:title" content="C++ Games | Stefanos Portfolio" />
  <meta property="og:description" content="Explore Stefanos' collection of C++ games, including a text-based maze and a two-player Tic-Tac-Toe. Each project demonstrates dynamic data structures, user input, and classic game logic in C++." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://stefanosgif.vercel.app/projects/cpp-games" />
  <meta property="og:image" content="https://stefanosgif.vercel.app/tic.png" />
  <meta name="description" content="Explore Stefanos' collection of C++ games, including a text-based maze and a two-player Tic-Tac-Toe. Each project demonstrates dynamic data structures, user input, and classic game logic in C++." />
</svelte:head>

<section class="wrap title">
  <h1>Welcome to my C++ Games</h1>
  <p class="lead">
    This contains my C++ Games, which I’ll continue to expand as I improve. I love making simple little games, so feel free to explore the code on the links that I will share for each one.
  </p>
</section>

<section class="wrap game">
  <div class="badge">
    <span class="num">1</span>
    <div class="fire">
      <span class="flame f1"></span><span class="flame f2"></span><span class="flame f3"></span><span class="flame f4"></span><span class="flame f5"></span>
    </div>
  </div>
  <div class="osc">
    <div class="osc-body"></div><div class="osc-head"></div>
  </div>
  <h2 class="game-title">Tic Tac Toe</h2>
  <p class="desc">
    An interactive, text-based maze navigation program demonstrating structured data, user input handling, and simple collision detection:
    <br /><br />
    <strong>Maze Representation</strong><br />
    The maze is a 10×10 grid stored as a vector&lt;vector&lt;char&gt;&gt;, where '#' denotes walls and ' ' open paths.
    <br /><br />
    <strong>Player Struct</strong><br />
    A Player struct holds x and y coordinates, initialized at (1,1).
    <br /><br />
    <strong>Rendering Function</strong><br />
    displayMaze() iterates over the grid, drawing either the maze cell or a 'P' at the player’s current position.
    <br /><br />
    <strong>Movement Logic</strong><br />
    movePlayer(direction) computes tentative coordinates based on w/a/s/d input, checks for open space, and updates the player’s position if the target cell isn’t a wall.
    <br /><br />
    <strong>Main Loop</strong><br />
    Continuously renders the maze, prompts for direction, applies movement, and clears the console for real-time navigation.
    <br /><br />
    This project highlights dynamic data structures, control flow, and basic game-loop architecture in C++. Find
    <a href="https://github.com/Stefanos-gif/tic-tac-toe-game/tree/main" target="_blank" rel="noopener noreferrer">Here</a>!
  </p>
  <figure class="img-card" on:click={() => openFullscreen('/tic.png')}>
    <TripleImage
      img_url1={"/tic.png"}
      img_url2={"/tic.png"}
      img_url3={"/tic.png"}
      img_height={IMG_TIC_H}
      aspect_ratio={"994/859"}
      alt={"Tic Tac Toe"}
    />
  </figure>
</section>

<section class="wrap game">
  <div class="badge">
    <span class="num">2</span>
    <div class="fire">
      <span class="flame f1"></span><span class="flame f2"></span><span class="flame f3"></span><span class="flame f4"></span><span class="flame f5"></span>
    </div>
  </div>
  <div class="osc osc-2">
    <div class="osc-body"></div><div class="osc-head"></div>
  </div>
  <h2 class="game-title">Simple Console Game</h2>
  <p class="desc">
    A compact, two-player Tic-Tac-Toe game implemented with clear, modular functions and robust input handling:
    <br /><br />
    <strong>Board Representation</strong><br />
    A 3×3 char array labeled ‘1’–‘9’ lets players pick moves by slot number. Each turn redraws the grid via drawBoard().
    <br /><br />
    <strong>Core Logic</strong><br />
    placeMarker(slot): Converts a slot to row/column indices, checks occupancy, and places the current marker.
    <br />
    winner(): Scans rows, columns, and diagonals for three identical markers, returning the winning player or 0.
    <br />
    swapPlayerAndMarker(): Toggles between Player 1 and Player 2 along with their markers (X/O).
    <br /><br />
    <strong>Game Flow</strong><br />
    In game(), Player 1 first selects X or O. The loop runs up to nine moves, prompting for valid slots, rejecting invalid or occupied entries, and ending early on a win. Finally, it declares the winner or a tie.
    <br /><br />
    This project showcases procedural design, input validation, and user interaction in C++. Find
    <a href="https://github.com/Stefanos-gif/simple-console-game" target="_blank" rel="noopener noreferrer">Here</a>!
  </p>
  <figure class="img-card" on:click={() => openFullscreen('/scgame.png')}>
    <TripleImage
      img_url1={"/scgame.png"}
      img_url2={"/scgame.png"}
      img_url3={"/scgame.png"}
      img_height={IMG_SCGAME_H}
      aspect_ratio={"988/910"}
      alt={"Simple Console Game"}
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
    --neon-pink:#ff00ff;
  }
  .wrap{
    width:min(100%,1100px);
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
    transform:scale(1.1);
    text-decoration:underline solid var(--neon-pink);
    text-shadow:4px 4px 2px var(--color-primary);
  }
  .lead{
    margin:1rem;
    background-color:rgba(97,20,128,.5);
    padding:1.5rem;
    border-radius:7px;
    border:5px solid var(--color-primary);
    font-size:clamp(1rem,2.5vw,1.2rem);
    width:90%;
    max-width:900px;
    line-height:1.6;
    transition:transform .25s ease, background-color .25s ease, color .25s ease, box-shadow .25s ease;
    text-align:center;
  }
  .lead:hover{
    transform:translateY(-2px) scale(1.02);
    background-color:rgba(97,18,128,.7);
    color:var(--color-secondary);
    box-shadow:0 0 24px #ff00ff55;
  }

  .game{
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:clamp(14px,3vw,22px);
    padding-block:clamp(18px,4vw,28px);
  }
  .game-title{
    margin:0 0 .25rem 0;
    font-size:clamp(1.5rem,4vw,2rem);
    background-color:rgba(97,20,128,.5);
    padding:1rem;
    border-radius:7px;
  }
  .desc{
    margin:0;
    font-size:clamp(.95rem,2.5vw,1.05rem);
    background-color:rgba(97,20,128,.5);
    padding:1rem;
    border-radius:7px;
    line-height:1.6;
    width:90%;
    max-width:900px;
    transition:transform .25s ease, background-color .25s ease, color .25s ease;
  }
  .desc a{ color:#2eff23; text-decoration:underline; }
  .desc:hover{ transform:translateY(-1px); background-color:rgba(97,18,128,.6); color:var(--color-secondary); }

  .img-card{
    margin:0;
    display:flex;
    justify-content:center;
    width:90%;
    max-width:980px;
    cursor:pointer;
  }
  .img-card :global(img){
    width:100%;
    height:auto;
    border-radius:1rem;
    border:6px solid var(--neon-pink);
    box-shadow:0 0 28px 6px #ff00ff88, 0 0 64px 12px #ff47f155;
    background:#111;
    transition:transform 1s ease, box-shadow .7s cubic-bezier(.4,.2,.2,1), border-color .7s cubic-bezier(.4,.2,.2,1);
  }
  .img-card :global(img):hover{
    transform:scale(1.02);
    box-shadow:0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;
    border-color:var(--neon-pink);
  }

  .badge{
    position:absolute;
    left:clamp(-8px, -3vw, -24px);
    top:clamp(8px,2vw,18px);
    width:4rem;
    height:6rem;
    display:none;
    align-items:flex-end;
    justify-content:center;
    pointer-events:none;
  }
  .num{
    font-size:5rem;
    font-weight:800;
    color:#fff0ff;
    text-shadow:0 0 18px #ff47f0, 0 0 8px #7b2ff2, 2px 2px 0 #5f1a8a;
    filter:drop-shadow(0 0 10px #ff47f0cc);
    letter-spacing:-.2rem;
    position:relative;
    z-index:2;
    font-family:system-ui,Segoe UI,Arial,sans-serif;
    line-height:1;
  }
  .fire{
    position:absolute;
    bottom:.5rem;
    left:50%;
    transform:translateX(-50%);
    width:3.2rem;
    height:2.2rem;
    pointer-events:none;
    z-index:1;
  }
  .flame{
    position:absolute;
    border-radius:50% 50% 50% 50%/60% 60% 40% 40%;
    opacity:.7;
    filter:blur(1.1px);
    background:radial-gradient(ellipse at center,#fff0ff 0%,#c77dff 40%,#7b2ff2 80%,#5f1a8a 100%);
    animation:nflame 1.1s infinite alternate;
  }
  .f1{ left:10%; bottom:0; width:.7rem; height:1.5rem; animation-delay:0s; }
  .f2{ left:40%; bottom:.2rem; width:.8rem; height:1.7rem; animation-delay:.2s; }
  .f3{ left:70%; bottom:.1rem; width:.7rem; height:1.4rem; animation-delay:.4s; }
  .f4{ left:25%; bottom:.5rem; width:.5rem; height:1.1rem; animation-delay:.3s; }
  .f5{ left:60%; bottom:.6rem; width:.6rem; height:1.2rem; animation-delay:.5s; }
  @keyframes nflame{
    0%{ transform:scaleY(1) scaleX(1) translateY(0); opacity:.85; }
    30%{ transform:scaleY(1.1) scaleX(1.05) translateY(-.1rem); opacity:1; }
    60%{ transform:scaleY(.95) scaleX(.95) translateY(-.2rem); opacity:.7; }
    100%{ transform:scaleY(1.08) scaleX(1.1) translateY(-.3rem); opacity:.8; }
  }

  .osc{
    position:absolute;
    left:clamp(-4px, -1.5vw, -12px);
    top:50%;
    transform:translate(-100%,-50%);
    display:none;
    align-items:center;
    gap:.2rem;
    animation:osc1 1.2s ease-in-out infinite alternate;
    pointer-events:none;
  }
  .osc-body{
    height:.6rem;
    width:11vw;
    min-width:80px;
    max-width:160px;
    background:linear-gradient(90deg,var(--color-primary),#ff47f0,#2eff23,var(--color-secondary));
    border-radius:.3rem;
    box-shadow:0 0 8px #ff47f088;
  }
  .osc-head{
    width:0; height:0;
    border-top:1.2rem solid transparent;
    border-bottom:1.2rem solid transparent;
    border-left:2.2rem solid var(--color-primary);
    margin-left:-.36rem;
    filter:drop-shadow(0 0 6px #47ff50cc);
  }
  .osc-2{ animation:osc2 1.2s ease-in-out infinite alternate; }
  @keyframes osc1{ from{ transform:translate(-100%,-50%) } to{ transform:translate(calc(-100% - 12px),-50%) } }
  @keyframes osc2{ from{ transform:translate(-100%,-50%) } to{ transform:translate(calc(-100% - 16px),-50%) } }

  @media (min-width: 900px){
    .badge{ display:flex; }
    .osc{ display:flex; }
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
  @media (prefers-reduced-motion: reduce){
    *{ animation:none !important; transition:none !important; }
  }
</style>
