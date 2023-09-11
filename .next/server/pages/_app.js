"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/.pnpm/next@13.4.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/pages/_app.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@13.4.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/pages/_app.js ***!
  \*******************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return App;\n    }\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! react */ \"react?1189\"));\nconst _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\n/**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ async function appGetInitialProps(param) {\n    let { Component , ctx  } = param;\n    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n    return {\n        pageProps\n    };\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, pageProps);\n    }\n}\n(()=>{\n    App.origGetInitialProps = appGetInitialProps;\n})();\n(()=>{\n    App.getInitialProps = appGetInitialProps;\n})();\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxMy40LjRfQGJhYmVsK2NvcmVANy4yMi4xMF9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztlQWlDcUJBOzs7OzRFQWpDSDttQ0FXa0I7QUFVcEM7OztJQUlBLGVBQWVDLG1CQUFtQkMsS0FHckI7SUFIcUIsTUFDaENDLFVBQUEsRUFDQUMsSUFBQUEsRUFDVyxHQUhxQkY7SUFJaEMsTUFBTUcsWUFBWSxNQUFNLElBQUFDLE9BQUFDLG1CQUFBQSxFQUFvQkosV0FBV0M7SUFDdkQsT0FBTztRQUFFQztJQUFVO0FBQ3JCO0FBRWUsTUFBTUwsWUFBc0NRLE9BQUFDLFFBQU1OO0lBTy9ETyxTQUFTO1FBQ1AsTUFBTSxFQUFFUCxVQUFBLEVBQVdFLFVBQUFBLEVBQVcsR0FBRyxJQUFJLENBQUNNO1FBRXRDLHFCQUFPSCxPQUFBQyxRQUFBRyxjQUFDVCxXQUFjRTtJQUN4QjtBQUNGOztJQVpxQkwsSUFJWmEsc0JBQXNCWjs7O0lBSlZELElBS1pjLGtCQUFrQmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi4vLi4vc3JjL3BhZ2VzL19hcHAudHN4PzdjNmEiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTMuNC40X0BiYWJlbCtjb3JlQDcuMjIuMTBfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzP2E4NWUiXSwibmFtZXMiOlsiQXBwIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwicGFyYW0iLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJfdXRpbHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiX3JlYWN0IiwiZGVmYXVsdCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/next@13.4.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react?1189":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vQHN3YytoZWxwZXJzQDAuNS4xL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvY2pzL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5janMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsU0FBUyxHQUFHLGdDQUFnQztBQUM1QztBQUNBLDJDQUEyQztBQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3djK2hlbHBlcnNAMC41LjEvbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9janMvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmNqcz83ODY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl8gPSBleHBvcnRzLl9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdDtcbmZ1bmN0aW9uIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/.pnpm/next@13.4.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/pages/_app.js"));
module.exports = __webpack_exports__;

})();