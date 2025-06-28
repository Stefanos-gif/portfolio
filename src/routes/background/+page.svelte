<head>
  <meta property="og:title"       content="Background - Stefanos Siathas" />
  <meta property="og:description" content="Learn about Stefanos Siathas: STEM ambassador, computer science and physics student, and builder of creative projects." />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://stefanossiathas.com/background" />
  <meta property="og:image"       content="/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" />
</head>

<script>
	import { settings, sketchKey } from '$lib/stores.js';
</script>

<div class="text-column">
	<h1>Background</h1>

	<div class="card">
        <p>
            I'm an upcoming stem ambassador studying computer science and physics.
            I love building all sorts of things,
        </p>
        <p>
            <br>Feel free to tinker with the settings below or click to <span class="refresh-button" on:click={() => sketchKey.set(Date.now())}>refresh</span> the animation.
        </p>


        <div class="sliders">
            <label> Particle Count
                <input
                    type="range"
                    min=0
                    max=10000
                    bind:value={$settings.particleCount}
                    name="force"
                />
            </label>

            <label> Particle Size
                <input 
                    type="range"
                    min=1
                    max=10
                    bind:value={$settings.strokeWeight}
                    name="strokeWeight"
                />
            </label>

            <label> Noise
                <input
                    type="range"
                    min=0
                    max=0.05
                    step=0.001
                    bind:value={$settings.noiseScale}
                    name="noiseScale"
                />
            </label>

            <label> Repel Distance
                <input
                    type="range"
                    min=0
                    max=500
                    bind:value={$settings.repelDistance}
                    name="noiseScale"
                />
            </label>
        </div>
	</div>
</div>

<style>
	.card {
        border: 1px solid var(--color-primary);
        border-radius: 5px;
        backdrop-filter: blur(5px);
        padding: 20px;
        margin-bottom: 20px;
        transition: 0.3s;
		color: var(--color-secondary);
    }

	.text-column {
		top: 30%;
	}

	h1, .card, .refresh-button {
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
	}

	h1 {
		color: var(--color-primary);
	}

    .refresh-button {
        cursor: pointer;
        color: var(--color-primary);
        font-weight: bold;
    }

    .refresh-button:hover {
        color: var(--color-secondary);
    }

	input {
		accent-color: var(--color-primary);
	}

	.sliders {
		display: flex;
		justify-content: space-between;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
	}

	@media only screen and (max-width: 768px) {
		.sliders {
			flex-direction: column;
		}	
	}
</style>

