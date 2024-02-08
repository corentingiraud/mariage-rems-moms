export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.uPZ2Vc25.js","app":"_app/immutable/entry/app.ckPfxUep.js","imports":["_app/immutable/entry/start.uPZ2Vc25.js","_app/immutable/chunks/entry.lirMp0ty.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/entry/app.ckPfxUep.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.espUaEj1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();