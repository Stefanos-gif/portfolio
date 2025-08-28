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
<svelte:head>
  <meta property="og:title"       content="Barbershop Website Project - Stefanos Siathas" />
  <meta property="og:description" content="A premium, responsive barbershop website template built with Svelte and Tailwind CSS. Explore features, code, and live demo!" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://stefanossiathas.com/projects/barbershop-website" />
  <meta property="og:image"       content="/barbs.png" />
</svelte:head>
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

<style>
    #container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;
    }
    #container2{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 2rem 0;
    }
    #features{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border: solid 5px var(--color-primary);
        border-radius: 7px;
        margin: 2rem auto;
        width: 90%;
        max-width: 600px;
        padding: 1.5rem;
        transition: all 0.3s ease-in-out;
        background-color: rgba(97, 20, 128, 0.3);
    }
    #features:hover {
        transform: scale(1.02);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
    }
    #container h1 {
        margin: 2rem 1rem;
        transition: all 0.3s ease-in-out;
        font-size: clamp(2rem, 5vw, 3.5rem);
    }

    #container h1:hover {
        transform: scale(1.1);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
    }
    #container #first-p {
        margin: 1rem;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1.5rem;
        border-radius: 7px;
        border: solid 5px var(--color-primary);
        transition: all 0.3s ease-in-out;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        width: 90%;
        max-width: 600px;
    }
    #container #first-p:hover {
        transform: scale(1.02);
        background-color: rgb(97, 20, 128, 0.7);
        color: var(--color-secondary);
    }
    #container2 p {
        margin: 1rem;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1.5rem;
        border-radius: 7px;
        border: solid 5px var(--color-primary);
        transition: all 0.3s ease-in-out;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        width: 90%;
        max-width: 600px;
    }
    #container2 p:hover {
        transform: scale(1.02);
        background-color: rgb(97, 20, 128, 0.7);
        color: var(--color-secondary);
    }
    #features h2 {
        margin: 0 0 1rem 0;
        font-size: clamp(1.5rem, 4vw, 2rem);
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1rem;
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
    }
    #features p {
        font-size: clamp(0.9rem, 2.5vw, 1.1rem);
        margin: 1rem 0;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1rem;
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
        line-height: 1.6;
    }
    #features #sec-p {
        font-size: clamp(0.9rem, 2.5vw, 1.1rem);
        margin: 1rem 0;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1rem;
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
        line-height: 1.6;
    }
    #features ul {
        margin: 1rem 0;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1rem;
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
        text-align: left;
        font-size: clamp(0.9rem, 2.2vw, 1rem);
        line-height: 1.5;
    }
    #img-container {
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        width: 90%;
        max-width: 600px;
        height: auto;
    }

    /* Media queries for better responsiveness */
    @media (min-width: 768px) {
        #img-container {
            margin: 3rem auto;
        }
        #features {
            width: 80%;
            max-width: 800px;
        }
    }

    @media (min-width: 1024px) {
        #features {
            width: 70%;
            max-width: 900px;
        }
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
</style>