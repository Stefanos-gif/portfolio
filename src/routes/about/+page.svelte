<script lang="ts">
  import Accivmnets from "../../lib/components/Accivmnets.svelte";
  import CertificateCarousel from '../../lib/components/CertificateCarousel.svelte';
  let copied = false;
  function copyEmail() {
    navigator.clipboard.writeText('stefanossiathas@gmail.com');
    copied = true;
    setTimeout(() => copied = false, 1500);
  }

  // certificate images from static/certificates
  const certImages = [
    '/certificates/c1.jpg',
    '/certificates/c2.jpg',
    '/certificates/c4.jpg',
    '/certificates/c5.jpg',
    '/certificates/cassini.jpg',
    '/certificates/certificate1.jpg',
    '/certificates/certificate2.jpg',
    '/certificates/certificate3.jpg',
    '/certificates/steamAcertificate.jpg',
    '/certificates/steamAcertificate1.jpg',
    '/certificates/veneto.jpg'
  ];
</script>

<section id="container">
  <div id="about">
    <h1>About Me</h1>
    <p>
  Hi, I'm Stefanos Siathas 17 yo—a computer scientist and IoT engineer. I work and tutor at Stemfreak (2023 – Present) and build full-stack applications and embedded systems. I enjoy the gym, martial arts, and helping others grow in tech. I work with Python, C++, JavaScript, C#, Lua, TypeScript, and SvelteKit. 
  <br><br>
  <b>Check me out:</b>
  <a href="https://github.com/Stefanos-gif" target="_blank" rel="noopener" style="color:#a782ff;">GitHub</a>
  &nbsp;|&nbsp;
  <span style="font-weight:600;">Contact me:</span>
  <button type="button"
    class="email-link"
    on:click={copyEmail}
    on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && copyEmail()}
    style="background:none;border:none;padding:0;margin:0;cursor:pointer;color:#a782ff;font:inherit;"
    title="Click to copy email"
    aria-label="Copy email to clipboard"
  >stefanossiathas@gmail.com</button>
  {#if copied}
    <span class="copied-message" style="margin-left:8px;color:#ffb3ff;font-size:0.95em;">Copied!</span>
  {/if}
  &nbsp;|&nbsp;
  <span style="font-weight:600;">Phone:</span> +357 99 557009
  <br><br>
  <b>Current & notable roles</b>:<br>
  • Electrical Engineer & Developer — AquaWise (smart irrigation) (ongoing)<br>
  • Webmaster — EduBridge Tech Innovation (site maintenance & development)<br>
  • STEM & Engineering Tutor — Stemfreak (2023 – Present)<br>
  • Science Department Intern — Cyprus Planetarium (Summer 2024)<br>
  • Space Data Analyst Intern — Eratosthenes COE (Big Earth Data department - 2026 summer)<br>
  • Electrical Engineer Intern — Nucleus R&D(2026)
  <br><br>
  <b>Certifications</b>: Certified STEAM Ambassador (Eu)
    </p>
    <div style="width:100%;display:flex;justify-content:center;margin-top:8px;">
      <!-- Certificate carousel will be mounted below -->
    </div>
  </div>

  <Accivmnets />

  <section id="certificates">
    <h2 style="margin-top:12px">Certificates</h2>
    <CertificateCarousel images={certImages} />
  </section>

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
