	<script>
		import { onMount } from 'svelte';
		import { slide } from 'svelte/transition';
		import { cubicOut } from 'svelte/easing';
		import { page } from '$app/stores';
		import { goto } from '$app/navigation';
		import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
		import Fa from 'svelte-fa';
	import Projects from '../lib/components/Projects.svelte';

		const routes = ['/', '/about', '/background'];
		let pageIdx = 0;

		export let opened = false;

		const navTransition = { duration: 1000, axis: 'y' };
		let y;

		function navigate(newPageIdx) {
			pageIdx = newPageIdx;
			goto(routes[pageIdx]);
		}

		function handleArrowNavigation(event) {
			switch (event.key) {
				case 'ArrowRight':
					navigate((pageIdx + 1) % routes.length);
					break;
				case 'ArrowLeft':
					navigate(pageIdx === 0 ? routes.length - 1 : pageIdx - 1);
					break;
				default:
					return;
			}
		}

		let ready = false;
		onMount(() => {
			ready = true;
			pageIdx = routes.indexOf($page.url.pathname);
		});
	</script>

	<svelte:window on:keydown={handleArrowNavigation} bind:scrollY={y} />

	<svelte:head>
		<meta charset="UTF-8" />
		<title>Stefanos Siathas</title>
	</svelte:head>

	<header>
		{#if ready && y < 50}
			{#if opened}
				<div transition:slide={{ duration: 300, easing: cubicOut, axis: 'y' }} id="project-screen">
					<Projects />
				</div>
			{/if}
			<nav in:slide={navTransition} class:opened>
				<svg viewBox="0 0 2 5" aria-hidden="true">
					<path d="M0,0 L1,4 C1.5,5 1.5,5 2,5 L2,0 Z" />
				</svg>
				<div class="links-container">
					<ul>
					{#each routes as route, i}
						<li class:current-section={pageIdx === i}>
						<button on:click={() => navigate(i)}>
							{route === '/' ? 'home' : route.slice(1)}
						</button>
						</li>
					{/each}
					</ul>

					<div id="arrow-container" on:click={() => {opened = !opened;}}>
						{#if opened}
							<Fa icon={faCaretUp} class="arrow" />
						{:else}
							<Fa icon={faCaretDown} class="arrow" />
						{/if}
					</div>
				</div>

				<svg viewBox="0 0 2 5" aria-hidden="true">
					<path d="M0,0 L0,5 C0.5,5 0.5,5 1,4 L2,0 Z" />
				</svg>
			</nav>
		{/if}
	</header>

	<style>
		header {
			position: fixed;
			top: 0;
			display: flex;
			justify-content: space-between;
			z-index: 10;
		}

		.opened {
			top: 70vh;
		}

		#project-screen {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 70vh;
			background-color: var(--color-primary);
			z-index: 1;

			/* add this: */
			transform-origin: top center;
		}


		nav {
			position: absolute;
			top: 0;
			transition: top 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
			display: flex;
			justify-content: center;
			align-items: flex-start;
			width: 100vw;
			--background: var(--color-primary);
			position: fixed;
		}

		svg {
			width: 2em;
			height: 5em;
			display: block;
			transition: all 0.3s;	
		}

		path {
			fill: var(--color-primary);
		}

		ul {
			position: relative;
			padding: 0;
			margin: 0;
			height: 3em;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			background: var(--color-primary);
			background-size: contain;
		}

		li {
			position: relative;
			height: 100%;
		}

		nav button {
			display: flex;
			height: 100%;
			align-items: center;
			padding: 0 0.5rem;
			color: var(--color-secondary);
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			text-decoration: none;
			transition: color 0.2s linear;
			cursor: pointer;
			border: none;
			background-color: transparent;
		}

		.current-section button {
			color: var(--background-color);
		}

		button:hover {
			color: var(--background-color);
		}

		/* Optional spacing tweak */
		:global(.arrow) {
			margin-top: 0.25rem;
		}

		#arrow-container {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			background-color: var(--color-primary);
			padding-bottom: 0.75rem;
		}
	</style>
