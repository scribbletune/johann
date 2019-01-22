/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"computerKeyboard":"computerKeyboard","guitar":"guitar","piano":"piano"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/Menu/Menu.less":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/components/Menu/Menu.less ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".menu {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n}\\n.menu a {\\n  text-decoration: none;\\n  text-transform: uppercase;\\n}\\n.menu nav ul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n.menu nav ul li {\\n  margin: 0 10px;\\n}\\n.menu nav ul li a {\\n  color: black;\\n  font-weight: bold;\\n}\\n.menu,\\nnav ul {\\n  display: flex;\\n  align-items: center;\\n}\\n/* The menu on home page is postioned differently than the pages */\\n.home .menu {\\n  position: static;\\n}\\n.home .menu .notesSetter {\\n  display: none;\\n}\\n.page .menu {\\n  position: fixed;\\n  top: 20px;\\n}\\n.page .menu p {\\n  display: none;\\n}\\na,\\nnav ul li a:focus,\\nli.selected a {\\n  color: #00dab8;\\n}\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jb21wb25lbnRzL01lbnUvTWVudS5sZXNzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS9NZW51Lmxlc3M/MzNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWVudSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5tZW51IG5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLm1lbnUgbmF2IHVsIGxpIHtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4ubWVudSBuYXYgdWwgbGkgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLm1lbnUsXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiBUaGUgbWVudSBvbiBob21lIHBhZ2UgaXMgcG9zdGlvbmVkIGRpZmZlcmVudGx5IHRoYW4gdGhlIHBhZ2VzICovXFxuLmhvbWUgLm1lbnUge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuLmhvbWUgLm1lbnUgLm5vdGVzU2V0dGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wYWdlIC5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjBweDtcXG59XFxuLnBhZ2UgLm1lbnUgcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5hLFxcbm5hdiB1bCBsaSBhOmZvY3VzLFxcbmxpLnNlbGVjdGVkIGEge1xcbiAgY29sb3I6ICMwMGRhYjg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/Menu/Menu.less\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/NotesSetter/NotesSetter.less":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/components/NotesSetter/NotesSetter.less ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".notesSetter {\\n  list-style: none;\\n  padding: 0;\\n  margin: 5px 0;\\n  display: flex;\\n}\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jb21wb25lbnRzL05vdGVzU2V0dGVyL05vdGVzU2V0dGVyLmxlc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3Rlc1NldHRlci9Ob3Rlc1NldHRlci5sZXNzP2M4MDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubm90ZXNTZXR0ZXIge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/NotesSetter/NotesSetter.less\n");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: LoadablePiano, LoadableGuitar, LoadableComputerKeyboard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadablePiano\", function() { return LoadablePiano; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadableGuitar\", function() { return LoadableGuitar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadableComputerKeyboard\", function() { return LoadableComputerKeyboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Menu_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Menu/index */ \"./src/components/Menu/index.tsx\");\n\n\n\n\nvar LoadablePiano = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n    loader: function () { return __webpack_require__.e(/*! import() | piano */ \"piano\").then(__webpack_require__.bind(null, /*! ./modules/Piano */ \"./src/modules/Piano/index.tsx\")); },\n    loading: function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, \"loading ...\"); }\n});\nvar LoadableGuitar = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n    loader: function () { return __webpack_require__.e(/*! import() | guitar */ \"guitar\").then(__webpack_require__.bind(null, /*! ./modules/Guitar */ \"./src/modules/Guitar/index.tsx\")); },\n    loading: function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, \"loading ...\"); }\n});\nvar LoadableComputerKeyboard = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n    loader: function () { return __webpack_require__.e(/*! import() | computerKeyboard */ \"computerKeyboard\").then(__webpack_require__.bind(null, /*! ./modules/ComputerKeyboard */ \"./src/modules/ComputerKeyboard/index.tsx\")); },\n    loading: function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, \"loading ...\"); }\n});\nvar App = function () {\n    // Simple hack to get the current route\n    var mainClass = 'page';\n    if (location.hash === '#/') {\n        mainClass = 'home';\n    }\n    mainClass += ' app';\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"section\", { className: mainClass },\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: \"/\" },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", { className: \"logo\" }, \"Johann\")),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_components_Menu_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/piano', exact: true, component: LoadablePiano }),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/guitar', exact: true, component: LoadableGuitar }),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/keyboard', exact: true, component: LoadableComputerKeyboard })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAudHN4P2Q2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XG5pbXBvcnQgTWVudSBmcm9tICcuL2NvbXBvbmVudHMvTWVudS9pbmRleCc7XG5leHBvcnQgdmFyIExvYWRhYmxlUGlhbm8gPSBMb2FkYWJsZSh7XG4gICAgbG9hZGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwaWFub1wiICovICcuL21vZHVsZXMvUGlhbm8nKTsgfSxcbiAgICBsb2FkaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwibG9hZGluZyAuLi5cIik7IH1cbn0pO1xuZXhwb3J0IHZhciBMb2FkYWJsZUd1aXRhciA9IExvYWRhYmxlKHtcbiAgICBsb2FkZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImd1aXRhclwiICovICcuL21vZHVsZXMvR3VpdGFyJyk7IH0sXG4gICAgbG9hZGluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcImxvYWRpbmcgLi4uXCIpOyB9XG59KTtcbmV4cG9ydCB2YXIgTG9hZGFibGVDb21wdXRlcktleWJvYXJkID0gTG9hZGFibGUoe1xuICAgIGxvYWRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcHV0ZXJLZXlib2FyZFwiICovICcuL21vZHVsZXMvQ29tcHV0ZXJLZXlib2FyZCcpOyB9LFxuICAgIGxvYWRpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXCJsb2FkaW5nIC4uLlwiKTsgfVxufSk7XG52YXIgQXBwID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNpbXBsZSBoYWNrIHRvIGdldCB0aGUgY3VycmVudCByb3V0ZVxuICAgIHZhciBtYWluQ2xhc3MgPSAncGFnZSc7XG4gICAgaWYgKGxvY2F0aW9uLmhhc2ggPT09ICcjLycpIHtcbiAgICAgICAgbWFpbkNsYXNzID0gJ2hvbWUnO1xuICAgIH1cbiAgICBtYWluQ2xhc3MgKz0gJyBhcHAnO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgeyBjbGFzc05hbWU6IG1haW5DbGFzcyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IFwiL1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBjbGFzc05hbWU6IFwibG9nb1wiIH0sIFwiSm9oYW5uXCIpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBwYXRoOiAnL3BpYW5vJywgZXhhY3Q6IHRydWUsIGNvbXBvbmVudDogTG9hZGFibGVQaWFubyB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBwYXRoOiAnL2d1aXRhcicsIGV4YWN0OiB0cnVlLCBjb21wb25lbnQ6IExvYWRhYmxlR3VpdGFyIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6ICcva2V5Ym9hcmQnLCBleGFjdDogdHJ1ZSwgY29tcG9uZW50OiBMb2FkYWJsZUNvbXB1dGVyS2V5Ym9hcmQgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.tsx\n");

/***/ }),

/***/ "./src/actions/constants.ts":
/*!**********************************!*\
  !*** ./src/actions/constants.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    LOAD_NOTES: 'LOAD_NOTES',\n    FLIP_FRETBOARD: 'FLIP_FRETBOARD',\n    CHANGE_TUNING: 'CHANGE_TUNING'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy9jb25zdGFudHMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb25zdGFudHMudHM/NjlhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgTE9BRF9OT1RFUzogJ0xPQURfTk9URVMnLFxuICAgIEZMSVBfRlJFVEJPQVJEOiAnRkxJUF9GUkVUQk9BUkQnLFxuICAgIENIQU5HRV9UVU5JTkc6ICdDSEFOR0VfVFVOSU5HJ1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/actions/constants.ts\n");

/***/ }),

/***/ "./src/actions/creators.ts":
/*!*********************************!*\
  !*** ./src/actions/creators.ts ***!
  \*********************************/
/*! exports provided: initApp, controlChanged, flipFretboard, changeTuning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initApp\", function() { return initApp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlChanged\", function() { return controlChanged; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flipFretboard\", function() { return flipFretboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeTuning\", function() { return changeTuning; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/actions/constants.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ \"./src/api.ts\");\n\n\nvar initApp = function (dispatch) { return (dispatch({ type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOAD_NOTES })); };\nvar controlChanged = function (dispatch, data) {\n    dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOAD_NOTES,\n        data: data\n    });\n};\nvar flipFretboard = function (dispatch) {\n    dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FLIP_FRETBOARD\n    });\n};\nvar changeTuning = function (dispatch, data) {\n    // selectedTuningIdx comes in as a string, for eg \"Drop C\"\n    // (hack) convert it to a integer explicitly till DropDown is reimplemented\n    var tuning = Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"getTuningsForGuitar\"])().find(function (el) { return el.label === data.selectedTuningIdx; });\n    dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CHANGE_TUNING,\n        data: { selectedTuningIdx: tuning.tuningIdx }\n    });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy9jcmVhdG9ycy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2NyZWF0b3JzLnRzPzc1ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRUdW5pbmdzRm9yR3VpdGFyIH0gZnJvbSAnLi4vYXBpJztcbnZhciBpbml0QXBwID0gZnVuY3Rpb24gKGRpc3BhdGNoKSB7IHJldHVybiAoZGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuTE9BRF9OT1RFUyB9KSk7IH07XG52YXIgY29udHJvbENoYW5nZWQgPSBmdW5jdGlvbiAoZGlzcGF0Y2gsIGRhdGEpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGNvbnN0YW50cy5MT0FEX05PVEVTLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG59O1xudmFyIGZsaXBGcmV0Ym9hcmQgPSBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGNvbnN0YW50cy5GTElQX0ZSRVRCT0FSRFxuICAgIH0pO1xufTtcbnZhciBjaGFuZ2VUdW5pbmcgPSBmdW5jdGlvbiAoZGlzcGF0Y2gsIGRhdGEpIHtcbiAgICAvLyBzZWxlY3RlZFR1bmluZ0lkeCBjb21lcyBpbiBhcyBhIHN0cmluZywgZm9yIGVnIFwiRHJvcCBDXCJcbiAgICAvLyAoaGFjaykgY29udmVydCBpdCB0byBhIGludGVnZXIgZXhwbGljaXRseSB0aWxsIERyb3BEb3duIGlzIHJlaW1wbGVtZW50ZWRcbiAgICB2YXIgdHVuaW5nID0gZ2V0VHVuaW5nc0Zvckd1aXRhcigpLmZpbmQoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5sYWJlbCA9PT0gZGF0YS5zZWxlY3RlZFR1bmluZ0lkeDsgfSk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBjb25zdGFudHMuQ0hBTkdFX1RVTklORyxcbiAgICAgICAgZGF0YTogeyBzZWxlY3RlZFR1bmluZ0lkeDogdHVuaW5nLnR1bmluZ0lkeCB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgaW5pdEFwcCwgY29udHJvbENoYW5nZWQsIGZsaXBGcmV0Ym9hcmQsIGNoYW5nZVR1bmluZyB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/actions/creators.ts\n");

/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/*! exports provided: getScaleNames, getChordNames, sharpsToFlats, getScale, getChord, getPitches, getOctavesOfPianoNotes, getTuningsForGuitar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getScaleNames\", function() { return getScaleNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChordNames\", function() { return getChordNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sharpsToFlats\", function() { return sharpsToFlats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getScale\", function() { return getScale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChord\", function() { return getChord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPitches\", function() { return getPitches; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOctavesOfPianoNotes\", function() { return getOctavesOfPianoNotes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTuningsForGuitar\", function() { return getTuningsForGuitar; });\n/* harmony import */ var scribbletune__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scribbletune */ \"./node_modules/scribbletune/src/index.js\");\n/* harmony import */ var scribbletune__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scribbletune__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getScaleNames = function () { return (Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scales\"])().map(function (scale) { return ({\n    name: scale,\n    label: scale[0].toUpperCase() + scale.slice(1)\n}); })); };\nvar getChordNames = function () { return (Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chords\"])().map(function (chord) { return ({\n    name: chord,\n    label: chord\n}); })); };\nvar sharpsToFlats = function (note) {\n    if (!note.includes('#')) {\n        return note;\n    }\n    var noteName = note.replace(/\\d/, '');\n    var sharpsToFlatsMap = {\n        'C#': 'Db',\n        'D#': 'Eb',\n        'F#': 'Gb',\n        'G#': 'Ab',\n        'A#': 'Bb'\n    };\n    return note.replace(noteName, sharpsToFlatsMap[noteName]);\n};\nvar getScale = function (rootNote, scaleName) {\n    // concatenate scales from octave range 1 to 6\n    var o1 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 1 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n    var o2 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 2 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n    var o3 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 3 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n    var o4 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 4 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n    var o5 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 5 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n    var o6 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 6 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n    return o2.concat(o3, o4, o5, o6);\n};\nvar getChord = function (chordName) {\n    // concatenate chords from octave range 2 to 5\n    var o2 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chord\"])(chordName + '-2');\n    var o3 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chord\"])(chordName + '-3');\n    var o4 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chord\"])(chordName + '-4');\n    var o5 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chord\"])(chordName + '-5');\n    return o2.concat(o3, o4, o5);\n};\nvar getPitches = function () { return ([\n    { label: 'C', name: 'C', color: 'white' },\n    { label: 'Db', name: 'Db', color: 'black' },\n    { label: 'D', name: 'D', color: 'white' },\n    { label: 'Eb', name: 'Eb', color: 'black' },\n    { label: 'E', name: 'E', color: 'white' },\n    { label: 'F', name: 'F', color: 'white' },\n    { label: 'Gb', name: 'Gb', color: 'black' },\n    { label: 'G', name: 'G', color: 'white' },\n    { label: 'Ab', name: 'Ab', color: 'black' },\n    { label: 'A', name: 'A', color: 'white' },\n    { label: 'Bb', name: 'Bb', color: 'black' },\n    { label: 'B', name: 'B', color: 'white' }\n]); };\n/**\n * Get a range of octaves with pitches\n * @return {Array} Array of pitch arrays\n */\nvar getOctavesOfPianoNotes = function () {\n    var pitches = getPitches();\n    var octaves = [[], [], []];\n    // Add notes for 3rd 4th and 5th octave in one loop\n    pitches.forEach(function (pitch) {\n        octaves[0].push(Object.assign({}, pitch, { note: pitch.label + 3 }));\n        octaves[1].push(Object.assign({}, pitch, { note: pitch.label + 4 }));\n        octaves[2].push(Object.assign({}, pitch, { note: pitch.label + 5 }));\n    });\n    return octaves;\n};\nvar getTuningsForGuitar = function () { return ([\n    { label: 'Regular', 'display': 'EBGDAE', strings: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'], tuningIdx: 0, name: 0 },\n    { label: 'Dropped D', 'display': 'EBGDAD', strings: ['E4', 'B3', 'G3', 'D3', 'A2', 'D2'], tuningIdx: 1, name: 1 },\n    { label: 'Double dropped D', display: 'DADGBD', strings: ['D4', 'A3', 'D3', 'G3', 'B2', 'D2'], tuningIdx: 2, name: 2 },\n    { label: 'Drop C', 'display': 'DAFCGC', strings: ['D4', 'A3', 'F3', 'C3', 'G2', 'C2'], tuningIdx: 3, name: 3 },\n    { label: 'Open G', 'display': 'DGDGBD', strings: ['D4', 'G3', 'D3', 'G3', 'B2', 'D2'], tuningIdx: 4, name: 4 }\n]); };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS50cz9mZTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNjYWxlcywgc2NhbGUsIGNob3JkLCBjaG9yZHMgfSBmcm9tICdzY3JpYmJsZXR1bmUnO1xuZXhwb3J0IHZhciBnZXRTY2FsZU5hbWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHNjYWxlcygpLm1hcChmdW5jdGlvbiAoc2NhbGUpIHsgcmV0dXJuICh7XG4gICAgbmFtZTogc2NhbGUsXG4gICAgbGFiZWw6IHNjYWxlWzBdLnRvVXBwZXJDYXNlKCkgKyBzY2FsZS5zbGljZSgxKVxufSk7IH0pKTsgfTtcbmV4cG9ydCB2YXIgZ2V0Q2hvcmROYW1lcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChjaG9yZHMoKS5tYXAoZnVuY3Rpb24gKGNob3JkKSB7IHJldHVybiAoe1xuICAgIG5hbWU6IGNob3JkLFxuICAgIGxhYmVsOiBjaG9yZFxufSk7IH0pKTsgfTtcbmV4cG9ydCB2YXIgc2hhcnBzVG9GbGF0cyA9IGZ1bmN0aW9uIChub3RlKSB7XG4gICAgaWYgKCFub3RlLmluY2x1ZGVzKCcjJykpIHtcbiAgICAgICAgcmV0dXJuIG5vdGU7XG4gICAgfVxuICAgIHZhciBub3RlTmFtZSA9IG5vdGUucmVwbGFjZSgvXFxkLywgJycpO1xuICAgIHZhciBzaGFycHNUb0ZsYXRzTWFwID0ge1xuICAgICAgICAnQyMnOiAnRGInLFxuICAgICAgICAnRCMnOiAnRWInLFxuICAgICAgICAnRiMnOiAnR2InLFxuICAgICAgICAnRyMnOiAnQWInLFxuICAgICAgICAnQSMnOiAnQmInXG4gICAgfTtcbiAgICByZXR1cm4gbm90ZS5yZXBsYWNlKG5vdGVOYW1lLCBzaGFycHNUb0ZsYXRzTWFwW25vdGVOYW1lXSk7XG59O1xuZXhwb3J0IHZhciBnZXRTY2FsZSA9IGZ1bmN0aW9uIChyb290Tm90ZSwgc2NhbGVOYW1lKSB7XG4gICAgLy8gY29uY2F0ZW5hdGUgc2NhbGVzIGZyb20gb2N0YXZlIHJhbmdlIDEgdG8gNlxuICAgIHZhciBvMSA9IHNjYWxlKHJvb3ROb3RlICsgMSArICcgJyArIHNjYWxlTmFtZS50b0xvd2VyQ2FzZSgpKS5tYXAoc2hhcnBzVG9GbGF0cyk7XG4gICAgdmFyIG8yID0gc2NhbGUocm9vdE5vdGUgKyAyICsgJyAnICsgc2NhbGVOYW1lLnRvTG93ZXJDYXNlKCkpLm1hcChzaGFycHNUb0ZsYXRzKTtcbiAgICB2YXIgbzMgPSBzY2FsZShyb290Tm90ZSArIDMgKyAnICcgKyBzY2FsZU5hbWUudG9Mb3dlckNhc2UoKSkubWFwKHNoYXJwc1RvRmxhdHMpO1xuICAgIHZhciBvNCA9IHNjYWxlKHJvb3ROb3RlICsgNCArICcgJyArIHNjYWxlTmFtZS50b0xvd2VyQ2FzZSgpKS5tYXAoc2hhcnBzVG9GbGF0cyk7XG4gICAgdmFyIG81ID0gc2NhbGUocm9vdE5vdGUgKyA1ICsgJyAnICsgc2NhbGVOYW1lLnRvTG93ZXJDYXNlKCkpLm1hcChzaGFycHNUb0ZsYXRzKTtcbiAgICB2YXIgbzYgPSBzY2FsZShyb290Tm90ZSArIDYgKyAnICcgKyBzY2FsZU5hbWUudG9Mb3dlckNhc2UoKSkubWFwKHNoYXJwc1RvRmxhdHMpO1xuICAgIHJldHVybiBvMi5jb25jYXQobzMsIG80LCBvNSwgbzYpO1xufTtcbmV4cG9ydCB2YXIgZ2V0Q2hvcmQgPSBmdW5jdGlvbiAoY2hvcmROYW1lKSB7XG4gICAgLy8gY29uY2F0ZW5hdGUgY2hvcmRzIGZyb20gb2N0YXZlIHJhbmdlIDIgdG8gNVxuICAgIHZhciBvMiA9IGNob3JkKGNob3JkTmFtZSArICctMicpO1xuICAgIHZhciBvMyA9IGNob3JkKGNob3JkTmFtZSArICctMycpO1xuICAgIHZhciBvNCA9IGNob3JkKGNob3JkTmFtZSArICctNCcpO1xuICAgIHZhciBvNSA9IGNob3JkKGNob3JkTmFtZSArICctNScpO1xuICAgIHJldHVybiBvMi5jb25jYXQobzMsIG80LCBvNSk7XG59O1xuZXhwb3J0IHZhciBnZXRQaXRjaGVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKFtcbiAgICB7IGxhYmVsOiAnQycsIG5hbWU6ICdDJywgY29sb3I6ICd3aGl0ZScgfSxcbiAgICB7IGxhYmVsOiAnRGInLCBuYW1lOiAnRGInLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgIHsgbGFiZWw6ICdEJywgbmFtZTogJ0QnLCBjb2xvcjogJ3doaXRlJyB9LFxuICAgIHsgbGFiZWw6ICdFYicsIG5hbWU6ICdFYicsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgeyBsYWJlbDogJ0UnLCBuYW1lOiAnRScsIGNvbG9yOiAnd2hpdGUnIH0sXG4gICAgeyBsYWJlbDogJ0YnLCBuYW1lOiAnRicsIGNvbG9yOiAnd2hpdGUnIH0sXG4gICAgeyBsYWJlbDogJ0diJywgbmFtZTogJ0diJywgY29sb3I6ICdibGFjaycgfSxcbiAgICB7IGxhYmVsOiAnRycsIG5hbWU6ICdHJywgY29sb3I6ICd3aGl0ZScgfSxcbiAgICB7IGxhYmVsOiAnQWInLCBuYW1lOiAnQWInLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgIHsgbGFiZWw6ICdBJywgbmFtZTogJ0EnLCBjb2xvcjogJ3doaXRlJyB9LFxuICAgIHsgbGFiZWw6ICdCYicsIG5hbWU6ICdCYicsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgeyBsYWJlbDogJ0InLCBuYW1lOiAnQicsIGNvbG9yOiAnd2hpdGUnIH1cbl0pOyB9O1xuLyoqXG4gKiBHZXQgYSByYW5nZSBvZiBvY3RhdmVzIHdpdGggcGl0Y2hlc1xuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHBpdGNoIGFycmF5c1xuICovXG5leHBvcnQgdmFyIGdldE9jdGF2ZXNPZlBpYW5vTm90ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBpdGNoZXMgPSBnZXRQaXRjaGVzKCk7XG4gICAgdmFyIG9jdGF2ZXMgPSBbW10sIFtdLCBbXV07XG4gICAgLy8gQWRkIG5vdGVzIGZvciAzcmQgNHRoIGFuZCA1dGggb2N0YXZlIGluIG9uZSBsb29wXG4gICAgcGl0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChwaXRjaCkge1xuICAgICAgICBvY3RhdmVzWzBdLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgcGl0Y2gsIHsgbm90ZTogcGl0Y2gubGFiZWwgKyAzIH0pKTtcbiAgICAgICAgb2N0YXZlc1sxXS5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHBpdGNoLCB7IG5vdGU6IHBpdGNoLmxhYmVsICsgNCB9KSk7XG4gICAgICAgIG9jdGF2ZXNbMl0ucHVzaChPYmplY3QuYXNzaWduKHt9LCBwaXRjaCwgeyBub3RlOiBwaXRjaC5sYWJlbCArIDUgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBvY3RhdmVzO1xufTtcbmV4cG9ydCB2YXIgZ2V0VHVuaW5nc0Zvckd1aXRhciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChbXG4gICAgeyBsYWJlbDogJ1JlZ3VsYXInLCAnZGlzcGxheSc6ICdFQkdEQUUnLCBzdHJpbmdzOiBbJ0U0JywgJ0IzJywgJ0czJywgJ0QzJywgJ0EyJywgJ0UyJ10sIHR1bmluZ0lkeDogMCwgbmFtZTogMCB9LFxuICAgIHsgbGFiZWw6ICdEcm9wcGVkIEQnLCAnZGlzcGxheSc6ICdFQkdEQUQnLCBzdHJpbmdzOiBbJ0U0JywgJ0IzJywgJ0czJywgJ0QzJywgJ0EyJywgJ0QyJ10sIHR1bmluZ0lkeDogMSwgbmFtZTogMSB9LFxuICAgIHsgbGFiZWw6ICdEb3VibGUgZHJvcHBlZCBEJywgZGlzcGxheTogJ0RBREdCRCcsIHN0cmluZ3M6IFsnRDQnLCAnQTMnLCAnRDMnLCAnRzMnLCAnQjInLCAnRDInXSwgdHVuaW5nSWR4OiAyLCBuYW1lOiAyIH0sXG4gICAgeyBsYWJlbDogJ0Ryb3AgQycsICdkaXNwbGF5JzogJ0RBRkNHQycsIHN0cmluZ3M6IFsnRDQnLCAnQTMnLCAnRjMnLCAnQzMnLCAnRzInLCAnQzInXSwgdHVuaW5nSWR4OiAzLCBuYW1lOiAzIH0sXG4gICAgeyBsYWJlbDogJ09wZW4gRycsICdkaXNwbGF5JzogJ0RHREdCRCcsIHN0cmluZ3M6IFsnRDQnLCAnRzMnLCAnRDMnLCAnRzMnLCAnQjInLCAnRDInXSwgdHVuaW5nSWR4OiA0LCBuYW1lOiA0IH1cbl0pOyB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.ts\n");

/***/ }),

/***/ "./src/components/Dropdown/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Dropdown/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\n\n/**\n * @param {Array} data A list of (object) items that have the name and value of the option to be displayed\n * @param {Function} onChangeEventHandler A function that will be triggered for the onChange event of the dropdown\n * @param {String} controlType A string that signifies what sort of control this dropdown is (e.g. scale, chord, notesType etc)\n * @param {String} selectedValue The value that will determine which option of this dropdown will be shown as selected\n * @param {Function} dispatch The dispatch function to be passed on to the action creator\n */\nvar Dropdown = function (_a) {\n    var data = _a.data, onChangeEventHandler = _a.onChangeEventHandler, controlType = _a.controlType, selectedValue = _a.selectedValue, dispatch = _a.dispatch;\n    var list = data.map(function (item) { return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"option\", { value: item.label, key: item.label }, item.label); });\n    var localOnChangeHandler = function (e) {\n        var dataObj = {};\n        dataObj[e.target.dataset.controlType] = e.target.value;\n        onChangeEventHandler(dispatch, dataObj);\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"select\", { onChange: localOnChangeHandler.bind(_this), \"data-control-type\": controlType, value: selectedValue }, list));\n};\n// Use the default mapDispatchToProps by not passing it which is basically the same as passing dispatch => ({ dispatch })\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])()(Dropdown));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9pbmRleC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9pbmRleC50c3g/NzUzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3RoaXMgPSB0aGlzO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vKipcbiAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgQSBsaXN0IG9mIChvYmplY3QpIGl0ZW1zIHRoYXQgaGF2ZSB0aGUgbmFtZSBhbmQgdmFsdWUgb2YgdGhlIG9wdGlvbiB0byBiZSBkaXNwbGF5ZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ2hhbmdlRXZlbnRIYW5kbGVyIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBmb3IgdGhlIG9uQ2hhbmdlIGV2ZW50IG9mIHRoZSBkcm9wZG93blxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRyb2xUeXBlIEEgc3RyaW5nIHRoYXQgc2lnbmlmaWVzIHdoYXQgc29ydCBvZiBjb250cm9sIHRoaXMgZHJvcGRvd24gaXMgKGUuZy4gc2NhbGUsIGNob3JkLCBub3Rlc1R5cGUgZXRjKVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdGVkVmFsdWUgVGhlIHZhbHVlIHRoYXQgd2lsbCBkZXRlcm1pbmUgd2hpY2ggb3B0aW9uIG9mIHRoaXMgZHJvcGRvd24gd2lsbCBiZSBzaG93biBhcyBzZWxlY3RlZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGRpc3BhdGNoIGZ1bmN0aW9uIHRvIGJlIHBhc3NlZCBvbiB0byB0aGUgYWN0aW9uIGNyZWF0b3JcbiAqL1xudmFyIERyb3Bkb3duID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGRhdGEgPSBfYS5kYXRhLCBvbkNoYW5nZUV2ZW50SGFuZGxlciA9IF9hLm9uQ2hhbmdlRXZlbnRIYW5kbGVyLCBjb250cm9sVHlwZSA9IF9hLmNvbnRyb2xUeXBlLCBzZWxlY3RlZFZhbHVlID0gX2Euc2VsZWN0ZWRWYWx1ZSwgZGlzcGF0Y2ggPSBfYS5kaXNwYXRjaDtcbiAgICB2YXIgbGlzdCA9IGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IGl0ZW0ubGFiZWwsIGtleTogaXRlbS5sYWJlbCB9LCBpdGVtLmxhYmVsKTsgfSk7XG4gICAgdmFyIGxvY2FsT25DaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGRhdGFPYmogPSB7fTtcbiAgICAgICAgZGF0YU9ialtlLnRhcmdldC5kYXRhc2V0LmNvbnRyb2xUeXBlXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBvbkNoYW5nZUV2ZW50SGFuZGxlcihkaXNwYXRjaCwgZGF0YU9iaik7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBvbkNoYW5nZTogbG9jYWxPbkNoYW5nZUhhbmRsZXIuYmluZChfdGhpcyksIFwiZGF0YS1jb250cm9sLXR5cGVcIjogY29udHJvbFR5cGUsIHZhbHVlOiBzZWxlY3RlZFZhbHVlIH0sIGxpc3QpKTtcbn07XG4vLyBVc2UgdGhlIGRlZmF1bHQgbWFwRGlzcGF0Y2hUb1Byb3BzIGJ5IG5vdCBwYXNzaW5nIGl0IHdoaWNoIGlzIGJhc2ljYWxseSB0aGUgc2FtZSBhcyBwYXNzaW5nIGRpc3BhdGNoID0+ICh7IGRpc3BhdGNoIH0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoRHJvcGRvd24pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Dropdown/index.tsx\n");

/***/ }),

/***/ "./src/components/Menu/Menu.less":
/*!***************************************!*\
  !*** ./src/components/Menu/Menu.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./Menu.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/Menu/Menu.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUubGVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUvTWVudS5sZXNzPzk4MmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01lbnUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVudS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVudS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Menu/Menu.less\n");

/***/ }),

/***/ "./src/components/Menu/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Menu/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _NotesSetter_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NotesSetter/index */ \"./src/components/NotesSetter/index.tsx\");\n/* harmony import */ var _Menu_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.less */ \"./src/components/Menu/Menu.less\");\n/* harmony import */ var _Menu_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Menu_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar Menu = function () {\n    var currentSelection = location.hash.replace('#/', '');\n    var guitarSelected = currentSelection === 'guitar' ? 'selected' : '';\n    var pianoSelected = currentSelection === 'piano' ? 'selected' : '';\n    var keyboardSelected = currentSelection === 'keyboard' ? 'selected' : '';\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", { className: \"menu\" },\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", null, \"Generate chord & scale charts to practice\"),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"nav\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"ul\", null,\n                react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", { className: guitarSelected },\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: \"/guitar\" }, \"Guitar\")),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", { className: pianoSelected },\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: \"/piano\" }, \"Piano\")),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", { className: keyboardSelected },\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: \"/keyboard\" }, \"Keyboard\")))),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_NotesSetter_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L2luZGV4LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUvaW5kZXgudHN4Pzc2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBOb3Rlc1NldHRlciBmcm9tICcuLi9Ob3Rlc1NldHRlci9pbmRleCc7XG5pbXBvcnQgJy4vTWVudS5sZXNzJztcbnZhciBNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdXJyZW50U2VsZWN0aW9uID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjLycsICcnKTtcbiAgICB2YXIgZ3VpdGFyU2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0aW9uID09PSAnZ3VpdGFyJyA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICB2YXIgcGlhbm9TZWxlY3RlZCA9IGN1cnJlbnRTZWxlY3Rpb24gPT09ICdwaWFubycgPyAnc2VsZWN0ZWQnIDogJyc7XG4gICAgdmFyIGtleWJvYXJkU2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0aW9uID09PSAna2V5Ym9hcmQnID8gJ3NlbGVjdGVkJyA6ICcnO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJtZW51XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJHZW5lcmF0ZSBjaG9yZCAmIHNjYWxlIGNoYXJ0cyB0byBwcmFjdGljZVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgY2xhc3NOYW1lOiBndWl0YXJTZWxlY3RlZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IFwiL2d1aXRhclwiIH0sIFwiR3VpdGFyXCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBjbGFzc05hbWU6IHBpYW5vU2VsZWN0ZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiBcIi9waWFub1wiIH0sIFwiUGlhbm9cIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzTmFtZToga2V5Ym9hcmRTZWxlY3RlZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IFwiL2tleWJvYXJkXCIgfSwgXCJLZXlib2FyZFwiKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOb3Rlc1NldHRlciwgbnVsbCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu/index.tsx\n");

/***/ }),

/***/ "./src/components/NotesSetter/NotesSetter.less":
/*!*****************************************************!*\
  !*** ./src/components/NotesSetter/NotesSetter.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./NotesSetter.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/NotesSetter/NotesSetter.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ob3Rlc1NldHRlci9Ob3Rlc1NldHRlci5sZXNzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90ZXNTZXR0ZXIvTm90ZXNTZXR0ZXIubGVzcz82ODBlIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3Rlc1NldHRlci5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3Rlc1NldHRlci5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90ZXNTZXR0ZXIubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NotesSetter/NotesSetter.less\n");

/***/ }),

/***/ "./src/components/NotesSetter/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/NotesSetter/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_creators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/creators */ \"./src/actions/creators.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./src/api.ts\");\n/* harmony import */ var _Dropdown_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dropdown/index */ \"./src/components/Dropdown/index.tsx\");\n/* harmony import */ var _NotesSetter_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotesSetter.less */ \"./src/components/NotesSetter/NotesSetter.less\");\n/* harmony import */ var _NotesSetter_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NotesSetter_less__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar NotesSetter = function (_a) {\n    var currentScale = _a.currentScale, currentChord = _a.currentChord, notesType = _a.notesType, rootNote = _a.rootNote;\n    var notesTypeOptions = [{\n            name: 'scale',\n            label: 'scale'\n        }, {\n            name: 'chord',\n            label: 'chord'\n        }];\n    var getChordScaleDropdown = function () {\n        var notesTypeData = Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"getScaleNames\"])();\n        var ddType = 'scale';\n        var selectedValue = currentScale;\n        if (notesType === 'chord') {\n            notesTypeData = Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"getChordNames\"])();\n            ddType = 'chord';\n            selectedValue = currentChord;\n        }\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_Dropdown_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { data: notesTypeData, controlType: ddType, onChangeEventHandler: _actions_creators__WEBPACK_IMPORTED_MODULE_2__[\"controlChanged\"], selectedValue: selectedValue });\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"ul\", { className: \"notesSetter\" },\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_Dropdown_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { data: Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"getPitches\"])(), controlType: \"rootNote\", onChangeEventHandler: _actions_creators__WEBPACK_IMPORTED_MODULE_2__[\"controlChanged\"], selectedValue: rootNote })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, getChordScaleDropdown()),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_Dropdown_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { data: notesTypeOptions, controlType: \"notesType\", onChangeEventHandler: _actions_creators__WEBPACK_IMPORTED_MODULE_2__[\"controlChanged\"], selectedValue: notesType }))));\n};\nvar mapStateToProps = function (state) { return ({\n    scales: state.scales,\n    chords: state.chords,\n    notesType: state.notesType,\n    rootNote: state.rootNote,\n    currentScale: state.scale,\n    currentChord: state.chord\n}); };\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(NotesSetter));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ob3Rlc1NldHRlci9pbmRleC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3Rlc1NldHRlci9pbmRleC50c3g/ZWQzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNvbnRyb2xDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jcmVhdG9ycyc7XG5pbXBvcnQgeyBnZXRTY2FsZU5hbWVzLCBnZXRDaG9yZE5hbWVzLCBnZXRQaXRjaGVzIH0gZnJvbSAnLi4vLi4vYXBpJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi9Ecm9wZG93bi9pbmRleCc7XG5pbXBvcnQgJy4vTm90ZXNTZXR0ZXIubGVzcyc7XG52YXIgTm90ZXNTZXR0ZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY3VycmVudFNjYWxlID0gX2EuY3VycmVudFNjYWxlLCBjdXJyZW50Q2hvcmQgPSBfYS5jdXJyZW50Q2hvcmQsIG5vdGVzVHlwZSA9IF9hLm5vdGVzVHlwZSwgcm9vdE5vdGUgPSBfYS5yb290Tm90ZTtcbiAgICB2YXIgbm90ZXNUeXBlT3B0aW9ucyA9IFt7XG4gICAgICAgICAgICBuYW1lOiAnc2NhbGUnLFxuICAgICAgICAgICAgbGFiZWw6ICdzY2FsZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Nob3JkJyxcbiAgICAgICAgICAgIGxhYmVsOiAnY2hvcmQnXG4gICAgICAgIH1dO1xuICAgIHZhciBnZXRDaG9yZFNjYWxlRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub3Rlc1R5cGVEYXRhID0gZ2V0U2NhbGVOYW1lcygpO1xuICAgICAgICB2YXIgZGRUeXBlID0gJ3NjYWxlJztcbiAgICAgICAgdmFyIHNlbGVjdGVkVmFsdWUgPSBjdXJyZW50U2NhbGU7XG4gICAgICAgIGlmIChub3Rlc1R5cGUgPT09ICdjaG9yZCcpIHtcbiAgICAgICAgICAgIG5vdGVzVHlwZURhdGEgPSBnZXRDaG9yZE5hbWVzKCk7XG4gICAgICAgICAgICBkZFR5cGUgPSAnY2hvcmQnO1xuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IGN1cnJlbnRDaG9yZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wZG93biwgeyBkYXRhOiBub3Rlc1R5cGVEYXRhLCBjb250cm9sVHlwZTogZGRUeXBlLCBvbkNoYW5nZUV2ZW50SGFuZGxlcjogY29udHJvbENoYW5nZWQsIHNlbGVjdGVkVmFsdWU6IHNlbGVjdGVkVmFsdWUgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogXCJub3Rlc1NldHRlclwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wZG93biwgeyBkYXRhOiBnZXRQaXRjaGVzKCksIGNvbnRyb2xUeXBlOiBcInJvb3ROb3RlXCIsIG9uQ2hhbmdlRXZlbnRIYW5kbGVyOiBjb250cm9sQ2hhbmdlZCwgc2VsZWN0ZWRWYWx1ZTogcm9vdE5vdGUgfSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgZ2V0Q2hvcmRTY2FsZURyb3Bkb3duKCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24sIHsgZGF0YTogbm90ZXNUeXBlT3B0aW9ucywgY29udHJvbFR5cGU6IFwibm90ZXNUeXBlXCIsIG9uQ2hhbmdlRXZlbnRIYW5kbGVyOiBjb250cm9sQ2hhbmdlZCwgc2VsZWN0ZWRWYWx1ZTogbm90ZXNUeXBlIH0pKSkpO1xufTtcbnZhciBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuICh7XG4gICAgc2NhbGVzOiBzdGF0ZS5zY2FsZXMsXG4gICAgY2hvcmRzOiBzdGF0ZS5jaG9yZHMsXG4gICAgbm90ZXNUeXBlOiBzdGF0ZS5ub3Rlc1R5cGUsXG4gICAgcm9vdE5vdGU6IHN0YXRlLnJvb3ROb3RlLFxuICAgIGN1cnJlbnRTY2FsZTogc3RhdGUuc2NhbGUsXG4gICAgY3VycmVudENob3JkOiBzdGF0ZS5jaG9yZFxufSk7IH07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTm90ZXNTZXR0ZXIpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NotesSetter/index.tsx\n");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/root */ \"./src/reducers/root.ts\");\n/* harmony import */ var _actions_creators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/creators */ \"./src/actions/creators.ts\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n\n\n\n\n\n\n\n\n// const store = createStore(rootReducer,\n// \twindow.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(_reducers_root__WEBPACK_IMPORTED_MODULE_4__[\"rootReducer\"]);\nvar render = function () {\n    react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render((react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"HashRouter\"], null,\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], { store: store },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)))), document.getElementById('root'));\n};\nstore.subscribe(render);\nObject(_actions_creators__WEBPACK_IMPORTED_MODULE_5__[\"initApp\"])(store.dispatch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeD9lZGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEhhc2hSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvcm9vdCc7XG5pbXBvcnQgeyBpbml0QXBwIH0gZnJvbSAnLi9hY3Rpb25zL2NyZWF0b3JzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuLy8gY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcixcbi8vIFx0d2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSk7XG52YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcik7XG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIFJlYWN0RE9NLnJlbmRlcigoUmVhY3QuY3JlYXRlRWxlbWVudChIYXNoUm91dGVyLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFByb3ZpZGVyLCB7IHN0b3JlOiBzdG9yZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpKSkpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbn07XG5zdG9yZS5zdWJzY3JpYmUocmVuZGVyKTtcbmluaXRBcHAoc3RvcmUuZGlzcGF0Y2gpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.tsx\n");

/***/ }),

/***/ "./src/reducers/root.ts":
/*!******************************!*\
  !*** ./src/reducers/root.ts ***!
  \******************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootReducer\", function() { return rootReducer; });\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ \"./src/actions/constants.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ \"./src/api.ts\");\n\n\nvar initialState = {\n    octavesOfPianoNotes: Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"getOctavesOfPianoNotes\"])(),\n    scale: 'Major',\n    chord: 'M',\n    notesType: 'scale',\n    rootNote: 'C',\n    notes: [],\n    fretboardIsFlipped: false,\n    selectedTuningIdx: 0\n};\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case _actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOAD_NOTES:\n            var newState_1 = Object.assign({}, state, action.data);\n            if (newState_1.notesType === 'chord') {\n                newState_1.notes = Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"getChord\"])(newState_1.rootNote + newState_1.chord);\n            }\n            else {\n                newState_1.notes = Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"getScale\"])(newState_1.rootNote, newState_1.scale);\n            }\n            newState_1.octavesOfPianoNotes.forEach(function (oct) {\n                oct.forEach(function (key) {\n                    key.highlight = newState_1.notes.indexOf(key.note) > -1;\n                    key.rootNote = key.name === newState_1.rootNote;\n                });\n            });\n            return newState_1;\n        case _actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FLIP_FRETBOARD:\n            return Object.assign({}, state, { fretboardIsFlipped: !state.fretboardIsFlipped });\n        case _actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CHANGE_TUNING:\n            return Object.assign({}, state, action.data);\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvcm9vdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9yb290LnRzP2ZhNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9hY3Rpb25zL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRPY3RhdmVzT2ZQaWFub05vdGVzLCBnZXRDaG9yZCwgZ2V0U2NhbGUgfSBmcm9tICcuLi9hcGknO1xudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgICBvY3RhdmVzT2ZQaWFub05vdGVzOiBnZXRPY3RhdmVzT2ZQaWFub05vdGVzKCksXG4gICAgc2NhbGU6ICdNYWpvcicsXG4gICAgY2hvcmQ6ICdNJyxcbiAgICBub3Rlc1R5cGU6ICdzY2FsZScsXG4gICAgcm9vdE5vdGU6ICdDJyxcbiAgICBub3RlczogW10sXG4gICAgZnJldGJvYXJkSXNGbGlwcGVkOiBmYWxzZSxcbiAgICBzZWxlY3RlZFR1bmluZ0lkeDogMFxufTtcbmV4cG9ydCB2YXIgcm9vdFJlZHVjZXIgPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gaW5pdGlhbFN0YXRlOyB9XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGNvbnN0YW50cy5MT0FEX05PVEVTOlxuICAgICAgICAgICAgdmFyIG5ld1N0YXRlXzEgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlXzEubm90ZXNUeXBlID09PSAnY2hvcmQnKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGVfMS5ub3RlcyA9IGdldENob3JkKG5ld1N0YXRlXzEucm9vdE5vdGUgKyBuZXdTdGF0ZV8xLmNob3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlXzEubm90ZXMgPSBnZXRTY2FsZShuZXdTdGF0ZV8xLnJvb3ROb3RlLCBuZXdTdGF0ZV8xLnNjYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1N0YXRlXzEub2N0YXZlc09mUGlhbm9Ob3Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChvY3QpIHtcbiAgICAgICAgICAgICAgICBvY3QuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGtleS5oaWdobGlnaHQgPSBuZXdTdGF0ZV8xLm5vdGVzLmluZGV4T2Yoa2V5Lm5vdGUpID4gLTE7XG4gICAgICAgICAgICAgICAgICAgIGtleS5yb290Tm90ZSA9IGtleS5uYW1lID09PSBuZXdTdGF0ZV8xLnJvb3ROb3RlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVfMTtcbiAgICAgICAgY2FzZSBjb25zdGFudHMuRkxJUF9GUkVUQk9BUkQ6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZnJldGJvYXJkSXNGbGlwcGVkOiAhc3RhdGUuZnJldGJvYXJkSXNGbGlwcGVkIH0pO1xuICAgICAgICBjYXNlIGNvbnN0YW50cy5DSEFOR0VfVFVOSU5HOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/reducers/root.ts\n");

/***/ })

/******/ });