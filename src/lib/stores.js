import { writable } from 'svelte/store';

export const settings = writable({
	playing: true,
	repelDistance: 100,
	particleCount: 7000,
	noiseScale: 0.01,
	strokeWeight: 2
});

export const sketchKey = writable(Date.now());
