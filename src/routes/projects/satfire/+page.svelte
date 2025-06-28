<script>
import ArrowDown from '$lib/ArrowDown.svelte';

</script>
<div id="tit">
    <h1>Satfire</h1>
</div>

<div id="boxes">
    <p>1st place winner in the cassini camp hackathon was a project me and the satfire team are working on that plans on preventing protecting and helping the citizens of cyprus and in the future to expand internationally! You cansee the pitch that won first place under</p>
</div>
<div id="arrow1">
    <ArrowDown id='a1' size={200} color="#fa43f1" duration={1} />
</div>

<div id='pres1'><img src='/pres1.png' alt="Presentation page 1" ></div>

<div id="arrow2">
    <ArrowDown id='a2' size={200} color="#fa43f1" duration={1} />
</div>
<div id="pres2"><img src='/pres2.png' alt="Presentation page 2"></div>

<div id="arrow3">
    <ArrowDown id='a3' size={200} color="#fa43f1" duration={1} />
</div>

<div id="pres3"><img src='/pres3.png' alt="Presentation page 3"></div>

<div id="arrow4">
    <ArrowDown id='a4' size={200} color="#fa43f1" duration={1} />
</div>

<div id="pres4"><img src='/pres4.png' alt="Presentation page 4"></div>

<div id="arrow5">
    <ArrowDown id='a5' size={200} color="#fa43f1" duration={1} />
</div>
<div id="pres5"><img src='/pres5.png' alt="Presentation page 5"></div>

<div id="arrow6">
    <ArrowDown id='a6' size={200} color="#fa43f1" duration={1} />
</div>

<div id="pres6"><img src='/pres6.png' alt="Presentation page 6"></div>


<style>
    


    #arrow1{
        

        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%, -50%);
        margin-top:200px;

    }
    #pres1{
        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:300px;
        /* border-radius:4rem; */
        transition: transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);
        border-radius: 1rem;
        border-color: #ff00ff;
        
        
    }
    #pres1:hover{
        transform: translateX(-50%) scale(1.02);
        box-shadow: 0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;
        border-color: #ff00ff;
        border-radius: 1rem;
    }
    #pres1 img {
        border-radius: 1rem;
    }
    
    #arrow2{
        

        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:1051px;

    }

    #pres2{
        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:1251px;
        /* border-radius:4rem; */
        transition: transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);
        border-radius: 1rem;
        border-color: #ff00ff;
        
        
    }
    #pres2:hover{
        transform: translateX(-50%) scale(1.02);
        box-shadow: 0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;
        border-color: #ff00ff;
        border-radius: 1rem;
    }
    #pres2 img {
        border-radius: 1rem;
    }

    #arrow3{
        

        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:2002px;

    }
    #pres3{
        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:2202px;
        /* border-radius:4rem; */
        transition: transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);
        border-radius: 1rem;
        border-color: #ff00ff;
        
        
    }
    #pres3:hover{
        transform: translateX(-50%) scale(1.02);
        box-shadow: 0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;
        border-color: #ff00ff;
        border-radius: 1rem;
    }
    #pres3 img {
        border-radius: 1rem;
    }

    #arrow4{
        

        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:2953px;

    }

    #pres4{
        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:3153px;
        /* border-radius:4rem; */
        transition: transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);
        border-radius: 1rem;
        border-color: #ff00ff;
        
        
    }
    #pres4:hover{
        transform: translateX(-50%) scale(1.02);
        box-shadow: 0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;
        border-color: #ff00ff;
        border-radius: 1rem;
    }
    #pres4 img {
        border-radius: 1rem;
    }
    #arrow5{
        

        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:3764px;

    }

    #pres5{
        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:3964px;
        /* border-radius:4rem; */
        transition: transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);
        border-radius: 1rem;
        border-color: #ff00ff;
        
        
    }
    #pres5:hover{
        transform: translateX(-50%) scale(1.02);
        box-shadow: 0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;
        border-color: #ff00ff;
        border-radius: 1rem;
    }
    #pres5 img {
        border-radius: 1rem;
    }
    #arrow6{
        

        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:4515px;

    }

    #pres6{
        position:absolute;
        left:250px;
        left: 50%;               /* optional, for horizontal centering */
        transform: translate(-50%);
        margin-top:4715px;
        /* border-radius:4rem; */
        transition: transform 1s ease, box-shadow 0.7s cubic-bezier(0.4,0.2,0.2,1), border-color 0.7s cubic-bezier(0.4,0.2,0.2,1);
        border-radius: 1rem;
        border-color: #ff00ff;
        
        
    }
    #pres6:hover{
        transform: translateX(-50%) scale(1.02);
        box-shadow: 0 0 48px 12px #ff00ffcc, 0 0 96px 24px #fa43f1aa;
        border-color: #ff00ff;
        border-radius: 1rem;
    }
    #pres6 img {
        border-radius: 1rem;
    }




    
    #tit{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
    }
    #tit h1 {
        margin: 2.5vw;
        transition: all 0.3s ease-in-out;
        font-size:3rem;
    }

    #tit h1:hover {
        transform: scale(1.2);
        text-decoration: underline solid #ff00ff;
        text-shadow: 4px 4px 2px var(--color-primary);
    }
    #boxes{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    #boxes p {
        position: absolute;       /*pin relative to the viewport*/
        top:  21.68vh;             /* vertical center of the screen */
        left: 34rem;            /* moved much more to the left */
        /* margin: 0; */
        
        background-color: rgba(97, 20, 128, 0.5);
        padding: 1vw;
        border-radius: 7px;
        border: solid 5px var(--color-primary);
        transition: all 0.3s ease-in-out;
        font-size: 2vh;
        width: 40vw;
    }
    #boxes p:hover {
        /* position: fixed;       pin relative to the viewport */

        transform: scale(1.05);
        background-color: rgba(97, 18, 128, 0.7);
        color: var(--color-secondary);
        left: 34rem;    /* moved much more to the left */
    }
</style>

<head>
  <meta property="og:title"       content="Satfire Project - Stefanos Siathas" />
  <meta property="og:description" content="Satfire: 1st place winner in the Cassini Camp Hackathon. Learn about our project to protect Cyprus and beyond!" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://stefanossiathas.com/projects/satfire" />
  <meta property="og:image"       content="/pres1.png" />
</head>