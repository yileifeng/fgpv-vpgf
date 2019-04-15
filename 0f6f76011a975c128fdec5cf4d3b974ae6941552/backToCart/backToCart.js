/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./backToCart/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./backToCart/index.ts":
/*!*****************************!*\
  !*** ./backToCart/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BackToCart = /** @class */ (function () {\n    function BackToCart() {\n    }\n    /**\n     * Sets a specific backToCart instance's catalogue url\n     *\n     * @param {string} mapId         Map ID for the backToCart instance you want to change\n     * @param {string} template      The destination URL with '{RV_LAYER_LIST}' marking where the layer keys should go\n     */\n    BackToCart.setCatalogueUrl = function (mapId, template) {\n        BackToCart.instances[mapId].template = template;\n    };\n    /**\n     * Adds a button to RAMP's side menu\n     */\n    BackToCart.prototype.activateButton = function () {\n        this.button = this.api.mapI.addPluginButton(BackToCart.prototype.translations[this._RV.getCurrentLang()], this.onMenuItemClick());\n    };\n    /**\n     * Returns a promise that resolves with the backToCart URL\n     */\n    BackToCart.prototype.getCatalogueUrl = function () {\n        if (!this.template) {\n            console.warn('<Back to Cart> Trying to get URL before template is set');\n            return;\n        }\n        return this.template.replace('{RV_LAYER_LIST}', this._RV.getRcsLayerIDs().toString());\n    };\n    /**\n     * Callback for the RAMP button, sets session storage and then redirects the browser to the catalogueUrl\n     */\n    BackToCart.prototype.onMenuItemClick = function () {\n        var _this = this;\n        return function () {\n            if (!_this.getCatalogueUrl()) {\n                return;\n            }\n            // save bookmark in local storage so it is restored when user returns\n            sessionStorage.setItem(_this.api.id, _this._RV.getBookmark());\n            window.location.href = _this.getCatalogueUrl();\n        };\n    };\n    /**\n     * Auto called by RAMP startup, checks for a catalogueUrl in the config and sets the template if so\n     *\n     * @param pluginConfig      pluginConfig given by RAMP, contains the catalogue URL\n     */\n    BackToCart.prototype.preInit = function (pluginConfig) {\n        if (pluginConfig && pluginConfig.catalogueUrl) {\n            this.template = pluginConfig.catalogueUrl;\n        }\n    };\n    /**\n     * Auto called by RAMP startup, stores the map api and puts the instance in BackToCart.instances\n     *\n     * @param {any} api     map api given by RAMP\n     */\n    BackToCart.prototype.init = function (api) {\n        this.api = api;\n        BackToCart.instances[this.api.id] = this;\n        this.activateButton();\n    };\n    // A store of the instances of backToCart, 1 per map\n    BackToCart.instances = {};\n    return BackToCart;\n}());\nexports.default = BackToCart;\nBackToCart.prototype.translations = {\n    'en-CA': 'Back to Cart',\n    'fr-CA': 'Retour au panier'\n};\nwindow.backToCart = BackToCart;\n\n\n//# sourceURL=webpack:///./backToCart/index.ts?");

/***/ })

/******/ });