export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1stpage.png","2nd.png","3rd.png","4th.png","ai.png","barbs.png","barbw.png","comp.png","cppGames.png","cppgback.png","cpplvl3.png","dataan.png","dataanshow.png","edu-bridge-preview.png","favicon.ico","favicon.png","flaskshow.png","flaskwe.png","l1.png","l2.png","l3.png","L4.png","l5.png","meteor-counter-og.png","meteor.png","namet.png","paint.jpg","planet-api-docs.png","pres1.png","pres2.png","pres3.png","pres4.png","pres5.png","pres6.png","Prog1.png","prog2.png","prog3.png","PsychologicalWarfare.docx","ResearchandPreparation.docx","satfire.png","scgame.png","solar-system-main.png","solar-system-mobile.png","solar-system-planets.png","solar-system-preview.png","stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg","taskmanager-preview.png","taskmanager1.png","taskmanager2.png","taskmanager20.png","taskmanager3.png","taskmanager4.png","Teammate.docx","tic.png","ven1.jpg","ven10.jpg","ven11.jpg","ven12.jpg","ven13.jpg","ven14.jpg","ven2.jpg","ven3.jpg","ven4.jpg","ven5.jpg","ven6.jpg","ven7.jpg","ven8.jpg","ven9.jpg","watchlist-preview.png","watchlist1.png","watchlist2.png","watchlist3.png","watchlist4.png","watchlistss.png","web.png","webscrap.png","write.png","YourRole.docx"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CaZchrmV.js",app:"_app/immutable/entry/app.7c2PN1Ll.js",imports:["_app/immutable/entry/start.CaZchrmV.js","_app/immutable/chunks/PuKGl-9K.js","_app/immutable/chunks/DShp3qaR.js","_app/immutable/chunks/XzvCHHrQ.js","_app/immutable/chunks/DIvOjq75.js","_app/immutable/chunks/DEvj3O7V.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/CA9q0GpE.js","_app/immutable/entry/app.7c2PN1Ll.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/XzvCHHrQ.js","_app/immutable/chunks/DIvOjq75.js","_app/immutable/chunks/DEvj3O7V.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DShp3qaR.js","_app/immutable/chunks/DNlooKOq.js","_app/immutable/chunks/ZuCLa8d2.js","_app/immutable/chunks/CCobE8Zg.js","_app/immutable/chunks/DRfAVzAu.js","_app/immutable/chunks/CA9q0GpE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js'))
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
				id: "/projects/edu-bridge-ltd",
				pattern: /^\/projects\/edu-bridge-ltd\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/projects/flask-web-app",
				pattern: /^\/projects\/flask-web-app\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/projects/meteor",
				pattern: /^\/projects\/meteor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/projects/python-web-scraper",
				pattern: /^\/projects\/python-web-scraper\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/projects/satfire",
				pattern: /^\/projects\/satfire\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/projects/solar-system",
				pattern: /^\/projects\/solar-system\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/projects/taskmanager",
				pattern: /^\/projects\/taskmanager\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/projects/thalasat",
				pattern: /^\/projects\/thalasat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/projects/watchlist-app",
				pattern: /^\/projects\/watchlist-app\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
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
