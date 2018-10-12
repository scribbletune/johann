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
/******/ 				var head = document.getElementsByTagName('head')[0];
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
/******/ 				head.appendChild(script);
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
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _AsyncComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AsyncComponent */ \"./src/AsyncComponent.js\");\n\n\n\n\n\nvar piano = function piano() {\n  return __webpack_require__.e(/*! import() | piano */ \"piano\").then(__webpack_require__.bind(null, /*! ./modules/Piano */ \"./src/modules/Piano/index.js\"));\n};\n\nvar guitar = function guitar() {\n  return __webpack_require__.e(/*! import() | guitar */ \"guitar\").then(__webpack_require__.bind(null, /*! ./modules/Guitar */ \"./src/modules/Guitar/index.js\"));\n};\n\nvar computerKeyboard = function computerKeyboard() {\n  return __webpack_require__.e(/*! import() | computerKeyboard */ \"computerKeyboard\").then(__webpack_require__.bind(null, /*! ./modules/ComputerKeyboard */ \"./src/modules/ComputerKeyboard/index.js\"));\n};\n\nvar App = function App() {\n  // Simple hack to get the current route\n  var mainClass = 'page';\n\n  if (location.hash === '#/') {\n    mainClass = 'home';\n  }\n\n  mainClass += ' app';\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"section\", {\n    className: mainClass\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", {\n    className: \"logo\"\n  }, \"Johann\")), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/guitar\",\n    exact: true,\n    component: function component() {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_AsyncComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        moduleProvider: guitar\n      });\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/piano\",\n    exact: true,\n    component: function component() {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_AsyncComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        moduleProvider: piano\n      });\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/keyboard\",\n    exact: true,\n    component: function component() {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_AsyncComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        moduleProvider: computerKeyboard\n      });\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcz9iZTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9jb21wb25lbnRzL01lbnUnO1xuaW1wb3J0IEFzeW5jQ29tcG9uZW50IGZyb20gJy4vQXN5bmNDb21wb25lbnQnO1xuXG5jb25zdCBwaWFubyA9ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBpYW5vXCIgKi8gJy4vbW9kdWxlcy9QaWFubycpO1xuY29uc3QgZ3VpdGFyID0gKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZ3VpdGFyXCIgKi8gJy4vbW9kdWxlcy9HdWl0YXInKTtcbmNvbnN0IGNvbXB1dGVyS2V5Ym9hcmQgPSAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wdXRlcktleWJvYXJkXCIgKi8gJy4vbW9kdWxlcy9Db21wdXRlcktleWJvYXJkJyk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblx0Ly8gU2ltcGxlIGhhY2sgdG8gZ2V0IHRoZSBjdXJyZW50IHJvdXRlXG5cdGxldCBtYWluQ2xhc3MgPSAncGFnZSc7XG5cdGlmIChsb2NhdGlvbi5oYXNoID09PSAnIy8nKSB7XG5cdFx0bWFpbkNsYXNzID0gJ2hvbWUnO1xuXHR9XG5cblx0bWFpbkNsYXNzICs9ICcgYXBwJztcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e21haW5DbGFzc30+XG5cdFx0XHQ8TGluayB0bz1cIi9cIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImxvZ29cIj5Kb2hhbm48L2gxPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PE1lbnUgLz5cblx0XHRcdDxSb3V0ZSBwYXRoPScvZ3VpdGFyJyBleGFjdD17dHJ1ZX0gY29tcG9uZW50PXsoKSA9PiA8QXN5bmNDb21wb25lbnQgbW9kdWxlUHJvdmlkZXI9e2d1aXRhcn0gLz59IC8+XG5cdFx0XHQ8Um91dGUgcGF0aD0nL3BpYW5vJyBleGFjdD17dHJ1ZX0gY29tcG9uZW50PXsoKSA9PiA8QXN5bmNDb21wb25lbnQgbW9kdWxlUHJvdmlkZXI9e3BpYW5vfSAvPn0gLz5cblx0XHRcdDxSb3V0ZSBwYXRoPScva2V5Ym9hcmQnIGV4YWN0PXt0cnVlfSBjb21wb25lbnQ9eygpID0+IDxBc3luY0NvbXBvbmVudCBtb2R1bGVQcm92aWRlcj17Y29tcHV0ZXJLZXlib2FyZH0gLz59IC8+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ }),

/***/ "./src/AsyncComponent.js":
/*!*******************************!*\
  !*** ./src/AsyncComponent.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AsyncComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar AsyncComponent =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inherits(AsyncComponent, _PureComponent);\n\n  function AsyncComponent(props) {\n    var _this;\n\n    _classCallCheck(this, AsyncComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AsyncComponent).call(this, props));\n    _this.state = {\n      Component: null\n    };\n    return _this;\n  }\n\n  _createClass(AsyncComponent, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.state.Component) {\n        this.props.moduleProvider().then(function (_ref) {\n          var Component = _ref.Component;\n          return _this2.setState({\n            Component: Component\n          });\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var Component = this.state.Component;\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, Component ? react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(Component, null) : 'Loading');\n    }\n  }]);\n\n  return AsyncComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXN5bmNDb21wb25lbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXN5bmNDb21wb25lbnQuanM/YzFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXN5bmNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdENvbXBvbmVudDogbnVsbFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5Db21wb25lbnQpIHtcblx0XHRcdHRoaXMucHJvcHMubW9kdWxlUHJvdmlkZXIoKS50aGVuKCAoe0NvbXBvbmVudH0pID0+IHRoaXMuc2V0U3RhdGUoeyBDb21wb25lbnQgfSkpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IENvbXBvbmVudCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdHtDb21wb25lbnQgPyA8Q29tcG9uZW50IC8+IDogJ0xvYWRpbmcnfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBRUE7QUFLQTs7OztBQXJCQTtBQUNBO0FBREE7QUFzQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/AsyncComponent.js\n");

/***/ }),

/***/ "./src/actions/constants.js":
/*!**********************************!*\
  !*** ./src/actions/constants.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  LOAD_NOTES: 'LOAD_NOTES',\n  FLIP_FRETBOARD: 'FLIP_FRETBOARD',\n  CHANGE_TUNING: 'CHANGE_TUNING'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb25zdGFudHMuanM/NGQ0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cdExPQURfTk9URVM6ICdMT0FEX05PVEVTJyxcblx0RkxJUF9GUkVUQk9BUkQ6ICdGTElQX0ZSRVRCT0FSRCcsXG5cdENIQU5HRV9UVU5JTkc6ICdDSEFOR0VfVFVOSU5HJ1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/actions/constants.js\n");

/***/ }),

/***/ "./src/actions/creators.js":
/*!*********************************!*\
  !*** ./src/actions/creators.js ***!
  \*********************************/
/*! exports provided: initApp, controlChanged, flipFretboard, changeTuning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initApp\", function() { return initApp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlChanged\", function() { return controlChanged; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flipFretboard\", function() { return flipFretboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeTuning\", function() { return changeTuning; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/actions/constants.js\");\n\n\nvar initApp = function initApp(dispatch) {\n  return dispatch({\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOAD_NOTES\n  });\n};\n\nvar controlChanged = function controlChanged(dispatch, data) {\n  dispatch({\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOAD_NOTES,\n    data: data\n  });\n};\n\nvar flipFretboard = function flipFretboard(dispatch) {\n  dispatch({\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FLIP_FRETBOARD\n  });\n};\n\nvar changeTuning = function changeTuning(dispatch, data) {\n  dispatch({\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CHANGE_TUNING,\n    data: data\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy9jcmVhdG9ycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2NyZWF0b3JzLmpzPzhhYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRBcHAgPSAoZGlzcGF0Y2gpID0+IChkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5MT0FEX05PVEVTIH0pKTtcblxuY29uc3QgY29udHJvbENoYW5nZWQgPSAoZGlzcGF0Y2gsIGRhdGEpID0+IHtcblx0ZGlzcGF0Y2goe1xuXHRcdHR5cGU6IGNvbnN0YW50cy5MT0FEX05PVEVTLFxuXHRcdGRhdGFcblx0fSk7XG59O1xuXG5jb25zdCBmbGlwRnJldGJvYXJkID0gZGlzcGF0Y2ggPT4ge1xuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogY29uc3RhbnRzLkZMSVBfRlJFVEJPQVJEXG5cdH0pO1xufTtcblxuY29uc3QgY2hhbmdlVHVuaW5nID0gKGRpc3BhdGNoLCBkYXRhKSA9PiB7XG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiBjb25zdGFudHMuQ0hBTkdFX1RVTklORyxcblx0XHRkYXRhXG5cdH0pO1xufTtcblxuZXhwb3J0IHsgaW5pdEFwcCwgIGNvbnRyb2xDaGFuZ2VkLCBmbGlwRnJldGJvYXJkLCBjaGFuZ2VUdW5pbmcgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/actions/creators.js\n");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getScaleNames, getChordNames, sharpsToFlats, getScale, getChord, getPitches, getOctavesOfPianoNotes, getTuningsForGuitar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getScaleNames\", function() { return getScaleNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChordNames\", function() { return getChordNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sharpsToFlats\", function() { return sharpsToFlats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getScale\", function() { return getScale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChord\", function() { return getChord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPitches\", function() { return getPitches; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOctavesOfPianoNotes\", function() { return getOctavesOfPianoNotes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTuningsForGuitar\", function() { return getTuningsForGuitar; });\n/* harmony import */ var scribbletune__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scribbletune */ \"./node_modules/scribbletune/src/index.js\");\n/* harmony import */ var scribbletune__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scribbletune__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getScaleNames = function getScaleNames() {\n  return Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scales\"])().map(function (scale) {\n    return {\n      name: scale,\n      label: scale[0].toUpperCase() + scale.slice(1)\n    };\n  });\n};\nvar getChordNames = function getChordNames() {\n  return Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chords\"])().map(function (chord) {\n    return {\n      name: chord,\n      label: chord\n    };\n  });\n};\nvar sharpsToFlats = function sharpsToFlats(note) {\n  console.log(note);\n\n  if (!note.includes('#')) {\n    return note;\n  }\n\n  var noteName = note.replace(/\\d/, '');\n  var sharpsToFlatsMap = {\n    'C#': 'Db',\n    'D#': 'Eb',\n    'F#': 'Gb',\n    'G#': 'Ab',\n    'A#': 'Bb'\n  };\n  return note.replace(noteName, sharpsToFlatsMap[noteName]);\n};\nvar getScale = function getScale(rootNote, scaleName) {\n  // concatenate scales from octave range 1 to 6\n  var o1 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 1 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n  var o2 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 2 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n  var o3 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 3 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n  var o4 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 4 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n  var o5 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 5 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n  var o6 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"scale\"])(rootNote + 6 + ' ' + scaleName.toLowerCase()).map(sharpsToFlats);\n  return o2.concat(o3, o4, o5, o6);\n};\nvar getChord = function getChord(chordName) {\n  // concatenate chords from octave range 2 to 5\n  var o2 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chord\"])(chordName + '-2');\n  var o3 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chord\"])(chordName + '-3');\n  var o4 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chord\"])(chordName + '-4');\n  var o5 = Object(scribbletune__WEBPACK_IMPORTED_MODULE_0__[\"chord\"])(chordName + '-5');\n  return o2.concat(o3, o4, o5);\n};\nvar getPitches = function getPitches() {\n  return [{\n    label: 'C',\n    name: 'C',\n    color: 'white'\n  }, {\n    label: 'Db',\n    name: 'Db',\n    color: 'black'\n  }, {\n    label: 'D',\n    name: 'D',\n    color: 'white'\n  }, {\n    label: 'Eb',\n    name: 'Eb',\n    color: 'black'\n  }, {\n    label: 'E',\n    name: 'E',\n    color: 'white'\n  }, {\n    label: 'F',\n    name: 'F',\n    color: 'white'\n  }, {\n    label: 'Gb',\n    name: 'Gb',\n    color: 'black'\n  }, {\n    label: 'G',\n    name: 'G',\n    color: 'white'\n  }, {\n    label: 'Ab',\n    name: 'Ab',\n    color: 'black'\n  }, {\n    label: 'A',\n    name: 'A',\n    color: 'white'\n  }, {\n    label: 'Bb',\n    name: 'Bb',\n    color: 'black'\n  }, {\n    label: 'B',\n    name: 'B',\n    color: 'white'\n  }];\n};\n/**\n * Get a range of octaves with pitches\n * @return {Array} Array of pitch arrays\n */\n\nvar getOctavesOfPianoNotes = function getOctavesOfPianoNotes() {\n  var pitches = getPitches();\n  var octaves = [[], [], []]; // Add notes for 3rd 4th and 5th octave in one loop\n\n  pitches.forEach(function (pitch) {\n    octaves[0].push(Object.assign({}, pitch, {\n      note: pitch.label + 3\n    }));\n    octaves[1].push(Object.assign({}, pitch, {\n      note: pitch.label + 4\n    }));\n    octaves[2].push(Object.assign({}, pitch, {\n      note: pitch.label + 5\n    }));\n  });\n  return octaves;\n};\nvar getTuningsForGuitar = function getTuningsForGuitar() {\n  return [{\n    label: 'Regular',\n    'display': 'EBGDAE',\n    strings: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'],\n    tuningIdx: 0,\n    name: 0\n  }, {\n    label: 'Dropped D',\n    'display': 'EBGDAD',\n    strings: ['E4', 'B3', 'G3', 'D3', 'A2', 'D2'],\n    tuningIdx: 1,\n    name: 1\n  }, {\n    label: 'Double dropped D',\n    display: 'DADGBD',\n    strings: ['D4', 'A3', 'D3', 'G3', 'B2', 'D2'],\n    tuningIdx: 2,\n    name: 2\n  }, {\n    label: 'Drop C',\n    'display': 'DAFCGC',\n    strings: ['D4', 'A3', 'F3', 'C3', 'G2', 'C2'],\n    tuningIdx: 3,\n    name: 3\n  }, {\n    label: 'Open G',\n    'display': 'DGDGBD',\n    strings: ['D4', 'G3', 'D3', 'G3', 'B2', 'D2'],\n    tuningIdx: 4,\n    name: 4\n  }];\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2NhbGVzLCBzY2FsZSwgY2hvcmQsIGNob3Jkc30gZnJvbSAnc2NyaWJibGV0dW5lJztcblxuZXhwb3J0IGNvbnN0IGdldFNjYWxlTmFtZXMgPSAoKSA9PiAoc2NhbGVzKCkubWFwKHNjYWxlID0+ICh7XG5cdG5hbWU6IHNjYWxlLFxuXHRsYWJlbDogc2NhbGVbMF0udG9VcHBlckNhc2UoKSArIHNjYWxlLnNsaWNlKDEpXG59KSkpO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmROYW1lcyA9ICgpID0+IChjaG9yZHMoKS5tYXAoY2hvcmQgPT4gKHtcblx0bmFtZTogY2hvcmQsXG5cdGxhYmVsOiBjaG9yZFxufSkpKTtcblxuZXhwb3J0IGNvbnN0IHNoYXJwc1RvRmxhdHMgPSBub3RlID0+IHtcblx0Y29uc29sZS5sb2cobm90ZSk7XG5cdGlmICghbm90ZS5pbmNsdWRlcygnIycpKSB7XG5cdFx0cmV0dXJuIG5vdGU7XG5cdH1cblxuXHRsZXQgbm90ZU5hbWUgPSBub3RlLnJlcGxhY2UoL1xcZC8sICcnKTtcblx0Y29uc3Qgc2hhcnBzVG9GbGF0c01hcCA9IHtcblx0XHQnQyMnOiAnRGInLFxuXHRcdCdEIyc6ICdFYicsXG5cdFx0J0YjJzogJ0diJyxcblx0XHQnRyMnOiAnQWInLFxuXHRcdCdBIyc6ICdCYidcblx0fTtcblxuXHRyZXR1cm4gbm90ZS5yZXBsYWNlKG5vdGVOYW1lLCBzaGFycHNUb0ZsYXRzTWFwW25vdGVOYW1lXSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2NhbGUgPSAocm9vdE5vdGUsIHNjYWxlTmFtZSkgPT4ge1xuXHQvLyBjb25jYXRlbmF0ZSBzY2FsZXMgZnJvbSBvY3RhdmUgcmFuZ2UgMSB0byA2XG5cdHZhciBvMSA9IHNjYWxlKHJvb3ROb3RlICsgMSArICcgJyArIHNjYWxlTmFtZS50b0xvd2VyQ2FzZSgpKS5tYXAoc2hhcnBzVG9GbGF0cyk7XG5cdHZhciBvMiA9IHNjYWxlKHJvb3ROb3RlICsgMiArICcgJyArIHNjYWxlTmFtZS50b0xvd2VyQ2FzZSgpKS5tYXAoc2hhcnBzVG9GbGF0cyk7XG5cdHZhciBvMyA9IHNjYWxlKHJvb3ROb3RlICsgMyArICcgJyArIHNjYWxlTmFtZS50b0xvd2VyQ2FzZSgpKS5tYXAoc2hhcnBzVG9GbGF0cyk7XG5cdHZhciBvNCA9IHNjYWxlKHJvb3ROb3RlICsgNCArICcgJyArIHNjYWxlTmFtZS50b0xvd2VyQ2FzZSgpKS5tYXAoc2hhcnBzVG9GbGF0cyk7XG5cdHZhciBvNSA9IHNjYWxlKHJvb3ROb3RlICsgNSArICcgJyArIHNjYWxlTmFtZS50b0xvd2VyQ2FzZSgpKS5tYXAoc2hhcnBzVG9GbGF0cyk7XG5cdHZhciBvNiA9IHNjYWxlKHJvb3ROb3RlICsgNiArICcgJyArIHNjYWxlTmFtZS50b0xvd2VyQ2FzZSgpKS5tYXAoc2hhcnBzVG9GbGF0cyk7XG5cdHJldHVybiBvMi5jb25jYXQobzMsIG80LCBvNSwgbzYpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENob3JkID0gKGNob3JkTmFtZSkgPT4ge1xuXHQvLyBjb25jYXRlbmF0ZSBjaG9yZHMgZnJvbSBvY3RhdmUgcmFuZ2UgMiB0byA1XG5cdHZhciBvMiA9IGNob3JkKGNob3JkTmFtZSArICctMicpO1xuXHR2YXIgbzMgPSBjaG9yZChjaG9yZE5hbWUgKyAnLTMnKTtcblx0dmFyIG80ID0gY2hvcmQoY2hvcmROYW1lICsgJy00Jyk7XG5cdHZhciBvNSA9IGNob3JkKGNob3JkTmFtZSArICctNScpO1xuXHRyZXR1cm4gbzIuY29uY2F0KG8zLCBvNCwgbzUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBpdGNoZXMgPSAoKSA9PiAoW1xuXHR7bGFiZWw6ICdDJywgbmFtZTogJ0MnLCBjb2xvcjogJ3doaXRlJ30sXG5cdHtsYWJlbDogJ0RiJywgbmFtZTogJ0RiJywgY29sb3I6ICdibGFjayd9LFxuXHR7bGFiZWw6ICdEJywgbmFtZTogJ0QnLCBjb2xvcjogJ3doaXRlJ30sXG5cdHtsYWJlbDogJ0ViJywgbmFtZTogJ0ViJywgY29sb3I6ICdibGFjayd9LFxuXHR7bGFiZWw6ICdFJywgbmFtZTogJ0UnLCBjb2xvcjogJ3doaXRlJ30sXG5cdHtsYWJlbDogJ0YnLCBuYW1lOiAnRicsIGNvbG9yOiAnd2hpdGUnfSxcblx0e2xhYmVsOiAnR2InLCBuYW1lOiAnR2InLCBjb2xvcjogJ2JsYWNrJ30sXG5cdHtsYWJlbDogJ0cnLCBuYW1lOiAnRycsIGNvbG9yOiAnd2hpdGUnfSxcblx0e2xhYmVsOiAnQWInLCBuYW1lOiAnQWInLCBjb2xvcjogJ2JsYWNrJ30sXG5cdHtsYWJlbDogJ0EnLCBuYW1lOiAnQScsIGNvbG9yOiAnd2hpdGUnfSxcblx0e2xhYmVsOiAnQmInLCBuYW1lOiAnQmInLCBjb2xvcjogJ2JsYWNrJ30sXG5cdHtsYWJlbDogJ0InLCBuYW1lOiAnQicsIGNvbG9yOiAnd2hpdGUnfVxuXSk7XG5cbi8qKlxuICogR2V0IGEgcmFuZ2Ugb2Ygb2N0YXZlcyB3aXRoIHBpdGNoZXNcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBwaXRjaCBhcnJheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9jdGF2ZXNPZlBpYW5vTm90ZXMgPSAoKSA9PiB7XG5cdGxldCBwaXRjaGVzID0gZ2V0UGl0Y2hlcygpO1xuXHRsZXQgb2N0YXZlcyA9IFtbXSwgW10sIFtdXTtcblx0Ly8gQWRkIG5vdGVzIGZvciAzcmQgNHRoIGFuZCA1dGggb2N0YXZlIGluIG9uZSBsb29wXG5cdHBpdGNoZXMuZm9yRWFjaChwaXRjaCA9PiB7XG5cdFx0b2N0YXZlc1swXS5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHBpdGNoLCB7bm90ZTogcGl0Y2gubGFiZWwgKyAzfSkpO1xuXHRcdG9jdGF2ZXNbMV0ucHVzaChPYmplY3QuYXNzaWduKHt9LCBwaXRjaCwge25vdGU6IHBpdGNoLmxhYmVsICsgNH0pKTtcblx0XHRvY3RhdmVzWzJdLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgcGl0Y2gsIHtub3RlOiBwaXRjaC5sYWJlbCArIDV9KSk7XG5cdH0pO1xuXG5cdHJldHVybiBvY3RhdmVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFR1bmluZ3NGb3JHdWl0YXIgPSAoKSA9PiAoW1xuXHR7bGFiZWw6ICdSZWd1bGFyJywgJ2Rpc3BsYXknOiAnRUJHREFFJywgc3RyaW5nczogWydFNCcsICdCMycsICdHMycsICdEMycsICdBMicsICdFMiddLCB0dW5pbmdJZHg6IDAsIG5hbWU6IDB9LFxuXHR7bGFiZWw6ICdEcm9wcGVkIEQnLCAnZGlzcGxheSc6ICdFQkdEQUQnLCBzdHJpbmdzOiBbJ0U0JywgJ0IzJywgJ0czJywgJ0QzJywgJ0EyJywgJ0QyJ10sIHR1bmluZ0lkeDogMSwgbmFtZTogMX0sXG5cdHtsYWJlbDogJ0RvdWJsZSBkcm9wcGVkIEQnLCBkaXNwbGF5OiAnREFER0JEJywgc3RyaW5nczogWydENCcsICdBMycsICdEMycsICdHMycsICdCMicsICdEMiddLCB0dW5pbmdJZHg6IDIsIG5hbWU6IDJ9LFxuXHR7bGFiZWw6ICdEcm9wIEMnLCAnZGlzcGxheSc6ICdEQUZDR0MnLCBzdHJpbmdzOiBbJ0Q0JywgJ0EzJywgJ0YzJywgJ0MzJywgJ0cyJywgJ0MyJ10sIHR1bmluZ0lkeDogMywgbmFtZTogM30sXG5cdHtsYWJlbDogJ09wZW4gRycsICdkaXNwbGF5JzogJ0RHREdCRCcsIHN0cmluZ3M6IFsnRDQnLCAnRzMnLCAnRDMnLCAnRzMnLCAnQjInLCAnRDInXSwgdHVuaW5nSWR4OiA0LCBuYW1lOiA0fVxuXSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQWVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ }),

/***/ "./src/components/Dropdown/index.js":
/*!******************************************!*\
  !*** ./src/components/Dropdown/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\n\n\n/**\n * @param {Array} data A list of (object) items that have the name and value of the option to be displayed\n * @param {Function} onChangeEventHandler A function that will be triggered for the onChange event of the dropdown\n * @param {String} controlType A string that signifies what sort of control this dropdown is (e.g. scale, chord, notesType etc)\n * @param {String} selectedValue The value that will determine which option of this dropdown will be shown as selected\n * @param {Function} dispatch The dispatch function to be passed on to the action creator\n */\n\nvar Dropdown = function Dropdown(_ref) {\n  var data = _ref.data,\n      onChangeEventHandler = _ref.onChangeEventHandler,\n      controlType = _ref.controlType,\n      selectedValue = _ref.selectedValue,\n      dispatch = _ref.dispatch;\n  var list = data.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"option\", {\n      value: item.label,\n      key: item.label\n    }, item.label);\n  });\n\n  var localOnChangeHandler = function localOnChangeHandler(e) {\n    var dataObj = {};\n    dataObj[e.target.dataset.controlType] = e.target.value;\n    onChangeEventHandler(dispatch, dataObj);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"select\", {\n    onChange: localOnChangeHandler.bind(_this),\n    \"data-control-type\": controlType,\n    value: selectedValue\n  }, list);\n}; // Use the default mapDispatchToProps by not passing it which is basically the same as passing dispatch => ({ dispatch })\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])()(Dropdown));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duL2luZGV4LmpzPzc3YWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gZGF0YSBBIGxpc3Qgb2YgKG9iamVjdCkgaXRlbXMgdGhhdCBoYXZlIHRoZSBuYW1lIGFuZCB2YWx1ZSBvZiB0aGUgb3B0aW9uIHRvIGJlIGRpc3BsYXllZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25DaGFuZ2VFdmVudEhhbmRsZXIgQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIGZvciB0aGUgb25DaGFuZ2UgZXZlbnQgb2YgdGhlIGRyb3Bkb3duXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udHJvbFR5cGUgQSBzdHJpbmcgdGhhdCBzaWduaWZpZXMgd2hhdCBzb3J0IG9mIGNvbnRyb2wgdGhpcyBkcm9wZG93biBpcyAoZS5nLiBzY2FsZSwgY2hvcmQsIG5vdGVzVHlwZSBldGMpXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0ZWRWYWx1ZSBUaGUgdmFsdWUgdGhhdCB3aWxsIGRldGVybWluZSB3aGljaCBvcHRpb24gb2YgdGhpcyBkcm9wZG93biB3aWxsIGJlIHNob3duIGFzIHNlbGVjdGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgZGlzcGF0Y2ggZnVuY3Rpb24gdG8gYmUgcGFzc2VkIG9uIHRvIHRoZSBhY3Rpb24gY3JlYXRvclxuICovXG5jb25zdCBEcm9wZG93biA9ICh7ZGF0YSwgb25DaGFuZ2VFdmVudEhhbmRsZXIsIGNvbnRyb2xUeXBlLCBzZWxlY3RlZFZhbHVlLCBkaXNwYXRjaH0pID0+IHtcblx0Y29uc3QgbGlzdCA9IGRhdGEubWFwKFxuXHRcdGl0ZW0gPT4gPG9wdGlvbiB2YWx1ZT17aXRlbS5sYWJlbH0ga2V5PXtpdGVtLmxhYmVsfT57aXRlbS5sYWJlbH08L29wdGlvbj5cblx0KTtcblxuXHRjb25zdCBsb2NhbE9uQ2hhbmdlSGFuZGxlciA9IGUgPT4ge1xuXHRcdHZhciBkYXRhT2JqID0ge307XG5cdFx0ZGF0YU9ialtlLnRhcmdldC5kYXRhc2V0LmNvbnRyb2xUeXBlXSA9IGUudGFyZ2V0LnZhbHVlXG5cdFx0b25DaGFuZ2VFdmVudEhhbmRsZXIoZGlzcGF0Y2gsIGRhdGFPYmopO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxzZWxlY3Qgb25DaGFuZ2U9e2xvY2FsT25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyl9IGRhdGEtY29udHJvbC10eXBlPXtjb250cm9sVHlwZX0gdmFsdWU9e3NlbGVjdGVkVmFsdWV9PlxuXHRcdFx0e2xpc3R9XG5cdFx0PC9zZWxlY3Q+XG5cdCk7XG59O1xuXG4vLyBVc2UgdGhlIGRlZmF1bHQgbWFwRGlzcGF0Y2hUb1Byb3BzIGJ5IG5vdCBwYXNzaW5nIGl0IHdoaWNoIGlzIGJhc2ljYWxseSB0aGUgc2FtZSBhcyBwYXNzaW5nIGRpc3BhdGNoID0+ICh7IGRpc3BhdGNoIH0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoRHJvcGRvd24pO1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Dropdown/index.js\n");

/***/ }),

/***/ "./src/components/Menu/Menu.less":
/*!***************************************!*\
  !*** ./src/components/Menu/Menu.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./Menu.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/Menu/Menu.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUubGVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUvTWVudS5sZXNzPzk4MmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01lbnUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVudS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVudS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Menu/Menu.less\n");

/***/ }),

/***/ "./src/components/Menu/index.js":
/*!**************************************!*\
  !*** ./src/components/Menu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _NotesSetter_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NotesSetter/index.js */ \"./src/components/NotesSetter/index.js\");\n/* harmony import */ var _Menu_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.less */ \"./src/components/Menu/Menu.less\");\n/* harmony import */ var _Menu_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Menu_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Menu = function Menu() {\n  var currentSelection = location.hash.replace('#/', '');\n  var guitarSelected = currentSelection === 'guitar' ? 'selected' : '';\n  var pianoSelected = currentSelection === 'piano' ? 'selected' : '';\n  var keyboardSelected = currentSelection === 'keyboard' ? 'selected' : '';\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"menu\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", null, \"Generate chord & scale charts to practice\"), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", {\n    className: guitarSelected\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/guitar\"\n  }, \"Guitar\")), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", {\n    className: pianoSelected\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/piano\"\n  }, \"Piano\")), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", {\n    className: keyboardSelected\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/keyboard\"\n  }, \"Keyboard\")))), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_NotesSetter_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC5qcz9kOTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgTm90ZXNTZXR0ZXIgZnJvbSAnLi4vTm90ZXNTZXR0ZXIvaW5kZXguanMnO1xuaW1wb3J0ICcuL01lbnUubGVzcyc7XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiB7XG5cdGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMvJywgJycpO1xuXHRjb25zdCBndWl0YXJTZWxlY3RlZCA9IGN1cnJlbnRTZWxlY3Rpb24gPT09ICdndWl0YXInID8gJ3NlbGVjdGVkJyA6ICcnO1xuXHRjb25zdCBwaWFub1NlbGVjdGVkID0gY3VycmVudFNlbGVjdGlvbiA9PT0gJ3BpYW5vJyA/ICdzZWxlY3RlZCcgOiAnJztcblx0Y29uc3Qga2V5Ym9hcmRTZWxlY3RlZCA9IGN1cnJlbnRTZWxlY3Rpb24gPT09ICdrZXlib2FyZCcgPyAnc2VsZWN0ZWQnIDogJyc7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cblx0XHRcdDxwPkdlbmVyYXRlIGNob3JkICZhbXA7IHNjYWxlIGNoYXJ0cyB0byBwcmFjdGljZTwvcD5cblx0XHRcdDxuYXY+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtndWl0YXJTZWxlY3RlZH0+PExpbmsgdG89XCIvZ3VpdGFyXCI+R3VpdGFyPC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17cGlhbm9TZWxlY3RlZH0+PExpbmsgdG89XCIvcGlhbm9cIj5QaWFubzwvTGluaz48L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2tleWJvYXJkU2VsZWN0ZWR9PjxMaW5rIHRvPVwiL2tleWJvYXJkXCI+S2V5Ym9hcmQ8L0xpbms+PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdFx0PE5vdGVzU2V0dGVyIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/index.js\n");

/***/ }),

/***/ "./src/components/NotesSetter/NotesSetter.less":
/*!*****************************************************!*\
  !*** ./src/components/NotesSetter/NotesSetter.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./NotesSetter.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/NotesSetter/NotesSetter.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ob3Rlc1NldHRlci9Ob3Rlc1NldHRlci5sZXNzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90ZXNTZXR0ZXIvTm90ZXNTZXR0ZXIubGVzcz82ODBlIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3Rlc1NldHRlci5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3Rlc1NldHRlci5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90ZXNTZXR0ZXIubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NotesSetter/NotesSetter.less\n");

/***/ }),

/***/ "./src/components/NotesSetter/index.js":
/*!*********************************************!*\
  !*** ./src/components/NotesSetter/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_creators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/creators */ \"./src/actions/creators.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./src/api.js\");\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dropdown */ \"./src/components/Dropdown/index.js\");\n/* harmony import */ var _NotesSetter_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotesSetter.less */ \"./src/components/NotesSetter/NotesSetter.less\");\n/* harmony import */ var _NotesSetter_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NotesSetter_less__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar NotesSetter = function NotesSetter(_ref) {\n  var currentScale = _ref.currentScale,\n      currentChord = _ref.currentChord,\n      notesType = _ref.notesType,\n      rootNote = _ref.rootNote;\n  var notesTypeOptions = [{\n    name: 'scale',\n    label: 'scale'\n  }, {\n    name: 'chord',\n    label: 'chord'\n  }];\n\n  var getChordScaleDropdown = function getChordScaleDropdown() {\n    var notesTypeData = Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"getScaleNames\"])(),\n        ddType = 'scale';\n    var selectedValue = currentScale;\n\n    if (notesType === 'chord') {\n      notesTypeData = Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"getChordNames\"])();\n      ddType = 'chord';\n      selectedValue = currentChord;\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      data: notesTypeData,\n      controlType: ddType,\n      onChangeEventHandler: _actions_creators__WEBPACK_IMPORTED_MODULE_2__[\"controlChanged\"],\n      selectedValue: selectedValue\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"ul\", {\n    className: \"notesSetter\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"getPitches\"])(),\n    controlType: \"rootNote\",\n    onChangeEventHandler: _actions_creators__WEBPACK_IMPORTED_MODULE_2__[\"controlChanged\"],\n    selectedValue: rootNote\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, getChordScaleDropdown()), react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: notesTypeOptions,\n    controlType: \"notesType\",\n    onChangeEventHandler: _actions_creators__WEBPACK_IMPORTED_MODULE_2__[\"controlChanged\"],\n    selectedValue: notesType\n  })));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    scales: state.scales,\n    chords: state.chords,\n    notesType: state.notesType,\n    rootNote: state.rootNote,\n    currentScale: state.scale,\n    currentChord: state.chord\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(NotesSetter));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ob3Rlc1NldHRlci9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGVzU2V0dGVyL2luZGV4LmpzPzlmNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjb250cm9sQ2hhbmdlZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY3JlYXRvcnMnO1xuaW1wb3J0IHsgZ2V0U2NhbGVOYW1lcywgZ2V0Q2hvcmROYW1lcywgZ2V0UGl0Y2hlcyB9IGZyb20gJy4uLy4uL2FwaSc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vRHJvcGRvd24nO1xuaW1wb3J0ICcuL05vdGVzU2V0dGVyLmxlc3MnO1xuXG5jb25zdCBOb3Rlc1NldHRlciA9ICh7IGN1cnJlbnRTY2FsZSwgY3VycmVudENob3JkLCBub3Rlc1R5cGUsIHJvb3ROb3RlIH0pID0+IHtcblx0Y29uc3Qgbm90ZXNUeXBlT3B0aW9ucyA9IFt7XG5cdFx0bmFtZTogJ3NjYWxlJyxcblx0XHRsYWJlbDogJ3NjYWxlJ1xuXHR9LCB7XG5cdFx0bmFtZTogJ2Nob3JkJyxcblx0XHRsYWJlbDogJ2Nob3JkJ1xuXHR9XTtcblxuXHRjb25zdCBnZXRDaG9yZFNjYWxlRHJvcGRvd24gPSAoKSA9PiB7XG5cdFx0dmFyIG5vdGVzVHlwZURhdGEgPSBnZXRTY2FsZU5hbWVzKCksIGRkVHlwZSA9ICdzY2FsZSc7XG5cdFx0dmFyIHNlbGVjdGVkVmFsdWUgPSBjdXJyZW50U2NhbGU7XG5cblx0XHRpZiAobm90ZXNUeXBlID09PSAnY2hvcmQnKSB7XG5cdFx0XHRub3Rlc1R5cGVEYXRhID0gZ2V0Q2hvcmROYW1lcygpO1xuXHRcdFx0ZGRUeXBlID0gJ2Nob3JkJztcblx0XHRcdHNlbGVjdGVkVmFsdWUgPSBjdXJyZW50Q2hvcmQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxEcm9wZG93biBcblx0XHRcdGRhdGE9e25vdGVzVHlwZURhdGF9IFxuXHRcdFx0Y29udHJvbFR5cGU9e2RkVHlwZX1cblx0XHRcdG9uQ2hhbmdlRXZlbnRIYW5kbGVyPXtjb250cm9sQ2hhbmdlZH0gXG5cdFx0XHRzZWxlY3RlZFZhbHVlPXtzZWxlY3RlZFZhbHVlfVxuXHRcdC8+XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDx1bCBjbGFzc05hbWU9XCJub3Rlc1NldHRlclwiPlxuXHRcdFx0PGxpPlxuXHRcdFx0XHQ8RHJvcGRvd24gXG5cdFx0XHRcdFx0ZGF0YT17Z2V0UGl0Y2hlcygpfSBcblx0XHRcdFx0XHRjb250cm9sVHlwZT1cInJvb3ROb3RlXCIgXG5cdFx0XHRcdFx0b25DaGFuZ2VFdmVudEhhbmRsZXI9e2NvbnRyb2xDaGFuZ2VkfSBcblx0XHRcdFx0XHRzZWxlY3RlZFZhbHVlPXtyb290Tm90ZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvbGk+XG5cdFx0XHQ8bGk+e2dldENob3JkU2NhbGVEcm9wZG93bigpfTwvbGk+XG5cdFx0XHQ8bGk+XG5cdFx0XHRcdDxEcm9wZG93biBcblx0XHRcdFx0XHRkYXRhPXtub3Rlc1R5cGVPcHRpb25zfSBcblx0XHRcdFx0XHRjb250cm9sVHlwZT1cIm5vdGVzVHlwZVwiIFxuXHRcdFx0XHRcdG9uQ2hhbmdlRXZlbnRIYW5kbGVyPXtjb250cm9sQ2hhbmdlZH0gXG5cdFx0XHRcdFx0c2VsZWN0ZWRWYWx1ZT17bm90ZXNUeXBlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcblx0c2NhbGVzOiBzdGF0ZS5zY2FsZXMsIFxuXHRjaG9yZHM6IHN0YXRlLmNob3JkcywgXG5cdG5vdGVzVHlwZTogc3RhdGUubm90ZXNUeXBlLFxuXHRyb290Tm90ZTogc3RhdGUucm9vdE5vdGUsXG5cdGN1cnJlbnRTY2FsZTogc3RhdGUuc2NhbGUsXG5cdGN1cnJlbnRDaG9yZDogc3RhdGUuY2hvcmRcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShOb3Rlc1NldHRlcik7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUNBO0FBU0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NotesSetter/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/root */ \"./src/reducers/root.js\");\n/* harmony import */ var _actions_creators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/creators */ \"./src/actions/creators.js\");\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n\n\n\n\n\n\n\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(_reducers_root__WEBPACK_IMPORTED_MODULE_4__[\"rootReducer\"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());\n\nvar render = function render() {\n  react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_App_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))), document.getElementById('root'));\n};\n\nstore.subscribe(render);\nObject(_actions_creators__WEBPACK_IMPORTED_MODULE_5__[\"initApp\"])(store.dispatch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBIYXNoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL3Jvb3QnO1xuaW1wb3J0IHsgaW5pdEFwcCB9IGZyb20gJy4vYWN0aW9ucy9jcmVhdG9ycyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLmpzJztcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcixcblx0d2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSk7XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcblx0UmVhY3RET00ucmVuZGVyKFxuXHRcdCg8SGFzaFJvdXRlcj5cblx0XHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0XHQ8QXBwIC8+XG5cdFx0XHQ8L1Byb3ZpZGVyPlxuXHRcdDwvSGFzaFJvdXRlcj4pLFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcblx0KTtcbn07XG5cbnN0b3JlLnN1YnNjcmliZShyZW5kZXIpO1xuXG5pbml0QXBwKHN0b3JlLmRpc3BhdGNoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/reducers/root.js":
/*!******************************!*\
  !*** ./src/reducers/root.js ***!
  \******************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootReducer\", function() { return rootReducer; });\n/* harmony import */ var _actions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants.js */ \"./src/actions/constants.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ \"./src/api.js\");\n\n\nvar initialState = {\n  octavesOfPianoNotes: Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"getOctavesOfPianoNotes\"])(),\n  scale: 'Major',\n  chord: 'M',\n  notesType: 'scale',\n  rootNote: 'C',\n  notes: [],\n  fretboardIsFlipped: false,\n  selectedTuningIdx: 0\n};\nvar rootReducer = function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case _actions_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOAD_NOTES:\n      var newState = Object.assign({}, state, action.data);\n\n      if (newState.notesType === 'chord') {\n        newState.notes = Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"getChord\"])(newState.rootNote + newState.chord);\n      } else {\n        newState.notes = Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"getScale\"])(newState.rootNote, newState.scale);\n      }\n\n      newState.octavesOfPianoNotes.forEach(function (oct) {\n        oct.forEach(function (key) {\n          key.highlight = newState.notes.indexOf(key.note) > -1;\n          key.rootNote = key.name === newState.rootNote;\n        });\n      });\n      return newState;\n\n    case _actions_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FLIP_FRETBOARD:\n      return Object.assign({}, state, {\n        fretboardIsFlipped: !state.fretboardIsFlipped\n      });\n\n    case _actions_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CHANGE_TUNING:\n      return Object.assign({}, state, action.data);\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvcm9vdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9yb290LmpzPzVhODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9hY3Rpb25zL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBnZXRPY3RhdmVzT2ZQaWFub05vdGVzLCBnZXRDaG9yZCwgZ2V0U2NhbGUgfSBmcm9tICcuLi9hcGknO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuXHRvY3RhdmVzT2ZQaWFub05vdGVzOiBnZXRPY3RhdmVzT2ZQaWFub05vdGVzKCksXG5cdHNjYWxlOiAnTWFqb3InLFxuXHRjaG9yZDogJ00nLFxuXHRub3Rlc1R5cGU6ICdzY2FsZScsXG5cdHJvb3ROb3RlOiAnQycsXG5cdG5vdGVzOiBbXSxcblx0ZnJldGJvYXJkSXNGbGlwcGVkOiBmYWxzZSxcblx0c2VsZWN0ZWRUdW5pbmdJZHg6IDBcbn07XG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgY29uc3RhbnRzLkxPQURfTk9URVM6XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuXHRcdFx0aWYgKG5ld1N0YXRlLm5vdGVzVHlwZSA9PT0gJ2Nob3JkJykge1xuXHRcdFx0XHRuZXdTdGF0ZS5ub3RlcyA9IGdldENob3JkKG5ld1N0YXRlLnJvb3ROb3RlICsgbmV3U3RhdGUuY2hvcmQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3U3RhdGUubm90ZXMgPSBnZXRTY2FsZShuZXdTdGF0ZS5yb290Tm90ZSwgbmV3U3RhdGUuc2NhbGUpO1xuXHRcdFx0fVxuXHRcdFx0bmV3U3RhdGUub2N0YXZlc09mUGlhbm9Ob3Rlcy5mb3JFYWNoKG9jdCA9PiB7XG5cdFx0XHRcdG9jdC5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRcdFx0a2V5LmhpZ2hsaWdodCA9IG5ld1N0YXRlLm5vdGVzLmluZGV4T2Yoa2V5Lm5vdGUpID4gLTE7XG5cdFx0XHRcdFx0a2V5LnJvb3ROb3RlID0ga2V5Lm5hbWUgPT09IG5ld1N0YXRlLnJvb3ROb3RlO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIGNvbnN0YW50cy5GTElQX0ZSRVRCT0FSRDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2ZyZXRib2FyZElzRmxpcHBlZDogIXN0YXRlLmZyZXRib2FyZElzRmxpcHBlZH0pO1xuXG5cdFx0Y2FzZSBjb25zdGFudHMuQ0hBTkdFX1RVTklORzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBeUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/root.js\n");

/***/ })

/******/ });