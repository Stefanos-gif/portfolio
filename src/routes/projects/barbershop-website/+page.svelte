<script>
    import TripleImage from "$lib/components/TripleImage.svelte";
    let showBarbFullscreen = false;
    function openBarbFullscreen() {
        showBarbFullscreen = true;
    }
    function closeBarbFullscreen() {
        showBarbFullscreen = false;
    }
</script>
<head>
  <meta property="og:title"       content="Barbershop Website Project - Stefanos Siathas" />
  <meta property="og:description" content="A premium, responsive barbershop website template built with Svelte and Tailwind CSS. Explore features, code, and live demo!" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://stefanossiathas.com/projects/barbershop-website" />
  <meta property="og:image"       content="/barbs.png" />
</head>
<div id ="container">
    <h1>The Barbershop Website</h1>
    <p id="first-p">This contains a barbershop website template wich will be sold to barbershops and will have its layout changed as they like, if you are interested in this kind of website feel free to contact me on stefanossiathas@gmail.com! Check the website <a
    href="https://barbershop-website-seven.vercel.app" target="_blank"
    rel="noopener noreferrer"
    style="color: #2eff23;"
  >Here</a>!</p>
</div>

<div id="features">
  <h2>Key Features & Architecture</h2>
  <p>
    A clean, responsive single-page site for a premium barbershop, built with <strong>Svelte</strong> and <strong>Tailwind CSS</strong> and deployed on Vercel. The layout features:
  </p>
  <ul>
    <li><strong>Navigation Bar</strong> with smooth-scrolling links to Home, About, Services, and Booking.</li>
    <li><strong>Hero Section</strong> showcasing the shop’s name, tagline (“Quality Cuts, Exceptional Service”), and a prominent “Book Now” call-to-action.</li>
    <li><strong>About Us</strong> area for history, values, and a concise brand story.</li>
    <li><strong>Featured Services</strong> gallery highlighting haircuts, beard trims, grooming packages, and retail products.</li>
    <li><strong>Testimonials Carousel</strong> presenting client quotes for social proof.</li>
    <li><strong>Contact & Booking</strong> section with address, email, phone, and social-media icons (Facebook, Twitter, Instagram).</li>
  </ul>
  <p id="sec-p">
    Under the hood, it leverages Svelte’s reactivity and a mobile-first Tailwind design, ensuring fast load times and a seamless user experience.
  </p>
</div>

<div id="img-container" on:click={openBarbFullscreen} style="cursor: pointer;">
    <TripleImage
    img_url1={"/barbs.png"}
    img_url2={"/barbs.png"}
    img_url3={"/barbs.png"}
    img_height={"51vh"}
    aspect_ratio={"1502/914"}
    />
</div>

{#if showBarbFullscreen}
    <div class="fullscreen-overlay" on:click|self={closeBarbFullscreen}>
        <img src="/barbs.png" alt="barbs" class="fullscreen-img" />
        <button class="close-btn" on:click={closeBarbFullscreen} aria-label="Close fullscreen">&times;</button>
    </div>
{/if}

<div id ="container2">
    <p id="first-p">This uses a lot of different coding languages and i suggest you check out the website's code on this <a
    href="https://github.com/Stefanos-gif/barbershop-website" target="_blank"
    rel="noopener noreferrer"
    style="color: #2eff23;"
  >Github</a>!</p>
</div>

<!-- Curved Arrow SVG (colorful and animated, arrowhead rotated 90deg) -->
<div class="curved-arrow-anim">
  <svg viewBox="0 0 200 200" width="180" height="180" class="curved-arrow-svg">
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#2eff23"/>
        <stop offset="40%" stop-color="#ff47f0"/>
        <stop offset="80%" stop-color="#00eaff"/>
        <stop offset="100%" stop-color="#ffc2ff"/>
      </linearGradient>
      <filter id="arrowGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path
      d="M30 140 Q70 180 130 120 Q170 80 170 40"
      fill="none"
      stroke="url(#arrowGradient)"
      stroke-width="10"
      stroke-linecap="round"
      filter="url(#arrowGlow)"
    />
    <!-- Arrowhead rotated 230deg (points right instead of up) -->
    <g transform="rotate(230, 172, 40)">
      <polygon
        points="175,28 185,40 172,52 167,40"
        fill="url(#arrowGradient)"
        filter="url(#arrowGlow)"
      />
    </g>
  </svg>
</div>

<style>
    #container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    #container2{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    #features{
        position: absolute;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border: solid 5px var(--color-primary);
        border-radius: 7px;
        right: 60rem;
        top: 43vh;
        width:42vw;
        height: 60vh;
        transition: all 0.3s ease-in-out;

        
    }
    #features:hover {
        transform: scale(1.05);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
    }
    #container h1 {
        margin: 2.2vw;
        transition: all 0.3s ease-in-out;
    }

    #container h1:hover {
        transform: scale(1.2);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
    }
    #container #first-p {
        position: flex;       /*pin relative to the viewport*/
        margin: 0;
        
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
    #container2 p {
        position: absolute;       /*pin relative to the viewport*/
        margin: 0;
        
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1vw;
        border-radius: 7px;
        border: solid 5px var(--color-primary);
        transition: all 0.3s ease-in-out;
        font-size: 2vh;
        width: 40vw;
        top: 115vh;
    }
    #container2 p:hover {
        /* position: fixed;       pin relative to the viewport */

        transform: scale(1.05);
        background-color: rgb(97, 20, 128, 0.7);
        color: var(--color-secondary);
    }
    #features h2 {
        position: absolute;       /*pin relative to the viewport*/
        margin: 0;
        right:0rem;
        top: 0vh;
        font-size: 4vh;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1vw;
        transition: all 0.3s ease-in-out;
        width: 40vw;
    }
    #features p {
        font-size:3vh;
        position: absolute;       /*pin relative to the viewport*/
        margin: 0;
        right:0rem;
        top: 8.5vh;
        font-size: 2.5vh;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1vw;
        transition: all 0.3s ease-in-out;
        width: 40vw;
    }
    #features #sec-p {
        font-size:3vh;
        position: absolute;       /*pin relative to the viewport*/
        margin: 0;
        right:0rem;
        top: 49vh;
        font-size: 2.5vh;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1vw;
        transition: all 0.3s ease-in-out;
        width: 40vw;
    }
    #features ul {
        position: absolute;       /*pin relative to the viewport*/
        margin: 0;
        right:0rem;
        top: 20vh;
        font-size: 2.5vh;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1vw;
        transition: all 0.3s ease-in-out;
        width: 40vw;
        text-align: left;
        font-size: 2vh;
    }
    #img-container {
        position: absolute;
        top: 68vh;
        left: 75vw;            /* halfway into the right-half (50vw + 50vw/2) */
        transform: translate(-50%, -50%);
        
        /* your existing styles */
        height: 50vh;
        aspect-ratio: 11/11;
    }
    .curved-arrow-anim {
        position: absolute;
        top: 89vh;
        left: 48vw;
        z-index: 5;
        width: 180px;
        height: 180px;
        pointer-events: none;
        animation: curved-arrow-rotate 2.8s ease-in-out infinite alternate;
        transform-origin: 60px 140px;
    }
    .curved-arrow-svg {
        width: 100%;
        height: 100%;
        display: block;
    }
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
    @keyframes curved-arrow-rotate {
        0%   { transform: rotate(-18deg);}
        80%  { transform: rotate(18deg);}
        100% { transform: rotate(18deg);}
    }
</style>