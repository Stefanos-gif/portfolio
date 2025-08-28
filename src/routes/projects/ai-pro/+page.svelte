<svelte:head>
  <meta property="og:title"       content="AI (Pro) Debate - Stefanos Siathas" />
  <meta property="og:description" content="Debate leadership, strategy, and psychological tactics: How I led a team to victory arguing in favor of AI. Download research and planning docs!" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://stefanossiathas.com/projects/ai-pro" />
  <meta property="og:image"       content="/ai.png" />
</svelte:head>
<div id="container">
    <h1>AI (Pro)</h1>
    <p>This portfolio entry highlights the strategic planning, execution, and outcomes of a debate in which I led a team to argue in favor of AI. It outlines my role as team leader, the preparation process, the use of psychological tactics, and how these strategies can be applied to future debates or discussions. The attached files provide additional insights into the research, teamwork, and methodologies employed to achieve success.</p>
</div>
<div id="download">
    <p><a href="/YourRole.docx" style="color: #2eff23;">YourRole.docx</a></p>
</div>
<div id="download">
    <p id="teammate"><a href="/Teammate.docx" style="color: #2eff23;">Teammate.docx</a></p>
</div>
<div id="download">
    <p id="psych"><a href="/PsychologicalWarfare.docx" style="color: #2eff23;">Psychological Warfare.docx</a></p>
</div>
<div id="download">
    <p id="research"><a href="/ResearchandPreparation.docx" style="color: #2eff23;">Research and Preparation.docx</a></p>
</div>

<div id="details">
  <section>
    <h2>Purpose</h2>
    <p>
      I was assigned the challenge of leading a debate against a group composed of my students and a colleague.
      The task required me to strategically prepare and present arguments in favor of AI, with the ultimate goal of winning the debate.
    </p>
  </section>

  <section>
    <h2>Context</h2>
    <p>
      In this debate, I took on the role of team leader, and my team was composed of just one of my students.
      Despite being outnumbered, our mission was to convincingly argue in favor of AI, highlighting its transformative benefits
      while effectively addressing and mitigating any concerns that might be raised by the opposing team.
    </p>
  </section>

  <section>
    <h2>Objective</h2>
    <p>
      The primary objective was to make a compelling case for AI by presenting it as a powerful tool for innovation,
      economic growth, and societal advancement. We aimed to not only defend AI but also to reframe any potential drawbacks
      as manageable challenges that, with responsible development, could be overcome.
    </p>
  </section>

  <section>
    <h2>Strategic Planning</h2>

    <h3>Purpose</h3>
    <p>
      The planning phase was crucial to ensure that our arguments were not only well-researched and logical but also
      strategically designed to dominate the debate.
    </p>

    <h3>Context</h3>
    <ul>
      <li>
        <strong>Your Role as Team Leader:</strong>
        As the team leader, my role was to craft a strong opening argument, effectively manage counterarguments, and employ
        psychological tactics to maintain control of the debate. I focused on establishing a solid foundation for our
        position on AI and prepared to counter the opposing arguments with data-driven insights and examples that emphasized
        AI’s positive impact.
      </li>
      <li>
        <strong>Teammate’s Role:</strong>
        My teammate played a critical supportive role, reinforcing the key points I introduced, handling specific rebuttals,
        and delivering a strong closing argument. While I concentrated on the broader narrative, my teammate delved into the
        details, providing additional evidence and addressing specific aspects of AI that we anticipated would be targeted
        by the opposition.
      </li>
      <li>
        <strong>Psychological Warfare Tactics:</strong>
        A significant part of our strategy involved the use of psychological tactics to keep the opposing team on the
        defensive. This included reframing their concerns as benefits, forcing them to concede certain points, and using
        emotional appeal to sway the audience. These tactics were designed to undermine their arguments and create an
        atmosphere where our position appeared not only stronger but also more reasonable and forward-thinking.
      </li>
    </ul>
  </section>

  <section>
    <h2>Execution in the Debate</h2>

    <h3>Purpose</h3>
    <p>
      The execution phase involved putting our strategic planning into action, responding dynamically to the opposition,
      and ensuring that our arguments were delivered effectively.
    </p>

    <h3>Execution</h3>
    <ul>
      <li>
        <strong>Opening Statement:</strong>
        I began the debate by laying a strong foundation, emphasizing AI’s role in driving economic growth, enhancing
        healthcare, and creating new opportunities. This set the tone for the debate, positioning AI as an indispensable
        tool for the future.
      </li>
      <li>
        <strong>Counterarguments and Rebuttals:</strong>
        Throughout the debate, we swiftly addressed the opposition’s points, using our prepared counterarguments to
        dismantle their concerns. By employing the psychological tactics we had planned, we kept the opposition on the
        defensive, making it difficult for them to maintain a cohesive argument.
      </li>
      <li>
        <strong>Psychological Maneuvers:</strong>
        Key moments in the debate involved using psychological warfare effectively. For instance, I posed challenging
        questions that disrupted the opposition’s flow and strategically used pauses to let the weight of our arguments
        sink in. These maneuvers were crucial in maintaining control of the debate and keeping the opposition on their
        back foot.
      </li>
    </ul>
  </section>
</div>



<style>
    /* container  */
    #container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;
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
    #container p {
        margin: 1rem;
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1.5rem;
        border-radius: 7px;
        border: solid 5px var(--color-primary);
        transition: all 0.3s ease-in-out;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        width: 90%;
        max-width: 600px;
        line-height: 1.6;
    }
    #container p:hover {
        transform: scale(1.02);
        background-color: rgb(97, 20, 128, 0.7);
        color: var(--color-secondary);
    }
    /* download */
    #download{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 1rem 0;
    }
    
    #download p, #download #teammate, #download #psych, #download #research {
        margin: 0.5rem;
        background-color: rgba(97, 20, 128, 0.5);
        border-radius: 7px;
        border: solid 5px var(--color-primary);
        transition: all 0.3s ease-in-out;
        font-size: clamp(1rem, 2.5vw, 1.1rem);
        width: 90%;
        max-width: 300px;
        padding: 1rem;
        position: relative;
    }
    #download p:hover, #download #teammate:hover, #download #psych:hover, #download #research:hover {
        transform: scale(1.02);
        background-color: rgb(97, 20, 128, 0.7);
    }
    #details{
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border: solid 5px var(--color-primary);
        border-radius: 7px;
        width: 90%;
        max-width: 800px;
        padding: 2rem;
        transition: all 0.3s ease-in-out;
        background-color: rgba(97, 20, 128, 0.5);
    }
    #details section {
        margin-bottom: 2rem;
        width: 100%;
    }
    #details:hover {
        transform: scale(1.01);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
    }
    #details h2 {
        font-size: clamp(1.2rem, 3vw, 1.75rem);
        margin-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-primary);
        padding-bottom: 0.25rem;
    }
    #details h3 {
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        margin-top: 1rem;
    }
    #details p {
        line-height: 1.6;
        margin: 0.5rem 0 1rem;
        font-size: clamp(0.9rem, 2.2vw, 1rem);
    }
    #details ul {
        list-style: disc inside;
        margin: 0.5rem 0 1rem 1rem;
        text-align: left;
    }
    #details ul li {
        margin-bottom: 0.75rem;
        line-height: 1.5;
        font-size: clamp(0.9rem, 2.2vw, 1rem);
    }

    /* Media queries for larger screens */
    @media (min-width: 768px) {
        #container p {
            width: 80%;
        }
        #download p, #download #teammate, #download #psych, #download #research {
            max-width: 250px;
        }
        #details {
            width: 80%;
        }
    }

    @media (min-width: 1024px) {
        #container p {
            width: 70%;
        }
        #details {
            width: 70%;
        }
    }
</style>
