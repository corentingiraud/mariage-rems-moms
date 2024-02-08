

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.AyQUzhfI.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.espUaEj1.js","_app/immutable/chunks/entry.lirMp0ty.js"];
export const stylesheets = [];
export const fonts = [];
