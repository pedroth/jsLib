(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JsLib"] = factory();
	else
		root["JsLib"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Function/Function.js":
/*!**********************************!*\
  !*** ./src/Function/Function.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Function; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"@babel/runtime/helpers/esm/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"@babel/runtime/helpers/esm/createClass\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"@babel/runtime/helpers/esm/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classPrivateFieldGet */ \"@babel/runtime/helpers/esm/classPrivateFieldGet\");\n/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classPrivateFieldSet */ \"@babel/runtime/helpers/esm/classPrivateFieldSet\");\n/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _lambda = new WeakMap();\n\nvar Function = /*#__PURE__*/function () {\n  function Function(lambda) {\n    var _this = this;\n\n    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Function);\n\n    _lambda.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"dot\", function (funcOrLambda) {\n      return Function.of(function (x) {\n        return _babel_runtime_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(_this, _lambda).call(_this, Function.of(funcOrLambda).eval(x));\n      });\n    });\n\n    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"compose\", this.dot);\n\n    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"call\", function (x) {\n      return _babel_runtime_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(_this, _lambda).call(_this, x);\n    });\n\n    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"eval\", this.call);\n\n    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"apply\", this.call);\n\n    _babel_runtime_helpers_esm_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _lambda, lambda);\n  }\n\n  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Function, [{\n    key: \"lambda\",\n    get: function get() {\n      return _babel_runtime_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _lambda);\n    }\n  }, {\n    key: \"f\",\n    get: function get() {\n      return _babel_runtime_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _lambda);\n    }\n  }], [{\n    key: \"of\",\n    value: function of(lambda) {\n      if (typeof lambda === \"function\") return new Function(lambda);\n      if (lambda instanceof Function) return lambda;\n    }\n  }]);\n\n  return Function;\n}();\n\n\n\n//# sourceURL=webpack://JsLib/./src/Function/Function.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Function */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Function_Function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Function/Function */ \"./src/Function/Function.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Function\", function() { return _Function_Function__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://JsLib/./src/index.js?");

/***/ }),

/***/ "@babel/runtime/helpers/esm/classCallCheck":
/*!************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/classCallCheck" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/classCallCheck\");\n\n//# sourceURL=webpack://JsLib/external_%22@babel/runtime/helpers/esm/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/esm/classPrivateFieldGet":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/classPrivateFieldGet" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/classPrivateFieldGet\");\n\n//# sourceURL=webpack://JsLib/external_%22@babel/runtime/helpers/esm/classPrivateFieldGet%22?");

/***/ }),

/***/ "@babel/runtime/helpers/esm/classPrivateFieldSet":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/classPrivateFieldSet" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/classPrivateFieldSet\");\n\n//# sourceURL=webpack://JsLib/external_%22@babel/runtime/helpers/esm/classPrivateFieldSet%22?");

/***/ }),

/***/ "@babel/runtime/helpers/esm/createClass":
/*!*********************************************************!*\
  !*** external "@babel/runtime/helpers/esm/createClass" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/createClass\");\n\n//# sourceURL=webpack://JsLib/external_%22@babel/runtime/helpers/esm/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/esm/defineProperty":
/*!************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/defineProperty" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/defineProperty\");\n\n//# sourceURL=webpack://JsLib/external_%22@babel/runtime/helpers/esm/defineProperty%22?");

/***/ })

/******/ });
});