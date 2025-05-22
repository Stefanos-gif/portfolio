<script lang="ts">
	import Accivmnets from "../../lib/components/Accivmnets.svelte";
</script>

<div id="container">
	<div id="about">
		<h1>About Me</h1>
		<p>Hi, I'm Stefanos Siathas, a passionate computer scientist with a strong background in various programming languages, including Python, C++, JavaScript, C#, and Lua. I have extensive experience in ethical hacking and a talent for tutoring others in computer science concepts. My goal is to leverage my skills and knowledge to contribute to innovative projects and help others learn and grow in the field of technology. </p>
	</div>
	<Accivmnets />
</div>

<style>
    #container {
		display: flex;
		flex-direction: column;
		align-items: center;

		text-align: center;
    }

	#container h1 {
        margin: 3vw;
		transition: all 0.3s ease-in-out;
	}

    #container h1:hover, p:hover {
		transform: scale(1.2);
        text-decoration: underline solid #ff00ff;
		text-shadow: 4px 4px 2px var(--color-primary);
    }

	#container p {
        background-color: rgb(97, 20, 128, 0.5);
        padding: 1.5vw;
		border-radius: 7px;
		border: solid 5px var(--color-primary);
		transition: all 0.3s ease-in-out;
		font-size: 2vh;
	}

	#about {
		max-width: 64rem;
	}

</style>   