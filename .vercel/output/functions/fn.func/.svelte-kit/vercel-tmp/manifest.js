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
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
