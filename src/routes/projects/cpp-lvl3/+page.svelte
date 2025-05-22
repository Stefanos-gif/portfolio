<script>
    import TripleImage from "../../../lib/components/TripleImage.svelte";
    // Removed FontAwesome imports

    let showFullscreen = false;
    // Add a new state variable for Prog1 fullscreen
    let showFullscreenProg1 = false;

    function openFullscreen() {
        showFullscreen = true;
    }
    function closeFullscreen() {
        showFullscreen = false;
    }
    // Add open/close functions for Prog1
    function openFullscreenProg1() {
        showFullscreenProg1 = true;
    }
    function closeFullscreenProg1() {
        showFullscreenProg1 = false;
    }
</script>

<div id ="container">
    <h1>Welcome to my C++ Level 3 Project</h1>
    <p id="first-p">This contains my C++ Level 3 project, which I’ll continue to expand as I improve. I’ve incorporated numerous libraries and defined a wide range of keywords. Most of my future projects will be hosted here—feel free to explore the code on this <a
    href="https://github.com/Stefanos-gif/Programming/tree/main"target="_blank"
    rel="noopener noreferrer"
    style="color: #2eff23;"
  > Repository</a>!</p>
</div>

<!-- Animated Arrow with Purple Fire Effect -->
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

<!-- Second Arrow, rotated -40deg -->
<div class="fire-arrow-container fire-arrow-rotated">
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

<!-- Add on:click to Prog1 image container -->
<div id="img-hover" on:click={openFullscreenProg1} style="cursor: pointer;">
    <TripleImage
    img_url1={"/Prog1.png"}
    img_url2={"/Prog1.png"}
    img_url3={"/Prog1.png"}
    img_height={"50vh"}
    aspect_ratio={"17/11"}
    />
</div>
<!-- Fullscreen overlay for Prog1 -->
{#if showFullscreenProg1}
    <div class="fullscreen-overlay" on:click|self={closeFullscreenProg1}>
        <img src="/Prog1.png" alt="prog1" class="fullscreen-img" />
        <button class="close-btn" on:click={closeFullscreenProg1} aria-label="Close fullscreen">&times;</button>
    </div>
{/if}

<div id="container">
    <p id="second-p">K</p>
    <p id="second-p">e</p>
    <p id="second-p">y</p>
    <p id="second-p">w</p>
    <p id="second-p">o</p>
    <p id="second-p">r</p>
    <p id="second-p">d</p>
    <p id="second-p">s</p>
</div>
<div id="container">
    <p id="third-p">__________</p>
    <p id="fourth-p">__________</p>
</div>

<div id="container">
    <p id="other-p">Below you’ll find the list of keywords corresponding to the various projects I’ve successfully completed, along with a brief description of each project’s scope and outcomes.</p>

</div>

<div id="img-hover2" on:click={openFullscreen} style="cursor: pointer;">
    <TripleImage
    img_url1={"/prog2.png"}
    img_url2={"/prog2.png"}
    img_url3={"/prog2.png"}
    img_height={"50vh"}
    aspect_ratio={"17/11"}
    />
</div>

{#if showFullscreen}
    <div class="fullscreen-overlay" on:click|self={closeFullscreen}>
        <img src="/prog2.png" alt="prog2" class="fullscreen-img" />
        <button class="close-btn" on:click={closeFullscreen} aria-label="Close fullscreen">&times;</button>
    </div>
{/if}

<style>
    /* Remove old arrow icon */
    :global(.arrow-icon) { display: none; }

    /* Fire Arrow Styles */
    .fire-arrow-container {
        position: relative;
        /* Change width/height to adjust overall arrow size */
        width: 12rem;    /* 10rem * 1.2 */
        height: 24rem;   /* 20rem * 1.2 */
        /* Change margin to adjust vertical position */
        margin: 9.6rem auto 2.4rem auto; /* 8rem * 1.2, 2rem * 1.2 */
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
        left: -23rem;
        top: -3rem;
    }
    .fire-arrow-rotated {
        transform: rotate(-40deg);
        left: -10rem; /* adjust as needed for placement */
        top: 5rem;    /* adjust as needed for placement */
    }
    .fire-arrow {
        display: flex;
        flex-direction: column;
        align-items: center; 
        width: 100%;
        height: 100%;
        position: relative;
    }
    .fire-arrow .arrow-body {
        width: 2.4rem;
        height: 14.4rem;
        border-radius: 1.2rem;
        margin-top: 4.2rem;
        box-shadow: 0 0 28.8px 9.6px #ff47f0aa;
        background: linear-gradient(180deg, #ff47f0 60%, #ffb300 100%);
        animation: arrow-bounce 1s infinite;
        position: relative;
        z-index: 2;
        overflow: hidden;
    }
    .fire-arrow .arrow-head {
        width: 0;
        height: 0;
        /* Change border sizes to adjust arrow head size */
        border-left: 4.2rem solid transparent;  /* 3.5rem * 1.2 */
        border-right: 4.2rem solid transparent; /* 3.5rem * 1.2 */
        border-top: 6rem solid #ff47f0;         /* 5rem * 1.2 */
        /* Change margin-top to adjust head position relative to body */
        margin-top: -0.48rem;                    /* -0.4rem * 1.2 */
        filter: drop-shadow(0 0 24px #ff47f0cc); /* 20px * 1.2 */
        animation: arrow-bounce 1s infinite;
        z-index: 2;
        position: relative;
        overflow: hidden; /* CLIP flames inside */
    }
    @keyframes arrow-bounce {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-1.2rem); }
    }

    /* Purple Fire effect */
    .fire {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 3;
    }
    .fire-head {
        width: 200%;
        left: -50%;
        top: -30%;
        height: 150%;
    }

    .flame {
        position: absolute;
        border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
        opacity: 0.7;
        filter: blur(1.2px);
        background: radial-gradient(ellipse at center, #fff0ff 0%, #c77dff 40%, #7b2ff2 80%, #5f1a8a 100%);
        animation: flame-flicker 1s infinite alternate;
    }

    /* Flames inside the arrow body */
    .flame1 { left: 10%; top: 10%; width: 0.5rem; height: 1.2rem; animation-delay: 0s; }
    .flame2 { left: 60%; top: 20%; width: 0.6rem; height: 1.3rem; animation-delay: 0.2s; }
    .flame3 { left: 30%; top: 40%; width: 0.7rem; height: 1.1rem; animation-delay: 0.4s; }
    .flame4 { left: 70%; top: 60%; width: 0.5rem; height: 1.2rem; animation-delay: 0.1s; }
    .flame5 { left: 20%; top: 70%; width: 0.6rem; height: 1.1rem; animation-delay: 0.3s; }
    .flame6 { left: 60%; top: 80%; width: 0.5rem; height: 1.0rem; animation-delay: 0.5s; }
    .flame7 { left: 40%; top: 85%; width: 0.7rem; height: 1.0rem; animation-delay: 0.6s; }
    .flame8 { left: 70%; top: 90%; width: 0.5rem; height: 1.0rem; animation-delay: 0.7s; }

    /* Flames inside the arrow head */
    .flame9  { left: 30%; top: 60%; width: 1.2rem; height: 1.6rem; animation-delay: 0.1s; }
    .flame10 { left: 60%; top: 70%; width: 1.1rem; height: 1.5rem; animation-delay: 0.3s; }
    .flame11 { left: 45%; top: 80%; width: 1.3rem; height: 1.7rem; animation-delay: 0.5s; }

    @keyframes flame-flicker {
        0% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
        30% { transform: scaleY(1.1) scaleX(1.05); opacity: 1; }
        60% { transform: scaleY(0.95) scaleX(0.95); opacity: 0.8; }
        100% { transform: scaleY(1.05) scaleX(1.1); opacity: 0.85; }
    }

    #container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    #container h1 {
        margin: 2.5vw;
        transition: all 0.3s ease-in-out;
    }

    #container h1:hover {
        transform: scale(1.2);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
    }

    #container #first-p {
        position: absolute;       /*pin relative to the viewport*/
        top:  21.68vh;             /* vertical center of the screen */
        left: 10rem;            /* moved much more to the left */
        /* margin: 0; */
        
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1vw;
        border-radius: 7px;
        border: solid 5px var(--color-primary);
        transition: all 0.3s ease-in-out;
        font-size: 2vh;
        width: 40vw;
    }
    #container #first-p:hover {
        /* position: fixed;       pin relative to the viewport */

        transform: scale(1.05);
        background-color: rgb(97, 20, 128, 0.7);
        color: var(--color-secondary);
        left: 10rem;    /* moved much more to the left */
    }
    #container #second-p {
        font-size: 2vh;
        color:  #ffc2ff;
        margin: 0;
        padding: 0;
        top: -96vh;
        left: -28rem;    /* moved much more to the left */
        position: relative;       /*pin relative to the viewport*/
        background-color: rgba(97, 20, 128, 0.5);
        border: solid 1px var(--color-primary);
        
        animation: bounce 1s ease-in-out infinite;
    }
    #container #third-p {
        font-size: 2vh;
        color:  #ffc2ff;
        margin: 0;
        padding: 0;
        top: -124.01vh;
        left: -25.11rem;    /* moved much more to the left */
        position: relative;       /*pin relative to the viewport*/
        transform: rotate(-20deg);
        
        animation: bounce 1s ease-in-out infinite;
    }
    #container #fourth-p {
        font-size: 2vh;
        color:  #ffc2ff;
        margin: 0;
        padding: 0;
        top: -101.8vh;
        left: -25.11rem;    /* moved much more to the left */
        position: relative;       /*pin relative to the viewport*/
        transform: rotate(80deg);

        animation: bounce 1s ease-in-out infinite;
    }
    #container #other-p {
        position: absolute;       /*pin relative to the viewport*/
        top:  100vh;             /* vertical center of the screen */
        left: 10rem;            /* moved much more to the left */
        /* margin: 0; */
        
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1vw;
        border-radius: 7px;
        border: solid 5px var(--color-primary);
        transition: all 0.3s ease-in-out;
        font-size: 2vh;
        width: 40vw;
    }
    #container #other-p:hover {
        /* position: fixed;       pin relative to the viewport */
        

        transform: scale(1.05);
        background-color: rgb(97, 20, 128, 0.7);
        color: var(--color-secondary);
        left: 10rem;    /* moved much more to the left */
    }
    /* #img-hover {
        position: relative;
        height: 50vh;
        aspect-ratio: 11/11;
        left : 50vw;
        bottom: 20vh;
    } */
    #img-hover {
        position: absolute;
        top: 48.5%;
        left: 75vw;            /* halfway into the right-half (50vw + 50vw/2) */
        transform: translate(-50%, -50%);
        
        /* your existing styles */
        height: 50vh;
        aspect-ratio: 11/11;
    }
    #img-hover2 {
        position: absolute;
        top: 140VH;
        left: 75vw;            /* halfway into the right-half (50vw + 50vw/2) */
        transform: translate(-50%, -50%);
        
        /* your existing styles */

        aspect-ratio: 1713/841;
    }
    
    #img-hover:hover #portrait {
        transform: scale(1.05) rotate(10deg);
    }

    #img-hover:hover #portrait-dark {
        transform: scale(1.05);
        filter: brightness(0.5);
    }

    #img-hover:hover #portrait-dark2 {
        transform: scale(1.05) rotate(-10deg);
        filter: brightness(0.25);
    }
    .arrow {
        /* draw a simple down-pointing triangle */
        width: 50;
        height: 0;
        border-left: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-bottom: 1.5rem solid var(--color-primary);

        /* center it if you like */
        margin: 2rem auto;

        /* make it “bounce” up and down */
        animation: bounce 1s ease-in-out infinite;
        transform-origin: center bottom;
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-0.5rem); }
    }

    /* Fullscreen Styles */
    .fullscreen-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(20, 10, 30, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.2s;
    }
    .fullscreen-img {
        max-width: 90vw;
        max-height: 90vh;
        border-radius: 1rem;
        box-shadow: 0 0 40px #ff47f0cc;
        background: #222;
    }
    .close-btn {
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 3rem;
        background: rgba(0,0,0,0.5);
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 3.5rem;
        height: 3.5rem;
        cursor: pointer;
        z-index: 10000;
        transition: background 0.2s;
    }
    .close-btn:hover {
        background: #ff47f0;
        color: #fff;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>