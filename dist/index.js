"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  addAlphaToHex: () => addAlphaToHex,
  brightnessDifference: () => brightnessDifference,
  chroma: () => chroma,
  colorDifference: () => colorDifference,
  compare: () => compare,
  contrast: () => contrast,
  convert: () => convert,
  convertAlphaToHex: () => convertAlphaToHex,
  darken: () => darken,
  default: () => index_default,
  desaturate: () => desaturate,
  extractAlphaFromHex: () => extractAlphaFromHex,
  extractColorParts: () => extractColorParts,
  formatCSS: () => formatCSS,
  formatHex: () => formatHex,
  getOkLCHMaxChroma: () => getOkLCHMaxChroma,
  getP3Color: () => getP3Color,
  hex2hsl: () => hex2hsl,
  hex2oklab: () => hex2oklab,
  hex2oklch: () => hex2oklch,
  hex2rgb: () => hex2rgb,
  hexadecimalToNumber: () => hexadecimalToNumber,
  hsl2hex: () => hsl2hex,
  hsl2oklab: () => hsl2oklab,
  hsl2oklch: () => hsl2oklch,
  hsl2rgb: () => hsl2rgb,
  isHSL: () => isHSL,
  isHex: () => isHex,
  isLAB: () => isLAB,
  isLCH: () => isLCH,
  isRGB: () => isRGB,
  isValidColor: () => isValidColor,
  lighten: () => lighten,
  luminance: () => luminance,
  name: () => name,
  oklab2hex: () => oklab2hex,
  oklab2hsl: () => oklab2hsl,
  oklab2oklch: () => oklab2oklch,
  oklab2rgb: () => oklab2rgb,
  oklch2hex: () => oklch2hex,
  oklch2hsl: () => oklch2hsl,
  oklch2oklab: () => oklch2oklab,
  oklch2rgb: () => oklch2rgb,
  opacify: () => opacify,
  opacity: () => opacity,
  palette: () => palette,
  parseCSS: () => parseCSS,
  random: () => random,
  removeAlphaFromHex: () => removeAlphaFromHex,
  rgb2hex: () => rgb2hex,
  rgb2hsl: () => rgb2hsl,
  rgb2oklab: () => rgb2oklab,
  rgb2oklch: () => rgb2oklch,
  rotate: () => rotate,
  saturate: () => saturate,
  scheme: () => scheme,
  swatch: () => swatch,
  textColor: () => textColor,
  transparentize: () => transparentize
});
module.exports = __toCommonJS(index_exports);

// src/modules/constants.ts
var COLOR_KEYS = {
  hsl: ["h", "s", "l"],
  oklab: ["l", "a", "b"],
  oklch: ["l", "c", "h"],
  rgb: ["r", "g", "b"]
};
var COLOR_MODELS = ["hsl", "oklab", "oklch", "rgb"];
var DEG2RAD = Math.PI / 180;
var LAB_TO_LMS = {
  l: [0.3963377773761749, 0.2158037573099136],
  m: [-0.1055613458156586, -0.0638541728258133],
  s: [-0.0894841775298119, -1.2914855480194092]
};
var LRGB_TO_LMS = {
  l: [0.4122214708, 0.5363325363, 0.0514459929],
  m: [0.2119034982, 0.6806995451, 0.1073969566],
  s: [0.0883024619, 0.2817188376, 0.6299787005]
};
var LSM_TO_LAB = {
  l: [0.2104542553, 0.793617785, 0.0040720468],
  a: [1.9779984951, 2.428592205, 0.4505937099],
  b: [0.0259040371, 0.7827717662, 0.808675766]
};
var LSM_TO_RGB = {
  r: [4.076741636075958, -3.307711539258063, 0.2309699031821043],
  g: [-1.2684379732850315, 2.609757349287688, -0.341319376002657],
  b: [-0.0041960761386756, -0.7034186179359362, 1.7076146940746117]
};
var SRGB_TO_P3 = [
  [0.8224270476, 0.1775729524, 0],
  [0.0331008087, 0.9668991913, 0],
  [0.0170720188, 0.0723477973, 0.9105801839]
];
var PRECISION = 5;
var RAD2DEG = 180 / Math.PI;
var MESSAGES = {
  alpha: "amount must be a number between 0 and 1",
  hueRange: "hue must be a number between 0 and 360",
  input: "input is required",
  inputHex: "input is required and must be a hex",
  inputNumber: "input is required and must be a number",
  inputString: "input is required and must be a string",
  invalid: "invalid input",
  invalidCSS: "invalid CSS string",
  left: "left is required and must be a string",
  lightnessRange: "lightness must be a number between 0 and 1",
  options: "invalid options",
  right: "right is required and must be a string",
  threshold: "threshold must be a number between 0 and 255"
};

// src/modules/invariant.ts
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (process.env.NODE_ENV !== "production") {
    if (message === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  const error = !message ? new Error(
    "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
  ) : new Error(message);
  error.name = "colorizr";
  throw error;
}

// src/modules/css-colors.ts
var cssColors = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  grey: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// src/modules/validators.ts
function hasValidMatches(input) {
  return Array.isArray(input) && input.length === 6;
}
function isHex(input) {
  if (!isString(input)) {
    return false;
  }
  return /^#([\da-f]{3,4}|[\da-f]{6,8})$/i.test(input);
}
function isHSL(input) {
  if (!isPlainObject(input)) {
    return false;
  }
  const entries = Object.entries(input);
  return !!entries.length && entries.every(([key, value]) => {
    if (key === "h") {
      return value >= 0 && value <= 360;
    }
    if (key === "alpha") {
      return value >= 0 && value <= 1;
    }
    return COLOR_KEYS.hsl.includes(key) && value >= 0 && value <= 100;
  });
}
function isLAB(input) {
  if (!isPlainObject(input)) {
    return false;
  }
  const entries = Object.entries(input);
  return !!entries.length && entries.every(([key, value]) => {
    if (key === "l") {
      return value >= 0 && value <= 100;
    }
    if (key === "alpha") {
      return value >= 0 && value <= 1;
    }
    return COLOR_KEYS.oklab.includes(key) && value >= -1 && value <= 1;
  });
}
function isLCH(input) {
  if (!isPlainObject(input)) {
    return false;
  }
  const entries = Object.entries(input);
  return !!entries.length && entries.every(([key, value]) => {
    if (key === "l") {
      return value >= 0 && value <= 100;
    }
    if (key === "alpha") {
      return value >= 0 && value <= 1;
    }
    return COLOR_KEYS.oklch.includes(key) && value >= 0 && value <= (key === "h" ? 360 : 1);
  });
}
function isNamedColor(input) {
  return isString(input) && Object.keys(cssColors).includes(input.toLowerCase());
}
function isNumber(input) {
  return typeof input === "number" && !Number.isNaN(input);
}
function isPlainObject(input) {
  if (!input) {
    return false;
  }
  const { toString } = Object.prototype;
  const prototype = Object.getPrototypeOf(input);
  return toString.call(input) === "[object Object]" && (prototype === null || prototype === Object.getPrototypeOf({}));
}
function isRGB(input) {
  if (!isPlainObject(input)) {
    return false;
  }
  const entries = Object.entries(input);
  return !!entries.length && entries.every(([key, value]) => {
    if (key === "alpha") {
      return value >= 0 && value <= 1;
    }
    return COLOR_KEYS.rgb.includes(key) && value >= 0 && value <= 255;
  });
}
function isString(input, validate = true) {
  const isValid = typeof input === "string";
  if (validate) {
    return isValid && !!input.trim().length;
  }
  return isValid;
}
function isValidColorModel(input) {
  return isHSL(input) || isRGB(input) || isLAB(input) || isLCH(input);
}

// src/modules/utils.ts
function addAlpha(input, alpha) {
  invariant(isValidColorModel(input), MESSAGES.invalid);
  let value = alpha;
  if (!value) {
    return input;
  }
  if (value > 1) {
    value /= 100;
  }
  if (value === 1) {
    return input;
  }
  return { ...input, alpha: value };
}
function clamp(value, min = 0, max = 100) {
  return Math.min(Math.max(value, min), max);
}
function constrainDegrees(input, amount) {
  invariant(isNumber(input), MESSAGES.inputNumber);
  let value = input + amount;
  if (value > 360) {
    value %= 360;
  }
  if (value < 0) {
    value += 360;
  }
  return Math.abs(value);
}
function limit(input, model, key) {
  invariant(isNumber(input), "Input is not a number");
  invariant(COLOR_MODELS.includes(model), `Invalid model${model ? `: ${model}` : ""}`);
  invariant(COLOR_KEYS[model].includes(key), `Invalid key${key ? `: ${key}` : ""}`);
  switch (model) {
    case "hsl": {
      invariant(COLOR_KEYS.hsl.includes(key), "Invalid key");
      if (["l", "s"].includes(key)) {
        return clamp(input);
      }
      return clamp(input, 0, 360);
    }
    case "rgb": {
      invariant(COLOR_KEYS.rgb.includes(key), "Invalid key");
      return clamp(input, 0, 255);
    }
    /* c8 ignore next 3 */
    default: {
      throw new Error("Invalid inputs");
    }
  }
}
function parseInput(input, model) {
  const keys = COLOR_KEYS[model];
  const validator = {
    hsl: isHSL,
    oklab: isLAB,
    oklch: isLCH,
    rgb: isRGB
  };
  invariant(isPlainObject(input) || Array.isArray(input), MESSAGES.invalid);
  const value = Array.isArray(input) ? { [keys[0]]: input[0], [keys[1]]: input[1], [keys[2]]: input[2] } : input;
  invariant(validator[model](value), `invalid ${model} color`);
  return value;
}
function restrictValues(input, precision = PRECISION, forcePrecision = true) {
  const output = new Map(Object.entries(input));
  for (const [key, value] of output.entries()) {
    output.set(key, round(value, precision, forcePrecision));
  }
  return Object.fromEntries(output);
}
function round(input, precision = 2, forcePrecision = true) {
  if (!isNumber(input) || input === 0) {
    return 0;
  }
  if (forcePrecision) {
    const factor2 = 10 ** precision;
    return Math.round(input * factor2) / factor2;
  }
  const absInput = Math.abs(input);
  let digits = Math.abs(Math.ceil(Math.log(absInput) / Math.LN10));
  if (digits === 0) {
    digits = 2;
  } else if (digits > precision) {
    digits = precision;
  }
  let exponent = precision - (digits < 0 ? 0 : digits);
  if (exponent <= 1 && precision > 1) {
    exponent = 2;
  } else if (exponent > precision || exponent === 0) {
    exponent = precision;
  }
  const factor = 10 ** exponent;
  return Math.round(input * factor) / factor;
}

// src/converters/index.ts
var converters_exports = {};
__export(converters_exports, {
  hex2hsl: () => hex2hsl,
  hex2oklab: () => hex2oklab,
  hex2oklch: () => hex2oklch,
  hex2rgb: () => hex2rgb,
  hsl2hex: () => hsl2hex,
  hsl2oklab: () => hsl2oklab,
  hsl2oklch: () => hsl2oklch,
  hsl2rgb: () => hsl2rgb,
  oklab2hex: () => oklab2hex,
  oklab2hsl: () => oklab2hsl,
  oklab2oklch: () => oklab2oklch,
  oklab2rgb: () => oklab2rgb,
  oklch2hex: () => oklch2hex,
  oklch2hsl: () => oklch2hsl,
  oklch2oklab: () => oklch2oklab,
  oklch2rgb: () => oklch2rgb,
  rgb2hex: () => rgb2hex,
  rgb2hsl: () => rgb2hsl,
  rgb2oklab: () => rgb2oklab,
  rgb2oklch: () => rgb2oklch
});

// src/format-hex.ts
function formatHex(input) {
  invariant(isHex(input), MESSAGES.inputHex);
  let color = input.replace("#", "");
  if (color.length === 3 || color.length === 4) {
    const values = [...color];
    color = "";
    values.forEach((d) => {
      color += `${d}${d}`;
    });
  }
  const hex = `#${color}`;
  invariant(isHex(hex), "invalid hex");
  return hex;
}

// src/converters/hex2rgb.ts
function hex2rgb(input) {
  invariant(isHex(input), MESSAGES.inputHex);
  const hex = formatHex(input).slice(1);
  return {
    r: parseInt(hex.charAt(0) + hex.charAt(1), 16),
    g: parseInt(hex.charAt(2) + hex.charAt(3), 16),
    b: parseInt(hex.charAt(4) + hex.charAt(5), 16)
  };
}

// src/converters/rgb2hsl.ts
function rgb2hsl(input) {
  const value = parseInput(input, "rgb");
  const rLimit = limit(value.r, "rgb", "r") / 255;
  const gLimit = limit(value.g, "rgb", "g") / 255;
  const bLimit = limit(value.b, "rgb", "b") / 255;
  const min = Math.min(rLimit, gLimit, bLimit);
  const max = Math.max(rLimit, gLimit, bLimit);
  const delta = max - min;
  let h = 0;
  let s;
  const l = (max + min) / 2;
  let rate;
  switch (max) {
    case rLimit:
      rate = !delta ? 0 : (gLimit - bLimit) / delta;
      h = 60 * rate;
      break;
    case gLimit:
      rate = (bLimit - rLimit) / delta;
      h = 60 * rate + 120;
      break;
    case bLimit:
      rate = (rLimit - gLimit) / delta;
      h = 60 * rate + 240;
      break;
    /* c8 ignore next 2 */
    default:
      break;
  }
  if (h < 0) {
    h = 360 + h;
  }
  if (min === max) {
    s = 0;
  } else {
    s = l < 0.5 ? delta / (2 * l) : delta / (2 - 2 * l);
  }
  return {
    h: Math.abs(+(h % 360).toFixed(2)),
    s: +(s * 100).toFixed(2),
    l: +(l * 100).toFixed(2)
  };
}

// src/converters/hex2hsl.ts
function hex2hsl(input) {
  invariant(isHex(input), MESSAGES.inputHex);
  return rgb2hsl(hex2rgb(input));
}

// src/converters/rgb2oklab.ts
var { cbrt, sign } = Math;
function rgb2lrgb(input) {
  const abs2 = Math.abs(input);
  if (abs2 < 0.04045) {
    return input / 12.92;
  }
  return (sign(input) || 1) * ((abs2 + 0.055) / 1.055) ** 2.4;
}
function rgb2oklab(input, precision = PRECISION) {
  const value = parseInput(input, "rgb");
  const [lr, lg, lb] = [rgb2lrgb(value.r / 255), rgb2lrgb(value.g / 255), rgb2lrgb(value.b / 255)];
  const l = cbrt(LRGB_TO_LMS.l[0] * lr + LRGB_TO_LMS.l[1] * lg + LRGB_TO_LMS.l[2] * lb);
  const m = cbrt(LRGB_TO_LMS.m[0] * lr + LRGB_TO_LMS.m[1] * lg + LRGB_TO_LMS.m[2] * lb);
  const s = cbrt(LRGB_TO_LMS.s[0] * lr + LRGB_TO_LMS.s[1] * lg + LRGB_TO_LMS.s[2] * lb);
  const lab = {
    l: LSM_TO_LAB.l[0] * l + LSM_TO_LAB.l[1] * m - LSM_TO_LAB.l[2] * s,
    a: LSM_TO_LAB.a[0] * l - LSM_TO_LAB.a[1] * m + LSM_TO_LAB.a[2] * s,
    b: LSM_TO_LAB.b[0] * l + LSM_TO_LAB.b[1] * m - LSM_TO_LAB.b[2] * s
  };
  return restrictValues(lab, precision);
}

// src/converters/hex2oklab.ts
function hex2oklab(input, precision) {
  invariant(isHex(input), MESSAGES.inputHex);
  return rgb2oklab(hex2rgb(input), precision);
}

// src/converters/oklab2oklch.ts
var { atan2, sqrt } = Math;
function oklab2oklch(input, precision) {
  const { l, a, b } = restrictValues(parseInput(input, "oklab"));
  const c = sqrt(a ** 2 + b ** 2);
  let h = (atan2(b, a) * RAD2DEG + 360) % 360;
  if (round(c * 1e4) === 0) {
    h = 0;
  }
  return restrictValues({ l, c, h }, precision);
}

// src/converters/rgb2oklch.ts
function rgb2oklch(input, precision) {
  const value = parseInput(input, "rgb");
  return oklab2oklch(rgb2oklab(value, precision), precision);
}

// src/converters/hex2oklch.ts
function hex2oklch(input, precision) {
  invariant(isHex(input), MESSAGES.inputHex);
  return rgb2oklch(hex2rgb(input), precision);
}

// src/modules/hue2rgb.ts
function hue2rgb(point, chroma2, h) {
  invariant(isNumber(point) && isNumber(chroma2) && isNumber(h), "point, chroma and h are required");
  let hue = h;
  if (hue < 0) {
    hue += 1;
  }
  if (hue > 1) {
    hue -= 1;
  }
  if (hue < 1 / 6) {
    return round(point + (chroma2 - point) * 6 * hue, 4);
  }
  if (hue < 1 / 2) {
    return round(chroma2, 4);
  }
  if (hue < 2 / 3) {
    return round(point + (chroma2 - point) * (2 / 3 - hue) * 6, 4);
  }
  return round(point, 4);
}

// src/converters/hsl2rgb.ts
function hsl2rgb(input) {
  const value = parseInput(input, "hsl");
  const h = round(value.h) / 360;
  const s = round(value.s) / 100;
  const l = round(value.l) / 100;
  let r;
  let g;
  let b;
  let point;
  let chroma2;
  if (s === 0) {
    r = l;
    g = l;
    b = l;
  } else {
    chroma2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    point = 2 * l - chroma2;
    r = hue2rgb(point, chroma2, h + 1 / 3);
    g = hue2rgb(point, chroma2, h);
    b = hue2rgb(point, chroma2, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

// src/converters/rgb2hex.ts
function rgb2hex(input) {
  const rgb = parseInput(input, "rgb");
  return `#${Object.values(rgb).map((d) => `0${Math.floor(d).toString(16)}`.slice(-2)).join("")}`;
}

// src/converters/hsl2hex.ts
function hsl2hex(input) {
  const value = parseInput(input, "hsl");
  return rgb2hex(hsl2rgb(value));
}

// src/converters/hsl2oklab.ts
function hsl2oklab(input, precision) {
  const value = parseInput(input, "hsl");
  return rgb2oklab(hsl2rgb(value), precision);
}

// src/converters/hsl2oklch.ts
function hsl2oklch(input, precision) {
  const value = parseInput(input, "hsl");
  return rgb2oklch(hsl2rgb(value), precision);
}

// src/converters/oklab2rgb.ts
var { abs } = Math;
function lrgb2rgb(input) {
  const absoluteNumber = abs(input);
  const sign2 = input < 0 ? -1 : 1;
  if (absoluteNumber > 31308e-7) {
    return sign2 * (absoluteNumber ** (1 / 2.4) * 1.055 - 0.055);
  }
  return input * 12.92;
}
function oklab2rgb(input, precision = 0) {
  const { l: L, a: A, b: B } = parseInput(input, "oklab");
  const l = (L + LAB_TO_LMS.l[0] * A + LAB_TO_LMS.l[1] * B) ** 3;
  const m = (L + LAB_TO_LMS.m[0] * A + LAB_TO_LMS.m[1] * B) ** 3;
  const s = (L + LAB_TO_LMS.s[0] * A + LAB_TO_LMS.s[1] * B) ** 3;
  const r = 255 * lrgb2rgb(LSM_TO_RGB.r[0] * l + LSM_TO_RGB.r[1] * m + LSM_TO_RGB.r[2] * s);
  const g = 255 * lrgb2rgb(LSM_TO_RGB.g[0] * l + LSM_TO_RGB.g[1] * m + LSM_TO_RGB.g[2] * s);
  const b = 255 * lrgb2rgb(LSM_TO_RGB.b[0] * l + LSM_TO_RGB.b[1] * m + LSM_TO_RGB.b[2] * s);
  return {
    r: clamp(round(r, precision), 0, 255),
    g: clamp(round(g, precision), 0, 255),
    b: clamp(round(b, precision), 0, 255)
  };
}

// src/converters/oklab2hex.ts
function oklab2hex(input) {
  const value = parseInput(input, "oklab");
  return rgb2hex(oklab2rgb(value));
}

// src/converters/oklab2hsl.ts
function oklab2hsl(input) {
  const value = parseInput(input, "oklab");
  return rgb2hsl(oklab2rgb(value));
}

// src/converters/oklch2oklab.ts
var { sin, cos } = Math;
function oklch2oklab(input, precision) {
  let { l, c, h } = parseInput(input, "oklch");
  if (Number.isNaN(h) || h < 0) {
    h = 0;
  }
  return restrictValues({ l, a: c * cos(h * DEG2RAD), b: c * sin(h * DEG2RAD) }, precision);
}

// src/converters/oklch2rgb.ts
function oklch2rgb(input, precision = 0) {
  const value = parseInput(input, "oklch");
  return oklab2rgb(oklch2oklab(value), precision);
}

// src/converters/oklch2hex.ts
function oklch2hex(input) {
  const value = parseInput(input, "oklch");
  return rgb2hex(oklch2rgb(value));
}

// src/converters/oklch2hsl.ts
function oklch2hsl(input) {
  const value = parseInput(input, "oklch");
  return rgb2hsl(oklch2rgb(value));
}

// src/modules/hex-utils.ts
function addAlphaToHex(input, alpha) {
  invariant(isHex(input), MESSAGES.inputHex);
  invariant(isNumber(alpha), MESSAGES.inputNumber);
  if (alpha >= 1) {
    return removeAlphaFromHex(input);
  }
  return `${removeAlphaFromHex(input)}${convertAlphaToHex(alpha)}`;
}
function convertAlphaToHex(input) {
  invariant(isNumber(input), MESSAGES.inputNumber);
  let alpha = input;
  if (input > 1) {
    alpha /= 100;
  }
  return Math.round(alpha * 255).toString(16).padStart(2, "0");
}
function extractAlphaFromHex(input) {
  invariant(isHex(input), MESSAGES.inputString);
  const alpha = input.substring(7, 9);
  if (!alpha) {
    return 1;
  }
  return round(parseInt(alpha, 16) / 255);
}
function hexadecimalToNumber(input) {
  return round(parseInt(input, 16));
}
function removeAlphaFromHex(input) {
  invariant(isHex(input), MESSAGES.inputHex);
  if (input.length === 5) {
    return input.substring(0, 4);
  }
  return input.substring(0, 7);
}

// src/extract-color-parts.ts
function extractColorParts(input) {
  invariant(isString(input), MESSAGES.inputString);
  if (isHex(input)) {
    const keys2 = COLOR_KEYS.rgb;
    const { r, g, b } = hex2rgb(input);
    const alpha2 = extractAlphaFromHex(input);
    return {
      model: "rgb",
      [keys2[0]]: r,
      [keys2[1]]: g,
      [keys2[2]]: b,
      alpha: alpha2 < 1 ? alpha2 : void 0
    };
  }
  const colorRegex = /(?:(rgb|hsl|oklab|oklch)a?\s*\(\s*([\d%.-]+)\s*[ ,/]\s*([\d%.-]+)\s*[ ,/]\s*([\d%.-]+)(?:\s*[ ,/]\s*([\d%.-]+))?\s*\))/i;
  const matches = colorRegex.exec(input);
  invariant(hasValidMatches(matches), MESSAGES.invalidCSS);
  const model = matches[1];
  const keys = COLOR_KEYS[model];
  let alpha = matches[5] ? parseFloat(matches[5]) : 1;
  if (alpha > 1) {
    alpha /= 100;
  }
  return {
    model,
    [keys[0]]: parseFloat(matches[2]),
    [keys[1]]: parseFloat(matches[3]),
    [keys[2]]: parseFloat(matches[4]),
    alpha: alpha < 1 ? alpha : void 0
  };
}

// src/parse-css.ts
function parseCSS(input, format) {
  invariant(isString(input), MESSAGES.inputString);
  let result;
  const value = isNamedColor(input) ? cssColors[input.toLowerCase()] : input;
  const output = format ?? (isHex(value) ? "hex" : extractColorParts(value).model);
  const colorParams = (params) => Object.values(params);
  if (isHex(value)) {
    const alpha = extractAlphaFromHex(value);
    switch (output) {
      case "hsl": {
        result = addAlpha(hex2hsl(value), alpha);
        break;
      }
      case "oklab": {
        result = addAlpha(hex2oklab(value), alpha);
        break;
      }
      case "oklch": {
        result = addAlpha(hex2oklch(value), alpha);
        break;
      }
      case "rgb": {
        result = addAlpha(hex2rgb(value), alpha);
        break;
      }
      default: {
        result = `${removeAlphaFromHex(value)}${alpha !== 1 ? convertAlphaToHex(alpha) : ""}`;
        break;
      }
    }
    return result;
  }
  switch (output) {
    case "hsl": {
      const { alpha, model, ...color } = extractColorParts(value);
      if (["oklab", "oklch"].includes(model) && color.l > 1) {
        color.l = round(color.l / 100, PRECISION);
      }
      result = addAlpha(
        model === "hsl" ? color : converters_exports[`${model}2hsl`](colorParams(color)),
        alpha
      );
      break;
    }
    case "oklab": {
      const { alpha, model, ...color } = extractColorParts(value);
      if (["oklab", "oklch"].includes(model) && color.l > 1) {
        color.l = round(color.l / 100, PRECISION);
      }
      result = addAlpha(
        model === "oklab" ? color : converters_exports[`${model}2oklab`](colorParams(color)),
        alpha
      );
      break;
    }
    case "oklch": {
      const { alpha, model, ...color } = extractColorParts(value);
      if (["oklab", "oklch"].includes(model) && color.l > 1) {
        color.l = round(color.l / 100, PRECISION);
      }
      result = addAlpha(
        model === "oklch" ? color : converters_exports[`${model}2oklch`](colorParams(color)),
        alpha
      );
      break;
    }
    case "rgb": {
      const { alpha, model, ...color } = extractColorParts(value);
      if (["oklab", "oklch"].includes(model) && color.l > 1) {
        color.l /= 100;
      }
      result = addAlpha(
        model === "rgb" ? color : converters_exports[`${model}2rgb`](colorParams(color)),
        alpha
      );
      break;
    }
    case "hex":
    default: {
      const { alpha, model, ...color } = extractColorParts(value);
      let alphaPrefix = "";
      if (["oklab", "oklch"].includes(model) && color.l > 1) {
        color.l = round(color.l / 100, PRECISION);
      }
      if (alpha) {
        alphaPrefix = convertAlphaToHex(alpha);
      }
      result = `${converters_exports[`${model}2hex`](colorParams(color))}${alphaPrefix}`;
      break;
    }
  }
  return result;
}

// src/brightness-difference.ts
function brightnessDifference(left, right, precision = PRECISION) {
  invariant(isString(left), MESSAGES.left);
  invariant(isString(right), MESSAGES.right);
  const RGBLeft = parseCSS(left, "rgb");
  const RGBRight = parseCSS(right, "rgb");
  const brightnessLeft = (RGBLeft.r * 299 + RGBLeft.g * 587 + RGBLeft.b * 114) / 1e3;
  const brightnessRight = (RGBRight.r * 299 + RGBRight.g * 587 + RGBRight.b * 114) / 1e3;
  return round(Math.abs(brightnessRight - brightnessLeft), precision);
}

// src/chroma.ts
function chroma(input) {
  invariant(isString(input), MESSAGES.inputString);
  const { r, g, b } = parseCSS(input, "rgb");
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return round((max - min) / 255, 4);
}

// src/color-difference.ts
function colorDifference(left, right) {
  invariant(isString(left), MESSAGES.left);
  invariant(isString(right), MESSAGES.right);
  const RGBLeft = parseCSS(left, "rgb");
  const RGBRight = parseCSS(right, "rgb");
  return Math.max(RGBLeft.r, RGBRight.r) - Math.min(RGBLeft.r, RGBRight.r) + (Math.max(RGBLeft.g, RGBRight.g) - Math.min(RGBLeft.g, RGBRight.g)) + (Math.max(RGBLeft.b, RGBRight.b) - Math.min(RGBLeft.b, RGBRight.b));
}

// src/luminance.ts
function luminance(input) {
  invariant(isString(input), MESSAGES.inputString);
  const { r, g, b } = parseCSS(input, "rgb");
  const rgb = [r / 255, g / 255, b / 255];
  for (let index = 0; index < rgb.length; index++) {
    if (rgb[index] <= 0.03928) {
      rgb[index] /= 12.92;
    } else {
      rgb[index] = ((rgb[index] + 0.055) / 1.055) ** 2.4;
    }
  }
  return round(0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2], 4);
}

// src/contrast.ts
function contrast(left, right) {
  invariant(isString(left), MESSAGES.left);
  invariant(isString(right), MESSAGES.right);
  const LuminanceLeft = luminance(left);
  const LuminanceRight = luminance(right);
  return round(
    LuminanceLeft >= LuminanceRight ? (LuminanceLeft + 0.05) / (LuminanceRight + 0.05) : (LuminanceRight + 0.05) / (LuminanceLeft + 0.05)
  );
}

// src/compare.ts
function compare(left, right) {
  invariant(isString(left), MESSAGES.left);
  invariant(isString(right), MESSAGES.right);
  const colorThreshold = 500;
  const brightnessThreshold = 125;
  const colorDifference2 = colorDifference(left, right);
  const contrast2 = contrast(left, right);
  const brightnessDifference2 = brightnessDifference(left, right);
  const isBright = brightnessDifference2 >= brightnessThreshold;
  const hasEnoughDifference = colorDifference2 >= colorThreshold;
  let compliant = 0;
  if (isBright && hasEnoughDifference) {
    compliant = 2;
  } else if (isBright || hasEnoughDifference) {
    compliant = 1;
  }
  return {
    brightnessDifference: brightnessDifference2,
    colorDifference: colorDifference2,
    compliant,
    contrast: contrast2,
    largeAA: contrast2 >= 3,
    largeAAA: contrast2 >= 4.5,
    normalAA: contrast2 >= 4.5,
    normalAAA: contrast2 >= 7
  };
}

// src/format-css.ts
function getColorModel(input) {
  if (isHex(input) || isNamedColor(input)) {
    return "hex";
  }
  if (isString(input)) {
    return extractColorParts(input).model;
  } else if (isHSL(input)) {
    return "hsl";
  } else if (isLAB(input)) {
    return "oklab";
  } else if (isLCH(input)) {
    return "oklch";
  } else if (isRGB(input)) {
    return "rgb";
  }
  throw new Error(MESSAGES.invalid);
}
function getColorValue(input, output) {
  const value = isNamedColor(input) ? cssColors[input.toLowerCase()] : input;
  const from = getColorModel(value);
  if (from === output) {
    return value;
  }
  const converterKey = `${from}2${output}`;
  const converter = converters_exports[converterKey];
  if (!converter) {
    throw new Error(`Converter not found for ${from} to ${output}`);
  }
  switch (from) {
    case "hex": {
      if (output === "hex") {
        return value;
      }
      return converter(value);
    }
    case "hsl": {
      if (output === "hsl") {
        return value;
      }
      return converter(value);
    }
    case "oklab": {
      if (output === "oklab") {
        return value;
      }
      return converter(value);
    }
    case "oklch": {
      if (output === "oklch") {
        return value;
      }
      return converter(value);
    }
    default: {
      if (output === "rgb") {
        return value;
      }
      return converter(value);
    }
  }
}
function formatCSS(input, options = {}) {
  invariant(isHex(input) || isValidColorModel(input), MESSAGES.invalid);
  const { alpha, format = "hex", precision = PRECISION, separator: baseSeparator = " " } = options;
  const opacity2 = alpha && alpha !== 1 ? `${round(alpha * 100)}%` : null;
  let params = [];
  let separator = baseSeparator;
  switch (format) {
    case "hsl": {
      const { h, s, l } = getColorValue(input, "hsl");
      params = [h, `${s}%`, `${l}%`];
      break;
    }
    case "oklab": {
      separator = " ";
      const { l, a, b } = restrictValues(getColorValue(input, "oklab"), precision);
      params = [`${round(l * 100, precision)}%`, a, b];
      break;
    }
    case "oklch": {
      separator = " ";
      const { l, c, h } = restrictValues(getColorValue(input, "oklch"), precision);
      params = [`${round(l * 100, precision)}%`, c, h];
      break;
    }
    case "rgb": {
      const { r, g, b } = getColorValue(input, "rgb");
      params = [r, g, b];
      break;
    }
    default: {
      const hex = removeAlphaFromHex(getColorValue(input, "hex"));
      if (alpha && alpha !== 1) {
        return `${hex}${convertAlphaToHex(alpha)}`;
      }
      return hex;
    }
  }
  return `${format}(${params.join(separator)}${opacity2 ? ` / ${opacity2}` : ""})`;
}

// src/modules/updater.ts
function updater(key, operator, format) {
  return (input, amount) => {
    invariant(isString(input), MESSAGES.inputString);
    invariant(isNumber(amount), MESSAGES.alpha);
    const color = parseCSS(input, "hsl");
    const output = isHex(input) || isNamedColor(input) ? "hex" : extractColorParts(input).model;
    return formatCSS(
      {
        ...color,
        [key]: clamp(color[key] + (operator === "+" ? amount : -amount), 0, 100)
      },
      { format: format ?? output }
    );
  };
}

// src/darken.ts
function darken(input, amount, format) {
  return updater("l", "-", format)(input, amount);
}

// src/desaturate.ts
function desaturate(input, amount, format) {
  return updater("s", "-", format)(input, amount);
}

// src/rotate.ts
function rotate(input, degrees, format) {
  invariant(isString(input), MESSAGES.inputString);
  invariant(isNumber(degrees), "degrees must be a number");
  const color = parseCSS(input, "hsl");
  const output = isHex(input) || isNamedColor(input) ? "hex" : extractColorParts(input).model;
  return formatCSS(
    {
      ...color,
      h: constrainDegrees(color.h, degrees)
    },
    { format: format ?? output }
  );
}

// src/invert.ts
function invert(input) {
  invariant(isString(input), MESSAGES.inputString);
  const format = isHex(input) || isNamedColor(input) ? "hex" : extractColorParts(input).model;
  const hex = parseCSS(input, "hex");
  return formatCSS(rotate(hex, 180), { format });
}

// src/lighten.ts
function lighten(input, amount, format) {
  return updater("l", "+", format)(input, amount);
}

// src/modules/parse-color.ts
function parseColor(color) {
  invariant(!!color, MESSAGES.input);
  const output = {};
  if (isString(color)) {
    const { alpha = 1 } = extractColorParts(color);
    const type = isHex(color) ? "hex" : extractColorParts(color).model;
    output.hex = addAlphaToHex(parseCSS(color, "hex"), alpha);
    output.hsl = addAlpha(parseCSS(color, "hsl"), alpha);
    output.oklab = addAlpha(parseCSS(color, "oklab"), alpha);
    output.oklch = addAlpha(parseCSS(color, "oklch"), alpha);
    output.rgb = addAlpha(parseCSS(color, "rgb"), alpha);
    output.alpha = alpha;
    output.type = type;
  } else if (isPlainObject(color)) {
    const { alpha = 1 } = color;
    if (isHSL(color)) {
      output.hsl = {
        h: limit(color.h, "hsl", "h"),
        s: limit(color.s, "hsl", "s"),
        l: limit(color.l, "hsl", "l")
      };
      output.rgb = hsl2rgb(output.hsl);
      output.oklab = hsl2oklab(output.hsl);
      output.oklch = hsl2oklch(output.hsl);
      output.type = "hsl";
    } else if (isLAB(color)) {
      output.hsl = oklab2hsl(color);
      output.oklab = color;
      output.oklch = oklab2oklch(color);
      output.rgb = oklab2rgb(color);
      output.type = "oklab";
    } else if (isLCH(color)) {
      output.hsl = oklch2hsl(color);
      output.oklab = oklch2oklab(color);
      output.oklch = color;
      output.rgb = oklch2rgb(color);
      output.type = "oklch";
    } else if (isRGB(color)) {
      output.rgb = {
        r: limit(color.r, "rgb", "r"),
        g: limit(color.g, "rgb", "g"),
        b: limit(color.b, "rgb", "b")
      };
      output.hsl = rgb2hsl(output.rgb);
      output.oklab = rgb2oklab(output.rgb);
      output.oklch = rgb2oklch(output.rgb);
      output.type = "rgb";
    } else {
      throw new Error("invalid color");
    }
    output.hex = addAlphaToHex(hsl2hex(output.hsl), alpha);
    output.hsl = addAlpha(output.hsl, alpha);
    output.oklab = addAlpha(output.oklab, alpha);
    output.oklch = addAlpha(output.oklch, alpha);
    output.rgb = addAlpha(output.rgb, alpha);
    output.alpha = alpha;
  } else {
    throw new Error(MESSAGES.input);
  }
  return output;
}

// src/opacify.ts
function opacify(input, alpha, format) {
  invariant(isString(input), MESSAGES.inputString);
  invariant(isNumber(alpha), MESSAGES.alpha);
  const type = isHex(input) || isNamedColor(input) ? "hex" : extractColorParts(input).model;
  const rgb = parseCSS(input, "rgb");
  return formatCSS(rgb, { format: format ?? type, alpha });
}

// src/opacity.ts
function opacity(input) {
  invariant(isString(input), MESSAGES.inputString);
  if (isHex(input)) {
    return extractAlphaFromHex(input);
  } else if (Object.keys(cssColors).includes(input)) {
    return 1;
  }
  const { alpha } = extractColorParts(input);
  if (!alpha) {
    return 1;
  }
  return alpha;
}

// src/saturate.ts
function saturate(input, amount, format) {
  return updater("s", "+", format)(input, amount);
}

// src/text-color.ts
function textColor(input, options = {}) {
  const { darkColor = "#000000", lightColor = "#ffffff", threshold = 128 } = options;
  invariant(isString(input), MESSAGES.inputString);
  invariant(threshold >= 0 && threshold <= 255, MESSAGES.threshold);
  try {
    const { r, g, b } = hex2rgb(parseCSS(input, "hex"));
    const yiq = (r * 299 + g * 587 + b * 114) / 1e3;
    return yiq >= threshold ? darkColor : lightColor;
  } catch (error) {
    console.warn(`Invalid color input: ${input}`);
    console.warn(error);
    return darkColor;
  }
}

// src/transparentize.ts
function transparentize(input, alpha, format) {
  invariant(isString(input), MESSAGES.inputString);
  invariant(isNumber(alpha), MESSAGES.alpha);
  invariant(alpha >= -1 && alpha <= 1, MESSAGES.alpha);
  const oklch = parseCSS(input, "oklab");
  const value = round(clamp(opacity(input) - alpha, 0, 1));
  return formatCSS(oklch, { format, alpha: value });
}

// src/colorizr.ts
var Colorizr = class {
  constructor(color, options = {}) {
    __publicField(this, "alpha");
    __publicField(this, "hex");
    __publicField(this, "hsl");
    __publicField(this, "oklab");
    __publicField(this, "oklch");
    __publicField(this, "rgb");
    __publicField(this, "type");
    invariant(!!color, "color is required");
    const { alpha, hex, hsl, oklab, oklch, rgb, type } = parseColor(color);
    this.hex = hex;
    this.hsl = hsl;
    this.oklab = oklab;
    this.oklch = oklch;
    this.rgb = rgb;
    this.alpha = alpha;
    this.type = options.format ?? type;
  }
  /**
   * Get css string
   */
  get css() {
    return this.selectedColor;
  }
  /**
   * Get the red value
   */
  get red() {
    return Number(this.rgb.r);
  }
  /**
   * Get the green value
   */
  get green() {
    return Number(this.rgb.g);
  }
  /**
   * Get the blue value
   */
  get blue() {
    return Number(this.rgb.b);
  }
  /**
   * Get the hue value
   */
  get hue() {
    return Number(this.hsl.h);
  }
  /**
   * Get the saturation value
   */
  get saturation() {
    return Number(this.hsl.s);
  }
  /**
   * Get the lightness value
   */
  get lightness() {
    return Number(this.hsl.l);
  }
  /**
   * Get the luminance value
   */
  get luminance() {
    return luminance(this.selectedColor);
  }
  /**
   * Get the chroma value
   */
  get chroma() {
    return chroma(this.selectedColor);
  }
  get opacity() {
    return opacity(this.selectedColor);
  }
  /**
   * Get the contrasted color
   */
  get textColor() {
    return textColor(this.selectedColor);
  }
  get selectedColor() {
    return formatCSS(this[this.type], { format: this.type, alpha: this.alpha });
  }
  brightnessDifference(input) {
    return brightnessDifference(this.selectedColor, input);
  }
  colorDifference(input) {
    return colorDifference(this.selectedColor, input);
  }
  /**
   * Test 2 colors for compliance
   */
  compare(input) {
    return compare(this.selectedColor, input);
  }
  contrast(input) {
    return contrast(this.selectedColor, input);
  }
  format(type, precision) {
    return formatCSS(this.rgb, {
      alpha: this.alpha,
      format: type,
      precision
    });
  }
  /**
   * Increase lightness
   */
  lighten(amount) {
    return lighten(this.selectedColor, amount);
  }
  /**
   * Decrease lightness
   */
  darken(amount) {
    return darken(this.selectedColor, amount);
  }
  /**
   * Increase saturation
   */
  saturate(amount) {
    return saturate(this.selectedColor, amount);
  }
  /**
   * Decrease saturation
   */
  desaturate(amount) {
    return desaturate(this.selectedColor, amount);
  }
  /**
   * Invert color
   */
  invert() {
    return invert(this.selectedColor);
  }
  /**
   * Add opacity to the color.
   */
  opacify(alpha = 0.9) {
    return opacify(this.selectedColor, alpha, this.type);
  }
  /**
   * Rotate color
   */
  rotate(degrees) {
    return rotate(this.selectedColor, degrees);
  }
  /**
   * Make the color more transparent
   */
  transparentize(alpha = 0.1) {
    return transparentize(this.selectedColor, alpha, this.type);
  }
};

// src/convert.ts
function convert(input, format) {
  const value = parseCSS(input, format);
  return formatCSS(value, { format });
}

// src/is-valid-color.ts
function isValidColor(input) {
  try {
    parseCSS(input);
    return true;
  } catch {
    return false;
  }
}

// src/name.ts
function name(input) {
  invariant(isString(input), MESSAGES.inputString);
  const hex = parseCSS(input, "hex");
  const [color] = Object.entries(cssColors).find(([, value]) => value === hex) || [];
  return color ?? hex;
}

// src/p3.ts
function isInP3Gamut(color) {
  const epsilon = 1e-6;
  return color.every((component) => component >= 0 - epsilon && component <= 1 + epsilon);
}
function multiplyMatrix(matrix, vector) {
  return [
    matrix[0][0] * vector[0] + matrix[0][1] * vector[1] + matrix[0][2] * vector[2],
    matrix[1][0] * vector[0] + matrix[1][1] * vector[1] + matrix[1][2] * vector[2],
    matrix[2][0] * vector[0] + matrix[2][1] * vector[1] + matrix[2][2] * vector[2]
  ];
}
function oklabToLinearP3(L, a, b) {
  const srgb = oklabToLinearSRGB(L, a, b);
  return multiplyMatrix(SRGB_TO_P3, srgb);
}
function oklabToLinearSRGB(L, a, b) {
  const l = (L + LAB_TO_LMS.l[0] * a + LAB_TO_LMS.l[1] * b) ** 3;
  const m = (L + LAB_TO_LMS.m[0] * a + LAB_TO_LMS.m[1] * b) ** 3;
  const s = (L + LAB_TO_LMS.s[0] * a + LAB_TO_LMS.s[1] * b) ** 3;
  return [
    LSM_TO_RGB.r[0] * l + LSM_TO_RGB.r[1] * m + LSM_TO_RGB.r[2] * s,
    LSM_TO_RGB.g[0] * l + LSM_TO_RGB.g[1] * m + LSM_TO_RGB.g[2] * s,
    LSM_TO_RGB.b[0] * l + LSM_TO_RGB.b[1] * m + LSM_TO_RGB.b[2] * s
  ];
}
function getOkLCHMaxChroma(input, precision = PRECISION) {
  const { l, h } = isString(input) ? parseCSS(input, "oklch") : input;
  invariant(isNumber(l) && l >= 0 && l <= 1, MESSAGES.lightnessRange);
  invariant(isNumber(h) && h >= 0 && h <= 360, MESSAGES.hueRange);
  const epsilon = 1e-6;
  let low = 0;
  let high = 0.5;
  while (high - low > epsilon) {
    const mid = (low + high) / 2;
    const { l: L, a, b } = oklch2oklab({ l, c: mid, h }, 16);
    const p3Color = oklabToLinearP3(L, a, b);
    if (isInP3Gamut(p3Color)) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return round(low, precision);
}
function getP3Color(input) {
  const lch = isString(input) ? parseCSS(input, "oklch") : input;
  return `oklch(${lch.l} ${getOkLCHMaxChroma(lch)} ${lch.h})`;
}

// src/palette.ts
function palette(input, options = {}) {
  invariant(isString(input), MESSAGES.inputString);
  invariant(isPlainObject(options), MESSAGES.options);
  const { format, lightness, saturation, size = 6, type } = options;
  const hsl = parseCSS(input, "hsl");
  const colorFormat = isHex(input) || isNamedColor(input) ? "hex" : extractColorParts(input).model;
  const output = [];
  if (type === "monochromatic") {
    const step = 80 / size;
    for (let index = size; index > 0; index--) {
      output.push(hsl2hex({ ...hsl, l: step * index }));
    }
  } else {
    const step = 360 / size;
    output.push(hsl2hex({ ...hsl, l: lightness ?? hsl.l, s: saturation ?? hsl.s }));
    for (let index = 1; index < size; index++) {
      const color = rotate(input, hsl.h + step * index, "hex");
      output.push(hsl2hex({ ...hex2hsl(color), l: lightness ?? hsl.l, s: saturation ?? hsl.s }));
    }
  }
  return output.map((color) => convert(color, format ?? colorFormat));
}

// src/random.ts
function random(type = "hex") {
  const hsl = {
    h: Math.floor(Math.random() * 360) + 1,
    s: Math.floor(Math.random() * 90) + 10,
    l: Math.floor(Math.random() * 80) + 10
  };
  return formatCSS(hsl, { format: type });
}

// src/scheme.ts
function scheme(input, typeOrOptions) {
  invariant(isString(input), MESSAGES.inputString);
  const { format, type = "complementary" } = isString(typeOrOptions) ? { type: typeOrOptions } : typeOrOptions ?? {};
  const output = isHex(input) || isNamedColor(input) ? "hex" : extractColorParts(input).model;
  const colors = [];
  switch (type) {
    case "analogous": {
      colors.push(rotate(input, -30), input, rotate(input, 30));
      break;
    }
    case "complementary": {
      colors.push(input, rotate(input, 180));
      break;
    }
    case "split":
    case "split-complementary": {
      colors.push(input, rotate(input, 150), rotate(input, 210));
      break;
    }
    case "triadic": {
      colors.push(input, rotate(input, 120), rotate(input, 240));
      break;
    }
    case "tetradic":
    case "rectangle": {
      colors.push(input, rotate(input, 60), rotate(input, 180), rotate(input, 240));
      break;
    }
    case "square": {
      colors.push(input, rotate(input, 90), rotate(input, 180), rotate(input, 270));
      break;
    }
    default: {
      throw new TypeError("invalid type");
    }
  }
  return colors.map((color) => convert(color, format ?? output));
}

// src/swatch.ts
function shadeColor(input, lightness) {
  const { c, h } = input;
  const chromaScale = c === 0 ? 1 : 4 * lightness * (1 - lightness);
  const chroma2 = c * chromaScale;
  const adjustedChroma = clamp(chroma2, 0, 0.4);
  return { l: lightness, c: adjustedChroma, h };
}
function swatch(input, options = {}) {
  invariant(isString(input), MESSAGES.inputString);
  const {
    format,
    lightnessFactor = 1.5,
    maxLightness = 1,
    minLightness = 0,
    scale = "dynamic",
    variant = "base"
  } = options;
  invariant(
    maxLightness > minLightness && maxLightness <= 1 && minLightness >= 0,
    "maxLightness must be greater than minLightness and within the range [0, 1]."
  );
  const lch = parseCSS(input, "oklch");
  const chromaScale = {
    base: 1,
    deep: 0.8,
    neutral: 0.5,
    pastel: 0.3,
    subtle: 0.2,
    vibrant: 1.25
  }[variant];
  lch.l = 0.7;
  lch.c *= chromaScale;
  if (variant === "deep") {
    lch.l *= 0.7;
  }
  const colorFormat = isHex(input) || isNamedColor(input) ? "hex" : extractColorParts(input).model;
  const steps = 21;
  let palette2 = {};
  if (scale === "dynamic") {
    for (let index = 0; index < steps; index++) {
      const lightness = maxLightness - (maxLightness - minLightness) * (index / (steps - 1)) ** lightnessFactor;
      let tone = index * 50;
      palette2[tone] = lightness;
    }
  } else {
    palette2 = {
      0: 1,
      50: 0.95,
      100: 0.9,
      150: 0.85,
      200: 0.8,
      250: 0.75,
      300: 0.7,
      350: 0.65,
      400: 0.6,
      450: 0.55,
      500: 0.5,
      550: 0.45,
      600: 0.4,
      650: 0.35,
      700: 0.3,
      750: 0.25,
      800: 0.2,
      850: 0.15,
      900: 0.1,
      950: 0.05,
      1e3: 0
    };
  }
  const output = Object.entries(palette2).reduce(
    (acc, [key, value]) => {
      acc[Number(key)] = shadeColor(lch, value);
      return acc;
    },
    {}
  );
  return Object.entries(output).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: formatCSS(value, { format: format ?? colorFormat })
    };
  }, {});
}

// src/index.ts
var index_default = Colorizr;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addAlphaToHex,
  brightnessDifference,
  chroma,
  colorDifference,
  compare,
  contrast,
  convert,
  convertAlphaToHex,
  darken,
  desaturate,
  extractAlphaFromHex,
  extractColorParts,
  formatCSS,
  formatHex,
  getOkLCHMaxChroma,
  getP3Color,
  hex2hsl,
  hex2oklab,
  hex2oklch,
  hex2rgb,
  hexadecimalToNumber,
  hsl2hex,
  hsl2oklab,
  hsl2oklch,
  hsl2rgb,
  isHSL,
  isHex,
  isLAB,
  isLCH,
  isRGB,
  isValidColor,
  lighten,
  luminance,
  name,
  oklab2hex,
  oklab2hsl,
  oklab2oklch,
  oklab2rgb,
  oklch2hex,
  oklch2hsl,
  oklch2oklab,
  oklch2rgb,
  opacify,
  opacity,
  palette,
  parseCSS,
  random,
  removeAlphaFromHex,
  rgb2hex,
  rgb2hsl,
  rgb2oklab,
  rgb2oklch,
  rotate,
  saturate,
  scheme,
  swatch,
  textColor,
  transparentize
});
//# sourceMappingURL=index.js.map