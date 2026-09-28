<script lang="ts">
  import Fa from 'svelte-fa';
  import { faPython, faJs } from '@fortawesome/free-brands-svg-icons';
  import { faCode, faHashtag, faMicrochip, faSatellite, faChartLine, faUserGraduate, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
</script>

<div id="achivment-container">
  <section class="card">
    <h2>Achievements</h2>
    <img src="/paint.jpg" alt="Creative project collage" />
    <ul>
      <li><b>50+ Programming Projects:</b> 33 public GitHub repositories plus multiple demos, utilities, and embedded prototypes across web, data, and IoT.</li>
      <li><b>First Place — CASSINI Space Camp / Hackathon:</b> Data analyst for <em>SatFire</em> — wildfire-risk mapping using Copernicus & EarthData.</li>
      <li><b>First Prize — VeneTo Stars Challenge:</b> Head Data Scientist for <em>Thalasat</em> — marine heatwave & biodiversity detection.</li>
      <li><b>Stockholm Junior Water Prize (Cyprus Final, 2025):</b> AquaWise — smart irrigation showcased in national finals.</li>
      <li><b>Space Data Analyst Intern — Eratosthenes COE:</b> Big Earth Data department — satellite data processing & analysis.</li>
      <li><b>STEM & Robotics Mentor:</b> Tutored C++, robotics fundamentals, and project-based engineering workshops.</li>
    </ul>
  </section>

  <section class="card">
    <h2>Strengths</h2>
    <img src="/write.png" alt="Notes and planning" />
    <ul>
      <li><b><Fa icon={faCode}/> Polyglot & Full-Stack:</b> <Fa icon={faPython}/> Python, <Fa icon={faJs}/> JavaScript/TypeScript, C++, C# (<Fa icon={faHashtag}/>), Lua; Node.js, React, SvelteKit.</li>
      <li><b><Fa icon={faSatellite}/> Remote Sensing & Satellite Data:</b> Copernicus / EarthData processing, NDVI/LST analysis, geospatial workflows.</li>
      <li><b><Fa icon={faMicrochip}/> IoT & Embedded Systems:</b> ESP microcontrollers, sensor integration, real-time telemetry and device management.</li>
      <li><b><Fa icon={faScrewdriverWrench}/> Hardware Design & PCB:</b> Sensor interfacing, PCB layout and prototyping (EasyEDA).</li>
      <li><b><Fa icon={faChartLine}/> Data Engineering & Visualization:</b> ETL pipelines, predictive modelling, dashboards and visual reports.</li>
      <li><b><Fa icon={faUserGraduate}/> Leadership & Teaching:</b> Technical tutoring, mentoring, and project coordination.</li>
      <li><b>Adaptability:</b> Learn tools fast; stay current with modern stacks.</li>
    </ul>
  </section>

  <section class="card">
    <h2>Goals</h2>
    <img src="/comp.png" alt="Computing and engineering goals" />
    <ul>
      <li><b>Advance in Mechatronics & Electrical Engineering</b> with hands-on experience and applied research.</li>
      <li><b>Contribute to real projects</b> with measurable outcomes.</li>
      <li><b>Expand mentoring</b> for the next generation of builders.</li>
      <li><b>Build innovative robots & software</b> that solve real problems.</li>
    </ul>
  </section>
</div>

<style>
  #achivment-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: clamp(18px, 3vw, 32px);
    padding: clamp(18px, 4vw, 36px);
    background: linear-gradient(120deg, rgba(57,32,66,0.7) 60%, rgba(123,47,242,0.18) 100%);
    border-radius: 18px;
    border: 5px solid #361144;
    box-shadow: 0 0 32px #7b2ff244, 0 0 0 2px #36114444;
    margin-block: clamp(18px, 4vw, 36px);
  }

  .card {
    background: linear-gradient(180deg, rgba(97,20,128,.5));
    border: 4px solid #7b2ff2;
    border-radius: 14px;
    padding: clamp(18px, 3vw, 28px);
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 2vw, 18px);
    box-shadow: 0 0 24px #7b2ff244, 0 2px 12px #0002;
    text-align: left;
    transition: transform 0.18s, box-shadow 0.18s;
  }
  .card:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 32px #7b2ff299, 0 0 0 2px #ff00ff55;
    border-color: #ff00ff;
  }

  .card h2 {
    margin: 0 0 0.5em 0;
    text-align: center;
    font-size: clamp(1.3rem, 2.5vw, 2rem);
    background: linear-gradient(90deg, #7b2ff2 40%, #ff00ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
    letter-spacing: 0.01em;
  }

  .card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 4px solid #7b2ff2;
    object-fit: cover;
    box-shadow: 0 0 12px #7b2ff244;
  }

  .card ul {
    margin: 0;
    padding-left: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .card li {
    line-height: 1.6;
    font-size: clamp(1rem, 1.2vw, 1.08rem);
    color: #fff;
    text-shadow: 0 1px 2px #0008;
  }

  .card :global(svg){
   vertical-align: middle;
   margin: 0 .15rem;
   width: 1em;
  height: 1em;
}

  @media (max-width: 800px) {
    #achivment-container {
      grid-template-columns: 1fr;
      padding: clamp(10px, 4vw, 18px);
    }
    .card {
      padding: clamp(12px, 4vw, 18px);
    }
  }
</style>
