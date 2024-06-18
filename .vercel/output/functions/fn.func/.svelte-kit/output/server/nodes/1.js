

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BSWkxVIX.js","_app/immutable/chunks/scheduler.BJRl55zG.js","_app/immutable/chunks/index.DHA-CbSZ.js","_app/immutable/chunks/entry.C8D9AuBc.js"];
export const stylesheets = [];
export const fonts = [];
