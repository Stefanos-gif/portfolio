<script>
    import TripleImage from "$lib/components/TripleImage.svelte";
    let showFullscreen = false;
    function openFullscreen() {
        showFullscreen = true;
    }
    function closeFullscreen() {
        showFullscreen = false;
    }
</script>
<div id ="container">
    <h1>Data Analysis with Pandas</h1>
    <p id="first-p">This <a
    href="https://github.com/Stefanos-gif/data-analysis-with-pandas" target="_blank"
    rel="noopener noreferrer"
    style="color: #2eff23;"
  >project</a> performs data analysis on a dataset using Pandas and creates a histogram of a specified column. </p>
</div>

<div id="features">
  <h2>Description</h2>
  <p>
    This project harnesses Pandas to explore and analyze a dataset and generate a histogram for a designated column.</p>
  <h3>Technologies Used</h3>
  <ul>
    <li><strong>Pandas</strong> - A powerful data manipulation and analysis library for Python.</li>
    <li><strong>Python</strong> - A versatile programming language used for backend development.</li>
    <li><strong>Matplotlib</strong> - A plotting library for the Python programming language and its numerical mathematics extension NumPy.</li>
    
  </ul>
</div>

<div id="img-container" on:click={openFullscreen} style="cursor: pointer;">
    <TripleImage
    img_url1={"/dataanshow.png"}
    img_url2={"/dataanshow.png"}
    img_url3={"/dataanshow.png"}
    img_height={"53vh"}
    aspect_ratio={"1202/908"}
    />
</div>

{#if showFullscreen}
    <div class="fullscreen-overlay" on:click|self={closeFullscreen}>
        <img src="/dataanshow.png" alt="dataanshow" class="fullscreen-img" />
        <button class="close-btn" on:click={closeFullscreen} aria-label="Close fullscreen">&times;</button>
    </div>
{/if}

<svelte:head>
  <title>Data Analysis with Pandas | Stefanos Portfolio</title>
  <meta name="description" content="A project that uses Python, Pandas, and Matplotlib to analyze datasets and visualize data with histograms. Explore the code and see data science in action!" />
  <meta property="og:title" content="Data Analysis with Pandas | Stefanos Portfolio" />
  <meta property="og:description" content="A project that uses Python, Pandas, and Matplotlib to analyze datasets and visualize data with histograms. Explore the code and see data science in action!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://your-portfolio-domain.com/projects/data-analysis-with-pandas" />
  <meta property="og:image" content="https://your-portfolio-domain.com/dataanshow.png" />
</svelte:head>

<style>
  #container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
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
        margin: 0.01vw;
        
        background-color: rgba(97, 20, 128, 0.5);
        padding: 0.5vw;
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
        #features{
        position: absolute;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border: solid 5px var(--color-primary);
        border-radius: 7px;
        right: 60rem;
        top: 35vh;
        width:42vw;
        height: 45vh;
        transition: all 0.3s ease-in-out;

        
    }
    #features:hover {
        transform: scale(1.05);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
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
    #features h3 {
        position: absolute;       /*pin relative to the viewport*/
        margin: 0;
        right:0rem;
        top: 20vh;
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
        top: 30vh;
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
        top: 59.6vh;
        left: 73vw;            /* halfway into the right-half (50vw + 50vw/2) */
        transform: translate(-50%, -50%);
        
        /* your existing styles */
        height: 50vh;
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