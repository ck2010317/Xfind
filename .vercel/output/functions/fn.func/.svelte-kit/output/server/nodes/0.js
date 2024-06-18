

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B3zSE_Cs.js","_app/immutable/chunks/scheduler.BJRl55zG.js","_app/immutable/chunks/index.DHA-CbSZ.js"];
export const stylesheets = [];
export const fonts = [];
