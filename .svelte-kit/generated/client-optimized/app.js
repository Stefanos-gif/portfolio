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
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
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
		"/projects/edu-bridge-ltd": [10],
		"/projects/flask-web-app": [11],
		"/projects/meteor": [12],
		"/projects/python-web-scraper": [13],
		"/projects/satfire": [14],
		"/projects/solar-system": [15],
		"/projects/taskmanager": [16],
		"/projects/thalasat": [17],
		"/projects/watchlist-app": [18]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';