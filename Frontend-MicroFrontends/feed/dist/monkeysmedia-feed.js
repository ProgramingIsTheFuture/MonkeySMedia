System.register(["react","react-dom"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _taggedTemplateLiteral)
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@styled-icons/heroicons-outline/Trash/Trash.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@styled-icons/heroicons-outline/Trash/Trash.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trash": () => (/* binding */ Trash),
/* harmony export */   "TrashDimensions": () => (/* binding */ TrashDimensions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/styled-icon */ "./node_modules/@styled-icons/styled-icon/index.esm.js");



var Trash = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke": "currentColor"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_2__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m19 7-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16"
  }));
});
Trash.displayName = 'Trash';
var TrashDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ "./node_modules/@styled-icons/styled-icon/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@styled-icons/styled-icon/index.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledIconBase": () => (/* binding */ StyledIconBase)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function isValidProp(key) {
  return (0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_4__.default)(key);
}

function filterSVGProps(props) {
  return Object.keys(props).reduce(function (p, k) {
    if (isValidProp(k)) {
      // hack to satisfy TypeScript complexity
      ;
      p[k] = props[k];
    }

    return p;
  }, {});
}

var StyledIconBaseBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
  var children = props.children,
      iconAttrs = props.iconAttrs,
      iconVerticalAlign = props.iconVerticalAlign,
      iconViewBox = props.iconViewBox,
      size = props.size,
      title = props.title,
      otherProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["children", "iconAttrs", "iconVerticalAlign", "iconViewBox", "size", "title"]);

  var iconProps = _objectSpread({
    viewBox: iconViewBox,
    height: props.height !== undefined ? props.height : size,
    width: props.width !== undefined ? props.width : size,
    'aria-hidden': title == null ? 'true' : undefined,
    focusable: 'false',
    role: title != null ? 'img' : undefined
  }, iconAttrs);

  var svgProps = filterSVGProps(otherProps);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, iconProps, svgProps, {
    ref: ref
  }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("title", {
    key: "icon-title"
  }, title), children);
});
var StyledIconBase = /*#__PURE__*/(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(StyledIconBaseBase).withConfig({
  displayName: "StyledIconBase",
  componentId: "ea9ulj-0"
})(["display:inline-block;vertical-align:", ";overflow:hidden;"], function (props) {
  return props.iconVerticalAlign;
});

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feed */ "./src/Feed/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/styles.ts");




var App = function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_Feed__WEBPACK_IMPORTED_MODULE_1__.default, {
    usernameProfile: props.username ? props.username : null
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/DeleteBTN/index.tsx":
/*!*********************************!*\
  !*** ./src/DeleteBTN/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _DeleteModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DeleteModal */ "./src/DeleteModal/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/DeleteBTN/styles.ts");





var DeleteBTN = function DeleteBTN(_ref) {
  var postID = _ref.postID;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      isDelete = _useState4[0],
      setIsDelete = _useState4[1];

  window.addEventListener("@monkeysmedia/Posts/delete/".concat(postID), function (e) {
    if (e.detail.id === postID) setIsDelete(true);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (isDelete) {
      System["import"]("@monkeysmedia/util-module").then(function (util) {
        return util.apiPost("api/posts/delete-post/", {
          id: postID
        });
      })["catch"](function () {});
      setIsDelete(false);
    }
  }, [isDelete, setIsDelete, postID]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!modal) {
      document.querySelector("body").style.overflow = "initial";
    }
  }, [modal]);

  var handleDeletePost = function handleDeletePost() {
    // Deleting posts API
    setModal(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.BTN, {
    onClick: handleDeletePost
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_DeleteModal__WEBPACK_IMPORTED_MODULE_2__.default, {
    visible: modal,
    setVisible: setModal,
    id: postID
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.memo(DeleteBTN));

/***/ }),

/***/ "./src/DeleteBTN/styles.ts":
/*!*********************************!*\
  !*** ./src/DeleteBTN/styles.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "BTN": () => (/* binding */ BTN)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_icons_heroicons_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-icons/heroicons-outline */ "./node_modules/@styled-icons/heroicons-outline/Trash/Trash.esm.js");


var _templateObject, _templateObject2;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""])));
var BTN = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(styled_icons_heroicons_outline__WEBPACK_IMPORTED_MODULE_2__.Trash)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  width: 25px;\n  height: 25px;\n\n  cursor: pointer;\n\n  :hover {\n    color: var(--red);\n  }\n"])));

/***/ }),

/***/ "./src/DeleteModal/index.tsx":
/*!***********************************!*\
  !*** ./src/DeleteModal/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/DeleteModal/styles.ts");




var DeleteModal = function DeleteModal(_ref) {
  var visible = _ref.visible,
      id = _ref.id,
      setVisible = _ref.setVisible;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    x: 0,
    y: 0
  }),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      positions = _useState2[0],
      setPositions = _useState2[1];

  var handleDelete = function handleDelete() {
    window.dispatchEvent(new CustomEvent("@monkeysmedia/Posts/delete/".concat(id), {
      detail: {
        id: id
      }
    }));
    setVisible(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (visible) {
      setPositions({
        x: window.scrollX,
        y: window.scrollY
      });
      document.querySelector("body").style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
  }, [visible, setPositions]);

  if (!visible) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(react__WEBPACK_IMPORTED_MODULE_1__.default.Fragment, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Items, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("p", null, "Confirma para apagar a tua publica\xE7\xE3o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.BTNGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("button", {
    onClick: handleDelete
  }, "Confirmar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("button", {
    onClick: function onClick() {
      setVisible(false);
      window.scrollTo(positions.x, positions.y);
    }
  }, "Cancelar")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteModal);

/***/ }),

/***/ "./src/DeleteModal/styles.ts":
/*!***********************************!*\
  !*** ./src/DeleteModal/styles.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper),
/* harmony export */   "Items": () => (/* binding */ Items),
/* harmony export */   "BTNGroup": () => (/* binding */ BTNGroup)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.section(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  position: absolute;\n\n  top: 0;\n  left: 0;\n\n  z-index: 999999;\n  background-color: rgba(0, 0, 0, 0.75);\n\n  width: 100%;\n  height: 100%;\n"])));
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  height: 100%;\n  width: 100%;\n\n  margin: 0 !important;\n  cursor: default !important;\n\n  background-color: inherit;\n  display: flex !important;\n\n  justify-content: center;\n  align-items: center;\n"])));
var Items = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  background-color: white;\n  width: 50%;\n  height: 25%;\n\n  display: flex !important;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n\n  cursor: default !important;\n"])));
var BTNGroup = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  button {\n    margin: 2.5px;\n    cursor: pointer;\n\n    background-color: var(--card);\n    border: 1px solid var(--primary);\n    color: var(--white);\n    cursor: pointer;\n    padding: 5px 10px;\n\n    :first-child {\n    }\n\n    :last-child {\n    }\n  }\n"])));

/***/ }),

/***/ "./src/Feed/index.tsx":
/*!****************************!*\
  !*** ./src/Feed/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/Feed/styles.ts");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "./src/Loader/index.tsx");
/* harmony import */ var _PostContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostContainer */ "./src/PostContainer/index.tsx");







var pageSize = 15;

var Feed = function Feed(_ref) {
  var _data$, _data;

  var usernameProfile = _ref.usernameProfile;
  var next;

  var _useSWRInfinite = (0,swr__WEBPACK_IMPORTED_MODULE_3__.useSWRInfinite)(function (index) {
    return !usernameProfile ? "api/posts/list-posts/?page=".concat(index + 1) : "api/posts/get-user-posts/?page=".concat(index + 1);
  }, function (url) {
    return System["import"]("@monkeysmedia/util-module").then(function (util) {
      return !usernameProfile ? util.apiGet(url) : util.apiPost(url, {
        username: usernameProfile
      });
    }).then(function (resp) {
      next = resp.data.next;
      return resp.data.results;
    });
  }),
      data = _useSWRInfinite.data,
      error = _useSWRInfinite.error,
      mutate = _useSWRInfinite.mutate,
      size = _useSWRInfinite.size,
      setSize = _useSWRInfinite.setSize;

  var observer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var LastPostElement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (node) {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && next) {
        setSize(size + 1);
        return;
      }
    });
    if (node) observer.current.observe(node);
  }, [next, size, setSize]);
  var isLoadingInitialData = !data && !error;
  var isLoadingMore = isLoadingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
  var posts = react__WEBPACK_IMPORTED_MODULE_2__.default.useMemo(function () {
    var _ref2;

    return data ? (_ref2 = []).concat.apply(_ref2, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(data)) : [];
  }, [data]);
  var isEmpty = (data === null || data === void 0 ? void 0 : (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.length) === 0;
  var isReachingEnd = isEmpty || data && ((_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.length) < pageSize || !next;
  window.addEventListener("@monkeysmedia/Posts/create", /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!data) {
              _context.next = 9;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return mutate();

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.error("Error creating new post or receiving the new one");

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  })));

  if (posts) {
    for (var i = 0; i < posts.length; i++) {
      window.addEventListener("@monkeysmedia/Posts/delete/".concat(posts[i].id), /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!data) {
                  _context2.next = 9;
                  break;
                }

                _context2.prev = 1;
                _context2.next = 4;
                return mutate();

              case 4:
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                console.error("Error creating new post or receiving the new one");

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 6]]);
      })));
    }
  }

  if (isLoadingInitialData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(_Loader__WEBPACK_IMPORTED_MODULE_5__.default, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.default.createElement("div", {
    className: "posts"
  }, isEmpty ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.default.createElement("p", null, "Experimenta seguir os teus amigos para veres as publica\xE7\xF5es deles!") : null, posts.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(react__WEBPACK_IMPORTED_MODULE_2__.default.Fragment, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(_PostContainer__WEBPACK_IMPORTED_MODULE_6__.default, {
      item: item,
      index: index,
      postsLen: posts.length,
      LastPostElement: LastPostElement
    }));
  }), isLoadingMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(_Loader__WEBPACK_IMPORTED_MODULE_5__.default, null) : null, isReachingEnd && !isEmpty && !isLoadingMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.default.createElement("p", {
    style: {
      textAlign: "center"
    }
  }, "Atualize a pagina para aparecerem os posts mais atualizados") : null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.default.memo(Feed));

/***/ }),

/***/ "./src/Feed/styles.ts":
/*!****************************!*\
  !*** ./src/Feed/styles.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n\n  align-items: center;\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  .post-enter {\n    opacity: 0;\n  }\n  .post-enter-active {\n    opacity: 1;\n    transition: opacity 500ms ease-in;\n  }\n  .post-exit {\n    opacity: 1;\n  }\n  .post-exit-active {\n    opacity: 0;\n    transition: opacity 500ms ease-in;\n  }\n"])));

/***/ }),

/***/ "./src/Likes/index.tsx":
/*!*****************************!*\
  !*** ./src/Likes/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/Likes/styles.ts");





var Likes = function Likes(_ref) {
  var likes = _ref.likes,
      id = _ref.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(likes),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      like = _useState2[0],
      setLikes = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      liked = _useState4[0],
      setLiked = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      styleLike = _useState6[0],
      setStyleLike = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    System["import"]("@monkeysmedia/util-module").then(function (util) {
      return util.apiPost("api/posts/check-like-post/", {
        id: id
      });
    }).then(function (resp) {
      var respon = resp.data;

      if (respon[0] === "false") {
        setLiked(false);
      } else if (respon[0] === "true") {
        setLiked(true);
      }
    })["catch"]();
  }, [setLiked, id]);

  var handleClick = function handleClick() {
    // like and unlike request
    System["import"]("@monkeysmedia/util-module").then(function (util) {
      return util.apiPost("api/posts/like-unlike-posts/", {
        id: id
      });
    }).then(function (resp) {
      if (resp.data.like === "Removed") {
        setLikes(like - 1);
        setLiked(false);
      } else if (resp.data.like === "Added") {
        setLikes(like + 1);
        setLiked(true);
      }
    })["catch"]();
  };

  var onTap = function onTap(e, info) {
    if (liked) {
      setStyleLike({
        transition: "1s",
        color: "var(--primary)"
      });
    } else {
      setStyleLike({
        transition: "1s",
        color: "var(--shadow)"
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {
    onClick: handleClick,
    liked: liked
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    onTap: onTap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("svg", {
    height: "30px",
    viewBox: "0 -91 512.00073 512",
    width: "30px",
    style: styleLike
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("path", {
    d: "m503.65625 165.609375c-5.300781-4.972656-12.503906-7.558594-19.75-7.09375-3.660156.234375-7.65625.488281-11.847656.75-5.082032.320313-10.085938 1.058594-15 2.160156 25-29.414062 43.125-64.59375 54.023437-104.996093 1.242188-4.605469 1.222657-9.515626-.050781-14.199219-1.941406-7.121094-6.75-13.125-13.199219-16.472657-6.371093-3.308593-13.59375-3.785156-20.332031-1.347656-3.359375 1.214844-7.023438 2.539063-10.871094 3.925782-11.332031 4.085937-21.664062 10.296874-30.710937 18.460937-50.679688 45.753906-103.847657 76.902344-158.015625 92.578125-51.476563 14.898438-98.796875 8.5625-140.644532-18.828125-30.835937-20.1875-53.132812-48.464844-67.234374-70.632813-2.425782-3.8125-4.515626-7.84375-6.039063-12.09375-1.539063-4.292968-3.78125-8.296874-6.648437-11.785156l-16.703126-20.347656c-2.78125-3.386719-6.882812-5.453125-11.261718-5.6679688-4.378906-.2187502-8.664063 1.4374998-11.761719 4.5390628l-13.042969 13.039062c-5.320312 5.324219-6.082031 13.65625-1.808594 19.820313 7.878907 11.367187 33.121094 50.539062 27.171876 77.316406-4.335938 19.515625-4.015626 42.949219.902343 65.980469 5.824219 27.289062 17.933594 52.972656 35.019531 74.269531 18.410157 22.949219 42.453126 40.992187 71.460938 53.621094 33.050781 14.390625 72.566406 21.6875 117.449219 21.6875 115.214843 0 200.480469-44.28125 253.414062-131.621094 2.5-4.121094 3.820313-8.890625 3.820313-13.792969 0-7.273437-3.039063-14.296875-8.339844-19.269531zm-21.054688-127.09375c2.753907-.996094 5.710938-.796875 8.320313.554687 2.78125 1.445313 4.78125 3.964844 5.636719 7.101563.566406 2.085937.582031 4.34375.039062 6.351563-.527344 1.964843-1.082031 3.910156-1.648437 5.847656l-16.992188-18.175782c1.597657-.578124 3.15625-1.140624 4.644531-1.679687zm-353.5625 94.582031c45.671876 29.894532 97.160157 36.855469 153.035157 20.6875 56.367187-16.3125 111.511719-48.5625 163.894531-95.851562 5.210938-4.703125 10.9375-8.613282 17.078125-11.722656l12.023437 12.863281c-2.640624 5.734375-5.472656 11.367187-8.472656 16.78125-1.972656 3.554687-.921875 8.175781 2.558594 10.277343 1.21875.734376 2.554688 1.082032 3.871094 1.082032 2.636718 0 5.191406-1.394532 6.5625-3.859375 2.257812-4.066407 4.421875-8.25 6.496094-12.5l3.574218 3.824219c-14.214844 39.636718-36.484375 73.191406-66.390625 99.972656-30.839843 13.738281-61.292969 23.875-91.144531 30.355468 55.585938-20.90625 99.253906-52.597656 130.050781-94.492187 2.253907-3.0625 2.011719-7.421875-.753906-10.03125-3.347656-3.160156-8.582031-2.597656-11.21875.996094-33.988281 46.3125-84.917969 79.546875-151.375 98.78125-22.40625 6.480469-43.988281 10.457031-64.222656 11.832031-2.441407.167969-4.894531.101562-7.320313-.207031-49.222656-6.238281-89.183594-29.765625-119.03125-70.183594-13.421875-18.175781-22.925781-37.335937-29.574218-54.257813 13.296874 16.019532 29.992187 32.316407 50.359374 45.652344zm-101.144531-83.558594c-4.902343-8.886718-9.726562-16.21875-12.808593-20.667968-.144532-.207032-.109376-.46875.085937-.667969l13.042969-13.039063c.042968-.042968.164062-.164062.386718-.164062h.035157c.246093.015625.363281.15625.402343.203125l16.207032 19.746094zm352.046875 242.804688c-36.082031 15.226562-78.199218 22.949219-125.179687 22.949219-42.808594 0-80.308594-6.875-111.457031-20.4375-26.757813-11.652344-48.878907-28.222657-65.75-49.253907-17.40625-21.699218-27.679688-46.46875-32.4375-69.988281 8.496093 19.976563 20.5 38.382813 35.472656 53.886719 18.933594 19.609375 42.566406 34.9375 70.25 45.5625 31.074218 11.925781 67.484375 17.972656 108.222656 17.972656 74.550781 0 137.167969-18.84375 186.109375-56.011718 3.300781-2.503907 3.945313-7.207032 1.441406-10.507813-2.507812-3.296875-7.210937-3.941406-10.511719-1.4375-46.273437 35.140625-105.839843 52.957031-177.039062 52.957031-73.496094 0-129.910156-19.835937-167.679688-58.953125-27.722656-28.710937-44.359374-68.292969-45.730468-108.707031.902344-12.648438-2.285156-27.472656-9.535156-44.207031-.417969-.964844-.84375-1.921875-1.277344-2.867188l16.640625-13.996093c4.132812 19.300781 15.941406 62.359374 44.703125 101.308593 17.113281 23.171875 37.703125 41.488281 61.207031 54.445313 28.320313 15.613281 61.082031 23.527344 97.371094 23.527344 60.289062 0 123.675781-15.675782 188.402343-46.589844 6.546876-3.128906 13.40625-5.320313 20.460938-6.597656l8.53125 15.878906c-4.199219 4.816406-8.566406 9.476562-13.039062 13.875-2.953126 2.902344-2.992188 7.652344-.085938 10.605468 1.46875 1.492188 3.40625 2.238282 5.347656 2.238282 1.898438 0 3.796875-.714844 5.257813-2.152344 3.425781-3.367188 6.789062-6.890625 10.078125-10.503906l2.699218 5.027344c-26.925781 37.070312-61.304687 64.601562-102.472656 81.976562zm115.410156-101.445312c-1.125 1.851562-2.265624 3.675781-3.421874 5.488281l-12.128907-22.578125c1.742188-.109375 3.441407-.21875 5.0625-.320313 3.183594-.203125 6.207031.882813 8.527344 3.0625 2.324219 2.179688 3.605469 5.136719 3.605469 8.332031 0 2.128907-.582032 4.261719-1.644532 6.015626zm0 0"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("h3", null, like)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Likes);

/***/ }),

/***/ "./src/Likes/styles.ts":
/*!*****************************!*\
  !*** ./src/Likes/styles.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  margin-left: 15px;\n  cursor: pointer;\n\n  width: 60px;\n  height: 60px;\n\n  div {\n    display: flex;\n    align-items: center;\n\n    ", "\n\n    h3 {\n      text-align: center;\n      margin-left: 15px;\n\n      -webkit-touch-callout: none; /* iOS Safari */\n      -webkit-user-select: none; /* Safari */\n      -khtml-user-select: none; /* Konqueror HTML */\n      -moz-user-select: none; /* Old versions of Firefox */\n      -ms-user-select: none; /* Internet Explorer/Edge */\n      user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\n    }\n\n    svg {\n      transition: 0.2s;\n      :hover {\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  return props.liked ? "fill: var(--primary);" : "fill: black;";
}, function (props) {
  return props.liked ? "fill: black;" : "fill: var(--primary);";
});

/***/ }),

/***/ "./src/Loader/index.tsx":
/*!******************************!*\
  !*** ./src/Loader/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.js");


var loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};
var loadingCircleVariants = {
  start: {
    y: "0%"
  },
  end: {
    y: "100%"
  }
};
var loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut"
};

var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    style: {
      width: "5rem",
      height: "5rem",
      display: "flex",
      justifyContent: "space-around"
    },
    variants: loadingContainerVariants,
    initial: "start",
    animate: "end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
    style: {
      display: "block",
      width: "1rem",
      height: "1rem",
      backgroundColor: "black",
      borderRadius: "0.25rem"
    },
    variants: loadingCircleVariants,
    transition: loadingCircleTransition
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
    style: {
      display: "block",
      width: "1rem",
      height: "1rem",
      backgroundColor: "black",
      borderRadius: "0.25rem"
    },
    variants: loadingCircleVariants,
    transition: loadingCircleTransition
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
    style: {
      display: "block",
      width: "1rem",
      height: "1rem",
      backgroundColor: "black",
      borderRadius: "0.25rem"
    },
    variants: loadingCircleVariants,
    transition: loadingCircleTransition
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./src/Post/index.tsx":
/*!****************************!*\
  !*** ./src/Post/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _Likes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Likes */ "./src/Likes/index.tsx");
/* harmony import */ var _DeleteBTN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DeleteBTN */ "./src/DeleteBTN/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/Post/styles.ts");






var Post = function Post(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      baseUrl = _useState2[0],
      setBaseURL = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      username = _useState4[0],
      setUsername = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    System["import"]("@monkeysmedia/util-module").then(function (util) {
      return setBaseURL(util.baseUrl);
    });
  }, [setBaseURL]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Getting "me" user infos
    (function () {
      return System["import"]("@monkeysmedia/util-module").then(function (util) {
        return util.apiGet("api/users/get-user/");
      }).then(function (resp) {
        setUsername(resp.data.username ? resp.data.username : null);
      });
    })();
  }, [setUsername]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    ref: props.refe ? props.refe : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.UserSimpleInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("div", {
    onClick: function onClick() {
      return System["import"]("@monkeysmedia/util-module").then(function (util) {
        return util.RedirectTo("/profile/".concat(props.post.user));
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("div", null, baseUrl.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("img", {
    src: "".concat(baseUrl).concat(props.post.profile_image.substring(1)),
    width: "55px",
    height: "55px",
    alt: "Profile"
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("p", null, props.post.user), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("p", null, props.post.timestamp)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("div", null, props.post.user === username ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_DeleteBTN__WEBPACK_IMPORTED_MODULE_3__.default, {
    postID: props.post.id
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("div", {
    style: {
      width: "25px",
      height: "25px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.CardTitle, null, props.post.title), props.post.content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.CardContent, null, props.post.content) : null, props.post.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.CardImage, null, baseUrl.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("img", {
    src: "".concat(baseUrl).concat(props.post.image.substring(1)),
    alt: "".concat(props.post.user)
  }) : null) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(_Likes__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: props.post.id,
    likes: props.post.likes
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "./src/Post/styles.ts":
/*!****************************!*\
  !*** ./src/Post/styles.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "UserSimpleInfo": () => (/* binding */ UserSimpleInfo),
/* harmony export */   "Card": () => (/* binding */ Card),
/* harmony export */   "CardTitle": () => (/* binding */ CardTitle),
/* harmony export */   "CardContent": () => (/* binding */ CardContent),
/* harmony export */   "CardImage": () => (/* binding */ CardImage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.article(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  background: var(--card);\n  margin: 5% 0 5% 0;\n\n  width: 735px;\n  min-width: 150px;\n  min-height: 200px;\n\n  border: 1px solid var(--shadow);\n\n  @media screen and (max-width: 735px) {\n    width: 100%;\n    margin: 0;\n    margin-top: 5%;\n    margin-bottom: 5%;\n    border-left: 0;\n    border-right: 0;\n  }\n"])));
var UserSimpleInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.header(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: space-between;\n\n  div {\n    margin-right: 15px;\n  }\n\n  div {\n    color: black;\n    text-decoration: none;\n\n    cursor: pointer;\n\n    div {\n      margin-left: 15px;\n      display: flex;\n      align-items: center;\n      text-align: left;\n      margin-bottom: 7px;\n\n      img {\n        border: 1px solid var(--shadow);\n        border-radius: 100%;\n      }\n\n      div {\n        display: block;\n        margin-left: 10px;\n        p {\n          font-size: 0.75em;\n        }\n      }\n    }\n  }\n"])));
var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  font-size: 2rem;\n  text-align: center;\n"])));
var CardContent = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  text-align: center;\n  font-size: 1.2rem;\n\n  margin: 5px;\n"])));
var CardImage = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n\n  img {\n    object-fit: cover;\n\n    max-height: 550px;\n    width: 100%;\n  }\n"])));

/***/ }),

/***/ "./src/PostContainer/index.tsx":
/*!*************************************!*\
  !*** ./src/PostContainer/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Post */ "./src/Post/index.tsx");




var PostContainer = function PostContainer(_ref) {
  var item = _ref.item,
      index = _ref.index,
      postsLen = _ref.postsLen,
      LastPostElement = _ref.LastPostElement;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    initial: {
      scale: 0
    },
    animate: {
      rotate: 0,
      scale: 1
    },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    },
    className: "posts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_Post__WEBPACK_IMPORTED_MODULE_1__.default, {
    refe: postsLen === index + 1 ? LastPostElement : null,
    post: item
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostContainer);

/***/ }),

/***/ "./src/styles.ts":
/*!***********************!*\
  !*** ./src/styles.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""])));

/***/ }),

/***/ "./node_modules/dequal/lite/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/lite/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dequal": () => (/* binding */ dequal)
/* harmony export */ });
var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "criticallyDampedSpring": () => (/* binding */ criticallyDampedSpring),
/* harmony export */   "getDefaultTransition": () => (/* binding */ getDefaultTransition),
/* harmony export */   "linearTween": () => (/* binding */ linearTween),
/* harmony export */   "underDampedSpring": () => (/* binding */ underDampedSpring)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");



var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
}); };
var criticallyDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10,
}); };
var linearTween = function () { return ({
    type: "keyframes",
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if ((0,_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ to: to }, transitionFactory(to));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/easing.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/easing.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easingDefinitionToFunction": () => (/* binding */ easingDefinitionToFunction),
/* harmony export */   "isEasingArray": () => (/* binding */ isEasingArray)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/cubic-bezier.js");




var easingLookup = {
    linear: popmotion__WEBPACK_IMPORTED_MODULE_1__.linear,
    easeIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeIn,
    easeInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeInOut,
    easeOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeOut,
    circIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.circIn,
    circInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.circInOut,
    circOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.circOut,
    backIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.backIn,
    backInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.backInOut,
    backOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.backOut,
    anticipate: popmotion__WEBPACK_IMPORTED_MODULE_1__.anticipate,
    bounceIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceIn,
    bounceInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceInOut,
    bounceOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceOut,
};
var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
        return (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.cubicBezier)(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(easingLookup[definition] !== undefined, "Invalid easing type '" + definition + "'");
        return easingLookup[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnimatable": () => (/* binding */ isAnimatable)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_0__.complex.test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnimationControls": () => (/* binding */ isAnimationControls)
/* harmony export */ });
function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isKeyframesTarget": () => (/* binding */ isKeyframesTarget)
/* harmony export */ });
var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/transitions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTransitionToAnimationOptions": () => (/* binding */ convertTransitionToAnimationOptions),
/* harmony export */   "getDelayFromTransition": () => (/* binding */ getDelayFromTransition),
/* harmony export */   "getPopmotionAnimationOptions": () => (/* binding */ getPopmotionAnimationOptions),
/* harmony export */   "getValueTransition": () => (/* binding */ getValueTransition),
/* harmony export */   "getZeroUnit": () => (/* binding */ getZeroUnit),
/* harmony export */   "hydrateKeyframes": () => (/* binding */ hydrateKeyframes),
/* harmony export */   "isTransitionDefined": () => (/* binding */ isTransitionDefined),
/* harmony export */   "isZero": () => (/* binding */ isZero),
/* harmony export */   "startAnimation": () => (/* binding */ startAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/animations/inertia.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/animations/index.js");
/* harmony import */ var _utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/time-conversion.js */ "./node_modules/framer-motion/dist/es/utils/time-conversion.js");
/* harmony import */ var _easing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing.js */ "./node_modules/framer-motion/dist/es/animation/utils/easing.js");
/* harmony import */ var _is_animatable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-animatable.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js");
/* harmony import */ var _default_transitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/dom/value-types/animatable-none.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js");
/* harmony import */ var _render_dom_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../render/dom/value-types/dimensions.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js");
/* harmony import */ var _render_dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../render/dom/value-types/get-as-type.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js");











/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_a) {
    _a.when; _a.delay; _a.delayChildren; _a.staggerChildren; _a.staggerDirection; _a.repeat; _a.repeatType; _a.repeatDelay; _a.from; var transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions(_a) {
    var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["ease", "times", "yoyo", "flip", "loop"]);
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transition);
    if (times)
        options["offset"] = times;
    /**
     * Convert any existing durations from seconds to milliseconds
     */
    if (transition.duration)
        options["duration"] = (0,_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(transition.duration);
    if (transition.repeatDelay)
        options.repeatDelay = (0,_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(transition.repeatDelay);
    /**
     * Map easing names to Popmotion's easing functions
     */
    if (ease) {
        options["ease"] = (0,_easing_js__WEBPACK_IMPORTED_MODULE_3__.isEasingArray)(ease)
            ? ease.map(_easing_js__WEBPACK_IMPORTED_MODULE_3__.easingDefinitionToFunction)
            : (0,_easing_js__WEBPACK_IMPORTED_MODULE_3__.easingDefinitionToFunction)(ease);
    }
    /**
     * Support legacy transition API
     */
    if (transition.type === "tween")
        options.type = "keyframes";
    /**
     * TODO: These options are officially removed from the API.
     */
    if (yoyo || loop || flip) {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
        legacyRepeatWarning = true;
        if (yoyo) {
            options.repeatType = "reverse";
        }
        else if (loop) {
            options.repeatType = "loop";
        }
        else if (flip) {
            options.repeatType = "mirror";
        }
        options.repeat = loop || yoyo || flip || transition.repeat;
    }
    /**
     * TODO: Popmotion 9 has the ability to automatically detect whether to use
     * a keyframes or spring animation, but does so by detecting velocity and other spring options.
     * It'd be good to introduce a similar thing here.
     */
    if (transition.type !== "spring")
        options.type = "keyframes";
    return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
    var _a;
    var valueTransition = getValueTransition(transition, key) || {};
    return (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : 0;
}
function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(options.to));
        options.to[0] = options.from;
    }
    return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
    var _a;
    if (Array.isArray(options.to)) {
        (_a = transition.duration) !== null && _a !== void 0 ? _a : (transition.duration = 0.8);
    }
    hydrateKeyframes(options);
    /**
     * Get a default transition if none is determined to be defined.
     */
    if (!isTransitionDefined(transition)) {
        transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transition), (0,_default_transitions_js__WEBPACK_IMPORTED_MODULE_4__.getDefaultTransition)(key, options.to));
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
    var _a;
    var valueTransition = getValueTransition(transition, key);
    var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
    var isTargetAnimatable = (0,_is_animatable_js__WEBPACK_IMPORTED_MODULE_5__.isAnimatable)(key, target);
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
        /**
         * If we're trying to animate from "none", try and get an animatable version
         * of the target. This could be improved to work both ways.
         */
        origin = (0,_render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_6__.getAnimatableNone)(key, target);
    }
    else if (isZero(origin) && typeof target === "string") {
        origin = getZeroUnit(target);
    }
    else if (!Array.isArray(target) &&
        isZero(target) &&
        typeof origin === "string") {
        target = getZeroUnit(origin);
    }
    var isOriginAnimatable = (0,_is_animatable_js__WEBPACK_IMPORTED_MODULE_5__.isAnimatable)(key, origin);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
    function start() {
        var options = {
            from: origin,
            to: target,
            velocity: value.getVelocity(),
            onComplete: onComplete,
            onUpdate: function (v) { return value.set(v); },
        };
        return valueTransition.type === "inertia" ||
            valueTransition.type === "decay"
            ? (0,popmotion__WEBPACK_IMPORTED_MODULE_7__.inertia)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), valueTransition))
            : (0,popmotion__WEBPACK_IMPORTED_MODULE_8__.animate)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function (v) {
                    var _a;
                    options.onUpdate(v);
                    (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
                }, onComplete: function () {
                    var _a;
                    options.onComplete();
                    (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
                } }));
    }
    function set() {
        var _a;
        value.set(target);
        onComplete();
        (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
        return { stop: function () { } };
    }
    return !isOriginAnimatable ||
        !isTargetAnimatable ||
        valueTransition.type === false
        ? set
        : start;
}
function isZero(value) {
    return (value === 0 ||
        (typeof value === "string" &&
            parseFloat(value) === 0 &&
            value.indexOf(" ") === -1));
}
function getZeroUnit(potentialUnitType) {
    return (0,_render_dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_9__.getValueAsType)(0, (0,_render_dom_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_10__.findDimensionValueType)(potentialUnitType));
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 *
 * @internal
 */
function startAnimation(key, value, target, transition) {
    if (transition === void 0) { transition = {}; }
    return value.start(function (onComplete) {
        var delayTimer;
        var controls;
        var animation = getAnimation(key, value, target, transition, onComplete);
        var delay = getDelayFromTransition(transition, key);
        var start = function () { return (controls = animation()); };
        if (delay) {
            delayTimer = setTimeout(start, (0,_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(delay));
        }
        else {
            start();
        }
        return function () {
            clearTimeout(delayTimer);
            controls === null || controls === void 0 ? void 0 : controls.stop();
        };
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPresent": () => (/* binding */ isPresent),
/* harmony export */   "useIsPresent": () => (/* binding */ useIsPresent),
/* harmony export */   "usePresence": () => (/* binding */ usePresence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");




/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__.PresenceContext);
    if (context === null)
        return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useOpaqueId when released in React
    var id = useUniqueId();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return register(id); }, []);
    var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__.PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}
var counter = 0;
var incrementId = function () { return counter++; };
var useUniqueId = function () { return (0,_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__.useConstant)(incrementId); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Presence": () => (/* binding */ Presence),
/* harmony export */   "VisibilityAction": () => (/* binding */ VisibilityAction)
/* harmony export */ });
/**
 * @public
 */
var Presence;
(function (Presence) {
    Presence[Presence["Entering"] = 0] = "Entering";
    Presence[Presence["Present"] = 1] = "Present";
    Presence[Presence["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
/**
 * @public
 */
var VisibilityAction;
(function (VisibilityAction) {
    VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
    VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
})(VisibilityAction || (VisibilityAction = {}));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBatcher": () => (/* binding */ createBatcher)
/* harmony export */ });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _render_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../render/utils/compare-by-depth.js */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");




/**
 * Default handlers for batching VisualElements
 */
var defaultHandler = {
    measureLayout: function (child) { return child.updateLayoutMeasurement(); },
    layoutReady: function (child) { return child.notifyLayoutReady(); },
};
/**
 * Create a batcher to process VisualElements
 */
function createBatcher() {
    var queue = new Set();
    return {
        add: function (child) { return queue.add(child); },
        flush: function (_a) {
            var _b = _a === void 0 ? defaultHandler : _a, measureLayout = _b.measureLayout, layoutReady = _b.layoutReady, parent = _b.parent;
            var order = Array.from(queue).sort(_render_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__.compareByDepth);
            var resetAndMeasure = function () {
                /**
                 * Write: Reset any transforms on children elements so we can read their actual layout
                 */
                order.forEach(function (child) { return child.resetTransform(); });
                /**
                 * Read: Measure the actual layout
                 */
                order.forEach(measureLayout);
            };
            parent
                ? parent.withoutTransform(resetAndMeasure)
                : resetAndMeasure();
            /**
             * Write: Notify the VisualElements they're ready for further write operations.
             */
            order.forEach(layoutReady);
            /**
             * After all children have started animating, ensure any Entering components are set to Present.
             * If we add deferred animations (set up all animations and then start them in two loops) this
             * could be moved to the start loop. But it needs to happen after all the animations configs
             * are generated in AnimateSharedLayout as this relies on presence data
             */
            order.forEach(function (child) {
                if (child.isPresent)
                    child.presence = _types_js__WEBPACK_IMPORTED_MODULE_2__.Presence.Present;
            });
            /**
             * Starting these animations will have queued jobs on the frame loop. In some situations,
             * like when removing an element, these will be processed too late after the DOM is manipulated,
             * leaving a flash of incorrectly-projected content. By manually flushing these jobs
             * we ensure there's no flash.
             */
            framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.preRender();
            framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.render();
            queue.clear();
        },
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutGroupContext": () => (/* binding */ LayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @internal
 */
var LayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LazyContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LazyContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyContext": () => (/* binding */ LazyContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


var LazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ strict: false });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionConfigContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionConfigContext": () => (/* binding */ MotionConfigContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @public
 */
var MotionConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    transformPagePoint: function (p) { return p; },
    isStatic: false,
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/create.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/create.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateMotionContext": () => (/* binding */ useCreateMotionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.js");




function useCreateMotionContext(props, isStatic) {
    var _a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentTreeVariants)(props, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index_js__WEBPACK_IMPORTED_MODULE_2__.MotionContext)), initial = _a.initial, animate = _a.animate;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return ({ initial: initial, animate: animate }); }, 
    /**
     * Only break memoisation in static mode
     */
    isStatic
        ? [
            variantLabelsAsDependency(initial),
            variantLabelsAsDependency(animate),
        ]
        : []);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionContext": () => (/* binding */ MotionContext),
/* harmony export */   "useVisualElementContext": () => (/* binding */ useVisualElementContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


var MotionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useVisualElementContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MotionContext).visualElement;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/utils.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentTreeVariants": () => (/* binding */ getCurrentTreeVariants)
/* harmony export */ });
/* harmony import */ var _render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");


function getCurrentTreeVariants(props, context) {
    if ((0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__.checkIfControllingVariants)(props)) {
        var initial = props.initial, animate = props.animate;
        return {
            initial: initial === false || (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__.isVariantLabel)(initial)
                ? initial
                : undefined,
            animate: (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__.isVariantLabel)(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/PresenceContext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/PresenceContext.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresenceContext": () => (/* binding */ PresenceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @public
 */
var PresenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FramerTreeLayoutContext": () => (/* binding */ FramerTreeLayoutContext),
/* harmony export */   "SharedLayoutContext": () => (/* binding */ SharedLayoutContext),
/* harmony export */   "isSharedLayout": () => (/* binding */ isSharedLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AnimateSharedLayout/utils/batcher.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js");



var SharedLayoutContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)((0,_components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__.createBatcher)());
/**
 * @internal
 */
var FramerTreeLayoutContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)((0,_components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__.createBatcher)());
function isSharedLayout(context) {
    return !!context.forceUpdate;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/event-info.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/event-info.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractEventInfo": () => (/* binding */ extractEventInfo),
/* harmony export */   "getViewportPointFromEvent": () => (/* binding */ getViewportPointFromEvent),
/* harmony export */   "wrapHandler": () => (/* binding */ wrapHandler)
/* harmony export */ });
/* harmony import */ var _gestures_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gestures/utils/event-type.js */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js");


/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function pointFromMouse(point, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function extractEventInfo(event, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        point: (0,_gestures_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__.isTouchEvent)(event)
            ? pointFromTouch(event, pointType)
            : pointFromMouse(event, pointType),
    };
}
function getViewportPointFromEvent(event) {
    return extractEventInfo(event, "client");
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    var listener = function (event) {
        return handler(event, extractEventInfo(event));
    };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-dom-event.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-dom-event.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDomEvent": () => (/* binding */ addDomEvent),
/* harmony export */   "useDomEvent": () => (/* binding */ useDomEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function addDomEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler, options); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-pointer-event.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPointerEvent": () => (/* binding */ addPointerEvent),
/* harmony export */   "usePointerEvent": () => (/* binding */ usePointerEvent)
/* harmony export */ });
/* harmony import */ var _use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");
/* harmony import */ var _event_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-info.js */ "./node_modules/framer-motion/dist/es/events/event-info.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/events/utils.js");




var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.supportsPointerEvents)()) {
        return name;
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.supportsTouchEvents)()) {
        return touchEventNames[name];
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.supportsMouseEvents)()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return (0,_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__.addDomEvent)(target, getPointerEventName(eventName), (0,_event_info_js__WEBPACK_IMPORTED_MODULE_2__.wrapHandler)(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return (0,_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(ref, getPointerEventName(eventName), handler && (0,_event_info_js__WEBPACK_IMPORTED_MODULE_2__.wrapHandler)(handler, eventName === "pointerdown"), options);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsMouseEvents": () => (/* binding */ supportsMouseEvents),
/* harmony export */   "supportsPointerEvents": () => (/* binding */ supportsPointerEvents),
/* harmony export */   "supportsTouchEvents": () => (/* binding */ supportsTouchEvents)
/* harmony export */ });
/* harmony import */ var _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-browser.js */ "./node_modules/framer-motion/dist/es/utils/is-browser.js");


// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.onmousedown === null;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/PanSession.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/PanSession.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanSession": () => (/* binding */ PanSession)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_event_type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/event-type.js */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js");
/* harmony import */ var _events_event_info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/event-info.js */ "./node_modules/framer-motion/dist/es/events/event-info.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/time-conversion.js */ "./node_modules/framer-motion/dist/es/utils/time-conversion.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/distance.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.js");








/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.distance)(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().timestamp;
            _this.history.push((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        this.handlePointerMove = function (event, info) {
            _this.lastMoveEvent = event;
            _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
            // Because Safari doesn't trigger mouseup events when it's above a `<select>`
            if ((0,_utils_event_type_js__WEBPACK_IMPORTED_MODULE_3__.isMouseEvent)(event) && event.buttons === 0) {
                _this.handlePointerUp(event, info);
                return;
            }
            // Throttle mouse move event to once per frame
            framesync__WEBPACK_IMPORTED_MODULE_0__.default.update(_this.updatePoint, true);
        };
        this.handlePointerUp = function (event, info) {
            _this.end();
            var onEnd = _this.handlers.onEnd;
            if (!onEnd || !_this.startEvent)
                return;
            var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
            onEnd && onEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if ((0,_utils_event_type_js__WEBPACK_IMPORTED_MODULE_3__.isTouchEvent)(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = (0,_events_event_info_js__WEBPACK_IMPORTED_MODULE_4__.extractEventInfo)(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().timestamp;
        this.history = [(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = (0,popmotion__WEBPACK_IMPORTED_MODULE_5__.pipe)((0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointermove", this.handlePointerMove), (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointerup", this.handlePointerUp), (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointercancel", this.handlePointerUp));
    }
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(this.updatePoint);
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            (0,_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_7__.secondsToMilliseconds)(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualElementDragControls": () => (/* binding */ VisualElementDragControls),
/* harmony export */   "elementDragControls": () => (/* binding */ elementDragControls)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/progress.js");
/* harmony import */ var _PanSession_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PanSession.js */ "./node_modules/framer-motion/dist/es/gestures/PanSession.js");
/* harmony import */ var _utils_lock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/lock.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js");
/* harmony import */ var _utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/is-ref-object.js */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../events/use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");
/* harmony import */ var _events_event_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events/event-info.js */ "./node_modules/framer-motion/dist/es/events/event-info.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _utils_constraints_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/constraints.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js");
/* harmony import */ var _render_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../render/dom/projection/measure.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/geometry/delta-calc.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");

















var elementDragControls = new WeakMap();
/**
 *
 */
var lastPointerEvent;
var VisualElementDragControls = /** @class */ (function () {
    function VisualElementDragControls(_a) {
        var visualElement = _a.visualElement;
        /**
         * Track whether we're currently dragging.
         *
         * @internal
         */
        this.isDragging = false;
        /**
         * The current direction of drag, or `null` if both.
         *
         * @internal
         */
        this.currentDirection = null;
        /**
         * The permitted boundaries of travel, in pixels.
         *
         * @internal
         */
        this.constraints = false;
        /**
         * The per-axis resolved elastic values.
         *
         * @internal
         */
        this.elastic = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_1__.axisBox)();
        /**
         * A reference to the host component's latest props.
         *
         * @internal
         */
        this.props = {};
        /**
         * @internal
         */
        this.hasMutatedConstraints = false;
        /**
         * Track the initial position of the cursor relative to the dragging element
         * when dragging starts as a value of 0-1 on each axis. We then use this to calculate
         * an ideal bounding box for the VisualElement renderer to project into every frame.
         *
         * @internal
         */
        this.cursorProgress = {
            x: 0.5,
            y: 0.5,
        };
        // When updating _dragX, or _dragY instead of the VisualElement,
        // persist their values between drag gestures.
        this.originPoint = {};
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        /**
         * @internal
         */
        this.panSession = null;
        this.visualElement = visualElement;
        this.visualElement.enableLayoutProjection();
        elementDragControls.set(visualElement, this);
    }
    /**
     * Instantiate a PanSession for the drag gesture
     *
     * @public
     */
    VisualElementDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
        /**
         * If this drag session has been manually triggered by the user, it might be from an event
         * outside the draggable element. If snapToCursor is set to true, we need to measure the position
         * of the element and snap it to the cursor.
         */
        snapToCursor && this.snapToCursor(originEvent);
        var onSessionStart = function () {
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            _this.stopMotion();
        };
        var onStart = function (event, info) {
            var _a, _b, _c;
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _d = _this.props, drag = _d.drag, dragPropagation = _d.dragPropagation;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = (0,_utils_lock_js__WEBPACK_IMPORTED_MODULE_2__.getGlobalLock)(drag);
                // If we don 't have the lock, don't start dragging
                if (!_this.openGlobalLock)
                    return;
            }
            /**
             * Record the progress of the mouse within the draggable element on each axis.
             * onPan, we're going to use this to calculate a new bounding box for the element to
             * project into. This will ensure that even if the DOM element moves via a relayout, it'll
             * stick to the correct place under the pointer.
             */
            _this.prepareBoundingBox();
            _this.visualElement.lockProjectionTarget();
            /**
             * Resolve the drag constraints. These are either set as top/right/bottom/left constraints
             * relative to the element's layout, or a ref to another element. Both need converting to
             * viewport coordinates.
             */
            _this.resolveDragConstraints();
            /**
             * When dragging starts, we want to find where the cursor is relative to the bounding box
             * of the element. Every frame, we calculate a new bounding box using this relative position
             * and let the visualElement renderer figure out how to reproject the element into this bounding
             * box.
             *
             * By doing it this way, rather than applying an x/y transform directly to the element,
             * we can ensure the component always visually sticks to the cursor as we'd expect, even
             * if the DOM element itself changes layout as a result of React updates the user might
             * make based on the drag position.
             */
            var point = (0,_events_event_info_js__WEBPACK_IMPORTED_MODULE_3__.getViewportPointFromEvent)(event).point;
            (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                var _a = _this.visualElement.projection.target[axis], min = _a.min, max = _a.max;
                _this.cursorProgress[axis] = cursorProgress
                    ? cursorProgress[axis]
                    : (0,popmotion__WEBPACK_IMPORTED_MODULE_5__.progress)(min, max, point[axis]);
                /**
                 * If we have external drag MotionValues, record their origin point. On pointermove
                 * we'll apply the pan gesture offset directly to this value.
                 */
                var axisValue = _this.getAxisMotionValue(axis);
                if (axisValue) {
                    _this.originPoint[axis] = axisValue.get();
                }
            });
            // Set current drag status
            _this.isDragging = true;
            _this.currentDirection = null;
            // Fire onDragStart event
            (_b = (_a = _this.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
            (_c = _this.visualElement.animationState) === null || _c === void 0 ? void 0 : _c.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_6__.AnimationType.Drag, true);
        };
        var onMove = function (event, info) {
            var _a, _b, _c, _d;
            var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 ? void 0 : _b.call(_a, _this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            _this.updateAxis("x", event, offset);
            _this.updateAxis("y", event, offset);
            // Fire onDrag event
            (_d = (_c = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
            // Update the last pointer event
            lastPointerEvent = event;
        };
        var onEnd = function (event, info) { return _this.stop(event, info); };
        var transformPagePoint = this.props.transformPagePoint;
        this.panSession = new _PanSession_js__WEBPACK_IMPORTED_MODULE_7__.PanSession(originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onEnd: onEnd,
        }, { transformPagePoint: transformPagePoint });
    };
    /**
     * Ensure the component's layout and target bounding boxes are up-to-date.
     */
    VisualElementDragControls.prototype.prepareBoundingBox = function () {
        var visualElement = this.visualElement;
        visualElement.withoutTransform(function () {
            visualElement.updateLayoutMeasurement();
        });
        visualElement.rebaseProjectionTarget(true, visualElement.measureViewportBox(false));
    };
    VisualElementDragControls.prototype.resolveDragConstraints = function () {
        var _this = this;
        var _a = this.props, dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
        if (dragConstraints) {
            this.constraints = (0,_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_8__.isRefObject)(dragConstraints)
                ? this.resolveRefConstraints(this.visualElement.getLayoutState().layout, dragConstraints)
                : (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_9__.calcRelativeConstraints)(this.visualElement.getLayoutState().layout, dragConstraints);
        }
        else {
            this.constraints = false;
        }
        this.elastic = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_9__.resolveDragElastic)(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (this.constraints && !this.hasMutatedConstraints) {
            (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                if (_this.getAxisMotionValue(axis)) {
                    _this.constraints[axis] = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_9__.rebaseAxisConstraints)(_this.visualElement.getLayoutState().layout[axis], _this.constraints[axis]);
                }
            });
        }
    };
    VisualElementDragControls.prototype.resolveRefConstraints = function (layoutBox, constraints) {
        var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
        var constraintsElement = constraints.current;
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        this.constraintsBox = (0,_render_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_10__.getBoundingBox)(constraintsElement, transformPagePoint);
        var measuredConstraints = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_9__.calcViewportConstraints)(layoutBox, this.constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            var userConstraints = onMeasureDragConstraints((0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_1__.convertAxisBoxToBoundingBox)(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_1__.convertBoundingBoxToAxisBox)(userConstraints);
            }
        }
        return measuredConstraints;
    };
    VisualElementDragControls.prototype.cancelDrag = function () {
        var _a;
        this.isDragging = false;
        this.panSession && this.panSession.end();
        this.panSession = null;
        if (!this.props.dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        (_a = this.visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_6__.AnimationType.Drag, false);
    };
    VisualElementDragControls.prototype.stop = function (event, info) {
        var _a;
        this.visualElement.unlockProjectionTarget();
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = null;
        var isDragging = this.isDragging;
        this.cancelDrag();
        if (!isDragging)
            return;
        var _b = this.props, dragMomentum = _b.dragMomentum, onDragEnd = _b.onDragEnd;
        if (dragMomentum || this.elastic) {
            var velocity = info.velocity;
            this.animateDragEnd(velocity);
        }
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
    };
    VisualElementDragControls.prototype.snapToCursor = function (event) {
        var _this = this;
        this.prepareBoundingBox();
        (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            var drag = _this.props.drag;
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, _this.currentDirection))
                return;
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
                var point = (0,_events_event_info_js__WEBPACK_IMPORTED_MODULE_3__.getViewportPointFromEvent)(event).point;
                var box = _this.visualElement.getLayoutState().layout;
                var length_1 = box[axis].max - box[axis].min;
                var center = box[axis].min + length_1 / 2;
                var offset = point[axis] - center;
                _this.originPoint[axis] = point[axis];
                axisValue.set(offset);
            }
            else {
                _this.cursorProgress[axis] = 0.5;
                _this.updateVisualElementAxis(axis, event);
            }
        });
    };
    /**
     * Update the specified axis with the latest pointer information.
     */
    VisualElementDragControls.prototype.updateAxis = function (axis, event, offset) {
        var drag = this.props.drag;
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, this.currentDirection))
            return;
        return this.getAxisMotionValue(axis)
            ? this.updateAxisMotionValue(axis, offset)
            : this.updateVisualElementAxis(axis, event);
    };
    VisualElementDragControls.prototype.updateAxisMotionValue = function (axis, offset) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!offset || !axisValue)
            return;
        var nextValue = this.originPoint[axis] + offset[axis];
        var update = this.constraints
            ? (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_9__.applyConstraints)(nextValue, this.constraints[axis], this.elastic[axis])
            : nextValue;
        axisValue.set(update);
    };
    VisualElementDragControls.prototype.updateVisualElementAxis = function (axis, event) {
        var _a;
        // Get the actual layout bounding box of the element
        var axisLayout = this.visualElement.getLayoutState().layout[axis];
        // Calculate its current length. In the future we might want to lerp this to animate
        // between lengths if the layout changes as we change the DOM
        var axisLength = axisLayout.max - axisLayout.min;
        // Get the initial progress that the pointer sat on this axis on gesture start.
        var axisProgress = this.cursorProgress[axis];
        var point = (0,_events_event_info_js__WEBPACK_IMPORTED_MODULE_3__.getViewportPointFromEvent)(event).point;
        // Calculate a new min point based on the latest pointer position, constraints and elastic
        var min = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_9__.calcConstrainedMinPoint)(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], this.elastic[axis]);
        // Update the axis viewport target with this new min and the length
        this.visualElement.setProjectionTargetAxis(axis, min, min + axisLength);
    };
    VisualElementDragControls.prototype.setProps = function (_a) {
        var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? _utils_constraints_js__WEBPACK_IMPORTED_MODULE_9__.defaultElastic : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__rest)(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
        this.props = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__assign)({ drag: drag,
            dragDirectionLock: dragDirectionLock,
            dragPropagation: dragPropagation,
            dragConstraints: dragConstraints,
            dragElastic: dragElastic,
            dragMomentum: dragMomentum }, remainingProps);
    };
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - If the component will perform layout animations, we output the gesture to the component's
     *      visual bounding box
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
        var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
        var dragKey = "_drag" + axis.toUpperCase();
        if (this.props[dragKey]) {
            return this.props[dragKey];
        }
        else if (!layout && layoutId === undefined) {
            return this.visualElement.getValue(axis, 0);
        }
    };
    VisualElementDragControls.prototype.animateDragEnd = function (velocity) {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
        var momentumAnimations = (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = _this.constraints ? _this.constraints[axis] : {};
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var inertia = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_11__.__assign)({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness,
                bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return _this.getAxisMotionValue(axis)
                ? _this.startAxisValueAnimation(axis, inertia)
                : _this.visualElement.startLayoutAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(function () {
            var _a, _b;
            (_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
    };
    VisualElementDragControls.prototype.stopMotion = function () {
        var _this = this;
        (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            axisValue
                ? axisValue.stop()
                : _this.visualElement.stopLayoutAnimation();
        });
    };
    VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!axisValue)
            return;
        var currentValue = axisValue.get();
        axisValue.set(currentValue);
        axisValue.set(currentValue); // Set twice to hard-reset velocity
        return (0,_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_12__.startAnimation)(axis, axisValue, 0, transition);
    };
    VisualElementDragControls.prototype.scalePoint = function () {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragConstraints = _a.dragConstraints;
        if (!(0,_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_8__.isRefObject)(dragConstraints) || !this.constraintsBox)
            return;
        // Stop any current animations as there can be some visual glitching if we resize mid animation
        this.stopMotion();
        // Record the relative progress of the targetBox relative to the constraintsBox
        var boxProgress = { x: 0, y: 0 };
        (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            boxProgress[axis] = (0,_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_13__.calcOrigin)(_this.visualElement.projection.target[axis], _this.constraintsBox[axis]);
        });
        /**
         * For each axis, calculate the current progress of the layout axis within the constraints.
         * Then, using the latest layout and constraints measurements, reposition the new layout axis
         * proportionally within the constraints.
         */
        this.prepareBoundingBox();
        this.resolveDragConstraints();
        (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            if (!shouldDrag(axis, drag, null))
                return;
            // Calculate the position of the targetBox relative to the constraintsBox using the
            // previously calculated progress
            var _a = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_9__.calcPositionFromProgress)(_this.visualElement.projection.target[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a.min, max = _a.max;
            _this.visualElement.setProjectionTargetAxis(axis, min, max);
        });
    };
    VisualElementDragControls.prototype.mount = function (visualElement) {
        var _this = this;
        var element = visualElement.getInstance();
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        var stopPointerListener = (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_14__.addPointerEvent)(element, "pointerdown", function (event) {
            var _a = _this.props, drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        var stopResizeListener = (0,_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_15__.addDomEvent)(window, "resize", function () {
            _this.scalePoint();
        });
        /**
         * Ensure drag constraints are resolved correctly relative to the dragging element
         * whenever its layout changes.
         */
        var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function () {
            if (_this.isDragging)
                _this.resolveDragConstraints();
        });
        /**
         * If the previous component with this same layoutId was dragging at the time
         * it was unmounted, we want to continue the same gesture on this component.
         */
        var prevDragCursor = visualElement.prevDragCursor;
        if (prevDragCursor) {
            this.start(lastPointerEvent, { cursorProgress: prevDragCursor });
        }
        /**
         * Return a function that will teardown the drag gesture
         */
        return function () {
            stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
            stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
            stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
            _this.cancelDrag();
        };
    };
    return VisualElementDragControls;
}());
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDrag": () => (/* binding */ useDrag)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisualElementDragControls.js */ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");






/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
function useDrag(props) {
    var groupDragControls = props.dragControls, visualElement = props.visualElement;
    var transformPagePoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__.MotionConfigContext).transformPagePoint;
    var dragControls = (0,_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__.useConstant)(function () {
        return new _VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_3__.VisualElementDragControls({
            visualElement: visualElement,
        });
    });
    dragControls.setProps((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, props), { transformPagePoint: transformPagePoint }));
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls]);
    // Mount the drag controls with the visualElement
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return dragControls.mount(visualElement); }, []);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyConstraints": () => (/* binding */ applyConstraints),
/* harmony export */   "calcConstrainedMinPoint": () => (/* binding */ calcConstrainedMinPoint),
/* harmony export */   "calcPositionFromProgress": () => (/* binding */ calcPositionFromProgress),
/* harmony export */   "calcRelativeAxisConstraints": () => (/* binding */ calcRelativeAxisConstraints),
/* harmony export */   "calcRelativeConstraints": () => (/* binding */ calcRelativeConstraints),
/* harmony export */   "calcViewportAxisConstraints": () => (/* binding */ calcViewportAxisConstraints),
/* harmony export */   "calcViewportConstraints": () => (/* binding */ calcViewportConstraints),
/* harmony export */   "defaultElastic": () => (/* binding */ defaultElastic),
/* harmony export */   "rebaseAxisConstraints": () => (/* binding */ rebaseAxisConstraints),
/* harmony export */   "resolveAxisElastic": () => (/* binding */ resolveAxisElastic),
/* harmony export */   "resolveDragElastic": () => (/* binding */ resolveDragElastic),
/* harmony export */   "resolvePointElastic": () => (/* binding */ resolvePointElastic)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");



/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(min, point, elastic.min) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculates a min projection point based on a pointer, pointer progress
 * within the drag target, and constraints.
 *
 * For instance if an element was 100px width, we were dragging from 0.25
 * along this axis, the pointer is at 200px, and there were no constraints,
 * we would calculate a min projection point of 175px.
 */
function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
    // Calculate a min point for this axis and apply it to the current pointer
    var min = point - length * progress;
    return constraints ? applyConstraints(min, constraints, elastic) : min;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)([max, min], 2), min = _a[0], max = _a[1];
    }
    return {
        min: layoutAxis.min + min,
        max: layoutAxis.min + max,
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate the an axis position based on two axes and a progress value.
 */
function calcPositionFromProgress(axis, constraints, progress) {
    var axisLength = axis.max - axis.min;
    var min = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(constraints.min, constraints.max - axisLength, progress);
    return { min: min, max: min + axisLength };
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
var defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    var _a;
    return typeof dragElastic === "number"
        ? dragElastic
        : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLock": () => (/* binding */ createLock),
/* harmony export */   "getGlobalLock": () => (/* binding */ getGlobalLock),
/* harmony export */   "isDragActive": () => (/* binding */ isDragActive)
/* harmony export */ });
function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFocusGesture": () => (/* binding */ useFocusGesture)
/* harmony export */ });
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");



/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useFocusGesture(_a) {
    var whileFocus = _a.whileFocus, visualElement = _a.visualElement;
    var onFocus = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus, true);
    };
    var onBlur = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus, false);
    };
    (0,_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(visualElement, "focus", whileFocus ? onFocus : undefined);
    (0,_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(visualElement, "blur", whileFocus ? onBlur : undefined);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHoverGesture": () => (/* binding */ useHoverGesture)
/* harmony export */ });
/* harmony import */ var _utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/event-type.js */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");




function createHoverEvent(visualElement, isActive, callback) {
    return function (event, info) {
        var _a;
        if (!(0,_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__.isMouseEvent)(event) || !visualElement.isHoverEventsEnabled)
            return;
        callback === null || callback === void 0 ? void 0 : callback(event, info);
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__.AnimationType.Hover, isActive);
    };
}
function useHoverGesture(_a) {
    var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement = _a.visualElement;
    (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__.usePointerEvent)(visualElement, "pointerenter", onHoverStart || whileHover
        ? createHoverEvent(visualElement, true, onHoverStart)
        : undefined);
    (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__.usePointerEvent)(visualElement, "pointerleave", onHoverEnd || whileHover
        ? createHoverEvent(visualElement, false, onHoverEnd)
        : undefined);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePanGesture": () => (/* binding */ usePanGesture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/use-unmount-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _PanSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanSession.js */ "./node_modules/framer-motion/dist/es/gestures/PanSession.js");






/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement = _a.visualElement;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var transformPagePoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__.MotionConfigContext).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (panSession.current !== null) {
            panSession.current.updateHandlers(handlers);
        }
    });
    function onPointerDown(event) {
        panSession.current = new _PanSession_js__WEBPACK_IMPORTED_MODULE_2__.PanSession(event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerdown", hasPanEvents && onPointerDown);
    (0,_utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_4__.useUnmountEffect)(function () { return panSession.current && panSession.current.end(); });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTapGesture": () => (/* binding */ useTapGesture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_is_node_or_child_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-node-or-child.js */ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/use-unmount-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag/utils/lock.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js");








/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement = _a.visualElement;
    var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isPressing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var cancelPointerEndListeners = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    function removePointerEndListener() {
        var _a;
        (_a = cancelPointerEndListeners.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEndListeners);
        cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
        var _a;
        removePointerEndListener();
        isPressing.current = false;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__.AnimationType.Tap, false);
        return !(0,_drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_2__.isDragActive)();
    }
    function onPointerUp(event, info) {
        if (!checkPointerEnd())
            return;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        !(0,_utils_is_node_or_child_js__WEBPACK_IMPORTED_MODULE_3__.isNodeOrChild)(visualElement.getInstance(), event.target)
            ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info)
            : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
    }
    function onPointerCancel(event, info) {
        if (!checkPointerEnd())
            return;
        onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
    }
    function onPointerDown(event, info) {
        var _a;
        removePointerEndListener();
        if (isPressing.current)
            return;
        isPressing.current = true;
        cancelPointerEndListeners.current = (0,popmotion__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointerup", onPointerUp), (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointercancel", onPointerCancel));
        onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__.AnimationType.Tap, true);
    }
    (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__.usePointerEvent)(visualElement, "pointerdown", hasPressListeners ? onPointerDown : undefined);
    (0,_utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_6__.useUnmountEffect)(removePointerEndListener);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/event-type.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMouseEvent": () => (/* binding */ isMouseEvent),
/* harmony export */   "isTouchEvent": () => (/* binding */ isTouchEvent)
/* harmony export */ });
function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeOrChild": () => (/* binding */ isNodeOrChild)
/* harmony export */ });
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animations.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animations.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animations": () => (/* binding */ animations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _render_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/animation-state.js */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js");









var animations = {
    animation: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_1__.makeRenderlessComponent)(function (_a) {
        var visualElement = _a.visualElement, animate = _a.animate;
        /**
         * We dynamically generate the AnimationState manager as it contains a reference
         * to the underlying animation library. We only want to load that if we load this,
         * so people can optionally code split it out using the `m` component.
         */
        visualElement.animationState || (visualElement.animationState = (0,_render_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_2__.createAnimationState)(visualElement));
        /**
         * Subscribe any provided AnimationControls to the component's VisualElement
         */
        if ((0,_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_3__.isAnimationControls)(animate)) {
            (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return animate.subscribe(visualElement); }, [animate]);
        }
    }),
    exit: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_1__.makeRenderlessComponent)(function (props) {
        var custom = props.custom, visualElement = props.visualElement;
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_5__.usePresence)(), 2), isPresent = _a[0], onExitComplete = _a[1];
        var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_6__.PresenceContext);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            var _a, _b;
            var animation = (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_7__.AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
            !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(onExitComplete));
        }, [isPresent]);
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/definitions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/definitions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featureDefinitions": () => (/* binding */ featureDefinitions),
/* harmony export */   "loadFeatures": () => (/* binding */ loadFeatures)
/* harmony export */ });
var createDefinition = function (propNames) { return ({
    isEnabled: function (props) { return propNames.some(function (name) { return !!props[name]; }); },
}); };
var featureDefinitions = {
    measureLayout: createDefinition(["layout", "layoutId", "drag"]),
    animation: createDefinition([
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
    ]),
    layoutAnimation: createDefinition(["layout", "layoutId"]),
};
function loadFeatures(features) {
    for (var key in features) {
        var Component = features[key];
        if (Component !== null)
            featureDefinitions[key].Component = Component;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/drag.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/drag.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drag": () => (/* binding */ drag)
/* harmony export */ });
/* harmony import */ var _gestures_drag_use_drag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/drag/use-drag.js */ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js");
/* harmony import */ var _gestures_use_pan_gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-pan-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js");




var drag = {
    pan: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_pan_gesture_js__WEBPACK_IMPORTED_MODULE_1__.usePanGesture),
    drag: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_drag_use_drag_js__WEBPACK_IMPORTED_MODULE_2__.useDrag),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/gestures.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/gestures.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gestureAnimations": () => (/* binding */ gestureAnimations)
/* harmony export */ });
/* harmony import */ var _gestures_use_focus_gesture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/use-focus-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js");
/* harmony import */ var _gestures_use_hover_gesture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestures/use-hover-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js");
/* harmony import */ var _gestures_use_tap_gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-tap-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js");





var gestureAnimations = {
    tap: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_tap_gesture_js__WEBPACK_IMPORTED_MODULE_1__.useTapGesture),
    focus: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_focus_gesture_js__WEBPACK_IMPORTED_MODULE_2__.useFocusGesture),
    hover: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_hover_gesture_js__WEBPACK_IMPORTED_MODULE_3__.useHoverGesture),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateLayoutContextProvider": () => (/* binding */ AnimateLayoutContextProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js");
/* harmony import */ var _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/AnimateSharedLayout/types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../render/dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony import */ var _render_dom_projection_default_scale_correctors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../render/dom/projection/default-scale-correctors.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js");











var progressTarget = 1000;
var Animate = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Animate, _super);
    function Animate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A mutable object that tracks the target viewport box
         * for the current animation frame.
         */
        _this.frameTarget = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__.axisBox)();
        /**
         * The current animation target, we use this to check whether to start
         * a new animation or continue the existing one.
         */
        _this.currentAnimationTarget = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__.axisBox)();
        /**
         * Track whether we're animating this axis.
         */
        _this.isAnimating = {
            x: false,
            y: false,
        };
        _this.stopAxisAnimation = {
            x: undefined,
            y: undefined,
        };
        _this.isAnimatingTree = false;
        _this.animate = function (target, origin, _a) {
            if (_a === void 0) { _a = {}; }
            var originBox = _a.originBox, targetBox = _a.targetBox, visibilityAction = _a.visibilityAction, shouldStackAnimate = _a.shouldStackAnimate, onComplete = _a.onComplete, prevParent = _a.prevParent, config = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"]);
            var _b = _this.props, visualElement = _b.visualElement, layout = _b.layout;
            /**
             * Early return if we've been instructed not to animate this render.
             */
            if (shouldStackAnimate === false) {
                _this.isAnimatingTree = false;
                return _this.safeToRemove();
            }
            /**
             * Prioritise tree animations
             */
            if (_this.isAnimatingTree && shouldStackAnimate !== true) {
                return;
            }
            else if (shouldStackAnimate) {
                _this.isAnimatingTree = true;
            }
            /**
             * Allow the measured origin (prev bounding box) and target (actual layout) to be
             * overridden by the provided config.
             */
            origin = originBox || origin;
            target = targetBox || target;
            /**
             * If this element has a projecting parent, there's an opportunity to animate
             * it relatively to that parent rather than relatively to the viewport. This
             * allows us to add orchestrated animations.
             */
            var isRelative = false;
            var projectionParent = visualElement.getProjectionParent();
            if (projectionParent) {
                var prevParentViewportBox = projectionParent.prevViewportBox;
                var parentLayout = projectionParent.getLayoutState().layout;
                /**
                 * If we're being provided a previous parent VisualElement by AnimateSharedLayout
                 */
                if (prevParent) {
                    /**
                     * If we've been provided an explicit target box it means we're animating back
                     * to this previous parent. So we can make a relative box by comparing to the previous
                     * parent's layout
                     */
                    if (targetBox) {
                        parentLayout = prevParent.getLayoutState().layout;
                    }
                    /**
                     * Likewise if we've been provided an explicit origin box it means we're
                     * animating out from a different element. So we should figure out where that was
                     * on screen relative to the new parent element.
                     */
                    if (originBox &&
                        !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.checkIfParentHasChanged)(prevParent, projectionParent) &&
                        prevParent.prevViewportBox) {
                        prevParentViewportBox = prevParent.prevViewportBox;
                    }
                }
                if (prevParentViewportBox) {
                    isRelative = true;
                    origin = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.calcRelativeOffset)(prevParentViewportBox, origin);
                    target = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.calcRelativeOffset)(parentLayout, target);
                }
            }
            var boxHasMoved = hasMoved(origin, target);
            var animations = (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                /**
                 * If layout is set to "position", we can resize the origin box based on the target
                 * box and only animate its position.
                 */
                if (layout === "position") {
                    var targetLength = target[axis].max - target[axis].min;
                    origin[axis].max = origin[axis].min + targetLength;
                }
                if (visualElement.projection.isTargetLocked) {
                    return;
                }
                else if (visibilityAction !== undefined) {
                    visualElement.setVisibility(visibilityAction === _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_5__.VisibilityAction.Show);
                }
                else if (boxHasMoved) {
                    // If the box has moved, animate between it's current visual state and its
                    // final state
                    return _this.animateAxis(axis, target[axis], origin[axis], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, config), { isRelative: isRelative }));
                }
                else {
                    // If the box has remained in the same place, immediately set the axis target
                    // to the final desired state
                    return visualElement.setProjectionTargetAxis(axis, target[axis].min, target[axis].max, isRelative);
                }
            });
            // Force a render to ensure there's no flash of uncorrected bounding box.
            visualElement.syncRender();
            /**
             * If this visualElement isn't present (ie it's been removed from the tree by the user but
             * kept in by the tree by AnimatePresence) then call safeToRemove when all axis animations
             * have successfully finished.
             */
            return Promise.all(animations).then(function () {
                _this.isAnimatingTree = false;
                onComplete && onComplete();
                visualElement.notifyLayoutAnimationComplete();
            });
        };
        return _this;
    }
    Animate.prototype.componentDidMount = function () {
        var _this = this;
        var visualElement = this.props.visualElement;
        visualElement.animateMotionValue = _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_6__.startAnimation;
        visualElement.enableLayoutProjection();
        this.unsubLayoutReady = visualElement.onLayoutUpdate(this.animate);
        visualElement.layoutSafeToRemove = function () { return _this.safeToRemove(); };
        (0,_render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_7__.addScaleCorrection)(_render_dom_projection_default_scale_correctors_js__WEBPACK_IMPORTED_MODULE_8__.defaultScaleCorrectors);
    };
    Animate.prototype.componentWillUnmount = function () {
        var _this = this;
        this.unsubLayoutReady();
        (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) { var _a, _b; return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a); });
    };
    /**
     * TODO: This manually performs animations on the visualElement's layout progress
     * values. It'd be preferable to amend the startLayoutAxisAnimation
     * API to accept more custom animations like this.
     */
    Animate.prototype.animateAxis = function (axis, target, origin, _a) {
        var _this = this;
        var _b, _c;
        var _d = _a === void 0 ? {} : _a, transition = _d.transition, isRelative = _d.isRelative;
        /**
         * If we're not animating to a new target, don't run this animation
         */
        if (this.isAnimating[axis] &&
            axisIsEqual(target, this.currentAnimationTarget[axis])) {
            return;
        }
        (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
        this.isAnimating[axis] = true;
        var visualElement = this.props.visualElement;
        var frameTarget = this.frameTarget[axis];
        var layoutProgress = visualElement.getProjectionAnimationProgress()[axis];
        /**
         * Set layout progress back to 0. We set it twice to hard-reset any velocity that might
         * be re-incoporated into a subsequent spring animation.
         */
        layoutProgress.clearListeners();
        layoutProgress.set(0);
        layoutProgress.set(0);
        /**
         * Create an animation function to run once per frame. This will tween the visual bounding box from
         * origin to target using the latest progress value.
         */
        var frame = function () {
            // Convert the latest layoutProgress, which is a value from 0-1000, into a 0-1 progress
            var p = layoutProgress.get() / progressTarget;
            // Tween the axis and update the visualElement with the latest values
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.tweenAxis)(frameTarget, origin, target, p);
            visualElement.setProjectionTargetAxis(axis, frameTarget.min, frameTarget.max, isRelative);
        };
        // Synchronously run a frame to ensure there's no flash of the uncorrected bounding box.
        frame();
        // Create a function to stop animation on this specific axis
        var unsubscribeProgress = layoutProgress.onChange(frame);
        this.stopAxisAnimation[axis] = function () {
            _this.isAnimating[axis] = false;
            layoutProgress.stop();
            unsubscribeProgress();
        };
        this.currentAnimationTarget[axis] = target;
        var layoutTransition = transition ||
            visualElement.getDefaultTransition() ||
            defaultLayoutTransition;
        // Start the animation on this axis
        var animation = (0,_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_6__.startAnimation)(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, layoutTransition && (0,_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_6__.getValueTransition)(layoutTransition, "layout")).then(this.stopAxisAnimation[axis]);
        return animation;
    };
    Animate.prototype.safeToRemove = function () {
        var _a, _b;
        (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Animate.prototype.render = function () {
        return null;
    };
    return Animate;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
function AnimateLayoutContextProvider(props) {
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_9__.usePresence)(), 2), safeToRemove = _a[1];
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Animate, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, props, { safeToRemove: safeToRemove }));
}
function hasMoved(a, b) {
    return (!isZeroBox(a) &&
        !isZeroBox(b) &&
        (!axisIsEqual(a.x, b.x) || !axisIsEqual(a.y, b.y)));
}
var zeroAxis = { min: 0, max: 0 };
function isZeroBox(a) {
    return axisIsEqual(a.x, zeroAxis) && axisIsEqual(a.y, zeroAxis);
}
function axisIsEqual(a, b) {
    return a.min === b.min && a.max === b.max;
}
var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeasureContextProvider": () => (/* binding */ MeasureContextProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/SharedLayoutContext.js */ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js");




/**
 * This component is responsible for scheduling the measuring of the motion component
 */
var Measure = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Measure, _super);
    function Measure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * If this is a child of a SyncContext, register the VisualElement with it on mount.
     */
    Measure.prototype.componentDidMount = function () {
        var _a = this.props, syncLayout = _a.syncLayout, framerSyncLayout = _a.framerSyncLayout, visualElement = _a.visualElement;
        (0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(syncLayout) && syncLayout.register(visualElement);
        (0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(framerSyncLayout) &&
            framerSyncLayout.register(visualElement);
        visualElement.onUnmount(function () {
            if ((0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(syncLayout)) {
                syncLayout.remove(visualElement);
            }
            if ((0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(framerSyncLayout)) {
                framerSyncLayout.remove(visualElement);
            }
        });
    };
    /**
     * If this is a child of a SyncContext, notify it that it needs to re-render. It will then
     * handle the snapshotting.
     *
     * If it is stand-alone component, add it to the batcher.
     */
    Measure.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if ((0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(syncLayout)) {
            syncLayout.syncUpdate();
        }
        else {
            visualElement.snapshotViewportBox();
            syncLayout.add(visualElement);
        }
        return null;
    };
    Measure.prototype.componentDidUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if (!(0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(syncLayout))
            syncLayout.flush();
        /**
         * If this axis isn't animating as a result of this render we want to reset the targetBox
         * to the measured box
         */
        visualElement.rebaseProjectionTarget();
    };
    Measure.prototype.render = function () {
        return null;
    };
    return Measure;
}(react__WEBPACK_IMPORTED_MODULE_0__.default.Component));
function MeasureContextProvider(props) {
    var syncLayout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.SharedLayoutContext);
    var framerSyncLayout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.FramerTreeLayoutContext);
    return (react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(Measure, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, props, { syncLayout: syncLayout, framerSyncLayout: framerSyncLayout })));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layoutAnimations": () => (/* binding */ layoutAnimations)
/* harmony export */ });
/* harmony import */ var _Animate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animate.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js");
/* harmony import */ var _Measure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Measure.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js");



var layoutAnimations = {
    measureLayout: _Measure_js__WEBPACK_IMPORTED_MODULE_0__.MeasureContextProvider,
    layoutAnimation: _Animate_js__WEBPACK_IMPORTED_MODULE_1__.AnimateLayoutContextProvider,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/utils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcRelativeOffset": () => (/* binding */ calcRelativeOffset),
/* harmony export */   "calcRelativeOffsetAxis": () => (/* binding */ calcRelativeOffsetAxis),
/* harmony export */   "checkIfParentHasChanged": () => (/* binding */ checkIfParentHasChanged),
/* harmony export */   "tweenAxis": () => (/* binding */ tweenAxis)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");


function tweenAxis(target, prev, next, p) {
    target.min = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(prev.min, next.min, p);
    target.max = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(prev.max, next.max, p);
}
function calcRelativeOffsetAxis(parent, child) {
    return {
        min: child.min - parent.min,
        max: child.max - parent.min,
    };
}
function calcRelativeOffset(parent, child) {
    return {
        x: calcRelativeOffsetAxis(parent.x, child.x),
        y: calcRelativeOffsetAxis(parent.y, child.y),
    };
}
function checkIfParentHasChanged(prev, next) {
    var prevId = prev.getLayoutId();
    var nextId = next.getLayoutId();
    return prevId !== nextId || (nextId === undefined && prev !== next);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/use-features.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/use-features.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFeatures": () => (/* binding */ useFeatures)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions.js */ "./node_modules/framer-motion/dist/es/motion/features/definitions.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _context_LazyContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/LazyContext.js */ "./node_modules/framer-motion/dist/es/context/LazyContext.js");







var featureNames = Object.keys(_definitions_js__WEBPACK_IMPORTED_MODULE_2__.featureDefinitions);
var numFeatures = featureNames.length;
/**
 * Load features via renderless components based on the provided MotionProps.
 */
function useFeatures(props, visualElement, preloadedFeatures) {
    var features = [];
    var lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_js__WEBPACK_IMPORTED_MODULE_3__.LazyContext);
    if (!visualElement)
        return null;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */
    if ( true &&
        preloadedFeatures &&
        lazyContext.strict) {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    }
    for (var i = 0; i < numFeatures; i++) {
        var name_1 = featureNames[i];
        var _a = _definitions_js__WEBPACK_IMPORTED_MODULE_2__.featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
        /**
         * It might be possible in the future to use this moment to
         * dynamically request functionality. In initial tests this
         * was producing a lot of duplication amongst bundles.
         */
        if (isEnabled(props) && Component) {
            features.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ key: name_1 }, props, { visualElement: visualElement })));
        }
    }
    return features;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/index.js":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMotionComponent": () => (/* binding */ createMotionComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _features_use_features_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/use-features.js */ "./node_modules/framer-motion/dist/es/motion/features/use-features.js");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_use_visual_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/use-visual-element.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js");
/* harmony import */ var _utils_use_motion_ref_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/use-motion-ref.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js");
/* harmony import */ var _context_MotionContext_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionContext/create.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/create.js");
/* harmony import */ var _features_definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/definitions.js */ "./node_modules/framer-motion/dist/es/motion/features/definitions.js");
/* harmony import */ var _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-browser.js */ "./node_modules/framer-motion/dist/es/utils/is-browser.js");











/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */
function createMotionComponent(_a) {
    var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
    preloadedFeatures && (0,_features_definitions_js__WEBPACK_IMPORTED_MODULE_1__.loadFeatures)(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we're rendering in a static environment, we only visually update the component
         * as a result of a React-rerender rather than interactions or animations. This
         * means we don't need to load additional memory structures like VisualElement,
         * or any gesture/animation features.
         */
        var isStatic = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__.MotionConfigContext).isStatic;
        var features = null;
        /**
         * Create the tree context. This is memoized and will only trigger renders
         * when the current tree variant changes in static mode.
         */
        var context = (0,_context_MotionContext_create_js__WEBPACK_IMPORTED_MODULE_3__.useCreateMotionContext)(props, isStatic);
        /**
         *
         */
        var visualState = useVisualState(props, isStatic);
        if (!isStatic && _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_4__.isBrowser) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = (0,_utils_use_visual_element_js__WEBPACK_IMPORTED_MODULE_5__.useVisualElement)(Component, visualState, props, createVisualElement);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             *
             * TODO: The intention is to move these away from a React-centric to a
             * VisualElement-centric lifecycle scheme.
             */
            features = (0,_features_use_features_js__WEBPACK_IMPORTED_MODULE_6__.useFeatures)(props, context.visualElement, preloadedFeatures);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_7__.MotionContext.Provider, { value: context }, useRender(Component, props, (0,_utils_use_motion_ref_js__WEBPACK_IMPORTED_MODULE_8__.useMotionRef)(visualState, context.visualElement, externalRef), visualState, isStatic)),
            features));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(MotionComponent);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isForcedMotionValue": () => (/* binding */ isForcedMotionValue)
/* harmony export */ });
/* harmony import */ var _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony import */ var _render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");



function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return ((0,_render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__.isTransformProp)(key) ||
        (0,_render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__.isTransformOriginProp)(key) ||
        ((layout || layoutId !== undefined) &&
            (!!_render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_1__.valueScaleCorrection[key] || key === "opacity")));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeRenderlessComponent": () => (/* binding */ makeRenderlessComponent)
/* harmony export */ });
var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMotionRef": () => (/* binding */ useMotionRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is-ref-object.js */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js");



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (instance) {
        var _a;
        instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if ((0,_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_1__.isRefObject)(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, [visualElement]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVisualElement": () => (/* binding */ useVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony import */ var _context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/LayoutGroupContext.js */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _context_LazyContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/LazyContext.js */ "./node_modules/framer-motion/dist/es/context/LazyContext.js");










function useLayoutId(_a) {
    var layoutId = _a.layoutId;
    var layoutGroupId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_1__.LayoutGroupContext);
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}
function useVisualElement(Component, visualState, props, createVisualElement) {
    var config = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__.MotionConfigContext);
    var lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_js__WEBPACK_IMPORTED_MODULE_3__.LazyContext);
    var parent = (0,_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_4__.useVisualElementContext)();
    var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_5__.PresenceContext);
    var layoutId = useLayoutId(props);
    var visualElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    if (!createVisualElement)
        createVisualElement = lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState: visualState,
            parent: parent,
            props: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, props), { layoutId: layoutId }),
            presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
            blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
        });
    }
    var visualElement = visualElementRef.current;
    (0,_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsomorphicLayoutEffect)(function () {
        if (!visualElement)
            return;
        visualElement.setProps((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, config), props), { layoutId: layoutId }));
        visualElement.isPresent = (0,_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_8__.isPresent)(presenceContext);
        visualElement.isPresenceRoot =
            !parent || parent.presenceId !== (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id);
        /**
         * Fire a render to ensure the latest state is reflected on-screen.
         */
        visualElement.syncRender();
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var _a;
        if (!visualElement)
            return;
        /**
         * In a future refactor we can replace the features-as-components and
         * have this loop through them all firing "effect" listeners
         */
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
    });
    (0,_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsomorphicLayoutEffect)(function () { return function () { return visualElement === null || visualElement === void 0 ? void 0 : visualElement.notifyUnmount(); }; }, []);
    return visualElement;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUseVisualState": () => (/* binding */ makeUseVisualState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _render_utils_variants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/utils/variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");
/* harmony import */ var _value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");









function makeState(_a, props, context, presenceContext) {
    var scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
    var state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = function (instance) { return onMount(props, instance, state); };
    }
    return state;
}
var makeUseVisualState = function (config) { return function (props, isStatic) {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_1__.MotionContext);
    var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_2__.PresenceContext);
    return isStatic
        ? makeState(config, props, context, presenceContext)
        : (0,_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__.useConstant)(function () { return makeState(config, props, context, presenceContext); });
}; };
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    var values = {};
    var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
    var motionValues = scrapeMotionValues(props);
    for (var key in motionValues) {
        values[key] = (0,_value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_4__.resolveMotionValue)(motionValues[key]);
    }
    var initial = props.initial, animate = props.animate;
    var isControllingVariants = (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_5__.checkIfControllingVariants)(props);
    var isVariantNode = (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_5__.checkIfVariantNode)(props);
    if (context &&
        isVariantNode &&
        !isControllingVariants &&
        props.inherit !== false) {
        initial !== null && initial !== void 0 ? initial : (initial = context.initial);
        animate !== null && animate !== void 0 ? animate : (animate = context.animate);
    }
    var variantToSet = blockInitialAnimation || initial === false ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !(0,_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_6__.isAnimationControls)(variantToSet)) {
        var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach(function (definition) {
            var resolved = (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_5__.resolveVariantFromProps)(props, definition);
            if (!resolved)
                return;
            var transitionEnd = resolved.transitionEnd; resolved.transition; var target = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(resolved, ["transitionEnd", "transition"]);
            for (var key in target)
                values[key] = target[key];
            for (var key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidMotionProp": () => (/* binding */ isValidMotionProp)
/* harmony export */ });
/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "onLayoutAnimationComplete",
    "onViewportBoxUpdate",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "whileDrag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomVisualElement": () => (/* binding */ createDomVisualElement)
/* harmony export */ });
/* harmony import */ var _html_visual_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/visual-element.js */ "./node_modules/framer-motion/dist/es/render/html/visual-element.js");
/* harmony import */ var _svg_visual_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/visual-element.js */ "./node_modules/framer-motion/dist/es/render/svg/visual-element.js");
/* harmony import */ var _utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is-svg-component.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js");




var createDomVisualElement = function (Component, options) {
    return (0,_utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? (0,_svg_visual_element_js__WEBPACK_IMPORTED_MODULE_1__.svgVisualElement)(options, { enableHardwareAcceleration: false })
        : (0,_html_visual_element_js__WEBPACK_IMPORTED_MODULE_2__.htmlVisualElement)(options, { enableHardwareAcceleration: true });
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMotionProxy": () => (/* binding */ createMotionProxy)
/* harmony export */ });
/* harmony import */ var _motion_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/index.js */ "./node_modules/framer-motion/dist/es/motion/index.js");


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig) {
        if (customMotionComponentConfig === void 0) { customMotionComponentConfig = {}; }
        return (0,_motion_index_js__WEBPACK_IMPORTED_MODULE_0__.createMotionComponent)(createConfig(Component, customMotionComponentConfig));
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    var componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: function (_target, key) {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomMotionComponent": () => (/* binding */ createDomMotionComponent),
/* harmony export */   "motion": () => (/* binding */ motion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _motion_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../motion/index.js */ "./node_modules/framer-motion/dist/es/motion/index.js");
/* harmony import */ var _motion_proxy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motion-proxy.js */ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js");
/* harmony import */ var _utils_create_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/create-config.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js");
/* harmony import */ var _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/features/gestures.js */ "./node_modules/framer-motion/dist/es/motion/features/gestures.js");
/* harmony import */ var _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/features/animations.js */ "./node_modules/framer-motion/dist/es/motion/features/animations.js");
/* harmony import */ var _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../motion/features/drag.js */ "./node_modules/framer-motion/dist/es/motion/features/drag.js");
/* harmony import */ var _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../motion/features/layout/index.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/index.js");
/* harmony import */ var _create_visual_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-visual-element.js */ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js");










var featureBundle = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_1__.animations), _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_2__.gestureAnimations), _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_3__.drag), _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_4__.layoutAnimations);
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/ (0,_motion_proxy_js__WEBPACK_IMPORTED_MODULE_5__.createMotionProxy)(function (Component, config) {
    return (0,_utils_create_config_js__WEBPACK_IMPORTED_MODULE_6__.createDomMotionConfig)(Component, config, featureBundle, _create_visual_element_js__WEBPACK_IMPORTED_MODULE_7__.createDomVisualElement);
});
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
    return (0,_motion_index_js__WEBPACK_IMPORTED_MODULE_8__.createMotionComponent)((0,_utils_create_config_js__WEBPACK_IMPORTED_MODULE_6__.createDomMotionConfig)(key, { forwardMotionProps: false }, featureBundle, _create_visual_element_js__WEBPACK_IMPORTED_MODULE_7__.createDomVisualElement));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctBorderRadius": () => (/* binding */ correctBorderRadius),
/* harmony export */   "correctBoxShadow": () => (/* binding */ correctBoxShadow),
/* harmony export */   "defaultScaleCorrectors": () => (/* binding */ defaultScaleCorrectors),
/* harmony export */   "pixelsToPercent": () => (/* binding */ pixelsToPercent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var _utils_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css-variables-conversion.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js");





function pixelsToPercent(pixels, axis) {
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
function correctBorderRadius(latest, _layoutState, _a) {
    var target = _a.target;
    /**
     * If latest is a string, if it's a percentage we can return immediately as it's
     * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
     */
    if (typeof latest === "string") {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.test(latest)) {
            latest = parseFloat(latest);
        }
        else {
            return latest;
        }
    }
    /**
     * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
     * pixel value as a percentage of each axis
     */
    var x = pixelsToPercent(latest, target.x);
    var y = pixelsToPercent(latest, target.y);
    return x + "% " + y + "%";
}
var varToken = "_$css";
function correctBoxShadow(latest, _a) {
    var delta = _a.delta, treeScale = _a.treeScale;
    var original = latest;
    /**
     * We need to first strip and store CSS variables from the string.
     */
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
        latest = latest.replace(_utils_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_1__.cssVariableRegex, function (match) {
            cssVariables.push(match);
            return varToken;
        });
    }
    var shadow = style_value_types__WEBPACK_IMPORTED_MODULE_2__.complex.parse(latest);
    // TODO: Doesn't support multiple shadows
    if (shadow.length > 5)
        return original;
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_2__.complex.createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    // Calculate the overall context scale
    var xScale = delta.x.scale * treeScale.x;
    var yScale = delta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    /**
     * Ideally we'd correct x and y scales individually, but because blur and
     * spread apply to both we have to take a scale average and apply that instead.
     * We could potentially improve the outcome of this by incorporating the ratio between
     * the two scales.
     */
    var averageScale = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.mix)(xScale, yScale, 0.5);
    // Blur
    if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
    // Spread
    if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
        var i_1 = 0;
        output = output.replace(varToken, function () {
            var cssVariable = cssVariables[i_1];
            i_1++;
            return cssVariable;
        });
    }
    return output;
}
var borderCorrectionDefinition = {
    process: correctBorderRadius,
};
var defaultScaleCorrectors = {
    borderRadius: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, borderCorrectionDefinition), { applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ] }),
    borderTopLeftRadius: borderCorrectionDefinition,
    borderTopRightRadius: borderCorrectionDefinition,
    borderBottomLeftRadius: borderCorrectionDefinition,
    borderBottomRightRadius: borderCorrectionDefinition,
    boxShadow: {
        process: correctBoxShadow,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/measure.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBoundingBox": () => (/* binding */ getBoundingBox)
/* harmony export */ });
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");


/**
 * Measure and return the element bounding box.
 *
 * We convert the box into an AxisBox2D to make it easier to work with each axis
 * individually and programmatically.
 *
 * This function optionally accepts a transformPagePoint function which allows us to compensate
 * for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
 */
function getBoundingBox(element, transformPagePoint) {
    var box = element.getBoundingClientRect();
    return (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.convertBoundingBoxToAxisBox)((0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.transformBoundingBox)(box, transformPagePoint));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScaleCorrection": () => (/* binding */ addScaleCorrection),
/* harmony export */   "valueScaleCorrection": () => (/* binding */ valueScaleCorrection)
/* harmony export */ });
var valueScaleCorrection = {};
/**
 * @internal
 */
function addScaleCorrection(correctors) {
    for (var key in correctors) {
        valueScaleCorrection[key] = correctors[key];
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/use-render.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/use-render.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUseRender": () => (/* binding */ createUseRender)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _html_use_props_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/use-props.js */ "./node_modules/framer-motion/dist/es/render/html/use-props.js");
/* harmony import */ var _utils_filter_props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/filter-props.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js");
/* harmony import */ var _utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-svg-component.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js");
/* harmony import */ var _svg_use_props_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/use-props.js */ "./node_modules/framer-motion/dist/es/render/svg/use-props.js");







function createUseRender(forwardMotionProps) {
    if (forwardMotionProps === void 0) { forwardMotionProps = false; }
    var useRender = function (Component, props, ref, _a, isStatic) {
        var latestValues = _a.latestValues;
        var useVisualProps = (0,_utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_1__.isSVGComponent)(Component)
            ? _svg_use_props_js__WEBPACK_IMPORTED_MODULE_2__.useSVGProps
            : _html_use_props_js__WEBPACK_IMPORTED_MODULE_3__.useHTMLProps;
        var visualProps = useVisualProps(props, latestValues, isStatic);
        var filteredProps = (0,_utils_filter_props_js__WEBPACK_IMPORTED_MODULE_4__.filterProps)(props, typeof Component === "string", forwardMotionProps);
        var elementProps = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, filteredProps), visualProps), { ref: ref });
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, elementProps);
    };
    return useRender;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelToDash": () => (/* binding */ camelToDash)
/* harmony export */ });
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomMotionConfig": () => (/* binding */ createDomMotionConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_svg_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-svg-component.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js");
/* harmony import */ var _use_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../use-render.js */ "./node_modules/framer-motion/dist/es/render/dom/use-render.js");
/* harmony import */ var _svg_config_motion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/config-motion.js */ "./node_modules/framer-motion/dist/es/render/svg/config-motion.js");
/* harmony import */ var _html_config_motion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/config-motion.js */ "./node_modules/framer-motion/dist/es/render/html/config-motion.js");






function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement) {
    var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
    var baseConfig = (0,_is_svg_component_js__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? _svg_config_motion_js__WEBPACK_IMPORTED_MODULE_1__.svgMotionConfig
        : _html_config_motion_js__WEBPACK_IMPORTED_MODULE_2__.htmlMotionConfig;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, baseConfig), { preloadedFeatures: preloadedFeatures, useRender: (0,_use_render_js__WEBPACK_IMPORTED_MODULE_4__.createUseRender)(forwardMotionProps), createVisualElement: createVisualElement,
        Component: Component });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssVariableRegex": () => (/* binding */ cssVariableRegex),
/* harmony export */   "parseCSSVariable": () => (/* binding */ parseCSSVariable),
/* harmony export */   "resolveCSSVariables": () => (/* binding */ resolveCSSVariables)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");



function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved.trim();
    }
    else if (isCSSVariable(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, _a, transitionEnd) {
    var _b;
    var target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, []);
    var element = visualElement.getInstance();
    if (!(element instanceof HTMLElement))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.forEachValue(function (value) {
        var current = value.get();
        if (!isCSSVariable(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd)
            (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
    }
    return { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterProps": () => (/* binding */ filterProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/valid-prop.js */ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js");


var shouldForward = function (key) { return !(0,_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js").default;
    shouldForward = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !(0,_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for (var key in props) {
        if (shouldForward(key) ||
            (forwardMotionProps === true && (0,_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            (!isDom && !(0,_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCSSVariable": () => (/* binding */ isCSSVariable)
/* harmony export */ });
/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
    return key.startsWith("--");
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSVGComponent": () => (/* binding */ isSVGComponent)
/* harmony export */ });
/* harmony import */ var _svg_lowercase_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/lowercase-elements.js */ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js");


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    _svg_lowercase_elements_js__WEBPACK_IMPORTED_MODULE_0__.lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDomVariant": () => (/* binding */ parseDomVariant)
/* harmony export */ });
/* harmony import */ var _css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-variables-conversion.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js");
/* harmony import */ var _unit_conversion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-conversion.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js");



/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
    var resolved = (0,_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_0__.resolveCSSVariables)(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return (0,_unit_conversion_js__WEBPACK_IMPORTED_MODULE_1__.unitConversion)(visualElement, target, origin, transitionEnd);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundingBoxDimension": () => (/* binding */ BoundingBoxDimension),
/* harmony export */   "unitConversion": () => (/* binding */ unitConversion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../animation/utils/is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../value-types/dimensions.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js");







var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_1__.number || v === style_value_types__WEBPACK_IMPORTED_MODULE_2__.px;
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) { return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
        return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
}; };
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_3__.transformProps.filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.syncRender();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a) {
        var x = _a.x;
        return x.max - x.min;
    },
    height: function (_a) {
        var y = _a.y;
        return y.max - y.min;
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var y = _a.y;
        var top = _b.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function (_a, _b) {
        var x = _a.x;
        var left = _b.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, visualElement, changedKeys) {
    var originBbox = visualElement.measureViewportBox();
    var element = visualElement.getInstance();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.syncRender();
    var targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = visualElement.getValue(key);
        setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
    if (origin === void 0) { origin = {}; }
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, target);
    transitionEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        var from = origin[key];
        var to = target[key];
        var fromType = (0,_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(from);
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if ((0,_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_6__.isKeyframesTarget)(to)) {
            var numKeyframes = to.length;
            for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
                if (!toType) {
                    toType = (0,_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to[i]);
                    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)((0,_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = (0,_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_2__.px) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues = removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(_a, 2), key = _b[0], value = _b[1];
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.syncRender();
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnimatableNone": () => (/* binding */ getAnimatableNone)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/filter.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js");



function getAnimatableNone(key, value) {
    var _a;
    var defaultValueType = (0,_defaults_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultValueType)(key);
    if (defaultValueType !== style_value_types__WEBPACK_IMPORTED_MODULE_1__.filter)
        defaultValueType = style_value_types__WEBPACK_IMPORTED_MODULE_2__.complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultValueTypes": () => (/* binding */ defaultValueTypes),
/* harmony export */   "getDefaultValueType": () => (/* binding */ getDefaultValueType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/filter.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js");




/**
 * A map of default value types for common values
 */
var defaultValueTypes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _number_js__WEBPACK_IMPORTED_MODULE_1__.numberValueTypes), { 
    // Color props
    color: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, fill: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, stroke: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, 
    // Border props
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, filter: style_value_types__WEBPACK_IMPORTED_MODULE_3__.filter, WebkitFilter: style_value_types__WEBPACK_IMPORTED_MODULE_3__.filter });
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function (key) { return defaultValueTypes[key]; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dimensionValueTypes": () => (/* binding */ dimensionValueTypes),
/* harmony export */   "findDimensionValueType": () => (/* binding */ findDimensionValueType)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js");
/* harmony import */ var _type_auto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-auto.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js");




/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__.number, style_value_types__WEBPACK_IMPORTED_MODULE_1__.px, style_value_types__WEBPACK_IMPORTED_MODULE_1__.percent, style_value_types__WEBPACK_IMPORTED_MODULE_1__.degrees, style_value_types__WEBPACK_IMPORTED_MODULE_1__.vw, style_value_types__WEBPACK_IMPORTED_MODULE_1__.vh, _type_auto_js__WEBPACK_IMPORTED_MODULE_2__.auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function (v) {
    return dimensionValueTypes.find((0,_test_js__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/find.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findValueType": () => (/* binding */ findValueType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _dimensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimensions.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js");





/**
 * A list of all ValueTypes
 */
var valueTypes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_dimensions_js__WEBPACK_IMPORTED_MODULE_1__.dimensionValueTypes)), [style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, style_value_types__WEBPACK_IMPORTED_MODULE_3__.complex]);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function (v) { return valueTypes.find((0,_test_js__WEBPACK_IMPORTED_MODULE_4__.testValueType)(v)); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValueAsType": () => (/* binding */ getValueAsType)
/* harmony export */ });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/number.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberValueTypes": () => (/* binding */ numberValueTypes)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _type_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-int.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js");



var numberValueTypes = {
    // Border props
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Positioning props
    width: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    height: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    size: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    top: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    right: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    left: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Spacing props
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Transform props
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    x: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    y: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    z: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    transformPerspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Misc
    zIndex: _type_int_js__WEBPACK_IMPORTED_MODULE_2__.int,
    // SVG
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    numOctaves: _type_int_js__WEBPACK_IMPORTED_MODULE_2__.int,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/test.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testValueType": () => (/* binding */ testValueType)
/* harmony export */ });
/**
 * Tests a provided value against a ValueType
 */
var testValueType = function (v) { return function (type) { return type.test(v); }; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auto": () => (/* binding */ auto)
/* harmony export */ });
/**
 * ValueType for "auto"
 */
var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "int": () => (/* binding */ int)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.js");



var int = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, style_value_types__WEBPACK_IMPORTED_MODULE_1__.number), { transform: Math.round });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/config-motion.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/config-motion.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlMotionConfig": () => (/* binding */ htmlMotionConfig)
/* harmony export */ });
/* harmony import */ var _motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js");




var htmlMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__.createHtmlRenderState,
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/use-props.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/use-props.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyRawValuesOnly": () => (/* binding */ copyRawValuesOnly),
/* harmony export */   "useHTMLProps": () => (/* binding */ useHTMLProps),
/* harmony export */   "useStyle": () => (/* binding */ useStyle)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/is-forced-motion-value.js */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js");







function copyRawValuesOnly(target, source, props) {
    for (var key in source) {
        if (!(0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(source[key]) && !(0,_motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_2__.isForcedMotionValue)(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues(_a, visualState, isStatic) {
    var transformTemplate = _a.transformTemplate;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var state = (0,_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_3__.createHtmlRenderState)();
        (0,_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__.buildHTMLStyles)(state, visualState, undefined, undefined, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        var vars = state.vars, style = state.style;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, vars), style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    var styleProp = props.style || {};
    var style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    if (props.transformValues) {
        style = props.transformValues(style);
    }
    return style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    var htmlProps = {};
    var style = useStyle(props, visualState, isStatic);
    if (Boolean(props.drag)) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout =
            "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : "pan-" + (props.drag === "x" ? "y" : "x");
    }
    htmlProps.style = style;
    return htmlProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildLayoutProjectionTransform": () => (/* binding */ buildLayoutProjectionTransform),
/* harmony export */   "buildLayoutProjectionTransformOrigin": () => (/* binding */ buildLayoutProjectionTransformOrigin),
/* harmony export */   "identityProjection": () => (/* binding */ identityProjection)
/* harmony export */ });
/* harmony import */ var _utils_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/state.js */ "./node_modules/framer-motion/dist/es/render/utils/state.js");


/**
 * Build a transform style that takes a calculated delta between the element's current
 * space on screen and projects it into the desired space.
 */
function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
    var x = _a.x, y = _a.y;
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    var xTranslate = x.translate / treeScale.x;
    var yTranslate = y.translate / treeScale.y;
    var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
    if (latestTransform) {
        var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
        if (rotate)
            transform += "rotate(" + rotate + ") ";
        if (rotateX)
            transform += "rotateX(" + rotateX + ") ";
        if (rotateY)
            transform += "rotateY(" + rotateY + ") ";
    }
    transform += "scale(" + x.scale + ", " + y.scale + ")";
    return !latestTransform && transform === identityProjection ? "" : transform;
}
/**
 * Take the calculated delta origin and apply it as a transform string.
 */
function buildLayoutProjectionTransformOrigin(_a) {
    var deltaFinal = _a.deltaFinal;
    return deltaFinal.x.origin * 100 + "% " + deltaFinal.y.origin * 100 + "% 0";
}
var identityProjection = buildLayoutProjectionTransform(_utils_state_js__WEBPACK_IMPORTED_MODULE_0__.zeroLayout.delta, _utils_state_js__WEBPACK_IMPORTED_MODULE_0__.zeroLayout.treeScale, { x: 1, y: 1 });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHTMLStyles": () => (/* binding */ buildHTMLStyles)
/* harmony export */ });
/* harmony import */ var _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony import */ var _build_transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./build-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js");
/* harmony import */ var _dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js");
/* harmony import */ var _dom_value_types_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/number.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js");







function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var _a;
    var style = state.style, vars = state.vars, transform = state.transform, transformKeys = state.transformKeys, transformOrigin = state.transformOrigin;
    // Empty the transformKeys array. As we're throwing out refs to its items
    // this might not be as cheap as suspected. Maybe using the array as a buffer
    // with a manual incrementation would be better.
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    var transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (var key in latestValues) {
        var value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if ((0,_dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_0__.isCSSVariable)(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = _dom_value_types_number_js__WEBPACK_IMPORTED_MODULE_1__.numberValueTypes[key];
        var valueAsType = (0,_dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_2__.getValueAsType)(value, valueType);
        if ((0,_transform_js__WEBPACK_IMPORTED_MODULE_3__.isTransformProp)(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
                transformIsNone = false;
        }
        else if ((0,_transform_js__WEBPACK_IMPORTED_MODULE_3__.isTransformOriginProp)(key)) {
            transformOrigin[key] = valueAsType;
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
        }
        else {
            /**
             * If layout projection is on, and we need to perform scale correction for this
             * value type, perform it.
             */
            if (layoutState &&
                projection &&
                layoutState.isHydrated &&
                _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_4__.valueScaleCorrection[key]) {
                var correctedValue = _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_4__.valueScaleCorrection[key].process(value, layoutState, projection);
                /**
                 * Scale-correctable values can define a number of other values to break
                 * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
                 */
                var applyTo = _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_4__.valueScaleCorrection[key].applyTo;
                if (applyTo) {
                    var num = applyTo.length;
                    for (var i = 0; i < num; i++) {
                        style[applyTo[i]] = correctedValue;
                    }
                }
                else {
                    style[key] = correctedValue;
                }
            }
            else {
                style[key] = valueAsType;
            }
        }
    }
    if (layoutState &&
        projection &&
        buildProjectionTransform &&
        buildProjectionTransformOrigin) {
        style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : undefined);
        if (transformTemplate) {
            style.transform = transformTemplate(transform, style.transform);
        }
        style.transformOrigin = buildProjectionTransformOrigin(layoutState);
    }
    else {
        if (hasTransform) {
            style.transform = (0,_build_transform_js__WEBPACK_IMPORTED_MODULE_5__.buildTransform)(state, options, transformIsNone, transformTemplate);
        }
        if (hasTransformOrigin) {
            style.transformOrigin = (0,_build_transform_js__WEBPACK_IMPORTED_MODULE_5__.buildTransformOrigin)(transformOrigin);
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTransform": () => (/* binding */ buildTransform),
/* harmony export */   "buildTransformOrigin": () => (/* binding */ buildTransformOrigin)
/* harmony export */ });
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");


var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
    var transform = _a.transform, transformKeys = _a.transformKeys;
    var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
    // The transform string we're going to build into.
    var transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(_transform_js__WEBPACK_IMPORTED_MODULE_0__.sortTransformProps);
    // Track whether the defined transform has a defined z so we don't add a
    // second to enable hardware acceleration
    var transformHasZ = false;
    // Loop over each transform and build them into transformString
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        if (key === "z")
            transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += "translateZ(0)";
    }
    else {
        transformString = transformString.trim();
    }
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return originX + " " + originY + " " + originZ;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHtmlRenderState": () => (/* binding */ createHtmlRenderState)
/* harmony export */ });
var createHtmlRenderState = function () { return ({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
}); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/render.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/render.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHTML": () => (/* binding */ renderHTML)
/* harmony export */ });
function renderHTML(element, _a) {
    var style = _a.style, vars = _a.vars;
    // Directly assign style into the Element's style prop. In tests Object.assign is the
    // fastest way to assign styles.
    Object.assign(element.style, style);
    // Loop over any CSS variables and assign those.
    for (var key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrapeMotionValuesFromProps": () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.js */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");



function scrapeMotionValuesFromProps(props) {
    var style = props.style;
    var newValues = {};
    for (var key in style) {
        if ((0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(style[key]) || (0,_motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_1__.isForcedMotionValue)(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/transform.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTransformOriginProp": () => (/* binding */ isTransformOriginProp),
/* harmony export */   "isTransformProp": () => (/* binding */ isTransformProp),
/* harmony export */   "sortTransformProps": () => (/* binding */ sortTransformProps),
/* harmony export */   "transformAxes": () => (/* binding */ transformAxes),
/* harmony export */   "transformProps": () => (/* binding */ transformProps)
/* harmony export */ });
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["translate", "scale", "rotate", "skew"];
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
    return transformAxes.forEach(function (axesKey) {
        return transformProps.push(operationKey + axesKey);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
    return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/visual-element.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/visual-element.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComputedStyle": () => (/* binding */ getComputedStyle),
/* harmony export */   "htmlConfig": () => (/* binding */ htmlConfig),
/* harmony export */   "htmlVisualElement": () => (/* binding */ htmlVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../index.js */ "./node_modules/framer-motion/dist/es/render/index.js");
/* harmony import */ var _utils_setters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/setters.js */ "./node_modules/framer-motion/dist/es/render/utils/setters.js");
/* harmony import */ var _dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/projection/measure.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js");
/* harmony import */ var _utils_build_styles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/build-styles.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js");
/* harmony import */ var _dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/utils/is-css-variable.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js");
/* harmony import */ var _dom_utils_parse_dom_variant_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/parse-dom-variant.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js");
/* harmony import */ var _utils_transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/render.js */ "./node_modules/framer-motion/dist/es/render/html/utils/render.js");
/* harmony import */ var _dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/value-types/defaults.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js");
/* harmony import */ var _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/build-projection-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js");













function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
var htmlConfig = {
    treeType: "dom",
    readValueFromInstance: function (domElement, key) {
        if ((0,_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__.isTransformProp)(key)) {
            var defaultType = (0,_dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            var computedStyle = getComputedStyle(domElement);
            return (((0,_dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_2__.isCSSVariable)(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0);
        }
    },
    sortNodePosition: function (a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    },
    getBaseTarget: function (props, key) {
        var _a;
        return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
    },
    measureViewportBox: function (element, _a) {
        var transformPagePoint = _a.transformPagePoint;
        return (0,_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_3__.getBoundingBox)(element, transformPagePoint);
    },
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    resetTransform: function (element, domElement, props) {
        /**
         * When we reset the transform of an element, there's a fair possibility that
         * the element will visually move from underneath the pointer, triggering attached
         * pointerenter/leave events. We temporarily suspend these while measurement takes place.
         */
        element.suspendHoverEvents();
        var transformTemplate = props.transformTemplate;
        domElement.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        // Ensure that whatever happens next, we restore our transform on the next frame
        element.scheduleRender();
    },
    restoreTransform: function (instance, mutableState) {
        instance.style.transform = mutableState.style.transform;
    },
    removeValueFromRenderState: function (key, _a) {
        var vars = _a.vars, style = _a.style;
        delete vars[key];
        delete style[key];
    },
    /**
     * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
     * can be animated by Motion.
     */
    makeTargetAnimatable: function (element, _a, _b, isMounted) {
        var transformValues = _b.transformValues;
        if (isMounted === void 0) { isMounted = true; }
        var transition = _a.transition, transitionEnd = _a.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["transition", "transitionEnd"]);
        var origin = (0,_utils_setters_js__WEBPACK_IMPORTED_MODULE_5__.getOrigin)(target, transition || {}, element);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            (0,_utils_setters_js__WEBPACK_IMPORTED_MODULE_5__.checkTargetForNewValues)(element, target, origin);
            var parsed = (0,_dom_utils_parse_dom_variant_js__WEBPACK_IMPORTED_MODULE_6__.parseDomVariant)(element, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ transition: transition,
            transitionEnd: transitionEnd }, target);
    },
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps,
    build: function (element, renderState, latestValues, projection, layoutState, options, props) {
        if (element.isVisible !== undefined) {
            renderState.style.visibility = element.isVisible
                ? "visible"
                : "hidden";
        }
        var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
        (0,_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_8__.buildHTMLStyles)(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__.buildLayoutProjectionTransform : undefined, isProjectionTranform
            ? _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__.buildLayoutProjectionTransformOrigin
            : undefined);
    },
    render: _utils_render_js__WEBPACK_IMPORTED_MODULE_10__.renderHTML,
};
var htmlVisualElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_11__.visualElement)(htmlConfig);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/index.js":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visualElement": () => (/* binding */ visualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/AnimateSharedLayout/types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/geometry/delta-apply.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/geometry/delta-calc.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js");
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html/utils/build-projection-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js");
/* harmony import */ var _utils_animation_state_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/animation-state.js */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js");
/* harmony import */ var _utils_lifecycles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/lifecycles.js */ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.js");
/* harmony import */ var _utils_motion_values_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/motion-values.js */ "./node_modules/framer-motion/dist/es/render/utils/motion-values.js");
/* harmony import */ var _utils_projection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/projection.js */ "./node_modules/framer-motion/dist/es/render/utils/projection.js");
/* harmony import */ var _utils_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/state.js */ "./node_modules/framer-motion/dist/es/render/utils/state.js");
/* harmony import */ var _utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/flat-tree.js */ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.js");
/* harmony import */ var _utils_variants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");



















var visualElement = function (_a) {
    var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, resetTransform = _a.resetTransform, restoreTransform = _a.restoreTransform, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps;
    return function (_a, options) {
        var parent = _a.parent, props = _a.props, presenceId = _a.presenceId, blockInitialAnimation = _a.blockInitialAnimation, visualState = _a.visualState;
        if (options === void 0) { options = {}; }
        var latestValues = visualState.latestValues, renderState = visualState.renderState;
        /**
         * The instance of the render-specific node that will be hydrated by the
         * exposed React ref. So for example, this visual element can host a
         * HTMLElement, plain object, or Three.js object. The functions provided
         * in VisualElementConfig allow us to interface with this instance.
         */
        var instance;
        /**
         * Manages the subscriptions for a visual element's lifecycle, for instance
         * onRender and onViewportBoxUpdate.
         */
        var lifecycles = (0,_utils_lifecycles_js__WEBPACK_IMPORTED_MODULE_1__.createLifecycles)();
        /**
         *
         */
        var projection = (0,_utils_state_js__WEBPACK_IMPORTED_MODULE_2__.createProjectionState)();
        /**
         * A reference to the nearest projecting parent. This is either
         * undefined if we haven't looked for the nearest projecting parent,
         * false if there is no parent performing layout projection, or a reference
         * to the projecting parent.
         */
        var projectionParent;
        /**
         * This is a reference to the visual state of the "lead" visual element.
         * Usually, this will be this visual element. But if it shares a layoutId
         * with other visual elements, only one of them will be designated lead by
         * AnimateSharedLayout. All the other visual elements will take on the visual
         * appearance of the lead while they crossfade to it.
         */
        var leadProjection = projection;
        var leadLatestValues = latestValues;
        var unsubscribeFromLeadVisualElement;
        /**
         * The latest layout measurements and calculated projections. This
         * is seperate from the target projection data in visualState as
         * many visual elements might point to the same piece of visualState as
         * a target, whereas they might each have different layouts and thus
         * projection calculations needed to project into the same viewport box.
         */
        var layoutState = (0,_utils_state_js__WEBPACK_IMPORTED_MODULE_2__.createLayoutState)();
        /**
         *
         */
        var crossfader;
        /**
         * Keep track of whether the viewport box has been updated since the
         * last time the layout projection was re-calculated.
         */
        var hasViewportBoxUpdated = false;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        var values = new Map();
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        var valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        var prevMotionValues = {};
        /**
         * x/y motion values that track the progress of initiated layout
         * animations.
         *
         * TODO: Target for removal
         */
        var projectionTargetProgress;
        /**
         * When values are removed from all animation props we need to search
         * for a fallback value to animate to. These values are tracked in baseTarget.
         */
        var baseTarget = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, latestValues);
        // Internal methods ========================
        /**
         * On mount, this will be hydrated with a callback to disconnect
         * this visual element from its parent on unmount.
         */
        var removeFromVariantTree;
        /**
         *
         */
        function isProjecting() {
            return projection.isEnabled && layoutState.isHydrated;
        }
        /**
         *
         */
        function render() {
            if (!instance)
                return;
            if (isProjecting()) {
                /**
                 * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
                 * This is the final box that we will then project into by calculating a transform delta and
                 * applying it to the corrected box.
                 */
                (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_4__.applyBoxTransforms)(leadProjection.targetFinal, leadProjection.target, leadLatestValues);
                /**
                 * Update the delta between the corrected box and the final target box, after
                 * user-set transforms are applied to it. This will be used by the renderer to
                 * create a transform style that will reproject the element from its actual layout
                 * into the desired bounding box.
                 */
                (0,_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_5__.updateBoxDelta)(layoutState.deltaFinal, layoutState.layoutCorrected, leadProjection.targetFinal, latestValues);
            }
            triggerBuild();
            renderInstance(instance, renderState);
        }
        function triggerBuild() {
            var valuesToRender = latestValues;
            if (crossfader && crossfader.isActive()) {
                var crossfadedValues = crossfader.getCrossfadeState(element);
                if (crossfadedValues)
                    valuesToRender = crossfadedValues;
            }
            build(element, renderState, valuesToRender, leadProjection, layoutState, options, props);
        }
        function update() {
            lifecycles.notifyUpdate(latestValues);
        }
        function updateLayoutProjection() {
            var delta = layoutState.delta, treeScale = layoutState.treeScale;
            var prevTreeScaleX = treeScale.x;
            var prevTreeScaleY = treeScale.x;
            var prevDeltaTransform = layoutState.deltaTransform;
            (0,_utils_projection_js__WEBPACK_IMPORTED_MODULE_6__.updateLayoutDeltas)(layoutState, leadProjection, element.path, latestValues);
            hasViewportBoxUpdated &&
                element.notifyViewportBoxUpdate(leadProjection.target, delta);
            hasViewportBoxUpdated = false;
            var deltaTransform = (0,_html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_7__.buildLayoutProjectionTransform)(delta, treeScale);
            if (deltaTransform !== prevDeltaTransform ||
                // Also compare calculated treeScale, for values that rely on this only for scale correction
                prevTreeScaleX !== treeScale.x ||
                prevTreeScaleY !== treeScale.y) {
                element.scheduleRender();
            }
            layoutState.deltaTransform = deltaTransform;
        }
        function updateTreeLayoutProjection() {
            element.layoutTree.forEach(fireUpdateLayoutProjection);
        }
        /**
         *
         */
        function bindToMotionValue(key, value) {
            var removeOnChange = value.onChange(function (latestValue) {
                latestValues[key] = latestValue;
                props.onUpdate && framesync__WEBPACK_IMPORTED_MODULE_0__.default.update(update, false, true);
            });
            var removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
            valueSubscriptions.set(key, function () {
                removeOnChange();
                removeOnRenderRequest();
            });
        }
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */
        var initialMotionValues = scrapeMotionValuesFromProps(props);
        for (var key in initialMotionValues) {
            var value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_8__.isMotionValue)(value)) {
                value.set(latestValues[key], false);
            }
        }
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        var isControllingVariants = (0,_utils_variants_js__WEBPACK_IMPORTED_MODULE_9__.checkIfControllingVariants)(props);
        var isVariantNode = (0,_utils_variants_js__WEBPACK_IMPORTED_MODULE_9__.checkIfVariantNode)(props);
        var element = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ treeType: treeType, 
            /**
             * This is a mirror of the internal instance prop, which keeps
             * VisualElement type-compatible with React's RefObject.
             */
            current: null, 
            /**
             * The depth of this visual element within the visual element tree.
             */
            depth: parent ? parent.depth + 1 : 0, 
            /**
             * An ancestor path back to the root visual element. This is used
             * by layout projection to quickly recurse back up the tree.
             */
            path: parent ? (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(parent.path)), [parent]) : [], layoutTree: parent ? parent.layoutTree : new _utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_10__.FlatTree(), 
            /**
             *
             */
            presenceId: presenceId,
            projection: projection, 
            /**
             * If this component is part of the variant tree, it should track
             * any children that are also part of the tree. This is essentially
             * a shadow tree to simplify logic around how to stagger over children.
             */
            variantChildren: isVariantNode ? new Set() : undefined, 
            /**
             * Whether this instance is visible. This can be changed imperatively
             * by AnimateSharedLayout, is analogous to CSS's visibility in that
             * hidden elements should take up layout, and needs enacting by the configured
             * render function.
             */
            isVisible: undefined, 
            /**
             * Normally, if a component is controlled by a parent's variants, it can
             * rely on that ancestor to trigger animations further down the tree.
             * However, if a component is created after its parent is mounted, the parent
             * won't trigger that mount animation so the child needs to.
             *
             * TODO: This might be better replaced with a method isParentMounted
             */
            manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()), 
            /**
             * This can be set by AnimatePresence to force components that mount
             * at the same time as it to mount as if they have initial={false} set.
             */
            blockInitialAnimation: blockInitialAnimation, 
            /**
             * A boolean that can be used to determine whether to respect hover events.
             * For layout measurements we often have to reposition the instance by
             * removing its transform. This can trigger hover events, which is
             * undesired.
             */
            isHoverEventsEnabled: true, 
            /**
             * Determine whether this component has mounted yet. This is mostly used
             * by variant children to determine whether they need to trigger their
             * own animations on mount.
             */
            isMounted: function () { return Boolean(instance); }, mount: function (newInstance) {
                instance = element.current = newInstance;
                element.pointTo(element);
                if (isVariantNode && parent && !isControllingVariants) {
                    removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
                }
            },
            /**
             *
             */
            unmount: function () {
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(update);
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.render(render);
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.preRender(element.updateLayoutProjection);
                valueSubscriptions.forEach(function (remove) { return remove(); });
                element.stopLayoutAnimation();
                element.layoutTree.remove(element);
                removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
                unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
                lifecycles.clearAllListeners();
            },
            /**
             * Add a child visual element to our set of children.
             */
            addVariantChild: function (child) {
                var _a;
                var closestVariantNode = element.getClosestVariantNode();
                if (closestVariantNode) {
                    (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
                    return function () { return closestVariantNode.variantChildren.delete(child); };
                }
            },
            sortNodePosition: function (other) {
                /**
                 * If these nodes aren't even of the same type we can't compare their depth.
                 */
                if (!sortNodePosition || treeType !== other.treeType)
                    return 0;
                return sortNodePosition(element.getInstance(), other.getInstance());
            }, 
            /**
             * Returns the closest variant node in the tree starting from
             * this visual element.
             */
            getClosestVariantNode: function () {
                return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
            }, 
            /**
             * A method that schedules an update to layout projections throughout
             * the tree. We inherit from the parent so there's only ever one
             * job scheduled on the next frame - that of the root visual element.
             */
            scheduleUpdateLayoutProjection: parent
                ? parent.scheduleUpdateLayoutProjection
                : function () {
                    return framesync__WEBPACK_IMPORTED_MODULE_0__.default.preRender(element.updateTreeLayoutProjection, false, true);
                }, 
            /**
             * Expose the latest layoutId prop.
             */
            getLayoutId: function () { return props.layoutId; }, 
            /**
             * Returns the current instance.
             */
            getInstance: function () { return instance; }, 
            /**
             * Get/set the latest static values.
             */
            getStaticValue: function (key) { return latestValues[key]; }, setStaticValue: function (key, value) { return (latestValues[key] = value); }, 
            /**
             * Returns the latest motion value state. Currently only used to take
             * a snapshot of the visual element - perhaps this can return the whole
             * visual state
             */
            getLatestValues: function () { return latestValues; }, 
            /**
             * Set the visiblity of the visual element. If it's changed, schedule
             * a render to reflect these changes.
             */
            setVisibility: function (visibility) {
                if (element.isVisible === visibility)
                    return;
                element.isVisible = visibility;
                element.scheduleRender();
            },
            /**
             * Make a target animatable by Popmotion. For instance, if we're
             * trying to animate width from 100px to 100vw we need to measure 100vw
             * in pixels to determine what we really need to animate to. This is also
             * pluggable to support Framer's custom value types like Color,
             * and CSS variables.
             */
            makeTargetAnimatable: function (target, canMutate) {
                if (canMutate === void 0) { canMutate = true; }
                return makeTargetAnimatable(element, target, props, canMutate);
            },
            /**
             * Temporarily suspend hover events while we remove transforms in order to measure the layout.
             *
             * This seems like an odd bit of scheduling but what we're doing is saying after
             * the next render, wait 10 milliseconds before reenabling hover events. Waiting until
             * the next frame results in missed, valid hover events. But triggering on the postRender
             * frame is too soon to avoid triggering events with layout measurements.
             *
             * Note: If we figure out a way of measuring layout while transforms remain applied, this can be removed.
             */
            suspendHoverEvents: function () {
                element.isHoverEventsEnabled = false;
                framesync__WEBPACK_IMPORTED_MODULE_0__.default.postRender(function () {
                    return setTimeout(function () { return (element.isHoverEventsEnabled = true); }, 10);
                });
            },
            // Motion values ========================
            /**
             * Add a motion value and bind it to this visual element.
             */
            addValue: function (key, value) {
                // Remove existing value if it exists
                if (element.hasValue(key))
                    element.removeValue(key);
                values.set(key, value);
                latestValues[key] = value.get();
                bindToMotionValue(key, value);
            },
            /**
             * Remove a motion value and unbind any active subscriptions.
             */
            removeValue: function (key) {
                var _a;
                values.delete(key);
                (_a = valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
                valueSubscriptions.delete(key);
                delete latestValues[key];
                removeValueFromRenderState(key, renderState);
            }, 
            /**
             * Check whether we have a motion value for this key
             */
            hasValue: function (key) { return values.has(key); }, 
            /**
             * Get a motion value for this key. If called with a default
             * value, we'll create one if none exists.
             */
            getValue: function (key, defaultValue) {
                var value = values.get(key);
                if (value === undefined && defaultValue !== undefined) {
                    value = (0,_value_index_js__WEBPACK_IMPORTED_MODULE_11__.motionValue)(defaultValue);
                    element.addValue(key, value);
                }
                return value;
            }, 
            /**
             * Iterate over our motion values.
             */
            forEachValue: function (callback) { return values.forEach(callback); }, 
            /**
             * If we're trying to animate to a previously unencountered value,
             * we need to check for it in our state and as a last resort read it
             * directly from the instance (which might have performance implications).
             */
            readValue: function (key) { var _a; return (_a = latestValues[key]) !== null && _a !== void 0 ? _a : readValueFromInstance(instance, key, options); }, 
            /**
             * Set the base target to later animate back to. This is currently
             * only hydrated on creation and when we first read a value.
             */
            setBaseTarget: function (key, value) {
                baseTarget[key] = value;
            },
            /**
             * Find the base target for a value thats been removed from all animation
             * props.
             */
            getBaseTarget: function (key) {
                if (getBaseTarget) {
                    var target = getBaseTarget(props, key);
                    if (target !== undefined && !(0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_8__.isMotionValue)(target))
                        return target;
                }
                return baseTarget[key];
            } }, lifecycles), { 
            /**
             * Build the renderer state based on the latest visual state.
             */
            build: function () {
                triggerBuild();
                return renderState;
            },
            /**
             * Schedule a render on the next animation frame.
             */
            scheduleRender: function () {
                framesync__WEBPACK_IMPORTED_MODULE_0__.default.render(render, false, true);
            }, 
            /**
             * Synchronously fire render. It's prefered that we batch renders but
             * in many circumstances, like layout measurement, we need to run this
             * synchronously. However in those instances other measures should be taken
             * to batch reads/writes.
             */
            syncRender: render, 
            /**
             * Update the provided props. Ensure any newly-added motion values are
             * added to our map, old ones removed, and listeners updated.
             */
            setProps: function (newProps) {
                props = newProps;
                lifecycles.updatePropListeners(newProps);
                prevMotionValues = (0,_utils_motion_values_js__WEBPACK_IMPORTED_MODULE_12__.updateMotionValuesFromProps)(element, scrapeMotionValuesFromProps(props), prevMotionValues);
            }, getProps: function () { return props; }, 
            // Variants ==============================
            /**
             * Returns the variant definition with a given name.
             */
            getVariant: function (name) { var _a; return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name]; }, 
            /**
             * Returns the defined default transition on this component.
             */
            getDefaultTransition: function () { return props.transition; }, 
            /**
             * Used by child variant nodes to get the closest ancestor variant props.
             */
            getVariantContext: function (startAtParent) {
                if (startAtParent === void 0) { startAtParent = false; }
                if (startAtParent)
                    return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
                if (!isControllingVariants) {
                    var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
                    if (props.initial !== undefined) {
                        context_1.initial = props.initial;
                    }
                    return context_1;
                }
                var context = {};
                for (var i = 0; i < numVariantProps; i++) {
                    var name_1 = variantProps[i];
                    var prop = props[name_1];
                    if ((0,_utils_variants_js__WEBPACK_IMPORTED_MODULE_9__.isVariantLabel)(prop) || prop === false) {
                        context[name_1] = prop;
                    }
                }
                return context;
            },
            // Layout projection ==============================
            /**
             * Enable layout projection for this visual element. Won't actually
             * occur until we also have hydrated layout measurements.
             */
            enableLayoutProjection: function () {
                projection.isEnabled = true;
                element.layoutTree.add(element);
            },
            /**
             * Lock the projection target, for instance when dragging, so
             * nothing else can try and animate it.
             */
            lockProjectionTarget: function () {
                projection.isTargetLocked = true;
            },
            unlockProjectionTarget: function () {
                element.stopLayoutAnimation();
                projection.isTargetLocked = false;
            },
            /**
             * Record the viewport box as it was before an expected mutation/re-render
             */
            snapshotViewportBox: function () {
                element.prevViewportBox = element.measureViewportBox(false);
                /**
                 * Update targetBox to match the prevViewportBox. This is just to ensure
                 * that targetBox is affected by scroll in the same way as the measured box
                 */
                element.rebaseProjectionTarget(false, element.prevViewportBox);
            }, getLayoutState: function () { return layoutState; }, setCrossfader: function (newCrossfader) {
                crossfader = newCrossfader;
            },
            /**
             * Start a layout animation on a given axis.
             * TODO: This could be better.
             */
            startLayoutAnimation: function (axis, transition) {
                var progress = element.getProjectionAnimationProgress()[axis];
                var _a = projection.target[axis], min = _a.min, max = _a.max;
                var length = max - min;
                progress.clearListeners();
                progress.set(min);
                progress.set(min); // Set twice to hard-reset velocity
                progress.onChange(function (v) {
                    return element.setProjectionTargetAxis(axis, v, v + length);
                });
                return element.animateMotionValue(axis, progress, 0, transition);
            },
            /**
             * Stop layout animations.
             */
            stopLayoutAnimation: function () {
                (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_13__.eachAxis)(function (axis) {
                    return element.getProjectionAnimationProgress()[axis].stop();
                });
            },
            /**
             * Measure the current viewport box with or without transforms.
             * Only measures axis-aligned boxes, rotate and skew must be manually
             * removed with a re-render to work.
             */
            measureViewportBox: function (withTransform) {
                if (withTransform === void 0) { withTransform = true; }
                var viewportBox = measureViewportBox(instance, options);
                if (!withTransform)
                    (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_4__.removeBoxTransforms)(viewportBox, latestValues);
                return viewportBox;
            },
            /**
             * Update the layoutState by measuring the DOM layout. This
             * should be called after resetting any layout-affecting transforms.
             */
            updateLayoutMeasurement: function () {
                element.notifyBeforeLayoutMeasure(layoutState.layout);
                layoutState.isHydrated = true;
                layoutState.layout = element.measureViewportBox();
                layoutState.layoutCorrected = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_14__.copyAxisBox)(layoutState.layout);
                element.notifyLayoutMeasure(layoutState.layout, element.prevViewportBox || layoutState.layout);
                framesync__WEBPACK_IMPORTED_MODULE_0__.default.update(function () { return element.rebaseProjectionTarget(); });
            },
            /**
             * Get the motion values tracking the layout animations on each
             * axis. Lazy init if not already created.
             */
            getProjectionAnimationProgress: function () {
                projectionTargetProgress || (projectionTargetProgress = {
                    x: (0,_value_index_js__WEBPACK_IMPORTED_MODULE_11__.motionValue)(0),
                    y: (0,_value_index_js__WEBPACK_IMPORTED_MODULE_11__.motionValue)(0),
                });
                return projectionTargetProgress;
            },
            /**
             * Update the projection of a single axis. Schedule an update to
             * the tree layout projection.
             */
            setProjectionTargetAxis: function (axis, min, max, isRelative) {
                if (isRelative === void 0) { isRelative = false; }
                var target;
                if (isRelative) {
                    if (!projection.relativeTarget) {
                        projection.relativeTarget = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_14__.axisBox)();
                    }
                    target = projection.relativeTarget[axis];
                }
                else {
                    projection.relativeTarget = undefined;
                    target = projection.target[axis];
                }
                target.min = min;
                target.max = max;
                // Flag that we want to fire the onViewportBoxUpdate event handler
                hasViewportBoxUpdated = true;
                lifecycles.notifySetAxisTarget();
            },
            /**
             * Rebase the projection target on top of the provided viewport box
             * or the measured layout. This ensures that non-animating elements
             * don't fall out of sync differences in measurements vs projections
             * after a page scroll or other relayout.
             */
            rebaseProjectionTarget: function (force, box) {
                if (box === void 0) { box = layoutState.layout; }
                var _a = element.getProjectionAnimationProgress(), x = _a.x, y = _a.y;
                var shouldRebase = !projection.relativeTarget &&
                    !projection.isTargetLocked &&
                    !x.isAnimating() &&
                    !y.isAnimating();
                if (force || shouldRebase) {
                    (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_13__.eachAxis)(function (axis) {
                        var _a = box[axis], min = _a.min, max = _a.max;
                        element.setProjectionTargetAxis(axis, min, max);
                    });
                }
            },
            /**
             * Notify the visual element that its layout is up-to-date.
             * Currently Animate.tsx uses this to check whether a layout animation
             * needs to be performed.
             */
            notifyLayoutReady: function (config) {
                element.notifyLayoutUpdate(layoutState.layout, element.prevViewportBox || layoutState.layout, config);
            }, 
            /**
             * Temporarily reset the transform of the instance.
             */
            resetTransform: function () { return resetTransform(element, instance, props); }, 
            /**
             * Perform the callback after temporarily unapplying the transform
             * upwards through the tree.
             */
            withoutTransform: function (callback) {
                var isEnabled = projection.isEnabled;
                isEnabled && element.resetTransform();
                parent ? parent.withoutTransform(callback) : callback();
                isEnabled && restoreTransform(instance, renderState);
            },
            updateLayoutProjection: updateLayoutProjection,
            updateTreeLayoutProjection: function () {
                element.layoutTree.forEach(fireResolveRelativeTargetBox);
                /**
                 * Schedule the projection updates at the end of the current preRender
                 * step. This will ensure that all layout trees will first resolve
                 * relative projection boxes into viewport boxes, and *then*
                 * update projections.
                 */
                framesync__WEBPACK_IMPORTED_MODULE_0__.default.preRender(updateTreeLayoutProjection, false, true);
            },
            getProjectionParent: function () {
                if (projectionParent === undefined) {
                    var foundParent = false;
                    // Search backwards through the tree path
                    for (var i = element.path.length - 1; i >= 0; i--) {
                        var ancestor = element.path[i];
                        if (ancestor.projection.isEnabled) {
                            foundParent = ancestor;
                            break;
                        }
                    }
                    projectionParent = foundParent;
                }
                return projectionParent;
            },
            resolveRelativeTargetBox: function () {
                if (!projection.relativeTarget)
                    return;
                var relativeParent = element.getProjectionParent();
                if (relativeParent) {
                    (0,_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_5__.calcRelativeBox)(projection, relativeParent.projection);
                }
            },
            /**
             *
             */
            pointTo: function (newLead) {
                leadProjection = newLead.projection;
                leadLatestValues = newLead.getLatestValues();
                /**
                 * Subscribe to lead component's layout animations
                 */
                unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
                unsubscribeFromLeadVisualElement = (0,popmotion__WEBPACK_IMPORTED_MODULE_15__.pipe)(newLead.onSetAxisTarget(element.scheduleUpdateLayoutProjection), newLead.onLayoutAnimationComplete(function () {
                    var _a;
                    if (element.isPresent) {
                        element.presence = _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_16__.Presence.Present;
                    }
                    else {
                        (_a = element.layoutSafeToRemove) === null || _a === void 0 ? void 0 : _a.call(element);
                    }
                }));
            }, 
            // TODO: Clean this up
            isPresent: true, presence: _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_16__.Presence.Entering });
        return element;
    };
};
function fireResolveRelativeTargetBox(child) {
    child.resolveRelativeTargetBox();
}
function fireUpdateLayoutProjection(child) {
    child.updateLayoutProjection();
}
var variantProps = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)(["initial"], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_17__.variantPriorityOrder));
var numVariantProps = variantProps.length;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/config-motion.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/config-motion.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgMotionConfig": () => (/* binding */ svgMotionConfig)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/render.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js");
/* harmony import */ var _motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/build-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js");






var svgMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__.createSvgRenderState,
        onMount: function (props, instance, _a) {
            var renderState = _a.renderState, latestValues = _a.latestValues;
            try {
                renderState.dimensions =
                    typeof instance.getBBox ===
                        "function"
                        ? instance.getBBox()
                        : instance.getBoundingClientRect();
            }
            catch (e) {
                // Most likely trying to measure an unrendered element under Firefox
                renderState.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
            }
            if (isPath(instance)) {
                renderState.totalPathLength = instance.getTotalLength();
            }
            (0,_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_3__.buildSVGAttrs)(renderState, latestValues, undefined, undefined, { enableHardwareAcceleration: false }, props.transformTemplate);
            // TODO: Replace with direct assignment
            (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.renderSVG)(instance, renderState);
        },
    }),
};
function isPath(element) {
    return element.tagName === "path";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lowercaseSVGElements": () => (/* binding */ lowercaseSVGElements)
/* harmony export */ });
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view",
];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/use-props.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/use-props.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSVGProps": () => (/* binding */ useSVGProps)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _html_use_props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/use-props.js */ "./node_modules/framer-motion/dist/es/render/html/use-props.js");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/build-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js");






function useSVGProps(props, visualState) {
    var visualProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var state = (0,_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__.createSvgRenderState)();
        (0,_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_2__.buildSVGAttrs)(state, visualState, undefined, undefined, { enableHardwareAcceleration: false }, props.transformTemplate);
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state.attrs), { style: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state.style) });
    }, [visualState]);
    if (props.style) {
        var rawStyles = {};
        (0,_html_use_props_js__WEBPACK_IMPORTED_MODULE_4__.copyRawValuesOnly)(rawStyles, props.style, props);
        visualProps.style = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, rawStyles), visualProps.style);
    }
    return visualProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSVGAttrs": () => (/* binding */ buildSVGAttrs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/build-styles.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js");
/* harmony import */ var _transform_origin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform-origin.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/path.js");





/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
    // This is object creation, which we try to avoid per-frame.
    latest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    (0,_html_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_1__.buildHTMLStyles)(state, latest, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions, totalPathLength = state.totalPathLength;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = (0,_transform_origin_js__WEBPACK_IMPORTED_MODULE_2__.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been measured
    if (totalPathLength !== undefined && pathLength !== undefined) {
        (0,_path_js__WEBPACK_IMPORTED_MODULE_3__.buildSVGPath)(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelCaseAttributes": () => (/* binding */ camelCaseAttributes)
/* harmony export */ });
/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
]);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSvgRenderState": () => (/* binding */ createSvgRenderState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js");



var createSvgRenderState = function () { return ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, (0,_html_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlRenderState)()), { attrs: {} })); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/path.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/path.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSVGPath": () => (/* binding */ buildSVGPath)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");


// Convert a progress 0-1 to a pixels value based on the provided length
var progressToPixels = function (progress, length) {
    return style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(progress * length);
};
var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
    if (spacing === void 0) { spacing = 1; }
    if (offset === void 0) { offset = 0; }
    if (useDashCase === void 0) { useDashCase = true; }
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = progressToPixels(-offset, totalLength);
    // Build the dash array
    var pathLength = progressToPixels(length, totalLength);
    var pathSpacing = progressToPixels(spacing, totalLength);
    attrs[keys.array] = pathLength + " " + pathSpacing;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/render.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSVG": () => (/* binding */ renderSVG)
/* harmony export */ });
/* harmony import */ var _dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js");
/* harmony import */ var _html_utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/render.js */ "./node_modules/framer-motion/dist/es/render/html/utils/render.js");
/* harmony import */ var _camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js");




function renderSVG(element, renderState) {
    (0,_html_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.renderHTML)(element, renderState);
    for (var key in renderState.attrs) {
        element.setAttribute(!_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_1__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_2__.camelToDash)(key) : key, renderState.attrs[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrapeMotionValuesFromProps": () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _html_utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js");



function scrapeMotionValuesFromProps(props) {
    var newValues = (0,_html_utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_0__.scrapeMotionValuesFromProps)(props);
    for (var key in props) {
        if ((0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(props[key])) {
            var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcSVGTransformOrigin": () => (/* binding */ calcSVGTransformOrigin)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return pxOriginX + " " + pxOriginY;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/visual-element.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/visual-element.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgVisualElement": () => (/* binding */ svgVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/framer-motion/dist/es/render/index.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js");
/* harmony import */ var _html_visual_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/visual-element.js */ "./node_modules/framer-motion/dist/es/render/html/visual-element.js");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/build-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js");
/* harmony import */ var _dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js");
/* harmony import */ var _utils_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/camel-case-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js");
/* harmony import */ var _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/render.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js");
/* harmony import */ var _dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/value-types/defaults.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js");
/* harmony import */ var _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../html/utils/build-projection-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js");












var svgVisualElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.visualElement)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _html_visual_element_js__WEBPACK_IMPORTED_MODULE_2__.htmlConfig), { getBaseTarget: function (props, key) {
        return props[key];
    },
    readValueFromInstance: function (domElement, key) {
        var _a;
        if ((0,_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_3__.isTransformProp)(key)) {
            return ((_a = (0,_dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_4__.getDefaultValueType)(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
        }
        key = !_utils_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_5__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_6__.camelToDash)(key) : key;
        return domElement.getAttribute(key);
    },
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps,
    build: function (_element, renderState, latestValues, projection, layoutState, options, props) {
        var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
        (0,_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_8__.buildSVGAttrs)(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__.buildLayoutProjectionTransform : undefined, isProjectionTranform
            ? _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__.buildLayoutProjectionTransformOrigin
            : undefined);
    }, render: _utils_render_js__WEBPACK_IMPORTED_MODULE_10__.renderSVG }));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation-state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnimationState": () => (/* binding */ createAnimationState),
/* harmony export */   "variantPriorityOrder": () => (/* binding */ variantPriorityOrder),
/* harmony export */   "variantsHaveChanged": () => (/* binding */ variantsHaveChanged)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js");
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");
/* harmony import */ var _utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/shallow-compare.js */ "./node_modules/framer-motion/dist/es/utils/shallow-compare.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.js */ "./node_modules/framer-motion/dist/es/render/utils/animation.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");








var variantPriorityOrder = [
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Animate,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Hover,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Tap,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Drag,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Exit,
];
var reversePriorityOrder = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(variantPriorityOrder)).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return function (animations) {
        return Promise.all(animations.map(function (_a) {
            var animation = _a.animation, options = _a.options;
            return (0,_animation_js__WEBPACK_IMPORTED_MODULE_2__.animateVisualElement)(visualElement, animation, options);
        }));
    };
}
function createAnimationState(visualElement) {
    var animate = animateList(visualElement);
    var state = createState();
    var allAnimatedKeys = {};
    var isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    var buildResolvedTypeValues = function (acc, definition) {
        var resolved = (0,_variants_js__WEBPACK_IMPORTED_MODULE_3__.resolveVariant)(visualElement, definition);
        if (resolved) {
            resolved.transition; var transitionEnd = resolved.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(resolved, ["transition", "transitionEnd"]);
            acc = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, acc), target), transitionEnd);
        }
        return acc;
    };
    function isAnimated(key) {
        return allAnimatedKeys[key] !== undefined;
    }
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        var _a;
        var props = visualElement.getProps();
        var context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        var animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        var removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        var encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        var removedVariantIndex = Infinity;
        var _loop_1 = function (i) {
            var type = reversePriorityOrder[i];
            var typeState = state[type];
            var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
            var propIsVariant = (0,_variants_js__WEBPACK_IMPORTED_MODULE_3__.isVariantLabel)(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            var activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys);
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                (0,_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_4__.isAnimationControls)(prop) ||
                typeof prop === "boolean") {
                return "continue";
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            var definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
            var allKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevResolvedValues), resolvedValues);
            var markToAnimate = function (key) {
                shouldAnimateType = true;
                removedKeys.delete(key);
                typeState.needsAnimating[key] = true;
            };
            for (var key in allKeys) {
                var next = resolvedValues[key];
                var prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                if (next !== prev) {
                    /**
                     * If both values are keyframes, we need to shallow compare them to
                     * detect whether any value has changed. If it has, we animate it.
                     */
                    if ((0,_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(next) && (0,_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(prev)) {
                        if (!(0,_utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev)) {
                            markToAnimate(key);
                        }
                        else {
                            /**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */
                            typeState.protectedKeys[key] = true;
                        }
                    }
                    else if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys), resolvedValues);
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             * TODO: Test as this should probably still handle animations triggered
             * by removed values?
             */
            if (shouldAnimateType && !isInherited) {
                animations.push.apply(animations, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(definitionList.map(function (animation) { return ({
                    animation: animation,
                    options: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ type: type }, options),
                }); }))));
            }
        };
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (var i = 0; i < numAnimationTypes; i++) {
            _loop_1(i);
        }
        allAnimatedKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys);
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            var fallbackAnimation_1 = {};
            removedKeys.forEach(function (key) {
                var fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation_1[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation_1 });
        }
        var shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            props.initial === false &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        return animateChanges(options, type);
    }
    return {
        isAnimated: isAnimated,
        animateChanges: animateChanges,
        setActive: setActive,
        setAnimateFunction: setAnimateFunction,
        getState: function () { return state; },
    };
}
function variantsHaveChanged(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if ((0,_variants_js__WEBPACK_IMPORTED_MODULE_3__.isVariantLabels)(next)) {
        return !(0,_utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev);
    }
    return false;
}
function createTypeState(isActive) {
    if (isActive === void 0) { isActive = false; }
    return {
        isActive: isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    var _a;
    return _a = {},
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Animate] = createTypeState(true),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Hover] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Tap] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Drag] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Exit] = createTypeState(),
        _a;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateVisualElement": () => (/* binding */ animateVisualElement),
/* harmony export */   "sortByTreeOrder": () => (/* binding */ sortByTreeOrder),
/* harmony export */   "stopAnimation": () => (/* binding */ stopAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _setters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setters.js */ "./node_modules/framer-motion/dist/es/render/utils/setters.js");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");





/**
 * @internal
 */
function animateVisualElement(visualElement, definition, options) {
    if (options === void 0) { options = {}; }
    visualElement.notifyAnimationStart();
    var animation;
    if (Array.isArray(definition)) {
        var animations = definition.map(function (variant) {
            return animateVariant(visualElement, variant, options);
        });
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        var resolvedDefinition = typeof definition === "function"
            ? (0,_variants_js__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, definition, options.custom)
            : definition;
        animation = animateTarget(visualElement, resolvedDefinition, options);
    }
    return animation.then(function () {
        return visualElement.notifyAnimationComplete(definition);
    });
}
function animateVariant(visualElement, variant, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var resolved = (0,_variants_js__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, variant, options.custom);
    var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getAnimation = resolved
        ? function () { return animateTarget(visualElement, resolved, options); }
        : function () { return Promise.resolve(); };
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size)
        ? function (forwardDelay) {
            if (forwardDelay === void 0) { forwardDelay = 0; }
            var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : function () { return Promise.resolve(); };
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    var when = transition.when;
    if (when) {
        var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation], 2), first = _c[0], last = _c[1];
        return first().then(last);
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
/**
 * @internal
 */
function animateTarget(visualElement, definition, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
    var _e = visualElement.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_e, ["transition", "transitionEnd"]);
    if (transitionOverride)
        transition = transitionOverride;
    var animations = [];
    var animationTypeState = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
    for (var key in target) {
        var value = visualElement.getValue(key);
        var valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        var animation = (0,_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_2__.startAnimation)(key, value, valueTarget, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delay: delay }, transition));
        animations.push(animation);
    }
    return Promise.all(animations).then(function () {
        transitionEnd && (0,_setters_js__WEBPACK_IMPORTED_MODULE_3__.setTarget)(visualElement, transitionEnd);
    });
}
function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
    if (delayChildren === void 0) { delayChildren = 0; }
    if (staggerChildren === void 0) { staggerChildren = 0; }
    if (staggerDirection === void 0) { staggerDirection = 1; }
    var animations = [];
    var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1
        ? function (i) {
            if (i === void 0) { i = 0; }
            return i * staggerChildren;
        }
        : function (i) {
            if (i === void 0) { i = 0; }
            return maxStaggerDuration - i * staggerChildren;
        };
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach(function (child, i) {
        animations.push(animateVariant(child, variant, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function () { return child.notifyAnimationComplete(variant); }));
    });
    return Promise.all(animations);
}
function stopAnimation(visualElement) {
    visualElement.forEachValue(function (value) { return value.stop(); });
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation(_a, key) {
    var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareByDepth": () => (/* binding */ compareByDepth)
/* harmony export */ });
var compareByDepth = function (a, b) {
    return a.depth - b.depth;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/flat-tree.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatTree": () => (/* binding */ FlatTree)
/* harmony export */ });
/* harmony import */ var _utils_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.js */ "./node_modules/framer-motion/dist/es/utils/array.js");
/* harmony import */ var _compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-by-depth.js */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js");



var FlatTree = /** @class */ (function () {
    function FlatTree() {
        this.children = [];
        this.isDirty = false;
    }
    FlatTree.prototype.add = function (child) {
        (0,_utils_array_js__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.remove = function (child) {
        (0,_utils_array_js__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.forEach = function (callback) {
        this.isDirty && this.children.sort(_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__.compareByDepth);
        var numChildren = this.children.length;
        for (var i = 0; i < numChildren; i++) {
            callback(this.children[i]);
        }
    };
    return FlatTree;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/lifecycles.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLifecycles": () => (/* binding */ createLifecycles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/subscription-manager.js */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js");



var names = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "SetAxisTarget",
    "Unmount",
];
function createLifecycles() {
    var managers = names.map(function () { return new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_0__.SubscriptionManager(); });
    var propSubscriptions = {};
    var lifecycles = {
        clearAllListeners: function () { return managers.forEach(function (manager) { return manager.clear(); }); },
        updatePropListeners: function (props) {
            return names.forEach(function (name) {
                var _a;
                (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
                var on = "on" + name;
                var propListener = props[on];
                if (propListener) {
                    propSubscriptions[name] = lifecycles[on](propListener);
                }
            });
        },
    };
    managers.forEach(function (manager, i) {
        lifecycles["on" + names[i]] = function (handler) { return manager.add(handler); };
        lifecycles["notify" + names[i]] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return manager.notify.apply(manager, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args)));
        };
    });
    return lifecycles;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/motion-values.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/motion-values.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateMotionValuesFromProps": () => (/* binding */ updateMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");



function updateMotionValuesFromProps(element, next, prev) {
    var _a;
    for (var key in next) {
        var nextValue = next[key];
        var prevValue = prev[key];
        if ((0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
        }
        else if ((0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevValue)) {
            /**
             * If we're swapping to a new motion value, create a new motion value
             * from that
             */
            element.addValue(key, (0,_value_index_js__WEBPACK_IMPORTED_MODULE_1__.motionValue)(nextValue));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                var existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                element.addValue(key, (0,_value_index_js__WEBPACK_IMPORTED_MODULE_1__.motionValue)((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
            }
        }
    }
    // Handle removed values
    for (var key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/projection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/projection.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLayoutDeltas": () => (/* binding */ updateLayoutDeltas)
/* harmony export */ });
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/geometry/delta-apply.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/geometry/delta-calc.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js");



function updateLayoutDeltas(_a, _b, treePath, transformOrigin) {
    var delta = _a.delta, layout = _a.layout, layoutCorrected = _a.layoutCorrected, treeScale = _a.treeScale;
    var target = _b.target;
    /**
     * Reset the corrected box with the latest values from box, as we're then going
     * to perform mutative operations on it.
     */
    (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__.resetBox)(layoutCorrected, layout);
    /**
     * Apply all the parent deltas to this box to produce the corrected box. This
     * is the layout box, as it will appear on screen as a result of the transforms of its parents.
     */
    (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__.applyTreeDeltas)(layoutCorrected, treeScale, treePath);
    /**
     * Update the delta between the corrected box and the target box before user-set transforms were applied.
     * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
     * for our layout reprojection, but still allow them to be scaled correctly by the user.
     * It might be that to simplify this we may want to accept that user-set scale1 is also corrected
     * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
     * to allow people to choose whether these styles are corrected based on just the
     * layout reprojection or the final bounding box.
     */
    (0,_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_1__.updateBoxDelta)(delta, layoutCorrected, target, transformOrigin);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/setters.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/setters.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTargetForNewValues": () => (/* binding */ checkTargetForNewValues),
/* harmony export */   "getOrigin": () => (/* binding */ getOrigin),
/* harmony export */   "getOriginFromTransition": () => (/* binding */ getOriginFromTransition),
/* harmony export */   "setTarget": () => (/* binding */ setTarget),
/* harmony export */   "setValues": () => (/* binding */ setValues)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _utils_is_numerical_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/is-numerical-string.js */ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.js");
/* harmony import */ var _utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resolve-value.js */ "./node_modules/framer-motion/dist/es/utils/resolve-value.js");
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom/value-types/animatable-none.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js");
/* harmony import */ var _dom_value_types_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/value-types/find.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.js");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");









/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, (0,_value_index_js__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
    }
}
function setTarget(visualElement, definition) {
    var resolved = (0,_variants_js__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition);
    var _a = resolved
        ? visualElement.makeTargetAnimatable(resolved, false)
        : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b; _a.transition; var target = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["transitionEnd", "transition"]);
    target = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, target), transitionEnd);
    for (var key in target) {
        var value = (0,_utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_3__.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function setVariants(visualElement, variantLabels) {
    var reversedLabels = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(variantLabels)).reverse();
    reversedLabels.forEach(function (key) {
        var _a;
        var variant = visualElement.getVariant(key);
        variant && setTarget(visualElement, variant);
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            setVariants(child, variantLabels);
        });
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    }
    else if (typeof definition === "string") {
        return setVariants(visualElement, [definition]);
    }
    else {
        setTarget(visualElement, definition);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b, _c;
    var _d;
    var newValueKeys = Object.keys(target).filter(function (key) { return !visualElement.hasValue(key); });
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (var i = 0; i < numNewValues; i++) {
        var key = newValueKeys[i];
        var targetValue = target[key];
        var value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" && (0,_utils_is_numerical_string_js__WEBPACK_IMPORTED_MODULE_4__.isNumericalString)(value)) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!(0,_dom_value_types_find_js__WEBPACK_IMPORTED_MODULE_5__.findValueType)(value) && style_value_types__WEBPACK_IMPORTED_MODULE_6__.complex.test(targetValue)) {
            value = (0,_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_7__.getAnimatableNone)(key, targetValue);
        }
        visualElement.addValue(key, (0,_value_index_js__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
        (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : (_d[key] = value);
        visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
        origin[key] =
            (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/state.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/state.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLayoutState": () => (/* binding */ createLayoutState),
/* harmony export */   "createProjectionState": () => (/* binding */ createProjectionState),
/* harmony export */   "zeroLayout": () => (/* binding */ zeroLayout)
/* harmony export */ });
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");


var createProjectionState = function () { return ({
    isEnabled: false,
    isTargetLocked: false,
    target: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.axisBox)(),
    targetFinal: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.axisBox)(),
}); };
function createLayoutState() {
    return {
        isHydrated: false,
        layout: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.axisBox)(),
        layoutCorrected: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.axisBox)(),
        treeScale: { x: 1, y: 1 },
        delta: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.delta)(),
        deltaFinal: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.delta)(),
        deltaTransform: "",
    };
}
var zeroLayout = createLayoutState();




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/types.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationType": () => (/* binding */ AnimationType)
/* harmony export */ });
var AnimationType;
(function (AnimationType) {
    AnimationType["Animate"] = "animate";
    AnimationType["Hover"] = "whileHover";
    AnimationType["Tap"] = "whileTap";
    AnimationType["Drag"] = "whileDrag";
    AnimationType["Focus"] = "whileFocus";
    AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/variants.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/variants.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfControllingVariants": () => (/* binding */ checkIfControllingVariants),
/* harmony export */   "checkIfVariantNode": () => (/* binding */ checkIfVariantNode),
/* harmony export */   "isVariantLabel": () => (/* binding */ isVariantLabel),
/* harmony export */   "isVariantLabels": () => (/* binding */ isVariantLabels),
/* harmony export */   "resolveVariant": () => (/* binding */ resolveVariant),
/* harmony export */   "resolveVariantFromProps": () => (/* binding */ resolveVariantFromProps)
/* harmony export */ });
/**
 * Decides if the supplied variable is an array of variant labels
 */
function isVariantLabels(v) {
    return Array.isArray(v);
}
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
}
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    var current = {};
    visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    var velocity = {};
    visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
    var _a;
    if (currentValues === void 0) { currentValues = {}; }
    if (currentVelocity === void 0) { currentVelocity = {}; }
    if (typeof definition === "string") {
        definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
    }
    return typeof definition === "function"
        ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity)
        : definition;
}
function resolveVariant(visualElement, definition, custom) {
    var props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}
function checkIfControllingVariants(props) {
    var _a;
    return (typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" ||
        isVariantLabel(props.initial) ||
        isVariantLabel(props.animate) ||
        isVariantLabel(props.whileHover) ||
        isVariantLabel(props.whileDrag) ||
        isVariantLabel(props.whileTap) ||
        isVariantLabel(props.whileFocus) ||
        isVariantLabel(props.exit));
}
function checkIfVariantNode(props) {
    return Boolean(checkIfControllingVariants(props) || props.variants);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/array.js":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/array.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUniqueItem": () => (/* binding */ addUniqueItem),
/* harmony export */   "removeItem": () => (/* binding */ removeItem)
/* harmony export */ });
function addUniqueItem(arr, item) {
    arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
    var index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/each-axis.js":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/each-axis.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eachAxis": () => (/* binding */ eachAxis)
/* harmony export */ });
// Call a handler once for each axis
function eachAxis(handler) {
    return [handler("x"), handler("y")];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyAxisDelta": () => (/* binding */ applyAxisDelta),
/* harmony export */   "applyAxisTransforms": () => (/* binding */ applyAxisTransforms),
/* harmony export */   "applyBoxDelta": () => (/* binding */ applyBoxDelta),
/* harmony export */   "applyBoxTransforms": () => (/* binding */ applyBoxTransforms),
/* harmony export */   "applyPointDelta": () => (/* binding */ applyPointDelta),
/* harmony export */   "applyTreeDeltas": () => (/* binding */ applyTreeDeltas),
/* harmony export */   "removeAxisDelta": () => (/* binding */ removeAxisDelta),
/* harmony export */   "removeAxisTransforms": () => (/* binding */ removeAxisTransforms),
/* harmony export */   "removeBoxTransforms": () => (/* binding */ removeBoxTransforms),
/* harmony export */   "removePointDelta": () => (/* binding */ removePointDelta),
/* harmony export */   "resetAxis": () => (/* binding */ resetAxis),
/* harmony export */   "resetBox": () => (/* binding */ resetBox),
/* harmony export */   "scalePoint": () => (/* binding */ scalePoint)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");



/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetAxis(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetBox(box, originBox) {
    resetAxis(box.x, originBox.x);
    resetAxis(box.y, originBox.y);
}
/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function applyAxisTransforms(final, axis, transforms, _a) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    // Copy the current axis to the final axis before mutation
    final.min = axis.min;
    final.max = axis.max;
    var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    var originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function applyBoxTransforms(finalBox, box, transforms) {
    applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
    applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate, scale, origin, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    if (origin === void 0) { origin = 0.5; }
    var originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(axis.min, axis.max, origin) - translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _a) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms) {
    removeAxisTransforms(box.x, transforms, xKeys);
    removeAxisTransforms(box.y, transforms, yKeys);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath) {
    var treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    for (var i = 0; i < treeLength; i++) {
        var delta = treePath[i].getLayoutState().delta;
        // Incoporate each ancestor's scale into a culmulative treeScale for this component
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        // Apply each ancestor's calculated delta into this component's recorded layout box
        applyBoxDelta(box, delta);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcOrigin": () => (/* binding */ calcOrigin),
/* harmony export */   "calcRelativeAxis": () => (/* binding */ calcRelativeAxis),
/* harmony export */   "calcRelativeBox": () => (/* binding */ calcRelativeBox),
/* harmony export */   "isNear": () => (/* binding */ isNear),
/* harmony export */   "updateAxisDelta": () => (/* binding */ updateAxisDelta),
/* harmony export */   "updateBoxDelta": () => (/* binding */ updateBoxDelta)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/clamp.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/distance.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/progress.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");


var clampProgress = function (v) { return (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, v); };
/**
 * Returns true if the provided value is within maxDistance of the provided target
 */
function isNear(value, target, maxDistance) {
    if (target === void 0) { target = 0; }
    if (maxDistance === void 0) { maxDistance = 0.01; }
    return (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.distance)(value, target) < maxDistance;
}
function calcLength(axis) {
    return axis.max - axis.min;
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = calcLength(source);
    var targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.progress)(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.progress)(source.min, source.max - targetLength, target.min);
    }
    return clampProgress(origin);
}
/**
 * Update the AxisDelta with a transform that projects source into target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateAxisDelta(delta, source, target, origin) {
    if (origin === void 0) { origin = 0.5; }
    delta.origin = origin;
    delta.originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.mix)(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001))
        delta.scale = 1;
    delta.translate =
        (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.mix)(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate))
        delta.translate = 0;
}
/**
 * Update the BoxDelta with a transform that projects the source into the target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateBoxDelta(delta, source, target, origin) {
    updateAxisDelta(delta.x, source.x, target.x, defaultOrigin(origin.originX));
    updateAxisDelta(delta.y, source.y, target.y, defaultOrigin(origin.originY));
}
/**
 * Currently this only accepts numerical origins, measured as 0-1, but could
 * accept pixel values by comparing to the target axis.
 */
function defaultOrigin(origin) {
    return typeof origin === "number" ? origin : 0.5;
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(projection, parentProjection) {
    calcRelativeAxis(projection.target.x, projection.relativeTarget.x, parentProjection.target.x);
    calcRelativeAxis(projection.target.y, projection.relativeTarget.y, parentProjection.target.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/geometry/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axisBox": () => (/* binding */ axisBox),
/* harmony export */   "convertAxisBoxToBoundingBox": () => (/* binding */ convertAxisBoxToBoundingBox),
/* harmony export */   "convertBoundingBoxToAxisBox": () => (/* binding */ convertBoundingBoxToAxisBox),
/* harmony export */   "copyAxisBox": () => (/* binding */ copyAxisBox),
/* harmony export */   "delta": () => (/* binding */ delta),
/* harmony export */   "transformBoundingBox": () => (/* binding */ transformBoundingBox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/framer-motion/dist/es/utils/noop.js");



/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToAxisBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertAxisBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return {
        top: y.min,
        bottom: y.max,
        left: x.min,
        right: x.max,
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoundingBox(_a, transformPoint) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    if (transformPoint === void 0) { transformPoint = _noop_js__WEBPACK_IMPORTED_MODULE_0__.noop; }
    var topLeft = transformPoint({ x: left, y: top });
    var bottomRight = transformPoint({ x: right, y: bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}
/**
 * Create an empty axis box of zero size
 */
function axisBox() {
    return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function copyAxisBox(box) {
    return {
        x: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, box.x),
        y: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, box.y),
    };
}
/**
 * Create an empty box delta
 */
var zeroDelta = {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
};
function delta() {
    return {
        x: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, zeroDelta),
        y: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, zeroDelta),
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-browser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser)
/* harmony export */ });
var isBrowser = typeof window !== "undefined";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-numerical-string.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumericalString": () => (/* binding */ isNumericalString)
/* harmony export */ });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function (v) { return /^\-?\d*\.?\d+$/.test(v); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-ref-object.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRefObject": () => (/* binding */ isRefObject)
/* harmony export */ });
function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/noop.js":
/*!**********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/noop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop(any) {
    return any;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/resolve-value.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/resolve-value.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCustomValue": () => (/* binding */ isCustomValue),
/* harmony export */   "resolveFinalValueInKeyframes": () => (/* binding */ resolveFinalValueInKeyframes)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");


var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0,_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/shallow-compare.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/shallow-compare.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare)
/* harmony export */ });
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/subscription-manager.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionManager": () => (/* binding */ SubscriptionManager)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/framer-motion/dist/es/utils/array.js");


var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
        this.subscriptions = [];
    }
    SubscriptionManager.prototype.add = function (handler) {
        var _this = this;
        (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.subscriptions, handler);
        return function () { return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.removeItem)(_this.subscriptions, handler); };
    };
    SubscriptionManager.prototype.notify = function (a, b, c) {
        var numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (var i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                var handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    };
    SubscriptionManager.prototype.getSize = function () {
        return this.subscriptions.length;
    };
    SubscriptionManager.prototype.clear = function () {
        this.subscriptions.length = 0;
    };
    return SubscriptionManager;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/time-conversion.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/time-conversion.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "secondsToMilliseconds": () => (/* binding */ secondsToMilliseconds)
/* harmony export */ });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-constant.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-constant.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConstant": () => (/* binding */ useConstant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _is_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser.js */ "./node_modules/framer-motion/dist/es/utils/is-browser.js");



var useIsomorphicLayoutEffect = _is_browser_js__WEBPACK_IMPORTED_MODULE_1__.isBrowser ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUnmountEffect": () => (/* binding */ useUnmountEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function useUnmountEffect(callback) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return function () { return callback(); }; }, []);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionValue": () => (/* binding */ MotionValue),
/* harmony export */   "motionValue": () => (/* binding */ motionValue)
/* harmony export */ });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js");
/* harmony import */ var _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/subscription-manager.js */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js");




var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init) {
        var _this = this;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Functions to notify when the velocity updates.
         *
         * @internal
         */
        this.velocityUpdateSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = v;
            // Update timestamp
            var _a = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_0__.default.postRender(_this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (_this.prev !== _this.current) {
                _this.updateSubscribers.notify(_this.current);
            }
            // Update velocity subscribers
            if (_this.velocityUpdateSubscribers.getSize()) {
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
            // Update render subscribers
            if (render) {
                _this.renderSubscribers.notify(_this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_0__.default.postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * @library
     *
     * ```jsx
     * function MyComponent() {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <Frame x={x} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @internalremarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        return this.updateSubscribers.add(subscription);
    };
    MotionValue.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * @public
     */
    MotionValue.prototype.getPrevious = function () {
        return this.prev;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.velocityPerSecond)(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.hasAnimated = true;
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
    };
    return MotionValue;
}());
/**
 * @internal
 */
function motionValue(init) {
    return new MotionValue(init);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMotionValue": () => (/* binding */ isMotionValue)
/* harmony export */ });
var isMotionValue = function (value) {
    return value !== null && typeof value === "object" && value.getVelocity;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveMotionValue": () => (/* binding */ resolveMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/resolve-value.js */ "./node_modules/framer-motion/dist/es/utils/resolve-value.js");
/* harmony import */ var _is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function resolveMotionValue(value) {
    var unwrappedValue = (0,_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value.get() : value;
    return (0,_utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_1__.isCustomValue)(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}




/***/ }),

/***/ "./node_modules/framesync/dist/es/create-render-step.js":
/*!**************************************************************!*\
  !*** ./node_modules/framesync/dist/es/create-render-step.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRenderStep": () => (/* binding */ createRenderStep)
/* harmony export */ });
function createRenderStep(runNextFrame) {
    var toRun = [];
    var toRunNextFrame = [];
    var numToRun = 0;
    var isProcessing = false;
    var toKeepAlive = new WeakSet();
    var step = {
        schedule: function (callback, keepAlive, immediate) {
            if (keepAlive === void 0) { keepAlive = false; }
            if (immediate === void 0) { immediate = false; }
            var addToCurrentFrame = immediate && isProcessing;
            var buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentFrame && isProcessing)
                    numToRun = toRun.length;
            }
            return callback;
        },
        cancel: function (callback) {
            var index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
                toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        process: function (frameData) {
            var _a;
            isProcessing = true;
            _a = [toRunNextFrame, toRun], toRun = _a[0], toRunNextFrame = _a[1];
            toRunNextFrame.length = 0;
            numToRun = toRun.length;
            if (numToRun) {
                for (var i = 0; i < numToRun; i++) {
                    var callback = toRun[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
        },
    };
    return step;
}




/***/ }),

/***/ "./node_modules/framesync/dist/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/framesync/dist/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cancelSync": () => (/* binding */ cancelSync),
/* harmony export */   "flushSync": () => (/* binding */ flushSync),
/* harmony export */   "getFrameData": () => (/* binding */ getFrameData)
/* harmony export */ });
/* harmony import */ var _on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-next-frame.js */ "./node_modules/framesync/dist/es/on-next-frame.js");
/* harmony import */ var _create_render_step_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-render-step.js */ "./node_modules/framesync/dist/es/create-render-step.js");



var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var steps = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = (0,_create_render_step_js__WEBPACK_IMPORTED_MODULE_1__.createRenderStep)(function () {
        return runNextFrame = true;
    });
    return acc;
}, {});
var sync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    var step = steps[key];
    acc[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) {
            keepAlive = false;
        }
        if (immediate === void 0) {
            immediate = false;
        }
        if (!runNextFrame) startLoop();
        return step.schedule(process, keepAlive, immediate);
    };
    return acc;
}, {});
var cancelSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
var flushSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = function () {
        return steps[key].process(frame);
    };
    return acc;
}, {});
var processStep = function (stepId) {
    return steps[stepId].process(frame);
};
var processFrame = function (timestamp) {
    runNextFrame = false;
    frame.delta = useDefaultElapsed ? _on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__.defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
        useDefaultElapsed = false;
        (0,_on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);
    }
};
var startLoop = function () {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing) (0,_on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);
};
var getFrameData = function () {
    return frame;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sync);



/***/ }),

/***/ "./node_modules/framesync/dist/es/on-next-frame.js":
/*!*********************************************************!*\
  !*** ./node_modules/framesync/dist/es/on-next-frame.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTimestep": () => (/* binding */ defaultTimestep),
/* harmony export */   "onNextFrame": () => (/* binding */ onNextFrame)
/* harmony export */ });
var defaultTimestep = (1 / 60) * 1000;
var getCurrentTime = typeof performance !== "undefined"
    ? function () { return performance.now(); }
    : function () { return Date.now(); };
var onNextFrame = typeof window !== "undefined"
    ? function (callback) {
        return window.requestAnimationFrame(callback);
    }
    : function (callback) {
        return setTimeout(function () { return callback(getCurrentTime()); }, defaultTimestep);
    };




/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariant": () => (/* binding */ invariant),
/* harmony export */   "warning": () => (/* binding */ warning)
/* harmony export */ });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/decay.js":
/*!***********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/decay.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decay": () => (/* binding */ decay)
/* harmony export */ });
function decay(_a) {
    var _b = _a.velocity, velocity = _b === void 0 ? 0 : _b, _c = _a.from, from = _c === void 0 ? 0 : _c, _d = _a.power, power = _d === void 0 ? 0.8 : _d, _e = _a.timeConstant, timeConstant = _e === void 0 ? 350 : _e, _f = _a.restDelta, restDelta = _f === void 0 ? 0.5 : _f, modifyTarget = _a.modifyTarget;
    var state = { done: false, value: from };
    var amplitude = power * velocity;
    var ideal = from + amplitude;
    var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal)
        amplitude = target - from;
    return {
        next: function (t) {
            var delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: function () { },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/keyframes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/keyframes.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertOffsetToTimes": () => (/* binding */ convertOffsetToTimes),
/* harmony export */   "defaultEasing": () => (/* binding */ defaultEasing),
/* harmony export */   "defaultOffset": () => (/* binding */ defaultOffset),
/* harmony export */   "keyframes": () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _utils_interpolate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/interpolate.js */ "./node_modules/popmotion/dist/es/utils/interpolate.js");
/* harmony import */ var _easing_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../easing/index.js */ "./node_modules/popmotion/dist/es/easing/index.js");



function defaultEasing(values, easing) {
    return values.map(function () { return easing || _easing_index_js__WEBPACK_IMPORTED_MODULE_0__.easeInOut; }).splice(0, values.length - 1);
}
function defaultOffset(values) {
    var numValues = values.length;
    return values.map(function (_value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
}
function convertOffsetToTimes(offset, duration) {
    return offset.map(function (o) { return o * duration; });
}
function keyframes(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c, ease = _a.ease, offset = _a.offset, _d = _a.duration, duration = _d === void 0 ? 300 : _d;
    var state = { done: false, value: from };
    var values = Array.isArray(to) ? to : [from, to];
    var times = convertOffsetToTimes(offset && offset.length === values.length
        ? offset
        : defaultOffset(values), duration);
    function createInterpolator() {
        return (0,_utils_interpolate_js__WEBPACK_IMPORTED_MODULE_1__.interpolate)(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease),
        });
    }
    var interpolator = createInterpolator();
    return {
        next: function (t) {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: function () {
            values.reverse();
            interpolator = createInterpolator();
        },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/spring.js":
/*!************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/spring.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spring": () => (/* binding */ spring)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_find_spring_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/find-spring.js */ "./node_modules/popmotion/dist/es/animations/utils/find-spring.js");



var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some(function (key) { return options[key] !== undefined; });
}
function getSpringOptions(options) {
    var springOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ velocity: 0.0, stiffness: 100, damping: 10, mass: 1.0, isResolvedFromDuration: false }, options);
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        var derived = (0,_utils_find_spring_js__WEBPACK_IMPORTED_MODULE_1__.findSpring)(options);
        springOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, springOptions), derived), { velocity: 0.0, mass: 1.0 });
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring(_a) {
    var _b = _a.from, from = _b === void 0 ? 0.0 : _b, _c = _a.to, to = _c === void 0 ? 1.0 : _c, _d = _a.restSpeed, restSpeed = _d === void 0 ? 2 : _d, restDelta = _a.restDelta, options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["from", "to", "restSpeed", "restDelta"]);
    var state = { done: false, value: from };
    var _e = getSpringOptions(options), stiffness = _e.stiffness, damping = _e.damping, mass = _e.mass, velocity = _e.velocity, isResolvedFromDuration = _e.isResolvedFromDuration;
    var resolveSpring = zero;
    var resolveVelocity = zero;
    function createSpring() {
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var initialDelta = to - from;
        var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        var undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        restDelta !== null && restDelta !== void 0 ? restDelta : (restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4);
        if (dampingRatio < 1) {
            var angularFreq_1 = (0,_utils_find_spring_js__WEBPACK_IMPORTED_MODULE_1__.calcAngularFreq)(undampedAngularFreq, dampingRatio);
            resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (to -
                    envelope *
                        (((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) /
                            angularFreq_1) *
                            Math.sin(angularFreq_1 * t) +
                            initialDelta * Math.cos(angularFreq_1 * t)));
            };
            resolveVelocity = function (t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (dampingRatio *
                    undampedAngularFreq *
                    envelope *
                    ((Math.sin(angularFreq_1 * t) *
                        (initialVelocity +
                            dampingRatio *
                                undampedAngularFreq *
                                initialDelta)) /
                        angularFreq_1 +
                        initialDelta * Math.cos(angularFreq_1 * t)) -
                    envelope *
                        (Math.cos(angularFreq_1 * t) *
                            (initialVelocity +
                                dampingRatio *
                                    undampedAngularFreq *
                                    initialDelta) -
                            angularFreq_1 *
                                initialDelta *
                                Math.sin(angularFreq_1 * t)));
            };
        }
        else if (dampingRatio === 1) {
            resolveSpring = function (t) {
                return to -
                    Math.exp(-undampedAngularFreq * t) *
                        (initialDelta +
                            (initialVelocity + undampedAngularFreq * initialDelta) *
                                t);
            };
        }
        else {
            var dampedAngularFreq_1 = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
                return (to -
                    (envelope *
                        ((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) *
                            Math.sinh(freqForT) +
                            dampedAngularFreq_1 *
                                initialDelta *
                                Math.cosh(freqForT))) /
                        dampedAngularFreq_1);
            };
        }
    }
    createSpring();
    return {
        next: function (t) {
            var current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                var currentVelocity = resolveVelocity(t) * 1000;
                var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= options.duration;
            }
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: function () {
            var _a;
            velocity = -velocity;
            _a = [to, from], from = _a[0], to = _a[1];
            createSpring();
        },
    };
}
spring.needsInterpolation = function (a, b) {
    return typeof a === "string" || typeof b === "string";
};
var zero = function (_t) { return 0; };




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/index.js":
/*!************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_detect_animation_from_options_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/detect-animation-from-options.js */ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _utils_interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/interpolate.js */ "./node_modules/popmotion/dist/es/utils/interpolate.js");
/* harmony import */ var _utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/elapsed.js */ "./node_modules/popmotion/dist/es/animations/utils/elapsed.js");






var framesync = function (update) {
    var passTimestamp = function (_a) {
        var delta = _a.delta;
        return update(delta);
    };
    return {
        start: function () { return framesync__WEBPACK_IMPORTED_MODULE_0__.default.update(passTimestamp, true); },
        stop: function () { return framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(passTimestamp); },
    };
};
function animate(_a) {
    var _b, _c;
    var from = _a.from, _d = _a.autoplay, autoplay = _d === void 0 ? true : _d, _e = _a.driver, driver = _e === void 0 ? framesync : _e, _f = _a.elapsed, elapsed = _f === void 0 ? 0 : _f, _g = _a.repeat, repeatMax = _g === void 0 ? 0 : _g, _h = _a.repeatType, repeatType = _h === void 0 ? "loop" : _h, _j = _a.repeatDelay, repeatDelay = _j === void 0 ? 0 : _j, onPlay = _a.onPlay, onStop = _a.onStop, onComplete = _a.onComplete, onRepeat = _a.onRepeat, onUpdate = _a.onUpdate, options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    var to = options.to;
    var driverControls;
    var repeatCount = 0;
    var computedDuration = options.duration;
    var latest;
    var isComplete = false;
    var isForwardPlayback = true;
    var interpolateFromNumber;
    var animator = (0,_utils_detect_animation_from_options_js__WEBPACK_IMPORTED_MODULE_2__.detectAnimationFromOptions)(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = (0,_utils_interpolate_js__WEBPACK_IMPORTED_MODULE_3__.interpolate)([0, 100], [from, to], {
            clamp: false,
        });
        from = 0;
        to = 100;
    }
    var animation = animator((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), { from: from, to: to }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = (0,_utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__.reverseElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        }
        else {
            elapsed = (0,_utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__.loopElapsed)(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror")
                animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback)
            delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            var state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber)
                latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0)
                computedDuration !== null && computedDuration !== void 0 ? computedDuration : (computedDuration = elapsed);
            if (repeatCount < repeatMax) {
                (0,_utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__.hasRepeatDelayElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            }
            else {
                complete();
            }
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        stop: function () {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
        },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/inertia.js":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/inertia.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inertia": () => (/* binding */ inertia)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/popmotion/dist/es/animations/index.js");
/* harmony import */ var _utils_velocity_per_second_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/velocity-per-second.js */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");





function inertia(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.velocity, velocity = _c === void 0 ? 0 : _c, min = _a.min, max = _a.max, _d = _a.power, power = _d === void 0 ? 0.8 : _d, _e = _a.timeConstant, timeConstant = _e === void 0 ? 750 : _e, _f = _a.bounceStiffness, bounceStiffness = _f === void 0 ? 500 : _f, _g = _a.bounceDamping, bounceDamping = _g === void 0 ? 10 : _g, _h = _a.restDelta, restDelta = _h === void 0 ? 1 : _h, modifyTarget = _a.modifyTarget, driver = _a.driver, onUpdate = _a.onUpdate, onComplete = _a.onComplete;
    var currentAnimation;
    function isOutOfBounds(v) {
        return (min !== undefined && v < min) || (max !== undefined && v > max);
    }
    function boundaryNearest(v) {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.animate)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { driver: driver, onUpdate: function (v) {
                var _a;
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            }, onComplete: onComplete }));
    }
    function startSpring(options) {
        startAnimation((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta }, options));
    }
    if (isOutOfBounds(from)) {
        startSpring({ from: from, velocity: velocity, to: boundaryNearest(from) });
    }
    else {
        var target = power * velocity + from;
        if (typeof modifyTarget !== "undefined")
            target = modifyTarget(target);
        var boundary_1 = boundaryNearest(target);
        var heading_1 = boundary_1 === min ? -1 : 1;
        var prev_1;
        var current_1;
        var checkBoundary = function (v) {
            prev_1 = current_1;
            current_1 = v;
            velocity = (0,_utils_velocity_per_second_js__WEBPACK_IMPORTED_MODULE_3__.velocityPerSecond)(v - prev_1, (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().delta);
            if ((heading_1 === 1 && v > boundary_1) ||
                (heading_1 === -1 && v < boundary_1)) {
                startSpring({ from: v, to: boundary_1, velocity: velocity });
            }
        };
        startAnimation({
            type: "decay",
            from: from,
            velocity: velocity,
            timeConstant: timeConstant,
            power: power,
            restDelta: restDelta,
            modifyTarget: modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined,
        });
    }
    return {
        stop: function () { return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop(); },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectAnimationFromOptions": () => (/* binding */ detectAnimationFromOptions)
/* harmony export */ });
/* harmony import */ var _generators_spring_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/spring.js */ "./node_modules/popmotion/dist/es/animations/generators/spring.js");
/* harmony import */ var _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/keyframes.js */ "./node_modules/popmotion/dist/es/animations/generators/keyframes.js");
/* harmony import */ var _generators_decay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generators/decay.js */ "./node_modules/popmotion/dist/es/animations/generators/decay.js");




var types = { keyframes: _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__.keyframes, spring: _generators_spring_js__WEBPACK_IMPORTED_MODULE_1__.spring, decay: _generators_decay_js__WEBPACK_IMPORTED_MODULE_2__.decay };
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__.keyframes;
    }
    else if (types[config.type]) {
        return types[config.type];
    }
    var keys = new Set(Object.keys(config));
    if (keys.has("ease") ||
        (keys.has("duration") && !keys.has("dampingRatio"))) {
        return _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__.keyframes;
    }
    else if (keys.has("dampingRatio") ||
        keys.has("stiffness") ||
        keys.has("mass") ||
        keys.has("damping") ||
        keys.has("restSpeed") ||
        keys.has("restDelta")) {
        return _generators_spring_js__WEBPACK_IMPORTED_MODULE_1__.spring;
    }
    return _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__.keyframes;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/elapsed.js":
/*!********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/elapsed.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasRepeatDelayElapsed": () => (/* binding */ hasRepeatDelayElapsed),
/* harmony export */   "loopElapsed": () => (/* binding */ loopElapsed),
/* harmony export */   "reverseElapsed": () => (/* binding */ reverseElapsed)
/* harmony export */ });
function loopElapsed(elapsed, duration, delay) {
    if (delay === void 0) { delay = 0; }
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
    if (delay === void 0) { delay = 0; }
    if (isForwardPlayback === void 0) { isForwardPlayback = true; }
    return isForwardPlayback
        ? loopElapsed(duration + -elapsed, duration, delay)
        : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/find-spring.js":
/*!************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/find-spring.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcAngularFreq": () => (/* binding */ calcAngularFreq),
/* harmony export */   "findSpring": () => (/* binding */ findSpring),
/* harmony export */   "maxDamping": () => (/* binding */ maxDamping),
/* harmony export */   "maxDuration": () => (/* binding */ maxDuration),
/* harmony export */   "minDamping": () => (/* binding */ minDamping),
/* harmony export */   "minDuration": () => (/* binding */ minDuration)
/* harmony export */ });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/clamp.js */ "./node_modules/popmotion/dist/es/utils/clamp.js");



var safeMin = 0.001;
var minDuration = 0.01;
var maxDuration = 10.0;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring(_a) {
    var _b = _a.duration, duration = _b === void 0 ? 800 : _b, _c = _a.bounce, bounce = _c === void 0 ? 0.25 : _c, _d = _a.velocity, velocity = _d === void 0 ? 0 : _d, _e = _a.mass, mass = _e === void 0 ? 1 : _e;
    var envelope;
    var derivative;
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
    var dampingRatio = 1 - bounce;
    dampingRatio = (0,_utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(minDamping, maxDamping, dampingRatio);
    duration = (0,_utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(minDuration, maxDuration, duration / 1000);
    if (dampingRatio < 1) {
        envelope = function (undampedFreq) {
            var exponentialDecay = undampedFreq * dampingRatio;
            var delta = exponentialDecay * duration;
            var a = exponentialDecay - velocity;
            var b = calcAngularFreq(undampedFreq, dampingRatio);
            var c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = function (undampedFreq) {
            var exponentialDecay = undampedFreq * dampingRatio;
            var delta = exponentialDecay * duration;
            var d = delta * velocity + velocity;
            var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            var f = Math.exp(-delta);
            var g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            var factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        envelope = function (undampedFreq) {
            var a = Math.exp(-undampedFreq * duration);
            var b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = function (undampedFreq) {
            var a = Math.exp(-undampedFreq * duration);
            var b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    var initialGuess = 5 / duration;
    var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
        };
    }
    else {
        var stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness: stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        };
    }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    var result = initialGuess;
    for (var i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/cubic-bezier.js":
/*!***************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/cubic-bezier.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cubicBezier": () => (/* binding */ cubicBezier)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/popmotion/dist/es/easing/index.js");


var a = function (a1, a2) { return 1.0 - 3.0 * a2 + 3.0 * a1; };
var b = function (a1, a2) { return 3.0 * a2 - 6.0 * a1; };
var c = function (a1) { return 3.0 * a1; };
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX;
    var currentT;
    var i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < newtonIterations; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.linear;
    var sampleValues = new Float32Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) /
            (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function (t) {
        return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/index.js":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anticipate": () => (/* binding */ anticipate),
/* harmony export */   "backIn": () => (/* binding */ backIn),
/* harmony export */   "backInOut": () => (/* binding */ backInOut),
/* harmony export */   "backOut": () => (/* binding */ backOut),
/* harmony export */   "bounceIn": () => (/* binding */ bounceIn),
/* harmony export */   "bounceInOut": () => (/* binding */ bounceInOut),
/* harmony export */   "bounceOut": () => (/* binding */ bounceOut),
/* harmony export */   "circIn": () => (/* binding */ circIn),
/* harmony export */   "circInOut": () => (/* binding */ circInOut),
/* harmony export */   "circOut": () => (/* binding */ circOut),
/* harmony export */   "easeIn": () => (/* binding */ easeIn),
/* harmony export */   "easeInOut": () => (/* binding */ easeInOut),
/* harmony export */   "easeOut": () => (/* binding */ easeOut),
/* harmony export */   "linear": () => (/* binding */ linear)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/popmotion/dist/es/easing/utils.js");


var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var linear = function (p) { return p; };
var easeIn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createExpoIn)(2);
var easeOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(easeIn);
var easeInOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(easeIn);
var circIn = function (p) { return 1 - Math.sin(Math.acos(p)); };
var circOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(circIn);
var circInOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(circOut);
var backIn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createBackIn)(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(backIn);
var backInOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(backIn);
var anticipate = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createAnticipate)(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function (p) {
    if (p === 1 || p === 0)
        return p;
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD
        ? 7.5625 * p2
        : p < BOUNCE_SECOND_THRESHOLD
            ? 9.075 * p2 - 9.9 * p + 3.4
            : p < BOUNCE_THIRD_THRESHOLD
                ? ca * p2 - cb * p + cc
                : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(bounceOut);
var bounceInOut = function (p) {
    return p < 0.5
        ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0))
        : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnticipate": () => (/* binding */ createAnticipate),
/* harmony export */   "createBackIn": () => (/* binding */ createBackIn),
/* harmony export */   "createExpoIn": () => (/* binding */ createExpoIn),
/* harmony export */   "mirrorEasing": () => (/* binding */ mirrorEasing),
/* harmony export */   "reverseEasing": () => (/* binding */ reverseEasing)
/* harmony export */ });
var reverseEasing = function (easing) { return function (p) { return 1 - easing(1 - p); }; };
var mirrorEasing = function (easing) { return function (p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
}; };
var createExpoIn = function (power) { return function (p) { return Math.pow(p, power); }; };
var createBackIn = function (power) { return function (p) {
    return p * p * ((power + 1) * p - power);
}; };
var createAnticipate = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1
            ? 0.5 * backEasing(p)
            : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/clamp.js":
/*!*******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/clamp.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp)
/* harmony export */ });
var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/distance.js":
/*!**********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/distance.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distance": () => (/* binding */ distance)
/* harmony export */ });
/* harmony import */ var _is_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-point.js */ "./node_modules/popmotion/dist/es/utils/is-point.js");
/* harmony import */ var _is_point_3d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-point-3d.js */ "./node_modules/popmotion/dist/es/utils/is-point-3d.js");
/* harmony import */ var _inc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inc.js */ "./node_modules/popmotion/dist/es/utils/inc.js");




var distance1D = function (a, b) { return Math.abs(a - b); };
function distance(a, b) {
    if ((0,_inc_js__WEBPACK_IMPORTED_MODULE_0__.isNum)(a) && (0,_inc_js__WEBPACK_IMPORTED_MODULE_0__.isNum)(b)) {
        return distance1D(a, b);
    }
    else if ((0,_is_point_js__WEBPACK_IMPORTED_MODULE_1__.isPoint)(a) && (0,_is_point_js__WEBPACK_IMPORTED_MODULE_1__.isPoint)(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = (0,_is_point_3d_js__WEBPACK_IMPORTED_MODULE_2__.isPoint3D)(a) && (0,_is_point_3d_js__WEBPACK_IMPORTED_MODULE_2__.isPoint3D)(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/inc.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/inc.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNum": () => (/* binding */ isNum),
/* harmony export */   "zeroPoint": () => (/* binding */ zeroPoint)
/* harmony export */ });
var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) { return typeof v === 'number'; };




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/interpolate.js":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/interpolate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolate": () => (/* binding */ interpolate)
/* harmony export */ });
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.js */ "./node_modules/popmotion/dist/es/utils/progress.js");
/* harmony import */ var _mix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var _mix_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix-color.js */ "./node_modules/popmotion/dist/es/utils/mix-color.js");
/* harmony import */ var _mix_complex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mix-complex.js */ "./node_modules/popmotion/dist/es/utils/mix-complex.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var _clamp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clamp.js */ "./node_modules/popmotion/dist/es/utils/clamp.js");
/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe.js */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");









var mixNumber = function (from, to) { return function (p) { return (0,_mix_js__WEBPACK_IMPORTED_MODULE_1__.mix)(from, to, p); }; };
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_2__.color.test(v)) {
            return _mix_color_js__WEBPACK_IMPORTED_MODULE_3__.mixColor;
        }
        else {
            return _mix_complex_js__WEBPACK_IMPORTED_MODULE_4__.mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return _mix_complex_js__WEBPACK_IMPORTED_MODULE_4__.mixArray;
    }
    else if (typeof v === 'object') {
        return _mix_complex_js__WEBPACK_IMPORTED_MODULE_4__.mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = (0,_pipe_js__WEBPACK_IMPORTED_MODULE_5__.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate(_a, _b) {
    var from = _a[0], to = _a[1];
    var mixer = _b[0];
    return function (v) { return mixer((0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.progress)(from, to, v)); };
}
function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = (0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.progress)(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.clamp, isClamp = _c === void 0 ? true : _c, ease = _b.ease, mixer = _b.mixer;
    var inputLength = input.length;
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(inputLength === output.length, 'Both input and output ranges must be the same length');
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return isClamp
        ? function (v) { return interpolator((0,_clamp_js__WEBPACK_IMPORTED_MODULE_7__.clamp)(input[0], input[inputLength - 1], v)); }
        : interpolator;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point-3d.js":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point-3d.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPoint3D": () => (/* binding */ isPoint3D)
/* harmony export */ });
/* harmony import */ var _is_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-point.js */ "./node_modules/popmotion/dist/es/utils/is-point.js");


var isPoint3D = function (point) {
    return (0,_is_point_js__WEBPACK_IMPORTED_MODULE_0__.isPoint)(point) && point.hasOwnProperty('z');
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point.js":
/*!**********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPoint": () => (/* binding */ isPoint)
/* harmony export */ });
var isPoint = function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-color.js":
/*!***********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-color.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixColor": () => (/* binding */ mixColor),
/* harmony export */   "mixLinearColor": () => (/* binding */ mixLinearColor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/hex.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/rgba.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/hsla.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");





var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_1__.hex, style_value_types__WEBPACK_IMPORTED_MODULE_2__.rgba, style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla];
var getColorType = function (v) {
    return colorTypes.find(function (type) { return type.test(v); });
};
var notAnimatable = function (color) {
    return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!fromColorType, notAnimatable(from));
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!toColorType, notAnimatable(to));
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(fromColorType.transform === toColorType.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla ? _mix_js__WEBPACK_IMPORTED_MODULE_5__.mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== "alpha") {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = (0,_mix_js__WEBPACK_IMPORTED_MODULE_5__.mix)(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-complex.js":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-complex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixArray": () => (/* binding */ mixArray),
/* harmony export */   "mixComplex": () => (/* binding */ mixComplex),
/* harmony export */   "mixObject": () => (/* binding */ mixObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _mix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var _mix_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mix-color.js */ "./node_modules/popmotion/dist/es/utils/mix-color.js");
/* harmony import */ var _inc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inc.js */ "./node_modules/popmotion/dist/es/utils/inc.js");
/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipe.js */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");








function getMixer(origin, target) {
    if ((0,_inc_js__WEBPACK_IMPORTED_MODULE_1__.isNum)(origin)) {
        return function (v) { return (0,_mix_js__WEBPACK_IMPORTED_MODULE_2__.mix)(origin, target, v); };
    }
    else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__.color.test(origin)) {
        return (0,_mix_color_js__WEBPACK_IMPORTED_MODULE_4__.mixColor)(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
var mixArray = function (from, to) {
    var output = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)([], from);
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) { return getMixer(fromThis, to[i]); });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function (origin, target) {
    var output = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, origin), target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function (v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_6__.complex.parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === "number") {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
}
var mixComplex = function (origin, target) {
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_6__.complex.createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return (0,_pipe_js__WEBPACK_IMPORTED_MODULE_7__.pipe)(mixArray(originStats.parsed, targetStats.parsed), template);
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mix": () => (/* binding */ mix)
/* harmony export */ });
var mix = function (from, to, progress) {
    return -progress * from + progress * to + from;
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/pipe.js":
/*!******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/pipe.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe)
/* harmony export */ });
var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
var pipe = function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/progress.js":
/*!**********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/progress.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "progress": () => (/* binding */ progress)
/* harmony export */ });
var progress = function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js":
/*!*********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/velocity-per-second.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "velocityPerSecond": () => (/* binding */ velocityPerSecond)
/* harmony export */ });
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ }),

/***/ "./node_modules/single-spa-react/lib/esm/single-spa-react.js":
/*!*******************************************************************!*\
  !*** ./node_modules/single-spa-react/lib/esm/single-spa-react.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "SingleSpaContext": () => (/* binding */ r)
/* harmony export */ });
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var r=null;try{r=require("react").createContext()}catch(e){}var a={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{}};function c(t){if("object"!==e(t))throw new Error("single-spa-react requires a configuration object");var n=o(o({},a),t);if(!n.React)throw new Error("single-spa-react must be passed opts.React");if(!n.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!n.rootComponent&&!n.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(n.errorBoundary&&"function"!=typeof n.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!r&&n.React.createContext&&(r=n.React.createContext());var c={bootstrap:i.bind(null,n),mount:p.bind(null,n),unmount:u.bind(null,n)};return n.parcelCanUpdate&&(c.update=l.bind(null,n)),c}function i(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function p(e,t){return new Promise((function(n,o){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var r=function(e,t){return t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof r)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=m(e,t),c=function(e,t){var n=e(t);if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(r,t);s({elementToRender:a,domElement:c,whenFinished:function(){n(this)},opts:e}),e.domElements[t.name]=c}))}function u(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function l(e,t){return new Promise((function(n,o){s({elementToRender:m(e,t),domElement:e.domElements[t.name],whenFinished:function(){n(this)},opts:e})}))}function s(e){var t=e.opts,n=e.elementToRender,o=e.domElement,r=e.whenFinished;return["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(t.renderType)>=0?t.ReactDOM[t.renderType](o).render(n,r):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,o,r):t.ReactDOM.render(n,o,r)}function m(e,t){var n=e.React.createElement(e.rootComponent,t),o=r?e.React.createElement(r.Provider,{value:t},n):n;return e.errorBoundary&&(e.errorBoundaryClass=e.errorBoundaryClass||function(e){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(e),o=e.React.createElement(e.errorBoundaryClass,t,o)),o}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);
//# sourceMappingURL=single-spa-react.js.map


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hex.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hex": () => (/* binding */ hex)
/* harmony export */ });
/* harmony import */ var _rgba_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgba.js */ "./node_modules/style-value-types/dist/es/color/rgba.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/style-value-types/dist/es/color/utils.js");



function parseHex(v) {
    var r = '';
    var g = '';
    var b = '';
    var a = '';
    if (v.length > 5) {
        r = v.substr(1, 2);
        g = v.substr(3, 2);
        b = v.substr(5, 2);
        a = v.substr(7, 2);
    }
    else {
        r = v.substr(1, 1);
        g = v.substr(2, 1);
        b = v.substr(3, 1);
        a = v.substr(4, 1);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
var hex = {
    test: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isColorString)('#'),
    parse: parseHex,
    transform: _rgba_js__WEBPACK_IMPORTED_MODULE_1__.rgba.transform,
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hsla.js":
/*!**************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hsla.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hsla": () => (/* binding */ hsla)
/* harmony export */ });
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/units.js */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/style-value-types/dist/es/color/utils.js");





var hsla = {
    test: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isColorString)('hsl', 'hue'),
    parse: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.splitColor)('hue', 'saturation', 'lightness'),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return ('hsla(' +
            Math.round(hue) +
            ', ' +
            _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitize)(saturation)) +
            ', ' +
            _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitize)(lightness)) +
            ', ' +
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitize)(_numbers_index_js__WEBPACK_IMPORTED_MODULE_3__.alpha.transform(alpha$1)) +
            ')');
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "color": () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");
/* harmony import */ var _hex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex.js */ "./node_modules/style-value-types/dist/es/color/hex.js");
/* harmony import */ var _hsla_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsla.js */ "./node_modules/style-value-types/dist/es/color/hsla.js");
/* harmony import */ var _rgba_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.js */ "./node_modules/style-value-types/dist/es/color/rgba.js");





var color = {
    test: function (v) { return _rgba_js__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v) || _hex_js__WEBPACK_IMPORTED_MODULE_1__.hex.test(v) || _hsla_js__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v); },
    parse: function (v) {
        if (_rgba_js__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v)) {
            return _rgba_js__WEBPACK_IMPORTED_MODULE_0__.rgba.parse(v);
        }
        else if (_hsla_js__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v)) {
            return _hsla_js__WEBPACK_IMPORTED_MODULE_2__.hsla.parse(v);
        }
        else {
            return _hex_js__WEBPACK_IMPORTED_MODULE_1__.hex.parse(v);
        }
    },
    transform: function (v) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(v)
            ? v
            : v.hasOwnProperty('red')
                ? _rgba_js__WEBPACK_IMPORTED_MODULE_0__.rgba.transform(v)
                : _hsla_js__WEBPACK_IMPORTED_MODULE_2__.hsla.transform(v);
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/rgba.js":
/*!**************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/rgba.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgbUnit": () => (/* binding */ rgbUnit),
/* harmony export */   "rgba": () => (/* binding */ rgba)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/style-value-types/dist/es/color/utils.js");





var clampRgbUnit = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 255);
var rgbUnit = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _numbers_index_js__WEBPACK_IMPORTED_MODULE_2__.number), { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
var rgba = {
    test: (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isColorString)('rgb', 'red'),
    parse: (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.splitColor)('red', 'green', 'blue'),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return 'rgba(' +
            rgbUnit.transform(red) +
            ', ' +
            rgbUnit.transform(green) +
            ', ' +
            rgbUnit.transform(blue) +
            ', ' +
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.sanitize)(_numbers_index_js__WEBPACK_IMPORTED_MODULE_2__.alpha.transform(alpha$1)) +
            ')';
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isColorString": () => (/* binding */ isColorString),
/* harmony export */   "splitColor": () => (/* binding */ splitColor)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");


var isColorString = function (type, testProp) { return function (v) {
    return Boolean(((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && _utils_js__WEBPACK_IMPORTED_MODULE_0__.singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
}; };
var splitColor = function (aName, bName, cName) { return function (v) {
    var _a;
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(v))
        return v;
    var _b = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex), a = _b[0], b = _b[1], c = _b[2], alpha = _b[3];
    return _a = {},
        _a[aName] = parseFloat(a),
        _a[bName] = parseFloat(b),
        _a[cName] = parseFloat(c),
        _a.alpha = alpha !== undefined ? parseFloat(alpha) : 1,
        _a;
}; };




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/filter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");




var maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function applyDefaultFilter(v) {
    var _a = v.slice(0, -1).split('('), name = _a[0], value = _a[1];
    if (name === 'drop-shadow')
        return v;
    var number = (value.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex) || [])[0];
    if (!number)
        return v;
    var unit = value.replace(number, '');
    var defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + '(' + defaultValue + unit + ')';
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _index_js__WEBPACK_IMPORTED_MODULE_2__.complex), { getAnimatableNone: function (v) {
        var functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(' ') : v;
    } });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "complex": () => (/* binding */ complex)
/* harmony export */ });
/* harmony import */ var _color_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color/index.js */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");




var colorToken = '${c}';
var numberToken = '${n}';
function test(v) {
    var _a, _b, _c, _d;
    return (isNaN(v) &&
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(v) &&
        ((_b = (_a = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0);
}
function analyse(v) {
    var values = [];
    var numColors = 0;
    var colors = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.colorRegex);
    if (colors) {
        numColors = colors.length;
        v = v.replace(_utils_js__WEBPACK_IMPORTED_MODULE_0__.colorRegex, colorToken);
        values.push.apply(values, colors.map(_color_index_js__WEBPACK_IMPORTED_MODULE_1__.color.parse));
    }
    var numbers = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex);
    if (numbers) {
        v = v.replace(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex, numberToken);
        values.push.apply(values, numbers.map(_numbers_index_js__WEBPACK_IMPORTED_MODULE_2__.number.parse));
    }
    return { values: values, numColors: numColors, tokenised: v };
}
function parse(v) {
    return analyse(v).values;
}
function createTransformer(v) {
    var _a = analyse(v), values = _a.values, numColors = _a.numColors, tokenised = _a.tokenised;
    var numValues = values.length;
    return function (v) {
        var output = tokenised;
        for (var i = 0; i < numValues; i++) {
            output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? _color_index_js__WEBPACK_IMPORTED_MODULE_1__.color.transform(v[i]) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.sanitize)(v[i]));
        }
        return output;
    };
}
var convertNumbersToZero = function (v) {
    return typeof v === 'number' ? 0 : v;
};
function getAnimatableNone(v) {
    var parsed = parse(v);
    var transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test: test, parse: parse, createTransformer: createTransformer, getAnimatableNone: getAnimatableNone };




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "number": () => (/* binding */ number),
/* harmony export */   "scale": () => (/* binding */ scale)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");



var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; },
};
var alpha = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, number), { transform: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(0, 1) });
var scale = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, number), { default: 1 });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/units.js":
/*!*****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/units.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "degrees": () => (/* binding */ degrees),
/* harmony export */   "percent": () => (/* binding */ percent),
/* harmony export */   "progressPercentage": () => (/* binding */ progressPercentage),
/* harmony export */   "px": () => (/* binding */ px),
/* harmony export */   "vh": () => (/* binding */ vh),
/* harmony export */   "vw": () => (/* binding */ vw)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");



var createUnitType = function (unit) { return ({
    test: function (v) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; },
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "colorRegex": () => (/* binding */ colorRegex),
/* harmony export */   "floatRegex": () => (/* binding */ floatRegex),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "sanitize": () => (/* binding */ sanitize),
/* harmony export */   "singleColorRegex": () => (/* binding */ singleColorRegex)
/* harmony export */ });
var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString(v) {
    return typeof v === 'string';
}




/***/ }),

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");

var Cache = /** @class */ (function () {
    function Cache(initialData) {
        if (initialData === void 0) { initialData = {}; }
        this.cache = new Map(Object.entries(initialData));
        this.subs = [];
    }
    Cache.prototype.get = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.cache.get(_key);
    };
    Cache.prototype.set = function (key, value) {
        var _key = this.serializeKey(key)[0];
        this.cache.set(_key, value);
        this.notify();
    };
    Cache.prototype.keys = function () {
        return Array.from(this.cache.keys());
    };
    Cache.prototype.has = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.cache.has(_key);
    };
    Cache.prototype.clear = function () {
        this.cache.clear();
        this.notify();
    };
    Cache.prototype.delete = function (key) {
        var _key = this.serializeKey(key)[0];
        this.cache.delete(_key);
        this.notify();
    };
    // TODO: introduce namespace for the cache
    Cache.prototype.serializeKey = function (key) {
        var args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = (0,_libs_hash__WEBPACK_IMPORTED_MODULE_0__.default)(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        var errorKey = key ? 'err@' + key : '';
        var isValidatingKey = key ? 'validating@' + key : '';
        return [key, args, errorKey, isValidatingKey];
    };
    Cache.prototype.subscribe = function (listener) {
        var _this = this;
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        var isSubscribed = true;
        this.subs.push(listener);
        return function () {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            var index = _this.subs.indexOf(listener);
            if (index > -1) {
                _this.subs[index] = _this.subs[_this.subs.length - 1];
                _this.subs.length--;
            }
        };
    };
    // Notify Cache subscribers about a change in the cache
    Cache.prototype.notify = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return Cache;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cache);


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cache": () => (/* binding */ cache),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dequal_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dequal/lite */ "./node_modules/dequal/lite/index.mjs");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");
/* harmony import */ var _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/web-preset */ "./node_modules/swr/esm/libs/web-preset.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// cache
var cache = new _cache__WEBPACK_IMPORTED_MODULE_1__.default();
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!config.isDocumentVisible()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (typeof config.errorRetryCount === 'number' &&
        opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    var count = Math.min(opts.retryCount, 8);
    var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
var slowConnection = typeof window !== 'undefined' &&
    // @ts-ignore
    navigator['connection'] &&
    // @ts-ignore
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
var defaultConfig = __assign({ 
    // events
    onLoadingSlow: function () { }, onSuccess: function () { }, onError: function () { }, onErrorRetry: onErrorRetry, errorRetryInterval: (slowConnection ? 10 : 5) * 1000, focusThrottleInterval: 5 * 1000, dedupingInterval: 2 * 1000, loadingTimeout: (slowConnection ? 5 : 3) * 1000, refreshInterval: 0, revalidateOnFocus: true, revalidateOnReconnect: true, refreshWhenHidden: false, refreshWhenOffline: false, shouldRetryOnError: true, suspense: false, compare: dequal_lite__WEBPACK_IMPORTED_MODULE_0__.dequal, isPaused: function () { return false; } }, _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/env.js":
/*!*************************************!*\
  !*** ./node_modules/swr/esm/env.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_SERVER": () => (/* binding */ IS_SERVER),
/* harmony export */   "rAF": () => (/* binding */ rAF),
/* harmony export */   "useIsomorphicLayoutEffect": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

var IS_SERVER = typeof window === 'undefined' ||
    // @ts-ignore
    !!(typeof Deno !== 'undefined' && Deno && Deno.version && Deno.version.deno);
// polyfill for requestAnimationFrame
var rAF = IS_SERVER
    ? null
    : window['requestAnimationFrame']
        ? function (f) { return window['requestAnimationFrame'](f); }
        : function (f) { return setTimeout(f, 1); };
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "SWRConfig": () => (/* reexport safe */ _use_swr__WEBPACK_IMPORTED_MODULE_0__.SWRConfig),
/* harmony export */   "mutate": () => (/* reexport safe */ _use_swr__WEBPACK_IMPORTED_MODULE_0__.mutate),
/* harmony export */   "trigger": () => (/* reexport safe */ _use_swr__WEBPACK_IMPORTED_MODULE_0__.trigger),
/* harmony export */   "useSWRInfinite": () => (/* reexport safe */ _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__.useSWRInfinite),
/* harmony export */   "cache": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_2__.cache)
/* harmony export */ });
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony import */ var _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-infinite */ "./node_modules/swr/esm/use-swr-infinite.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
// `useSWR` and related APIs

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_use_swr__WEBPACK_IMPORTED_MODULE_0__.default);

// `useSWRInfinite`

// Cache related, to be replaced by the new APIs



/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hash)
/* harmony export */ });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    var key = 'arg';
    for (var i = 0; i < args.length; ++i) {
        if (args[i] === null) {
            key += '@null';
            continue;
        }
        var _hash = void 0;
        if (typeof args[i] !== 'object' && typeof args[i] !== 'function') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/web-preset.js":
/*!*************************************************!*\
  !*** ./node_modules/swr/esm/libs/web-preset.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a work around, we always assume it's online on first load, and change
 * the status upon `online` or `offline` events.
 */
var online = true;
var isOnline = function () { return online; };
var isDocumentVisible = function () {
    if (typeof document !== 'undefined' &&
        document.visibilityState !== undefined) {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
};
var fetcher = function (url) { return fetch(url).then(function (res) { return res.json(); }); };
var registerOnFocus = function (cb) {
    if (typeof window !== 'undefined' &&
        window.addEventListener !== undefined &&
        typeof document !== 'undefined' &&
        document.addEventListener !== undefined) {
        // focus revalidate
        document.addEventListener('visibilitychange', function () { return cb(); }, false);
        window.addEventListener('focus', function () { return cb(); }, false);
    }
};
var registerOnReconnect = function (cb) {
    if (typeof window !== 'undefined' && window.addEventListener !== undefined) {
        // reconnect revalidate
        window.addEventListener('online', function () {
            online = true;
            cb();
        }, false);
        // nothing to revalidate, just update the status
        window.addEventListener('offline', function () { return (online = false); }, false);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    isOnline: isOnline,
    isDocumentVisible: isDocumentVisible,
    fetcher: fetcher,
    registerOnFocus: registerOnFocus,
    registerOnReconnect: registerOnReconnect
});


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

var SWRConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-infinite.js":
/*!**************************************************!*\
  !*** ./node_modules/swr/esm/use-swr-infinite.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSWRInfinite": () => (/* binding */ useSWRInfinite)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./node_modules/swr/esm/env.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// TODO: use @ts-expect-error





function useSWRInfinite() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var getKey = args[0];
    var config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__.default, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_swr_config_context__WEBPACK_IMPORTED_MODULE_3__.default), args.length > 2
        ? args[2]
        : args.length === 2 && typeof args[1] === 'object'
            ? args[1]
            : {});
    // in typescript args.length > 2 is not same as args.lenth === 3
    // we do a safe type assertion here
    // args.length === 3
    var fn = (args.length > 2
        ? args[1]
        : args.length === 2 && typeof args[1] === 'function'
            ? args[1]
            : config.fetcher);
    var _a = config.initialSize, initialSize = _a === void 0 ? 1 : _a, _b = config.revalidateAll, revalidateAll = _b === void 0 ? false : _b, _c = config.persistSize, persistSize = _c === void 0 ? false : _c, extraConfig = __rest(config
    // get the serialized key of the first page
    , ["initialSize", "revalidateAll", "persistSize"]);
    // get the serialized key of the first page
    var firstPageKey = null;
    try {
        ;
        firstPageKey = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(getKey(0, null))[0];
    }
    catch (err) {
        // not ready
    }
    var rerender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({})[1];
    // we use cache to pass extra info (context) to fetcher so it can be globally shared
    // here we get the key of the fetcher context cache
    var contextCacheKey = null;
    if (firstPageKey) {
        contextCacheKey = 'ctx@' + firstPageKey;
    }
    // page size is also cached to share the page data between hooks having the same key
    var pageSizeCacheKey = null;
    if (firstPageKey) {
        pageSizeCacheKey = 'len@' + firstPageKey;
    }
    var didMountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var resolvePageSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        var cachedPageSize = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(pageSizeCacheKey);
        return typeof cachedPageSize !== 'undefined' ? cachedPageSize : initialSize;
    }, [pageSizeCacheKey, initialSize]);
    // keep the last page size to restore it with the persistSize option
    var lastPageSizeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(resolvePageSize());
    // every time the key changes, we reset the page size if it's not persisted
    (0,_env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(function () {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        // If the key has been changed, we keep the current page size if persistSize is enabled
        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(pageSizeCacheKey, persistSize ? lastPageSizeRef.current : initialSize);
        // initialSize isn't allowed to change during the lifecycle
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstPageKey]);
    // keep the data inside a ref
    var dataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    // actual swr of all pages
    var swr = (0,_use_swr__WEBPACK_IMPORTED_MODULE_4__.default)(firstPageKey ? ['inf', firstPageKey] : null, function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, originalData, force, data, pageSize, previousPageData, i, _b, pageKey, pageArgs, pageData, shouldFetchPage;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(contextCacheKey) || {}, originalData = _a.data, force = _a.force;
                    data = [];
                    pageSize = resolvePageSize();
                    previousPageData = null;
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < pageSize)) return [3 /*break*/, 8];
                    _b = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(getKey(i, previousPageData)), pageKey = _b[0], pageArgs = _b[1];
                    if (!pageKey) {
                        // pageKey is falsy, stop fetching next pages
                        return [3 /*break*/, 8];
                    }
                    pageData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(pageKey);
                    shouldFetchPage = revalidateAll ||
                        force ||
                        typeof pageData === 'undefined' ||
                        (typeof force === 'undefined' &&
                            i === 0 &&
                            typeof dataRef.current !== 'undefined') ||
                        (originalData && !config.compare(originalData[i], pageData));
                    if (!shouldFetchPage) return [3 /*break*/, 6];
                    if (!(pageArgs !== null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fn.apply(void 0, pageArgs)];
                case 2:
                    pageData = _c.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fn(pageKey)];
                case 4:
                    pageData = _c.sent();
                    _c.label = 5;
                case 5:
                    _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(pageKey, pageData);
                    _c.label = 6;
                case 6:
                    data.push(pageData);
                    previousPageData = pageData;
                    _c.label = 7;
                case 7:
                    ++i;
                    return [3 /*break*/, 1];
                case 8:
                    // once we executed the data fetching based on the context, clear the context
                    _config__WEBPACK_IMPORTED_MODULE_1__.cache.delete(contextCacheKey);
                    // return the data
                    return [2 /*return*/, data];
            }
        });
    }); }, extraConfig);
    // update dataRef
    (0,_env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(function () {
        dataRef.current = swr.data;
    }, [swr.data]);
    var mutate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data, shouldRevalidate) {
        if (shouldRevalidate === void 0) { shouldRevalidate = true; }
        if (shouldRevalidate && typeof data !== 'undefined') {
            // we only revalidate the pages that are changed
            var originalData = dataRef.current;
            _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(contextCacheKey, { data: originalData, force: false });
        }
        else if (shouldRevalidate) {
            // calling `mutate()`, we revalidate all pages
            _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(contextCacheKey, { force: true });
        }
        return swr.mutate(data, shouldRevalidate);
    }, 
    // swr.mutate is always the same reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contextCacheKey]);
    // extend the SWR API
    var setSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (arg) {
        var size;
        if (typeof arg === 'function') {
            size = arg(resolvePageSize());
        }
        else if (typeof arg === 'number') {
            size = arg;
        }
        if (typeof size === 'number') {
            _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(pageSizeCacheKey, size);
            lastPageSizeRef.current = size;
        }
        rerender({});
        return mutate(function (v) { return v; });
    }, 
    // immutability of rerender is guaranteed by React, but react-hooks/exhaustive-deps doesn't recognize it
    // from `rerender = useState({})[1], so we put rerender here
    [pageSizeCacheKey, resolvePageSize, mutate, rerender]);
    // Use getter functions to avoid unnecessary re-renders caused by triggering all the getters of the returned swr object
    var swrInfinite = { size: resolvePageSize(), setSize: setSize, mutate: mutate };
    Object.defineProperties(swrInfinite, {
        error: {
            get: function () { return swr.error; },
            enumerable: true
        },
        data: {
            get: function () { return swr.data; },
            enumerable: true
        },
        // revalidate will be deprecated in the 1.x release
        // because mutate() covers the same use case of revalidate().
        // This remains only for backward compatibility
        revalidate: {
            get: function () { return swr.revalidate; },
            enumerable: true
        },
        isValidating: {
            get: function () { return swr.isValidating; },
            enumerable: true
        }
    });
    return swrInfinite;
}



/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "mutate": () => (/* binding */ mutate),
/* harmony export */   "SWRConfig": () => (/* binding */ SWRConfig),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./node_modules/swr/esm/env.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// TODO: use @ts-expect-error




// global state managers
var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var RECONNECT_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
var MUTATION_END_TS = {};
// generate strictly increasing timestamps
var now = (function () {
    var ts = 0;
    return function () { return ++ts; };
})();
// setup DOM events listeners for `focus` and `reconnect` actions
if (!_env__WEBPACK_IMPORTED_MODULE_2__.IS_SERVER) {
    var revalidate_1 = function (revalidators) {
        if (!_config__WEBPACK_IMPORTED_MODULE_1__.default.isDocumentVisible() || !_config__WEBPACK_IMPORTED_MODULE_1__.default.isOnline())
            return;
        for (var key in revalidators) {
            if (revalidators[key][0])
                revalidators[key][0]();
        }
    };
    if (typeof _config__WEBPACK_IMPORTED_MODULE_1__.default.registerOnFocus === 'function') {
        _config__WEBPACK_IMPORTED_MODULE_1__.default.registerOnFocus(function () { return revalidate_1(FOCUS_REVALIDATORS); });
    }
    if (typeof _config__WEBPACK_IMPORTED_MODULE_1__.default.registerOnReconnect === 'function') {
        _config__WEBPACK_IMPORTED_MODULE_1__.default.registerOnReconnect(function () { return revalidate_1(RECONNECT_REVALIDATORS); });
    }
}
var trigger = function (_key, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(_key), key = _a[0], keyErr = _a[2], keyValidating = _a[3];
    if (!key)
        return Promise.resolve();
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        var currentData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key);
        var currentError = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(keyErr);
        var currentIsValidating = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(keyValidating);
        var promises = [];
        for (var i = 0; i < updaters.length; ++i) {
            promises.push(updaters[i](shouldRevalidate, currentData, currentError, currentIsValidating, i > 0));
        }
        // return new updated value
        return Promise.all(promises).then(function () { return _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key); });
    }
    return Promise.resolve(_config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key));
};
var broadcastState = function (key, data, error, isValidating) {
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error, isValidating);
        }
    }
};
var mutate = function (_key, _data, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, key, keyErr, beforeMutationTs, beforeConcurrentPromisesTs, data, error, isAsyncMutation, err_1, shouldAbort, updaters, promises, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(_key), key = _a[0], keyErr = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    // if there is no new data to update, let's just revalidate the key
                    if (typeof _data === 'undefined')
                        return [2 /*return*/, trigger(_key, shouldRevalidate)
                            // update global timestamps
                        ];
                    // update global timestamps
                    MUTATION_TS[key] = now() - 1;
                    MUTATION_END_TS[key] = 0;
                    beforeMutationTs = MUTATION_TS[key];
                    beforeConcurrentPromisesTs = CONCURRENT_PROMISES_TS[key];
                    isAsyncMutation = false;
                    if (_data && typeof _data === 'function') {
                        // `_data` is a function, call it passing current cache value
                        try {
                            _data = _data(_config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key));
                        }
                        catch (err) {
                            // if `_data` function throws an error synchronously, it shouldn't be cached
                            _data = undefined;
                            error = err;
                        }
                    }
                    if (!(_data && typeof _data.then === 'function')) return [3 /*break*/, 5];
                    // `_data` is a promise
                    isAsyncMutation = true;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _data];
                case 2:
                    data = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    error = err_1;
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    data = _data;
                    _b.label = 6;
                case 6:
                    shouldAbort = function () {
                        // check if other mutations have occurred since we've started this mutation
                        if (beforeMutationTs !== MUTATION_TS[key] ||
                            beforeConcurrentPromisesTs !== CONCURRENT_PROMISES_TS[key]) {
                            if (error)
                                throw error;
                            return true;
                        }
                    };
                    // if there's a race we don't update cache or broadcast change, just return the data
                    if (shouldAbort())
                        return [2 /*return*/, data];
                    if (typeof data !== 'undefined') {
                        // update cached data
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(key, data);
                    }
                    // always update or reset the error
                    _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(keyErr, error);
                    // reset the timestamp to mark the mutation has ended
                    MUTATION_END_TS[key] = now() - 1;
                    if (!isAsyncMutation) {
                        // we skip broadcasting if there's another mutation happened synchronously
                        if (shouldAbort())
                            return [2 /*return*/, data];
                    }
                    updaters = CACHE_REVALIDATORS[key];
                    if (updaters) {
                        promises = [];
                        for (i = 0; i < updaters.length; ++i) {
                            promises.push(updaters[i](!!shouldRevalidate, data, error, undefined, i > 0));
                        }
                        // return new updated value
                        return [2 /*return*/, Promise.all(promises).then(function () {
                                if (error)
                                    throw error;
                                return _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key);
                            })];
                    }
                    // throw error or return data to be used by caller of mutate
                    if (error)
                        throw error;
                    return [2 /*return*/, data];
            }
        });
    });
};
function useSWR() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _key = args[0];
    var config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__.default, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_swr_config_context__WEBPACK_IMPORTED_MODULE_3__.default), args.length > 2
        ? args[2]
        : args.length === 2 && typeof args[1] === 'object'
            ? args[1]
            : {});
    // in typescript args.length > 2 is not same as args.lenth === 3
    // we do a safe type assertion here
    // args.length === 3
    var fn = (args.length > 2
        ? args[1]
        : args.length === 2 && typeof args[1] === 'function'
            ? args[1]
            : /**
                  pass fn as null will disable revalidate
                  https://paco.sh/blog/shared-hook-state-with-swr
                */
                args[1] === null
                    ? args[1]
                    : config.fetcher);
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(_key), key = _a[0], fnArgs = _a[1], keyErr = _a[2], keyValidating = _a[3];
    var configRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(config);
    (0,_env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(function () {
        configRef.current = config;
    });
    var willRevalidateOnMount = function () {
        return (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined));
    };
    var resolveData = function () {
        var cachedData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key);
        return typeof cachedData === 'undefined' ? config.initialData : cachedData;
    };
    var resolveIsValidating = function () {
        return !!_config__WEBPACK_IMPORTED_MODULE_1__.cache.get(keyValidating) || (key && willRevalidateOnMount());
    };
    var initialData = resolveData();
    var initialError = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(keyErr);
    var initialIsValidating = resolveIsValidating();
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    var stateDependencies = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        data: false,
        error: false,
        isValidating: false
    });
    var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        data: initialData,
        error: initialError,
        isValidating: initialIsValidating
    });
    // display the data label in the React DevTools next to SWR hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(stateRef.current.data);
    var rerender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({})[1];
    var dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
        var shouldUpdateState = false;
        for (var k in payload) {
            // @ts-ignore
            if (stateRef.current[k] === payload[k]) {
                continue;
            }
            // @ts-ignore
            stateRef.current[k] = payload[k];
            // @ts-ignore
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState) {
            // if component is unmounted, should skip rerender
            // if component is not mounted, should skip rerender
            if (unmountedRef.current || !initialMountedRef.current)
                return;
            rerender({});
        }
    }, 
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // error ref inside revalidate (is last request errored?)
    var unmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var keyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key);
    // check if component is mounted in suspense mode
    var initialMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // do unmount check for callbacks
    var eventsCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (unmountedRef.current)
            return;
        if (!initialMountedRef.current)
            return;
        if (key !== keyRef.current)
            return;
        // @ts-ignore
        (_a = configRef.current)[event].apply(_a, params);
    }, [key]);
    var boundMutate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data, shouldRevalidate) {
        return mutate(keyRef.current, data, shouldRevalidate);
    }, []);
    var addRevalidator = function (revalidators, callback) {
        if (!revalidators[key]) {
            revalidators[key] = [callback];
        }
        else {
            revalidators[key].push(callback);
        }
        return function () {
            var keyedRevalidators = revalidators[key];
            var index = keyedRevalidators.indexOf(callback);
            if (index >= 0) {
                // O(1): faster than splice
                keyedRevalidators[index] =
                    keyedRevalidators[keyedRevalidators.length - 1];
                keyedRevalidators.pop();
            }
        };
    };
    // start a revalidation
    var revalidate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (revalidateOpts) {
        if (revalidateOpts === void 0) { revalidateOpts = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var _a, retryCount, _b, dedupe, loading, shouldDeduping, newData, startAt, newState, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!key || !fn)
                            return [2 /*return*/, false];
                        if (unmountedRef.current)
                            return [2 /*return*/, false];
                        if (configRef.current.isPaused())
                            return [2 /*return*/, false];
                        _a = revalidateOpts.retryCount, retryCount = _a === void 0 ? 0 : _a, _b = revalidateOpts.dedupe, dedupe = _b === void 0 ? false : _b;
                        loading = true;
                        shouldDeduping = typeof CONCURRENT_PROMISES[key] !== 'undefined' && dedupe;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        dispatch({
                            isValidating: true
                        });
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(keyValidating, true);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, stateRef.current.data, stateRef.current.error, true);
                        }
                        newData = void 0;
                        startAt = void 0;
                        if (!shouldDeduping) return [3 /*break*/, 3];
                        // there's already an ongoing request,
                        // this one needs to be deduplicated.
                        startAt = CONCURRENT_PROMISES_TS[key];
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 2:
                        newData = _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        // if no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key)) {
                            setTimeout(function () {
                                if (loading)
                                    eventsCallback('onLoadingSlow', key, config);
                            }, config.loadingTimeout);
                        }
                        if (fnArgs !== null) {
                            CONCURRENT_PROMISES[key] = fn.apply(void 0, fnArgs);
                        }
                        else {
                            CONCURRENT_PROMISES[key] = fn(key);
                        }
                        CONCURRENT_PROMISES_TS[key] = startAt = now();
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 4:
                        newData = _c.sent();
                        setTimeout(function () {
                            delete CONCURRENT_PROMISES[key];
                            delete CONCURRENT_PROMISES_TS[key];
                        }, config.dedupingInterval);
                        // trigger the success event,
                        // only do this for the original request.
                        eventsCallback('onSuccess', newData, key, config);
                        _c.label = 5;
                    case 5:
                        // if there're other ongoing request(s), started after the current one,
                        // we need to ignore the current one to avoid possible race conditions:
                        //   req1------------------>res1        (current one)
                        //        req2---------------->res2
                        // the request that fired later will always be kept.
                        if (CONCURRENT_PROMISES_TS[key] > startAt) {
                            return [2 /*return*/, false];
                        }
                        // if there're other mutations(s), overlapped with the current revalidation:
                        // case 1:
                        //   req------------------>res
                        //       mutate------>end
                        // case 2:
                        //         req------------>res
                        //   mutate------>end
                        // case 3:
                        //   req------------------>res
                        //       mutate-------...---------->
                        // we have to ignore the revalidation result (res) because it's no longer fresh.
                        // meanwhile, a new revalidation should be triggered when the mutation ends.
                        if (MUTATION_TS[key] &&
                            // case 1
                            (startAt <= MUTATION_TS[key] ||
                                // case 2
                                startAt <= MUTATION_END_TS[key] ||
                                // case 3
                                MUTATION_END_TS[key] === 0)) {
                            dispatch({ isValidating: false });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(keyErr, undefined);
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(keyValidating, false);
                        newState = {
                            isValidating: false
                        };
                        if (typeof stateRef.current.error !== 'undefined') {
                            // we don't have an error
                            newState.error = undefined;
                        }
                        if (!config.compare(stateRef.current.data, newData)) {
                            // deep compare to avoid extra re-render
                            // data changed
                            newState.data = newData;
                            _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(key, newData);
                        }
                        // merge the new state
                        dispatch(newState);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, newData, newState.error, false);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _c.sent();
                        delete CONCURRENT_PROMISES[key];
                        delete CONCURRENT_PROMISES_TS[key];
                        if (configRef.current.isPaused()) {
                            dispatch({
                                isValidating: false
                            });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(keyErr, err_2);
                        // get a new error
                        // don't use deep equal for errors
                        if (stateRef.current.error !== err_2) {
                            // we keep the stale data
                            dispatch({
                                isValidating: false,
                                error: err_2
                            });
                            if (!shouldDeduping) {
                                // also broadcast to update other hooks
                                broadcastState(key, undefined, err_2, false);
                            }
                        }
                        // events and retry
                        eventsCallback('onError', err_2, key, config);
                        if (config.shouldRetryOnError) {
                            // when retrying, we always enable deduping
                            eventsCallback('onErrorRetry', err_2, key, config, revalidate, {
                                retryCount: retryCount + 1,
                                dedupe: true
                            });
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        loading = false;
                        return [2 /*return*/, true];
                }
            });
        });
    }, 
    // dispatch is immutable, and `eventsCallback`, `fnArgs`, `keyErr`, and `keyValidating` are based on `key`,
    // so we can them from the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // useSWR('key', () => fetch('/api/'), { suspense: true })
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]);
    // mounted (client side rendering)
    (0,_env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(function () {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        var isUpdating = initialMountedRef.current;
        initialMountedRef.current = true;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        var currentHookData = stateRef.current.data;
        var latestKeyedData = resolveData();
        // update the state if the key changed (not the inital render) or cache updated
        keyRef.current = key;
        if (!config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
        }
        // revalidate with deduping
        var softRevalidate = function () { return revalidate({ dedupe: true }); };
        // trigger a revalidation
        if (isUpdating || willRevalidateOnMount()) {
            if (typeof latestKeyedData !== 'undefined' && !_env__WEBPACK_IMPORTED_MODULE_2__.IS_SERVER) {
                // delay revalidate if there's cache
                // to not block the rendering
                // @ts-ignore it's safe to use requestAnimationFrame in browser
                (0,_env__WEBPACK_IMPORTED_MODULE_2__.rAF)(softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        var pending = false;
        var onFocus = function () {
            if (pending || !configRef.current.revalidateOnFocus)
                return;
            pending = true;
            softRevalidate();
            setTimeout(function () { return (pending = false); }, configRef.current.focusThrottleInterval);
        };
        var onReconnect = function () {
            if (configRef.current.revalidateOnReconnect) {
                softRevalidate();
            }
        };
        // register global cache update listener
        var onUpdate = function (shouldRevalidate, updatedData, updatedError, updatedIsValidating, dedupe) {
            if (shouldRevalidate === void 0) { shouldRevalidate = true; }
            if (dedupe === void 0) { dedupe = true; }
            // update hook state
            var newState = {};
            var needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (typeof updatedIsValidating !== 'undefined' &&
                stateRef.current.isValidating !== updatedIsValidating) {
                newState.isValidating = updatedIsValidating;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        var unsubFocus = addRevalidator(FOCUS_REVALIDATORS, onFocus);
        var unsubReconnect = addRevalidator(RECONNECT_REVALIDATORS, onReconnect);
        var unsubUpdate = addRevalidator(CACHE_REVALIDATORS, onUpdate);
        return function () {
            // cleanup
            dispatch = function () { return null; };
            // mark it as unmounted
            unmountedRef.current = true;
            unsubFocus();
            unsubReconnect();
            unsubUpdate();
        };
    }, [key, revalidate]);
    (0,_env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(function () {
        var timer = null;
        var tick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!stateRef.current.error &&
                            (configRef.current.refreshWhenHidden ||
                                configRef.current.isDocumentVisible()) &&
                            (configRef.current.refreshWhenOffline || configRef.current.isOnline()))) return [3 /*break*/, 2];
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        return [4 /*yield*/, revalidate({ dedupe: true })];
                    case 1:
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Read the latest refreshInterval
                        if (configRef.current.refreshInterval && timer) {
                            timer = setTimeout(tick, configRef.current.refreshInterval);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (configRef.current.refreshInterval) {
            timer = setTimeout(tick, configRef.current.refreshInterval);
        }
        return function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // suspense
    var latestData;
    var latestError;
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        latestData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key);
        latestError = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(keyErr);
        if (typeof latestData === 'undefined') {
            latestData = initialData;
        }
        if (typeof latestError === 'undefined') {
            latestError = initialError;
        }
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!CONCURRENT_PROMISES[key]) {
                // trigger revalidate immediately
                // to get the promise
                // in this revalidate, should not rerender
                revalidate();
            }
            if (CONCURRENT_PROMISES[key] &&
                typeof CONCURRENT_PROMISES[key].then === 'function') {
                // if it is a promise
                throw CONCURRENT_PROMISES[key];
            }
            // it's a value, return it directly (override)
            latestData = CONCURRENT_PROMISES[key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
    }
    // define returned state
    // can be memorized since the state is a ref
    var memoizedState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        // revalidate will be deprecated in the 1.x release
        // because mutate() covers the same use case of revalidate().
        // This remains only for backward compatibility
        var state = { revalidate: revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    if (config.suspense) {
                        return latestError;
                    }
                    return keyRef.current === key ? stateRef.current.error : initialError;
                },
                enumerable: true
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    if (config.suspense) {
                        return latestData;
                    }
                    return keyRef.current === key ? stateRef.current.data : initialData;
                },
                enumerable: true
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return key ? stateRef.current.isValidating : false;
                },
                enumerable: true
            }
        });
        return state;
        // `config.suspense` isn't allowed to change during the lifecycle.
        // `boundMutate` is immutable, and the immutability of `revalidate` depends on `key`
        // so we can omit them from the deps array,
        // but we put it to enable react-hooks/exhaustive-deps rule.
        // `initialData` and `initialError` are not initial values
        // because they are changed during the lifecycle
        // so we should add them in the deps array.
    }, [
        revalidate,
        initialData,
        initialError,
        boundMutate,
        key,
        config.suspense,
        latestError,
        latestData
    ]);
    return memoizedState;
}
Object.defineProperty(_swr_config_context__WEBPACK_IMPORTED_MODULE_3__.default.Provider, 'default', {
    value: _config__WEBPACK_IMPORTED_MODULE_1__.default
});
var SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_3__.default.Provider;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSWR);


/***/ }),

/***/ "./node_modules/systemjs-webpack-interop/auto-public-path/auto-public-path.js":
/*!************************************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/auto-public-path/auto-public-path.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const resolveDirectory = __webpack_require__(/*! ../public-path */ "./node_modules/systemjs-webpack-interop/public-path.js").resolveDirectory;

exports.autoPublicPath = function autoPublicPath(rootDirLevel) {
  if (!rootDirLevel) {
    rootDirLevel = 1;
  }

  if (true) {
    if (false) {}

    if (!__webpack_require__.y.meta || !__webpack_require__.y.meta.url) {
      console.error("__system_context__", __webpack_require__.y);
      throw Error(
        "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
      );
    }

    __webpack_require__.p = resolveDirectory(
      __webpack_require__.y.meta.url,
      rootDirLevel
    );
  }
};


/***/ }),

/***/ "./node_modules/systemjs-webpack-interop/public-path.js":
/*!**************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/public-path.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.setPublicPath = function setPublicPath(
  systemjsModuleName,
  rootDirectoryLevel
) {
  if (!rootDirectoryLevel) {
    rootDirectoryLevel = 1;
  }
  if (
    typeof systemjsModuleName !== "string" ||
    systemjsModuleName.trim().length === 0
  ) {
    throw Error(
      "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
    );
  }

  if (
    typeof rootDirectoryLevel !== "number" ||
    rootDirectoryLevel <= 0 ||
    isNaN(rootDirectoryLevel) ||
    !isInteger(rootDirectoryLevel)
  ) {
    throw Error(
      "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
    );
  }

  let moduleUrl;
  try {
    moduleUrl = window.System.resolve(systemjsModuleName);
    if (!moduleUrl) {
      throw Error();
    }
  } catch (err) {
    throw Error(
      "systemjs-webpack-interop: There is no such module '" +
        systemjsModuleName +
        "' in the SystemJS registry. Did you misspell the name of your module?"
    );
  }

  __webpack_require__.p = resolveDirectory(moduleUrl, rootDirectoryLevel);
};

function resolveDirectory(urlString, rootDirectoryLevel) {
  // Our friend IE11 doesn't support new URL()
  // https://github.com/single-spa/single-spa/issues/612
  // https://gist.github.com/jlong/2428561

  const a = document.createElement("a");
  a.href = urlString;

  const pathname = a.pathname[0] === "/" ? a.pathname : "/" + a.pathname;
  let numDirsProcessed = 0,
    index = pathname.length;
  while (numDirsProcessed !== rootDirectoryLevel && index >= 0) {
    const char = pathname[--index];
    if (char === "/") {
      numDirsProcessed++;
    }
  }

  if (numDirsProcessed !== rootDirectoryLevel) {
    throw Error(
      "systemjs-webpack-interop: rootDirectoryLevel (" +
        rootDirectoryLevel +
        ") is greater than the number of directories (" +
        numDirsProcessed +
        ") in the URL path " +
        urlString
    );
  }

  const finalPath = pathname.slice(0, index + 1);

  return a.protocol + "//" + a.host + finalPath;
}

exports.resolveDirectory = resolveDirectory;

// borrowed from https://github.com/parshap/js-is-integer/blob/master/index.js
const isInteger =
  Number.isInteger ||
  function isInteger(val) {
    return typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  };


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "../node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "../node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!********************************************************************!*\
  !*** ../node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "../node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!******************************************************************!*\
  !*** ../node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ }),

/***/ "../node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/shallowequal/index.js":
/*!*********************************************!*\
  !*** ../node_modules/shallowequal/index.js ***!
  \*********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "../node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ServerStyleSheet": () => (/* binding */ Ue),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ le),
/* harmony export */   "StyleSheetContext": () => (/* binding */ ue),
/* harmony export */   "StyleSheetManager": () => (/* binding */ ye),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Le),
/* harmony export */   "ThemeContext": () => (/* binding */ ze),
/* harmony export */   "ThemeProvider": () => (/* binding */ Ge),
/* harmony export */   "__PRIVATE__": () => (/* binding */ Ze),
/* harmony export */   "createGlobalStyle": () => (/* binding */ $e),
/* harmony export */   "css": () => (/* binding */ Ae),
/* harmony export */   "isStyledComponent": () => (/* binding */ N),
/* harmony export */   "keyframes": () => (/* binding */ We),
/* harmony export */   "useTheme": () => (/* binding */ Xe),
/* harmony export */   "version": () => (/* binding */ C),
/* harmony export */   "withTheme": () => (/* binding */ Je)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "../node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "../node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.0",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.3.0"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.0");var s=q();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=M(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=A+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.0"),ie=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var i=Ne(this.rules,e,t,n).join(""),s=ee(te(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,i=void 0===e?E:e,s=i.options,a=void 0===s?E:s,c=i.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__.default(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,i){return 0===r&&-1!==ae.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(se,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1__.default.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1__.default.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],i=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1__.default.Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=Ne(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!_e(t[s])&&(S(t[s])?i.push.apply(i,e(t[s],s)):b(t[s])?i.push(be(s)+":",t[s],";"):i.push(be(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__.default?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),Ie.has(n)||(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(xe(s))for(var a in s)Ve(a)&&Be(e,s[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1__.default.createContext(),Le=ze.Consumer;function Ge(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),s=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.0"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new ie(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in b(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t]})),[r,o]}(Oe(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),i=me(),s=t?e.generateAndInjectStyles(E,o,i):e.generateAndInjectStyles(n,o,i);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(s), true&&!t&&r&&r(s),s}(s,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default,_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default)(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1__.default.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:i}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},s&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var i=function(){return t(r,o,Ae.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(s)),u=new He(s,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1__.default.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&s.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var i=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,i,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1__.default.memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),i=Te(o);return new ve(i,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1__.default.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1__.default.forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),s=e.defaultProps,a=Oe(t,o,s);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze)},Ze={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/__system_context__ */
/******/ 	(() => {
/******/ 		__webpack_require__.y = __system_context__;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/auto-public-path/1.js ***!
  \*********************************************************************/
const autoPublicPath = __webpack_require__(/*! ./auto-public-path */ "./node_modules/systemjs-webpack-interop/auto-public-path/auto-public-path.js").autoPublicPath;

autoPublicPath(1);

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./src/monkeysmedia-feed.tsx ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap),
/* harmony export */   "mount": () => (/* binding */ mount),
/* harmony export */   "unmount": () => (/* binding */ unmount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa-react */ "./node_modules/single-spa-react/lib/esm/single-spa-react.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");




var lifecycles = (0,single_spa_react__WEBPACK_IMPORTED_MODULE_2__.default)({
  React: react__WEBPACK_IMPORTED_MODULE_0__.default,
  ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1__.default,
  rootComponent: _App__WEBPACK_IMPORTED_MODULE_3__.default,
  errorBoundary: function errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  }
});
var bootstrap = lifecycles.bootstrap,
    mount = lifecycles.mount,
    unmount = lifecycles.unmount;

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=monkeysmedia-feed.js.map