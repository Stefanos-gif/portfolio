<script>
	import '../app.css';
	 import { onDestroy } from 'svelte';
	 
	import Header from './Header.svelte';
	import Sketch from './Sketch.svelte';
	import { sketchKey } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { page } from '$app/stores';


	export let data;

	let opened = false;

	const unsubscribe = page.subscribe(() => {
		opened = false;
	});

	// clean up if this component ever unmounts
	onDestroy(unsubscribe);
</script>

<svelte:window  on:scroll={() => opened=false}></svelte:window>	

<div class="app">

	{#key $sketchKey}
		<div id="sketch">
			<Sketch />
		</div>
	{/key}

	<Header bind:opened/>

	<main>
		{#key data.pathname}
			<div in:fade={{ duration: 300, easing: cubicIn }}>
				<slot />
			</div>
		{/key}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-top: 10vh;
		width: 100%;
		max-width: 80rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	#sketch {
		position: fixed !important;
		top: 0;
		left: 0;
		z-index: -1;
		animation: fadein 2s;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
