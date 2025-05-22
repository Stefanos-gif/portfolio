<script lang="ts">
    import Fa from 'svelte-fa'
    import { faPython, faJs } from '@fortawesome/free-brands-svg-icons';
    import { faC, faHashtag, faL, faPlus } from '@fortawesome/free-solid-svg-icons';
</script>

<div id="achivment-container">  
    <div>
        <h2>Achievements </h2>
        <img src="/paint.jpg"/>
        <ul>
            <li><b>Completed Over 50 Programming Projects:</b> Successfully developed and completed more than 50 projects in various programming languages</li>
            <li><b>Contributed to Open Source Projects:</b> Actively contributed to 24 open-source projects on GitHub, improving my collaborative skills and gaining valuable experience.</li>
            <li><b>Successfully Completed Online Courses:</b> Completed numerous online courses on platforms like Coursera and Udemy, furthering my knowledge in areas like ethical hacking, web development, and data analysis.</li>
            <li><b>Tutored Junior Programmers</b>: Provided mentorship to junior programmers, helping them improve their coding skills and complete their projects successfully.</li>
        
        
            </ul>
    </div>
    <div>
        <h2>Strengths</h2>
        <img src="/write.png"/>
        <ul>
            <li><b>Proficient in Multiple Programming Languages:</b> I know many languages like <Fa icon={faPython} /> Python, <Fa icon={faJs}/>Js, <Fa icon={faC}/> C++, <Fa icon={faHashtag}/> C#, <Fa icon={faL}/>  Lua</li>      
            <li><b>Ethical Hacking Expertise:</b> Deep knowledge and hands-on experience in ethical hacking, vulnerability assessment, and penetration testing.</li>
            <li><b>Strong Problem-Solving Skills:</b> Ability to analyze complex problems, devise innovative solutions, and implement them effectively.</li>
            <li><b>Excellent Communication Skills:</b> Skilled in explaining technical concepts clearly and effectively to students, peers, and non-technical stakeholders.</li>
            <li><b>Adaptability and Quick Learner:</b> Able to quickly grasp new technologies and tools, staying updated with the latest industry trends.</li>  
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