(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__);





var html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box'
};
var body = function body(theme) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    color: theme.palette.text.primary
  }, theme.typography.body2, {
    backgroundColor: theme.palette.background.default,
    '@media print': {
      // Save printer ink.
      backgroundColor: theme.palette.common.white
    }
  });
};
var styles = function styles(theme) {
  return {
    '@global': {
      html: html,
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'strong, b': {
        fontWeight: theme.typography.fontWeightBold
      },
      body: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        margin: 0
      }, body(theme), {
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children,
      classes = props.classes;
  /* eslint-enable no-unused-vars */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
}

 true ? CssBaseline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * You can wrap a node.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
} : 0;

if (true) {
  // eslint-disable-next-line
  CssBaseline['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.exactProp)(CssBaseline.propTypes);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__.default)(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CssBaseline/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CssBaseline/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CssBaseline__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "decomposeColor": () => (/* binding */ decomposeColor),
/* harmony export */   "recomposeColor": () => (/* binding */ recomposeColor),
/* harmony export */   "getContrastRatio": () => (/* binding */ getContrastRatio),
/* harmony export */   "getLuminance": () => (/* binding */ getLuminance),
/* harmony export */   "emphasize": () => (/* binding */ emphasize),
/* harmony export */   "fade": () => (/* binding */ fade),
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "darken": () => (/* binding */ darken),
/* harmony export */   "lighten": () => (/* binding */ lighten)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "default": () => (/* binding */ createBreakpoints)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMixins)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMuiStrictModeTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createTheme__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, [(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": () => (/* binding */ light),
/* harmony export */   "dark": () => (/* binding */ dark),
/* harmony export */   "default": () => (/* binding */ createPalette)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSpacing)
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": () => (/* binding */ createMuiTheme),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_3__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_4__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_5__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTypography)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://material-ui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": () => (/* binding */ isUnitless),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "toUnitless": () => (/* binding */ toUnitless),
/* harmony export */   "convertLength": () => (/* binding */ convertLength),
/* harmony export */   "alignProperty": () => (/* binding */ alignProperty),
/* harmony export */   "fontGrid": () => (/* binding */ fontGrid),
/* harmony export */   "responsiveProperty": () => (/* binding */ responsiveProperty)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTheme": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "createMuiTheme": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.createMuiTheme),
/* harmony export */   "unstable_createMuiStrictModeTheme": () => (/* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "createStyles": () => (/* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "makeStyles": () => (/* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "responsiveFontSizes": () => (/* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "styled": () => (/* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "useTheme": () => (/* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "withStyles": () => (/* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "withTheme": () => (/* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "createGenerateClassName": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.createGenerateClassName),
/* harmony export */   "jssPreset": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.jssPreset),
/* harmony export */   "ServerStyleSheets": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ServerStyleSheets),
/* harmony export */   "StylesProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.StylesProvider),
/* harmony export */   "MuiThemeProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider),
/* harmony export */   "ThemeProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider)
/* harmony export */ });
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _colorManipulator__WEBPACK_IMPORTED_MODULE_0__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _colorManipulator__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _transitions__WEBPACK_IMPORTED_MODULE_7__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _transitions__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);

 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ responsiveFontSizes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.convertLength)(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.alignProperty)({
          size: value,
          grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.fontGrid)({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shape = {
  borderRadius: 4
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(Component);
  return function (style, options) {
    return componentCreator(style, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
    }, options));
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.withThemeCreator)({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zIndex);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: 'eng',
  otherLanguages: ['deu', 'ind', 'ara', 'prt', 'zho'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false
  },
  localeSubpaths: {
    ara: 'ar',
    deu: 'de',
    eng: 'en',
    ind: 'id',
    prt: 'pt',
    zho: 'zh'
  }
});

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AppInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.AppInitialProps;
  }
}));
Object.defineProperty(exports, "NextWebVitalsMetric", ({
  enumerable: true,
  get: function () {
    return _utils.NextWebVitalsMetric;
  }
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _asyncToGenerator(function* ({
    Component,
    ctx
  }) {
    const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps));
  }

}

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports.default = App;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss-rtl */ "jss-rtl");
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jss_rtl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-top-loading-bar */ "react-top-loading-bar");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_appTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../theme/appTheme */ "./theme/appTheme.js");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vendors/hamburger-menu.css */ "./vendors/hamburger-menu.css");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! animate.css/animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../vendors/top-loading-bar.css */ "./vendors/top-loading-bar.css");
/* harmony import */ var _vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vendors/animate-extends.css */ "./vendors/animate-extends.css");
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../vendors/page-transition.css */ "./vendors/page-transition.css");
/* harmony import */ var _vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../vendors/slick/slick.css */ "./vendors/slick/slick.css");
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../vendors/slick/slick-theme.css */ "./vendors/slick/slick-theme.css");
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "D:\\Archive\\luxiren\\packages\\agency-theme\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













/* import css vendors */











let themeType = 'light';

if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_objectSpread(_objectSpread({}, (0,_theme_appTheme__WEBPACK_IMPORTED_MODULE_9__.default)('oceanBlue', themeType)), {}, {
    direction: _i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.language === 'ara' ? 'rtl' : 'ltr'
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Set layout direction
    document.dir = _i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.language === 'ara' ? 'rtl' : 'ltr'; // Remove preloader

    const preloader = document.getElementById('preloader');

    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    } // Remove loading bar


    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000); // Refresh JSS in SSR

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme(_objectSpread(_objectSpread({}, (0,_theme_appTheme__WEBPACK_IMPORTED_MODULE_9__.default)('oceanBlue', newPaletteType)), {}, {
      direction: theme.direction
    }));
  };

  const toggleDirection = dir => {
    document.dir = dir;
    setTheme(_objectSpread(_objectSpread({}, theme), {}, {
      direction: dir,
      palette: _objectSpread({}, theme.palette)
    }));
  };

  const muiTheme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__.createTheme)(theme);
  const {
    Component,
    pageProps,
    router
  } = props; // eslint-disable-line

  const jss = (0,jss__WEBPACK_IMPORTED_MODULE_4__.create)({
    plugins: [...(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__.jssPreset)().plugins, jss_rtl__WEBPACK_IMPORTED_MODULE_6___default()()]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__.StylesProvider, {
      jss: jss,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__.ThemeProvider, {
        theme: muiTheme,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_20__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_7___default()), {
          height: 0,
          color: theme.palette.primary.light,
          progress: loading,
          className: "top-loading-bar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
          id: "main-wrap",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(next_page_transitions__WEBPACK_IMPORTED_MODULE_5__.PageTransition, {
            timeout: 1500,
            classNames: "page-fade-transition",
            children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
              onToggleDark: toggleDarkTheme,
              onToggleDir: toggleDirection,
              key: router.route,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 15
              }
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType.isRequired),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  router: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};

MyApp.getInitialProps = async appContext => _objectSpread({}, await next_app__WEBPACK_IMPORTED_MODULE_3___default().getInitialProps(appContext));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_8__.appWithTranslation)(MyApp));

/***/ }),

/***/ "./theme/appTheme.js":
/*!***************************!*\
  !*** ./theme/appTheme.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "./theme/palette.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_palette__WEBPACK_IMPORTED_MODULE_0__);


const appTheme = (color, mode) => ({
  palette: {
    type: mode,
    primary: (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary,
    secondary: (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.secondary,
    action: {
      hover: mode === 'dark' ? 'rgba(128,128,128, 0.9)' : 'rgba(128,128,128, 0.05)',
      hoverOpacity: 0.05
    }
  },
  typography: {
    fontFamily: ['Roboto', 'Roboto Condensed', 'sans-serif'].join(',')
  },
  shade: {
    light: '0 10px 15px -5px rgba(62, 57, 107, .07)'
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  shadows: mode === 'dark' ? ['none', '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)', '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)', '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)', '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)', '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)', '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)', '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)', '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)', '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)', '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)', '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)', '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)', '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)', '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)', '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)', '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)', '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)', '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)'] : ['none', '0px 1px 3px 0px rgba(128,128,128, 0.2),0px 1px 1px 0px rgba(128,128,128, 0.14),0px 2px 1px -1px rgba(128,128,128, 0.12)', '0px 1px 5px 0px rgba(128,128,128, 0.2),0px 2px 2px 0px rgba(128,128,128, 0.14),0px 3px 1px -2px rgba(128,128,128, 0.12)', '0px 1px 8px 0px rgba(128,128,128, 0.2),0px 3px 4px 0px rgba(128,128,128, 0.14),0px 3px 3px -2px rgba(128,128,128, 0.12)', '0px 2px 4px -1px rgba(128,128,128, 0.2),0px 4px 5px 0px rgba(128,128,128, 0.14),0px 1px 10px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 5px 8px 0px rgba(128,128,128, 0.14),0px 1px 14px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 6px 10px 0px rgba(128,128,128, 0.14),0px 1px 18px 0px rgba(128,128,128, 0.12)', '0px 4px 5px -2px rgba(128,128,128, 0.2),0px 7px 10px 1px rgba(128,128,128, 0.14),0px 2px 16px 1px rgba(128,128,128, 0.12)', '0px 5px 5px -3px rgba(128,128,128, 0.2),0px 8px 10px 1px rgba(128,128,128, 0.14),0px 3px 14px 2px rgba(128,128,128, 0.12)', '0px 5px 6px -3px rgba(128,128,128, 0.2),0px 9px 12px 1px rgba(128,128,128, 0.14),0px 3px 16px 2px rgba(128,128,128, 0.12)', '0px 6px 6px -3px rgba(128,128,128, 0.2),0px 10px 14px 1px rgba(128,128,128, 0.14),0px 4px 18px 3px rgba(128,128,128, 0.12)', '0px 6px 7px -4px rgba(128,128,128, 0.2),0px 11px 15px 1px rgba(128,128,128, 0.14),0px 4px 20px 3px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 12px 17px 2px rgba(128,128,128, 0.14),0px 5px 22px 4px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 13px 19px 2px rgba(128,128,128, 0.14),0px 5px 24px 4px rgba(128,128,128, 0.12)', '0px 7px 9px -4px rgba(128,128,128, 0.2),0px 14px 21px 2px rgba(128,128,128, 0.14),0px 5px 26px 4px rgba(128,128,128, 0.12)', '0px 8px 9px -5px rgba(128,128,128, 0.2),0px 15px 22px 2px rgba(128,128,128, 0.14),0px 6px 28px 5px rgba(128,128,128, 0.12)', '0px 8px 10px -5px rgba(128,128,128, 0.2),0px 16px 24px 2px rgba(128,128,128, 0.14),0px 6px 30px 5px rgba(128,128,128, 0.12)', '0px 8px 11px -5px rgba(128,128,128, 0.2),0px 17px 26px 2px rgba(128,128,128, 0.14),0px 6px 32px 5px rgba(128,128,128, 0.12)', '0px 9px 11px -5px rgba(128,128,128, 0.2),0px 18px 28px 2px rgba(128,128,128, 0.14),0px 7px 34px 6px rgba(128,128,128, 0.12)', '0px 9px 12px -6px rgba(128,128,128, 0.2),0px 19px 29px 2px rgba(128,128,128, 0.14),0px 7px 36px 6px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 20px 31px 3px rgba(128,128,128, 0.14),0px 8px 38px 7px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 21px 33px 3px rgba(128,128,128, 0.14),0px 8px 40px 7px rgba(128,128,128, 0.12)', '0px 10px 14px -6px rgba(128,128,128, 0.2),0px 22px 35px 3px rgba(128,128,128, 0.14),0px 8px 42px 7px rgba(128,128,128, 0.12)', '0px 11px 14px -7px rgba(128,128,128, 0.2),0px 23px 36px 3px rgba(128,128,128, 0.14),0px 9px 44px 8px rgba(128,128,128, 0.12)', '0px 11px 15px -7px rgba(128,128,128, 0.2),0px 24px 38px 3px rgba(128,128,128, 0.14),0px 9px 46px 8px rgba(128,128,128, 0.12)'],
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 12
      },
      elevation1: {
        boxShadow: mode === 'dark' ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)' : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)'
      },
      elevation4: {
        boxShadow: mode === 'dark' ? '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)' : '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)'
      }
    },
    MuiButton: {
      containedSecondary: {
        color: '#FFFFFF'
      },
      root: {
        fontWeight: 600,
        boxShadow: '0 1.5px 12px 4px rgba(0, 0, 0, 0.06)'
      },
      sizeSmall: {
        padding: '7px 12px'
      },
      outlinedPrimary: {
        borderColor: mode === 'dark' ? (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary.light : (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary.main,
        color: mode === 'dark' ? (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary.light : (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary.dark
      },
      outlinedSecondary: {
        borderColor: mode === 'dark' ? (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.secondary.light : (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.secondary.main,
        color: mode === 'dark' ? (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.secondary.light : (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.secondary.main
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary.main
        }
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottomColor: (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary.main
        }
      }
    },
    MuiTypography: {
      button: {
        fontWeight: 600
      }
    }
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appTheme);

/***/ }),

/***/ "./theme/palette.js":
/*!**************************!*\
  !*** ./theme/palette.js ***!
  \**************************/
/***/ ((module) => {

module.exports = {
  oceanBlue: {
    palette: {
      primary: {
        light: '#BBDEFB',
        main: '#2196F3',
        dark: '#0D47A1'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  greenLeaf: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#1B5E20'
      },
      secondary: {
        light: '#CFD8DC',
        main: '#607D8B',
        dark: '#37474F'
      }
    }
  },
  money: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#2E7D32'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFA000',
        dark: '#FF6F00'
      }
    }
  },
  grayscale: {
    palette: {
      primary: {
        light: '#CFD8DC',
        main: '#546E7A',
        dark: '#263238'
      },
      secondary: {
        light: '#D7CCC8',
        main: '#6D4C41',
        dark: '#3E2723'
      }
    }
  },
  cloud: {
    palette: {
      primary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#01579B'
      },
      secondary: {
        light: '#FFE0B2',
        main: '#FF9800',
        dark: '#E65100'
      }
    }
  },
  joker: {
    palette: {
      primary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  violet: {
    palette: {
      primary: {
        light: '#F8BBD0',
        main: '#EC407A',
        dark: '#880E4F'
      },
      secondary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      }
    }
  },
  violeta: {
    palette: {
      primary: {
        light: '#E1BEE7',
        main: '#9C27B0',
        dark: '#6A1B9A'
      },
      secondary: {
        light: '#DCEDC8',
        main: '#8BC34A',
        dark: '#558B2F'
      }
    }
  },
  roseGold: {
    palette: {
      primary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#D81B60',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FFF8E1',
        main: '#FFA000',
        dark: '#FF6F00',
        contrastText: '#fff'
      }
    }
  },
  deepBlue: {
    palette: {
      primary: {
        light: '#E8EAF6',
        main: '#3F51B5',
        dark: '#283593',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E1F5FE',
        main: '#03A9F4',
        dark: '#0277BD',
        contrastText: '#fff'
      }
    }
  },
  ubuntu: {
    palette: {
      primary: {
        light: '#FFF3E0',
        main: '#EF6C00',
        dark: '#E65100',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F3E5F5',
        main: '#9C27B0',
        dark: '#7B1FA2',
        contrastText: '#fff'
      }
    }
  },
  geenNature: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#009688',
        dark: '#00695C',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F1F8E9',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      }
    }
  },
  vampire: {
    palette: {
      primary: {
        light: '#FFEBEE',
        main: '#f44336',
        dark: '#E53935',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff'
      }
    }
  },
  mint: {
    palette: {
      primary: {
        light: '#bbdefb',
        main: '#2196f3',
        dark: '#0d47a1',
        contrastText: '#fff'
      },
      secondary: {
        light: '#b3e5fc',
        main: '#03a9f4',
        dark: '#01579b',
        contrastText: '#fff'
      }
    }
  },
  oceanSky: {
    palette: {
      primary: {
        light: '#E3F2FD',
        main: '#2196F3',
        dark: '#1565C0',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0F2F1',
        main: '#00BFA5',
        dark: '#00796B',
        contrastText: '#fff'
      }
    }
  },
  gold: {
    palette: {
      primary: {
        light: '#FFF9C4',
        main: '#FF9100',
        dark: '#FF6D00',
        contrastText: '#fff'
      },
      secondary: {
        light: '#EFEBE9',
        main: '#8D6E63',
        dark: '#4E342E',
        contrastText: '#fff'
      }
    }
  },
  botani: {
    palette: {
      primary: {
        light: '#DCEDC8',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  littleQueen: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#006064',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  purple: {
    palette: {
      primary: {
        light: '#f3e5f5',
        main: '#9c27b0',
        dark: '#6a1b9a',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ea80fc',
        main: '#aa00ff',
        dark: '#4a148c',
        contrastText: '#fff'
      }
    }
  },
  black: {
    palette: {
      primary: {
        light: '#9e9e9e',
        main: '#212121',
        dark: '#000',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0E0E0',
        main: '#757575',
        dark: '#424242',
        contrastText: '#fff'
      }
    }
  },
  brown: {
    palette: {
      primary: {
        light: '#d7ccc8',
        main: '#795548',
        dark: '#4e342e',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ccb0b0',
        main: '#794848',
        dark: '#3e2723',
        contrastText: '#fff'
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./vendors/animate-extends.css":
/*!*************************************!*\
  !*** ./vendors/animate-extends.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./vendors/hamburger-menu.css":
/*!************************************!*\
  !*** ./vendors/hamburger-menu.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./vendors/page-transition.css":
/*!*************************************!*\
  !*** ./vendors/page-transition.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./vendors/slick/slick-theme.css":
/*!***************************************!*\
  !*** ./vendors/slick/slick-theme.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./vendors/slick/slick.css":
/*!*********************************!*\
  !*** ./vendors/slick/slick.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./vendors/top-loading-bar.css":
/*!*************************************!*\
  !*** ./vendors/top-loading-bar.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("jss");

/***/ }),

/***/ "jss-rtl":
/*!**************************!*\
  !*** external "jss-rtl" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("jss-rtl");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-page-transitions");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-top-loading-bar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCNkU7QUFDOUQ7QUFDZjtBQUNBLGVBQWUseUVBQTRCO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ3NzQmFzZWxpbmUvQ3NzQmFzZWxpbmUuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Dc3NCYXNlbGluZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ibHVlLmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmVlbi5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmV5LmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2luZGlnby5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9vcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvcGluay5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9yZWQuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50cy5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVNaXhpbnMuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lLmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVBhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlU3BhY2luZy5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jc3NVdGlscy5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9kZWZhdWx0VGhlbWUuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9yZXNwb25zaXZlRm9udFNpemVzLmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYWRvd3MuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc3R5bGVkLmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3RyYW5zaXRpb25zLmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFRoZW1lLmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3pJbmRleC5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi90aGVtZS9hcHBUaGVtZS5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi90aGVtZS9wYWxldHRlLmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLmNzcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL3ZlbmRvcnMvYW5pbWF0ZS1leHRlbmRzLmNzcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi92ZW5kb3JzL2hhbWJ1cmdlci1tZW51LmNzcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi92ZW5kb3JzL3BhZ2UtdHJhbnNpdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vdmVuZG9ycy9zbGljay9zbGljay10aGVtZS5jc3MiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vdmVuZG9ycy9zbGljay9zbGljay5jc3MiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vdmVuZG9ycy90b3AtbG9hZGluZy1iYXIuY3NzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lL2V4dGVybmFsIFwianNzXCIiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lL2V4dGVybmFsIFwianNzLXJ0bFwiIiwid2VicGFjazovL2FnZW5jeS10aGVtZS9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovL2FnZW5jeS10aGVtZS9leHRlcm5hbCBcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiIiwid2VicGFjazovL2FnZW5jeS10aGVtZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2FnZW5jeS10aGVtZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lL2V4dGVybmFsIFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCIiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYWdlbmN5LXRoZW1lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL2FnZW5jeS10aGVtZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgeyBleGFjdFByb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuZXhwb3J0IHZhciBodG1sID0ge1xuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICAvLyBBbnRpYWxpYXNpbmcuXG4gIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxuICAvLyBBbnRpYWxpYXNpbmcuXG4gIC8vIENoYW5nZSBmcm9tIGBib3gtc2l6aW5nOiBjb250ZW50LWJveGAgc28gdGhhdCBgd2lkdGhgXG4gIC8vIGlzIG5vdCBhZmZlY3RlZCBieSBgcGFkZGluZ2Agb3IgYGJvcmRlcmAuXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG59O1xuZXhwb3J0IHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSh0aGVtZSkge1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxuICB9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICAnQG1lZGlhIHByaW50Jzoge1xuICAgICAgLy8gU2F2ZSBwcmludGVyIGluay5cbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgJ0BnbG9iYWwnOiB7XG4gICAgICBodG1sOiBodG1sLFxuICAgICAgJyosICo6OmJlZm9yZSwgKjo6YWZ0ZXInOiB7XG4gICAgICAgIGJveFNpemluZzogJ2luaGVyaXQnXG4gICAgICB9LFxuICAgICAgJ3N0cm9uZywgYic6IHtcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZFxuICAgICAgfSxcbiAgICAgIGJvZHk6IF9leHRlbmRzKHtcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgICB9LCBib2R5KHRoZW1lKSwge1xuICAgICAgICAvLyBBZGQgc3VwcG9ydCBmb3IgZG9jdW1lbnQuYm9keS5yZXF1ZXN0RnVsbFNjcmVlbigpLlxuICAgICAgICAvLyBPdGhlciBlbGVtZW50cywgaWYgYmFja2dyb3VuZCB0cmFuc3BhcmVudCwgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgICcmOjpiYWNrZHJvcCc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogS2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi5cbiAqL1xuXG5mdW5jdGlvbiBDc3NCYXNlbGluZShwcm9wcykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICB2YXIgX3Byb3BzJGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjaGlsZHJlbiA9IF9wcm9wcyRjaGlsZHJlbiA9PT0gdm9pZCAwID8gbnVsbCA6IF9wcm9wcyRjaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbik7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENzc0Jhc2VsaW5lLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gd3JhcCBhIG5vZGUuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIENzc0Jhc2VsaW5lWydwcm9wVHlwZXMnICsgJyddID0gZXhhY3RQcm9wKENzc0Jhc2VsaW5lLnByb3BUeXBlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlDc3NCYXNlbGluZSdcbn0pKENzc0Jhc2VsaW5lKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Dc3NCYXNlbGluZSc7IiwidmFyIGJsdWUgPSB7XG4gIDUwOiAnI2UzZjJmZCcsXG4gIDEwMDogJyNiYmRlZmInLFxuICAyMDA6ICcjOTBjYWY5JyxcbiAgMzAwOiAnIzY0YjVmNicsXG4gIDQwMDogJyM0MmE1ZjUnLFxuICA1MDA6ICcjMjE5NmYzJyxcbiAgNjAwOiAnIzFlODhlNScsXG4gIDcwMDogJyMxOTc2ZDInLFxuICA4MDA6ICcjMTU2NWMwJyxcbiAgOTAwOiAnIzBkNDdhMScsXG4gIEExMDA6ICcjODJiMWZmJyxcbiAgQTIwMDogJyM0NDhhZmYnLFxuICBBNDAwOiAnIzI5NzlmZicsXG4gIEE3MDA6ICcjMjk2MmZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGJsdWU7IiwidmFyIGNvbW1vbiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjZmZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbjsiLCJ2YXIgZ3JlZW4gPSB7XG4gIDUwOiAnI2U4ZjVlOScsXG4gIDEwMDogJyNjOGU2YzknLFxuICAyMDA6ICcjYTVkNmE3JyxcbiAgMzAwOiAnIzgxYzc4NCcsXG4gIDQwMDogJyM2NmJiNmEnLFxuICA1MDA6ICcjNGNhZjUwJyxcbiAgNjAwOiAnIzQzYTA0NycsXG4gIDcwMDogJyMzODhlM2MnLFxuICA4MDA6ICcjMmU3ZDMyJyxcbiAgOTAwOiAnIzFiNWUyMCcsXG4gIEExMDA6ICcjYjlmNmNhJyxcbiAgQTIwMDogJyM2OWYwYWUnLFxuICBBNDAwOiAnIzAwZTY3NicsXG4gIEE3MDA6ICcjMDBjODUzJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZWVuOyIsInZhciBncmV5ID0ge1xuICA1MDogJyNmYWZhZmEnLFxuICAxMDA6ICcjZjVmNWY1JyxcbiAgMjAwOiAnI2VlZWVlZScsXG4gIDMwMDogJyNlMGUwZTAnLFxuICA0MDA6ICcjYmRiZGJkJyxcbiAgNTAwOiAnIzllOWU5ZScsXG4gIDYwMDogJyM3NTc1NzUnLFxuICA3MDA6ICcjNjE2MTYxJyxcbiAgODAwOiAnIzQyNDI0MicsXG4gIDkwMDogJyMyMTIxMjEnLFxuICBBMTAwOiAnI2Q1ZDVkNScsXG4gIEEyMDA6ICcjYWFhYWFhJyxcbiAgQTQwMDogJyMzMDMwMzAnLFxuICBBNzAwOiAnIzYxNjE2MSdcbn07XG5leHBvcnQgZGVmYXVsdCBncmV5OyIsInZhciBpbmRpZ28gPSB7XG4gIDUwOiAnI2U4ZWFmNicsXG4gIDEwMDogJyNjNWNhZTknLFxuICAyMDA6ICcjOWZhOGRhJyxcbiAgMzAwOiAnIzc5ODZjYicsXG4gIDQwMDogJyM1YzZiYzAnLFxuICA1MDA6ICcjM2Y1MWI1JyxcbiAgNjAwOiAnIzM5NDlhYicsXG4gIDcwMDogJyMzMDNmOWYnLFxuICA4MDA6ICcjMjgzNTkzJyxcbiAgOTAwOiAnIzFhMjM3ZScsXG4gIEExMDA6ICcjOGM5ZWZmJyxcbiAgQTIwMDogJyM1MzZkZmUnLFxuICBBNDAwOiAnIzNkNWFmZScsXG4gIEE3MDA6ICcjMzA0ZmZlJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGluZGlnbzsiLCJ2YXIgb3JhbmdlID0ge1xuICA1MDogJyNmZmYzZTAnLFxuICAxMDA6ICcjZmZlMGIyJyxcbiAgMjAwOiAnI2ZmY2M4MCcsXG4gIDMwMDogJyNmZmI3NGQnLFxuICA0MDA6ICcjZmZhNzI2JyxcbiAgNTAwOiAnI2ZmOTgwMCcsXG4gIDYwMDogJyNmYjhjMDAnLFxuICA3MDA6ICcjZjU3YzAwJyxcbiAgODAwOiAnI2VmNmMwMCcsXG4gIDkwMDogJyNlNjUxMDAnLFxuICBBMTAwOiAnI2ZmZDE4MCcsXG4gIEEyMDA6ICcjZmZhYjQwJyxcbiAgQTQwMDogJyNmZjkxMDAnLFxuICBBNzAwOiAnI2ZmNmQwMCdcbn07XG5leHBvcnQgZGVmYXVsdCBvcmFuZ2U7IiwidmFyIHBpbmsgPSB7XG4gIDUwOiAnI2ZjZTRlYycsXG4gIDEwMDogJyNmOGJiZDAnLFxuICAyMDA6ICcjZjQ4ZmIxJyxcbiAgMzAwOiAnI2YwNjI5MicsXG4gIDQwMDogJyNlYzQwN2EnLFxuICA1MDA6ICcjZTkxZTYzJyxcbiAgNjAwOiAnI2Q4MWI2MCcsXG4gIDcwMDogJyNjMjE4NWInLFxuICA4MDA6ICcjYWQxNDU3JyxcbiAgOTAwOiAnIzg4MGU0ZicsXG4gIEExMDA6ICcjZmY4MGFiJyxcbiAgQTIwMDogJyNmZjQwODEnLFxuICBBNDAwOiAnI2Y1MDA1NycsXG4gIEE3MDA6ICcjYzUxMTYyJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHBpbms7IiwidmFyIHJlZCA9IHtcbiAgNTA6ICcjZmZlYmVlJyxcbiAgMTAwOiAnI2ZmY2RkMicsXG4gIDIwMDogJyNlZjlhOWEnLFxuICAzMDA6ICcjZTU3MzczJyxcbiAgNDAwOiAnI2VmNTM1MCcsXG4gIDUwMDogJyNmNDQzMzYnLFxuICA2MDA6ICcjZTUzOTM1JyxcbiAgNzAwOiAnI2QzMmYyZicsXG4gIDgwMDogJyNjNjI4MjgnLFxuICA5MDA6ICcjYjcxYzFjJyxcbiAgQTEwMDogJyNmZjhhODAnLFxuICBBMjAwOiAnI2ZmNTI1MicsXG4gIEE0MDA6ICcjZmYxNzQ0JyxcbiAgQTcwMDogJyNkNTAwMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkOyIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiB0aGUgcmFuZ2UgW21pbiwgbWF4XVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSB2YWx1ZSBwcm92aWRlZCBcIi5jb25jYXQodmFsdWUsIFwiIGlzIG91dCBvZiByYW5nZSBbXCIpLmNvbmNhdChtaW4sIFwiLCBcIikuY29uY2F0KG1heCwgXCJdLlwiKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgdmFsdWUpLCBtYXgpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIGhleCBmb3JtYXQgdG8gQ1NTIHJnYiBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gSGV4IGNvbG9yLCBpLmUuICNubm4gb3IgI25ubm5ublxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZ1xuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gY29sb3Iuc3Vic3RyKDEpO1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiLnsxLFwiLmNvbmNhdChjb2xvci5sZW5ndGggPj0gNiA/IDIgOiAxLCBcIn1cIiksICdnJyk7XG4gIHZhciBjb2xvcnMgPSBjb2xvci5tYXRjaChyZSk7XG5cbiAgaWYgKGNvbG9ycyAmJiBjb2xvcnNbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG4gKyBuO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9ycyA/IFwicmdiXCIuY29uY2F0KGNvbG9ycy5sZW5ndGggPT09IDQgPyAnYScgOiAnJywgXCIoXCIpLmNvbmNhdChjb2xvcnMubWFwKGZ1bmN0aW9uIChuLCBpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA8IDMgPyBwYXJzZUludChuLCAxNikgOiBNYXRoLnJvdW5kKHBhcnNlSW50KG4sIDE2KSAvIDI1NSAqIDEwMDApIC8gMTAwMDtcbiAgfSkuam9pbignLCAnKSwgXCIpXCIpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGludFRvSGV4KGludCkge1xuICB2YXIgaGV4ID0gaW50LnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIi5jb25jYXQoaGV4KSA6IGhleDtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyByZ2IgZm9ybWF0IHRvIENTUyBoZXggZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIFJHQiBjb2xvciwgaS5lLiByZ2IobiwgbiwgbilcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmcsIGkuZS4gI25ubm5ublxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHZhciBfZGVjb21wb3NlQ29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvciksXG4gICAgICB2YWx1ZXMgPSBfZGVjb21wb3NlQ29sb3IudmFsdWVzO1xuXG4gIHJldHVybiBcIiNcIi5jb25jYXQodmFsdWVzLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBpbnRUb0hleChuKTtcbiAgfSkuam9pbignJykpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gaHNsIGZvcm1hdCB0byByZ2IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhTTCBjb2xvciB2YWx1ZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHJnYiBjb2xvciB2YWx1ZXNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9SZ2IoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciBfY29sb3IgPSBjb2xvcixcbiAgICAgIHZhbHVlcyA9IF9jb2xvci52YWx1ZXM7XG4gIHZhciBoID0gdmFsdWVzWzBdO1xuICB2YXIgcyA9IHZhbHVlc1sxXSAvIDEwMDtcbiAgdmFyIGwgPSB2YWx1ZXNbMl0gLyAxMDA7XG4gIHZhciBhID0gcyAqIE1hdGgubWluKGwsIDEgLSBsKTtcblxuICB2YXIgZiA9IGZ1bmN0aW9uIGYobikge1xuICAgIHZhciBrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAobiArIGggLyAzMCkgJSAxMjtcbiAgICByZXR1cm4gbCAtIGEgKiBNYXRoLm1heChNYXRoLm1pbihrIC0gMywgOSAtIGssIDEpLCAtMSk7XG4gIH07XG5cbiAgdmFyIHR5cGUgPSAncmdiJztcbiAgdmFyIHJnYiA9IFtNYXRoLnJvdW5kKGYoMCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoOCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoNCkgKiAyNTUpXTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ2hzbGEnKSB7XG4gICAgdHlwZSArPSAnYSc7XG4gICAgcmdiLnB1c2godmFsdWVzWzNdKTtcbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcih7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHJnYlxuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBhbmQgdmFsdWVzIG9mIGEgY29sb3IuXG4gKlxuICogTm90ZTogRG9lcyBub3Qgc3VwcG9ydCByZ2IgJSB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge29iamVjdH0gLSBBIE1VSSBjb2xvciBvYmplY3Q6IHt0eXBlOiBzdHJpbmcsIHZhbHVlczogbnVtYmVyW119XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLnR5cGUpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBpZiAoY29sb3IuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gZGVjb21wb3NlQ29sb3IoaGV4VG9SZ2IoY29sb3IpKTtcbiAgfVxuXG4gIHZhciBtYXJrZXIgPSBjb2xvci5pbmRleE9mKCcoJyk7XG4gIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG5cbiAgaWYgKFsncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXS5pbmRleE9mKHR5cGUpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBgXCIuY29uY2F0KGNvbG9yLCBcImAgY29sb3IuXFxuV2Ugc3VwcG9ydCB0aGUgZm9sbG93aW5nIGZvcm1hdHM6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKCkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgzLCBjb2xvcikpO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IGNvbG9yLnN1YnN0cmluZyhtYXJrZXIgKyAxLCBjb2xvci5sZW5ndGggLSAxKS5zcGxpdCgnLCcpO1xuICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHZhbHVlc1xuICB9O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB3aXRoIHR5cGUgYW5kIHZhbHVlcyB0byBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29sb3IgLSBEZWNvbXBvc2VkIGNvbG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IudHlwZSAtIE9uZSBvZjogJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ1xuICogQHBhcmFtIHthcnJheX0gY29sb3IudmFsdWVzIC0gW24sbixuXSBvciBbbixuLG4sbl1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICB2YXIgdHlwZSA9IGNvbG9yLnR5cGU7XG4gIHZhciB2YWx1ZXMgPSBjb2xvci52YWx1ZXM7XG5cbiAgaWYgKHR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgLy8gT25seSBjb252ZXJ0IHRoZSBmaXJzdCAzIHZhbHVlcyB0byBpbnQgKGkuZS4gbm90IGFscGhhKVxuICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgIHJldHVybiBpIDwgMyA/IHBhcnNlSW50KG4sIDEwKSA6IG47XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICB2YWx1ZXNbMV0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMV0sIFwiJVwiKTtcbiAgICB2YWx1ZXNbMl0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMl0sIFwiJVwiKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh0eXBlLCBcIihcIikuY29uY2F0KHZhbHVlcy5qb2luKCcsICcpLCBcIilcIik7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gdHdvIGNvbG9ycy5cbiAqXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JlZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmQgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIGNvbnRyYXN0IHJhdGlvIHZhbHVlIGluIHRoZSByYW5nZSAwIC0gMjEuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oZm9yZWdyb3VuZCwgYmFja2dyb3VuZCkge1xuICB2YXIgbHVtQSA9IGdldEx1bWluYW5jZShmb3JlZ3JvdW5kKTtcbiAgdmFyIGx1bUIgPSBnZXRMdW1pbmFuY2UoYmFja2dyb3VuZCk7XG4gIHJldHVybiAoTWF0aC5tYXgobHVtQSwgbHVtQikgKyAwLjA1KSAvIChNYXRoLm1pbihsdW1BLCBsdW1CKSArIDAuMDUpO1xufVxuLyoqXG4gKiBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiBhbnkgcG9pbnQgaW4gYSBjb2xvciBzcGFjZSxcbiAqIG5vcm1hbGl6ZWQgdG8gMCBmb3IgZGFya2VzdCBibGFjayBhbmQgMSBmb3IgbGlnaHRlc3Qgd2hpdGUuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiB0aGUgY29sb3IgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFyIHJnYiA9IGNvbG9yLnR5cGUgPT09ICdoc2wnID8gZGVjb21wb3NlQ29sb3IoaHNsVG9SZ2IoY29sb3IpKS52YWx1ZXMgOiBjb2xvci52YWx1ZXM7XG4gIHJnYiA9IHJnYi5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhbCAvPSAyNTU7IC8vIG5vcm1hbGl6ZWRcblxuICAgIHJldHVybiB2YWwgPD0gMC4wMzkyOCA/IHZhbCAvIDEyLjkyIDogTWF0aC5wb3coKHZhbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KTsgLy8gVHJ1bmNhdGUgYXQgMyBkaWdpdHNcblxuICByZXR1cm4gTnVtYmVyKCgwLjIxMjYgKiByZ2JbMF0gKyAwLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl0pLnRvRml4ZWQoMykpO1xufVxuLyoqXG4gKiBEYXJrZW4gb3IgbGlnaHRlbiBhIGNvbG9yLCBkZXBlbmRpbmcgb24gaXRzIGx1bWluYW5jZS5cbiAqIExpZ2h0IGNvbG9ycyBhcmUgZGFya2VuZWQsIGRhcmsgY29sb3JzIGFyZSBsaWdodGVuZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50PTAuMTUgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1waGFzaXplKGNvbG9yKSB7XG4gIHZhciBjb2VmZmljaWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC4xNTtcbiAgcmV0dXJuIGdldEx1bWluYW5jZShjb2xvcikgPiAwLjUgPyBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSA6IGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KTtcbn1cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG4vKipcbiAqIFNldCB0aGUgYWJzb2x1dGUgdHJhbnNwYXJlbmN5IG9mIGEgY29sb3IuXG4gKiBBbnkgZXhpc3RpbmcgYWxwaGEgdmFsdWVzIGFyZSBvdmVyd3JpdHRlbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB2YWx1ZSB0byBzZXQgdGhlIGFscGhhIGNoYW5uZWwgdG8gaW4gdGhlIHJhbmdlIDAgLTFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqIFVzZSBgaW1wb3J0IHsgYWxwaGEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYCBpbnN0ZWFkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlKGNvbG9yLCB2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgZmFkZWAgY29sb3IgdXRpbGl0eSB3YXMgcmVuYW1lZCB0byBgYWxwaGFgIHRvIGJldHRlciBkZXNjcmliZSBpdHMgZnVuY3Rpb25hbGl0eS4nLCAnJywgXCJZb3Ugc2hvdWxkIHVzZSBgaW1wb3J0IHsgYWxwaGEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYFwiXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFscGhhKGNvbG9yLCB2YWx1ZSk7XG59XG4vKipcbiAqIFNldCB0aGUgYWJzb2x1dGUgdHJhbnNwYXJlbmN5IG9mIGEgY29sb3IuXG4gKiBBbnkgZXhpc3RpbmcgYWxwaGEgdmFsdWUgaXMgb3ZlcndyaXR0ZW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwLTFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFscGhhKGNvbG9yLCB2YWx1ZSkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFsdWUgPSBjbGFtcCh2YWx1ZSk7XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdyZ2InIHx8IGNvbG9yLnR5cGUgPT09ICdoc2wnKSB7XG4gICAgY29sb3IudHlwZSArPSAnYSc7XG4gIH1cblxuICBjb2xvci52YWx1ZXNbM10gPSB2YWx1ZTtcbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn1cbi8qKlxuICogRGFya2VucyBhIGNvbG9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudCAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1tpXSAqPSAxIC0gY29lZmZpY2llbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn1cbi8qKlxuICogTGlnaHRlbnMgYSBjb2xvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGlnaHRlbihjb2xvciwgY29lZmZpY2llbnQpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIGNvZWZmaWNpZW50ID0gY2xhbXAoY29lZmZpY2llbnQpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIGNvbG9yLnZhbHVlc1syXSArPSAoMTAwIC0gY29sb3IudmFsdWVzWzJdKSAqIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1tpXSArPSAoMjU1IC0gY29sb3IudmFsdWVzW2ldKSAqIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuLy8gU29ydGVkIEFTQyBieSBzaXplLiBUaGF0J3MgaW1wb3J0YW50LlxuLy8gSXQgY2FuJ3QgYmUgY29uZmlndXJlZCBhcyBpdCdzIHVzZWQgc3RhdGljYWxseSBmb3IgcHJvcFR5cGVzLlxuZXhwb3J0IHZhciBrZXlzID0gWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddOyAvLyBLZWVwIGluIG1pbmQgdGhhdCBAbWVkaWEgaXMgaW5jbHVzaXZlIGJ5IHRoZSBDU1Mgc3BlY2lmaWNhdGlvbi5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQnJlYWtwb2ludHMoYnJlYWtwb2ludHMpIHtcbiAgdmFyIF9icmVha3BvaW50cyR2YWx1ZXMgPSBicmVha3BvaW50cy52YWx1ZXMsXG4gICAgICB2YWx1ZXMgPSBfYnJlYWtwb2ludHMkdmFsdWVzID09PSB2b2lkIDAgPyB7XG4gICAgeHM6IDAsXG4gICAgc206IDYwMCxcbiAgICBtZDogOTYwLFxuICAgIGxnOiAxMjgwLFxuICAgIHhsOiAxOTIwXG4gIH0gOiBfYnJlYWtwb2ludHMkdmFsdWVzLFxuICAgICAgX2JyZWFrcG9pbnRzJHVuaXQgPSBicmVha3BvaW50cy51bml0LFxuICAgICAgdW5pdCA9IF9icmVha3BvaW50cyR1bml0ID09PSB2b2lkIDAgPyAncHgnIDogX2JyZWFrcG9pbnRzJHVuaXQsXG4gICAgICBfYnJlYWtwb2ludHMkc3RlcCA9IGJyZWFrcG9pbnRzLnN0ZXAsXG4gICAgICBzdGVwID0gX2JyZWFrcG9pbnRzJHN0ZXAgPT09IHZvaWQgMCA/IDUgOiBfYnJlYWtwb2ludHMkc3RlcCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGJyZWFrcG9pbnRzLCBbXCJ2YWx1ZXNcIiwgXCJ1bml0XCIsIFwic3RlcFwiXSk7XG5cbiAgZnVuY3Rpb24gdXAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHZhbHVlc1trZXldID09PSAnbnVtYmVyJyA/IHZhbHVlc1trZXldIDoga2V5O1xuICAgIHJldHVybiBcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdCh2YWx1ZSkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd24oa2V5KSB7XG4gICAgdmFyIGVuZEluZGV4ID0ga2V5cy5pbmRleE9mKGtleSkgKyAxO1xuICAgIHZhciB1cHBlcmJvdW5kID0gdmFsdWVzW2tleXNbZW5kSW5kZXhdXTtcblxuICAgIGlmIChlbmRJbmRleCA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgIC8vIHhsIGRvd24gYXBwbGllcyB0byBhbGwgc2l6ZXNcbiAgICAgIHJldHVybiB1cCgneHMnKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdXBwZXJib3VuZCA9PT0gJ251bWJlcicgJiYgZW5kSW5kZXggPiAwID8gdXBwZXJib3VuZCA6IGtleTtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1heC13aWR0aDpcIi5jb25jYXQodmFsdWUgLSBzdGVwIC8gMTAwKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmV0d2VlbihzdGFydCwgZW5kKSB7XG4gICAgdmFyIGVuZEluZGV4ID0ga2V5cy5pbmRleE9mKGVuZCk7XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIHVwKHN0YXJ0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodHlwZW9mIHZhbHVlc1tzdGFydF0gPT09ICdudW1iZXInID8gdmFsdWVzW3N0YXJ0XSA6IHN0YXJ0KS5jb25jYXQodW5pdCwgXCIpIGFuZCBcIikgKyBcIihtYXgtd2lkdGg6XCIuY29uY2F0KChlbmRJbmRleCAhPT0gLTEgJiYgdHlwZW9mIHZhbHVlc1trZXlzW2VuZEluZGV4ICsgMV1dID09PSAnbnVtYmVyJyA/IHZhbHVlc1trZXlzW2VuZEluZGV4ICsgMV1dIDogZW5kKSAtIHN0ZXAgLyAxMDApLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBvbmx5KGtleSkge1xuICAgIHJldHVybiBiZXR3ZWVuKGtleSwga2V5KTtcbiAgfVxuXG4gIHZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gd2lkdGgoa2V5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS53YXJuKFtcIk1hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLmJyZWFrcG9pbnRzLndpZHRoYCB1dGlsaXR5IGlzIGRlcHJlY2F0ZWQgYmVjYXVzZSBpdCdzIHJlZHVuZGFudC5cIiwgJ1VzZSB0aGUgYHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc2AgaW5zdGVhZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlc1trZXldO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBrZXlzOiBrZXlzLFxuICAgIHZhbHVlczogdmFsdWVzLFxuICAgIHVwOiB1cCxcbiAgICBkb3duOiBkb3duLFxuICAgIGJldHdlZW46IGJldHdlZW4sXG4gICAgb25seTogb25seSxcbiAgICB3aWR0aDogd2lkdGhcbiAgfSwgb3RoZXIpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zKSB7XG4gIHZhciBfdG9vbGJhcjtcblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGd1dHRlcnM6IGZ1bmN0aW9uIGd1dHRlcnMoKSB7XG4gICAgICB2YXIgc3R5bGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiB0aGVtZS5taXhpbnMuZ3V0dGVycygpIGlzIGRlcHJlY2F0ZWQuJywgJ1lvdSBjYW4gdXNlIHRoZSBzb3VyY2Ugb2YgdGhlIG1peGluIGRpcmVjdGx5OicsIFwiXFxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcXG4gICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxcbiAgICAgIH0sXFxuICAgICAgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDIpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMilcbiAgICAgIH0sIHN0eWxlcywgX2RlZmluZVByb3BlcnR5KHt9LCBicmVha3BvaW50cy51cCgnc20nKSwgX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDMpXG4gICAgICB9LCBzdHlsZXNbYnJlYWtwb2ludHMudXAoJ3NtJyldKSkpO1xuICAgIH0sXG4gICAgdG9vbGJhcjogKF90b29sYmFyID0ge1xuICAgICAgbWluSGVpZ2h0OiA1NlxuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgXCJcIi5jb25jYXQoYnJlYWtwb2ludHMudXAoJ3hzJyksIFwiIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIiksIHtcbiAgICAgIG1pbkhlaWdodDogNDhcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF90b29sYmFyLCBicmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgbWluSGVpZ2h0OiA2NFxuICAgIH0pLCBfdG9vbGJhcilcbiAgfSwgbWl4aW5zKTtcbn0iLCJpbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4vY3JlYXRlVGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVRoZW1lLmFwcGx5KHZvaWQgMCwgW2RlZXBtZXJnZSh7XG4gICAgdW5zdGFibGVfc3RyaWN0TW9kZTogdHJ1ZVxuICB9LCBvcHRpb25zKV0uY29uY2F0KGFyZ3MpKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4uL2NvbG9ycy9jb21tb24nO1xuaW1wb3J0IGdyZXkgZnJvbSAnLi4vY29sb3JzL2dyZXknO1xuaW1wb3J0IGluZGlnbyBmcm9tICcuLi9jb2xvcnMvaW5kaWdvJztcbmltcG9ydCBwaW5rIGZyb20gJy4uL2NvbG9ycy9waW5rJztcbmltcG9ydCByZWQgZnJvbSAnLi4vY29sb3JzL3JlZCc7XG5pbXBvcnQgb3JhbmdlIGZyb20gJy4uL2NvbG9ycy9vcmFuZ2UnO1xuaW1wb3J0IGJsdWUgZnJvbSAnLi4vY29sb3JzL2JsdWUnO1xuaW1wb3J0IGdyZWVuIGZyb20gJy4uL2NvbG9ycy9ncmVlbic7XG5pbXBvcnQgeyBkYXJrZW4sIGdldENvbnRyYXN0UmF0aW8sIGxpZ2h0ZW4gfSBmcm9tICcuL2NvbG9yTWFuaXB1bGF0b3InO1xuZXhwb3J0IHZhciBsaWdodCA9IHtcbiAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSB0ZXh0LlxuICB0ZXh0OiB7XG4gICAgLy8gVGhlIG1vc3QgaW1wb3J0YW50IHRleHQuXG4gICAgcHJpbWFyeTogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIC8vIFNlY29uZGFyeSB0ZXh0LlxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIC8vIERpc2FibGVkIHRleHQgaGF2ZSBldmVuIGxvd2VyIHZpc3VhbCBwcm9taW5lbmNlLlxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjM4KScsXG4gICAgLy8gVGV4dCBoaW50cy5cbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfSxcbiAgLy8gVGhlIGNvbG9yIHVzZWQgdG8gZGl2aWRlIGRpZmZlcmVudCBlbGVtZW50cy5cbiAgZGl2aWRlcjogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAvLyBUaGUgYmFja2dyb3VuZCBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgc3VyZmFjZXMuXG4gIC8vIENvbnNpc3RlbmN5IGJldHdlZW4gdGhlc2UgdmFsdWVzIGlzIGltcG9ydGFudC5cbiAgYmFja2dyb3VuZDoge1xuICAgIHBhcGVyOiBjb21tb24ud2hpdGUsXG4gICAgZGVmYXVsdDogZ3JleVs1MF1cbiAgfSxcbiAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSBhY3Rpb24gZWxlbWVudHMuXG4gIGFjdGlvbjoge1xuICAgIC8vIFRoZSBjb2xvciBvZiBhbiBhY3RpdmUgYWN0aW9uIGxpa2UgYW4gaWNvbiBidXR0b24uXG4gICAgYWN0aXZlOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGFuIGhvdmVyZWQgYWN0aW9uLlxuICAgIGhvdmVyOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgaG92ZXJPcGFjaXR5OiAwLjA0LFxuICAgIC8vIFRoZSBjb2xvciBvZiBhIHNlbGVjdGVkIGFjdGlvbi5cbiAgICBzZWxlY3RlZDogJ3JnYmEoMCwgMCwgMCwgMC4wOCknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4wOCxcbiAgICAvLyBUaGUgY29sb3Igb2YgYSBkaXNhYmxlZCBhY3Rpb24uXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjYpJyxcbiAgICAvLyBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiBhIGRpc2FibGVkIGFjdGlvbi5cbiAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICBkaXNhYmxlZE9wYWNpdHk6IDAuMzgsXG4gICAgZm9jdXM6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICBmb2N1c09wYWNpdHk6IDAuMTIsXG4gICAgYWN0aXZhdGVkT3BhY2l0eTogMC4xMlxuICB9XG59O1xuZXhwb3J0IHZhciBkYXJrID0ge1xuICB0ZXh0OiB7XG4gICAgcHJpbWFyeTogY29tbW9uLndoaXRlLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIGljb246ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknXG4gIH0sXG4gIGRpdmlkZXI6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgYmFja2dyb3VuZDoge1xuICAgIHBhcGVyOiBncmV5WzgwMF0sXG4gICAgZGVmYXVsdDogJyMzMDMwMzAnXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIGFjdGl2ZTogY29tbW9uLndoaXRlLFxuICAgIGhvdmVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KScsXG4gICAgaG92ZXJPcGFjaXR5OiAwLjA4LFxuICAgIHNlbGVjdGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KScsXG4gICAgc2VsZWN0ZWRPcGFjaXR5OiAwLjE2LFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpJyxcbiAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgICBkaXNhYmxlZE9wYWNpdHk6IDAuMzgsXG4gICAgZm9jdXM6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgICBmb2N1c09wYWNpdHk6IDAuMTIsXG4gICAgYWN0aXZhdGVkT3BhY2l0eTogMC4yNFxuICB9XG59O1xuXG5mdW5jdGlvbiBhZGRMaWdodE9yRGFyayhpbnRlbnQsIGRpcmVjdGlvbiwgc2hhZGUsIHRvbmFsT2Zmc2V0KSB7XG4gIHZhciB0b25hbE9mZnNldExpZ2h0ID0gdG9uYWxPZmZzZXQubGlnaHQgfHwgdG9uYWxPZmZzZXQ7XG4gIHZhciB0b25hbE9mZnNldERhcmsgPSB0b25hbE9mZnNldC5kYXJrIHx8IHRvbmFsT2Zmc2V0ICogMS41O1xuXG4gIGlmICghaW50ZW50W2RpcmVjdGlvbl0pIHtcbiAgICBpZiAoaW50ZW50Lmhhc093blByb3BlcnR5KHNoYWRlKSkge1xuICAgICAgaW50ZW50W2RpcmVjdGlvbl0gPSBpbnRlbnRbc2hhZGVdO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGlnaHQnKSB7XG4gICAgICBpbnRlbnQubGlnaHQgPSBsaWdodGVuKGludGVudC5tYWluLCB0b25hbE9mZnNldExpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2RhcmsnKSB7XG4gICAgICBpbnRlbnQuZGFyayA9IGRhcmtlbihpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXREYXJrKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGFsZXR0ZShwYWxldHRlKSB7XG4gIHZhciBfcGFsZXR0ZSRwcmltYXJ5ID0gcGFsZXR0ZS5wcmltYXJ5LFxuICAgICAgcHJpbWFyeSA9IF9wYWxldHRlJHByaW1hcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogaW5kaWdvWzMwMF0sXG4gICAgbWFpbjogaW5kaWdvWzUwMF0sXG4gICAgZGFyazogaW5kaWdvWzcwMF1cbiAgfSA6IF9wYWxldHRlJHByaW1hcnksXG4gICAgICBfcGFsZXR0ZSRzZWNvbmRhcnkgPSBwYWxldHRlLnNlY29uZGFyeSxcbiAgICAgIHNlY29uZGFyeSA9IF9wYWxldHRlJHNlY29uZGFyeSA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBwaW5rLkEyMDAsXG4gICAgbWFpbjogcGluay5BNDAwLFxuICAgIGRhcms6IHBpbmsuQTcwMFxuICB9IDogX3BhbGV0dGUkc2Vjb25kYXJ5LFxuICAgICAgX3BhbGV0dGUkZXJyb3IgPSBwYWxldHRlLmVycm9yLFxuICAgICAgZXJyb3IgPSBfcGFsZXR0ZSRlcnJvciA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiByZWRbMzAwXSxcbiAgICBtYWluOiByZWRbNTAwXSxcbiAgICBkYXJrOiByZWRbNzAwXVxuICB9IDogX3BhbGV0dGUkZXJyb3IsXG4gICAgICBfcGFsZXR0ZSR3YXJuaW5nID0gcGFsZXR0ZS53YXJuaW5nLFxuICAgICAgd2FybmluZyA9IF9wYWxldHRlJHdhcm5pbmcgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogb3JhbmdlWzMwMF0sXG4gICAgbWFpbjogb3JhbmdlWzUwMF0sXG4gICAgZGFyazogb3JhbmdlWzcwMF1cbiAgfSA6IF9wYWxldHRlJHdhcm5pbmcsXG4gICAgICBfcGFsZXR0ZSRpbmZvID0gcGFsZXR0ZS5pbmZvLFxuICAgICAgaW5mbyA9IF9wYWxldHRlJGluZm8gPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogYmx1ZVszMDBdLFxuICAgIG1haW46IGJsdWVbNTAwXSxcbiAgICBkYXJrOiBibHVlWzcwMF1cbiAgfSA6IF9wYWxldHRlJGluZm8sXG4gICAgICBfcGFsZXR0ZSRzdWNjZXNzID0gcGFsZXR0ZS5zdWNjZXNzLFxuICAgICAgc3VjY2VzcyA9IF9wYWxldHRlJHN1Y2Nlc3MgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogZ3JlZW5bMzAwXSxcbiAgICBtYWluOiBncmVlbls1MDBdLFxuICAgIGRhcms6IGdyZWVuWzcwMF1cbiAgfSA6IF9wYWxldHRlJHN1Y2Nlc3MsXG4gICAgICBfcGFsZXR0ZSR0eXBlID0gcGFsZXR0ZS50eXBlLFxuICAgICAgdHlwZSA9IF9wYWxldHRlJHR5cGUgPT09IHZvaWQgMCA/ICdsaWdodCcgOiBfcGFsZXR0ZSR0eXBlLFxuICAgICAgX3BhbGV0dGUkY29udHJhc3RUaHJlID0gcGFsZXR0ZS5jb250cmFzdFRocmVzaG9sZCxcbiAgICAgIGNvbnRyYXN0VGhyZXNob2xkID0gX3BhbGV0dGUkY29udHJhc3RUaHJlID09PSB2b2lkIDAgPyAzIDogX3BhbGV0dGUkY29udHJhc3RUaHJlLFxuICAgICAgX3BhbGV0dGUkdG9uYWxPZmZzZXQgPSBwYWxldHRlLnRvbmFsT2Zmc2V0LFxuICAgICAgdG9uYWxPZmZzZXQgPSBfcGFsZXR0ZSR0b25hbE9mZnNldCA9PT0gdm9pZCAwID8gMC4yIDogX3BhbGV0dGUkdG9uYWxPZmZzZXQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwYWxldHRlLCBbXCJwcmltYXJ5XCIsIFwic2Vjb25kYXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuaW5nXCIsIFwiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ0eXBlXCIsIFwiY29udHJhc3RUaHJlc2hvbGRcIiwgXCJ0b25hbE9mZnNldFwiXSk7IC8vIFVzZSB0aGUgc2FtZSBsb2dpYyBhc1xuICAvLyBCb290c3RyYXA6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iLzFkNmUzNzEwZGQ0NDdkZTFhMjAwZjI5ZThmYTUyMWY4YTA5MDhmNzAvc2Nzcy9fZnVuY3Rpb25zLnNjc3MjTDU5XG4gIC8vIGFuZCBtYXRlcmlhbC1jb21wb25lbnRzLXdlYiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL2FjNDZiODg2M2M0ZGFiOWZjMjJjNGM2NjJkYzZiZDFiNjVkZDY1MmYvcGFja2FnZXMvbWRjLXRoZW1lL19mdW5jdGlvbnMuc2NzcyNMNTRcblxuXG4gIGZ1bmN0aW9uIGdldENvbnRyYXN0VGV4dChiYWNrZ3JvdW5kKSB7XG4gICAgdmFyIGNvbnRyYXN0VGV4dCA9IGdldENvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgZGFyay50ZXh0LnByaW1hcnkpID49IGNvbnRyYXN0VGhyZXNob2xkID8gZGFyay50ZXh0LnByaW1hcnkgOiBsaWdodC50ZXh0LnByaW1hcnk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGNvbnRyYXN0ID0gZ2V0Q29udHJhc3RSYXRpbyhiYWNrZ3JvdW5kLCBjb250cmFzdFRleHQpO1xuXG4gICAgICBpZiAoY29udHJhc3QgPCAzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBjb250cmFzdCByYXRpbyBvZiBcIi5jb25jYXQoY29udHJhc3QsIFwiOjEgZm9yIFwiKS5jb25jYXQoY29udHJhc3RUZXh0LCBcIiBvbiBcIikuY29uY2F0KGJhY2tncm91bmQpLCAnZmFsbHMgYmVsb3cgdGhlIFdDQUcgcmVjb21tZW5kZWQgYWJzb2x1dGUgbWluaW11bSBjb250cmFzdCByYXRpbyBvZiAzOjEuJywgJ2h0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3Zpc3VhbC1hdWRpby1jb250cmFzdC1jb250cmFzdCddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJhc3RUZXh0O1xuICB9XG5cbiAgdmFyIGF1Z21lbnRDb2xvciA9IGZ1bmN0aW9uIGF1Z21lbnRDb2xvcihjb2xvcikge1xuICAgIHZhciBtYWluU2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDUwMDtcbiAgICB2YXIgbGlnaHRTaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMzAwO1xuICAgIHZhciBkYXJrU2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDcwMDtcbiAgICBjb2xvciA9IF9leHRlbmRzKHt9LCBjb2xvcik7XG5cbiAgICBpZiAoIWNvbG9yLm1haW4gJiYgY29sb3JbbWFpblNoYWRlXSkge1xuICAgICAgY29sb3IubWFpbiA9IGNvbG9yW21haW5TaGFkZV07XG4gICAgfVxuXG4gICAgaWYgKCFjb2xvci5tYWluKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGNvbG9yIHByb3ZpZGVkIHRvIGF1Z21lbnRDb2xvcihjb2xvcikgaXMgaW52YWxpZC5cXG5UaGUgY29sb3Igb2JqZWN0IG5lZWRzIHRvIGhhdmUgYSBgbWFpbmAgcHJvcGVydHkgb3IgYSBgXCIuY29uY2F0KG1haW5TaGFkZSwgXCJgIHByb3BlcnR5LlwiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNCwgbWFpblNoYWRlKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvci5tYWluICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFRoZSBjb2xvciBwcm92aWRlZCB0byBhdWdtZW50Q29sb3IoY29sb3IpIGlzIGludmFsaWQuXFxuYGNvbG9yLm1haW5gIHNob3VsZCBiZSBhIHN0cmluZywgYnV0IGBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoY29sb3IubWFpbiksIFwiYCB3YXMgcHJvdmlkZWQgaW5zdGVhZC5cXG5cXG5EaWQgeW91IGludGVuZCB0byB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYXBwcm9hY2hlcz9cXG5cXG5pbXBvcnQge1xceEEwZ3JlZW4gfSBmcm9tIFxcXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcXFwiO1xcblxcbmNvbnN0IHRoZW1lMSA9IGNyZWF0ZVRoZW1lKHsgcGFsZXR0ZToge1xcbiAgcHJpbWFyeTogZ3JlZW4sXFxufSB9KTtcXG5cXG5jb25zdCB0aGVtZTIgPSBjcmVhdGVUaGVtZSh7IHBhbGV0dGU6IHtcXG4gIHByaW1hcnk6IHsgbWFpbjogZ3JlZW5bNTAwXSB9LFxcbn0gfSk7XCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg1LCBKU09OLnN0cmluZ2lmeShjb2xvci5tYWluKSkpO1xuICAgIH1cblxuICAgIGFkZExpZ2h0T3JEYXJrKGNvbG9yLCAnbGlnaHQnLCBsaWdodFNoYWRlLCB0b25hbE9mZnNldCk7XG4gICAgYWRkTGlnaHRPckRhcmsoY29sb3IsICdkYXJrJywgZGFya1NoYWRlLCB0b25hbE9mZnNldCk7XG5cbiAgICBpZiAoIWNvbG9yLmNvbnRyYXN0VGV4dCkge1xuICAgICAgY29sb3IuY29udHJhc3RUZXh0ID0gZ2V0Q29udHJhc3RUZXh0KGNvbG9yLm1haW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcbiAgfTtcblxuICB2YXIgdHlwZXMgPSB7XG4gICAgZGFyazogZGFyayxcbiAgICBsaWdodDogbGlnaHRcbiAgfTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghdHlwZXNbdHlwZV0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVGhlIHBhbGV0dGUgdHlwZSBgXCIuY29uY2F0KHR5cGUsIFwiYCBpcyBub3Qgc3VwcG9ydGVkLlwiKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBhbGV0dGVPdXRwdXQgPSBkZWVwbWVyZ2UoX2V4dGVuZHMoe1xuICAgIC8vIEEgY29sbGVjdGlvbiBvZiBjb21tb24gY29sb3JzLlxuICAgIGNvbW1vbjogY29tbW9uLFxuICAgIC8vIFRoZSBwYWxldHRlIHR5cGUsIGNhbiBiZSBsaWdodCBvciBkYXJrLlxuICAgIHR5cGU6IHR5cGUsXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBwcmltYXJ5IGludGVyZmFjZSBlbGVtZW50cyBmb3IgYSB1c2VyLlxuICAgIHByaW1hcnk6IGF1Z21lbnRDb2xvcihwcmltYXJ5KSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHNlY29uZGFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBzZWNvbmRhcnk6IGF1Z21lbnRDb2xvcihzZWNvbmRhcnksICdBNDAwJywgJ0EyMDAnLCAnQTcwMCcpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgaW50ZXJmYWNlIGVsZW1lbnRzIHRoYXQgdGhlIHVzZXIgc2hvdWxkIGJlIG1hZGUgYXdhcmUgb2YuXG4gICAgZXJyb3I6IGF1Z21lbnRDb2xvcihlcnJvciksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBwb3RlbnRpYWxseSBkYW5nZXJvdXMgYWN0aW9ucyBvciBpbXBvcnRhbnQgbWVzc2FnZXMuXG4gICAgd2FybmluZzogYXVnbWVudENvbG9yKHdhcm5pbmcpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBwcmVzZW50IGluZm9ybWF0aW9uIHRvIHRoZSB1c2VyIHRoYXQgaXMgbmV1dHJhbCBhbmQgbm90IG5lY2Vzc2FyaWx5IGltcG9ydGFudC5cbiAgICBpbmZvOiBhdWdtZW50Q29sb3IoaW5mbyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIGluZGljYXRlIHRoZSBzdWNjZXNzZnVsIGNvbXBsZXRpb24gb2YgYW4gYWN0aW9uIHRoYXQgdXNlciB0cmlnZ2VyZWQuXG4gICAgc3VjY2VzczogYXVnbWVudENvbG9yKHN1Y2Nlc3MpLFxuICAgIC8vIFRoZSBncmV5IGNvbG9ycy5cbiAgICBncmV5OiBncmV5LFxuICAgIC8vIFVzZWQgYnkgYGdldENvbnRyYXN0VGV4dCgpYCB0byBtYXhpbWl6ZSB0aGUgY29udHJhc3QgYmV0d2VlblxuICAgIC8vIHRoZSBiYWNrZ3JvdW5kIGFuZCB0aGUgdGV4dC5cbiAgICBjb250cmFzdFRocmVzaG9sZDogY29udHJhc3RUaHJlc2hvbGQsXG4gICAgLy8gVGFrZXMgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCByZXR1cm5zIHRoZSB0ZXh0IGNvbG9yIHRoYXQgbWF4aW1pemVzIHRoZSBjb250cmFzdC5cbiAgICBnZXRDb250cmFzdFRleHQ6IGdldENvbnRyYXN0VGV4dCxcbiAgICAvLyBHZW5lcmF0ZSBhIHJpY2ggY29sb3Igb2JqZWN0LlxuICAgIGF1Z21lbnRDb2xvcjogYXVnbWVudENvbG9yLFxuICAgIC8vIFVzZWQgYnkgdGhlIGZ1bmN0aW9ucyBiZWxvdyB0byBzaGlmdCBhIGNvbG9yJ3MgbHVtaW5hbmNlIGJ5IGFwcHJveGltYXRlbHlcbiAgICAvLyB0d28gaW5kZXhlcyB3aXRoaW4gaXRzIHRvbmFsIHBhbGV0dGUuXG4gICAgLy8gRS5nLiwgc2hpZnQgZnJvbSBSZWQgNTAwIHRvIFJlZCAzMDAgb3IgUmVkIDcwMC5cbiAgICB0b25hbE9mZnNldDogdG9uYWxPZmZzZXRcbiAgfSwgdHlwZXNbdHlwZV0pLCBvdGhlcik7XG4gIHJldHVybiBwYWxldHRlT3V0cHV0O1xufSIsImltcG9ydCB7IGNyZWF0ZVVuYXJ5U3BhY2luZyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zeXN0ZW0nO1xudmFyIHdhcm5PbmNlO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3BhY2luZygpIHtcbiAgdmFyIHNwYWNpbmdJbnB1dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogODtcblxuICAvLyBBbHJlYWR5IHRyYW5zZm9ybWVkLlxuICBpZiAoc3BhY2luZ0lucHV0Lm11aSkge1xuICAgIHJldHVybiBzcGFjaW5nSW5wdXQ7XG4gIH0gLy8gTWF0ZXJpYWwgRGVzaWduIGxheW91dHMgYXJlIHZpc3VhbGx5IGJhbGFuY2VkLiBNb3N0IG1lYXN1cmVtZW50cyBhbGlnbiB0byBhbiA4ZHAgZ3JpZCBhcHBsaWVkLCB3aGljaCBhbGlnbnMgYm90aCBzcGFjaW5nIGFuZCB0aGUgb3ZlcmFsbCBsYXlvdXQuXG4gIC8vIFNtYWxsZXIgY29tcG9uZW50cywgc3VjaCBhcyBpY29ucyBhbmQgdHlwZSwgY2FuIGFsaWduIHRvIGEgNGRwIGdyaWQuXG4gIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2xheW91dC91bmRlcnN0YW5kaW5nLWxheW91dC5odG1sI3VzYWdlXG5cblxuICB2YXIgdHJhbnNmb3JtID0gY3JlYXRlVW5hcnlTcGFjaW5nKHtcbiAgICBzcGFjaW5nOiBzcGFjaW5nSW5wdXRcbiAgfSk7XG5cbiAgdmFyIHNwYWNpbmcgPSBmdW5jdGlvbiBzcGFjaW5nKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoYXJncy5sZW5ndGggPD0gNCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUb28gbWFueSBhcmd1bWVudHMgcHJvdmlkZWQsIGV4cGVjdGVkIGJldHdlZW4gMCBhbmQgNCwgZ290IFwiLmNvbmNhdChhcmdzLmxlbmd0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybSgxKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oYXJnc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3MubWFwKGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgb3V0cHV0ID0gdHJhbnNmb3JtKGFyZ3VtZW50KTtcbiAgICAgIHJldHVybiB0eXBlb2Ygb3V0cHV0ID09PSAnbnVtYmVyJyA/IFwiXCIuY29uY2F0KG91dHB1dCwgXCJweFwiKSA6IG91dHB1dDtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH07IC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHRvIHJlbW92ZSBpbiB2NS5cblxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcGFjaW5nLCAndW5pdCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghd2Fybk9uY2UgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogdGhlbWUuc3BhY2luZy51bml0IHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuJywgJ0l0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2NS4nLCAnWW91IGNhbiByZXBsYWNlIGB0aGVtZS5zcGFjaW5nLnVuaXQgKiB5YCB3aXRoIGB0aGVtZS5zcGFjaW5nKHkpYC4nLCAnJywgJ1lvdSBjYW4gdXNlIHRoZSBgaHR0cHM6Ly9naXRodWIuY29tL211aS1vcmcvbWF0ZXJpYWwtdWkvdHJlZS9tYXN0ZXIvcGFja2FnZXMvbWF0ZXJpYWwtdWktY29kZW1vZC9SRUFETUUubWQjdGhlbWUtc3BhY2luZy1hcGlgIG1pZ3JhdGlvbiBoZWxwZXIgdG8gbWFrZSB0aGUgcHJvY2VzcyBzbW9vdGhlci4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXJuT25jZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzcGFjaW5nSW5wdXQ7XG4gICAgfVxuICB9KTtcbiAgc3BhY2luZy5tdWkgPSB0cnVlO1xuICByZXR1cm4gc3BhY2luZztcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdHlsZXMgYXMgY3JlYXRlU3R5bGVzT3JpZ2luYWwgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJzsgLy8gbGV0IHdhcm5PbmNlID0gZmFsc2U7XG4vLyBUbyByZW1vdmUgaW4gdjVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICAvLyB3YXJuaW5nKFxuICAvLyAgIHdhcm5PbmNlLFxuICAvLyAgIFtcbiAgLy8gICAgICdNYXRlcmlhbC1VSTogY3JlYXRlU3R5bGVzIGZyb20gQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzIGlzIGRlcHJlY2F0ZWQuJyxcbiAgLy8gICAgICdQbGVhc2UgdXNlIEBtYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlU3R5bGVzJyxcbiAgLy8gICBdLmpvaW4oJ1xcbicpLFxuICAvLyApO1xuICAvLyB3YXJuT25jZSA9IHRydWU7XG4gIHJldHVybiBjcmVhdGVTdHlsZXNPcmlnaW5hbChzdHlsZXMpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjcmVhdGVCcmVha3BvaW50cyBmcm9tICcuL2NyZWF0ZUJyZWFrcG9pbnRzJztcbmltcG9ydCBjcmVhdGVNaXhpbnMgZnJvbSAnLi9jcmVhdGVNaXhpbnMnO1xuaW1wb3J0IGNyZWF0ZVBhbGV0dGUgZnJvbSAnLi9jcmVhdGVQYWxldHRlJztcbmltcG9ydCBjcmVhdGVUeXBvZ3JhcGh5IGZyb20gJy4vY3JlYXRlVHlwb2dyYXBoeSc7XG5pbXBvcnQgc2hhZG93cyBmcm9tICcuL3NoYWRvd3MnO1xuaW1wb3J0IHNoYXBlIGZyb20gJy4vc2hhcGUnO1xuaW1wb3J0IGNyZWF0ZVNwYWNpbmcgZnJvbSAnLi9jcmVhdGVTcGFjaW5nJztcbmltcG9ydCB0cmFuc2l0aW9ucyBmcm9tICcuL3RyYW5zaXRpb25zJztcbmltcG9ydCB6SW5kZXggZnJvbSAnLi96SW5kZXgnO1xuXG5mdW5jdGlvbiBjcmVhdGVUaGVtZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBfb3B0aW9ucyRicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50c0lucHV0ID0gX29wdGlvbnMkYnJlYWtwb2ludHMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkYnJlYWtwb2ludHMsXG4gICAgICBfb3B0aW9ucyRtaXhpbnMgPSBvcHRpb25zLm1peGlucyxcbiAgICAgIG1peGluc0lucHV0ID0gX29wdGlvbnMkbWl4aW5zID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJG1peGlucyxcbiAgICAgIF9vcHRpb25zJHBhbGV0dGUgPSBvcHRpb25zLnBhbGV0dGUsXG4gICAgICBwYWxldHRlSW5wdXQgPSBfb3B0aW9ucyRwYWxldHRlID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHBhbGV0dGUsXG4gICAgICBzcGFjaW5nSW5wdXQgPSBvcHRpb25zLnNwYWNpbmcsXG4gICAgICBfb3B0aW9ucyR0eXBvZ3JhcGh5ID0gb3B0aW9ucy50eXBvZ3JhcGh5LFxuICAgICAgdHlwb2dyYXBoeUlucHV0ID0gX29wdGlvbnMkdHlwb2dyYXBoeSA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyR0eXBvZ3JhcGh5LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wiYnJlYWtwb2ludHNcIiwgXCJtaXhpbnNcIiwgXCJwYWxldHRlXCIsIFwic3BhY2luZ1wiLCBcInR5cG9ncmFwaHlcIl0pO1xuXG4gIHZhciBwYWxldHRlID0gY3JlYXRlUGFsZXR0ZShwYWxldHRlSW5wdXQpO1xuICB2YXIgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50c0lucHV0KTtcbiAgdmFyIHNwYWNpbmcgPSBjcmVhdGVTcGFjaW5nKHNwYWNpbmdJbnB1dCk7XG4gIHZhciBtdWlUaGVtZSA9IGRlZXBtZXJnZSh7XG4gICAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICAgIGRpcmVjdGlvbjogJ2x0cicsXG4gICAgbWl4aW5zOiBjcmVhdGVNaXhpbnMoYnJlYWtwb2ludHMsIHNwYWNpbmcsIG1peGluc0lucHV0KSxcbiAgICBvdmVycmlkZXM6IHt9LFxuICAgIC8vIEluamVjdCBjdXN0b20gc3R5bGVzXG4gICAgcGFsZXR0ZTogcGFsZXR0ZSxcbiAgICBwcm9wczoge30sXG4gICAgLy8gUHJvdmlkZSBkZWZhdWx0IHByb3BzXG4gICAgc2hhZG93czogc2hhZG93cyxcbiAgICB0eXBvZ3JhcGh5OiBjcmVhdGVUeXBvZ3JhcGh5KHBhbGV0dGUsIHR5cG9ncmFwaHlJbnB1dCksXG4gICAgc3BhY2luZzogc3BhY2luZyxcbiAgICBzaGFwZTogc2hhcGUsXG4gICAgdHJhbnNpdGlvbnM6IHRyYW5zaXRpb25zLFxuICAgIHpJbmRleDogekluZGV4XG4gIH0sIG90aGVyKTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBtdWlUaGVtZSA9IGFyZ3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGRlZXBtZXJnZShhY2MsIGFyZ3VtZW50KTtcbiAgfSwgbXVpVGhlbWUpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIHBzZXVkb0NsYXNzZXMgPSBbJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZm9jdXNlZCcsICdmb2N1c1Zpc2libGUnLCAncmVxdWlyZWQnLCAnZXhwYW5kZWQnLCAnc2VsZWN0ZWQnXTtcblxuICAgIHZhciB0cmF2ZXJzZSA9IGZ1bmN0aW9uIHRyYXZlcnNlKG5vZGUsIHBhcmVudEtleSkge1xuICAgICAgdmFyIGRlcHRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuICAgICAgdmFyIGtleTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pbiwgbm8tcmVzdHJpY3RlZC1zeW50YXhcblxuICAgICAgZm9yIChrZXkgaW4gbm9kZSkge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2tleV07XG5cbiAgICAgICAgaWYgKGRlcHRoID09PSAxKSB7XG4gICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdNdWknKSA9PT0gMCAmJiBjaGlsZCkge1xuICAgICAgICAgICAgdHJhdmVyc2UoY2hpbGQsIGtleSwgZGVwdGggKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHNldWRvQ2xhc3Nlcy5pbmRleE9mKGtleSkgIT09IC0xICYmIE9iamVjdC5rZXlzKGNoaWxkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBgXCIuY29uY2F0KHBhcmVudEtleSwgXCJgIGNvbXBvbmVudCBpbmNyZWFzZXMgXCIpICsgXCJ0aGUgQ1NTIHNwZWNpZmljaXR5IG9mIHRoZSBgXCIuY29uY2F0KGtleSwgXCJgIGludGVybmFsIHN0YXRlLlwiKSwgJ1lvdSBjYW4gbm90IG92ZXJyaWRlIGl0IGxpa2UgdGhpczogJywgSlNPTi5zdHJpbmdpZnkobm9kZSwgbnVsbCwgMiksICcnLCAnSW5zdGVhZCwgeW91IG5lZWQgdG8gdXNlIHRoZSAkcnVsZU5hbWUgc3ludGF4OicsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgcm9vdDogX2RlZmluZVByb3BlcnR5KHt9LCBcIiYkXCIuY29uY2F0KGtleSksIGNoaWxkKVxuICAgICAgICAgICAgfSwgbnVsbCwgMiksICcnLCAnaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vci9wc2V1ZG8tY2xhc3Nlcy1ndWlkZSddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICB9IC8vIFJlbW92ZSB0aGUgc3R5bGUgdG8gcHJldmVudCBnbG9iYWwgY29uZmxpY3RzLlxuXG5cbiAgICAgICAgICBub2RlW2tleV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0cmF2ZXJzZShtdWlUaGVtZS5vdmVycmlkZXMpO1xuICB9XG5cbiAgcmV0dXJuIG11aVRoZW1lO1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11aVRoZW1lKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZSBjcmVhdGVNdWlUaGVtZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCB0byBjcmVhdGVUaGVtZS4nLCAnJywgXCJZb3Ugc2hvdWxkIHVzZSBgaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYFwiXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVRoZW1lLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRoZW1lOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5cbmZ1bmN0aW9uIHJvdW5kKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMWU1KSAvIDFlNTtcbn1cblxudmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcblxuZnVuY3Rpb24gcm91bmRXaXRoRGVwcmVjYXRpb25XYXJuaW5nKHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogVGhlIGB0aGVtZS50eXBvZ3JhcGh5LnJvdW5kYCBoZWxwZXIgaXMgZGVwcmVjYXRlZC4nLCAnSGVhZCB0byBodHRwczovL21hdGVyaWFsLXVpLmNvbS9yL21pZ3JhdGlvbi12NC8jdGhlbWUgZm9yIGEgbWlncmF0aW9uIHBhdGguJ10uam9pbignXFxuJykpO1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvdW5kKHZhbHVlKTtcbn1cblxudmFyIGNhc2VBbGxDYXBzID0ge1xuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xufTtcbnZhciBkZWZhdWx0Rm9udEZhbWlseSA9ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnO1xuLyoqXG4gKiBAc2VlIEBsaW5re2h0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL3R5cG9ncmFwaHkvdGhlLXR5cGUtc3lzdGVtLmh0bWx9XG4gKiBAc2VlIEBsaW5re2h0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL3R5cG9ncmFwaHkvdW5kZXJzdGFuZGluZy10eXBvZ3JhcGh5Lmh0bWx9XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVHlwb2dyYXBoeShwYWxldHRlLCB0eXBvZ3JhcGh5KSB7XG4gIHZhciBfcmVmID0gdHlwZW9mIHR5cG9ncmFwaHkgPT09ICdmdW5jdGlvbicgPyB0eXBvZ3JhcGh5KHBhbGV0dGUpIDogdHlwb2dyYXBoeSxcbiAgICAgIF9yZWYkZm9udEZhbWlseSA9IF9yZWYuZm9udEZhbWlseSxcbiAgICAgIGZvbnRGYW1pbHkgPSBfcmVmJGZvbnRGYW1pbHkgPT09IHZvaWQgMCA/IGRlZmF1bHRGb250RmFtaWx5IDogX3JlZiRmb250RmFtaWx5LFxuICAgICAgX3JlZiRmb250U2l6ZSA9IF9yZWYuZm9udFNpemUsXG4gICAgICBmb250U2l6ZSA9IF9yZWYkZm9udFNpemUgPT09IHZvaWQgMCA/IDE0IDogX3JlZiRmb250U2l6ZSxcbiAgICAgIF9yZWYkZm9udFdlaWdodExpZ2h0ID0gX3JlZi5mb250V2VpZ2h0TGlnaHQsXG4gICAgICBmb250V2VpZ2h0TGlnaHQgPSBfcmVmJGZvbnRXZWlnaHRMaWdodCA9PT0gdm9pZCAwID8gMzAwIDogX3JlZiRmb250V2VpZ2h0TGlnaHQsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRSZWd1bGEgPSBfcmVmLmZvbnRXZWlnaHRSZWd1bGFyLFxuICAgICAgZm9udFdlaWdodFJlZ3VsYXIgPSBfcmVmJGZvbnRXZWlnaHRSZWd1bGEgPT09IHZvaWQgMCA/IDQwMCA6IF9yZWYkZm9udFdlaWdodFJlZ3VsYSxcbiAgICAgIF9yZWYkZm9udFdlaWdodE1lZGl1bSA9IF9yZWYuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIGZvbnRXZWlnaHRNZWRpdW0gPSBfcmVmJGZvbnRXZWlnaHRNZWRpdW0gPT09IHZvaWQgMCA/IDUwMCA6IF9yZWYkZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIF9yZWYkZm9udFdlaWdodEJvbGQgPSBfcmVmLmZvbnRXZWlnaHRCb2xkLFxuICAgICAgZm9udFdlaWdodEJvbGQgPSBfcmVmJGZvbnRXZWlnaHRCb2xkID09PSB2b2lkIDAgPyA3MDAgOiBfcmVmJGZvbnRXZWlnaHRCb2xkLFxuICAgICAgX3JlZiRodG1sRm9udFNpemUgPSBfcmVmLmh0bWxGb250U2l6ZSxcbiAgICAgIGh0bWxGb250U2l6ZSA9IF9yZWYkaHRtbEZvbnRTaXplID09PSB2b2lkIDAgPyAxNiA6IF9yZWYkaHRtbEZvbnRTaXplLFxuICAgICAgYWxsVmFyaWFudHMgPSBfcmVmLmFsbFZhcmlhbnRzLFxuICAgICAgcHhUb1JlbTIgPSBfcmVmLnB4VG9SZW0sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJmb250RmFtaWx5XCIsIFwiZm9udFNpemVcIiwgXCJmb250V2VpZ2h0TGlnaHRcIiwgXCJmb250V2VpZ2h0UmVndWxhclwiLCBcImZvbnRXZWlnaHRNZWRpdW1cIiwgXCJmb250V2VpZ2h0Qm9sZFwiLCBcImh0bWxGb250U2l6ZVwiLCBcImFsbFZhcmlhbnRzXCIsIFwicHhUb1JlbVwiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGZvbnRTaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBmb250U2l6ZWAgaXMgcmVxdWlyZWQgdG8gYmUgYSBudW1iZXIuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBodG1sRm9udFNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogYGh0bWxGb250U2l6ZWAgaXMgcmVxdWlyZWQgdG8gYmUgYSBudW1iZXIuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvZWYgPSBmb250U2l6ZSAvIDE0O1xuXG4gIHZhciBweFRvUmVtID0gcHhUb1JlbTIgfHwgZnVuY3Rpb24gKHNpemUpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoc2l6ZSAvIGh0bWxGb250U2l6ZSAqIGNvZWYsIFwicmVtXCIpO1xuICB9O1xuXG4gIHZhciBidWlsZFZhcmlhbnQgPSBmdW5jdGlvbiBidWlsZFZhcmlhbnQoZm9udFdlaWdodCwgc2l6ZSwgbGluZUhlaWdodCwgbGV0dGVyU3BhY2luZywgY2FzaW5nKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LFxuICAgICAgZm9udFNpemU6IHB4VG9SZW0oc2l6ZSksXG4gICAgICAvLyBVbml0bGVzcyBmb2xsb3dpbmcgaHR0cHM6Ly9tZXllcndlYi5jb20vZXJpYy90aG91Z2h0cy8yMDA2LzAyLzA4L3VuaXRsZXNzLWxpbmUtaGVpZ2h0cy9cbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHRcbiAgICB9LCBmb250RmFtaWx5ID09PSBkZWZhdWx0Rm9udEZhbWlseSA/IHtcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiXCIuY29uY2F0KHJvdW5kKGxldHRlclNwYWNpbmcgLyBzaXplKSwgXCJlbVwiKVxuICAgIH0gOiB7fSwgY2FzaW5nLCBhbGxWYXJpYW50cyk7XG4gIH07XG5cbiAgdmFyIHZhcmlhbnRzID0ge1xuICAgIGgxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodExpZ2h0LCA5NiwgMS4xNjcsIC0xLjUpLFxuICAgIGgyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodExpZ2h0LCA2MCwgMS4yLCAtMC41KSxcbiAgICBoMzogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCA0OCwgMS4xNjcsIDApLFxuICAgIGg0OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDM0LCAxLjIzNSwgMC4yNSksXG4gICAgaDU6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMjQsIDEuMzM0LCAwKSxcbiAgICBoNjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDIwLCAxLjYsIDAuMTUpLFxuICAgIHN1YnRpdGxlMTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNiwgMS43NSwgMC4xNSksXG4gICAgc3VidGl0bGUyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMTQsIDEuNTcsIDAuMSksXG4gICAgYm9keTE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTYsIDEuNSwgMC4xNSksXG4gICAgYm9keTI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTQsIDEuNDMsIDAuMTUpLFxuICAgIGJ1dHRvbjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDE0LCAxLjc1LCAwLjQsIGNhc2VBbGxDYXBzKSxcbiAgICBjYXB0aW9uOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDEyLCAxLjY2LCAwLjQpLFxuICAgIG92ZXJsaW5lOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDEyLCAyLjY2LCAxLCBjYXNlQWxsQ2FwcylcbiAgfTtcbiAgcmV0dXJuIGRlZXBtZXJnZShfZXh0ZW5kcyh7XG4gICAgaHRtbEZvbnRTaXplOiBodG1sRm9udFNpemUsXG4gICAgcHhUb1JlbTogcHhUb1JlbSxcbiAgICByb3VuZDogcm91bmRXaXRoRGVwcmVjYXRpb25XYXJuaW5nLFxuICAgIC8vIFRPRE8gdjU6IHJlbW92ZVxuICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IGZvbnRTaXplLFxuICAgIGZvbnRXZWlnaHRMaWdodDogZm9udFdlaWdodExpZ2h0LFxuICAgIGZvbnRXZWlnaHRSZWd1bGFyOiBmb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250V2VpZ2h0TWVkaXVtOiBmb250V2VpZ2h0TWVkaXVtLFxuICAgIGZvbnRXZWlnaHRCb2xkOiBmb250V2VpZ2h0Qm9sZFxuICB9LCB2YXJpYW50cyksIG90aGVyLCB7XG4gICAgY2xvbmU6IGZhbHNlIC8vIE5vIG5lZWQgdG8gY2xvbmUgZGVlcFxuXG4gIH0pO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gaXNVbml0bGVzcyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHBhcnNlRmxvYXQodmFsdWUpKS5sZW5ndGggPT09IFN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufSAvLyBQb3J0ZWQgZnJvbSBDb21wYXNzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vQ29tcGFzcy9jb21wYXNzL2Jsb2IvbWFzdGVyL2NvcmUvc3R5bGVzaGVldHMvY29tcGFzcy90eXBvZ3JhcGh5L191bml0cy5zY3NzXG4vLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQpLm1hdGNoKC9bXFxkLlxcLStdKlxccyooLiopLylbMV0gfHwgJyc7XG59IC8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0bGVzc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXRsZXNzKGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChsZW5ndGgpO1xufSAvLyBDb252ZXJ0IGFueSBDU1MgPGxlbmd0aD4gb3IgPHBlcmNlbnRhZ2U+IHZhbHVlIHRvIGFueSBhbm90aGVyLlxuLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vS3lsZUFNYXRoZXdzL2NvbnZlcnQtY3NzLWxlbmd0aFxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydExlbmd0aChiYXNlRm9udFNpemUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChsZW5ndGgsIHRvVW5pdCkge1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQobGVuZ3RoKTsgLy8gT3B0aW1pemUgZm9yIGNhc2VzIHdoZXJlIGBmcm9tYCBhbmQgYHRvYCB1bml0cyBhcmUgYWNjaWRlbnRhbGx5IHRoZSBzYW1lLlxuXG4gICAgaWYgKGZyb21Vbml0ID09PSB0b1VuaXQpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSAvLyBDb252ZXJ0IGlucHV0IGxlbmd0aCB0byBwaXhlbHMuXG5cblxuICAgIHZhciBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKTtcblxuICAgIGlmIChmcm9tVW5pdCAhPT0gJ3B4Jykge1xuICAgICAgaWYgKGZyb21Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmIChmcm9tVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCkgKiB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9XG4gICAgfSAvLyBDb252ZXJ0IGxlbmd0aCBpbiBwaXhlbHMgdG8gdGhlIG91dHB1dCB1bml0XG5cblxuICAgIHZhciBvdXRwdXRMZW5ndGggPSBweExlbmd0aDtcblxuICAgIGlmICh0b1VuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmICh0b1VuaXQgPT09ICdlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUZsb2F0KG91dHB1dExlbmd0aC50b0ZpeGVkKDUpKSArIHRvVW5pdDtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbGlnblByb3BlcnR5KF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBncmlkID0gX3JlZi5ncmlkO1xuICB2YXIgc2l6ZUJlbG93ID0gc2l6ZSAtIHNpemUgJSBncmlkO1xuICB2YXIgc2l6ZUFib3ZlID0gc2l6ZUJlbG93ICsgZ3JpZDtcbiAgcmV0dXJuIHNpemUgLSBzaXplQmVsb3cgPCBzaXplQWJvdmUgLSBzaXplID8gc2l6ZUJlbG93IDogc2l6ZUFib3ZlO1xufSAvLyBmb250R3JpZCBmaW5kcyBhIG1pbmltYWwgZ3JpZCAoaW4gcmVtKSBmb3IgdGhlIGZvbnRTaXplIHZhbHVlcyBzbyB0aGF0IHRoZVxuLy8gbGluZUhlaWdodCBmYWxscyB1bmRlciBhIHggcGl4ZWxzIGdyaWQsIDRweCBpbiB0aGUgY2FzZSBvZiBNYXRlcmlhbCBEZXNpZ24sXG4vLyB3aXRob3V0IGNoYW5naW5nIHRoZSByZWxhdGl2ZSBsaW5lIGhlaWdodFxuXG5leHBvcnQgZnVuY3Rpb24gZm9udEdyaWQoX3JlZjIpIHtcbiAgdmFyIGxpbmVIZWlnaHQgPSBfcmVmMi5saW5lSGVpZ2h0LFxuICAgICAgcGl4ZWxzID0gX3JlZjIucGl4ZWxzLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZjIuaHRtbEZvbnRTaXplO1xuICByZXR1cm4gcGl4ZWxzIC8gKGxpbmVIZWlnaHQgKiBodG1sRm9udFNpemUpO1xufVxuLyoqXG4gKiBnZW5lcmF0ZSBhIHJlc3BvbnNpdmUgdmVyc2lvbiBvZiBhIGdpdmVuIENTUyBwcm9wZXJ0eVxuICogQGV4YW1wbGVcbiAqIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gKiAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxuICogICBtaW46IDE1LFxuICogICBtYXg6IDIwLFxuICogICB1bml0OiAncHgnLFxuICogICBicmVha3BvaW50czogWzMwMCwgNjAwXSxcbiAqIH0pXG4gKlxuICogLy8gdGhpcyByZXR1cm5zXG4gKlxuICoge1xuICogICBmb250U2l6ZTogJzE1cHgnLFxuICogICAnQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpJzoge1xuICogICAgIGZvbnRTaXplOiAnMTcuNXB4JyxcbiAqICAgfSxcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjYwMHB4KSc6IHtcbiAqICAgICBmb250U2l6ZTogJzIwcHgnLFxuICogICB9LFxuICogfVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY3NzUHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IHRvIGJlIG1hZGUgcmVzcG9uc2l2ZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5taW4gLSBUaGUgc21hbGxlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5tYXggLSBUaGUgbGFyZ2VzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy51bml0XSAtIFRoZSB1bml0IHRvIGJlIHVzZWQgZm9yIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7QXJyYXkubnVtYmVyfSBbcGFyYW1zLmJyZWFrcG9pbnRzXSAgLSBBbiBhcnJheSBvZiBicmVha3BvaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMuYWxpZ25TdGVwXSAtIFJvdW5kIHNjYWxlZCB2YWx1ZSB0byBmYWxsIHVuZGVyIHRoaXMgZ3JpZFxuICogQHJldHVybnMge09iamVjdH0gcmVzcG9uc2l2ZSBzdHlsZXMgZm9yIHtwYXJhbXMuY3NzUHJvcGVydHl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm9wZXJ0eShfcmVmMykge1xuICB2YXIgY3NzUHJvcGVydHkgPSBfcmVmMy5jc3NQcm9wZXJ0eSxcbiAgICAgIG1pbiA9IF9yZWYzLm1pbixcbiAgICAgIG1heCA9IF9yZWYzLm1heCxcbiAgICAgIF9yZWYzJHVuaXQgPSBfcmVmMy51bml0LFxuICAgICAgdW5pdCA9IF9yZWYzJHVuaXQgPT09IHZvaWQgMCA/ICdyZW0nIDogX3JlZjMkdW5pdCxcbiAgICAgIF9yZWYzJGJyZWFrcG9pbnRzID0gX3JlZjMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50cyA9IF9yZWYzJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyBbNjAwLCA5NjAsIDEyODBdIDogX3JlZjMkYnJlYWtwb2ludHMsXG4gICAgICBfcmVmMyR0cmFuc2Zvcm0gPSBfcmVmMy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmMyR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyR0cmFuc2Zvcm07XG5cbiAgdmFyIG91dHB1dCA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KG1pbikuY29uY2F0KHVuaXQpKTtcblxuICB2YXIgZmFjdG9yID0gKG1heCAtIG1pbikgLyBicmVha3BvaW50c1ticmVha3BvaW50cy5sZW5ndGggLSAxXTtcbiAgYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgIHZhciB2YWx1ZSA9IG1pbiArIGZhY3RvciAqIGJyZWFrcG9pbnQ7XG5cbiAgICBpZiAodHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb3V0cHV0W1wiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KGJyZWFrcG9pbnQsIFwicHgpXCIpXSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KE1hdGgucm91bmQodmFsdWUgKiAxMDAwMCkgLyAxMDAwMCkuY29uY2F0KHVuaXQpKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59IiwiaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4vY3JlYXRlVGhlbWUnO1xudmFyIGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VGhlbWU7IiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlVGhlbWUsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVUaGVtZSc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUgfSBmcm9tICcuL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVN0eWxlcyB9IGZyb20gJy4vY3JlYXRlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFrZVN0eWxlcyB9IGZyb20gJy4vbWFrZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICcuL3Jlc3BvbnNpdmVGb250U2l6ZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHlsZWQgfSBmcm9tICcuL3N0eWxlZCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGhlbWUgfSBmcm9tICcuL3VzZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFN0eWxlcyB9IGZyb20gJy4vd2l0aFN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vd2l0aFRoZW1lJztcbmV4cG9ydCB7IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLCBqc3NQcmVzZXQsIFNlcnZlclN0eWxlU2hlZXRzLCBTdHlsZXNQcm92aWRlciwgVGhlbWVQcm92aWRlciBhcyBNdWlUaGVtZVByb3ZpZGVyLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIGFzIG1ha2VTdHlsZXNXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbmZ1bmN0aW9uIG1ha2VTdHlsZXMoc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIG1ha2VTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXM7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGlzVW5pdGxlc3MsIGNvbnZlcnRMZW5ndGgsIHJlc3BvbnNpdmVQcm9wZXJ0eSwgYWxpZ25Qcm9wZXJ0eSwgZm9udEdyaWQgfSBmcm9tICcuL2Nzc1V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3BvbnNpdmVGb250U2l6ZXModGhlbWVJbnB1dCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfb3B0aW9ucyRicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50cyA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyBbJ3NtJywgJ21kJywgJ2xnJ10gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJGRpc2FibGVBbGlnbiA9IG9wdGlvbnMuZGlzYWJsZUFsaWduLFxuICAgICAgZGlzYWJsZUFsaWduID0gX29wdGlvbnMkZGlzYWJsZUFsaWduID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGRpc2FibGVBbGlnbixcbiAgICAgIF9vcHRpb25zJGZhY3RvciA9IG9wdGlvbnMuZmFjdG9yLFxuICAgICAgZmFjdG9yID0gX29wdGlvbnMkZmFjdG9yID09PSB2b2lkIDAgPyAyIDogX29wdGlvbnMkZmFjdG9yLFxuICAgICAgX29wdGlvbnMkdmFyaWFudHMgPSBvcHRpb25zLnZhcmlhbnRzLFxuICAgICAgdmFyaWFudHMgPSBfb3B0aW9ucyR2YXJpYW50cyA9PT0gdm9pZCAwID8gWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJywgJ2NhcHRpb24nLCAnYnV0dG9uJywgJ292ZXJsaW5lJ10gOiBfb3B0aW9ucyR2YXJpYW50cztcblxuICB2YXIgdGhlbWUgPSBfZXh0ZW5kcyh7fSwgdGhlbWVJbnB1dCk7XG5cbiAgdGhlbWUudHlwb2dyYXBoeSA9IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5KTtcbiAgdmFyIHR5cG9ncmFwaHkgPSB0aGVtZS50eXBvZ3JhcGh5OyAvLyBDb252ZXJ0IGJldHdlZW4gY3NzIGxlbmd0aHMgZS5nLiBlbS0+cHggb3IgcHgtPnJlbVxuICAvLyBTZXQgdGhlIGJhc2VGb250U2l6ZSBmb3IgeW91ciBwcm9qZWN0LiBEZWZhdWx0cyB0byAxNnB4IChhbHNvIHRoZSBicm93c2VyIGRlZmF1bHQpLlxuXG4gIHZhciBjb252ZXJ0ID0gY29udmVydExlbmd0aCh0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSk7XG4gIHZhciBicmVha3BvaW50VmFsdWVzID0gYnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1t4XTtcbiAgfSk7XG4gIHZhcmlhbnRzLmZvckVhY2goZnVuY3Rpb24gKHZhcmlhbnQpIHtcbiAgICB2YXIgc3R5bGUgPSB0eXBvZ3JhcGh5W3ZhcmlhbnRdO1xuICAgIHZhciByZW1Gb250U2l6ZSA9IHBhcnNlRmxvYXQoY29udmVydChzdHlsZS5mb250U2l6ZSwgJ3JlbScpKTtcblxuICAgIGlmIChyZW1Gb250U2l6ZSA8PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1heEZvbnRTaXplID0gcmVtRm9udFNpemU7XG4gICAgdmFyIG1pbkZvbnRTaXplID0gMSArIChtYXhGb250U2l6ZSAtIDEpIC8gZmFjdG9yO1xuICAgIHZhciBsaW5lSGVpZ2h0ID0gc3R5bGUubGluZUhlaWdodDtcblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSAmJiAhZGlzYWJsZUFsaWduKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVW5zdXBwb3J0ZWQgbm9uLXVuaXRsZXNzIGxpbmUgaGVpZ2h0IHdpdGggZ3JpZCBhbGlnbm1lbnQuXFxuVXNlIHVuaXRsZXNzIGxpbmUgaGVpZ2h0cyBpbnN0ZWFkLlwiIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg2KSk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpKSB7XG4gICAgICAvLyBtYWtlIGl0IHVuaXRsZXNzXG4gICAgICBsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChjb252ZXJ0KGxpbmVIZWlnaHQsICdyZW0nKSkgLyBwYXJzZUZsb2F0KHJlbUZvbnRTaXplKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGlmICghZGlzYWJsZUFsaWduKSB7XG4gICAgICB0cmFuc2Zvcm0gPSBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGFsaWduUHJvcGVydHkoe1xuICAgICAgICAgIHNpemU6IHZhbHVlLFxuICAgICAgICAgIGdyaWQ6IGZvbnRHcmlkKHtcbiAgICAgICAgICAgIHBpeGVsczogNCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQsXG4gICAgICAgICAgICBodG1sRm9udFNpemU6IHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHR5cG9ncmFwaHlbdmFyaWFudF0gPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gICAgICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAgICAgIG1pbjogbWluRm9udFNpemUsXG4gICAgICBtYXg6IG1heEZvbnRTaXplLFxuICAgICAgdW5pdDogJ3JlbScsXG4gICAgICBicmVha3BvaW50czogYnJlYWtwb2ludFZhbHVlcyxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHRoZW1lO1xufSIsInZhciBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG52YXIgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbnZhciBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRvdygpIHtcbiAgcmV0dXJuIFtcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDMgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbM10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDQgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDUgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDYgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDcgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbN10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzEwXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTFdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSwgXCIpXCIpXS5qb2luKCcsJyk7XG59IC8vIFZhbHVlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYmU4NzQ3Zjk0NTc0NjY5Y2I1ZTdhZGQxYTdjNTRmYTQxYTg5Y2VjNy9wYWNrYWdlcy9tZGMtZWxldmF0aW9uL192YXJpYWJsZXMuc2Nzc1xuXG5cbnZhciBzaGFkb3dzID0gWydub25lJywgY3JlYXRlU2hhZG93KDAsIDIsIDEsIC0xLCAwLCAxLCAxLCAwLCAwLCAxLCAzLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDEsIC0yLCAwLCAyLCAyLCAwLCAwLCAxLCA1LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDMsIC0yLCAwLCAzLCA0LCAwLCAwLCAxLCA4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMCksIGNyZWF0ZVNoYWRvdygwLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxKSwgY3JlYXRlU2hhZG93KDAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDIpLCBjcmVhdGVTaGFkb3coMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMiksIGNyZWF0ZVNoYWRvdygwLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgMyksIGNyZWF0ZVNoYWRvdygwLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgMyksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNCksIGNyZWF0ZVNoYWRvdygwLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1KSwgY3JlYXRlU2hhZG93KDAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNiksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDYpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOCksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4KV07XG5leHBvcnQgZGVmYXVsdCBzaGFkb3dzOyIsInZhciBzaGFwZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiA0XG59O1xuZXhwb3J0IGRlZmF1bHQgc2hhcGU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBzdHlsZWQgYXMgc3R5bGVkV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG52YXIgc3R5bGVkID0gZnVuY3Rpb24gc3R5bGVkKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50Q3JlYXRvciA9IHN0eWxlZFdpdGhvdXREZWZhdWx0KENvbXBvbmVudCk7XG4gIHJldHVybiBmdW5jdGlvbiAoc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Q3JlYXRvcihzdHlsZSwgX2V4dGVuZHMoe1xuICAgICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgICB9LCBvcHRpb25zKSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQ7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmdvb2dsZS5jb20vbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1uYXR1cmFsLWVhc2luZy1jdXJ2ZXNcbi8vIHRvIGxlYXJuIHRoZSBjb250ZXh0IGluIHdoaWNoIGVhY2ggZWFzaW5nIHNob3VsZCBiZSB1c2VkLlxuZXhwb3J0IHZhciBlYXNpbmcgPSB7XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uIGVhc2luZyBjdXJ2ZS5cbiAgZWFzZUluT3V0OiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgZW50ZXIgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5IGZyb20gb2ZmLXNjcmVlbiBhbmRcbiAgLy8gc2xvd2x5IGRlY2VsZXJhdGUgdG8gYSByZXN0aW5nIHBvaW50LlxuICBlYXNlT3V0OiAnY3ViaWMtYmV6aWVyKDAuMCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgbGVhdmUgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5LiBUaGV5IGRvIG5vdCBkZWNlbGVyYXRlIHdoZW4gb2ZmLXNjcmVlbi5cbiAgZWFzZUluOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSknLFxuICAvLyBUaGUgc2hhcnAgY3VydmUgaXMgdXNlZCBieSBvYmplY3RzIHRoYXQgbWF5IHJldHVybiB0byB0aGUgc2NyZWVuIGF0IGFueSB0aW1lLlxuICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSknXG59OyAvLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctY29tbW9uLWR1cmF0aW9uc1xuLy8gdG8gbGVhcm4gd2hlbiB1c2Ugd2hhdCB0aW1pbmdcblxuZXhwb3J0IHZhciBkdXJhdGlvbiA9IHtcbiAgc2hvcnRlc3Q6IDE1MCxcbiAgc2hvcnRlcjogMjAwLFxuICBzaG9ydDogMjUwLFxuICAvLyBtb3N0IGJhc2ljIHJlY29tbWVuZGVkIHRpbWluZ1xuICBzdGFuZGFyZDogMzAwLFxuICAvLyB0aGlzIGlzIHRvIGJlIHVzZWQgaW4gY29tcGxleCBhbmltYXRpb25zXG4gIGNvbXBsZXg6IDM3NSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgZW50ZXJpbmcgc2NyZWVuXG4gIGVudGVyaW5nU2NyZWVuOiAyMjUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGxlYXZpbmcgc2NyZWVuXG4gIGxlYXZpbmdTY3JlZW46IDE5NVxufTtcblxuZnVuY3Rpb24gZm9ybWF0TXMobWlsbGlzZWNvbmRzKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyksIFwibXNcIik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0ucHJvcFxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmR1cmF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0uZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZGVsYXlcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzaW5nOiBlYXNpbmcsXG4gIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2FsbCddO1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgIGR1cmF0aW9uT3B0aW9uID0gX29wdGlvbnMkZHVyYXRpb24gPT09IHZvaWQgMCA/IGR1cmF0aW9uLnN0YW5kYXJkIDogX29wdGlvbnMkZHVyYXRpb24sXG4gICAgICAgIF9vcHRpb25zJGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nLFxuICAgICAgICBlYXNpbmdPcHRpb24gPSBfb3B0aW9ucyRlYXNpbmcgPT09IHZvaWQgMCA/IGVhc2luZy5lYXNlSW5PdXQgOiBfb3B0aW9ucyRlYXNpbmcsXG4gICAgICAgIF9vcHRpb25zJGRlbGF5ID0gb3B0aW9ucy5kZWxheSxcbiAgICAgICAgZGVsYXkgPSBfb3B0aW9ucyRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJGRlbGF5LFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJkdXJhdGlvblwiLCBcImVhc2luZ1wiLCBcImRlbGF5XCJdKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICAgIH07XG5cbiAgICAgIHZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwcm9wcykgJiYgIUFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcInByb3BzXCIgbXVzdCBiZSBhIHN0cmluZyBvciBBcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkdXJhdGlvbk9wdGlvbikgJiYgIWlzU3RyaW5nKGR1cmF0aW9uT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFxcXCJkdXJhdGlvblxcXCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZyBidXQgZm91bmQgXCIuY29uY2F0KGR1cmF0aW9uT3B0aW9uLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU3RyaW5nKGVhc2luZ09wdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwiZWFzaW5nXCIgbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkZWxheSkgJiYgIWlzU3RyaW5nKGRlbGF5KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJkZWxheVwiIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVW5yZWNvZ25pemVkIGFyZ3VtZW50KHMpIFtcIi5jb25jYXQoT2JqZWN0LmtleXMob3RoZXIpLmpvaW4oJywnKSwgXCJdLlwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KHByb3BzKSA/IHByb3BzIDogW3Byb3BzXSkubWFwKGZ1bmN0aW9uIChhbmltYXRlZFByb3ApIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChhbmltYXRlZFByb3AsIFwiIFwiKS5jb25jYXQodHlwZW9mIGR1cmF0aW9uT3B0aW9uID09PSAnc3RyaW5nJyA/IGR1cmF0aW9uT3B0aW9uIDogZm9ybWF0TXMoZHVyYXRpb25PcHRpb24pLCBcIiBcIikuY29uY2F0KGVhc2luZ09wdGlvbiwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZGVsYXkgPT09ICdzdHJpbmcnID8gZGVsYXkgOiBmb3JtYXRNcyhkZWxheSkpO1xuICAgIH0pLmpvaW4oJywnKTtcbiAgfSxcbiAgZ2V0QXV0b0hlaWdodER1cmF0aW9uOiBmdW5jdGlvbiBnZXRBdXRvSGVpZ2h0RHVyYXRpb24oaGVpZ2h0KSB7XG4gICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBjb25zdGFudCA9IGhlaWdodCAvIDM2OyAvLyBodHRwczovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPSg0KyUyQisxNSsqKyh4KyUyRiszNispKyoqKzAuMjUrJTJCKyh4KyUyRiszNikrJTJGKzUpKyorMTBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKCg0ICsgMTUgKiBNYXRoLnBvdyhjb25zdGFudCwgMC4yNSkgKyBjb25zdGFudCAvIDUpICogMTApO1xuICB9XG59OyIsImltcG9ydCB7IHVzZVRoZW1lIGFzIHVzZVRoZW1lV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZVdpdGhvdXREZWZhdWx0KCkgfHwgZGVmYXVsdFRoZW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh0aGVtZSk7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIGFzIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZXMoc3R5bGVzT3JDcmVhdG9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB3aXRoU3R5bGVzV2l0aG91dERlZmF1bHQoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgfSwgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzOyIsImltcG9ydCB7IHdpdGhUaGVtZUNyZWF0b3IgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xudmFyIHdpdGhUaGVtZSA9IHdpdGhUaGVtZUNyZWF0b3Ioe1xuICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWU7IiwiLy8gV2UgbmVlZCB0byBjZW50cmFsaXplIHRoZSB6SW5kZXggZGVmaW5pdGlvbnMgYXMgdGhleSB3b3JrXG4vLyBsaWtlIGdsb2JhbCB2YWx1ZXMgaW4gdGhlIGJyb3dzZXIuXG52YXIgekluZGV4ID0ge1xuICBtb2JpbGVTdGVwcGVyOiAxMDAwLFxuICBzcGVlZERpYWw6IDEwNTAsXG4gIGFwcEJhcjogMTEwMCxcbiAgZHJhd2VyOiAxMjAwLFxuICBtb2RhbDogMTMwMCxcbiAgc25hY2tiYXI6IDE0MDAsXG4gIHRvb2x0aXA6IDE1MDBcbn07XG5leHBvcnQgZGVmYXVsdCB6SW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZGV1JywgJ2luZCcsICdhcmEnLCAncHJ0JywgJ3pobyddLFxuICBmYWxsYmFja0xuZzogJ2VuZycsXG4gIGluaXRJbW1lZGlhdGU6IGZhbHNlLFxuICBsb2NhbGVQYXRoOiAncHVibGljL2xvY2FsZXMnLFxuICByZWFjdDoge1xuICAgIHVzZVN1c3BlbnNlOiBmYWxzZSxcbiAgfSxcbiAgbG9jYWxlU3VicGF0aHM6IHtcbiAgICBhcmE6ICdhcicsXG4gICAgZGV1OiAnZGUnLFxuICAgIGVuZzogJ2VuJyxcbiAgICBpbmQ6ICdpZCcsXG4gICAgcHJ0OiAncHQnLFxuICAgIHpobzogJ3poJyxcbiAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooeyBDb21wb25lbnQgLCBjdHggIH0pIHtcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0geWllbGQgKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUHJvcHNcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBwYWdlUHJvcHMpKSk7XG4gICAgfVxufVxuQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7XG4gIFRoZW1lUHJvdmlkZXIsXG4gIGNyZWF0ZVRoZW1lLFxuICBTdHlsZXNQcm92aWRlcixcbiAganNzUHJlc2V0XG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdqc3MnO1xuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICduZXh0LXBhZ2UtdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHJ0bCBmcm9tICdqc3MtcnRsJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInO1xuaW1wb3J0IHsgaTE4biwgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQgYXBwVGhlbWUgZnJvbSAnLi4vdGhlbWUvYXBwVGhlbWUnO1xuLyogaW1wb3J0IGNzcyB2ZW5kb3JzICovXG5pbXBvcnQgJ34vdmVuZG9ycy9oYW1idXJnZXItbWVudS5jc3MnO1xuaW1wb3J0ICdyZWFjdC1pbWFnZS1saWdodGJveC9zdHlsZS5jc3MnO1xuaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLmNzcyc7XG5pbXBvcnQgJy4uL3ZlbmRvcnMvdG9wLWxvYWRpbmctYmFyLmNzcyc7XG5pbXBvcnQgJy4uL3ZlbmRvcnMvYW5pbWF0ZS1leHRlbmRzLmNzcyc7XG5pbXBvcnQgJy4uL3ZlbmRvcnMvcGFnZS10cmFuc2l0aW9uLmNzcyc7XG5pbXBvcnQgJy4uL3ZlbmRvcnMvc2xpY2svc2xpY2suY3NzJztcbmltcG9ydCAnLi4vdmVuZG9ycy9zbGljay9zbGljay10aGVtZS5jc3MnO1xuXG5sZXQgdGhlbWVUeXBlID0gJ2xpZ2h0JztcbmlmICh0eXBlb2YgU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB0aGVtZVR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbHV4aVRoZW1lJykgfHwgJ2xpZ2h0Jztcbn1cblxuZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoe1xuICAgIC4uLmFwcFRoZW1lKCdvY2VhbkJsdWUnLCB0aGVtZVR5cGUpLFxuICAgIGRpcmVjdGlvbjogaTE4bi5sYW5ndWFnZSA9PT0gJ2FyYScgPyAncnRsJyA6ICdsdHInXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IGxheW91dCBkaXJlY3Rpb25cbiAgICBkb2N1bWVudC5kaXIgPSBpMThuLmxhbmd1YWdlID09PSAnYXJhJyA/ICdydGwnIDogJ2x0cic7XG5cbiAgICAvLyBSZW1vdmUgcHJlbG9hZGVyXG4gICAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWxvYWRlcicpO1xuICAgIGlmIChwcmVsb2FkZXIgIT09IG51bGwgfHwgdW5kZWZpbmVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHJlbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGxvYWRpbmcgYmFyXG4gICAgc2V0TG9hZGluZygwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0TG9hZGluZygxMDApOyB9LCAyMDAwKTtcblxuICAgIC8vIFJlZnJlc2ggSlNTIGluIFNTUlxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRvZ2dsZURhcmtUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQYWxldHRlVHlwZSA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2x1eGlUaGVtZScsIHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpO1xuICAgIHNldFRoZW1lKHtcbiAgICAgIC4uLmFwcFRoZW1lKCdvY2VhbkJsdWUnLCBuZXdQYWxldHRlVHlwZSksXG4gICAgICBkaXJlY3Rpb246IHRoZW1lLmRpcmVjdGlvbixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVEaXJlY3Rpb24gPSBkaXIgPT4ge1xuICAgIGRvY3VtZW50LmRpciA9IGRpcjtcbiAgICBzZXRUaGVtZSh7XG4gICAgICAuLi50aGVtZSxcbiAgICAgIGRpcmVjdGlvbjogZGlyLFxuICAgICAgcGFsZXR0ZToge1xuICAgICAgICAuLi50aGVtZS5wYWxldHRlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbXVpVGhlbWUgPSBjcmVhdGVUaGVtZSh0aGVtZSk7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9ID0gcHJvcHM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgY29uc3QganNzID0gY3JlYXRlKHsgcGx1Z2luczogWy4uLmpzc1ByZXNldCgpLnBsdWdpbnMsIHJ0bCgpXSB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aCwgc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U3R5bGVzUHJvdmlkZXIganNzPXtqc3N9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17bXVpVGhlbWV9PlxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgIDxMb2FkaW5nQmFyXG4gICAgICAgICAgICBoZWlnaHQ9ezB9XG4gICAgICAgICAgICBjb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fVxuICAgICAgICAgICAgcHJvZ3Jlc3M9e2xvYWRpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtbG9hZGluZy1iYXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBpZD1cIm1haW4td3JhcFwiPlxuICAgICAgICAgICAgPFBhZ2VUcmFuc2l0aW9uIHRpbWVvdXQ9ezE1MDB9IGNsYXNzTmFtZXM9XCJwYWdlLWZhZGUtdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAgICAgICAgICBvblRvZ2dsZURhcms9e3RvZ2dsZURhcmtUaGVtZX1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZURpcj17dG9nZ2xlRGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgIGtleT17cm91dGVyLnJvdXRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYWdlVHJhbnNpdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9TdHlsZXNQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiAoeyAuLi5hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oTXlBcHApO1xuIiwiaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi9wYWxldHRlJztcbmNvbnN0IGFwcFRoZW1lID0gKGNvbG9yLCBtb2RlKSA9PiAoe1xuICBwYWxldHRlOiB7XG4gICAgdHlwZTogbW9kZSxcbiAgICBwcmltYXJ5OiBwYWxldHRlW2NvbG9yXS5wYWxldHRlLnByaW1hcnksXG4gICAgc2Vjb25kYXJ5OiBwYWxldHRlW2NvbG9yXS5wYWxldHRlLnNlY29uZGFyeSxcbiAgICBhY3Rpb246IHtcbiAgICAgIGhvdmVyOiBtb2RlID09PSAnZGFyaycgPyAncmdiYSgxMjgsMTI4LDEyOCwgMC45KScgOiAncmdiYSgxMjgsMTI4LDEyOCwgMC4wNSknLFxuICAgICAgaG92ZXJPcGFjaXR5OiAwLjA1XG4gICAgfVxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogW1xuICAgICAgJ1JvYm90bycsXG4gICAgICAnUm9ib3RvIENvbmRlbnNlZCcsXG4gICAgICAnc2Fucy1zZXJpZicsXG4gICAgXS5qb2luKCcsJyksXG4gIH0sXG4gIHNoYWRlOiB7XG4gICAgbGlnaHQ6ICcwIDEwcHggMTVweCAtNXB4IHJnYmEoNjIsIDU3LCAxMDcsIC4wNyknLFxuICB9LFxuICByb3VuZGVkOiB7XG4gICAgc21hbGw6ICc4cHgnLFxuICAgIG1lZGl1bTogJzEycHgnLFxuICAgIGJpZzogJzIwcHgnXG4gIH0sXG4gIHNoYWRvd3M6IG1vZGUgPT09ICdkYXJrJ1xuICAgID8gW1xuICAgICAgJ25vbmUnLFxuICAgICAgJzBweCAxcHggM3B4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMnB4IDFweCAtMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggMXB4IDVweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDNweCAxcHggLTJweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDFweCA4cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDNweCA0cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAzcHggM3B4IC0ycHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAycHggNHB4IC0xcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA1cHggOHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMXB4IDE0cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggM3B4IDVweCAtMXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggNHB4IDVweCAtMnB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDdweCAxMHB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggNXB4IDVweCAtM3B4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggNXB4IDZweCAtM3B4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggM3B4IDE2cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggNnB4IDZweCAtM3B4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDEwcHggMTRweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDRweCAxOHB4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDZweCA3cHggLTRweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxMXB4IDE1cHggMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCA3cHggOHB4IC00cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNXB4IDIycHggNHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggN3B4IDhweCAtNHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDEzcHggMTlweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDVweCAyNHB4IDRweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDdweCA5cHggLTRweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxNHB4IDIxcHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCA4cHggOXB4IC01cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNnB4IDI4cHggNXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggOHB4IDEwcHggLTVweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCA4cHggMTFweCAtNXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDE3cHggMjZweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDlweCAxMXB4IC01cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMThweCAyOHB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggN3B4IDM0cHggNnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggOXB4IDEycHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxOXB4IDI5cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA3cHggMzZweCA2cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMHB4IDEzcHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyMHB4IDMxcHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMHB4IDEzcHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyMXB4IDMzcHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA4cHggNDBweCA3cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMHB4IDE0cHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyMnB4IDM1cHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA4cHggNDJweCA3cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMXB4IDE0cHggLTdweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyM3B4IDM2cHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA5cHggNDRweCA4cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMXB4IDE1cHggLTdweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoODUwLDUwLDUwIDAuMTQpLDBweCA5cHggNDZweCA4cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgIF1cbiAgICA6IFtcbiAgICAgICdub25lJyxcbiAgICAgICcwcHggMXB4IDNweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDJweCAxcHggLTFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDFweCA1cHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAzcHggMXB4IC0ycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCAxcHggOHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggM3B4IDNweCAtMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMnB4IDRweCAtMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCAzcHggNXB4IC0xcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggNXB4IDhweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDFweCAxNHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDRweCA1cHggLTJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDJweCAxNnB4IDFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDVweCA1cHggLTNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDVweCA2cHggLTNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA5cHggMTJweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDNweCAxNnB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDZweCA2cHggLTNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxMHB4IDE0cHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA2cHggN3B4IC00cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNHB4IDIwcHggM3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggN3B4IDhweCAtNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDdweCA4cHggLTRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxM3B4IDE5cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA3cHggOXB4IC00cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNXB4IDI2cHggNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggOHB4IDlweCAtNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE1cHggMjJweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDZweCAyOHB4IDVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDhweCAxMHB4IC01cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggOHB4IDExcHggLTVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA2cHggMzJweCA1cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA5cHggMTFweCAtNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE4cHggMjhweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDdweCAzNHB4IDZweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDlweCAxMnB4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTlweCAyOXB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTBweCAxM3B4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOHB4IDM4cHggN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTBweCAxM3B4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjFweCAzM3B4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOHB4IDQwcHggN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTBweCAxNHB4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjJweCAzNXB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTFweCAxNHB4IC03cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOXB4IDQ0cHggOHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTFweCAxNXB4IC03cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjRweCAzOHB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICBdLFxuICBvdmVycmlkZXM6IHtcbiAgICBNdWlQYXBlcjoge1xuICAgICAgcm91bmRlZDoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDEyXG4gICAgICB9LFxuICAgICAgZWxldmF0aW9uMToge1xuICAgICAgICBib3hTaGFkb3c6IG1vZGUgPT09ICdkYXJrJyA/ICcwcHggMXB4IDNweCAwcHggcmdiYSg2NCwgNjQsIDY0LCAxKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoNDIsIDQyLCA0MiwgMSksIDBweCAycHggMXB4IC0xcHggcmdiYSgyMCwgMjAsIDIwLCAxKScgOiAnMCAxLjVweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJ1xuICAgICAgfSxcbiAgICAgIGVsZXZhdGlvbjQ6IHtcbiAgICAgICAgYm94U2hhZG93OiBtb2RlID09PSAnZGFyaycgPyAnMHB4IDJweCA0cHggLTFweCByZ2JhKDY0LCA2NCwgNjQsIDAuNDYpLCAwcHggNHB4IDVweCAwcHggcmdiYSg0MiwgNDIsIDQyLCAwLjMyKSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDIwLCAyMCwgMjAsIDAuMTIpJyA6ICcwIDEuNXB4IDEycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiknXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIGNvbnRhaW5lZFNlY29uZGFyeToge1xuICAgICAgICBjb2xvcjogJyNGRkZGRkYnXG4gICAgICB9LFxuICAgICAgcm9vdDoge1xuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIGJveFNoYWRvdzogJzAgMS41cHggMTJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICB9LFxuICAgICAgc2l6ZVNtYWxsOiB7XG4gICAgICAgIHBhZGRpbmc6ICc3cHggMTJweCdcbiAgICAgIH0sXG4gICAgICBvdXRsaW5lZFByaW1hcnk6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IG1vZGUgPT09ICdkYXJrJyA/IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICBjb2xvcjogbW9kZSA9PT0gJ2RhcmsnID8gcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgICB9LFxuICAgICAgb3V0bGluZWRTZWNvbmRhcnk6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IG1vZGUgPT09ICdkYXJrJyA/IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0IDogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICAgY29sb3I6IG1vZGUgPT09ICdkYXJrJyA/IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0IDogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUZvcm1MYWJlbDoge1xuICAgICAgcm9vdDoge1xuICAgICAgICAnJiRmb2N1c2VkJzoge1xuICAgICAgICAgIGNvbG9yOiBwYWxldHRlW2NvbG9yXS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgTXVpSW5wdXQ6IHtcbiAgICAgIHVuZGVybGluZToge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aVR5cG9ncmFwaHk6IHtcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBmb250V2VpZ2h0OiA2MDBcbiAgICAgIH1cbiAgICB9LFxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwVGhlbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgb2NlYW5CbHVlOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNCQkRFRkInLFxuICAgICAgICBtYWluOiAnIzIxOTZGMycsXG4gICAgICAgIGRhcms6ICcjMEQ0N0ExJ1xuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNCMkVCRjInLFxuICAgICAgICBtYWluOiAnIzAwQkNENCcsXG4gICAgICAgIGRhcms6ICcjMDA2MDY0J1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ3JlZW5MZWFmOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNDOEU2QzknLFxuICAgICAgICBtYWluOiAnIzRDQUY1MCcsXG4gICAgICAgIGRhcms6ICcjMUI1RTIwJ1xuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNDRkQ4REMnLFxuICAgICAgICBtYWluOiAnIzYwN0Q4QicsXG4gICAgICAgIGRhcms6ICcjMzc0NzRGJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW9uZXk6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0M4RTZDOScsXG4gICAgICAgIG1haW46ICcjNENBRjUwJyxcbiAgICAgICAgZGFyazogJyMyRTdEMzInXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZGRUNCMycsXG4gICAgICAgIG1haW46ICcjRkZBMDAwJyxcbiAgICAgICAgZGFyazogJyNGRjZGMDAnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBncmF5c2NhbGU6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0NGRDhEQycsXG4gICAgICAgIG1haW46ICcjNTQ2RTdBJyxcbiAgICAgICAgZGFyazogJyMyNjMyMzgnXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0Q3Q0NDOCcsXG4gICAgICAgIG1haW46ICcjNkQ0QzQxJyxcbiAgICAgICAgZGFyazogJyMzRTI3MjMnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjbG91ZDoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQjNFNUZDJyxcbiAgICAgICAgbWFpbjogJyMwM0E5RjQnLFxuICAgICAgICBkYXJrOiAnIzAxNTc5QidcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRkZFMEIyJyxcbiAgICAgICAgbWFpbjogJyNGRjk4MDAnLFxuICAgICAgICBkYXJrOiAnI0U2NTEwMCdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGpva2VyOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNEMUM0RTknLFxuICAgICAgICBtYWluOiAnIzY3M0FCNycsXG4gICAgICAgIGRhcms6ICcjMzExQjkyJ1xuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNCMkVCRjInLFxuICAgICAgICBtYWluOiAnIzAwQkNENCcsXG4gICAgICAgIGRhcms6ICcjMDA2MDY0J1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdmlvbGV0OiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNGOEJCRDAnLFxuICAgICAgICBtYWluOiAnI0VDNDA3QScsXG4gICAgICAgIGRhcms6ICcjODgwRTRGJ1xuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNEMUM0RTknLFxuICAgICAgICBtYWluOiAnIzY3M0FCNycsXG4gICAgICAgIGRhcms6ICcjMzExQjkyJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdmlvbGV0YToge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRTFCRUU3JyxcbiAgICAgICAgbWFpbjogJyM5QzI3QjAnLFxuICAgICAgICBkYXJrOiAnIzZBMUI5QSdcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRENFREM4JyxcbiAgICAgICAgbWFpbjogJyM4QkMzNEEnLFxuICAgICAgICBkYXJrOiAnIzU1OEIyRidcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJvc2VHb2xkOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNGQ0U0RUMnLFxuICAgICAgICBtYWluOiAnI0VDNDA3QScsXG4gICAgICAgIGRhcms6ICcjRDgxQjYwJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZGRjhFMScsXG4gICAgICAgIG1haW46ICcjRkZBMDAwJyxcbiAgICAgICAgZGFyazogJyNGRjZGMDAnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZGVlcEJsdWU6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0U4RUFGNicsXG4gICAgICAgIG1haW46ICcjM0Y1MUI1JyxcbiAgICAgICAgZGFyazogJyMyODM1OTMnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRTFGNUZFJyxcbiAgICAgICAgbWFpbjogJyMwM0E5RjQnLFxuICAgICAgICBkYXJrOiAnIzAyNzdCRCcsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB1YnVudHU6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZGRjNFMCcsXG4gICAgICAgIG1haW46ICcjRUY2QzAwJyxcbiAgICAgICAgZGFyazogJyNFNjUxMDAnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRjNFNUY1JyxcbiAgICAgICAgbWFpbjogJyM5QzI3QjAnLFxuICAgICAgICBkYXJrOiAnIzdCMUZBMicsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBnZWVuTmF0dXJlOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNFMEY3RkEnLFxuICAgICAgICBtYWluOiAnIzAwOTY4OCcsXG4gICAgICAgIGRhcms6ICcjMDA2OTVDJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0YxRjhFOScsXG4gICAgICAgIG1haW46ICcjNjg5RjM4JyxcbiAgICAgICAgZGFyazogJyMzMzY5MUUnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdmFtcGlyZToge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRkZFQkVFJyxcbiAgICAgICAgbWFpbjogJyNmNDQzMzYnLFxuICAgICAgICBkYXJrOiAnI0U1MzkzNScsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNFQ0VGRjEnLFxuICAgICAgICBtYWluOiAnIzYwN0Q4QicsXG4gICAgICAgIGRhcms6ICcjNDU1QTY0JyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIG1pbnQ6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI2JiZGVmYicsXG4gICAgICAgIG1haW46ICcjMjE5NmYzJyxcbiAgICAgICAgZGFyazogJyMwZDQ3YTEnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjYjNlNWZjJyxcbiAgICAgICAgbWFpbjogJyMwM2E5ZjQnLFxuICAgICAgICBkYXJrOiAnIzAxNTc5YicsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBvY2VhblNreToge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRTNGMkZEJyxcbiAgICAgICAgbWFpbjogJyMyMTk2RjMnLFxuICAgICAgICBkYXJrOiAnIzE1NjVDMCcsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNFMEYyRjEnLFxuICAgICAgICBtYWluOiAnIzAwQkZBNScsXG4gICAgICAgIGRhcms6ICcjMDA3OTZCJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGdvbGQ6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZGRjlDNCcsXG4gICAgICAgIG1haW46ICcjRkY5MTAwJyxcbiAgICAgICAgZGFyazogJyNGRjZEMDAnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRUZFQkU5JyxcbiAgICAgICAgbWFpbjogJyM4RDZFNjMnLFxuICAgICAgICBkYXJrOiAnIzRFMzQyRScsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBib3Rhbmk6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0RDRURDOCcsXG4gICAgICAgIG1haW46ICcjNjg5RjM4JyxcbiAgICAgICAgZGFyazogJyMzMzY5MUUnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRkNFNEVDJyxcbiAgICAgICAgbWFpbjogJyNGMDYyOTInLFxuICAgICAgICBkYXJrOiAnI0FEMTQ1NycsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBsaXR0bGVRdWVlbjoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRTBGN0ZBJyxcbiAgICAgICAgbWFpbjogJyMwMEJDRDQnLFxuICAgICAgICBkYXJrOiAnIzAwNjA2NCcsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNGQ0U0RUMnLFxuICAgICAgICBtYWluOiAnI0YwNjI5MicsXG4gICAgICAgIGRhcms6ICcjQUQxNDU3JyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHB1cnBsZToge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjZjNlNWY1JyxcbiAgICAgICAgbWFpbjogJyM5YzI3YjAnLFxuICAgICAgICBkYXJrOiAnIzZhMWI5YScsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNlYTgwZmMnLFxuICAgICAgICBtYWluOiAnI2FhMDBmZicsXG4gICAgICAgIGRhcms6ICcjNGExNDhjJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJsYWNrOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyM5ZTllOWUnLFxuICAgICAgICBtYWluOiAnIzIxMjEyMScsXG4gICAgICAgIGRhcms6ICcjMDAwJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0UwRTBFMCcsXG4gICAgICAgIG1haW46ICcjNzU3NTc1JyxcbiAgICAgICAgZGFyazogJyM0MjQyNDInLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYnJvd246IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI2Q3Y2NjOCcsXG4gICAgICAgIG1haW46ICcjNzk1NTQ4JyxcbiAgICAgICAgZGFyazogJyM0ZTM0MmUnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjY2NiMGIwJyxcbiAgICAgICAgbWFpbjogJyM3OTQ4NDgnLFxuICAgICAgICBkYXJrOiAnIzNlMjcyMycsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59O1xuIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS91dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzLXJ0bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1wYWdlLXRyYW5zaXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59Il0sIm5hbWVzIjpbIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJmYWxsYmFja0xuZyIsImluaXRJbW1lZGlhdGUiLCJsb2NhbGVQYXRoIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsImxvY2FsZVN1YnBhdGhzIiwiYXJhIiwiZGV1IiwiZW5nIiwiaW5kIiwicHJ0IiwiemhvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIkFwcCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvcFR5cGVzIiwiSGVhZCIsIlRoZW1lUHJvdmlkZXIiLCJjcmVhdGVUaGVtZSIsIlN0eWxlc1Byb3ZpZGVyIiwianNzUHJlc2V0IiwiY3JlYXRlIiwiUGFnZVRyYW5zaXRpb24iLCJydGwiLCJDc3NCYXNlbGluZSIsIkxvYWRpbmdCYXIiLCJpMThuIiwiYXBwV2l0aFRyYW5zbGF0aW9uIiwiYXBwVGhlbWUiLCJ0aGVtZVR5cGUiLCJTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIk15QXBwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0aGVtZSIsInNldFRoZW1lIiwiZGlyZWN0aW9uIiwibGFuZ3VhZ2UiLCJkb2N1bWVudCIsImRpciIsInByZWxvYWRlciIsImdldEVsZW1lbnRCeUlkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImpzc1N0eWxlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ0b2dnbGVEYXJrVGhlbWUiLCJuZXdQYWxldHRlVHlwZSIsInBhbGV0dGUiLCJ0eXBlIiwic2V0SXRlbSIsInRvZ2dsZURpcmVjdGlvbiIsIm11aVRoZW1lIiwicm91dGVyIiwianNzIiwicGx1Z2lucyIsInByaW1hcnkiLCJsaWdodCIsInJvdXRlIiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYXBwQ29udGV4dCIsImNvbG9yIiwibW9kZSIsInNlY29uZGFyeSIsImFjdGlvbiIsImhvdmVyIiwiaG92ZXJPcGFjaXR5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwic2hhZGUiLCJyb3VuZGVkIiwic21hbGwiLCJtZWRpdW0iLCJiaWciLCJzaGFkb3dzIiwib3ZlcnJpZGVzIiwiTXVpUGFwZXIiLCJib3JkZXJSYWRpdXMiLCJlbGV2YXRpb24xIiwiYm94U2hhZG93IiwiZWxldmF0aW9uNCIsIk11aUJ1dHRvbiIsImNvbnRhaW5lZFNlY29uZGFyeSIsInJvb3QiLCJmb250V2VpZ2h0Iiwic2l6ZVNtYWxsIiwicGFkZGluZyIsIm91dGxpbmVkUHJpbWFyeSIsImJvcmRlckNvbG9yIiwibWFpbiIsImRhcmsiLCJvdXRsaW5lZFNlY29uZGFyeSIsIk11aUZvcm1MYWJlbCIsIk11aUlucHV0IiwidW5kZXJsaW5lIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJNdWlUeXBvZ3JhcGh5IiwiYnV0dG9uIiwib2NlYW5CbHVlIiwiZ3JlZW5MZWFmIiwibW9uZXkiLCJncmF5c2NhbGUiLCJjbG91ZCIsImpva2VyIiwidmlvbGV0IiwidmlvbGV0YSIsInJvc2VHb2xkIiwiY29udHJhc3RUZXh0IiwiZGVlcEJsdWUiLCJ1YnVudHUiLCJnZWVuTmF0dXJlIiwidmFtcGlyZSIsIm1pbnQiLCJvY2VhblNreSIsImdvbGQiLCJib3RhbmkiLCJsaXR0bGVRdWVlbiIsInB1cnBsZSIsImJsYWNrIiwiYnJvd24iXSwic291cmNlUm9vdCI6IiJ9