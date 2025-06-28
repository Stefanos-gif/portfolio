<script lang="ts">
    import Fa from 'svelte-fa'
    import { faPython, faJs } from '@fortawesome/free-brands-svg-icons';
    import { faC, faHashtag, faL, faPlus } from '@fortawesome/free-solid-svg-icons';
</script>

<div id="achivment-container">  
    <div>
    <h2>Achievements</h2>
    <img src="/paint.jpg" alt="Painting achievement illustration"/>
    <ul>
        <li>
            <b>Completed 43 Programming Projects:</b> Built and maintained 23 public GitHub repositories and over 20 additional small-scale applications and scripts across multiple languages and frameworks.
        </li>
        <li>
            <b>Hackathon Winner – Cassini Camp (Cyprus):</b> As a core member of <em>SSATfire</em>, won 1st place by architecting and demoing an innovative solution under a 48-hour deadline.
        </li>
        <li>
            <b>Champion – Venetostars 2025 Challenge:</b> Collaborated with <em>Team Thalassat</em> to secure top honors in Venetostars 2025, showcasing rapid prototyping and seamless teamwork.
        </li>
        <li>
            <b>STEM & Robotics Mentor:</b> Tutored junior programmers in C++ and robotics engineering fundamentals, guiding them through hands-on projects and reinforcing core STEM concepts.
        </li>
    </ul>
</div>
    <div>
        <h2>Strengths</h2>
        <img src="/write.png" />
        <ul>
            <li>
                <b>Polyglot & Full-Stack Developer:</b> Fluent in <Fa icon={faPython}/> Python, <Fa icon={faJs}/> JavaScript,  TypeScript, <Fa icon={faC}/> C++, <Fa icon={faHashtag}/> C#, <Fa icon={faL}/> Lua, with hands-on experience in Node.js, React, and SvelteKit.
            </li>
            <li>
                <b>Ethical Hacking Expertise:</b> Deep knowledge and practical skills in vulnerability assessment, penetration testing, and security best practices.
            </li>
            <li>
                <b>Analytical Problem-Solving:</b> Strong ability to break down complex issues, craft innovative solutions, and execute them effectively.
            </li>
            <li>
                <b>Clear Communication:</b> Excel at conveying technical concepts clearly to students, peers, and non-technical stakeholders.
            </li>
            <li>
                <b>Adaptability & Continuous Learning:</b> Quick to master new tools and technologies, staying current with evolving industry trends.
            </li>
        </ul>
    </div>
    <div>
        <h2>Goals</h2>
        <img src="/comp.png"/>
        <ul>
            <li><b>Advance in Cybersecurity:</b> Gain advanced certifications in cybersecurity to enhance expertise and contribute to securing critical systems and data.</li>
            <li><b>Master Data Science and Machine Learning:</b> Acquire deep knowledge and practical skills in data science and machine learning to develop intelligent and data-driven applications.</li>
            <li><b>Contribute to Open Source Projects:</b> Actively participate in open-source communities by contributing to meaningful projects, gaining experience, and giving back to the developer community.</li>
            <li><b>Expand Tutoring and Mentoring:</b> Continue to tutor and mentor aspiring programmers, fostering the next generation of tech talent.</li>
            <li><b>Build Innovative Software Solutions:</b> Develop innovative software solutions that solve real-world problems, improve efficiency, and positively impact society.</li>
        
        </ul>
    </div>
</div>

<style>
    #achivment-container {
        text-align: center;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3vw;
        padding-left: 1vw;
        padding-right: 1vw;
        background-color: rgba(57, 32, 66, 0.5);
		border-radius: 7px;
		border: solid 5px #361144;
    }

    #achivment-container img {
        width: 100%;
        border-radius: 7px;
        border: solid 5px #643077;
    }
</style>