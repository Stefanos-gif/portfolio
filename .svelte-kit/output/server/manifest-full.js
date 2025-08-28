export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1stpage.png","2nd.png","3rd.png","4th.png","ai.png","barbs.png","barbw.png","comp.png","cppGames.png","cppgback.png","cpplvl3.png","dataan.png","dataanshow.png","favicon.ico","favicon.png","flaskshow.png","flaskwe.png","l1.png","l2.png","l3.png","L4.png","l5.png","meteor-counter-og.png","meteor.png","namet.png","paint.jpg","pres1.png","pres2.png","pres3.png","pres4.png","pres5.png","pres6.png","Prog1.png","prog2.png","prog3.png","PsychologicalWarfare.docx","ResearchandPreparation.docx","satfire.png","scgame.png","stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg","taskmanager-preview.png","taskmanager1.png","taskmanager2.png","taskmanager20.png","taskmanager3.png","taskmanager4.png","Teammate.docx","tic.png","ven1.jpg","ven10.jpg","ven11.jpg","ven12.jpg","ven13.jpg","ven14.jpg","ven2.jpg","ven3.jpg","ven4.jpg","ven5.jpg","ven6.jpg","ven7.jpg","ven8.jpg","ven9.jpg","watchlist-preview.png","watchlist1.png","watchlist2.png","watchlist3.png","watchlist4.png","watchlistss.png","web.png","webscrap.png","write.png","YourRole.docx"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.DjTjBpTa.js",app:"_app/immutable/entry/app.BULq1BGd.js",imports:["_app/immutable/entry/start.DjTjBpTa.js","_app/immutable/chunks/DxsYZBGS.js","_app/immutable/chunks/BEtnG7hU.js","_app/immutable/chunks/CS5-6PdF.js","_app/immutable/chunks/DPHN7JvI.js","_app/immutable/chunks/C8S9u8Dj.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/Ba1BFahH.js","_app/immutable/entry/app.BULq1BGd.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/CS5-6PdF.js","_app/immutable/chunks/DPHN7JvI.js","_app/immutable/chunks/C8S9u8Dj.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BEtnG7hU.js","_app/immutable/chunks/C0SlDKHh.js","_app/immutable/chunks/Ce8O_7Uh.js","_app/immutable/chunks/F3bnNvC7.js","_app/immutable/chunks/Dkx5CTLy.js","_app/immutable/chunks/Ba1BFahH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js'))
		],
		remotes: {
			
		},
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
				id: "/projects/meteor",
				pattern: /^\/projects\/meteor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/projects/python-web-scraper",
				pattern: /^\/projects\/python-web-scraper\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/projects/satfire",
				pattern: /^\/projects\/satfire\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/projects/taskmanager",
				pattern: /^\/projects\/taskmanager\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/projects/thalasat",
				pattern: /^\/projects\/thalasat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/projects/watchlist-app",
				pattern: /^\/projects\/watchlist-app\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
