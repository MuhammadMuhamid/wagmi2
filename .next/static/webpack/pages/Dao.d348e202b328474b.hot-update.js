"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Dao",{

/***/ "./src/layout/slider.js":
/*!******************************!*\
  !*** ./src/layout/slider.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n//react\n\n//react dom\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nfunction useTilt() {\n    var animationDuration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"150ms\";\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!ref.current) {\n            return;\n        }\n        // used to unify the touch and click cases\n        var unify = function(e) {\n            return e.changedTouches ? e.changedTouches[0] : e;\n        };\n        var state = {\n            rect: undefined,\n            mouseX: undefined,\n            mouseY: undefined\n        };\n        var el = ref.current;\n        var handleEnterEvent = function() {\n            el.style.transition = \"transform \".concat(animationDuration, \" ease-out\");\n        };\n        var handleMoveEvent = function(e) {\n            e.preventDefault();\n            if (!el) {\n                return;\n            }\n            if (!state.rect) {\n                state.rect = el.getBoundingClientRect();\n            }\n            state.mouseX = unify(e).clientX;\n            state.mouseY = unify(e).clientY;\n            var px = (state.mouseX - state.rect.left) / state.rect.width;\n            var py = (state.mouseY - state.rect.top) / state.rect.height;\n            el.style.setProperty(\"--px\", px.toFixed(2));\n            el.style.setProperty(\"--py\", py.toFixed(2));\n        };\n        var handleEndEvent = function() {\n            el.style.setProperty(\"--px\", 0.5);\n            el.style.setProperty(\"--py\", 0.5);\n            el.style.transition = \"transform \".concat(animationDuration, \" ease-in\");\n        };\n        el.addEventListener(\"mouseenter\", handleEnterEvent);\n        el.addEventListener(\"mousemove\", handleMoveEvent);\n        el.addEventListener(\"mouseleave\", handleEndEvent);\n        el.addEventListener(\"touchstart\", handleEnterEvent);\n        el.addEventListener(\"touchmove\", handleMoveEvent);\n        el.addEventListener(\"touchend\", handleEndEvent);\n        return function() {\n            el.removeEventListener(\"mouseenter\", handleEnterEvent);\n            el.removeEventListener(\"mousemove\", handleMoveEvent);\n            el.removeEventListener(\"mouseleave\", handleEndEvent);\n            el.removeEventListener(\"touchstart\", handleEnterEvent);\n            el.removeEventListener(\"touchmove\", handleMoveEvent);\n            el.removeEventListener(\"touchend\", handleEndEvent);\n        };\n    }, [\n        animationDuration\n    ]);\n    return ref;\n}\n_s(useTilt, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\nvar Slide = function(param) {\n    var image = param.image, title = param.title, subtitle = param.subtitle, description = param.description, offset = param.offset, isPageBackground = param.isPageBackground;\n    _s1();\n    var active = offset === 0 ? true : null, ref = useTilt(active);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"slide\",\n        \"data-active\": active,\n        style: {\n            \"--offset\": offset,\n            \"--dir\": offset === 0 ? 0 : offset > 0 ? 1 : -1\n        },\n        children: [\n            isPageBackground && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slideBackground\",\n                style: {\n                    backgroundImage: \"url('\".concat(image, \"')\")\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                // ref={ref}\n                className: \"slideContent\",\n                style: {\n                    backgroundImage: \"url('\".concat(image, \"')\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slideContentInner\",\n                    children: [\n                        title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"slideTitle\",\n                            dir: \"auto\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, _this),\n                        subtitle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"slideSubtitle\",\n                            dir: \"auto\",\n                            children: subtitle\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, _this),\n                        description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"slideDescription\",\n                            dir: \"auto\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_s1(Slide, \"LGf+W/lhEA37ahkVlXhbNfueQCc=\", false, function() {\n    return [\n        useTilt,\n        useTilt\n    ];\n});\n_c = Slide;\nSlide.propTypes = {\n    image: \"a\",\n    title: \"a\",\n    subtitle: \"a\",\n    description: \"a\",\n    offset: \"a\",\n    isPageBackground: \"a\"\n};\nvar Carousel = function(param) {\n    var slides1 = param.slides, isPageBackground = param.isPageBackground;\n    var _this1 = _this;\n    _s2();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slideIndex = ref[0], setSlideIndex = ref[1];\n    var handlePrevSlide = function() {\n        setSlideIndex(function(prev) {\n            return prev === 0 ? slides1.length - 1 : prev - 1;\n        });\n    };\n    var handleNextSlide = function() {\n        setSlideIndex(function(prev) {\n            return (prev + 1) % slides1.length;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"slidesWrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"slides\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"prevSlideBtn\",\n                    onClick: handlePrevSlide,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-chevron-left\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                        lineNumber: 156,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                    lineNumber: 155,\n                    columnNumber: 9\n                }, _this),\n                _toConsumableArray(slides1).concat(_toConsumableArray(slides1), _toConsumableArray(slides1)).map(function(slide, i) {\n                    var offset = slides1.length + (slideIndex - i);\n                    if (typeof slide === \"string\") {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slide, {\n                            image: slide,\n                            offset: offset,\n                            isPageBackground: isPageBackground\n                        }, i, false, {\n                            fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                            lineNumber: 164,\n                            columnNumber: 15\n                        }, _this1);\n                    } else {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slide, {\n                            image: slide.image,\n                            title: slide.title,\n                            subtitle: slide.subtitle,\n                            description: slide.description,\n                            offset: offset,\n                            isPageBackground: isPageBackground\n                        }, i, false, {\n                            fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                            lineNumber: 173,\n                            columnNumber: 15\n                        }, _this1);\n                    }\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"nextSlideBtn\",\n                    onClick: handleNextSlide,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-chevron-right\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                        lineNumber: 186,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n                    lineNumber: 185,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n            lineNumber: 154,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, _this);\n};\n_s2(Carousel, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = Carousel;\nCarousel.propTypes = {\n    slides: \"a\",\n    isPageBackground: \"a\"\n};\nvar slides = [\n    {\n        id: 1,\n        title: \"First\",\n        subtitle: \"slide\",\n        description: \"Praesent ac sem eget est.\",\n        image: \"https://picsum.photos/id/1/500/500\"\n    },\n    {\n        id: 2,\n        title: \"Second\",\n        subtitle: \"slide\",\n        description: \"Praesent ac sem eget est.\",\n        image: \"https://picsum.photos/id/234/500/500\"\n    },\n    {\n        id: 3,\n        title: \"Third\",\n        subtitle: \"slide\",\n        description: \"Praesent ac sem eget est.\",\n        image: \"https://picsum.photos/id/790/500/500\"\n    }, \n];\n// export default Carousel;\nvar App = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Carousel, {\n        slides: slides,\n        isPageBackground: true\n    }, void 0, false, {\n        fileName: \"D:\\\\Muhamid Files\\\\job website\\\\Wagmi\\\\package\\\\neoh\\\\src\\\\layout\\\\slider.js\",\n        lineNumber: 223,\n        columnNumber: 19\n    }, _this);\n};\n_c2 = App;\n// const container = document.getElementById(\"app\"),\n//   root = createRoot(container);\n// root.render(<App />);\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Slide\");\n$RefreshReg$(_c1, \"Carousel\");\n$RefreshReg$(_c2, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L3NsaWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQSxPQUFPO0FBQ29EO0FBQzNELFdBQVc7QUFDd0I7O0FBRW5DLFNBQVNLLE9BQU8sR0FBOEI7UUFBN0JDLGlCQUFpQixHQUFqQkEsK0NBQTJCLGtCQUFQLE9BQU87O0lBQzFDLElBQU1DLEdBQUcsR0FBR0wsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFeEJDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUksQ0FBQ0ksR0FBRyxDQUFDQyxPQUFPLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBRUQsMENBQTBDO1FBQzFDLElBQU1DLEtBQUssR0FBRyxTQUFDQyxDQUFDO21CQUFNQSxDQUFDLENBQUNDLGNBQWMsR0FBR0QsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUdELENBQUM7U0FBQztRQUVqRSxJQUFNRSxLQUFLLEdBQUc7WUFDWkMsSUFBSSxFQUFFQyxTQUFTO1lBQ2ZDLE1BQU0sRUFBRUQsU0FBUztZQUNqQkUsTUFBTSxFQUFFRixTQUFTO1NBQ2xCO1FBRUQsSUFBSUcsRUFBRSxHQUFHVixHQUFHLENBQUNDLE9BQU87UUFFcEIsSUFBTVUsZ0JBQWdCLEdBQUcsV0FBTTtZQUM3QkQsRUFBRSxDQUFDRSxLQUFLLENBQUNDLFVBQVUsR0FBRyxZQUFXLENBQW9CLE1BQVMsQ0FBM0JkLGlCQUFpQixFQUFDLFdBQVMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBTWUsZUFBZSxHQUFHLFNBQUNYLENBQUMsRUFBSztZQUM3QkEsQ0FBQyxDQUFDWSxjQUFjLEVBQUUsQ0FBQztZQUVuQixJQUFJLENBQUNMLEVBQUUsRUFBRTtnQkFDUCxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUNMLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO2dCQUNmRCxLQUFLLENBQUNDLElBQUksR0FBR0ksRUFBRSxDQUFDTSxxQkFBcUIsRUFBRSxDQUFDO2FBQ3pDO1lBQ0RYLEtBQUssQ0FBQ0csTUFBTSxHQUFHTixLQUFLLENBQUNDLENBQUMsQ0FBQyxDQUFDYyxPQUFPLENBQUM7WUFDaENaLEtBQUssQ0FBQ0ksTUFBTSxHQUFHUCxLQUFLLENBQUNDLENBQUMsQ0FBQyxDQUFDZSxPQUFPLENBQUM7WUFFaEMsSUFBTUMsRUFBRSxHQUFHLENBQUNkLEtBQUssQ0FBQ0csTUFBTSxHQUFHSCxLQUFLLENBQUNDLElBQUksQ0FBQ2MsSUFBSSxDQUFDLEdBQUdmLEtBQUssQ0FBQ0MsSUFBSSxDQUFDZSxLQUFLO1lBQzlELElBQU1DLEVBQUUsR0FBRyxDQUFDakIsS0FBSyxDQUFDSSxNQUFNLEdBQUdKLEtBQUssQ0FBQ0MsSUFBSSxDQUFDaUIsR0FBRyxDQUFDLEdBQUdsQixLQUFLLENBQUNDLElBQUksQ0FBQ2tCLE1BQU07WUFFOURkLEVBQUUsQ0FBQ0UsS0FBSyxDQUFDYSxXQUFXLENBQUMsTUFBTSxFQUFFTixFQUFFLENBQUNPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDaEIsRUFBRSxDQUFDRSxLQUFLLENBQUNhLFdBQVcsQ0FBQyxNQUFNLEVBQUVILEVBQUUsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFNQyxjQUFjLEdBQUcsV0FBTTtZQUMzQmpCLEVBQUUsQ0FBQ0UsS0FBSyxDQUFDYSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDZixFQUFFLENBQUNFLEtBQUssQ0FBQ2EsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsQ2YsRUFBRSxDQUFDRSxLQUFLLENBQUNDLFVBQVUsR0FBRyxZQUFXLENBQW9CLE1BQVEsQ0FBMUJkLGlCQUFpQixFQUFDLFVBQVEsQ0FBQyxDQUFDO1NBQ2hFO1FBRURXLEVBQUUsQ0FBQ2tCLGdCQUFnQixDQUFDLFlBQVksRUFBRWpCLGdCQUFnQixDQUFDLENBQUM7UUFDcERELEVBQUUsQ0FBQ2tCLGdCQUFnQixDQUFDLFdBQVcsRUFBRWQsZUFBZSxDQUFDLENBQUM7UUFDbERKLEVBQUUsQ0FBQ2tCLGdCQUFnQixDQUFDLFlBQVksRUFBRUQsY0FBYyxDQUFDLENBQUM7UUFDbERqQixFQUFFLENBQUNrQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVqQixnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BERCxFQUFFLENBQUNrQixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVkLGVBQWUsQ0FBQyxDQUFDO1FBQ2xESixFQUFFLENBQUNrQixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUVELGNBQWMsQ0FBQyxDQUFDO1FBRWhELE9BQU8sV0FBTTtZQUNYakIsRUFBRSxDQUFDbUIsbUJBQW1CLENBQUMsWUFBWSxFQUFFbEIsZ0JBQWdCLENBQUMsQ0FBQztZQUN2REQsRUFBRSxDQUFDbUIsbUJBQW1CLENBQUMsV0FBVyxFQUFFZixlQUFlLENBQUMsQ0FBQztZQUNyREosRUFBRSxDQUFDbUIsbUJBQW1CLENBQUMsWUFBWSxFQUFFRixjQUFjLENBQUMsQ0FBQztZQUNyRGpCLEVBQUUsQ0FBQ21CLG1CQUFtQixDQUFDLFlBQVksRUFBRWxCLGdCQUFnQixDQUFDLENBQUM7WUFDdkRELEVBQUUsQ0FBQ21CLG1CQUFtQixDQUFDLFdBQVcsRUFBRWYsZUFBZSxDQUFDLENBQUM7WUFDckRKLEVBQUUsQ0FBQ21CLG1CQUFtQixDQUFDLFVBQVUsRUFBRUYsY0FBYyxDQUFDLENBQUM7U0FDcEQsQ0FBQztLQUNILEVBQUU7UUFBQzVCLGlCQUFpQjtLQUFDLENBQUMsQ0FBQztJQUV4QixPQUFPQyxHQUFHLENBQUM7Q0FDWjtHQWxFUUYsT0FBTztBQW9FaEIsSUFBTWdDLEtBQUssR0FBRyxnQkFPUjtRQU5KQyxLQUFLLFNBQUxBLEtBQUssRUFDTEMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsTUFBTSxTQUFOQSxNQUFNLEVBQ05DLGdCQUFnQixTQUFoQkEsZ0JBQWdCOztJQUVoQixJQUFNQyxNQUFNLEdBQUdGLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksRUFDdkNuQyxHQUFHLEdBQUdGLE9BQU8sQ0FBQ3VDLE1BQU0sQ0FBQztJQUV2QixxQkFDRSw4REFBQ0MsS0FBRztRQUNGdEMsR0FBRyxFQUFFQSxHQUFHO1FBQ1J1QyxTQUFTLEVBQUMsT0FBTztRQUNqQkMsYUFBVyxFQUFFSCxNQUFNO1FBQ25CekIsS0FBSyxFQUFFO1lBQ0wsVUFBVSxFQUFFdUIsTUFBTTtZQUNsQixPQUFPLEVBQUVBLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEQ7O1lBRUFDLGdCQUFnQixrQkFDZiw4REFBQ0UsS0FBRztnQkFDRkMsU0FBUyxFQUFDLGlCQUFpQjtnQkFDM0IzQixLQUFLLEVBQUU7b0JBQ0w2QixlQUFlLEVBQUUsT0FBTSxDQUFRLE1BQUUsQ0FBUlYsS0FBSyxFQUFDLElBQUUsQ0FBQztpQkFDbkM7Ozs7O3FCQUNEOzBCQUVKLDhEQUFDTyxLQUFHO2dCQUNGLFlBQVk7Z0JBQ1pDLFNBQVMsRUFBQyxjQUFjO2dCQUN4QjNCLEtBQUssRUFBRTtvQkFDTDZCLGVBQWUsRUFBRSxPQUFNLENBQVEsTUFBRSxDQUFSVixLQUFLLEVBQUMsSUFBRSxDQUFDO2lCQUNuQzswQkFFRCw0RUFBQ08sS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7d0JBQy9CUCxLQUFLLGtCQUNKLDhEQUFDVSxJQUFFOzRCQUFDSCxTQUFTLEVBQUMsWUFBWTs0QkFBQ0ksR0FBRyxFQUFDLE1BQU07c0NBQ2xDWCxLQUFLOzs7OztpQ0FDSDt3QkFFTkMsUUFBUSxrQkFDUCw4REFBQ1csSUFBRTs0QkFBQ0wsU0FBUyxFQUFDLGVBQWU7NEJBQUNJLEdBQUcsRUFBQyxNQUFNO3NDQUNyQ1YsUUFBUTs7Ozs7aUNBQ047d0JBRU5DLFdBQVcsa0JBQ1YsOERBQUNXLEdBQUM7NEJBQUNOLFNBQVMsRUFBQyxrQkFBa0I7NEJBQUNJLEdBQUcsRUFBQyxNQUFNO3NDQUN2Q1QsV0FBVzs7Ozs7aUNBQ1Y7Ozs7Ozt5QkFFRjs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047Q0FDSDtJQXhES0osS0FBSzs7UUFTRGhDLE9BQU87UUFBUEEsT0FBTzs7O0FBVFhnQyxLQUFBQSxLQUFLO0FBMERYQSxLQUFLLENBQUNnQixTQUFTLEdBQUc7SUFDaEJmLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLFFBQVEsRUFBRSxHQUFHO0lBQ2JDLFdBQVcsRUFBRSxHQUFHO0lBQ2hCQyxNQUFNLEVBQUUsR0FBRztJQUNYQyxnQkFBZ0IsRUFBRSxHQUFHO0NBQ3RCLENBQUM7QUFFRixJQUFNVyxRQUFRLEdBQUcsZ0JBQWtDO1FBQS9CQyxPQUFNLFNBQU5BLE1BQU0sRUFBRVosZ0JBQWdCLFNBQWhCQSxnQkFBZ0I7OztJQUMxQyxJQUFvQzFDLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUE3SWpELFVBNkltQixHQUFtQkEsR0FBVyxHQUE5QixFQTdJbkIsYUE2SWtDLEdBQUlBLEdBQVcsR0FBZjtJQUVoQyxJQUFNeUQsZUFBZSxHQUFHLFdBQU07UUFDNUJELGFBQWEsQ0FBQyxTQUFDRSxJQUFJO21CQUFNQSxJQUFJLEtBQUssQ0FBQyxHQUFHSixPQUFNLENBQUNLLE1BQU0sR0FBRyxDQUFDLEdBQUdELElBQUksR0FBRyxDQUFDO1NBQUMsQ0FBQyxDQUFDO0tBQ3RFO0lBRUQsSUFBTUUsZUFBZSxHQUFHLFdBQU07UUFDNUJKLGFBQWEsQ0FBQyxTQUFDRSxJQUFJO21CQUFLLENBQUNBLElBQUksR0FBRyxDQUFDLENBQUMsR0FBR0osT0FBTSxDQUFDSyxNQUFNO1NBQUEsQ0FBQyxDQUFDO0tBQ3JEO0lBRUQscUJBQ0UsOERBQUNFLFNBQU87UUFBQ2hCLFNBQVMsRUFBQyxlQUFlO2tCQUNoQyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsUUFBUTs7OEJBQ3JCLDhEQUFDaUIsUUFBTTtvQkFBQ2pCLFNBQVMsRUFBQyxjQUFjO29CQUFDa0IsT0FBTyxFQUFFTixlQUFlOzhCQUN2RCw0RUFBQ08sR0FBQzt3QkFBQ25CLFNBQVMsRUFBQyxxQkFBcUI7Ozs7OzZCQUFHOzs7Ozt5QkFDOUI7Z0JBRVAsbUJBQUdTLE9BQU0sQ0FBTkEsUUFBUSxtQkFBR0EsT0FBTSxDQUFOQSxFQUFRLG1CQUFHQSxPQUFNLENBQU5BLENBQU8sQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRUYsQ0FBQyxFQUFLO29CQUNuRCxJQUFJdkIsTUFBTSxHQUFHYSxPQUFNLENBQUNLLE1BQU0sR0FBRyxDQUFDSixVQUFVLEdBQUdTLENBQUMsQ0FBQztvQkFFN0MsSUFBSSxPQUFPRSxLQUFLLEtBQUssUUFBUSxFQUFFO3dCQUM3QixxQkFDRSw4REFBQzlCLEtBQUs7NEJBQ0pDLEtBQUssRUFBRTZCLEtBQUs7NEJBQ1p6QixNQUFNLEVBQUVBLE1BQU07NEJBQ2RDLGdCQUFnQixFQUFFQSxnQkFBZ0I7MkJBQzdCc0IsQ0FBQzs7OztrQ0FDTixDQUNGO3FCQUNILE1BQU07d0JBQ0wscUJBQ0UsOERBQUM1QixLQUFLOzRCQUNKQyxLQUFLLEVBQUU2QixLQUFLLENBQUM3QixLQUFLOzRCQUNsQkMsS0FBSyxFQUFFNEIsS0FBSyxDQUFDNUIsS0FBSzs0QkFDbEJDLFFBQVEsRUFBRTJCLEtBQUssQ0FBQzNCLFFBQVE7NEJBQ3hCQyxXQUFXLEVBQUUwQixLQUFLLENBQUMxQixXQUFXOzRCQUM5QkMsTUFBTSxFQUFFQSxNQUFNOzRCQUNkQyxnQkFBZ0IsRUFBRUEsZ0JBQWdCOzJCQUM3QnNCLENBQUM7Ozs7a0NBQ04sQ0FDRjtxQkFDSDtpQkFDRixDQUFDOzhCQUNGLDhEQUFDRixRQUFNO29CQUFDakIsU0FBUyxFQUFDLGNBQWM7b0JBQUNrQixPQUFPLEVBQUVILGVBQWU7OEJBQ3ZELDRFQUFDSSxHQUFDO3dCQUFDbkIsU0FBUyxFQUFDLHNCQUFzQjs7Ozs7NkJBQUc7Ozs7O3lCQUMvQjs7Ozs7O2lCQUNMOzs7OzthQUNFLENBQ1Y7Q0FDSDtJQWxES1EsUUFBUTtBQUFSQSxNQUFBQSxRQUFRO0FBb0RkQSxRQUFRLENBQUNELFNBQVMsR0FBRztJQUNuQkUsTUFBTSxFQUFFLEdBQUc7SUFDWFosZ0JBQWdCLEVBQUUsR0FBRztDQUN0QixDQUFDO0FBRUYsSUFBTVksTUFBTSxHQUFHO0lBQ2I7UUFDRWEsRUFBRSxFQUFFLENBQUM7UUFDTDdCLEtBQUssRUFBRSxPQUFPO1FBQ2RDLFFBQVEsRUFBRSxPQUFPO1FBQ2pCQyxXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDSCxLQUFLLEVBQUUsb0NBQW9DO0tBQzVDO0lBQ0Q7UUFDRThCLEVBQUUsRUFBRSxDQUFDO1FBQ0w3QixLQUFLLEVBQUUsUUFBUTtRQUNmQyxRQUFRLEVBQUUsT0FBTztRQUNqQkMsV0FBVyxFQUFFLDJCQUEyQjtRQUN4Q0gsS0FBSyxFQUFFLHNDQUFzQztLQUM5QztJQUNEO1FBQ0U4QixFQUFFLEVBQUUsQ0FBQztRQUNMN0IsS0FBSyxFQUFFLE9BQU87UUFDZEMsUUFBUSxFQUFFLE9BQU87UUFDakJDLFdBQVcsRUFBRSwyQkFBMkI7UUFDeENILEtBQUssRUFBRSxzQ0FBc0M7S0FDOUM7Q0FDRjtBQUNELDJCQUEyQjtBQUUzQixJQUFNK0IsR0FBRyxHQUFHO3lCQUFNLDhEQUFDZixRQUFRO1FBQUNDLE1BQU0sRUFBRUEsTUFBTTtRQUFFWixnQkFBZ0I7Ozs7O2FBQUc7Q0FBQTtBQUF6RDBCLE1BQUFBLEdBQUc7QUFFVCxvREFBb0Q7QUFDcEQsa0NBQWtDO0FBRWxDLHdCQUF3QjtBQUN4QiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvc2xpZGVyLmpzPzczMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy9yZWFjdFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vcmVhY3QgZG9tXHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVRpbHQoYW5pbWF0aW9uRHVyYXRpb24gPSBcIjE1MG1zXCIpIHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2VkIHRvIHVuaWZ5IHRoZSB0b3VjaCBhbmQgY2xpY2sgY2FzZXNcclxuICAgIGNvbnN0IHVuaWZ5ID0gKGUpID0+IChlLmNoYW5nZWRUb3VjaGVzID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUpO1xyXG5cclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICByZWN0OiB1bmRlZmluZWQsXHJcbiAgICAgIG1vdXNlWDogdW5kZWZpbmVkLFxyXG4gICAgICBtb3VzZVk6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGVsID0gcmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRW50ZXJFdmVudCA9ICgpID0+IHtcclxuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gJHthbmltYXRpb25EdXJhdGlvbn0gZWFzZS1vdXRgO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3ZlRXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghc3RhdGUucmVjdCkge1xyXG4gICAgICAgIHN0YXRlLnJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZS5tb3VzZVggPSB1bmlmeShlKS5jbGllbnRYO1xyXG4gICAgICBzdGF0ZS5tb3VzZVkgPSB1bmlmeShlKS5jbGllbnRZO1xyXG5cclxuICAgICAgY29uc3QgcHggPSAoc3RhdGUubW91c2VYIC0gc3RhdGUucmVjdC5sZWZ0KSAvIHN0YXRlLnJlY3Qud2lkdGg7XHJcbiAgICAgIGNvbnN0IHB5ID0gKHN0YXRlLm1vdXNlWSAtIHN0YXRlLnJlY3QudG9wKSAvIHN0YXRlLnJlY3QuaGVpZ2h0O1xyXG5cclxuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLXB4XCIsIHB4LnRvRml4ZWQoMikpO1xyXG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcHlcIiwgcHkudG9GaXhlZCgyKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVuZEV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcHhcIiwgMC41KTtcclxuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLXB5XCIsIDAuNSk7XHJcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtICR7YW5pbWF0aW9uRHVyYXRpb259IGVhc2UtaW5gO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoYW5kbGVFbnRlckV2ZW50KTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW92ZUV2ZW50KTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhhbmRsZUVuZEV2ZW50KTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZUVudGVyRXZlbnQpO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVNb3ZlRXZlbnQpO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGhhbmRsZUVuZEV2ZW50KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoYW5kbGVFbnRlckV2ZW50KTtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3ZlRXZlbnQpO1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoYW5kbGVFbmRFdmVudCk7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZUVudGVyRXZlbnQpO1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZU1vdmVFdmVudCk7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVFbmRFdmVudCk7XHJcbiAgICB9O1xyXG4gIH0sIFthbmltYXRpb25EdXJhdGlvbl0pO1xyXG5cclxuICByZXR1cm4gcmVmO1xyXG59XHJcblxyXG5jb25zdCBTbGlkZSA9ICh7XHJcbiAgaW1hZ2UsXHJcbiAgdGl0bGUsXHJcbiAgc3VidGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgb2Zmc2V0LFxyXG4gIGlzUGFnZUJhY2tncm91bmQsXHJcbn0pID0+IHtcclxuICBjb25zdCBhY3RpdmUgPSBvZmZzZXQgPT09IDAgPyB0cnVlIDogbnVsbCxcclxuICAgIHJlZiA9IHVzZVRpbHQoYWN0aXZlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT1cInNsaWRlXCJcclxuICAgICAgZGF0YS1hY3RpdmU9e2FjdGl2ZX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBcIi0tb2Zmc2V0XCI6IG9mZnNldCxcclxuICAgICAgICBcIi0tZGlyXCI6IG9mZnNldCA9PT0gMCA/IDAgOiBvZmZzZXQgPiAwID8gMSA6IC0xLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7aXNQYWdlQmFja2dyb3VuZCAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVCYWNrZ3JvdW5kXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtpbWFnZX0nKWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAvLyByZWY9e3JlZn1cclxuICAgICAgICBjbGFzc05hbWU9XCJzbGlkZUNvbnRlbnRcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7aW1hZ2V9JylgLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlQ29udGVudElubmVyXCI+XHJcbiAgICAgICAgICB7dGl0bGUgJiYgKFxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2xpZGVUaXRsZVwiIGRpcj1cImF1dG9cIj5cclxuICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNsaWRlU3VidGl0bGVcIiBkaXI9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNsaWRlRGVzY3JpcHRpb25cIiBkaXI9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TbGlkZS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2U6IFwiYVwiLFxyXG4gIHRpdGxlOiBcImFcIixcclxuICBzdWJ0aXRsZTogXCJhXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiYVwiLFxyXG4gIG9mZnNldDogXCJhXCIsXHJcbiAgaXNQYWdlQmFja2dyb3VuZDogXCJhXCIsXHJcbn07XHJcblxyXG5jb25zdCBDYXJvdXNlbCA9ICh7IHNsaWRlcywgaXNQYWdlQmFja2dyb3VuZCB9KSA9PiB7XHJcbiAgY29uc3QgW3NsaWRlSW5kZXgsIHNldFNsaWRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIHNldFNsaWRlSW5kZXgoKHByZXYpID0+IChwcmV2ID09PSAwID8gc2xpZGVzLmxlbmd0aCAtIDEgOiBwcmV2IC0gMSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHRTbGlkZSA9ICgpID0+IHtcclxuICAgIHNldFNsaWRlSW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSBzbGlkZXMubGVuZ3RoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2xpZGVzV3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldlNsaWRlQnRuXCIgb25DbGljaz17aGFuZGxlUHJldlNsaWRlfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICB7Wy4uLnNsaWRlcywgLi4uc2xpZGVzLCAuLi5zbGlkZXNdLm1hcCgoc2xpZGUsIGkpID0+IHtcclxuICAgICAgICAgIGxldCBvZmZzZXQgPSBzbGlkZXMubGVuZ3RoICsgKHNsaWRlSW5kZXggLSBpKTtcclxuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFNsaWRlXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17c2xpZGV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9e29mZnNldH1cclxuICAgICAgICAgICAgICAgIGlzUGFnZUJhY2tncm91bmQ9e2lzUGFnZUJhY2tncm91bmR9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFNsaWRlXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17c2xpZGUuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17c2xpZGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT17c2xpZGUuc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17c2xpZGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9e29mZnNldH1cclxuICAgICAgICAgICAgICAgIGlzUGFnZUJhY2tncm91bmQ9e2lzUGFnZUJhY2tncm91bmR9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHRTbGlkZUJ0blwiIG9uQ2xpY2s9e2hhbmRsZU5leHRTbGlkZX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XHJcbiAgc2xpZGVzOiBcImFcIixcclxuICBpc1BhZ2VCYWNrZ3JvdW5kOiBcImFcIixcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlcyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiBcIkZpcnN0XCIsXHJcbiAgICBzdWJ0aXRsZTogXCJzbGlkZVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUHJhZXNlbnQgYWMgc2VtIGVnZXQgZXN0LlwiLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEvNTAwLzUwMFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogXCJTZWNvbmRcIixcclxuICAgIHN1YnRpdGxlOiBcInNsaWRlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQcmFlc2VudCBhYyBzZW0gZWdldCBlc3QuXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjM0LzUwMC81MDBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6IFwiVGhpcmRcIixcclxuICAgIHN1YnRpdGxlOiBcInNsaWRlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQcmFlc2VudCBhYyBzZW0gZWdldCBlc3QuXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvNzkwLzUwMC81MDBcIixcclxuICB9LFxyXG5dO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IDxDYXJvdXNlbCBzbGlkZXM9e3NsaWRlc30gaXNQYWdlQmFja2dyb3VuZCAvPjtcclxuXHJcbi8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpLFxyXG4vLyAgIHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcblxyXG4vLyByb290LnJlbmRlcig8QXBwIC8+KTtcclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJ1c2VUaWx0IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJyZWYiLCJjdXJyZW50IiwidW5pZnkiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJzdGF0ZSIsInJlY3QiLCJ1bmRlZmluZWQiLCJtb3VzZVgiLCJtb3VzZVkiLCJlbCIsImhhbmRsZUVudGVyRXZlbnQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJoYW5kbGVNb3ZlRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJjbGllbnRZIiwicHgiLCJsZWZ0Iiwid2lkdGgiLCJweSIsInRvcCIsImhlaWdodCIsInNldFByb3BlcnR5IiwidG9GaXhlZCIsImhhbmRsZUVuZEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTbGlkZSIsImltYWdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib2Zmc2V0IiwiaXNQYWdlQmFja2dyb3VuZCIsImFjdGl2ZSIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtYWN0aXZlIiwiYmFja2dyb3VuZEltYWdlIiwiaDIiLCJkaXIiLCJoMyIsInAiLCJwcm9wVHlwZXMiLCJDYXJvdXNlbCIsInNsaWRlcyIsInNsaWRlSW5kZXgiLCJzZXRTbGlkZUluZGV4IiwiaGFuZGxlUHJldlNsaWRlIiwicHJldiIsImxlbmd0aCIsImhhbmRsZU5leHRTbGlkZSIsInNlY3Rpb24iLCJidXR0b24iLCJvbkNsaWNrIiwiaSIsIm1hcCIsInNsaWRlIiwiaWQiLCJBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/slider.js\n");

/***/ })

});