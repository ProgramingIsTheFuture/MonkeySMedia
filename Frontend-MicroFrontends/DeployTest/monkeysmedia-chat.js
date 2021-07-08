System.register(
  ["react", "react-dom"],
  function (__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
    var __WEBPACK_EXTERNAL_MODULE_react__ = {};
    var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
    Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", {
      value: true,
    });
    Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", {
      value: true,
    });
    return {
      setters: [
        function (module) {
          Object.keys(module).forEach(function (key) {
            __WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
          });
        },
        function (module) {
          Object.keys(module).forEach(function (key) {
            __WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
          });
        },
      ],
      execute: function () {
        __WEBPACK_DYNAMIC_EXPORT__(
          /******/ (() => {
            // webpackBootstrap
            /******/ var __webpack_modules__ = {
              /***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
                /*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _arrayLikeToArray,
                      /* harmony export */
                    }
                  );
                  function _arrayLikeToArray(arr, len) {
                    if (len == null || len > arr.length) len = arr.length;

                    for (var i = 0, arr2 = new Array(len); i < len; i++) {
                      arr2[i] = arr[i];
                    }

                    return arr2;
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
                /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _arrayWithHoles,
                      /* harmony export */
                    }
                  );
                  function _arrayWithHoles(arr) {
                    if (Array.isArray(arr)) return arr;
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
                /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _arrayWithoutHoles,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
                  );

                  function _arrayWithoutHoles(arr) {
                    if (Array.isArray(arr))
                      return (0,
                      _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                        arr
                      );
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
                /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _defineProperty,
                      /* harmony export */
                    }
                  );
                  function _defineProperty(obj, key, value) {
                    if (key in obj) {
                      Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      });
                    } else {
                      obj[key] = value;
                    }

                    return obj;
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
                /*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _extends,
                      /* harmony export */
                    }
                  );
                  function _extends() {
                    _extends =
                      Object.assign ||
                      function (target) {
                        for (var i = 1; i < arguments.length; i++) {
                          var source = arguments[i];

                          for (var key in source) {
                            if (
                              Object.prototype.hasOwnProperty.call(source, key)
                            ) {
                              target[key] = source[key];
                            }
                          }
                        }

                        return target;
                      };

                    return _extends.apply(this, arguments);
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
                /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _iterableToArray,
                      /* harmony export */
                    }
                  );
                  function _iterableToArray(iter) {
                    if (
                      typeof Symbol !== "undefined" &&
                      Symbol.iterator in Object(iter)
                    )
                      return Array.from(iter);
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
                /*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _iterableToArrayLimit,
                      /* harmony export */
                    }
                  );
                  function _iterableToArrayLimit(arr, i) {
                    if (
                      typeof Symbol === "undefined" ||
                      !(Symbol.iterator in Object(arr))
                    )
                      return;
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;

                    try {
                      for (
                        var _i = arr[Symbol.iterator](), _s;
                        !(_n = (_s = _i.next()).done);
                        _n = true
                      ) {
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

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
                /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _nonIterableRest,
                      /* harmony export */
                    }
                  );
                  function _nonIterableRest() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
                /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _nonIterableSpread,
                      /* harmony export */
                    }
                  );
                  function _nonIterableSpread() {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
                /*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _objectWithoutProperties,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"
                  );

                  function _objectWithoutProperties(source, excluded) {
                    if (source == null) return {};
                    var target = (0,
                    _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                      source,
                      excluded
                    );
                    var key, i;

                    if (Object.getOwnPropertySymbols) {
                      var sourceSymbolKeys = Object.getOwnPropertySymbols(
                        source
                      );

                      for (i = 0; i < sourceSymbolKeys.length; i++) {
                        key = sourceSymbolKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        if (
                          !Object.prototype.propertyIsEnumerable.call(
                            source,
                            key
                          )
                        )
                          continue;
                        target[key] = source[key];
                      }
                    }

                    return target;
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
                /*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _objectWithoutPropertiesLoose,
                      /* harmony export */
                    }
                  );
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

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
                /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _slicedToArray,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"
                  );
                  /* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js"
                  );
                  /* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
                  );
                  /* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js"
                  );

                  function _slicedToArray(arr, i) {
                    return (
                      (0,
                      _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                        arr
                      ) ||
                      (0,
                      _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(
                        arr,
                        i
                      ) ||
                      (0,
                      _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(
                        arr,
                        i
                      ) ||
                      (0,
                      _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)()
                    );
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
                /*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _taggedTemplateLiteral,
                      /* harmony export */
                    }
                  );
                  function _taggedTemplateLiteral(strings, raw) {
                    if (!raw) {
                      raw = strings.slice(0);
                    }

                    return Object.freeze(
                      Object.defineProperties(strings, {
                        raw: {
                          value: Object.freeze(raw),
                        },
                      })
                    );
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
                /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _toConsumableArray,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js"
                  );
                  /* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js"
                  );
                  /* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
                  );
                  /* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js"
                  );

                  function _toConsumableArray(arr) {
                    return (
                      (0,
                      _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                        arr
                      ) ||
                      (0,
                      _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(
                        arr
                      ) ||
                      (0,
                      _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(
                        arr
                      ) ||
                      (0,
                      _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)()
                    );
                  }

                  /***/
                },

              /***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
                /*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _unsupportedIterableToArray,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
                  );

                  function _unsupportedIterableToArray(o, minLen) {
                    if (!o) return;
                    if (typeof o === "string")
                      return (0,
                      _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                        o,
                        minLen
                      );
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    if (n === "Object" && o.constructor) n = o.constructor.name;
                    if (n === "Map" || n === "Set") return Array.from(o);
                    if (
                      n === "Arguments" ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                      return (0,
                      _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                        o,
                        minLen
                      );
                  }

                  /***/
                },

              /***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
                /*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js"
                  );

                  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

                  var index = (0,
                  _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(
                    function (prop) {
                      return (
                        reactPropsRegex.test(prop) ||
                        (prop.charCodeAt(0) === 111 &&
                          /* o */
                          prop.charCodeAt(1) === 110 &&
                          /* n */
                          prop.charCodeAt(2) < 91)
                      );
                    }
                    /* Z+1 */
                  );

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = index;

                  /***/
                },

              /***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
                /*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  function memoize(fn) {
                    var cache = {};
                    return function (arg) {
                      if (cache[arg] === undefined) cache[arg] = fn(arg);
                      return cache[arg];
                    };
                  }

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = memoize;

                  /***/
                },

              /***/ "./node_modules/@styled-icons/fluentui-system-regular/Send/Send.esm.js":
                /*!*****************************************************************************!*\
  !*** ./node_modules/@styled-icons/fluentui-system-regular/Send/Send.esm.js ***!
  \*****************************************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ Send: () => /* binding */ Send,
                      /* harmony export */ SendDimensions: () =>
                        /* binding */ SendDimensions,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime/helpers/extends */ "./node_modules/@styled-icons/fluentui-system-regular/node_modules/@babel/runtime/helpers/esm/extends.js"
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ "react"
                  );
                  /* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @styled-icons/styled-icon */ "./node_modules/@styled-icons/styled-icon/index.esm.js"
                  );

                  var Send = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
                    function (props, ref) {
                      var attrs = {
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                      };
                      return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_2__.StyledIconBase,
                        (0,
                        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)(
                          {
                            iconAttrs: attrs,
                            iconVerticalAlign: "middle",
                            iconViewBox: "0 0 28 28",
                          },
                          props,
                          {
                            ref: ref,
                          }
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          "path",
                          {
                            d:
                              "m3.79 2.77 21.07 10.08a1.25 1.25 0 0 1 0 2.26L3.8 25.18a1.25 1.25 0 0 1-1.75-1.45l2.66-9.75-2.66-9.75A1.25 1.25 0 0 1 3.8 2.77zm-.15 1.6 2.42 8.88H17c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01H6.05l-2.41 8.84 20.1-9.61-20.1-9.62z",
                          }
                        )
                      );
                    }
                  );
                  Send.displayName = "Send";
                  var SendDimensions = {
                    height: 28,
                    width: 28,
                  };

                  /***/
                },

              /***/ "./node_modules/@styled-icons/fluentui-system-regular/node_modules/@babel/runtime/helpers/esm/extends.js":
                /*!***************************************************************************************************************!*\
  !*** ./node_modules/@styled-icons/fluentui-system-regular/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \***************************************************************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        /* binding */ _extends,
                      /* harmony export */
                    }
                  );
                  function _extends() {
                    _extends =
                      Object.assign ||
                      function (target) {
                        for (var i = 1; i < arguments.length; i++) {
                          var source = arguments[i];

                          for (var key in source) {
                            if (
                              Object.prototype.hasOwnProperty.call(source, key)
                            ) {
                              target[key] = source[key];
                            }
                          }
                        }

                        return target;
                      };

                    return _extends.apply(this, arguments);
                  }

                  /***/
                },

              /***/ "./node_modules/@styled-icons/styled-icon/index.esm.js":
                /*!*************************************************************!*\
  !*** ./node_modules/@styled-icons/styled-icon/index.esm.js ***!
  \*************************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ StyledIconBase: () =>
                        /* binding */ StyledIconBase,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js"
                  );
                  /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
                  );
                  /* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ "react"
                  );
                  /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js"
                  );
                  /* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"
                  );

                  function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                      var symbols = Object.getOwnPropertySymbols(object);
                      if (enumerableOnly)
                        symbols = symbols.filter(function (sym) {
                          return Object.getOwnPropertyDescriptor(
                            object,
                            sym
                          ).enumerable;
                        });
                      keys.push.apply(keys, symbols);
                    }
                    return keys;
                  }

                  function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                      var source = arguments[i] != null ? arguments[i] : {};
                      if (i % 2) {
                        ownKeys(Object(source), true).forEach(function (key) {
                          (0,
                          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]);
                        });
                      } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(
                          target,
                          Object.getOwnPropertyDescriptors(source)
                        );
                      } else {
                        ownKeys(Object(source)).forEach(function (key) {
                          Object.defineProperty(
                            target,
                            key,
                            Object.getOwnPropertyDescriptor(source, key)
                          );
                        });
                      }
                    }
                    return target;
                  }

                  function isValidProp(key) {
                    return (0,
                    _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_4__.default)(
                      key
                    );
                  }

                  function filterSVGProps(props) {
                    return Object.keys(props).reduce(function (p, k) {
                      if (isValidProp(k)) {
                        // hack to satisfy TypeScript complexity
                        p[k] = props[k];
                      }

                      return p;
                    }, {});
                  }

                  var StyledIconBaseBase = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(
                    function (props, ref) {
                      var children = props.children,
                        iconAttrs = props.iconAttrs,
                        iconVerticalAlign = props.iconVerticalAlign,
                        iconViewBox = props.iconViewBox,
                        size = props.size,
                        title = props.title,
                        otherProps = (0,
                        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(
                          props,
                          [
                            "children",
                            "iconAttrs",
                            "iconVerticalAlign",
                            "iconViewBox",
                            "size",
                            "title",
                          ]
                        );

                      var iconProps = _objectSpread(
                        {
                          viewBox: iconViewBox,
                          height:
                            props.height !== undefined ? props.height : size,
                          width: props.width !== undefined ? props.width : size,
                          "aria-hidden": title == null ? "true" : undefined,
                          focusable: "false",
                          role: title != null ? "img" : undefined,
                        },
                        iconAttrs
                      );

                      var svgProps = filterSVGProps(otherProps);
                      return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(
                        "svg",
                        (0,
                        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)(
                          {},
                          iconProps,
                          svgProps,
                          {
                            ref: ref,
                          }
                        ),
                        title &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(
                            "title",
                            {
                              key: "icon-title",
                            },
                            title
                          ),
                        children
                      );
                    }
                  );
                  var StyledIconBase = /*#__PURE__*/ (0,
                  styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(
                    StyledIconBaseBase
                  ).withConfig({
                    displayName: "StyledIconBase",
                    componentId: "ea9ulj-0",
                  })(
                    [
                      "display:inline-block;vertical-align:",
                      ";overflow:hidden;",
                    ],
                    function (props) {
                      return props.iconVerticalAlign;
                    }
                  );

                  /***/
                },

              /***/ "./src/HeaderProfile/index.tsx":
                /*!*************************************!*\
  !*** ./src/HeaderProfile/index.tsx ***!
  \*************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ "react"
                  );
                  /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./styles */ "./src/HeaderProfile/styles.ts"
                  );

                  var HeaderProfile = function HeaderProfile(_ref) {
                    var username = _ref.username;

                    var _useState = (0,
                      react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
                      _useState2 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(
                        _useState,
                        2
                      ),
                      data = _useState2[0],
                      setdata = _useState2[1];

                    var _useState3 = (0,
                      react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
                      _useState4 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(
                        _useState3,
                        2
                      ),
                      baseUrl = _useState4[0],
                      setBaseUrl = _useState4[1];

                    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                      function () {
                        if (baseUrl == "") {
                          System["import"]("@monkeysmedia/util-module").then(
                            function (util) {
                              return setBaseUrl(util.baseUrl);
                            }
                          );
                        }
                      },
                      [baseUrl]
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                      function () {
                        if (username) {
                          System["import"]("@monkeysmedia/util-module")
                            .then(function (util) {
                              return util.apiPost("api/profile/get-profile/", {
                                username: username,
                              });
                            })
                            .then(function (resp) {
                              return setdata(resp.data);
                            })
                            ["catch"]();
                        }
                      },
                      [username]
                    );

                    if (!data) {
                      return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                        _styles__WEBPACK_IMPORTED_MODULE_2__.Container,
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                          "h3",
                          {
                            style: {
                              verticalAlign: "center",
                            },
                          },
                          "loading ..."
                        )
                      );
                    }

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                      _styles__WEBPACK_IMPORTED_MODULE_2__.Container,
                      null,
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                        "div",
                        {
                          style: {
                            cursor: "pointer",
                          },
                          onClick: function onClick() {
                            return System["import"](
                              "@monkeysmedia/util-module"
                            ).then(function (util) {
                              return util.RedirectTo(
                                "/profile/".concat(data.user)
                              );
                            });
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                          "div",
                          null,
                          baseUrl
                            ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                                "img",
                                {
                                  src: ""
                                    .concat(baseUrl)
                                    .concat(data.profile_image.substring(1)),
                                  alt: "profile",
                                  height: "50px",
                                  width: "50px",
                                }
                              )
                            : baseUrl
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                          "div",
                          null,
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                            "div",
                            {
                              style: {
                                alignItems: "center",
                              },
                            },
                            data.user
                          )
                        )
                      )
                    );
                  };

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = HeaderProfile;

                  /***/
                },

              /***/ "./src/HeaderProfile/styles.ts":
                /*!*************************************!*\
  !*** ./src/HeaderProfile/styles.ts ***!
  \*************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ Container: () =>
                        /* binding */ Container,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
                  );
                  /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js"
                  );

                  var _templateObject;

                  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.header(
                    _templateObject ||
                      (_templateObject = (0,
                      _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(
                        [
                          "\n  height: 65px;\n  z-index: 1;\n\n  background-color: var(--secundary);\n  order: 0;\n\n  top: 0;\n\n  h3 {\n\ttext-align: center;\n\tcolor: var(--white);\n  }\n}\n\n  div {\n    display: flex;\n    height: 100%;\n\n    flex-direction: row;\n\tmargin-left: 5px;\n\n    color: var(--white);\n\n    text-decoration: none;\n\talign-items: center;\n\n    div {\n      img {\n\t\tborder-radius: 25px;\n        object-fit: cover;\n        margin-right: 15px;\n      }\n    }\n  }\n",
                        ]
                      ))
                  );

                  /***/
                },

              /***/ "./src/root.component.tsx":
                /*!********************************!*\
  !*** ./src/root.component.tsx ***!
  \********************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () => /* binding */ Root,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"
                  );
                  /* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ "react"
                  );
                  /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./styles */ "./src/styles.ts"
                  );
                  /* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! swr */ "./node_modules/swr/esm/index.js"
                  );
                  /* harmony import */ var _HeaderProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./HeaderProfile */ "./src/HeaderProfile/index.tsx"
                  );

                  function Root(props) {
                    var _useState = (0,
                      react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
                      _useState2 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(
                        _useState,
                        2
                      ),
                      sendToUser = _useState2[0],
                      setSendToUser = _useState2[1];

                    var _useState3 = (0,
                      react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
                      _useState4 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(
                        _useState3,
                        2
                      ),
                      message = _useState4[0],
                      setMessage = _useState4[1];

                    var _useState5 = (0,
                      react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
                      _useState6 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(
                        _useState5,
                        2
                      ),
                      socket = _useState6[0],
                      setSocket = _useState6[1];

                    var _useState7 = (0,
                      react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
                      _useState8 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(
                        _useState7,
                        2
                      ),
                      socketUrl = _useState8[0],
                      setSocketUrl = _useState8[1];

                    var _useState9 = (0,
                      react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
                      _useState10 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(
                        _useState9,
                        2
                      ),
                      allMessages = _useState10[0],
                      setAllMessages = _useState10[1];

                    var _useState11 = (0,
                      react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
                      _useState12 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(
                        _useState11,
                        2
                      ),
                      reloadMsg = _useState12[0],
                      setReloadMsg = _useState12[1];

                    window.addEventListener(
                      "@monkeysmedia/chat/changeChat",
                      function (e) {
                        setSendToUser(e.detail.user);
                        setReloadMsg(true);
                      }
                    );
                    var me = (0, swr__WEBPACK_IMPORTED_MODULE_4__.default)(
                      "api/users/get-user/",
                      function (url) {
                        return System["import"]("@monkeysmedia/util-module")
                          .then(function (util) {
                            return util.apiGet(url);
                          })
                          .then(function (resp) {
                            return resp.data.username;
                          });
                      }
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(
                      function () {
                        System["import"]("@monkeysmedia/util-module").then(
                          function (util) {
                            return setSocketUrl(util.socketUrl);
                          }
                        );
                      },
                      []
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(
                      function () {
                        if (reloadMsg && sendToUser !== "") {
                          System["import"]("@monkeysmedia/util-module")
                            .then(function (util) {
                              return util.apiPost("api/chat/all-messages/", {
                                username: sendToUser,
                              });
                            })
                            .then(function (resp) {
                              return setAllMessages(resp.data);
                            });
                          setReloadMsg(false);
                        }
                      },
                      [sendToUser, reloadMsg]
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(
                      function () {
                        if (sendToUser === "") {
                          System["import"]("@monkeysmedia/util-module")
                            .then(function (util) {
                              return setSendToUser(util.getUsernamePropsUrl());
                            })
                            ["catch"]();
                        }
                      },
                      [sendToUser]
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(
                      function () {
                        if (allMessages.length >= 0) {
                          document.getElementById(
                            "_scrolling"
                          ).scrollTop = document.getElementById(
                            "_scrolling"
                          ).scrollHeight;
                        }
                      },
                      [allMessages, sendToUser]
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(
                      function () {
                        if (sendToUser !== "" && socketUrl !== "") {
                          var token = localStorage.getItem("auth");
                          var wsUrl = ""
                            .concat(socketUrl, "ws/chat/")
                            .concat(sendToUser, "/?token=")
                            .concat(JSON.parse(token).token);
                          setSocket(new WebSocket(wsUrl));
                        }
                      },
                      [sendToUser, socketUrl]
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(
                      function () {
                        if (socket) {
                          socket.onopen = function () {};

                          socket.onmessage = function () {
                            setReloadMsg(true);
                          };

                          socket.onclose = function (event) {
                            console.info(event);
                          };

                          socket.onerror = function (error) {
                            console.error(error);
                          };
                        }
                      },
                      [socket]
                    );

                    var handleSubmit = function handleSubmit(e) {
                      e.preventDefault();

                      if (message !== "") {
                        while (socket.CONNECTING) {}

                        socket.send(message);
                        setAllMessages(
                          [].concat(
                            (0,
                            _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(
                              allMessages
                            ),
                            [
                              {
                                id: Number(allMessages.length) + 1,
                                user_receiver: sendToUser,
                                user_sender: String(me.data),
                                message: message,
                                timestamp: "",
                              },
                            ]
                          )
                        );
                        setMessage("");
                      }
                    };

                    var messageChange = function messageChange(e) {
                      setMessage(e.target.value);
                    };

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                      _styles__WEBPACK_IMPORTED_MODULE_3__.Container,
                      null,
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                        _HeaderProfile__WEBPACK_IMPORTED_MODULE_5__.default,
                        {
                          username: sendToUser,
                        }
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                        _styles__WEBPACK_IMPORTED_MODULE_3__.Messages,
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                          _styles__WEBPACK_IMPORTED_MODULE_3__.MessageContainer,
                          {
                            id: "_scrolling",
                          },
                          allMessages.map(function (item) {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                              _styles__WEBPACK_IMPORTED_MODULE_3__.Message,
                              {
                                right:
                                  me.data === item.user_sender ? true : false,
                                key: item.id,
                              },
                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                                "div",
                                {
                                  style: {
                                    maxWidth: "650px",
                                    minWidth: "115px",
                                  },
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                                  "div",
                                  null,
                                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                                    "div",
                                    {
                                      style: {
                                        padding: "5px 5px 0 5px",
                                      },
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                                      "span",
                                      null,
                                      item.message
                                    )
                                  )
                                ),
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                                  _styles__WEBPACK_IMPORTED_MODULE_3__.TimeStamp,
                                  null,
                                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                                    "div",
                                    null,
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                                      "span",
                                      null,
                                      item.timestamp
                                    )
                                  )
                                )
                              )
                            );
                          })
                        )
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                        "footer",
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                          _styles__WEBPACK_IMPORTED_MODULE_3__.Form,
                          {
                            onSubmit: handleSubmit,
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                            "input",
                            {
                              type: "text",
                              placeholder: "Escreva a sua mensagem",
                              onChange: messageChange,
                              value: message,
                            }
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                            _styles__WEBPACK_IMPORTED_MODULE_3__.SubmitBTN,
                            {
                              type: "submit",
                              disabled: message === "" ? true : false,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                              "div",
                              null,
                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.default.createElement(
                                _styles__WEBPACK_IMPORTED_MODULE_3__.SendIcon,
                                null
                              )
                            )
                          )
                        )
                      )
                    );
                  }

                  /***/
                },

              /***/ "./src/styles.ts":
                /*!***********************!*\
  !*** ./src/styles.ts ***!
  \***********************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ Container: () =>
                        /* binding */ Container,
                      /* harmony export */ Messages: () =>
                        /* binding */ Messages,
                      /* harmony export */ MessageContainer: () =>
                        /* binding */ MessageContainer,
                      /* harmony export */ Message: () => /* binding */ Message,
                      /* harmony export */ TimeStamp: () =>
                        /* binding */ TimeStamp,
                      /* harmony export */ Form: () => /* binding */ Form,
                      /* harmony export */ SubmitBTN: () =>
                        /* binding */ SubmitBTN,
                      /* harmony export */ SendIcon: () =>
                        /* binding */ SendIcon,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
                  );
                  /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js"
                  );
                  /* harmony import */ var _styled_icons_fluentui_system_regular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @styled-icons/fluentui-system-regular */ "./node_modules/@styled-icons/fluentui-system-regular/Send/Send.esm.js"
                  );

                  var _templateObject,
                    _templateObject2,
                    _templateObject3,
                    _templateObject4,
                    _templateObject5,
                    _templateObject6,
                    _templateObject7,
                    _templateObject8;

                  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(
                    _templateObject ||
                      (_templateObject = (0,
                      _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(
                        [
                          "\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n\n  footer {\n    order: 3;\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    flex: none;\n    width: 100%;\n    min-height: 62px;\n    margin-bottom: 15px;\n  }\n",
                        ]
                      ))
                  );
                  var Messages = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(
                    _templateObject2 ||
                      (_templateObject2 = (0,
                      _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(
                        [
                          "\n  position: relative;\n  z-index: 1;\n\n  flex: 1 1 0;\n  order: 2;\n\n  width: 100%;\n  height: 100%;\n",
                        ]
                      ))
                  );
                  var MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(
                    _templateObject3 ||
                      (_templateObject3 = (0,
                      _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(
                        [
                          "\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  transition: background 0.3s ease-out 0.1s;\n",
                        ]
                      ))
                  );
                  var Message = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(
                    _templateObject4 ||
                      (_templateObject4 = (0,
                      _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(
                        [
                          "\n  display: flex;\n  justify-content: ",
                          ";\n\n  padding: 6px 7px 8px 9px;\n\n  div {\n    margin: 0;\n    background-color: ",
                          ";\n\n    color: var(--white);\n  }\n",
                        ]
                      )),
                    function (props) {
                      return props.right ? "flex-end" : "flex-start";
                    },
                    function (props) {
                      return !props.right ? "var(--card)" : "var(--secundary)";
                    }
                  );
                  var TimeStamp = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(
                    _templateObject5 ||
                      (_templateObject5 = (0,
                      _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(
                        [
                          "\n  float: right;\n\n  span {\n    font-size: 1rem;\n  }\n",
                        ]
                      ))
                  );
                  var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.form(
                    _templateObject6 ||
                      (_templateObject6 = (0,
                      _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(
                        [
                          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  input[type="text"] {\n    width: 88%;\n    height: 48px;\n  }\n',
                        ]
                      ))
                  );
                  var SubmitBTN = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button(
                    _templateObject7 ||
                      (_templateObject7 = (0,
                      _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(
                        [
                          "\n  height: 54px;\n  width: 54px;\n\n  margin: 10px;\n  border-radius: 25px;\n\n  cursor: pointer;\n\n  div {\n    position: relative;\n  }\n",
                        ]
                      ))
                  );
                  var SendIcon = (0,
                  styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(
                    _styled_icons_fluentui_system_regular__WEBPACK_IMPORTED_MODULE_2__.Send
                  )(
                    _templateObject8 ||
                      (_templateObject8 = (0,
                      _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(
                        [
                          "\n  height: 40px;\n  width: 40px;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n",
                        ]
                      ))
                  );

                  /***/
                },

              /***/ "./node_modules/dequal/lite/index.mjs":
                /*!********************************************!*\
  !*** ./node_modules/dequal/lite/index.mjs ***!
  \********************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ dequal: () => /* binding */ dequal,
                      /* harmony export */
                    }
                  );
                  var has = Object.prototype.hasOwnProperty;

                  function dequal(foo, bar) {
                    var ctor, len;
                    if (foo === bar) return true;

                    if (
                      foo &&
                      bar &&
                      (ctor = foo.constructor) === bar.constructor
                    ) {
                      if (ctor === Date) return foo.getTime() === bar.getTime();
                      if (ctor === RegExp)
                        return foo.toString() === bar.toString();

                      if (ctor === Array) {
                        if ((len = foo.length) === bar.length) {
                          while (len-- && dequal(foo[len], bar[len]));
                        }
                        return len === -1;
                      }

                      if (!ctor || typeof foo === "object") {
                        len = 0;
                        for (ctor in foo) {
                          if (
                            has.call(foo, ctor) &&
                            ++len &&
                            !has.call(bar, ctor)
                          )
                            return false;
                          if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
                            return false;
                        }
                        return Object.keys(bar).length === len;
                      }
                    }

                    return foo !== foo && bar !== bar;
                  }

                  /***/
                },

              /***/ "./node_modules/single-spa-react/lib/esm/single-spa-react.js":
                /*!*******************************************************************!*\
  !*** ./node_modules/single-spa-react/lib/esm/single-spa-react.js ***!
  \*******************************************************************/
                /***/ (
                  __unused_webpack___webpack_module__,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */ SingleSpaContext: () =>
                        /* binding */ r,
                      /* harmony export */
                    }
                  );
                  function e(t) {
                    return (e =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          })(t);
                  }
                  function t(e, t, n) {
                    return (
                      t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (e[t] = n),
                      e
                    );
                  }
                  function n(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      t &&
                        (o = o.filter(function (t) {
                          return Object.getOwnPropertyDescriptor(
                            e,
                            t
                          ).enumerable;
                        })),
                        n.push.apply(n, o);
                    }
                    return n;
                  }
                  function o(e) {
                    for (var o = 1; o < arguments.length; o++) {
                      var r = null != arguments[o] ? arguments[o] : {};
                      o % 2
                        ? n(Object(r), !0).forEach(function (n) {
                            t(e, n, r[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : n(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t)
                            );
                          });
                    }
                    return e;
                  }
                  var r = null;
                  try {
                    r = require("react").createContext();
                  } catch (e) {}
                  var a = {
                    React: null,
                    ReactDOM: null,
                    rootComponent: null,
                    loadRootComponent: null,
                    renderType: null,
                    errorBoundary: null,
                    errorBoundaryClass: null,
                    domElementGetter: null,
                    parcelCanUpdate: !0,
                    suppressComponentDidCatchWarning: !1,
                    domElements: {},
                  };
                  function c(t) {
                    if ("object" !== e(t))
                      throw new Error(
                        "single-spa-react requires a configuration object"
                      );
                    var n = o(o({}, a), t);
                    if (!n.React)
                      throw new Error(
                        "single-spa-react must be passed opts.React"
                      );
                    if (!n.ReactDOM)
                      throw new Error(
                        "single-spa-react must be passed opts.ReactDOM"
                      );
                    if (!n.rootComponent && !n.loadRootComponent)
                      throw new Error(
                        "single-spa-react must be passed opts.rootComponent or opts.loadRootComponent"
                      );
                    if (n.errorBoundary && "function" != typeof n.errorBoundary)
                      throw Error(
                        "The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements"
                      );
                    !r &&
                      n.React.createContext &&
                      (r = n.React.createContext());
                    var c = {
                      bootstrap: i.bind(null, n),
                      mount: p.bind(null, n),
                      unmount: u.bind(null, n),
                    };
                    return n.parcelCanUpdate && (c.update = l.bind(null, n)), c;
                  }
                  function i(e, t) {
                    return e.rootComponent
                      ? Promise.resolve()
                      : e.loadRootComponent(t).then(function (t) {
                          e.rootComponent = t;
                        });
                  }
                  function p(e, t) {
                    return new Promise(function (n, o) {
                      e.suppressComponentDidCatchWarning ||
                        !(function (e) {
                          if (
                            !(
                              e &&
                              "string" == typeof e.version &&
                              e.version.indexOf(".") >= 0
                            )
                          )
                            return !1;
                          var t = e.version.slice(0, e.version.indexOf("."));
                          try {
                            return Number(t) >= 16;
                          } catch (e) {
                            return !1;
                          }
                        })(e.React) ||
                        e.errorBoundary ||
                        (e.rootComponent.prototype
                          ? e.rootComponent.prototype.componentDidCatch ||
                            console.warn(
                              "single-spa-react: ".concat(
                                t.name || t.appName || t.childAppName,
                                "'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application."
                              )
                            )
                          : console.warn(
                              "single-spa-react: ".concat(
                                t.name || t.appName || t.childAppName,
                                "'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts)."
                              )
                            ));
                      var r = (function (e, t) {
                        return t.domElement
                          ? function () {
                              return t.domElement;
                            }
                          : t.domElementGetter
                          ? t.domElementGetter
                          : e.domElementGetter
                          ? e.domElementGetter
                          : (function (e) {
                              var t = e.appName || e.name;
                              if (!t)
                                throw Error(
                                  "single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application"
                                );
                              var n = "single-spa-application:".concat(t);
                              return function () {
                                var e = document.getElementById(n);
                                return (
                                  e ||
                                    (((e = document.createElement(
                                      "div"
                                    )).id = n),
                                    document.body.appendChild(e)),
                                  e
                                );
                              };
                            })(t);
                      })(e, t);
                      if ("function" != typeof r)
                        throw new Error(
                          "single-spa-react: the domElementGetter for react application '".concat(
                            t.appName || t.name,
                            "' is not a function"
                          )
                        );
                      var a = m(e, t),
                        c = (function (e, t) {
                          var n = e(t);
                          if (!n)
                            throw new Error(
                              "single-spa-react: domElementGetter function for application '".concat(
                                t.appName || t.name,
                                "' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"
                              )
                            );
                          return n;
                        })(r, t);
                      s({
                        elementToRender: a,
                        domElement: c,
                        whenFinished: function () {
                          n(this);
                        },
                        opts: e,
                      }),
                        (e.domElements[t.name] = c);
                    });
                  }
                  function u(e, t) {
                    return Promise.resolve().then(function () {
                      e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),
                        delete e.domElements[t.name];
                    });
                  }
                  function l(e, t) {
                    return new Promise(function (n, o) {
                      s({
                        elementToRender: m(e, t),
                        domElement: e.domElements[t.name],
                        whenFinished: function () {
                          n(this);
                        },
                        opts: e,
                      });
                    });
                  }
                  function s(e) {
                    var t = e.opts,
                      n = e.elementToRender,
                      o = e.domElement,
                      r = e.whenFinished;
                    return [
                      "createRoot",
                      "unstable_createRoot",
                      "createBlockingRoot",
                      "unstable_createBlockingRoot",
                    ].indexOf(t.renderType) >= 0
                      ? t.ReactDOM[t.renderType](o).render(n, r)
                      : "hydrate" === t.renderType
                      ? t.ReactDOM.hydrate(n, o, r)
                      : t.ReactDOM.render(n, o, r);
                  }
                  function m(e, t) {
                    var n = e.React.createElement(e.rootComponent, t),
                      o = r
                        ? e.React.createElement(r.Provider, { value: t }, n)
                        : n;
                    return (
                      e.errorBoundary &&
                        ((e.errorBoundaryClass =
                          e.errorBoundaryClass ||
                          (function (e) {
                            function t(n) {
                              e.React.Component.apply(this, arguments),
                                (this.state = {
                                  caughtError: null,
                                  caughtErrorInfo: null,
                                }),
                                (t.displayName = "SingleSpaReactErrorBoundary(".concat(
                                  n.name,
                                  ")"
                                ));
                            }
                            return (
                              (t.prototype = Object.create(
                                e.React.Component.prototype
                              )),
                              (t.prototype.render = function () {
                                return this.state.caughtError
                                  ? e.errorBoundary(
                                      this.state.caughtError,
                                      this.state.caughtErrorInfo,
                                      this.props
                                    )
                                  : this.props.children;
                              }),
                              (t.prototype.componentDidCatch = function (e, t) {
                                this.setState({
                                  caughtError: e,
                                  caughtErrorInfo: t,
                                });
                              }),
                              t
                            );
                          })(e)),
                        (o = e.React.createElement(
                          e.errorBoundaryClass,
                          t,
                          o
                        ))),
                      o
                    );
                  }
                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = c;
                  //# sourceMappingURL=single-spa-react.js.map

                  /***/
                },

              /***/ "./node_modules/swr/esm/cache.js":
                /*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js"
                  );

                  var Cache = /** @class */ (function () {
                    function Cache(initialData) {
                      if (initialData === void 0) {
                        initialData = {};
                      }
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
                      if (typeof key === "function") {
                        try {
                          key = key();
                        } catch (err) {
                          // dependencies not ready
                          key = "";
                        }
                      }
                      if (Array.isArray(key)) {
                        // args array
                        args = key;
                        key = (0,
                        _libs_hash__WEBPACK_IMPORTED_MODULE_0__.default)(key);
                      } else {
                        // convert null to ''
                        key = String(key || "");
                      }
                      var errorKey = key ? "err@" + key : "";
                      var isValidatingKey = key ? "validating@" + key : "";
                      return [key, args, errorKey, isValidatingKey];
                    };
                    Cache.prototype.subscribe = function (listener) {
                      var _this = this;
                      if (typeof listener !== "function") {
                        throw new Error(
                          "Expected the listener to be a function."
                        );
                      }
                      var isSubscribed = true;
                      this.subs.push(listener);
                      return function () {
                        if (!isSubscribed) return;
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
                  })();
                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Cache;

                  /***/
                },

              /***/ "./node_modules/swr/esm/config.js":
                /*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ cache: () => /* binding */ cache,
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var dequal_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! dequal/lite */ "./node_modules/dequal/lite/index.mjs"
                  );
                  /* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./cache */ "./node_modules/swr/esm/cache.js"
                  );
                  /* harmony import */ var _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./libs/web-preset */ "./node_modules/swr/esm/libs/web-preset.js"
                  );
                  var __assign =
                    (undefined && undefined.__assign) ||
                    function () {
                      __assign =
                        Object.assign ||
                        function (t) {
                          for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s)
                              if (Object.prototype.hasOwnProperty.call(s, p))
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
                    if (
                      typeof config.errorRetryCount === "number" &&
                      opts.retryCount > config.errorRetryCount
                    ) {
                      return;
                    }
                    // exponential backoff
                    var count = Math.min(opts.retryCount, 8);
                    var timeout =
                      ~~((Math.random() + 0.5) * (1 << count)) *
                      config.errorRetryInterval;
                    setTimeout(revalidate, timeout, opts);
                  }
                  // client side: need to adjust the config
                  // based on the browser status
                  // slow connection (<= 70Kbps)
                  var slowConnection =
                    typeof window !== "undefined" &&
                    // @ts-ignore
                    navigator["connection"] &&
                    // @ts-ignore
                    ["slow-2g", "2g"].indexOf(
                      navigator["connection"].effectiveType
                    ) !== -1;
                  // config
                  var defaultConfig = __assign(
                    {
                      // events
                      onLoadingSlow: function () {},
                      onSuccess: function () {},
                      onError: function () {},
                      onErrorRetry: onErrorRetry,
                      errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
                      focusThrottleInterval: 5 * 1000,
                      dedupingInterval: 2 * 1000,
                      loadingTimeout: (slowConnection ? 5 : 3) * 1000,
                      refreshInterval: 0,
                      revalidateOnFocus: true,
                      revalidateOnReconnect: true,
                      refreshWhenHidden: false,
                      refreshWhenOffline: false,
                      shouldRetryOnError: true,
                      suspense: false,
                      compare: dequal_lite__WEBPACK_IMPORTED_MODULE_0__.dequal,
                      isPaused: function () {
                        return false;
                      },
                    },
                    _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__.default
                  );

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = defaultConfig;

                  /***/
                },

              /***/ "./node_modules/swr/esm/env.js":
                /*!*************************************!*\
  !*** ./node_modules/swr/esm/env.js ***!
  \*************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ IS_SERVER: () =>
                        /* binding */ IS_SERVER,
                      /* harmony export */ rAF: () => /* binding */ rAF,
                      /* harmony export */ useIsomorphicLayoutEffect: () =>
                        /* binding */ useIsomorphicLayoutEffect,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ "react"
                  );

                  var IS_SERVER =
                    typeof window === "undefined" ||
                    // @ts-ignore
                    !!(
                      typeof Deno !== "undefined" &&
                      Deno &&
                      Deno.version &&
                      Deno.version.deno
                    );
                  // polyfill for requestAnimationFrame
                  var rAF = IS_SERVER
                    ? null
                    : window["requestAnimationFrame"]
                    ? function (f) {
                        return window["requestAnimationFrame"](f);
                      }
                    : function (f) {
                        return setTimeout(f, 1);
                      };
                  // React currently throws a warning when using useLayoutEffect on the server.
                  // To get around it, we can conditionally useEffect on the server (no-op) and
                  // useLayoutEffect in the browser.
                  var useIsomorphicLayoutEffect = IS_SERVER
                    ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect
                    : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;

                  /***/
                },

              /***/ "./node_modules/swr/esm/index.js":
                /*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */ SWRConfig: () =>
                        /* reexport safe */ _use_swr__WEBPACK_IMPORTED_MODULE_0__.SWRConfig,
                      /* harmony export */ mutate: () =>
                        /* reexport safe */ _use_swr__WEBPACK_IMPORTED_MODULE_0__.mutate,
                      /* harmony export */ trigger: () =>
                        /* reexport safe */ _use_swr__WEBPACK_IMPORTED_MODULE_0__.trigger,
                      /* harmony export */ useSWRInfinite: () =>
                        /* reexport safe */ _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__.useSWRInfinite,
                      /* harmony export */ cache: () =>
                        /* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_2__.cache,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./use-swr */ "./node_modules/swr/esm/use-swr.js"
                  );
                  /* harmony import */ var _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./use-swr-infinite */ "./node_modules/swr/esm/use-swr-infinite.js"
                  );
                  /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./config */ "./node_modules/swr/esm/config.js"
                  );
                  // `useSWR` and related APIs

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _use_swr__WEBPACK_IMPORTED_MODULE_0__.default;

                  // `useSWRInfinite`

                  // Cache related, to be replaced by the new APIs

                  /***/
                },

              /***/ "./node_modules/swr/esm/libs/hash.js":
                /*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () => /* binding */ hash,
                      /* harmony export */
                    }
                  );
                  // use WeakMap to store the object->key mapping
                  // so the objects can be garbage collected.
                  // WeakMap uses a hashtable under the hood, so the lookup
                  // complexity is almost O(1).
                  var table = new WeakMap();
                  // counter of the key
                  var counter = 0;
                  // hashes an array of objects and returns a string
                  function hash(args) {
                    if (!args.length) return "";
                    var key = "arg";
                    for (var i = 0; i < args.length; ++i) {
                      if (args[i] === null) {
                        key += "@null";
                        continue;
                      }
                      var _hash = void 0;
                      if (
                        typeof args[i] !== "object" &&
                        typeof args[i] !== "function"
                      ) {
                        // need to consider the case that args[i] is a string:
                        // args[i]        _hash
                        // "undefined" -> '"undefined"'
                        // undefined   -> 'undefined'
                        // 123         -> '123'
                        // "null"      -> '"null"'
                        if (typeof args[i] === "string") {
                          _hash = '"' + args[i] + '"';
                        } else {
                          _hash = String(args[i]);
                        }
                      } else {
                        if (!table.has(args[i])) {
                          _hash = counter;
                          table.set(args[i], counter++);
                        } else {
                          _hash = table.get(args[i]);
                        }
                      }
                      key += "@" + _hash;
                    }
                    return key;
                  }

                  /***/
                },

              /***/ "./node_modules/swr/esm/libs/web-preset.js":
                /*!*************************************************!*\
  !*** ./node_modules/swr/esm/libs/web-preset.js ***!
  \*************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  /**
                   * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
                   * it's not reliable to detect if the browser is currently online or offline
                   * based on `navigator.onLine`.
                   * As a work around, we always assume it's online on first load, and change
                   * the status upon `online` or `offline` events.
                   */
                  var online = true;
                  var isOnline = function () {
                    return online;
                  };
                  var isDocumentVisible = function () {
                    if (
                      typeof document !== "undefined" &&
                      document.visibilityState !== undefined
                    ) {
                      return document.visibilityState !== "hidden";
                    }
                    // always assume it's visible
                    return true;
                  };
                  var fetcher = function (url) {
                    return fetch(url).then(function (res) {
                      return res.json();
                    });
                  };
                  var registerOnFocus = function (cb) {
                    if (
                      typeof window !== "undefined" &&
                      window.addEventListener !== undefined &&
                      typeof document !== "undefined" &&
                      document.addEventListener !== undefined
                    ) {
                      // focus revalidate
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          return cb();
                        },
                        false
                      );
                      window.addEventListener(
                        "focus",
                        function () {
                          return cb();
                        },
                        false
                      );
                    }
                  };
                  var registerOnReconnect = function (cb) {
                    if (
                      typeof window !== "undefined" &&
                      window.addEventListener !== undefined
                    ) {
                      // reconnect revalidate
                      window.addEventListener(
                        "online",
                        function () {
                          online = true;
                          cb();
                        },
                        false
                      );
                      // nothing to revalidate, just update the status
                      window.addEventListener(
                        "offline",
                        function () {
                          return (online = false);
                        },
                        false
                      );
                    }
                  };
                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    isOnline: isOnline,
                    isDocumentVisible: isDocumentVisible,
                    fetcher: fetcher,
                    registerOnFocus: registerOnFocus,
                    registerOnReconnect: registerOnReconnect,
                  };

                  /***/
                },

              /***/ "./node_modules/swr/esm/swr-config-context.js":
                /*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ "react"
                  );

                  var SWRConfigContext = (0,
                  react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
                  SWRConfigContext.displayName = "SWRConfigContext";
                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = SWRConfigContext;

                  /***/
                },

              /***/ "./node_modules/swr/esm/use-swr-infinite.js":
                /*!**************************************************!*\
  !*** ./node_modules/swr/esm/use-swr-infinite.js ***!
  \**************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ useSWRInfinite: () =>
                        /* binding */ useSWRInfinite,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ "react"
                  );
                  /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./config */ "./node_modules/swr/esm/config.js"
                  );
                  /* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./env */ "./node_modules/swr/esm/env.js"
                  );
                  /* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js"
                  );
                  /* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./use-swr */ "./node_modules/swr/esm/use-swr.js"
                  );
                  var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                      function adopt(value) {
                        return value instanceof P
                          ? value
                          : new P(function (resolve) {
                              resolve(value);
                            });
                      }
                      return new (P || (P = Promise))(function (
                        resolve,
                        reject
                      ) {
                        function fulfilled(value) {
                          try {
                            step(generator.next(value));
                          } catch (e) {
                            reject(e);
                          }
                        }
                        function rejected(value) {
                          try {
                            step(generator["throw"](value));
                          } catch (e) {
                            reject(e);
                          }
                        }
                        function step(result) {
                          result.done
                            ? resolve(result.value)
                            : adopt(result.value).then(fulfilled, rejected);
                        }
                        step(
                          (generator = generator.apply(
                            thisArg,
                            _arguments || []
                          )).next()
                        );
                      });
                    };
                  var __generator =
                    (undefined && undefined.__generator) ||
                    function (thisArg, body) {
                      var _ = {
                          label: 0,
                          sent: function () {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                          },
                          trys: [],
                          ops: [],
                        },
                        f,
                        y,
                        t,
                        g;
                      return (
                        (g = {
                          next: verb(0),
                          throw: verb(1),
                          return: verb(2),
                        }),
                        typeof Symbol === "function" &&
                          (g[Symbol.iterator] = function () {
                            return this;
                          }),
                        g
                      );
                      function verb(n) {
                        return function (v) {
                          return step([n, v]);
                        };
                      }
                      function step(op) {
                        if (f)
                          throw new TypeError(
                            "Generator is already executing."
                          );
                        while (_)
                          try {
                            if (
                              ((f = 1),
                              y &&
                                (t =
                                  op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] ||
                                      ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                                !(t = t.call(y, op[1])).done)
                            )
                              return t;
                            if (((y = 0), t)) op = [op[0] & 2, t.value];
                            switch (op[0]) {
                              case 0:
                              case 1:
                                t = op;
                                break;
                              case 4:
                                _.label++;
                                return { value: op[1], done: false };
                              case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                              case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                              default:
                                if (
                                  !((t = _.trys),
                                  (t = t.length > 0 && t[t.length - 1])) &&
                                  (op[0] === 6 || op[0] === 2)
                                ) {
                                  _ = 0;
                                  continue;
                                }
                                if (
                                  op[0] === 3 &&
                                  (!t || (op[1] > t[0] && op[1] < t[3]))
                                ) {
                                  _.label = op[1];
                                  break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                  _.label = t[1];
                                  t = op;
                                  break;
                                }
                                if (t && _.label < t[2]) {
                                  _.label = t[2];
                                  _.ops.push(op);
                                  break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                            }
                            op = body.call(thisArg, _);
                          } catch (e) {
                            op = [6, e];
                            y = 0;
                          } finally {
                            f = t = 0;
                          }
                        if (op[0] & 5) throw op[1];
                        return { value: op[0] ? op[1] : void 0, done: true };
                      }
                    };
                  var __rest =
                    (undefined && undefined.__rest) ||
                    function (s, e) {
                      var t = {};
                      for (var p in s)
                        if (
                          Object.prototype.hasOwnProperty.call(s, p) &&
                          e.indexOf(p) < 0
                        )
                          t[p] = s[p];
                      if (
                        s != null &&
                        typeof Object.getOwnPropertySymbols === "function"
                      )
                        for (
                          var i = 0, p = Object.getOwnPropertySymbols(s);
                          i < p.length;
                          i++
                        ) {
                          if (
                            e.indexOf(p[i]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(s, p[i])
                          )
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
                    var config = Object.assign(
                      {},
                      _config__WEBPACK_IMPORTED_MODULE_1__.default,
                      (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                        _swr_config_context__WEBPACK_IMPORTED_MODULE_3__.default
                      ),
                      args.length > 2
                        ? args[2]
                        : args.length === 2 && typeof args[1] === "object"
                        ? args[1]
                        : {}
                    );
                    // in typescript args.length > 2 is not same as args.lenth === 3
                    // we do a safe type assertion here
                    // args.length === 3
                    var fn =
                      args.length > 2
                        ? args[1]
                        : args.length === 2 && typeof args[1] === "function"
                        ? args[1]
                        : config.fetcher;
                    var _a = config.initialSize,
                      initialSize = _a === void 0 ? 1 : _a,
                      _b = config.revalidateAll,
                      revalidateAll = _b === void 0 ? false : _b,
                      _c = config.persistSize,
                      persistSize = _c === void 0 ? false : _c,
                      extraConfig = __rest(
                        config,
                        // get the serialized key of the first page
                        ["initialSize", "revalidateAll", "persistSize"]
                      );
                    // get the serialized key of the first page
                    var firstPageKey = null;
                    try {
                      firstPageKey = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(
                        getKey(0, null)
                      )[0];
                    } catch (err) {
                      // not ready
                    }
                    var rerender = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useState)({})[1];
                    // we use cache to pass extra info (context) to fetcher so it can be globally shared
                    // here we get the key of the fetcher context cache
                    var contextCacheKey = null;
                    if (firstPageKey) {
                      contextCacheKey = "ctx@" + firstPageKey;
                    }
                    // page size is also cached to share the page data between hooks having the same key
                    var pageSizeCacheKey = null;
                    if (firstPageKey) {
                      pageSizeCacheKey = "len@" + firstPageKey;
                    }
                    var didMountRef = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
                    var resolvePageSize = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                      function () {
                        var cachedPageSize = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                          pageSizeCacheKey
                        );
                        return typeof cachedPageSize !== "undefined"
                          ? cachedPageSize
                          : initialSize;
                      },
                      [pageSizeCacheKey, initialSize]
                    );
                    // keep the last page size to restore it with the persistSize option
                    var lastPageSizeRef = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
                      resolvePageSize()
                    );
                    // every time the key changes, we reset the page size if it's not persisted
                    (0,
                    _env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(
                      function () {
                        if (!didMountRef.current) {
                          didMountRef.current = true;
                          return;
                        }
                        // If the key has been changed, we keep the current page size if persistSize is enabled
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                          pageSizeCacheKey,
                          persistSize ? lastPageSizeRef.current : initialSize
                        );
                        // initialSize isn't allowed to change during the lifecycle
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                      },
                      [firstPageKey]
                    );
                    // keep the data inside a ref
                    var dataRef = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
                    // actual swr of all pages
                    var swr = (0,
                    _use_swr__WEBPACK_IMPORTED_MODULE_4__.default)(
                      firstPageKey ? ["inf", firstPageKey] : null,
                      function () {
                        return __awaiter(_this, void 0, void 0, function () {
                          var _a,
                            originalData,
                            force,
                            data,
                            pageSize,
                            previousPageData,
                            i,
                            _b,
                            pageKey,
                            pageArgs,
                            pageData,
                            shouldFetchPage;
                          return __generator(this, function (_c) {
                            switch (_c.label) {
                              case 0:
                                (_a =
                                  _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                                    contextCacheKey
                                  ) || {}),
                                  (originalData = _a.data),
                                  (force = _a.force);
                                data = [];
                                pageSize = resolvePageSize();
                                previousPageData = null;
                                i = 0;
                                _c.label = 1;
                              case 1:
                                if (!(i < pageSize)) return [3 /*break*/, 8];
                                (_b = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(
                                  getKey(i, previousPageData)
                                )),
                                  (pageKey = _b[0]),
                                  (pageArgs = _b[1]);
                                if (!pageKey) {
                                  // pageKey is falsy, stop fetching next pages
                                  return [3 /*break*/, 8];
                                }
                                pageData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                                  pageKey
                                );
                                shouldFetchPage =
                                  revalidateAll ||
                                  force ||
                                  typeof pageData === "undefined" ||
                                  (typeof force === "undefined" &&
                                    i === 0 &&
                                    typeof dataRef.current !== "undefined") ||
                                  (originalData &&
                                    !config.compare(originalData[i], pageData));
                                if (!shouldFetchPage) return [3 /*break*/, 6];
                                if (!(pageArgs !== null))
                                  return [3 /*break*/, 3];
                                return [
                                  4 /*yield*/,
                                  fn.apply(void 0, pageArgs),
                                ];
                              case 2:
                                pageData = _c.sent();
                                return [3 /*break*/, 5];
                              case 3:
                                return [4 /*yield*/, fn(pageKey)];
                              case 4:
                                pageData = _c.sent();
                                _c.label = 5;
                              case 5:
                                _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                                  pageKey,
                                  pageData
                                );
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
                                _config__WEBPACK_IMPORTED_MODULE_1__.cache.delete(
                                  contextCacheKey
                                );
                                // return the data
                                return [2 /*return*/, data];
                            }
                          });
                        });
                      },
                      extraConfig
                    );
                    // update dataRef
                    (0,
                    _env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(
                      function () {
                        dataRef.current = swr.data;
                      },
                      [swr.data]
                    );
                    var mutate = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                      function (data, shouldRevalidate) {
                        if (shouldRevalidate === void 0) {
                          shouldRevalidate = true;
                        }
                        if (shouldRevalidate && typeof data !== "undefined") {
                          // we only revalidate the pages that are changed
                          var originalData = dataRef.current;
                          _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                            contextCacheKey,
                            { data: originalData, force: false }
                          );
                        } else if (shouldRevalidate) {
                          // calling `mutate()`, we revalidate all pages
                          _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                            contextCacheKey,
                            { force: true }
                          );
                        }
                        return swr.mutate(data, shouldRevalidate);
                      },
                      // swr.mutate is always the same reference
                      // eslint-disable-next-line react-hooks/exhaustive-deps
                      [contextCacheKey]
                    );
                    // extend the SWR API
                    var setSize = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                      function (arg) {
                        var size;
                        if (typeof arg === "function") {
                          size = arg(resolvePageSize());
                        } else if (typeof arg === "number") {
                          size = arg;
                        }
                        if (typeof size === "number") {
                          _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                            pageSizeCacheKey,
                            size
                          );
                          lastPageSizeRef.current = size;
                        }
                        rerender({});
                        return mutate(function (v) {
                          return v;
                        });
                      },
                      // immutability of rerender is guaranteed by React, but react-hooks/exhaustive-deps doesn't recognize it
                      // from `rerender = useState({})[1], so we put rerender here
                      [pageSizeCacheKey, resolvePageSize, mutate, rerender]
                    );
                    // Use getter functions to avoid unnecessary re-renders caused by triggering all the getters of the returned swr object
                    var swrInfinite = {
                      size: resolvePageSize(),
                      setSize: setSize,
                      mutate: mutate,
                    };
                    Object.defineProperties(swrInfinite, {
                      error: {
                        get: function () {
                          return swr.error;
                        },
                        enumerable: true,
                      },
                      data: {
                        get: function () {
                          return swr.data;
                        },
                        enumerable: true,
                      },
                      // revalidate will be deprecated in the 1.x release
                      // because mutate() covers the same use case of revalidate().
                      // This remains only for backward compatibility
                      revalidate: {
                        get: function () {
                          return swr.revalidate;
                        },
                        enumerable: true,
                      },
                      isValidating: {
                        get: function () {
                          return swr.isValidating;
                        },
                        enumerable: true,
                      },
                    });
                    return swrInfinite;
                  }

                  /***/
                },

              /***/ "./node_modules/swr/esm/use-swr.js":
                /*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ trigger: () => /* binding */ trigger,
                      /* harmony export */ mutate: () => /* binding */ mutate,
                      /* harmony export */ SWRConfig: () =>
                        /* binding */ SWRConfig,
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ "react"
                  );
                  /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./config */ "./node_modules/swr/esm/config.js"
                  );
                  /* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./env */ "./node_modules/swr/esm/env.js"
                  );
                  /* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js"
                  );
                  var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                      function adopt(value) {
                        return value instanceof P
                          ? value
                          : new P(function (resolve) {
                              resolve(value);
                            });
                      }
                      return new (P || (P = Promise))(function (
                        resolve,
                        reject
                      ) {
                        function fulfilled(value) {
                          try {
                            step(generator.next(value));
                          } catch (e) {
                            reject(e);
                          }
                        }
                        function rejected(value) {
                          try {
                            step(generator["throw"](value));
                          } catch (e) {
                            reject(e);
                          }
                        }
                        function step(result) {
                          result.done
                            ? resolve(result.value)
                            : adopt(result.value).then(fulfilled, rejected);
                        }
                        step(
                          (generator = generator.apply(
                            thisArg,
                            _arguments || []
                          )).next()
                        );
                      });
                    };
                  var __generator =
                    (undefined && undefined.__generator) ||
                    function (thisArg, body) {
                      var _ = {
                          label: 0,
                          sent: function () {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                          },
                          trys: [],
                          ops: [],
                        },
                        f,
                        y,
                        t,
                        g;
                      return (
                        (g = {
                          next: verb(0),
                          throw: verb(1),
                          return: verb(2),
                        }),
                        typeof Symbol === "function" &&
                          (g[Symbol.iterator] = function () {
                            return this;
                          }),
                        g
                      );
                      function verb(n) {
                        return function (v) {
                          return step([n, v]);
                        };
                      }
                      function step(op) {
                        if (f)
                          throw new TypeError(
                            "Generator is already executing."
                          );
                        while (_)
                          try {
                            if (
                              ((f = 1),
                              y &&
                                (t =
                                  op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] ||
                                      ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                                !(t = t.call(y, op[1])).done)
                            )
                              return t;
                            if (((y = 0), t)) op = [op[0] & 2, t.value];
                            switch (op[0]) {
                              case 0:
                              case 1:
                                t = op;
                                break;
                              case 4:
                                _.label++;
                                return { value: op[1], done: false };
                              case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                              case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                              default:
                                if (
                                  !((t = _.trys),
                                  (t = t.length > 0 && t[t.length - 1])) &&
                                  (op[0] === 6 || op[0] === 2)
                                ) {
                                  _ = 0;
                                  continue;
                                }
                                if (
                                  op[0] === 3 &&
                                  (!t || (op[1] > t[0] && op[1] < t[3]))
                                ) {
                                  _.label = op[1];
                                  break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                  _.label = t[1];
                                  t = op;
                                  break;
                                }
                                if (t && _.label < t[2]) {
                                  _.label = t[2];
                                  _.ops.push(op);
                                  break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                            }
                            op = body.call(thisArg, _);
                          } catch (e) {
                            op = [6, e];
                            y = 0;
                          } finally {
                            f = t = 0;
                          }
                        if (op[0] & 5) throw op[1];
                        return { value: op[0] ? op[1] : void 0, done: true };
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
                    return function () {
                      return ++ts;
                    };
                  })();
                  // setup DOM events listeners for `focus` and `reconnect` actions
                  if (!_env__WEBPACK_IMPORTED_MODULE_2__.IS_SERVER) {
                    var revalidate_1 = function (revalidators) {
                      if (
                        !_config__WEBPACK_IMPORTED_MODULE_1__.default.isDocumentVisible() ||
                        !_config__WEBPACK_IMPORTED_MODULE_1__.default.isOnline()
                      )
                        return;
                      for (var key in revalidators) {
                        if (revalidators[key][0]) revalidators[key][0]();
                      }
                    };
                    if (
                      typeof _config__WEBPACK_IMPORTED_MODULE_1__.default
                        .registerOnFocus === "function"
                    ) {
                      _config__WEBPACK_IMPORTED_MODULE_1__.default.registerOnFocus(
                        function () {
                          return revalidate_1(FOCUS_REVALIDATORS);
                        }
                      );
                    }
                    if (
                      typeof _config__WEBPACK_IMPORTED_MODULE_1__.default
                        .registerOnReconnect === "function"
                    ) {
                      _config__WEBPACK_IMPORTED_MODULE_1__.default.registerOnReconnect(
                        function () {
                          return revalidate_1(RECONNECT_REVALIDATORS);
                        }
                      );
                    }
                  }
                  var trigger = function (_key, shouldRevalidate) {
                    if (shouldRevalidate === void 0) {
                      shouldRevalidate = true;
                    }
                    // we are ignoring the second argument which correspond to the arguments
                    // the fetcher will receive when key is an array
                    var _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(
                        _key
                      ),
                      key = _a[0],
                      keyErr = _a[2],
                      keyValidating = _a[3];
                    if (!key) return Promise.resolve();
                    var updaters = CACHE_REVALIDATORS[key];
                    if (key && updaters) {
                      var currentData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                        key
                      );
                      var currentError = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                        keyErr
                      );
                      var currentIsValidating = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                        keyValidating
                      );
                      var promises = [];
                      for (var i = 0; i < updaters.length; ++i) {
                        promises.push(
                          updaters[i](
                            shouldRevalidate,
                            currentData,
                            currentError,
                            currentIsValidating,
                            i > 0
                          )
                        );
                      }
                      // return new updated value
                      return Promise.all(promises).then(function () {
                        return _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                          key
                        );
                      });
                    }
                    return Promise.resolve(
                      _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key)
                    );
                  };
                  var broadcastState = function (
                    key,
                    data,
                    error,
                    isValidating
                  ) {
                    var updaters = CACHE_REVALIDATORS[key];
                    if (key && updaters) {
                      for (var i = 0; i < updaters.length; ++i) {
                        updaters[i](false, data, error, isValidating);
                      }
                    }
                  };
                  var mutate = function (_key, _data, shouldRevalidate) {
                    if (shouldRevalidate === void 0) {
                      shouldRevalidate = true;
                    }
                    return __awaiter(void 0, void 0, void 0, function () {
                      var _a,
                        key,
                        keyErr,
                        beforeMutationTs,
                        beforeConcurrentPromisesTs,
                        data,
                        error,
                        isAsyncMutation,
                        err_1,
                        shouldAbort,
                        updaters,
                        promises,
                        i;
                      return __generator(this, function (_b) {
                        switch (_b.label) {
                          case 0:
                            (_a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(
                              _key
                            )),
                              (key = _a[0]),
                              (keyErr = _a[2]);
                            if (!key) return [2 /*return*/];
                            // if there is no new data to update, let's just revalidate the key
                            if (typeof _data === "undefined")
                              return [
                                2 /*return*/,
                                trigger(_key, shouldRevalidate),
                                // update global timestamps
                              ];
                            // update global timestamps
                            MUTATION_TS[key] = now() - 1;
                            MUTATION_END_TS[key] = 0;
                            beforeMutationTs = MUTATION_TS[key];
                            beforeConcurrentPromisesTs =
                              CONCURRENT_PROMISES_TS[key];
                            isAsyncMutation = false;
                            if (_data && typeof _data === "function") {
                              // `_data` is a function, call it passing current cache value
                              try {
                                _data = _data(
                                  _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                                    key
                                  )
                                );
                              } catch (err) {
                                // if `_data` function throws an error synchronously, it shouldn't be cached
                                _data = undefined;
                                error = err;
                              }
                            }
                            if (!(_data && typeof _data.then === "function"))
                              return [3 /*break*/, 5];
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
                          case 4:
                            return [3 /*break*/, 6];
                          case 5:
                            data = _data;
                            _b.label = 6;
                          case 6:
                            shouldAbort = function () {
                              // check if other mutations have occurred since we've started this mutation
                              if (
                                beforeMutationTs !== MUTATION_TS[key] ||
                                beforeConcurrentPromisesTs !==
                                  CONCURRENT_PROMISES_TS[key]
                              ) {
                                if (error) throw error;
                                return true;
                              }
                            };
                            // if there's a race we don't update cache or broadcast change, just return the data
                            if (shouldAbort()) return [2 /*return*/, data];
                            if (typeof data !== "undefined") {
                              // update cached data
                              _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                                key,
                                data
                              );
                            }
                            // always update or reset the error
                            _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                              keyErr,
                              error
                            );
                            // reset the timestamp to mark the mutation has ended
                            MUTATION_END_TS[key] = now() - 1;
                            if (!isAsyncMutation) {
                              // we skip broadcasting if there's another mutation happened synchronously
                              if (shouldAbort()) return [2 /*return*/, data];
                            }
                            updaters = CACHE_REVALIDATORS[key];
                            if (updaters) {
                              promises = [];
                              for (i = 0; i < updaters.length; ++i) {
                                promises.push(
                                  updaters[i](
                                    !!shouldRevalidate,
                                    data,
                                    error,
                                    undefined,
                                    i > 0
                                  )
                                );
                              }
                              // return new updated value
                              return [
                                2 /*return*/,
                                Promise.all(promises).then(function () {
                                  if (error) throw error;
                                  return _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                                    key
                                  );
                                }),
                              ];
                            }
                            // throw error or return data to be used by caller of mutate
                            if (error) throw error;
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
                    var config = Object.assign(
                      {},
                      _config__WEBPACK_IMPORTED_MODULE_1__.default,
                      (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                        _swr_config_context__WEBPACK_IMPORTED_MODULE_3__.default
                      ),
                      args.length > 2
                        ? args[2]
                        : args.length === 2 && typeof args[1] === "object"
                        ? args[1]
                        : {}
                    );
                    // in typescript args.length > 2 is not same as args.lenth === 3
                    // we do a safe type assertion here
                    // args.length === 3
                    var fn =
                      args.length > 2
                        ? args[1]
                        : args.length === 2 && typeof args[1] === "function"
                        ? args[1]
                        : /**
                  pass fn as null will disable revalidate
                  https://paco.sh/blog/shared-hook-state-with-swr
                */
                        args[1] === null
                        ? args[1]
                        : config.fetcher;
                    // we assume `key` as the identifier of the request
                    // `key` can change but `fn` shouldn't
                    // (because `revalidate` only depends on `key`)
                    // `keyErr` is the cache key for error objects
                    var _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(
                        _key
                      ),
                      key = _a[0],
                      fnArgs = _a[1],
                      keyErr = _a[2],
                      keyValidating = _a[3];
                    var configRef = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)(config);
                    (0,
                    _env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(
                      function () {
                        configRef.current = config;
                      }
                    );
                    var willRevalidateOnMount = function () {
                      return (
                        config.revalidateOnMount ||
                        (!config.initialData &&
                          config.revalidateOnMount === undefined)
                      );
                    };
                    var resolveData = function () {
                      var cachedData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                        key
                      );
                      return typeof cachedData === "undefined"
                        ? config.initialData
                        : cachedData;
                    };
                    var resolveIsValidating = function () {
                      return (
                        !!_config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                          keyValidating
                        ) ||
                        (key && willRevalidateOnMount())
                      );
                    };
                    var initialData = resolveData();
                    var initialError = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                      keyErr
                    );
                    var initialIsValidating = resolveIsValidating();
                    // if a state is accessed (data, error or isValidating),
                    // we add the state to dependencies so if the state is
                    // updated in the future, we can trigger a rerender
                    var stateDependencies = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
                      data: false,
                      error: false,
                      isValidating: false,
                    });
                    var stateRef = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
                      data: initialData,
                      error: initialError,
                      isValidating: initialIsValidating,
                    });
                    // display the data label in the React DevTools next to SWR hooks
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(
                      stateRef.current.data
                    );
                    var rerender = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useState)({})[1];
                    var dispatch = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                      function (payload) {
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
                          if (
                            unmountedRef.current ||
                            !initialMountedRef.current
                          )
                            return;
                          rerender({});
                        }
                      },
                      // config.suspense isn't allowed to change during the lifecycle
                      // eslint-disable-next-line react-hooks/exhaustive-deps
                      []
                    );
                    // error ref inside revalidate (is last request errored?)
                    var unmountedRef = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
                    var keyRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
                      key
                    );
                    // check if component is mounted in suspense mode
                    var initialMountedRef = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
                    // do unmount check for callbacks
                    var eventsCallback = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                      function (event) {
                        var _a;
                        var params = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                          params[_i - 1] = arguments[_i];
                        }
                        if (unmountedRef.current) return;
                        if (!initialMountedRef.current) return;
                        if (key !== keyRef.current) return;
                        // @ts-ignore
                        (_a = configRef.current)[event].apply(_a, params);
                      },
                      [key]
                    );
                    var boundMutate = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (
                      data,
                      shouldRevalidate
                    ) {
                      return mutate(keyRef.current, data, shouldRevalidate);
                    },
                    []);
                    var addRevalidator = function (revalidators, callback) {
                      if (!revalidators[key]) {
                        revalidators[key] = [callback];
                      } else {
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
                    var revalidate = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                      function (revalidateOpts) {
                        if (revalidateOpts === void 0) {
                          revalidateOpts = {};
                        }
                        return __awaiter(_this, void 0, void 0, function () {
                          var _a,
                            retryCount,
                            _b,
                            dedupe,
                            loading,
                            shouldDeduping,
                            newData,
                            startAt,
                            newState,
                            err_2;
                          return __generator(this, function (_c) {
                            switch (_c.label) {
                              case 0:
                                if (!key || !fn) return [2 /*return*/, false];
                                if (unmountedRef.current)
                                  return [2 /*return*/, false];
                                if (configRef.current.isPaused())
                                  return [2 /*return*/, false];
                                (_a = revalidateOpts.retryCount),
                                  (retryCount = _a === void 0 ? 0 : _a),
                                  (_b = revalidateOpts.dedupe),
                                  (dedupe = _b === void 0 ? false : _b);
                                loading = true;
                                shouldDeduping =
                                  typeof CONCURRENT_PROMISES[key] !==
                                    "undefined" && dedupe;
                                _c.label = 1;
                              case 1:
                                _c.trys.push([1, 6, , 7]);
                                dispatch({
                                  isValidating: true,
                                });
                                _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                                  keyValidating,
                                  true
                                );
                                if (!shouldDeduping) {
                                  // also update other hooks
                                  broadcastState(
                                    key,
                                    stateRef.current.data,
                                    stateRef.current.error,
                                    true
                                  );
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
                                if (
                                  config.loadingTimeout &&
                                  !_config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                                    key
                                  )
                                ) {
                                  setTimeout(function () {
                                    if (loading)
                                      eventsCallback(
                                        "onLoadingSlow",
                                        key,
                                        config
                                      );
                                  }, config.loadingTimeout);
                                }
                                if (fnArgs !== null) {
                                  CONCURRENT_PROMISES[key] = fn.apply(
                                    void 0,
                                    fnArgs
                                  );
                                } else {
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
                                eventsCallback(
                                  "onSuccess",
                                  newData,
                                  key,
                                  config
                                );
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
                                if (
                                  MUTATION_TS[key] &&
                                  // case 1
                                  (startAt <= MUTATION_TS[key] ||
                                    // case 2
                                    startAt <= MUTATION_END_TS[key] ||
                                    // case 3
                                    MUTATION_END_TS[key] === 0)
                                ) {
                                  dispatch({ isValidating: false });
                                  return [2 /*return*/, false];
                                }
                                _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                                  keyErr,
                                  undefined
                                );
                                _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                                  keyValidating,
                                  false
                                );
                                newState = {
                                  isValidating: false,
                                };
                                if (
                                  typeof stateRef.current.error !== "undefined"
                                ) {
                                  // we don't have an error
                                  newState.error = undefined;
                                }
                                if (
                                  !config.compare(
                                    stateRef.current.data,
                                    newData
                                  )
                                ) {
                                  // deep compare to avoid extra re-render
                                  // data changed
                                  newState.data = newData;
                                  _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                                    key,
                                    newData
                                  );
                                }
                                // merge the new state
                                dispatch(newState);
                                if (!shouldDeduping) {
                                  // also update other hooks
                                  broadcastState(
                                    key,
                                    newData,
                                    newState.error,
                                    false
                                  );
                                }
                                return [3 /*break*/, 7];
                              case 6:
                                err_2 = _c.sent();
                                delete CONCURRENT_PROMISES[key];
                                delete CONCURRENT_PROMISES_TS[key];
                                if (configRef.current.isPaused()) {
                                  dispatch({
                                    isValidating: false,
                                  });
                                  return [2 /*return*/, false];
                                }
                                _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(
                                  keyErr,
                                  err_2
                                );
                                // get a new error
                                // don't use deep equal for errors
                                if (stateRef.current.error !== err_2) {
                                  // we keep the stale data
                                  dispatch({
                                    isValidating: false,
                                    error: err_2,
                                  });
                                  if (!shouldDeduping) {
                                    // also broadcast to update other hooks
                                    broadcastState(
                                      key,
                                      undefined,
                                      err_2,
                                      false
                                    );
                                  }
                                }
                                // events and retry
                                eventsCallback("onError", err_2, key, config);
                                if (config.shouldRetryOnError) {
                                  // when retrying, we always enable deduping
                                  eventsCallback(
                                    "onErrorRetry",
                                    err_2,
                                    key,
                                    config,
                                    revalidate,
                                    {
                                      retryCount: retryCount + 1,
                                      dedupe: true,
                                    }
                                  );
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
                      [key]
                    );
                    // mounted (client side rendering)
                    (0,
                    _env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(
                      function () {
                        if (!key) return undefined;
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
                        var softRevalidate = function () {
                          return revalidate({ dedupe: true });
                        };
                        // trigger a revalidation
                        if (isUpdating || willRevalidateOnMount()) {
                          if (
                            typeof latestKeyedData !== "undefined" &&
                            !_env__WEBPACK_IMPORTED_MODULE_2__.IS_SERVER
                          ) {
                            // delay revalidate if there's cache
                            // to not block the rendering
                            // @ts-ignore it's safe to use requestAnimationFrame in browser
                            (0, _env__WEBPACK_IMPORTED_MODULE_2__.rAF)(
                              softRevalidate
                            );
                          } else {
                            softRevalidate();
                          }
                        }
                        var pending = false;
                        var onFocus = function () {
                          if (pending || !configRef.current.revalidateOnFocus)
                            return;
                          pending = true;
                          softRevalidate();
                          setTimeout(function () {
                            return (pending = false);
                          }, configRef.current.focusThrottleInterval);
                        };
                        var onReconnect = function () {
                          if (configRef.current.revalidateOnReconnect) {
                            softRevalidate();
                          }
                        };
                        // register global cache update listener
                        var onUpdate = function (
                          shouldRevalidate,
                          updatedData,
                          updatedError,
                          updatedIsValidating,
                          dedupe
                        ) {
                          if (shouldRevalidate === void 0) {
                            shouldRevalidate = true;
                          }
                          if (dedupe === void 0) {
                            dedupe = true;
                          }
                          // update hook state
                          var newState = {};
                          var needUpdate = false;
                          if (
                            typeof updatedData !== "undefined" &&
                            !config.compare(stateRef.current.data, updatedData)
                          ) {
                            newState.data = updatedData;
                            needUpdate = true;
                          }
                          // always update error
                          // because it can be `undefined`
                          if (stateRef.current.error !== updatedError) {
                            newState.error = updatedError;
                            needUpdate = true;
                          }
                          if (
                            typeof updatedIsValidating !== "undefined" &&
                            stateRef.current.isValidating !==
                              updatedIsValidating
                          ) {
                            newState.isValidating = updatedIsValidating;
                            needUpdate = true;
                          }
                          if (needUpdate) {
                            dispatch(newState);
                          }
                          if (shouldRevalidate) {
                            if (dedupe) {
                              return softRevalidate();
                            } else {
                              return revalidate();
                            }
                          }
                          return false;
                        };
                        var unsubFocus = addRevalidator(
                          FOCUS_REVALIDATORS,
                          onFocus
                        );
                        var unsubReconnect = addRevalidator(
                          RECONNECT_REVALIDATORS,
                          onReconnect
                        );
                        var unsubUpdate = addRevalidator(
                          CACHE_REVALIDATORS,
                          onUpdate
                        );
                        return function () {
                          // cleanup
                          dispatch = function () {
                            return null;
                          };
                          // mark it as unmounted
                          unmountedRef.current = true;
                          unsubFocus();
                          unsubReconnect();
                          unsubUpdate();
                        };
                      },
                      [key, revalidate]
                    );
                    (0,
                    _env__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(
                      function () {
                        var timer = null;
                        var tick = function () {
                          return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                              switch (_a.label) {
                                case 0:
                                  if (
                                    !(
                                      !stateRef.current.error &&
                                      (configRef.current.refreshWhenHidden ||
                                        configRef.current.isDocumentVisible()) &&
                                      (configRef.current.refreshWhenOffline ||
                                        configRef.current.isOnline())
                                    )
                                  )
                                    return [3 /*break*/, 2];
                                  // only revalidate when the page is visible
                                  // if API request errored, we stop polling in this round
                                  // and let the error retry function handle it
                                  return [
                                    4 /*yield*/,
                                    revalidate({ dedupe: true }),
                                  ];
                                case 1:
                                  // only revalidate when the page is visible
                                  // if API request errored, we stop polling in this round
                                  // and let the error retry function handle it
                                  _a.sent();
                                  _a.label = 2;
                                case 2:
                                  // Read the latest refreshInterval
                                  if (
                                    configRef.current.refreshInterval &&
                                    timer
                                  ) {
                                    timer = setTimeout(
                                      tick,
                                      configRef.current.refreshInterval
                                    );
                                  }
                                  return [2 /*return*/];
                              }
                            });
                          });
                        };
                        if (configRef.current.refreshInterval) {
                          timer = setTimeout(
                            tick,
                            configRef.current.refreshInterval
                          );
                        }
                        return function () {
                          if (timer) {
                            clearTimeout(timer);
                            timer = null;
                          }
                        };
                      },
                      [
                        config.refreshInterval,
                        config.refreshWhenHidden,
                        config.refreshWhenOffline,
                        revalidate,
                      ]
                    );
                    // suspense
                    var latestData;
                    var latestError;
                    if (config.suspense) {
                      // in suspense mode, we can't return empty state
                      // (it should be suspended)
                      // try to get data and error from cache
                      latestData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                        key
                      );
                      latestError = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(
                        keyErr
                      );
                      if (typeof latestData === "undefined") {
                        latestData = initialData;
                      }
                      if (typeof latestError === "undefined") {
                        latestError = initialError;
                      }
                      if (
                        typeof latestData === "undefined" &&
                        typeof latestError === "undefined"
                      ) {
                        // need to start the request if it hasn't
                        if (!CONCURRENT_PROMISES[key]) {
                          // trigger revalidate immediately
                          // to get the promise
                          // in this revalidate, should not rerender
                          revalidate();
                        }
                        if (
                          CONCURRENT_PROMISES[key] &&
                          typeof CONCURRENT_PROMISES[key].then === "function"
                        ) {
                          // if it is a promise
                          throw CONCURRENT_PROMISES[key];
                        }
                        // it's a value, return it directly (override)
                        latestData = CONCURRENT_PROMISES[key];
                      }
                      if (typeof latestData === "undefined" && latestError) {
                        // in suspense mode, throw error if there's no content
                        throw latestError;
                      }
                    }
                    // define returned state
                    // can be memorized since the state is a ref
                    var memoizedState = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                      function () {
                        // revalidate will be deprecated in the 1.x release
                        // because mutate() covers the same use case of revalidate().
                        // This remains only for backward compatibility
                        var state = {
                          revalidate: revalidate,
                          mutate: boundMutate,
                        };
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
                              return keyRef.current === key
                                ? stateRef.current.error
                                : initialError;
                            },
                            enumerable: true,
                          },
                          data: {
                            get: function () {
                              stateDependencies.current.data = true;
                              if (config.suspense) {
                                return latestData;
                              }
                              return keyRef.current === key
                                ? stateRef.current.data
                                : initialData;
                            },
                            enumerable: true,
                          },
                          isValidating: {
                            get: function () {
                              stateDependencies.current.isValidating = true;
                              return key
                                ? stateRef.current.isValidating
                                : false;
                            },
                            enumerable: true,
                          },
                        });
                        return state;
                        // `config.suspense` isn't allowed to change during the lifecycle.
                        // `boundMutate` is immutable, and the immutability of `revalidate` depends on `key`
                        // so we can omit them from the deps array,
                        // but we put it to enable react-hooks/exhaustive-deps rule.
                        // `initialData` and `initialError` are not initial values
                        // because they are changed during the lifecycle
                        // so we should add them in the deps array.
                      },
                      [
                        revalidate,
                        initialData,
                        initialError,
                        boundMutate,
                        key,
                        config.suspense,
                        latestError,
                        latestData,
                      ]
                    );
                    return memoizedState;
                  }
                  Object.defineProperty(
                    _swr_config_context__WEBPACK_IMPORTED_MODULE_3__.default
                      .Provider,
                    "default",
                    {
                      value: _config__WEBPACK_IMPORTED_MODULE_1__.default,
                    }
                  );
                  var SWRConfig =
                    _swr_config_context__WEBPACK_IMPORTED_MODULE_3__.default
                      .Provider;

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = useSWR;

                  /***/
                },

              /***/ "./node_modules/systemjs-webpack-interop/auto-public-path/auto-public-path.js":
                /*!************************************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/auto-public-path/auto-public-path.js ***!
  \************************************************************************************/
                /***/ (
                  __unused_webpack_module,
                  exports,
                  __webpack_require__
                ) => {
                  const resolveDirectory = __webpack_require__(
                    /*! ../public-path */ "./node_modules/systemjs-webpack-interop/public-path.js"
                  ).resolveDirectory;

                  exports.autoPublicPath = function autoPublicPath(
                    rootDirLevel
                  ) {
                    if (!rootDirLevel) {
                      rootDirLevel = 1;
                    }

                    if (true) {
                      if (false) {
                      }

                      if (
                        !__webpack_require__.y.meta ||
                        !__webpack_require__.y.meta.url
                      ) {
                        console.error(
                          "__system_context__",
                          __webpack_require__.y
                        );
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

                  /***/
                },

              /***/ "./node_modules/systemjs-webpack-interop/public-path.js":
                /*!**************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/public-path.js ***!
  \**************************************************************/
                /***/ (
                  __unused_webpack_module,
                  exports,
                  __webpack_require__
                ) => {
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

                    __webpack_require__.p = resolveDirectory(
                      moduleUrl,
                      rootDirectoryLevel
                    );
                  };

                  function resolveDirectory(urlString, rootDirectoryLevel) {
                    // Our friend IE11 doesn't support new URL()
                    // https://github.com/single-spa/single-spa/issues/612
                    // https://gist.github.com/jlong/2428561

                    const a = document.createElement("a");
                    a.href = urlString;

                    const pathname =
                      a.pathname[0] === "/" ? a.pathname : "/" + a.pathname;
                    let numDirsProcessed = 0,
                      index = pathname.length;
                    while (
                      numDirsProcessed !== rootDirectoryLevel &&
                      index >= 0
                    ) {
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
                      return (
                        typeof val === "number" &&
                        isFinite(val) &&
                        Math.floor(val) === val
                      );
                    };

                  /***/
                },

              /***/ "../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
                /*!********************************************************************************!*\
  !*** ../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \********************************************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @emotion/memoize */ "../node_modules/@emotion/memoize/dist/memoize.browser.esm.js"
                  );

                  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

                  var index = (0,
                  _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(
                    function (prop) {
                      return (
                        reactPropsRegex.test(prop) ||
                        (prop.charCodeAt(0) === 111 &&
                          /* o */
                          prop.charCodeAt(1) === 110 &&
                          /* n */
                          prop.charCodeAt(2) < 91)
                      );
                    }
                    /* Z+1 */
                  );

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = index;

                  /***/
                },

              /***/ "../node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
                /*!********************************************************************!*\
  !*** ../node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \********************************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  function memoize(fn) {
                    var cache = {};
                    return function (arg) {
                      if (cache[arg] === undefined) cache[arg] = fn(arg);
                      return cache[arg];
                    };
                  }

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = memoize;

                  /***/
                },

              /***/ "../node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
                /*!******************************************************************!*\
  !*** ../node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \******************************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
                  function stylis_min(W) {
                    function M(d, c, e, h, a) {
                      for (
                        var m = 0,
                          b = 0,
                          v = 0,
                          n = 0,
                          q,
                          g,
                          x = 0,
                          K = 0,
                          k,
                          u = (k = q = 0),
                          l = 0,
                          r = 0,
                          I = 0,
                          t = 0,
                          B = e.length,
                          J = B - 1,
                          y,
                          f = "",
                          p = "",
                          F = "",
                          G = "",
                          C;
                        l < B;

                      ) {
                        g = e.charCodeAt(l);
                        l === J &&
                          0 !== b + n + v + m &&
                          (0 !== b && (g = 47 === b ? 10 : 47),
                          (n = v = m = 0),
                          B++,
                          J++);

                        if (0 === b + n + v + m) {
                          if (
                            l === J &&
                            (0 < r && (f = f.replace(N, "")),
                            0 < f.trim().length)
                          ) {
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

                              for (t = ++l; l < B; ) {
                                switch ((g = e.charCodeAt(l))) {
                                  case 123:
                                    k++;
                                    break;

                                  case 125:
                                    k--;
                                    break;

                                  case 47:
                                    switch ((g = e.charCodeAt(l + 1))) {
                                      case 42:
                                      case 47:
                                        a: {
                                          for (u = l + 1; u < J; ++u) {
                                            switch (e.charCodeAt(u)) {
                                              case 47:
                                                if (
                                                  42 === g &&
                                                  42 === e.charCodeAt(u - 1) &&
                                                  l + 2 !== u
                                                ) {
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
                                    for (
                                      ;
                                      l++ < J && e.charCodeAt(l) !== g;

                                    ) {}
                                }

                                if (0 === k) break;
                                l++;
                              }

                              k = e.substring(t, l);
                              0 === q &&
                                (q = (f = f.replace(ca, "").trim()).charCodeAt(
                                  0
                                ));

                              switch (q) {
                                case 64:
                                  0 < r && (f = f.replace(N, ""));
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
                                  0 < A &&
                                    ((r = X(O, f, I)),
                                    (C = H(3, k, r, c, D, z, t, g, a, h)),
                                    (f = r.join("")),
                                    void 0 !== C &&
                                      0 === (t = (k = C.trim()).length) &&
                                      ((g = 0), (k = "")));
                                  if (0 < t)
                                    switch (g) {
                                      case 115:
                                        f = f.replace(da, ea);

                                      case 100:
                                      case 109:
                                      case 45:
                                        k = f + "{" + k + "}";
                                        break;

                                      case 107:
                                        f = f.replace(fa, "$1 $2");
                                        k = f + "{" + k + "}";
                                        k =
                                          1 === w || (2 === w && L("@" + k, 3))
                                            ? "@-webkit-" + k + "@" + k
                                            : "@" + k;
                                        break;

                                      default:
                                        (k = f + k),
                                          112 === h && (k = ((p += k), ""));
                                    }
                                  else k = "";
                                  break;

                                default:
                                  k = M(c, X(c, f, I), k, h, a + 1);
                              }

                              F += k;
                              k = I = r = u = q = 0;
                              f = "";
                              g = e.charCodeAt(++l);
                              break;

                            case 125:
                            case 59:
                              f = (0 < r ? f.replace(N, "") : f).trim();
                              if (1 < (t = f.length))
                                switch (
                                  (0 === u &&
                                    ((q = f.charCodeAt(0)),
                                    45 === q || (96 < q && 123 > q)) &&
                                    (t = (f = f.replace(" ", ":")).length),
                                  0 < A &&
                                    void 0 !==
                                      (C = H(
                                        1,
                                        f,
                                        c,
                                        d,
                                        D,
                                        z,
                                        p.length,
                                        h,
                                        a,
                                        h
                                      )) &&
                                    0 === (t = (f = C.trim()).length) &&
                                    (f = "\x00\x00"),
                                  (q = f.charCodeAt(0)),
                                  (g = f.charCodeAt(1)),
                                  q)
                                ) {
                                  case 0:
                                    break;

                                  case 64:
                                    if (105 === g || 99 === g) {
                                      G += f + e.charAt(l);
                                      break;
                                    }

                                  default:
                                    58 !== f.charCodeAt(t - 1) &&
                                      (p += P(f, q, g, f.charCodeAt(2)));
                                }
                              I = r = u = q = 0;
                              f = "";
                              g = e.charCodeAt(++l);
                          }
                        }

                        switch (g) {
                          case 13:
                          case 10:
                            47 === b
                              ? (b = 0)
                              : 0 === 1 + q &&
                                107 !== h &&
                                0 < f.length &&
                                ((r = 1), (f += "\x00"));
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
                                if (0 === n + m + b)
                                  switch (x) {
                                    case 44:
                                    case 58:
                                    case 9:
                                    case 32:
                                      y = "";
                                      break;

                                    default:
                                      32 !== g && (y = " ");
                                  }
                                break;

                              case 0:
                                y = "\\0";
                                break;

                              case 12:
                                y = "\\f";
                                break;

                              case 11:
                                y = "\\v";
                                break;

                              case 38:
                                0 === n + b + m &&
                                  ((r = I = 1), (y = "\f" + y));
                                break;

                              case 108:
                                if (0 === n + b + m + E && 0 < u)
                                  switch (l - u) {
                                    case 2:
                                      112 === x &&
                                        58 === e.charCodeAt(l - 3) &&
                                        (E = x);

                                    case 8:
                                      111 === K && (E = K);
                                  }
                                break;

                              case 58:
                                0 === n + b + m && (u = l);
                                break;

                              case 44:
                                0 === b + v + n + m && ((r = 1), (y += "\r"));
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
                                  if (0 === q)
                                    switch (2 * x + 3 * K) {
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
                                if (!(0 < n + m + v))
                                  switch (b) {
                                    case 0:
                                      switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                                        case 235:
                                          b = 47;
                                          break;

                                        case 220:
                                          (t = l), (b = 42);
                                      }

                                      break;

                                    case 42:
                                      47 === g &&
                                        42 === x &&
                                        t + 2 !== l &&
                                        (33 === e.charCodeAt(t + 2) &&
                                          (p += e.substring(t, l + 1)),
                                        (y = ""),
                                        (b = 0));
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
                        if (
                          0 < A &&
                          ((C = H(2, p, r, d, D, z, t, h, a, h)),
                          void 0 !== C && 0 === (p = C).length)
                        )
                          return G + p + F;
                        p = r.join(",") + "{" + p + "}";

                        if (0 !== w * E) {
                          2 !== w || L(p, 2) || (E = 0);

                          switch (E) {
                            case 111:
                              p = p.replace(ha, ":-moz-$1") + p;
                              break;

                            case 112:
                              p =
                                p.replace(Q, "::-webkit-input-$1") +
                                p.replace(Q, "::-moz-$1") +
                                p.replace(Q, ":-ms-input-$1") +
                                p;
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

                          for (d = 0 === m ? "" : d[0] + " "; b < a; ++b) {
                            c[b] = Z(d, c[b], e).trim();
                          }

                          break;

                        default:
                          var v = (b = 0);

                          for (c = []; b < a; ++b) {
                            for (var n = 0; n < m; ++n) {
                              c[v++] = Z(d[n] + " ", h[b], e).trim();
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
                          return c.replace(F, "$1" + d.trim());

                        case 58:
                          return d.trim() + c.replace(F, "$1" + d.trim());

                        default:
                          if (0 < 1 * e && 0 < c.indexOf("\f"))
                            return c.replace(
                              F,
                              (58 === d.charCodeAt(0) ? "" : "$1") + d.trim()
                            );
                      }

                      return d + c;
                    }

                    function P(d, c, e, h) {
                      var a = d + ";",
                        m = 2 * c + 3 * e + 4 * h;

                      if (944 === m) {
                        d = a.indexOf(":", 9) + 1;
                        var b = a.substring(d, a.length - 1).trim();
                        b = a.substring(0, d).trim() + b + ";";
                        return 1 === w || (2 === w && L(b, 1))
                          ? "-webkit-" + b + b
                          : b;
                      }

                      if (0 === w || (2 === w && !L(a, 1))) return a;

                      switch (m) {
                        case 1015:
                          return 97 === a.charCodeAt(10)
                            ? "-webkit-" + a + a
                            : a;

                        case 951:
                          return 116 === a.charCodeAt(3)
                            ? "-webkit-" + a + a
                            : a;

                        case 963:
                          return 110 === a.charCodeAt(5)
                            ? "-webkit-" + a + a
                            : a;

                        case 1009:
                          if (100 !== a.charCodeAt(4)) break;

                        case 969:
                        case 942:
                          return "-webkit-" + a + a;

                        case 978:
                          return "-webkit-" + a + "-moz-" + a + a;

                        case 1019:
                        case 983:
                          return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;

                        case 883:
                          if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                          if (0 < a.indexOf("image-set(", 11))
                            return a.replace(ja, "$1-webkit-$2") + a;
                          break;

                        case 932:
                          if (45 === a.charCodeAt(4))
                            switch (a.charCodeAt(5)) {
                              case 103:
                                return (
                                  "-webkit-box-" +
                                  a.replace("-grow", "") +
                                  "-webkit-" +
                                  a +
                                  "-ms-" +
                                  a.replace("grow", "positive") +
                                  a
                                );

                              case 115:
                                return (
                                  "-webkit-" +
                                  a +
                                  "-ms-" +
                                  a.replace("shrink", "negative") +
                                  a
                                );

                              case 98:
                                return (
                                  "-webkit-" +
                                  a +
                                  "-ms-" +
                                  a.replace("basis", "preferred-size") +
                                  a
                                );
                            }
                          return "-webkit-" + a + "-ms-" + a + a;

                        case 964:
                          return "-webkit-" + a + "-ms-flex-" + a + a;

                        case 1023:
                          if (99 !== a.charCodeAt(8)) break;
                          b = a
                            .substring(a.indexOf(":", 15))
                            .replace("flex-", "")
                            .replace("space-between", "justify");
                          return (
                            "-webkit-box-pack" +
                            b +
                            "-webkit-" +
                            a +
                            "-ms-flex-pack" +
                            b +
                            a
                          );

                        case 1005:
                          return ka.test(a)
                            ? a.replace(aa, ":-webkit-") +
                                a.replace(aa, ":-moz-") +
                                a
                            : a;

                        case 1e3:
                          b = a.substring(13).trim();
                          c = b.indexOf("-") + 1;

                          switch (b.charCodeAt(0) + b.charCodeAt(c)) {
                            case 226:
                              b = a.replace(G, "tb");
                              break;

                            case 232:
                              b = a.replace(G, "tb-rl");
                              break;

                            case 220:
                              b = a.replace(G, "lr");
                              break;

                            default:
                              return a;
                          }

                          return "-webkit-" + a + "-ms-" + b + a;

                        case 1017:
                          if (-1 === a.indexOf("sticky", 9)) break;

                        case 975:
                          c = (a = d).length - 10;
                          b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a)
                            .substring(d.indexOf(":", 7) + 1)
                            .trim();

                          switch (
                            (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0))
                          ) {
                            case 203:
                              if (111 > b.charCodeAt(8)) break;

                            case 115:
                              a = a.replace(b, "-webkit-" + b) + ";" + a;
                              break;

                            case 207:
                            case 102:
                              a =
                                a.replace(
                                  b,
                                  "-webkit-" +
                                    (102 < m ? "inline-" : "") +
                                    "box"
                                ) +
                                ";" +
                                a.replace(b, "-webkit-" + b) +
                                ";" +
                                a.replace(b, "-ms-" + b + "box") +
                                ";" +
                                a;
                          }

                          return a + ";";

                        case 938:
                          if (45 === a.charCodeAt(5))
                            switch (a.charCodeAt(6)) {
                              case 105:
                                return (
                                  (b = a.replace("-items", "")),
                                  "-webkit-" +
                                    a +
                                    "-webkit-box-" +
                                    b +
                                    "-ms-flex-" +
                                    b +
                                    a
                                );

                              case 115:
                                return (
                                  "-webkit-" +
                                  a +
                                  "-ms-flex-item-" +
                                  a.replace(ba, "") +
                                  a
                                );

                              default:
                                return (
                                  "-webkit-" +
                                  a +
                                  "-ms-flex-line-pack" +
                                  a
                                    .replace("align-content", "")
                                    .replace(ba, "") +
                                  a
                                );
                            }
                          break;

                        case 973:
                        case 989:
                          if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
                            break;

                        case 931:
                        case 953:
                          if (!0 === la.test(d))
                            return 115 ===
                              (b = d.substring(d.indexOf(":") + 1)).charCodeAt(
                                0
                              )
                              ? P(
                                  d.replace("stretch", "fill-available"),
                                  c,
                                  e,
                                  h
                                ).replace(":fill-available", ":stretch")
                              : a.replace(b, "-webkit-" + b) +
                                  a.replace(
                                    b,
                                    "-moz-" + b.replace("fill-", "")
                                  ) +
                                  a;
                          break;

                        case 962:
                          if (
                            ((a =
                              "-webkit-" +
                              a +
                              (102 === a.charCodeAt(5) ? "-ms-" + a : "") +
                              a),
                            211 === e + h &&
                              105 === a.charCodeAt(13) &&
                              0 < a.indexOf("transform", 10))
                          )
                            return (
                              a
                                .substring(0, a.indexOf(";", 27) + 1)
                                .replace(ma, "$1-webkit-$2") + a
                            );
                      }

                      return a;
                    }

                    function L(d, c) {
                      var e = d.indexOf(1 === c ? ":" : "{"),
                        h = d.substring(0, 3 !== c ? e : 10);
                      e = d.substring(e + 1, d.length - 1);
                      return R(2 !== c ? h : h.replace(na, "$1"), e, c);
                    }

                    function ea(d, c) {
                      var e = P(
                        c,
                        c.charCodeAt(0),
                        c.charCodeAt(1),
                        c.charCodeAt(2)
                      );
                      return e !== c + ";"
                        ? e.replace(oa, " or ($1)").substring(4)
                        : "(" + c + ")";
                    }

                    function H(d, c, e, h, a, m, b, v, n, q) {
                      for (var g = 0, x = c, w; g < A; ++g) {
                        switch (
                          (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q))
                        ) {
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
                          if ("function" === typeof d) S[A++] = d;
                          else if ("object" === typeof d)
                            for (var c = 0, e = d.length; c < e; ++c) {
                              T(d[c]);
                            }
                          else Y = !!d | 0;
                      }

                      return T;
                    }

                    function U(d) {
                      d = d.prefix;
                      void 0 !== d &&
                        ((R = null),
                        d
                          ? "function" !== typeof d
                            ? (w = 1)
                            : ((w = 2), (R = d))
                          : (w = 0));
                      return U;
                    }

                    function B(d, c) {
                      var e = d;
                      33 > e.charCodeAt(0) && (e = e.trim());
                      V = e;
                      e = [V];

                      if (0 < A) {
                        var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
                        void 0 !== h && "string" === typeof h && (c = h);
                      }

                      var a = M(O, e, c, 0, 0);
                      0 < A &&
                        ((h = H(-2, a, e, e, D, z, a.length, 0, 0, 0)),
                        void 0 !== h && (a = h));
                      V = "";
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
                      V = "";
                    B.use = T;
                    B.set = U;
                    void 0 !== W && U(W);
                    return B;
                  }

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = stylis_min;

                  /***/
                },

              /***/ "../node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
                /*!**********************************************************************!*\
  !*** ../node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \**********************************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */
                    }
                  );
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
                    strokeWidth: 1,
                  };

                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = unitlessKeys;

                  /***/
                },

              /***/ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
                /*!***********************************************************************************!*\
  !*** ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************/
                /***/ (
                  module,
                  __unused_webpack_exports,
                  __webpack_require__
                ) => {
                  "use strict";

                  var reactIs = __webpack_require__(
                    /*! react-is */ "../node_modules/react-is/index.js"
                  );

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
                    type: true,
                  };
                  var KNOWN_STATICS = {
                    name: true,
                    length: true,
                    prototype: true,
                    caller: true,
                    callee: true,
                    arguments: true,
                    arity: true,
                  };
                  var FORWARD_REF_STATICS = {
                    $$typeof: true,
                    render: true,
                    defaultProps: true,
                    displayName: true,
                    propTypes: true,
                  };
                  var MEMO_STATICS = {
                    $$typeof: true,
                    compare: true,
                    defaultProps: true,
                    displayName: true,
                    propTypes: true,
                    type: true,
                  };
                  var TYPE_STATICS = {};
                  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
                  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

                  function getStatics(component) {
                    // React v16.11 and below
                    if (reactIs.isMemo(component)) {
                      return MEMO_STATICS;
                    } // React v16.12 and above

                    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
                  }

                  var defineProperty = Object.defineProperty;
                  var getOwnPropertyNames = Object.getOwnPropertyNames;
                  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
                  var getOwnPropertyDescriptor =
                    Object.getOwnPropertyDescriptor;
                  var getPrototypeOf = Object.getPrototypeOf;
                  var objectPrototype = Object.prototype;
                  function hoistNonReactStatics(
                    targetComponent,
                    sourceComponent,
                    blacklist
                  ) {
                    if (typeof sourceComponent !== "string") {
                      // don't hoist over string (html) components
                      if (objectPrototype) {
                        var inheritedComponent = getPrototypeOf(
                          sourceComponent
                        );

                        if (
                          inheritedComponent &&
                          inheritedComponent !== objectPrototype
                        ) {
                          hoistNonReactStatics(
                            targetComponent,
                            inheritedComponent,
                            blacklist
                          );
                        }
                      }

                      var keys = getOwnPropertyNames(sourceComponent);

                      if (getOwnPropertySymbols) {
                        keys = keys.concat(
                          getOwnPropertySymbols(sourceComponent)
                        );
                      }

                      var targetStatics = getStatics(targetComponent);
                      var sourceStatics = getStatics(sourceComponent);

                      for (var i = 0; i < keys.length; ++i) {
                        var key = keys[i];

                        if (
                          !KNOWN_STATICS[key] &&
                          !(blacklist && blacklist[key]) &&
                          !(sourceStatics && sourceStatics[key]) &&
                          !(targetStatics && targetStatics[key])
                        ) {
                          var descriptor = getOwnPropertyDescriptor(
                            sourceComponent,
                            key
                          );

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

                  /***/
                },

              /***/ "../node_modules/react-is/cjs/react-is.development.js":
                /*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
                /***/ (__unused_webpack_module, exports) => {
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
                    (function () {
                      "use strict";

                      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
                      // nor polyfill, then a plain number is used for performance.
                      var hasSymbol =
                        typeof Symbol === "function" && Symbol.for;
                      var REACT_ELEMENT_TYPE = hasSymbol
                        ? Symbol.for("react.element")
                        : 0xeac7;
                      var REACT_PORTAL_TYPE = hasSymbol
                        ? Symbol.for("react.portal")
                        : 0xeaca;
                      var REACT_FRAGMENT_TYPE = hasSymbol
                        ? Symbol.for("react.fragment")
                        : 0xeacb;
                      var REACT_STRICT_MODE_TYPE = hasSymbol
                        ? Symbol.for("react.strict_mode")
                        : 0xeacc;
                      var REACT_PROFILER_TYPE = hasSymbol
                        ? Symbol.for("react.profiler")
                        : 0xead2;
                      var REACT_PROVIDER_TYPE = hasSymbol
                        ? Symbol.for("react.provider")
                        : 0xeacd;
                      var REACT_CONTEXT_TYPE = hasSymbol
                        ? Symbol.for("react.context")
                        : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
                      // (unstable) APIs that have been removed. Can we remove the symbols?

                      var REACT_ASYNC_MODE_TYPE = hasSymbol
                        ? Symbol.for("react.async_mode")
                        : 0xeacf;
                      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
                        ? Symbol.for("react.concurrent_mode")
                        : 0xeacf;
                      var REACT_FORWARD_REF_TYPE = hasSymbol
                        ? Symbol.for("react.forward_ref")
                        : 0xead0;
                      var REACT_SUSPENSE_TYPE = hasSymbol
                        ? Symbol.for("react.suspense")
                        : 0xead1;
                      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
                        ? Symbol.for("react.suspense_list")
                        : 0xead8;
                      var REACT_MEMO_TYPE = hasSymbol
                        ? Symbol.for("react.memo")
                        : 0xead3;
                      var REACT_LAZY_TYPE = hasSymbol
                        ? Symbol.for("react.lazy")
                        : 0xead4;
                      var REACT_BLOCK_TYPE = hasSymbol
                        ? Symbol.for("react.block")
                        : 0xead9;
                      var REACT_FUNDAMENTAL_TYPE = hasSymbol
                        ? Symbol.for("react.fundamental")
                        : 0xead5;
                      var REACT_RESPONDER_TYPE = hasSymbol
                        ? Symbol.for("react.responder")
                        : 0xead6;
                      var REACT_SCOPE_TYPE = hasSymbol
                        ? Symbol.for("react.scope")
                        : 0xead7;

                      function isValidElementType(type) {
                        return (
                          typeof type === "string" ||
                          typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                          type === REACT_FRAGMENT_TYPE ||
                          type === REACT_CONCURRENT_MODE_TYPE ||
                          type === REACT_PROFILER_TYPE ||
                          type === REACT_STRICT_MODE_TYPE ||
                          type === REACT_SUSPENSE_TYPE ||
                          type === REACT_SUSPENSE_LIST_TYPE ||
                          (typeof type === "object" &&
                            type !== null &&
                            (type.$$typeof === REACT_LAZY_TYPE ||
                              type.$$typeof === REACT_MEMO_TYPE ||
                              type.$$typeof === REACT_PROVIDER_TYPE ||
                              type.$$typeof === REACT_CONTEXT_TYPE ||
                              type.$$typeof === REACT_FORWARD_REF_TYPE ||
                              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                              type.$$typeof === REACT_RESPONDER_TYPE ||
                              type.$$typeof === REACT_SCOPE_TYPE ||
                              type.$$typeof === REACT_BLOCK_TYPE))
                        );
                      }

                      function typeOf(object) {
                        if (typeof object === "object" && object !== null) {
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

                            console["warn"](
                              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                                "and will be removed in React 17+. Update your code to use " +
                                "ReactIs.isConcurrentMode() instead. It has the exact same API."
                            );
                          }
                        }

                        return (
                          isConcurrentMode(object) ||
                          typeOf(object) === REACT_ASYNC_MODE_TYPE
                        );
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
                        return (
                          typeof object === "object" &&
                          object !== null &&
                          object.$$typeof === REACT_ELEMENT_TYPE
                        );
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

                  /***/
                },

              /***/ "../node_modules/react-is/index.js":
                /*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
                /***/ (
                  module,
                  __unused_webpack_exports,
                  __webpack_require__
                ) => {
                  "use strict";

                  if (false) {
                  } else {
                    module.exports = __webpack_require__(
                      /*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js"
                    );
                  }

                  /***/
                },

              /***/ "../node_modules/shallowequal/index.js":
                /*!*********************************************!*\
  !*** ../node_modules/shallowequal/index.js ***!
  \*********************************************/
                /***/ (module) => {
                  //

                  module.exports = function shallowEqual(
                    objA,
                    objB,
                    compare,
                    compareContext
                  ) {
                    var ret = compare
                      ? compare.call(compareContext, objA, objB)
                      : void 0;

                    if (ret !== void 0) {
                      return !!ret;
                    }

                    if (objA === objB) {
                      return true;
                    }

                    if (
                      typeof objA !== "object" ||
                      !objA ||
                      typeof objB !== "object" ||
                      !objB
                    ) {
                      return false;
                    }

                    var keysA = Object.keys(objA);
                    var keysB = Object.keys(objB);

                    if (keysA.length !== keysB.length) {
                      return false;
                    }

                    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(
                      objB
                    );

                    // Test for A's keys different from B.
                    for (var idx = 0; idx < keysA.length; idx++) {
                      var key = keysA[idx];

                      if (!bHasOwnProperty(key)) {
                        return false;
                      }

                      var valueA = objA[key];
                      var valueB = objB[key];

                      ret = compare
                        ? compare.call(compareContext, valueA, valueB, key)
                        : void 0;

                      if (
                        ret === false ||
                        (ret === void 0 && valueA !== valueB)
                      ) {
                        return false;
                      }
                    }

                    return true;
                  };

                  /***/
                },

              /***/ "../node_modules/styled-components/dist/styled-components.browser.esm.js":
                /*!*******************************************************************************!*\
  !*** ../node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \*******************************************************************************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  "use strict";
                  __webpack_require__.r(__webpack_exports__);
                  /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                      /* harmony export */ default: () =>
                        __WEBPACK_DEFAULT_EXPORT__,
                      /* harmony export */ ServerStyleSheet: () =>
                        /* binding */ Ue,
                      /* harmony export */ StyleSheetConsumer: () =>
                        /* binding */ le,
                      /* harmony export */ StyleSheetContext: () =>
                        /* binding */ ue,
                      /* harmony export */ StyleSheetManager: () =>
                        /* binding */ ye,
                      /* harmony export */ ThemeConsumer: () =>
                        /* binding */ Le,
                      /* harmony export */ ThemeContext: () => /* binding */ ze,
                      /* harmony export */ ThemeProvider: () =>
                        /* binding */ Ge,
                      /* harmony export */ __PRIVATE__: () => /* binding */ Ze,
                      /* harmony export */ createGlobalStyle: () =>
                        /* binding */ $e,
                      /* harmony export */ css: () => /* binding */ Ae,
                      /* harmony export */ isStyledComponent: () =>
                        /* binding */ N,
                      /* harmony export */ keyframes: () => /* binding */ We,
                      /* harmony export */ useTheme: () => /* binding */ Xe,
                      /* harmony export */ version: () => /* binding */ C,
                      /* harmony export */ withTheme: () => /* binding */ Je,
                      /* harmony export */
                    }
                  );
                  /* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react-is */ "../node_modules/react-is/index.js"
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ "react"
                  );
                  /* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! shallowequal */ "../node_modules/shallowequal/index.js"
                  );
                  /* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    shallowequal__WEBPACK_IMPORTED_MODULE_2__
                  );
                  /* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! @emotion/stylis */ "../node_modules/@emotion/stylis/dist/stylis.browser.esm.js"
                  );
                  /* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! @emotion/unitless */ "../node_modules/@emotion/unitless/dist/unitless.browser.esm.js"
                  );
                  /* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! @emotion/is-prop-valid */ "../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"
                  );
                  /* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! hoist-non-react-statics */ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"
                  );
                  /* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__
                  );
                  function v() {
                    return (v =
                      Object.assign ||
                      function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                        }
                        return e;
                      }).apply(this, arguments);
                  }
                  var g = function (e, t) {
                      for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
                        n.push(t[r], e[r + 1]);
                      return n;
                    },
                    S = function (t) {
                      return (
                        null !== t &&
                        "object" == typeof t &&
                        "[object Object]" ===
                          (t.toString
                            ? t.toString()
                            : Object.prototype.toString.call(t)) &&
                        !(0, react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)
                      );
                    },
                    w = Object.freeze([]),
                    E = Object.freeze({});
                  function b(e) {
                    return "function" == typeof e;
                  }
                  function _(e) {
                    return (
                      (true && "string" == typeof e && e) ||
                      e.displayName ||
                      e.name ||
                      "Component"
                    );
                  }
                  function N(e) {
                    return e && "string" == typeof e.styledComponentId;
                  }
                  var A =
                      ("undefined" != typeof process &&
                        (process.env.REACT_APP_SC_ATTR ||
                          process.env.SC_ATTR)) ||
                      "data-styled",
                    C = "5.3.0",
                    I = "undefined" != typeof window && "HTMLElement" in window,
                    P = Boolean(
                      "boolean" == typeof SC_DISABLE_SPEEDY
                        ? SC_DISABLE_SPEEDY
                        : "undefined" != typeof process &&
                          void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
                          "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
                        ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
                          process.env.REACT_APP_SC_DISABLE_SPEEDY
                        : "undefined" != typeof process &&
                          void 0 !== process.env.SC_DISABLE_SPEEDY &&
                          "" !== process.env.SC_DISABLE_SPEEDY
                        ? "false" !== process.env.SC_DISABLE_SPEEDY &&
                          process.env.SC_DISABLE_SPEEDY
                        : "production" !== "development"
                    ),
                    O = {},
                    R = true
                      ? {
                          1: "Cannot create styled-component for component: %s.\n\n",
                          2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
                          3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
                          4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
                          5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
                          6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
                          7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
                          8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
                          9: "Missing document `<head>`\n\n",
                          10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
                          11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
                          12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
                          13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
                          14: 'ThemeProvider: "theme" prop is required.\n\n',
                          15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
                          16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
                          17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
                        }
                      : 0;
                  function D() {
                    for (
                      var e = arguments.length <= 0 ? void 0 : arguments[0],
                        t = [],
                        n = 1,
                        r = arguments.length;
                      n < r;
                      n += 1
                    )
                      t.push(
                        n < 0 || arguments.length <= n ? void 0 : arguments[n]
                      );
                    return (
                      t.forEach(function (t) {
                        e = e.replace(/%[a-z]/, t);
                      }),
                      e
                    );
                  }
                  function j(e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    throw false
                      ? 0
                      : new Error(D.apply(void 0, [R[e]].concat(n)).trim());
                  }
                  var T = (function () {
                      function e(e) {
                        (this.groupSizes = new Uint32Array(512)),
                          (this.length = 512),
                          (this.tag = e);
                      }
                      var t = e.prototype;
                      return (
                        (t.indexOfGroup = function (e) {
                          for (var t = 0, n = 0; n < e; n++)
                            t += this.groupSizes[n];
                          return t;
                        }),
                        (t.insertRules = function (e, t) {
                          if (e >= this.groupSizes.length) {
                            for (
                              var n = this.groupSizes, r = n.length, o = r;
                              e >= o;

                            )
                              (o <<= 1) < 0 && j(16, "" + e);
                            (this.groupSizes = new Uint32Array(o)),
                              this.groupSizes.set(n),
                              (this.length = o);
                            for (var i = r; i < o; i++) this.groupSizes[i] = 0;
                          }
                          for (
                            var s = this.indexOfGroup(e + 1),
                              a = 0,
                              c = t.length;
                            a < c;
                            a++
                          )
                            this.tag.insertRule(s, t[a]) &&
                              (this.groupSizes[e]++, s++);
                        }),
                        (t.clearGroup = function (e) {
                          if (e < this.length) {
                            var t = this.groupSizes[e],
                              n = this.indexOfGroup(e),
                              r = n + t;
                            this.groupSizes[e] = 0;
                            for (var o = n; o < r; o++) this.tag.deleteRule(n);
                          }
                        }),
                        (t.getGroup = function (e) {
                          var t = "";
                          if (e >= this.length || 0 === this.groupSizes[e])
                            return t;
                          for (
                            var n = this.groupSizes[e],
                              r = this.indexOfGroup(e),
                              o = r + n,
                              i = r;
                            i < o;
                            i++
                          )
                            t += this.tag.getRule(i) + "/*!sc*/\n";
                          return t;
                        }),
                        e
                      );
                    })(),
                    k = new Map(),
                    x = new Map(),
                    V = 1,
                    B = function (e) {
                      if (k.has(e)) return k.get(e);
                      for (; x.has(V); ) V++;
                      var t = V++;
                      return (
                        true && ((0 | t) < 0 || t > 1 << 30) && j(16, "" + t),
                        k.set(e, t),
                        x.set(t, e),
                        t
                      );
                    },
                    M = function (e) {
                      return x.get(e);
                    },
                    z = function (e, t) {
                      k.set(e, t), x.set(t, e);
                    },
                    L = "style[" + A + '][data-styled-version="5.3.0"]',
                    G = new RegExp(
                      "^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
                    ),
                    F = function (e, t, n) {
                      for (
                        var r, o = n.split(","), i = 0, s = o.length;
                        i < s;
                        i++
                      )
                        (r = o[i]) && e.registerName(t, r);
                    },
                    Y = function (e, t) {
                      for (
                        var n = t.innerHTML.split("/*!sc*/\n"),
                          r = [],
                          o = 0,
                          i = n.length;
                        o < i;
                        o++
                      ) {
                        var s = n[o].trim();
                        if (s) {
                          var a = s.match(G);
                          if (a) {
                            var c = 0 | parseInt(a[1], 10),
                              u = a[2];
                            0 !== c &&
                              (z(u, c),
                              F(e, u, a[3]),
                              e.getTag().insertRules(c, r)),
                              (r.length = 0);
                          } else r.push(s);
                        }
                      }
                    },
                    q = function () {
                      return "undefined" != typeof window &&
                        void 0 !== window.__webpack_nonce__
                        ? window.__webpack_nonce__
                        : null;
                    },
                    H = function (e) {
                      var t = document.head,
                        n = e || t,
                        r = document.createElement("style"),
                        o = (function (e) {
                          for (
                            var t = e.childNodes, n = t.length;
                            n >= 0;
                            n--
                          ) {
                            var r = t[n];
                            if (r && 1 === r.nodeType && r.hasAttribute(A))
                              return r;
                          }
                        })(n),
                        i = void 0 !== o ? o.nextSibling : null;
                      r.setAttribute(A, "active"),
                        r.setAttribute("data-styled-version", "5.3.0");
                      var s = q();
                      return (
                        s && r.setAttribute("nonce", s), n.insertBefore(r, i), r
                      );
                    },
                    $ = (function () {
                      function e(e) {
                        var t = (this.element = H(e));
                        t.appendChild(document.createTextNode("")),
                          (this.sheet = (function (e) {
                            if (e.sheet) return e.sheet;
                            for (
                              var t = document.styleSheets, n = 0, r = t.length;
                              n < r;
                              n++
                            ) {
                              var o = t[n];
                              if (o.ownerNode === e) return o;
                            }
                            j(17);
                          })(t)),
                          (this.length = 0);
                      }
                      var t = e.prototype;
                      return (
                        (t.insertRule = function (e, t) {
                          try {
                            return (
                              this.sheet.insertRule(t, e), this.length++, !0
                            );
                          } catch (e) {
                            return !1;
                          }
                        }),
                        (t.deleteRule = function (e) {
                          this.sheet.deleteRule(e), this.length--;
                        }),
                        (t.getRule = function (e) {
                          var t = this.sheet.cssRules[e];
                          return void 0 !== t && "string" == typeof t.cssText
                            ? t.cssText
                            : "";
                        }),
                        e
                      );
                    })(),
                    W = (function () {
                      function e(e) {
                        var t = (this.element = H(e));
                        (this.nodes = t.childNodes), (this.length = 0);
                      }
                      var t = e.prototype;
                      return (
                        (t.insertRule = function (e, t) {
                          if (e <= this.length && e >= 0) {
                            var n = document.createTextNode(t),
                              r = this.nodes[e];
                            return (
                              this.element.insertBefore(n, r || null),
                              this.length++,
                              !0
                            );
                          }
                          return !1;
                        }),
                        (t.deleteRule = function (e) {
                          this.element.removeChild(this.nodes[e]),
                            this.length--;
                        }),
                        (t.getRule = function (e) {
                          return e < this.length
                            ? this.nodes[e].textContent
                            : "";
                        }),
                        e
                      );
                    })(),
                    U = (function () {
                      function e(e) {
                        (this.rules = []), (this.length = 0);
                      }
                      var t = e.prototype;
                      return (
                        (t.insertRule = function (e, t) {
                          return (
                            e <= this.length &&
                            (this.rules.splice(e, 0, t), this.length++, !0)
                          );
                        }),
                        (t.deleteRule = function (e) {
                          this.rules.splice(e, 1), this.length--;
                        }),
                        (t.getRule = function (e) {
                          return e < this.length ? this.rules[e] : "";
                        }),
                        e
                      );
                    })(),
                    J = I,
                    X = { isServer: !I, useCSSOMInjection: !P },
                    Z = (function () {
                      function e(e, t, n) {
                        void 0 === e && (e = E),
                          void 0 === t && (t = {}),
                          (this.options = v({}, X, {}, e)),
                          (this.gs = t),
                          (this.names = new Map(n)),
                          !this.options.isServer &&
                            I &&
                            J &&
                            ((J = !1),
                            (function (e) {
                              for (
                                var t = document.querySelectorAll(L),
                                  n = 0,
                                  r = t.length;
                                n < r;
                                n++
                              ) {
                                var o = t[n];
                                o &&
                                  "active" !== o.getAttribute(A) &&
                                  (Y(e, o),
                                  o.parentNode && o.parentNode.removeChild(o));
                              }
                            })(this));
                      }
                      e.registerId = function (e) {
                        return B(e);
                      };
                      var t = e.prototype;
                      return (
                        (t.reconstructWithOptions = function (t, n) {
                          return (
                            void 0 === n && (n = !0),
                            new e(
                              v({}, this.options, {}, t),
                              this.gs,
                              (n && this.names) || void 0
                            )
                          );
                        }),
                        (t.allocateGSInstance = function (e) {
                          return (this.gs[e] = (this.gs[e] || 0) + 1);
                        }),
                        (t.getTag = function () {
                          return (
                            this.tag ||
                            (this.tag =
                              ((n = (t = this.options).isServer),
                              (r = t.useCSSOMInjection),
                              (o = t.target),
                              (e = n ? new U(o) : r ? new $(o) : new W(o)),
                              new T(e)))
                          );
                          var e, t, n, r, o;
                        }),
                        (t.hasNameForId = function (e, t) {
                          return this.names.has(e) && this.names.get(e).has(t);
                        }),
                        (t.registerName = function (e, t) {
                          if ((B(e), this.names.has(e)))
                            this.names.get(e).add(t);
                          else {
                            var n = new Set();
                            n.add(t), this.names.set(e, n);
                          }
                        }),
                        (t.insertRules = function (e, t, n) {
                          this.registerName(e, t),
                            this.getTag().insertRules(B(e), n);
                        }),
                        (t.clearNames = function (e) {
                          this.names.has(e) && this.names.get(e).clear();
                        }),
                        (t.clearRules = function (e) {
                          this.getTag().clearGroup(B(e)), this.clearNames(e);
                        }),
                        (t.clearTag = function () {
                          this.tag = void 0;
                        }),
                        (t.toString = function () {
                          return (function (e) {
                            for (
                              var t = e.getTag(), n = t.length, r = "", o = 0;
                              o < n;
                              o++
                            ) {
                              var i = M(o);
                              if (void 0 !== i) {
                                var s = e.names.get(i),
                                  a = t.getGroup(o);
                                if (void 0 !== s && 0 !== a.length) {
                                  var c = A + ".g" + o + '[id="' + i + '"]',
                                    u = "";
                                  void 0 !== s &&
                                    s.forEach(function (e) {
                                      e.length > 0 && (u += e + ",");
                                    }),
                                    (r +=
                                      "" +
                                      a +
                                      c +
                                      '{content:"' +
                                      u +
                                      '"}/*!sc*/\n');
                                }
                              }
                            }
                            return r;
                          })(this);
                        }),
                        e
                      );
                    })(),
                    K = /(a)(d)/gi,
                    Q = function (e) {
                      return String.fromCharCode(e + (e > 25 ? 39 : 97));
                    };
                  function ee(e) {
                    var t,
                      n = "";
                    for (t = Math.abs(e); t > 52; t = (t / 52) | 0)
                      n = Q(t % 52) + n;
                    return (Q(t % 52) + n).replace(K, "$1-$2");
                  }
                  var te = function (e, t) {
                      for (var n = t.length; n; )
                        e = (33 * e) ^ t.charCodeAt(--n);
                      return e;
                    },
                    ne = function (e) {
                      return te(5381, e);
                    };
                  function re(e) {
                    for (var t = 0; t < e.length; t += 1) {
                      var n = e[t];
                      if (b(n) && !N(n)) return !1;
                    }
                    return !0;
                  }
                  var oe = ne("5.3.0"),
                    ie = (function () {
                      function e(e, t, n) {
                        (this.rules = e),
                          (this.staticRulesId = ""),
                          (this.isStatic = false && 0),
                          (this.componentId = t),
                          (this.baseHash = te(oe, t)),
                          (this.baseStyle = n),
                          Z.registerId(t);
                      }
                      return (
                        (e.prototype.generateAndInjectStyles = function (
                          e,
                          t,
                          n
                        ) {
                          var r = this.componentId,
                            o = [];
                          if (
                            (this.baseStyle &&
                              o.push(
                                this.baseStyle.generateAndInjectStyles(e, t, n)
                              ),
                            this.isStatic && !n.hash)
                          )
                            if (
                              this.staticRulesId &&
                              t.hasNameForId(r, this.staticRulesId)
                            )
                              o.push(this.staticRulesId);
                            else {
                              var i = Ne(this.rules, e, t, n).join(""),
                                s = ee(te(this.baseHash, i.length) >>> 0);
                              if (!t.hasNameForId(r, s)) {
                                var a = n(i, "." + s, void 0, r);
                                t.insertRules(r, s, a);
                              }
                              o.push(s), (this.staticRulesId = s);
                            }
                          else {
                            for (
                              var c = this.rules.length,
                                u = te(this.baseHash, n.hash),
                                l = "",
                                d = 0;
                              d < c;
                              d++
                            ) {
                              var h = this.rules[d];
                              if ("string" == typeof h)
                                (l += h), true && (u = te(u, h + d));
                              else if (h) {
                                var p = Ne(h, e, t, n),
                                  f = Array.isArray(p) ? p.join("") : p;
                                (u = te(u, f + d)), (l += f);
                              }
                            }
                            if (l) {
                              var m = ee(u >>> 0);
                              if (!t.hasNameForId(r, m)) {
                                var y = n(l, "." + m, void 0, r);
                                t.insertRules(r, m, y);
                              }
                              o.push(m);
                            }
                          }
                          return o.join(" ");
                        }),
                        e
                      );
                    })(),
                    se = /^\s*\/\/.*$/gm,
                    ae = [":", "[", ".", "#"];
                  function ce(e) {
                    var t,
                      n,
                      r,
                      o,
                      i = void 0 === e ? E : e,
                      s = i.options,
                      a = void 0 === s ? E : s,
                      c = i.plugins,
                      u = void 0 === c ? w : c,
                      l = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__.default(
                        a
                      ),
                      d = [],
                      h = (function (e) {
                        function t(t) {
                          if (t)
                            try {
                              e(t + "}");
                            } catch (e) {}
                        }
                        return function (n, r, o, i, s, a, c, u, l, d) {
                          switch (n) {
                            case 1:
                              if (0 === l && 64 === r.charCodeAt(0))
                                return e(r + ";"), "";
                              break;
                            case 2:
                              if (0 === u) return r + "/*|*/";
                              break;
                            case 3:
                              switch (u) {
                                case 102:
                                case 112:
                                  return e(o[0] + r), "";
                                default:
                                  return r + (0 === d ? "/*|*/" : "");
                              }
                            case -2:
                              r.split("/*|*/}").forEach(t);
                          }
                        };
                      })(function (e) {
                        d.push(e);
                      }),
                      f = function (e, r, i) {
                        return (0 === r && -1 !== ae.indexOf(i[n.length])) ||
                          i.match(o)
                          ? e
                          : "." + t;
                      };
                    function m(e, i, s, a) {
                      void 0 === a && (a = "&");
                      var c = e.replace(se, ""),
                        u = i && s ? s + " " + i + " { " + c + " }" : c;
                      return (
                        (t = a),
                        (n = i),
                        (r = new RegExp("\\" + n + "\\b", "g")),
                        (o = new RegExp("(\\" + n + "\\b){2,}")),
                        l(s || !i ? "" : i, u)
                      );
                    }
                    return (
                      l.use(
                        [].concat(u, [
                          function (e, t, o) {
                            2 === e &&
                              o.length &&
                              o[0].lastIndexOf(n) > 0 &&
                              (o[0] = o[0].replace(r, f));
                          },
                          h,
                          function (e) {
                            if (-2 === e) {
                              var t = d;
                              return (d = []), t;
                            }
                          },
                        ])
                      ),
                      (m.hash = u.length
                        ? u
                            .reduce(function (e, t) {
                              return t.name || j(15), te(e, t.name);
                            }, 5381)
                            .toString()
                        : ""),
                      m
                    );
                  }
                  var ue = react__WEBPACK_IMPORTED_MODULE_1__.default.createContext(),
                    le = ue.Consumer,
                    de = react__WEBPACK_IMPORTED_MODULE_1__.default.createContext(),
                    he = (de.Consumer, new Z()),
                    pe = ce();
                  function fe() {
                    return (
                      (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue) ||
                      he
                    );
                  }
                  function me() {
                    return (
                      (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de) ||
                      pe
                    );
                  }
                  function ye(e) {
                    var t = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(
                        e.stylisPlugins
                      ),
                      n = t[0],
                      i = t[1],
                      c = fe(),
                      u = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                        function () {
                          var t = c;
                          return (
                            e.sheet
                              ? (t = e.sheet)
                              : e.target &&
                                (t = t.reconstructWithOptions(
                                  { target: e.target },
                                  !1
                                )),
                            e.disableCSSOMInjection &&
                              (t = t.reconstructWithOptions({
                                useCSSOMInjection: !1,
                              })),
                            t
                          );
                        },
                        [e.disableCSSOMInjection, e.sheet, e.target]
                      ),
                      l = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                        function () {
                          return ce({
                            options: { prefix: !e.disableVendorPrefixes },
                            plugins: n,
                          });
                        },
                        [e.disableVendorPrefixes, n]
                      );
                    return (
                      (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                        function () {
                          shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(
                            n,
                            e.stylisPlugins
                          ) || i(e.stylisPlugins);
                        },
                        [e.stylisPlugins]
                      ),
                      react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                        ue.Provider,
                        { value: u },
                        react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                          de.Provider,
                          { value: l },
                          true
                            ? react__WEBPACK_IMPORTED_MODULE_1__.default.Children.only(
                                e.children
                              )
                            : 0
                        )
                      )
                    );
                  }
                  var ve = (function () {
                      function e(e, t) {
                        var n = this;
                        (this.inject = function (e, t) {
                          void 0 === t && (t = pe);
                          var r = n.name + t.hash;
                          e.hasNameForId(n.id, r) ||
                            e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
                        }),
                          (this.toString = function () {
                            return j(12, String(n.name));
                          }),
                          (this.name = e),
                          (this.id = "sc-keyframes-" + e),
                          (this.rules = t);
                      }
                      return (
                        (e.prototype.getName = function (e) {
                          return void 0 === e && (e = pe), this.name + e.hash;
                        }),
                        e
                      );
                    })(),
                    ge = /([A-Z])/,
                    Se = /([A-Z])/g,
                    we = /^ms-/,
                    Ee = function (e) {
                      return "-" + e.toLowerCase();
                    };
                  function be(e) {
                    return ge.test(e)
                      ? e.replace(Se, Ee).replace(we, "-ms-")
                      : e;
                  }
                  var _e = function (e) {
                    return null == e || !1 === e || "" === e;
                  };
                  function Ne(e, n, r, o) {
                    if (Array.isArray(e)) {
                      for (var i, s = [], a = 0, c = e.length; a < c; a += 1)
                        "" !== (i = Ne(e[a], n, r, o)) &&
                          (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
                      return s;
                    }
                    if (_e(e)) return "";
                    if (N(e)) return "." + e.styledComponentId;
                    if (b(e)) {
                      if (
                        "function" != typeof (l = e) ||
                        (l.prototype && l.prototype.isReactComponent) ||
                        !n
                      )
                        return e;
                      var u = e(n);
                      return (
                        true &&
                          (0, react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(
                            u
                          ) &&
                          console.warn(
                            _(e) +
                              " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."
                          ),
                        Ne(u, n, r, o)
                      );
                    }
                    var l;
                    return e instanceof ve
                      ? r
                        ? (e.inject(r, o), e.getName(o))
                        : e
                      : S(e)
                      ? (function e(t, n) {
                          var r,
                            o,
                            i = [];
                          for (var s in t)
                            t.hasOwnProperty(s) &&
                              !_e(t[s]) &&
                              (S(t[s])
                                ? i.push.apply(i, e(t[s], s))
                                : b(t[s])
                                ? i.push(be(s) + ":", t[s], ";")
                                : i.push(
                                    be(s) +
                                      ": " +
                                      ((r = s),
                                      null == (o = t[s]) ||
                                      "boolean" == typeof o ||
                                      "" === o
                                        ? ""
                                        : "number" != typeof o ||
                                          0 === o ||
                                          r in
                                            _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__.default
                                        ? String(o).trim()
                                        : o + "px") +
                                      ";"
                                  ));
                          return n ? [n + " {"].concat(i, ["}"]) : i;
                        })(e)
                      : e.toString();
                  }
                  function Ae(e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    return b(e) || S(e)
                      ? Ne(g(w, [e].concat(n)))
                      : 0 === n.length &&
                        1 === e.length &&
                        "string" == typeof e[0]
                      ? e
                      : Ne(g(e, n));
                  }
                  var Ce = /invalid hook call/i,
                    Ie = new Set(),
                    Pe = function (e, t) {
                      if (true) {
                        var n =
                          "The component " +
                          e +
                          (t ? ' with the id of "' + t + '"' : "") +
                          " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";
                        try {
                          (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),
                            Ie.has(n) || (console.warn(n), Ie.add(n));
                        } catch (e) {
                          Ce.test(e.message) && Ie.delete(n);
                        }
                      }
                    },
                    Oe = function (e, t, n) {
                      return (
                        void 0 === n && (n = E),
                        (e.theme !== n.theme && e.theme) || t || n.theme
                      );
                    },
                    Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                    De = /(^-|-$)/g;
                  function je(e) {
                    return e.replace(Re, "-").replace(De, "");
                  }
                  var Te = function (e) {
                    return ee(ne(e) >>> 0);
                  };
                  function ke(e) {
                    return (
                      "string" == typeof e &&
                      (false || e.charAt(0) === e.charAt(0).toLowerCase())
                    );
                  }
                  var xe = function (e) {
                      return (
                        "function" == typeof e ||
                        ("object" == typeof e &&
                          null !== e &&
                          !Array.isArray(e))
                      );
                    },
                    Ve = function (e) {
                      return (
                        "__proto__" !== e &&
                        "constructor" !== e &&
                        "prototype" !== e
                      );
                    };
                  function Be(e, t, n) {
                    var r = e[n];
                    xe(t) && xe(r) ? Me(r, t) : (e[n] = t);
                  }
                  function Me(e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    for (var o = 0, i = n; o < i.length; o++) {
                      var s = i[o];
                      if (xe(s)) for (var a in s) Ve(a) && Be(e, s[a], a);
                    }
                    return e;
                  }
                  var ze = react__WEBPACK_IMPORTED_MODULE_1__.default.createContext(),
                    Le = ze.Consumer;
                  function Ge(e) {
                    var t = (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(
                        ze
                      ),
                      n = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                        function () {
                          return (function (e, t) {
                            if (!e) return j(14);
                            if (b(e)) {
                              var n = e(t);
                              return false ||
                                (null !== n &&
                                  !Array.isArray(n) &&
                                  "object" == typeof n)
                                ? n
                                : j(7);
                            }
                            return Array.isArray(e) || "object" != typeof e
                              ? j(8)
                              : t
                              ? v({}, t, {}, e)
                              : e;
                          })(e.theme, t);
                        },
                        [e.theme, t]
                      );
                    return e.children
                      ? react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                          ze.Provider,
                          { value: n },
                          e.children
                        )
                      : null;
                  }
                  var Fe = {};
                  function Ye(e, t, n) {
                    var o = N(e),
                      s = !ke(e),
                      a = t.attrs,
                      c = void 0 === a ? w : a,
                      d = t.componentId,
                      h =
                        void 0 === d
                          ? (function (e, t) {
                              var n = "string" != typeof e ? "sc" : je(e);
                              Fe[n] = (Fe[n] || 0) + 1;
                              var r = n + "-" + Te("5.3.0" + n + Fe[n]);
                              return t ? t + "-" + r : r;
                            })(t.displayName, t.parentComponentId)
                          : d,
                      p = t.displayName,
                      f =
                        void 0 === p
                          ? (function (e) {
                              return ke(e)
                                ? "styled." + e
                                : "Styled(" + _(e) + ")";
                            })(e)
                          : p,
                      g =
                        t.displayName && t.componentId
                          ? je(t.displayName) + "-" + t.componentId
                          : t.componentId || h,
                      S =
                        o && e.attrs
                          ? Array.prototype.concat(e.attrs, c).filter(Boolean)
                          : c,
                      A = t.shouldForwardProp;
                    o &&
                      e.shouldForwardProp &&
                      (A = t.shouldForwardProp
                        ? function (n, r, o) {
                            return (
                              e.shouldForwardProp(n, r, o) &&
                              t.shouldForwardProp(n, r, o)
                            );
                          }
                        : e.shouldForwardProp);
                    var C,
                      I = new ie(n, g, o ? e.componentStyle : void 0),
                      P = I.isStatic && 0 === c.length,
                      O = function (e, t) {
                        return (function (e, t, n, r) {
                          var o = e.attrs,
                            s = e.componentStyle,
                            a = e.defaultProps,
                            c = e.foldedComponentIds,
                            d = e.shouldForwardProp,
                            h = e.styledComponentId,
                            p = e.target;
                          true &&
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(
                              h
                            );
                          var f = (function (e, t, n) {
                              void 0 === e && (e = E);
                              var r = v({}, t, { theme: e }),
                                o = {};
                              return (
                                n.forEach(function (e) {
                                  var t,
                                    n,
                                    i,
                                    s = e;
                                  for (t in (b(s) && (s = s(r)), s))
                                    r[t] = o[t] =
                                      "className" === t
                                        ? ((n = o[t]),
                                          (i = s[t]),
                                          n && i ? n + " " + i : n || i)
                                        : s[t];
                                }),
                                [r, o]
                              );
                            })(
                              Oe(
                                t,
                                (0,
                                react__WEBPACK_IMPORTED_MODULE_1__.useContext)(
                                  ze
                                ),
                                a
                              ) || E,
                              t,
                              o
                            ),
                            y = f[0],
                            g = f[1],
                            S = (function (e, t, n, r) {
                              var o = fe(),
                                i = me(),
                                s = t
                                  ? e.generateAndInjectStyles(E, o, i)
                                  : e.generateAndInjectStyles(n, o, i);
                              return (
                                true &&
                                  (0,
                                  react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(
                                    s
                                  ),
                                true && !t && r && r(s),
                                s
                              );
                            })(s, r, y, true ? e.warnTooManyClasses : 0),
                            w = n,
                            _ = g.$as || t.$as || g.as || t.as || p,
                            N = ke(_),
                            A = g !== t ? v({}, t, {}, g) : t,
                            C = {};
                          for (var I in A)
                            "$" !== I[0] &&
                              "as" !== I &&
                              ("forwardedAs" === I
                                ? (C.as = A[I])
                                : (d
                                    ? d(
                                        I,
                                        _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default,
                                        _
                                      )
                                    : !N ||
                                      (0,
                                      _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default)(
                                        I
                                      )) && (C[I] = A[I]));
                          return (
                            t.style &&
                              g.style !== t.style &&
                              (C.style = v({}, t.style, {}, g.style)),
                            (C.className = Array.prototype
                              .concat(
                                c,
                                h,
                                S !== h ? S : null,
                                t.className,
                                g.className
                              )
                              .filter(Boolean)
                              .join(" ")),
                            (C.ref = w),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                              _,
                              C
                            )
                          );
                        })(C, e, t, P);
                      };
                    return (
                      (O.displayName = f),
                      ((C = react__WEBPACK_IMPORTED_MODULE_1__.default.forwardRef(
                        O
                      )).attrs = S),
                      (C.componentStyle = I),
                      (C.displayName = f),
                      (C.shouldForwardProp = A),
                      (C.foldedComponentIds = o
                        ? Array.prototype.concat(
                            e.foldedComponentIds,
                            e.styledComponentId
                          )
                        : w),
                      (C.styledComponentId = g),
                      (C.target = o ? e.target : e),
                      (C.withComponent = function (e) {
                        var r = t.componentId,
                          o = (function (e, t) {
                            if (null == e) return {};
                            var n,
                              r,
                              o = {},
                              i = Object.keys(e);
                            for (r = 0; r < i.length; r++)
                              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                          })(t, ["componentId"]),
                          i = r && r + "-" + (ke(e) ? e : je(_(e)));
                        return Ye(e, v({}, o, { attrs: S, componentId: i }), n);
                      }),
                      Object.defineProperty(C, "defaultProps", {
                        get: function () {
                          return this._foldedDefaultProps;
                        },
                        set: function (t) {
                          this._foldedDefaultProps = o
                            ? Me({}, e.defaultProps, t)
                            : t;
                        },
                      }),
                      true &&
                        (Pe(f, g),
                        (C.warnTooManyClasses = (function (e, t) {
                          var n = {},
                            r = !1;
                          return function (o) {
                            if (
                              !r &&
                              ((n[o] = !0), Object.keys(n).length >= 200)
                            ) {
                              var i = t ? ' with the id of "' + t + '"' : "";
                              console.warn(
                                "Over 200 classes were generated for component " +
                                  e +
                                  i +
                                  ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"
                              ),
                                (r = !0),
                                (n = {});
                            }
                          };
                        })(f, g))),
                      (C.toString = function () {
                        return "." + C.styledComponentId;
                      }),
                      s &&
                        hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(
                          C,
                          e,
                          {
                            attrs: !0,
                            componentStyle: !0,
                            displayName: !0,
                            foldedComponentIds: !0,
                            shouldForwardProp: !0,
                            styledComponentId: !0,
                            target: !0,
                            withComponent: !0,
                          }
                        ),
                      C
                    );
                  }
                  var qe = function (e) {
                    return (function e(t, r, o) {
                      if (
                        (void 0 === o && (o = E),
                        !(0,
                        react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(
                          r
                        ))
                      )
                        return j(1, String(r));
                      var i = function () {
                        return t(r, o, Ae.apply(void 0, arguments));
                      };
                      return (
                        (i.withConfig = function (n) {
                          return e(t, r, v({}, o, {}, n));
                        }),
                        (i.attrs = function (n) {
                          return e(
                            t,
                            r,
                            v({}, o, {
                              attrs: Array.prototype
                                .concat(o.attrs, n)
                                .filter(Boolean),
                            })
                          );
                        }),
                        i
                      );
                    })(Ye, e);
                  };
                  [
                    "a",
                    "abbr",
                    "address",
                    "area",
                    "article",
                    "aside",
                    "audio",
                    "b",
                    "base",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "br",
                    "button",
                    "canvas",
                    "caption",
                    "cite",
                    "code",
                    "col",
                    "colgroup",
                    "data",
                    "datalist",
                    "dd",
                    "del",
                    "details",
                    "dfn",
                    "dialog",
                    "div",
                    "dl",
                    "dt",
                    "em",
                    "embed",
                    "fieldset",
                    "figcaption",
                    "figure",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "head",
                    "header",
                    "hgroup",
                    "hr",
                    "html",
                    "i",
                    "iframe",
                    "img",
                    "input",
                    "ins",
                    "kbd",
                    "keygen",
                    "label",
                    "legend",
                    "li",
                    "link",
                    "main",
                    "map",
                    "mark",
                    "marquee",
                    "menu",
                    "menuitem",
                    "meta",
                    "meter",
                    "nav",
                    "noscript",
                    "object",
                    "ol",
                    "optgroup",
                    "option",
                    "output",
                    "p",
                    "param",
                    "picture",
                    "pre",
                    "progress",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "samp",
                    "script",
                    "section",
                    "select",
                    "small",
                    "source",
                    "span",
                    "strong",
                    "style",
                    "sub",
                    "summary",
                    "sup",
                    "table",
                    "tbody",
                    "td",
                    "textarea",
                    "tfoot",
                    "th",
                    "thead",
                    "time",
                    "title",
                    "tr",
                    "track",
                    "u",
                    "ul",
                    "var",
                    "video",
                    "wbr",
                    "circle",
                    "clipPath",
                    "defs",
                    "ellipse",
                    "foreignObject",
                    "g",
                    "image",
                    "line",
                    "linearGradient",
                    "marker",
                    "mask",
                    "path",
                    "pattern",
                    "polygon",
                    "polyline",
                    "radialGradient",
                    "rect",
                    "stop",
                    "svg",
                    "text",
                    "textPath",
                    "tspan",
                  ].forEach(function (e) {
                    qe[e] = qe(e);
                  });
                  var He = (function () {
                    function e(e, t) {
                      (this.rules = e),
                        (this.componentId = t),
                        (this.isStatic = re(e)),
                        Z.registerId(this.componentId + 1);
                    }
                    var t = e.prototype;
                    return (
                      (t.createStyles = function (e, t, n, r) {
                        var o = r(Ne(this.rules, t, n, r).join(""), ""),
                          i = this.componentId + e;
                        n.insertRules(i, i, o);
                      }),
                      (t.removeStyles = function (e, t) {
                        t.clearRules(this.componentId + e);
                      }),
                      (t.renderStyles = function (e, t, n, r) {
                        e > 2 && Z.registerId(this.componentId + e),
                          this.removeStyles(e, n),
                          this.createStyles(e, t, n, r);
                      }),
                      e
                    );
                  })();
                  function $e(e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        o = 1;
                      o < t;
                      o++
                    )
                      n[o - 1] = arguments[o];
                    var s = Ae.apply(void 0, [e].concat(n)),
                      a = "sc-global-" + Te(JSON.stringify(s)),
                      u = new He(s, a);
                    function l(e) {
                      var t = fe(),
                        n = me(),
                        o = (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(
                          ze
                        ),
                        l = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(
                          t.allocateGSInstance(a)
                        ).current;
                      return (
                        true &&
                          react__WEBPACK_IMPORTED_MODULE_1__.default.Children.count(
                            e.children
                          ) &&
                          console.warn(
                            "The global style component " +
                              a +
                              " was given child JSX. createGlobalStyle does not render children."
                          ),
                        true &&
                          s.some(function (e) {
                            return (
                              "string" == typeof e &&
                              -1 !== e.indexOf("@import")
                            );
                          }) &&
                          console.warn(
                            "Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."
                          ),
                        (0, react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(
                          function () {
                            return (
                              h(l, e, t, o, n),
                              function () {
                                return u.removeStyles(l, t);
                              }
                            );
                          },
                          [l, e, t, o, n]
                        ),
                        null
                      );
                    }
                    function h(e, t, n, r, o) {
                      if (u.isStatic) u.renderStyles(e, O, n, o);
                      else {
                        var i = v({}, t, { theme: Oe(t, r, l.defaultProps) });
                        u.renderStyles(e, i, n, o);
                      }
                    }
                    return (
                      true && Pe(a),
                      react__WEBPACK_IMPORTED_MODULE_1__.default.memo(l)
                    );
                  }
                  function We(e) {
                    true &&
                      "undefined" != typeof navigator &&
                      "ReactNative" === navigator.product &&
                      console.warn(
                        "`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated."
                      );
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    var o = Ae.apply(void 0, [e].concat(n)).join(""),
                      i = Te(o);
                    return new ve(i, o);
                  }
                  var Ue = (function () {
                      function e() {
                        var e = this;
                        (this._emitSheetCSS = function () {
                          var t = e.instance.toString(),
                            n = q();
                          return (
                            "<style " +
                            [
                              n && 'nonce="' + n + '"',
                              A + '="true"',
                              'data-styled-version="5.3.0"',
                            ]
                              .filter(Boolean)
                              .join(" ") +
                            ">" +
                            t +
                            "</style>"
                          );
                        }),
                          (this.getStyleTags = function () {
                            return e.sealed ? j(2) : e._emitSheetCSS();
                          }),
                          (this.getStyleElement = function () {
                            var t;
                            if (e.sealed) return j(2);
                            var n =
                                (((t = {})[A] = ""),
                                (t["data-styled-version"] = "5.3.0"),
                                (t.dangerouslySetInnerHTML = {
                                  __html: e.instance.toString(),
                                }),
                                t),
                              o = q();
                            return (
                              o && (n.nonce = o),
                              [
                                react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                                  "style",
                                  v({}, n, { key: "sc-0-0" })
                                ),
                              ]
                            );
                          }),
                          (this.seal = function () {
                            e.sealed = !0;
                          }),
                          (this.instance = new Z({ isServer: !0 })),
                          (this.sealed = !1);
                      }
                      var t = e.prototype;
                      return (
                        (t.collectStyles = function (e) {
                          return this.sealed
                            ? j(2)
                            : react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                                ye,
                                { sheet: this.instance },
                                e
                              );
                        }),
                        (t.interleaveWithNodeStream = function (e) {
                          return j(3);
                        }),
                        e
                      );
                    })(),
                    Je = function (e) {
                      var t = react__WEBPACK_IMPORTED_MODULE_1__.default.forwardRef(
                        function (t, n) {
                          var o = (0,
                            react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),
                            s = e.defaultProps,
                            a = Oe(t, o, s);
                          return (
                            true &&
                              void 0 === a &&
                              console.warn(
                                '[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' +
                                  _(e) +
                                  '"'
                              ),
                            react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                              e,
                              v({}, t, { theme: a, ref: n })
                            )
                          );
                        }
                      );
                      return (
                        hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(
                          t,
                          e
                        ),
                        (t.displayName = "WithTheme(" + _(e) + ")"),
                        t
                      );
                    },
                    Xe = function () {
                      return (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(
                        ze
                      );
                    },
                    Ze = { StyleSheet: Z, masterSheet: he };
                  true &&
                    "undefined" != typeof navigator &&
                    "ReactNative" === navigator.product &&
                    console.warn(
                      "It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"
                    ),
                    true &&
                      ((window["__styled-components-init__"] =
                        window["__styled-components-init__"] || 0),
                      1 === window["__styled-components-init__"] &&
                        console.warn(
                          "It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."
                        ),
                      (window["__styled-components-init__"] += 1));
                  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = qe;
                  //# sourceMappingURL=styled-components.browser.esm.js.map

                  /***/
                },

              /***/ react:
                /*!************************!*\
  !*** external "react" ***!
  \************************/
                /***/ (module) => {
                  "use strict";
                  module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

                  /***/
                },

              /***/ "react-dom":
                /*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
                /***/ (module) => {
                  "use strict";
                  module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

                  /***/
                },

              /******/
            }; // The module cache
            /************************************************************************/
            /******/ /******/ var __webpack_module_cache__ = {}; // The require function
            /******/
            /******/ /******/ function __webpack_require__(moduleId) {
              /******/ // Check if module is in cache
              /******/ var cachedModule = __webpack_module_cache__[moduleId];
              /******/ if (cachedModule !== undefined) {
                /******/ return cachedModule.exports;
                /******/
              } // Create a new module (and put it into the cache)
              /******/ /******/ var module = (__webpack_module_cache__[
                moduleId
              ] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {},
                /******/
              }); // Execute the module function
              /******/
              /******/ /******/ __webpack_modules__[moduleId](
                module,
                module.exports,
                __webpack_require__
              ); // Return the exports of the module
              /******/
              /******/ /******/ return module.exports;
              /******/
            } /* webpack/runtime/__system_context__ */
            /******/
            /************************************************************************/
            /******/ /******/ (() => {
              /******/ __webpack_require__.y = __system_context__;
              /******/
            })(); /* webpack/runtime/compat get default export */
            /******/
            /******/ /******/ (() => {
              /******/ // getDefaultExport function for compatibility with non-harmony modules
              /******/ __webpack_require__.n = (module) => {
                /******/ var getter =
                  module && module.__esModule
                    ? /******/ () => module["default"]
                    : /******/ () => module;
                /******/ __webpack_require__.d(getter, { a: getter });
                /******/ return getter;
                /******/
              };
              /******/
            })(); /* webpack/runtime/define property getters */
            /******/
            /******/ /******/ (() => {
              /******/ // define getter functions for harmony exports
              /******/ __webpack_require__.d = (exports, definition) => {
                /******/ for (var key in definition) {
                  /******/ if (
                    __webpack_require__.o(definition, key) &&
                    !__webpack_require__.o(exports, key)
                  ) {
                    /******/ Object.defineProperty(exports, key, {
                      enumerable: true,
                      get: definition[key],
                    });
                    /******/
                  }
                  /******/
                }
                /******/
              };
              /******/
            })(); /* webpack/runtime/hasOwnProperty shorthand */
            /******/
            /******/ /******/ (() => {
              /******/ __webpack_require__.o = (obj, prop) =>
                Object.prototype.hasOwnProperty.call(obj, prop);
              /******/
            })(); /* webpack/runtime/make namespace object */
            /******/
            /******/ /******/ (() => {
              /******/ // define __esModule on exports
              /******/ __webpack_require__.r = (exports) => {
                /******/ if (
                  typeof Symbol !== "undefined" &&
                  Symbol.toStringTag
                ) {
                  /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module",
                  });
                  /******/
                }
                /******/ Object.defineProperty(exports, "__esModule", {
                  value: true,
                });
                /******/
              };
              /******/
            })(); /* webpack/runtime/publicPath */
            /******/
            /******/ /******/ (() => {
              /******/ __webpack_require__.p = "";
              /******/
            })();
            /******/
            /************************************************************************/
            var __webpack_exports__ = {};
            // This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
            (() => {
              /*!*********************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/auto-public-path/1.js ***!
  \*********************************************************************/
              const autoPublicPath = __webpack_require__(
                /*! ./auto-public-path */ "./node_modules/systemjs-webpack-interop/auto-public-path/auto-public-path.js"
              ).autoPublicPath;

              autoPublicPath(1);
            })();

            // This entry need to be wrapped in an IIFE because it need to be in strict mode.
            (() => {
              "use strict";
              /*!***********************************!*\
  !*** ./src/monkeysmedia-chat.tsx ***!
  \***********************************/
              __webpack_require__.r(__webpack_exports__);
              /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ bootstrap: () => /* binding */ bootstrap,
                /* harmony export */ mount: () => /* binding */ mount,
                /* harmony export */ unmount: () => /* binding */ unmount,
                /* harmony export */
              });
              /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! react */ "react"
              );
              /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! react-dom */ "react-dom"
              );
              /* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! single-spa-react */ "./node_modules/single-spa-react/lib/esm/single-spa-react.js"
              );
              /* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./root.component */ "./src/root.component.tsx"
              );

              var lifecycles = (0,
              single_spa_react__WEBPACK_IMPORTED_MODULE_2__.default)({
                React: react__WEBPACK_IMPORTED_MODULE_0__.default,
                ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1__.default,
                rootComponent:
                  _root_component__WEBPACK_IMPORTED_MODULE_3__.default,
                errorBoundary: function errorBoundary(err, info, props) {
                  // Customize the root error boundary for your microfrontend here.
                  return null;
                },
              });
              var bootstrap = lifecycles.bootstrap,
                mount = lifecycles.mount,
                unmount = lifecycles.unmount;
            })();

            /******/ return __webpack_exports__;
            /******/
          })()
        );
      },
    };
  }
);
//# sourceMappingURL=monkeysmedia-chat.js.map
