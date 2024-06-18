

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D5yR31tx.js","_app/immutable/chunks/scheduler.BJRl55zG.js","_app/immutable/chunks/index.DHA-CbSZ.js"];
export const stylesheets = ["_app/immutable/assets/2.B_lSr-u6.css"];
export const fonts = [];
