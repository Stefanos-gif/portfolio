export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ai.png","barbs.png","barbw.png","comp.png","cppGames.png","cppgback.png","cpplvl3.png","dataan.png","dataanshow.png","favicon.ico","favicon.png","flaskshow.png","flaskwe.png","paint.jpg","Prog1.png","prog2.png","prog3.png","PsychologicalWarfare.docx","ResearchandPreparation.docx","scgame.png","stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg","Teammate.docx","tic.png","web.png","webscrap.png","write.png","YourRole.docx"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.75fa1ed7.js","app":"_app/immutable/entry/app.30584c89.js","imports":["_app/immutable/entry/start.75fa1ed7.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/singletons.39dac941.js","_app/immutable/chunks/index.c90c51eb.js","_app/immutable/entry/app.30584c89.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.522a12a4.js","_app/immutable/chunks/index.5405a8ee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/background",
				pattern: /^\/background\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects/ai-pro",
				pattern: /^\/projects\/ai-pro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/barbershop-website",
				pattern: /^\/projects\/barbershop-website\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects/cpp-games",
				pattern: /^\/projects\/cpp-games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects/cpp-lvl3",
				pattern: /^\/projects\/cpp-lvl3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/projects/data-analysis-with-pandas",
				pattern: /^\/projects\/data-analysis-with-pandas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/projects/flask-web-app",
				pattern: /^\/projects\/flask-web-app\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/projects/python-web-scraper",
				pattern: /^\/projects\/python-web-scraper\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
