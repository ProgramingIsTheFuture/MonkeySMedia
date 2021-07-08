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
                    var _i =
                      arr &&
                      ((typeof Symbol !== "undefined" &&
                        arr[Symbol.iterator]) ||
                        arr["@@iterator"]);

                    if (_i == null) return;
                    var _arr = [];
                    var _n = true;
                    var _d = false;

                    var _s, _e;

                    try {
                      for (
                        _i = _i.call(arr);
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
                  /* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
                  );
                  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ "react"
                  );

                  var ShowNotification = function ShowNotification(message) {
                    return new Notification("Nova Notificação", {
                      body: message,
                    });
                  };

                  var CheckPermission = function CheckPermission(noti) {
                    if (Notification.permission === "granted") {
                      noti();
                    } else if (
                      Notification.permission === "default" ||
                      Notification.permission === "denied"
                    ) {
                      Notification.requestPermission().then(function (p) {
                        if (p === "granted") {
                          noti();
                        }
                      });
                    }
                  };

                  function Root(props) {
                    var _useState = (0,
                      react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
                      _useState2 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(
                        _useState,
                        2
                      ),
                      socket = _useState2[0],
                      setSocket = _useState2[1];

                    var _useState3 = (0,
                      react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
                      _useState4 = (0,
                      _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(
                        _useState3,
                        2
                      ),
                      socketUrl = _useState4[0],
                      setSocketUrl = _useState4[1];

                    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                      function () {
                        System["import"]("@monkeysmedia/util-module").then(
                          function (util) {
                            return setSocketUrl(util.socketUrl);
                          }
                        );
                      },
                      []
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                      function () {
                        CheckPermission(function () {});
                      },
                      []
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                      function () {
                        if (socketUrl !== "") {
                          var token = localStorage.getItem("auth");
                          token = JSON.parse(token).token;
                          setSocket(
                            new WebSocket(
                              ""
                                .concat(socketUrl, "ws/notification/?token=")
                                .concat(token)
                            )
                          );
                        }
                      },
                      [socketUrl]
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                      function () {
                        if (socket) {
                          socket.onopen = function () {};

                          socket.onmessage = function (event) {
                            CheckPermission(function () {
                              return ShowNotification(
                                JSON.parse(event.data).message
                              );
                            });
                            window.dispatchEvent(
                              new CustomEvent(
                                "@monkeysmedia/notification/new",
                                {}
                              )
                            );
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
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
                      react__WEBPACK_IMPORTED_MODULE_1__.default.Fragment,
                      null
                    );
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
              /*!********************************************!*\
  !*** ./src/monkeysmedia-notifications.tsx ***!
  \********************************************/
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
//# sourceMappingURL=monkeysmedia-notifications.js.map
