export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1stpage.png","2nd.png","3rd.png","4th.png","ai.png","barbs.png","barbw.png","comp.png","cppGames.png","cppgback.png","cpplvl3.png","dataan.png","dataanshow.png","favicon.ico","favicon.png","flaskshow.png","flaskwe.png","l1.png","l2.png","l3.png","L4.png","l5.png","namet.png","paint.jpg","pres1.png","pres2.png","pres3.png","pres4.png","pres5.png","pres6.png","Prog1.png","prog2.png","prog3.png","PsychologicalWarfare.docx","ResearchandPreparation.docx","satfire.png","scgame.png","stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg","Teammate.docx","tic.png","ven1.jpg","ven10.jpg","ven11.jpg","ven12.jpg","ven13.jpg","ven14.jpg","ven2.jpg","ven3.jpg","ven4.jpg","ven5.jpg","ven6.jpg","ven7.jpg","ven8.jpg","ven9.jpg","web.png","webscrap.png","write.png","YourRole.docx"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.91a13b66.js","app":"_app/immutable/entry/app.b7085216.js","imports":["_app/immutable/entry/start.91a13b66.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/singletons.fe3f98a1.js","_app/immutable/chunks/index.655c5ab4.js","_app/immutable/entry/app.b7085216.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/index.8c25f7e9.js"],"stylesheets":[],"fonts":[]},
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
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
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
			},
			{
				id: "/projects/satfire",
				pattern: /^\/projects\/satfire\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/projects/thalasat",
				pattern: /^\/projects\/thalasat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
