type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/about": undefined;
	"/background": undefined;
	"/projects": undefined;
	"/projects/ai-pro": undefined;
	"/projects/barbershop-website": undefined;
	"/projects/cpp-games": undefined;
	"/projects/cpp-lvl3": undefined;
	"/projects/data-analysis-with-pandas": undefined;
	"/projects/flask-web-app": undefined;
	"/projects/meteor": undefined;
	"/projects/python-web-scraper": undefined;
	"/projects/satfire": undefined;
	"/projects/taskmanager": undefined;
	"/projects/thalasat": undefined;
	"/projects/watchlist-app": undefined
};

export type RouteId = "/" | "/about" | "/background" | "/projects" | "/projects/ai-pro" | "/projects/barbershop-website" | "/projects/cpp-games" | "/projects/cpp-lvl3" | "/projects/data-analysis-with-pandas" | "/projects/flask-web-app" | "/projects/meteor" | "/projects/python-web-scraper" | "/projects/satfire" | "/projects/taskmanager" | "/projects/thalasat" | "/projects/watchlist-app";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/about" | "/background" | "/projects" | "/projects/ai-pro" | "/projects/barbershop-website" | "/projects/cpp-games" | "/projects/cpp-lvl3" | "/projects/data-analysis-with-pandas" | "/projects/flask-web-app" | "/projects/meteor" | "/projects/python-web-scraper" | "/projects/satfire" | "/projects/taskmanager" | "/projects/thalasat" | "/projects/watchlist-app";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/1stpage.png" | "/2nd.png" | "/3rd.png" | "/4th.png" | "/ai.png" | "/barbs.png" | "/barbw.png" | "/comp.png" | "/cppGames.png" | "/cppgback.png" | "/cpplvl3.png" | "/dataan.png" | "/dataanshow.png" | "/favicon.ico" | "/favicon.png" | "/flaskshow.png" | "/flaskwe.png" | "/l1.png" | "/l2.png" | "/l3.png" | "/L4.png" | "/l5.png" | "/meteor-counter-og.png" | "/meteor.png" | "/namet.png" | "/paint.jpg" | "/pres1.png" | "/pres2.png" | "/pres3.png" | "/pres4.png" | "/pres5.png" | "/pres6.png" | "/Prog1.png" | "/prog2.png" | "/prog3.png" | "/PsychologicalWarfare.docx" | "/ResearchandPreparation.docx" | "/satfire.png" | "/scgame.png" | "/stefs_profesionaly_photographed_picture_by_michalis_chhatzittofi.jpg" | "/taskmanager-preview.png" | "/taskmanager1.png" | "/taskmanager2.png" | "/taskmanager3.png" | "/taskmanager4.png" | "/Teammate.docx" | "/tic.png" | "/ven1.jpg" | "/ven10.jpg" | "/ven11.jpg" | "/ven12.jpg" | "/ven13.jpg" | "/ven14.jpg" | "/ven2.jpg" | "/ven3.jpg" | "/ven4.jpg" | "/ven5.jpg" | "/ven6.jpg" | "/ven7.jpg" | "/ven8.jpg" | "/ven9.jpg" | "/watchlist-preview.png" | "/watchlist1.png" | "/watchlist2.png" | "/watchlist3.png" | "/watchlist4.png" | "/web.png" | "/webscrap.png" | "/write.png" | "/YourRole.docx";