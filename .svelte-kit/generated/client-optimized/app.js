export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/background": [4],
		"/projects/ai-pro": [5],
		"/projects/barbershop-website": [6],
		"/projects/cpp-games": [7],
		"/projects/cpp-lvl3": [8],
		"/projects/data-analysis-with-pandas": [9],
		"/projects/flask-web-app": [10],
		"/projects/python-web-scraper": [11],
		"/projects/satfire": [12],
		"/projects/thalasat": [13]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';