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
		client: {"start":"_app/immutable/entry/start.3604dc00.js","app":"_app/immutable/entry/app.bb069443.js","imports":["_app/immutable/entry/start.3604dc00.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/singletons.7999c244.js","_app/immutable/chunks/index.655c5ab4.js","_app/immutable/entry/app.bb069443.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.db26a3c5.js","_app/immutable/chunks/index.8c25f7e9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
