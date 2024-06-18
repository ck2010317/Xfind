import { c as create_ssr_component, e as escape, o as onDestroy, d as spread, f as escape_object, h as createEventDispatcher, v as validate_component, i as add_attribute, j as each } from "../../chunks/ssr.js";
const bg_image = "/_app/immutable/assets/herobg.CezqSF0A.png";
const noise = "/_app/immutable/assets/noise.BnUY8HIp.png";
const css$7 = {
  code: "article.svelte-44gymn.svelte-44gymn{padding:2px;background-image:linear-gradient(35deg, #66E1FF, transparent, #66E1FF, #66E1FF)}.card-inner.svelte-44gymn.svelte-44gymn{overflow:hidden;background-color:#222122;height:100%}.bg-image.svelte-44gymn.svelte-44gymn{height:100%;background-size:cover;background-position:top;background-repeat:no-repeat;position:relative;display:flex;justify-content:center;align-items:center}.grain-overlay.svelte-44gymn.svelte-44gymn{position:absolute;pointer-events:none;mix-blend-mode:color-dodge;top:0;bottom:0;left:0;right:0}.text.svelte-44gymn.svelte-44gymn{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;padding:30px 30px 50px;row-gap:15px;& a {\n      font-size: 70px;\n      text-decoration: none;\n      color: #ffffff;\n      font-weight: 800;\n    };& a:hover {\n      text-decoration: underline;\n    };& p {\n      font-size: 25px;\n    }}@media only screen and (width < 1005px){.text.svelte-44gymn a.svelte-44gymn{font-size:6vw}}@media only screen and (width < 570px){.text.svelte-44gymn p.svelte-44gymn{font-size:4vw}}",
  map: null
};
const HeroCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { border_radius_outer = 0 } = $$props;
  let { border_radius_inner = 0 } = $$props;
  if ($$props.border_radius_outer === void 0 && $$bindings.border_radius_outer && border_radius_outer !== void 0) $$bindings.border_radius_outer(border_radius_outer);
  if ($$props.border_radius_inner === void 0 && $$bindings.border_radius_inner && border_radius_inner !== void 0) $$bindings.border_radius_inner(border_radius_inner);
  $$result.css.add(css$7);
  return `<article style="${"border-radius: " + escape(border_radius_outer, true) + "px;"}" class="svelte-44gymn"><div style="${"border-radius: " + escape(border_radius_inner, true) + "px;"}" class="card-inner svelte-44gymn"><div class="bg-image svelte-44gymn" style="${"background-image: url(" + escape(bg_image, true) + ");"}" data-svelte-h="svelte-1b0ecrt"><div class="grain-overlay svelte-44gymn" style="${"background-image: url(" + escape(noise, true) + ");"}"></div> <div class="text svelte-44gymn"><a href="https://t.me/+d4sDSYx3SJRhYjFk" class="svelte-44gymn">xFind Token</a> <p class="svelte-44gymn">The Webapp that finds and tracks the <u>latest defi coin</u> Telegram groups</p></div></div></div> </article>`;
});
const css$6 = {
  code: ".hero-section.svelte-1anu812{display:flex;flex-direction:column;gap:23px;padding:23px}",
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="hero-section svelte-1anu812">${slots.default ? slots.default({}) : ``} </div>`;
});
const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchIconName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName)) && icon.name.match(matchIconName));
};
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data2, names) {
  const icons = data2.icons;
  const aliases = data2.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
  return resolved;
}
function internalGetIconData(data2, name, tree) {
  const icons = data2.icons;
  const aliases = data2.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data2, currentProps);
}
function parseIconSet(data2, callback) {
  const names = [];
  if (typeof data2 !== "object" || typeof data2.icons !== "object") {
    return names;
  }
  if (data2.not_found instanceof Array) {
    data2.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data2);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data2, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data2 = obj;
  if (typeof data2.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data2.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchIconName) || typeof icon.body !== "string" || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  const aliases = data2.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (!name.match(matchIconName) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  return data2;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data2) {
  if (!quicklyValidateIconSet(data2)) {
    return [];
  }
  return parseIconSet(data2, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data2) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage2, icon.name, data2);
}
function addCollection(data2, provider) {
  if (typeof data2 !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data2.provider || "";
  }
  if (simpleNames && !provider && !data2.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data2)) {
      data2.prefix = "";
      parseIconSet(data2, (name, icon) => {
        if (icon && addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data2.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data2);
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data2) => {
    if (typeof data2 !== "object" || data2 === null) {
      setTimeout(() => {
        if (data2 === 404) {
          callback("abort", data2);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data2);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;
function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}
function setBrowserStorageItemsCount(storage2, value) {
  return setStoredItem(storage2, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage2) {
  return parseInt(getStoredItem(storage2, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
  local: true,
  session: true
};
const browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}
let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = (index) => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data2 = JSON.parse(item);
      if (typeof data2 === "object" && typeof data2.cached === "number" && data2.cached > minTime && typeof data2.provider === "string" && typeof data2.data === "object" && typeof data2.data.prefix === "string" && // Valid item: run callback
      callback(data2, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}
function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage2 = getStorage(
        provider,
        prefix
      );
      if (!addIconSet(storage2, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage2.lastModifiedCached = storage2.lastModifiedCached ? Math.min(storage2.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
const commonProps = {
  display: "inline-block"
};
const monotoneProps = {
  "background-color": "currentColor"
};
const coloredProps = {
  "background-color": "transparent"
};
const propsToAdd = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
};
const propsToAddTo = {
  "-webkit-mask": monotoneProps,
  "mask": monotoneProps,
  "background": coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + "-" + prop] = propsToAdd[prop];
  }
}
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
function render(icon, props) {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const mode = props.mode || "svg";
  const componentProps = mode === "svg" ? { ...svgDefaults } : {};
  if (icon.body.indexOf("xlink:") === -1) {
    delete componentProps["xmlns:xlink"];
  }
  let style = typeof props.style === "string" ? props.style : "";
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "color":
        style = style + (style.length > 0 && style.trim().slice(-1) !== ";" ? ";" : "") + "color: " + value + "; ";
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default:
        if (key.slice(0, 3) === "on:") {
          break;
        }
        if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style = "vertical-align: -0.125em; " + style;
  }
  if (mode === "svg") {
    Object.assign(componentProps, renderAttribs);
    if (style !== "") {
      componentProps.style = style;
    }
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    return {
      svg: true,
      attributes: componentProps,
      body: replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifySvelte")
    };
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  const url = svgToURL(html);
  const styles = {
    "--svg": url
  };
  const size = (prop) => {
    const value = renderAttribs[prop];
    if (value) {
      styles[prop] = fixSize(value);
    }
  };
  size("width");
  size("height");
  Object.assign(styles, commonProps, useMask ? monotoneProps : coloredProps);
  let customStyle = "";
  for (const key in styles) {
    customStyle += key + ": " + styles[key] + ";";
  }
  componentProps.style = customStyle + style;
  return {
    svg: false,
    attributes: componentProps
  };
}
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  initBrowserStorage();
  const _window2 = window;
  if (_window2.IconifyPreload !== void 0) {
    const preload = _window2.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (
            // Check if item is an object and not null/array
            typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
            typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
            !addCollection(item)
          ) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window2.IconifyProviders !== void 0) {
    const providers = _window2.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
function checkIconState(icon, state, mounted, callback, onload) {
  if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
    state.name = "";
    return { data: { ...defaultIconProps, ...icon } };
  }
  let iconName;
  if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
    return null;
  }
  const data2 = getIconData(iconName);
  if (!data2) {
    return null;
  }
  if (state.name !== icon) {
    state.name = icon;
    if (onload && !state.destroyed) {
      onload(icon);
    }
  }
  const classes = ["iconify"];
  if (iconName.prefix !== "") {
    classes.push("iconify--" + iconName.prefix);
  }
  if (iconName.provider !== "") {
    classes.push("iconify--" + iconName.provider);
  }
  return { data: data2, classes };
}
function generateIcon(icon, props) {
  return icon ? render({
    ...defaultIconProps,
    ...icon
  }, props) : null;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data2;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data2 = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data2 && iconData.classes) {
        data2.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data2 ? `${data2.svg ? `<svg${spread([escape_object(data2.attributes)], {})}><!-- HTML_TAG_START -->${data2.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data2.attributes)], {})}></span>`}` : ``}`;
});
const glow$1 = "/_app/immutable/assets/glow.DEu_-OcS.png";
const icon1 = "/_app/immutable/assets/icon1.CvgGPi6S.svg";
const icon2 = "/_app/immutable/assets/icon2.CJcKied-.svg";
const icon3 = "data:image/svg+xml,%3csvg%20width='335'%20height='331'%20viewBox='0%200%20335%20331'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_90_4887)'%3e%3cellipse%20cx='167.4'%20cy='176.5'%20rx='73'%20ry='59.5'%20fill='white'%20fill-opacity='0.21'/%3e%3c/g%3e%3cpath%20d='M167.556%20215.97L167.8%20216.031L168.044%20215.97C192.852%20209.732%20213.32%20195.499%20229.432%20173.326C245.539%20151.159%20253.6%20126.527%20253.6%2099.46V34.8V34.107L252.951%2033.8637L168.151%202.06367L167.8%201.932L167.449%202.06367L82.6489%2033.8637L82%2034.107V34.8V99.4597C82%2099.4598%2082%2099.4599%2082%2099.46C81.9929%20126.52%2090.054%20151.148%20106.168%20173.315C122.287%20195.488%20142.755%20209.725%20167.556%20215.97ZM146.6%20150.4H146.598C143.855%20150.406%20141.599%20149.489%20139.76%20147.651C137.921%20145.812%20137%20143.551%20137%20140.8L137%20109.002C137%20109.002%20137%20109.001%20137%20109.001C137.007%20106.256%20137.928%20103.998%20139.761%20102.159C141.592%20100.321%20143.849%2099.4%20146.6%2099.4H147.6V98.4V87.8012C147.607%2082.2452%20149.578%2077.5091%20153.541%2073.5393C157.503%2069.5705%20162.238%2067.6%20167.8%2067.6C173.37%2067.607%20178.109%2069.5783%20182.071%2073.5399C186.033%2077.5018%20188%2082.2371%20188%2087.8V98.4V99.3976L188.998%2099.4C191.743%2099.4065%20194.002%20100.328%20195.841%20102.161C197.679%20103.992%20198.6%20106.249%20198.6%20109L198.6%20140.8L198.6%20140.802C198.606%20143.545%20197.689%20145.801%20195.851%20147.64C194.012%20149.479%20191.751%20150.4%20189%20150.4H146.6ZM156.2%2098.4V99.4H157.2H178.4H179.4V98.4V87.8024C179.408%2084.5522%20178.297%2081.7775%20176.065%2079.5457C173.833%2077.3141%20171.056%2076.2%20167.8%2076.2L167.798%2076.2C164.55%2076.2077%20161.778%2077.3214%20159.547%2079.5445C157.314%2081.7695%20156.2%2084.5443%20156.2%2087.8V98.4Z'%20fill='url(%23paint0_linear_90_4887)'%20fill-opacity='0.4'%20stroke='url(%23paint1_linear_90_4887)'%20stroke-width='2'/%3e%3cdefs%3e%3cfilter%20id='filter0_f_90_4887'%20x='0.100021'%20y='22.7'%20width='334.6'%20height='307.6'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='47.15'%20result='effect1_foregroundBlur_90_4887'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_90_4887'%20x1='167.417'%20y1='194.518'%20x2='167.417'%20y2='8.38223'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.51'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_90_4887'%20x1='154.021'%20y1='204.385'%20x2='151.919'%20y2='42.0286'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const css$5 = {
  code: ".token-page.svelte-nflne4.svelte-nflne4.svelte-nflne4.svelte-nflne4{padding:0 23px;position:relative;margin-top:95px;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:100px}.glow-overlay.svelte-nflne4.svelte-nflne4.svelte-nflne4.svelte-nflne4{position:absolute;pointer-events:none;background-repeat:no-repeat;top:-330px;bottom:0;left:0;right:0}.header.svelte-nflne4.svelte-nflne4.svelte-nflne4.svelte-nflne4{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:15px;& h1 {\n      font-size: 70px;\n      filter: drop-shadow(0 0 10px #66E1FF);\n    }}.token-pill.svelte-nflne4.svelte-nflne4.svelte-nflne4.svelte-nflne4{display:flex;align-items:center;justify-content:center;gap:20px;background-color:#ffffff23;border-radius:100px;padding-left:25px;& p {\n      font-size: 18px;\n    };& .copy-button {\n      font-weight: 600;\n      transition: .1s;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 10px;\n      text-decoration: none;\n      background-color: #66E1FF;\n      border-radius: 100px;\n      color: #fff;\n      overflow: hidden;\n      padding: 5px 23px 5px 20px;\n    };& .copy-button:hover {\n      background-color: black;\n    };& .copy-button:active {\n      background-color: #black;\n    }}.cards.svelte-nflne4.svelte-nflne4.svelte-nflne4.svelte-nflne4{display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;width:100%;& .card {\n      border-radius: 30px;\n      height: 600px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      & p {\n        font-size: 24px;\n        font-weight: 800;\n      }\n    }}@media only screen and (width < 1420px){.cards.svelte-nflne4.svelte-nflne4.svelte-nflne4.svelte-nflne4{grid-template-columns:repeat(1, 1fr)}}@media only screen and (width < 720px){.token-pill.svelte-nflne4.svelte-nflne4.svelte-nflne4.svelte-nflne4{display:flex;align-items:center;justify-content:center;gap:20px;background-color:#ffffff23;border-radius:100px;padding-left:25px}.token-pill.svelte-nflne4 p.svelte-nflne4.svelte-nflne4.svelte-nflne4{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:200px}.cards.svelte-nflne4>.card.svelte-nflne4.svelte-nflne4.svelte-nflne4{padding:60px 10px;height:unset}.cards.svelte-nflne4>.card.svelte-nflne4>.card-inner.svelte-nflne4>p.svelte-nflne4{font-size:16px}.cards.svelte-nflne4>.card.svelte-nflne4>.card-inner.svelte-nflne4>img.svelte-nflne4{width:200px}}@media only screen and (width < 430px){.token-pill.svelte-nflne4 p.svelte-nflne4.svelte-nflne4.svelte-nflne4{width:100px}}",
  map: null
};
let token = "0xAbCdEf0123456789abcdef0123456789abcdef01";
const TokenPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="token-page svelte-nflne4"><div class="glow-overlay svelte-nflne4" style="${"background-image: url(" + escape(glow$1, true) + ");"}"></div> <div class="header svelte-nflne4"><h1 data-svelte-h="svelte-1bd4fyl">$TGB</h1> <div class="token-pill svelte-nflne4"><p class="svelte-nflne4">${escape(token)}</p> <a href="#s" class="copy-button">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "basil:copy-solid",
      style: "font-size: 25px;"
    },
    {},
    {}
  )}<span data-svelte-h="svelte-xk42mz">COPY</span></a></div></div> <div class="cards svelte-nflne4" data-svelte-h="svelte-illxn9"><div class="card svelte-nflne4" style="${"background-image: url(" + escape(noise, true) + ");"}"><div class="card-inner svelte-nflne4"><img${add_attribute("src", icon1, 0)} alt="noise" class="svelte-nflne4"> <p class="svelte-nflne4">5/5 tax, 50% total rev share</p></div></div> <div class="card svelte-nflne4" style="${"background-image: url(" + escape(noise, true) + ");"}"><div class="card-inner svelte-nflne4"><img${add_attribute("src", icon2, 0)} alt="noise" class="svelte-nflne4"> <p class="svelte-nflne4">No team tokens</p></div></div> <div class="card svelte-nflne4" style="${"background-image: url(" + escape(noise, true) + ");"}"><div class="card-inner svelte-nflne4"><img${add_attribute("src", icon3, 0)} alt="noise" class="svelte-nflne4"> <p class="svelte-nflne4">Liquidity locked</p></div></div></div> </div>`;
});
const glow = "/_app/immutable/assets/glow2.Bk8Q_3_Y.png";
const css$4 = {
  code: ".token-page.svelte-1jw9bjk.svelte-1jw9bjk{padding:0 23px;position:relative;margin-top:95px;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:100px}.glow-overlay.svelte-1jw9bjk.svelte-1jw9bjk{position:absolute;pointer-events:none;top:-330px;background-repeat:no-repeat;bottom:0;left:0;right:0}.header.svelte-1jw9bjk.svelte-1jw9bjk{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:15px;& h1 {\n      font-size: 70px;\n      filter: drop-shadow(0 0 10px #ffffff3f);\n    }}.cards.svelte-1jw9bjk.svelte-1jw9bjk{display:grid;grid-template-columns:repeat(2, 1fr);gap:24px;width:60%;& .card {\n      border: 2px solid transparent;\n      border-radius: 30px;\n      display: flex;\n      align-items: flex-start;\n      padding: 85px 60px;\n      justify-content: center;\n\n      & .card-inner {\n\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          gap: 40px;\n          justify-content: flex-start;\n\n          & p {\n            font-size: 34px;\n          }\n\n          & ul {\n            list-style-type: none;\n            display: flex;\n            flex-direction: column;\n            gap: 20px;\n            font-weight: 600;\n            line-height: 34px;\n          }\n      }\n      \n    };& .card--basic {\n      background-color: #222122;\n    };& .card--vip {\n      background-color: #d9fa001e;\n      border-color: #d9fa005b;\n    }}.instructions.svelte-1jw9bjk.svelte-1jw9bjk{width:60%;margin:auto;margin-top:95px;margin-bottom:23px;& h2 {\n      text-align: center;\n      font-size: 50px;\n      filter: drop-shadow(0 0 10px #ffffff3f);\n    };& .steps {\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      margin-top: 40px;\n\n      & .step {\n        display: flex;\n        padding: 10px;\n        border-radius: 100px;\n        background-color: #ffffff1a;\n        align-items: center;\n        gap: 20px;\n        font-weight: 600;\n\n        & :first-child {\n          background-color: #ffffff34;\n          border-radius: 50%;\n          width: 40px;\n          height: 40px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          font-weight: 600;\n        }\n      }\n    }}@media only screen and (width < 1400px){.cards.svelte-1jw9bjk.svelte-1jw9bjk{width:90%}}@media only screen and (width < 1200px){.instructions.svelte-1jw9bjk.svelte-1jw9bjk{width:90%}}@media only screen and (width < 1000px){.cards.svelte-1jw9bjk.svelte-1jw9bjk{width:100%;padding:0 20px;grid-template-columns:1fr}}@media only screen and (width < 830px){.instructions.svelte-1jw9bjk.svelte-1jw9bjk{width:100%}.instructions.svelte-1jw9bjk .steps.svelte-1jw9bjk{width:90%;margin:auto}.instructions.svelte-1jw9bjk .steps .step.svelte-1jw9bjk{flex-direction:column;padding:25px;border-radius:30px;text-align:center}.main-wrapper .instructions.svelte-1jw9bjk h2.svelte-1jw9bjk{font-size:30px;margin-bottom:95px}}@media only screen and (width < 530px){.token-page.svelte-1jw9bjk.svelte-1jw9bjk{padding:0}}",
  map: null
};
const Revenue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="token-page svelte-1jw9bjk"><div class="glow-overlay svelte-1jw9bjk" style="${"background-image: url(" + escape(glow, true) + ");"}"></div> <div class="header svelte-1jw9bjk" data-svelte-h="svelte-u71dpv"><h1>Revenue</h1></div> <div class="cards svelte-1jw9bjk"><div class="card card--basic" style="${"background-image: url(" + escape(noise, true) + ");"}"><div class="card-inner"><p data-svelte-h="svelte-li6k3j">General Revenue Share</p> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "pepicons-pencil:handshake",
      style: "font-size: 10rem;"
    },
    {},
    {}
  )} <ul data-svelte-h="svelte-jpaew6"><li>✅ Must meet the minimum holding requirement</li> <li>✅ 1/3 of the total share is split daily</li> <li>✅ Your split depends on your initial ETH investment</li> <li>✅ Must meet the group activity requirement of 1 message per day</li></ul></div></div> <div class="card card--vip" style="${"background-image: url(" + escape(noise, true) + ");"}"><div class="card-inner"><p data-svelte-h="svelte-gzn08">VIP Revenue Share</p> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mingcute:vip-4-fill",
      style: "font-size: 10rem;"
    },
    {},
    {}
  )} <ul data-svelte-h="svelte-b6xd63"><li>✅ Same minimum holding requirement</li> <li>✅ 2/3 of the total share is split by 10 productive members</li> <li>✅ New VIPs are chosen daily by the mods</li></ul></div></div></div></div> <div class="instructions svelte-1jw9bjk" data-svelte-h="svelte-1dpzq1p"><h2 class="svelte-1jw9bjk">How to sign-up to Revenue Sharing?</h2> <div class="steps svelte-1jw9bjk"><div class="step svelte-1jw9bjk"><p>1</p> <p>DM the Telegram bot and follow the instructions @TgBoardsBot.</p></div> <div class="step svelte-1jw9bjk"><p>2</p> <p>You will need to link your Telegram account to your wallet.</p></div> <div class="step svelte-1jw9bjk"><p>3</p> <p>Etherscan&#39;s &quot;Verified Signatures&quot; page is used during this process.</p></div></div> </div>`;
});
const css$3 = {
  code: ".footer.svelte-umyt0e{display:flex;justify-content:center;align-items:center;height:150px;background-image:linear-gradient(to top, rgba(36, 36, 36, 0.377), transparent);color:#fff;padding:15px;font-size:14px;margin-top:95px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="footer svelte-umyt0e" data-svelte-h="svelte-120t2qc"><p>TgBoards 2024 - All rights reserved</p> </div>`;
});
const css$2 = {
  code: "main.svelte-xsoxdu{display:flex;flex-direction:column;gap:23px;padding:0 23px}.top-14.svelte-xsoxdu{display:grid;grid-template-columns:repeat(4, 1fr);gap:23px}@media only screen and (width < 1600px){.top-14.svelte-xsoxdu{grid-template-columns:repeat(3, 1fr)}}@media only screen and (width < 1300px){.top-14.svelte-xsoxdu{grid-template-columns:repeat(2, 1fr)}}@media only screen and (width < 895px){.top-14.svelte-xsoxdu{grid-template-columns:1fr}}",
  map: null
};
const Groups = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<main class="svelte-xsoxdu"><div class="top-spot">${slots.top ? slots.top({}) : ``}</div> <div class="top-14 svelte-xsoxdu">${slots.groups ? slots.groups({}) : ``}</div> </main>`;
});
const css$1 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');",
  map: null
};
const GroupCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { members } = $$props;
  let { position } = $$props;
  let { url } = $$props;
  let { creation } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.members === void 0 && $$bindings.members && members !== void 0) $$bindings.members(members);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.creation === void 0 && $$bindings.creation && creation !== void 0) $$bindings.creation(creation);
  $$result.css.add(css$1);
  return ``;
});
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');@media only screen and (width < 1400px){}@media only screen and (width < 1130px){}@media only screen and (width < 965px){}@media only screen and (width < 890px){}",
  map: null
};
const GroupCardTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { members } = $$props;
  let { position } = $$props;
  let { creation } = $$props;
  let { url } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.members === void 0 && $$bindings.members && members !== void 0) $$bindings.members(members);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.creation === void 0 && $$bindings.creation && creation !== void 0) $$bindings.creation(creation);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  $$result.css.add(css);
  return `Let this run`;
});
const groups = [
  {
    name: "LUMIERE_ERC",
    creation: 1659705600,
    members: 18,
    ontract: "0x1a678d24c5f0947de11cc433ad4be8d0c583bd6b"
  },
  {
    name: "TaylorSwift_ERC20",
    creation: 1643500800,
    members: 4,
    ontract: "0xe5344aa226f7bd5dad0c0b31a6426049e7adaca1"
  },
  {
    name: "ethereuminucoin",
    creation: 1643500800,
    members: 3,
    ontract: "0x1ef846ce0da79d8d4e111bf8c5117cd1209a0478"
  },
  {
    name: "xerc20",
    creation: 1643500800,
    members: 2,
    ontract: "0x6c10d1611a5a95cb967e4bcab5791fd101194949"
  },
  {
    name: "Nexyfi_Portal",
    creation: 1643500800,
    members: 2,
    ontract: "0x559c65106951035033bd44217a03ffcc0a64b30f"
  },
  {
    name: "ZeroXCopyETH",
    creation: 1643500800,
    members: 2,
    ontract: "0x5690f48e1ab440d704ec7175497c10f922bb6176"
  },
  {
    name: "kabochancommunity",
    creation: 1643500800,
    members: 2,
    ontract: "0x0c5cb676e38d6973837b9496f6524835208145a2"
  },
  {
    name: "sleep_entry",
    creation: 1643500800,
    members: 1,
    ontract: "0x094a8b5e9e1e66ae3e7e60053ed4fc292edd5272"
  },
  {
    name: "dibbles_official",
    creation: 1643500800,
    members: 1,
    ontract: "0x891de5f139791ddf9dbabf519cfe2a049f8fc6d3"
  },
  {
    name: "babytrump_portal",
    creation: 1643500800,
    members: 1,
    ontract: "0xe58f78f94313b5a4ff5f9bed5d3612d74c9713e8"
  },
  {
    name: "BudderDawgToken",
    creation: 1643500800,
    members: 1,
    ontract: "0x06ee6cca6d6cdca3326c4b6f0fd204c694cede89"
  },
  {
    name: "MemeAICoin",
    creation: 1643500800,
    members: 1,
    ontract: "0x4c9d49f5110a9925442e7f19934ef23e6cfa7e12"
  },
  {
    name: "InstaApeETH",
    creation: 1643500800,
    members: 1,
    ontract: "0xc713d944bb525a406fc92104d8ce513c7008730b"
  },
  {
    name: "BerachainPortal",
    creation: 1643500800,
    members: 1,
    ontract: "0x82c6cff50b06617b48d4ae16747bedc93f8ec417"
  },
  {
    name: "GrokERC20",
    creation: 1643500800,
    members: 1,
    ontract: "0x8390a1da07e376ef7add4be859ba74fb83aa02d5"
  }
];
const data = {
  groups
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iterable = data.groups;
  iterable.sort((a, b) => b.members - a.members);
  let iterable_2 = iterable.slice(1);
  {
    console.log(iterable);
  }
  return `${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(HeroCard, "HeroCard").$$render(
        $$result,
        {
          border_radius_outer: 30,
          border_radius_inner: 28
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(GroupCardTop, "GroupCardTop").$$render(
    $$result,
    {
      url: "https://t.me/" + iterable[0].name,
      name: "@" + iterable[0].name,
      members: iterable[0].members,
      position: "1",
      contract: iterable[0].ontract,
      creation: iterable[0].creation
    },
    {},
    {}
  )} ${validate_component(Groups, "Groups").$$render($$result, {}, {}, {
    groups: () => {
      return `${each(iterable_2, (group, i) => {
        return `${validate_component(GroupCard, "GroupCard").$$render(
          $$result,
          {
            url: "https://t.me/" + group.name,
            name: "@" + group.name,
            members: group.members,
            position: i + 2,
            contract: group.ontract,
            creation: group.creation
          },
          {},
          {}
        )}`;
      })}`;
    }
  })} ${validate_component(TokenPage, "TokenPage").$$render($$result, {}, {}, {})} ${validate_component(Revenue, "Revenue").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
