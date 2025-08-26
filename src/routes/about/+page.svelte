<script lang="ts">
  import Accivmnets from "../../lib/components/Accivmnets.svelte";
</script>

<svelte:head>
  <meta property="og:title" content="About - Stefanos Siathas" />
  <meta property="og:description" content="Learn about Stefanos Siathas: STEM ambassador, computer science and physics student, and builder of creative projects." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://stefanossiathas.com/background" />
  <meta property="og:image" content="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" />
  <title>About — Stefanos Siathas</title>
</svelte:head>

<section id="container">
  <div id="about">
    <h1>About Me</h1>
    <p>
      Hi, I'm Stefanos Siathas, a passionate computer scientist with a strong background in various programming languages,
      including Python, C++, JavaScript, C#, and Lua. I have experience in ethical hacking and enjoy tutoring others in
      computer science concepts. My goal is to leverage my skills to build creative, useful projects and help more people
      learn and grow in tech.
    </p>
  </div>

  <Accivmnets />
</section>

<style>
  :root{
    --neon:#ff00ff;
  }

  #container{
    width:min(100%, 1100px);
    margin-inline:auto;
    padding-inline:clamp(12px,4vw,24px);
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    color:#fff;
    gap:clamp(14px,3vw,24px);
  }

  #about{
    width:100%;
    max-width:64rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:clamp(8px,1.8vw,16px);
  }

  #about h1{
    margin:clamp(12px,3vw,24px) 0;
    font-size:clamp(2rem,6vw,3rem);
    line-height:1.1;
    transition:transform .25s ease, text-shadow .25s ease;
    text-shadow:4px 4px 2px var(--color-primary);
  }
  @media (hover:hover){
    #about h1:hover{
      transform:scale(1.08);
      text-decoration:underline solid var(--neon);
      text-shadow:4px 4px 2px var(--color-primary);
    }
  }

  #about p{
    background-color:rgba(97,20,128,.5);
    padding:clamp(12px,2.4vw,20px);
    border-radius:12px;
    border:5px solid var(--color-primary);
    font-size:clamp(.95rem,2.2vw,1.1rem);
    line-height:1.6;
    width:100%;
    transition:transform .2s ease, background-color .2s ease, color .2s ease, box-shadow .2s ease;
  }
  @media (hover:hover){
    #about p:hover{
      transform:translateY(-2px);
      background-color:rgba(97,18,128,.7);
      color:var(--color-secondary);
      box-shadow:0 0 24px #ff00ff55;
    }
  }
</style>
