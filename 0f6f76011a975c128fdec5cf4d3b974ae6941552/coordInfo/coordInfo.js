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
/******/ 	return __webpack_require__(__webpack_require__.s = "./coordInfo/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./coordInfo/html-assets.ts":
/*!**********************************!*\
  !*** ./coordInfo/html-assets.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.template = \"<div tabindex=\\\"-2\\\"><ul class=\\\"rv-list\\\">\\n    <li>\\n        <strong>{{ 'plugins.coordInfo.coordSection' | translate }}</strong>\\n        <div class=\\\"rv-subsection\\\">\\n            <div>{{ 'plugins.coordInfo.coordDecimal' | translate }}</div>\\n            <div class=\\\"rv-subsection\\\">\\n            <div>{{ 'plugins.coordInfo.coordLat' | translate }}{pt.y}</div>\\n            <div>{{ 'plugins.coordInfo.coordLong' | translate }}{pt.x}</div>\\n            </div>\\n            <div>{{ 'plugins.coordInfo.coordDMS' | translate }}</div>\\n            <div class=\\\"rv-subsection\\\">\\n            <div>{{ 'plugins.coordInfo.coordLat' | translate }}{dms.y}</div>\\n            <div>{{ 'plugins.coordInfo.coordLong' | translate}}{dms.x}</div>\\n            </div>\\n        </div>\\n    </li>\\n    <li>\\n        <strong>{{ 'plugins.coordInfo.utmSection' | translate }}</strong>\\n        <div class=\\\"rv-subsection\\\">\\n            <div>{{ 'plugins.coordInfo.utmZone' | translate }}{zone}</div>\\n            <div>{{ 'plugins.coordInfo.utmEast' | translate }}{outPt.x}</div>\\n            <div>{{ 'plugins.coordInfo.utmNorth' | translate }}{outPt.y}</div>\\n        </div>\\n    </li>\\n    <li>\\n        <strong>{{ 'plugins.coordInfo.ntsSection' | translate }}</strong>\\n        <div class=\\\"rv-subsection\\\">\\n            <div>{nts250}</div>\\n            <div>{nts50}</div>\\n        </div>\\n    </li>\\n    <li>\\n        <strong>{{ 'plugins.coordInfo.altiSection' | translate }}</strong>\\n        <div class=\\\"rv-subsection\\\">{elevation} m</div>\\n    </li>\\n    {magSection}\\n</ul></div>\";\nexports.magSection = \"<li>\\n<strong>{{ 'plugins.coordInfo.magSection' | translate }}</strong>\\n<div class=\\\"rv-subsection\\\">\\n    <div>{{ 'plugins.coordInfo.magDate' | translate }}{date}</div>\\n    <div>{{ 'plugins.coordInfo.magDecli' | translate }}{magnetic}</div>\\n    <div>{{ 'plugins.coordInfo.magChange' | translate }}{annChange}</div>\\n    <div>{compass}</div>\\n</div>\\n</li>\";\n\n\n//# sourceURL=webpack:///./coordInfo/html-assets.ts?");

/***/ }),

/***/ "./coordInfo/index.ts":
/*!****************************!*\
  !*** ./coordInfo/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar html_assets_1 = __webpack_require__(/*! ./html-assets */ \"./coordInfo/html-assets.ts\");\nvar CoordInfo = /** @class */ (function () {\n    function CoordInfo() {\n        this.urls = {\n            nts: 'https://geogratis.gc.ca/services/delimitation/en/nts?',\n            utm: 'https://geogratis.gc.ca/services/delimitation/en/utmzone?',\n            alti: 'https://geogratis.gc.ca/services/elevation/cdem/altitude?',\n            decli: 'http://geomag.nrcan.gc.ca/service/tools/magnetic/calculator/?'\n        };\n    }\n    CoordInfo.prototype.init = function (api) {\n        this.api = api;\n        this.button = this.api.mapI.addPluginButton(CoordInfo.prototype.translations[this._RV.getCurrentLang()].coordButtonLabel, this.onMenuItemClick());\n    };\n    /**\n     * Returns a function to be executed when the map is clicked.\n     *\n     * @function  onMenuItemClick\n     * @return  {Function}    Callback to be executed when map is clicked\n     */\n    CoordInfo.prototype.onMenuItemClick = function () {\n        var _this = this;\n        var identifySetting;\n        return function () {\n            _this._RV.toggleSideNav('close');\n            // only set event if not already created\n            if (typeof _this.handler === 'undefined') {\n                _this.handler = _this.api.click.subscribe(function (clickEvent) { return _this.clickHandler(clickEvent); });\n                // set cursor\n                _this._RV.setMapCursor('crosshair');\n                // set active (checked) in the side menu\n                _this.button.isActive = true;\n                // store current identify value and then disable in viewer\n                identifySetting = _this.api.layers.identifyMode;\n                _this.api.layers.identifyMode = 'none';\n            }\n            else {\n                // remove the click handler and set the cursor\n                _this.handler.unsubscribe();\n                _this.handler = undefined;\n                _this._RV.setMapCursor('');\n                // set inactive (unchecked) in the side menu\n                _this.button.isActive = false;\n                // reset identify value to stored value\n                _this.api.layers.identifyMode = identifySetting;\n            }\n        };\n    };\n    /**\n     * Manage callback when the map is clicked.\n     *\n     * @function  clickHandler\n     * @param  {Object}  clickEvent the map click event\n     */\n    CoordInfo.prototype.clickHandler = function (clickEvent) {\n        var _this = this;\n        // get current language\n        var lang = this._RV.getCurrentLang();\n        // get point in lat/long\n        var pt = clickEvent.xy; //this._RV.projectGeometry(clickEvent.mapPoint, 4326);\n        pt.spatialReference = 4326;\n        // get point in dms\n        var dms = this._RV.convertDDToDMS(pt.y, pt.x);\n        // todays date for magnetic declination\n        var date = new Date().toISOString().substr(0, 10);\n        // get info from services (nts, utm zone, altimetry and magnetic declination)\n        var promises = [];\n        promises.push(new Promise(function (resolve) {\n            $.ajax({\n                url: _this.urls.nts,\n                cache: false,\n                data: { bbox: pt.x + \",\" + pt.y + \",\" + pt.x + \",\" + pt.y },\n                dataType: 'jsonp',\n                success: function (data) { return resolve(_this.parseNTS(data.features)); }\n            });\n        }));\n        promises.push(new Promise(function (resolve) {\n            $.ajax({\n                url: _this.urls.utm,\n                cache: false,\n                data: { bbox: pt.x + \",\" + pt.y + \",\" + pt.x + \",\" + pt.y },\n                dataType: 'jsonp',\n                success: function (data) { return resolve(_this.parseUtm(data.features, pt)); }\n            });\n        }));\n        promises.push(new Promise(function (resolve) {\n            $.ajax({\n                url: _this.urls.alti,\n                cache: false,\n                data: { lat: pt.y, lon: pt.x },\n                dataType: 'jsonp',\n                success: function (data) { return resolve(data.altitude !== null ? data.altitude : 0); }\n            });\n        }));\n        // Magnetic declination service is only available in http\n        if (window.location.protocol === 'http:') {\n            promises.push(new Promise(function (resolve) {\n                $.ajax({\n                    url: _this.urls.decli,\n                    cache: true,\n                    data: { latitude: pt.y, longitude: pt.x, date: date, format: 'json' },\n                    dataType: 'jsonp',\n                    success: function (data) { return resolve(_this.parseDecli(data, lang)); },\n                    error: function () {\n                        resolve(undefined);\n                    }\n                });\n            }));\n        }\n        // wait for all promises to resolve then show info\n        Promise.all(promises).then(function (values) {\n            _this.generateOutput(values, pt, dms, date);\n        });\n    };\n    /**\n     * Generate dialog window content.\n     *\n     * @function  generateOutput\n     * @param  {Array}  val the array of response from the promises\n     * @param {Object}  pt  the point in decimal degree\n     * @param {Object}  dms the point in degree minute second\n     * @param {String}  date the today's date\n     */\n    CoordInfo.prototype.generateOutput = function (val, pt, dms, date) {\n        var output = html_assets_1.template\n            // coord\n            .replace(/{pt.y}/, pt.y.toFixed(6))\n            .replace(/{pt.x}/, pt.x.toFixed(6))\n            .replace(/{dms.y}/, dms.y)\n            .replace(/{dms.x}/, dms.x)\n            // utm\n            .replace(/{zone}/, val[1].zone)\n            .replace(/{outPt.x}/, val[1].outPt.x)\n            .replace(/{outPt.y}/, val[1].outPt.y)\n            // nts\n            .replace(/{nts250}/, val[0].nts250)\n            .replace(/{nts50}/, val[0].nts50)\n            // alti\n            .replace(/{elevation}/, val[2]);\n        // magnetic declination service is only available in http\n        // the server seems to also have a tendency to throw 500s\n        if (val[3]) {\n            var magOutput = html_assets_1.magSection\n                .replace(/{date}/, date)\n                .replace(/{magnetic}/, val[3].magnetic)\n                .replace(/{annChange}/, val[3].annChange)\n                .replace(/{compass}/, val[3].compass);\n            output = output.replace(/{magSection}/, magOutput);\n        }\n        else {\n            output = output.replace(/{magSection}/, '');\n        }\n        if (!this.panel) {\n            // make sure both header and body have a digest cycle run on them\n            this.panel = this.api.panels.create('coord-info');\n            this.panel.element.css({\n                bottom: '0em',\n                width: '400px'\n            });\n            this.panel.element.addClass('mobile-fullscreen');\n            var closeBtn = this.panel.header.closeButton;\n            this.panel.header.title = \"plugins.coordInfo.coordButtonLabel\";\n        }\n        else {\n            this.panel.close();\n        }\n        this.panel.body = output;\n        this.panel.open();\n    };\n    /**\n     * Parse NTS answer from the service to generate content.\n     *\n     * @function  parseNTS\n     * @param  {Object}  nts the answer from the service\n     * @return {Object}   the nts information (nts250 {String} 250k nts name, nts50 {String} 50k nts name)\n     */\n    CoordInfo.prototype.parseNTS = function (nts) {\n        // set 250k\n        var nts250 = nts.length > 0 ? nts[0].properties.identifier + \"-\" + nts[0].properties.name : '';\n        // set 50k\n        var nts50 = nts.length > 1 ? nts[1].properties.identifier + \"-\" + nts[1].properties.name : '';\n        return { nts250: nts250, nts50: nts50 };\n    };\n    /**\n     * Parse UTM answer from the service to generate content.\n     *\n     * @function  parseUtm\n     * @param  {Object}  utm the answer from the service\n     * @param  {Object}  pt the point to reproject\n     * @return {Object}   the utm information (zone {String} utm zone, x {Number} Easting, y {Number} Northing)\n     */\n    CoordInfo.prototype.parseUtm = function (utm, pt) {\n        if (utm.length === 0) {\n            return { zone: 'Error', outPt: { x: '-', y: '-' } };\n        }\n        // set zone\n        var zone = utm[0].properties.identifier;\n        if (zone < 10) {\n            zone = \"0\" + zone;\n        }\n        // set the UTM easting/northing information using a geometry service\n        var outPt = this._RV.projectGeometry(pt, parseInt('326' + zone));\n        return { zone: zone, outPt: { x: outPt.x, y: outPt.y } };\n    };\n    /**\n     * Parse declination answer from the service to generate content.\n     *\n     * @function  parseDecli\n     * @param  {Object}  decli the answer from the service\n     * @param  {String}  lang the current language\n     * @return {Object}   the declination information (magnetic {String} magnetic declination, annChange {Number} Annual change, compass {String} Compass information)\n     */\n    CoordInfo.prototype.parseDecli = function (decli, lang) {\n        /* jshint -W106 */\n        /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */\n        var magnetic = decli.components.D !== null ? \"\" + decli.components.D + String.fromCharCode(176) : '---';\n        var annChange = decli.annual_change.dD !== null ? decli.annual_change.dD : '---';\n        var compass = decli.compass !== 'useless' ? '' : CoordInfo.prototype.translations[lang].plugin.coordInfo.magCompassOut;\n        return { magnetic: magnetic, annChange: annChange, compass: compass };\n    };\n    return CoordInfo;\n}());\nCoordInfo.prototype.translations = {\n    'en-CA': {\n        coordButtonLabel: 'Coords Info',\n        title: 'Map location information',\n        coordSection: 'Geographic Coordinates',\n        coordLat: 'Latitude: ',\n        coordLong: 'Longitude: ',\n        coordDecimal: 'Degrees Decimal: ',\n        coordDMS: 'Degrees Minutes Seconds (DMS): ',\n        utmSection: 'UTM Coordinates',\n        utmZone: 'Zone: ',\n        utmEast: 'Easting: ',\n        utmNorth: 'Northing: ',\n        ntsSection: 'NTS Mapsheet',\n        altiSection: 'Elevation',\n        magSection: 'Magnetic declination',\n        magDate: 'Date: ',\n        magDecli: 'Magnetic declination (DD): ',\n        magChange: 'Annual change (minutes/year): ',\n        magDecliOut: '-WARNING- Out of scope.',\n        magCompassOut: '-WARNING- Compass erratic for this coordinate.'\n    },\n    'fr-CA': {\n        coordButtonLabel: 'Info coords',\n        title: 'Information de localisation sur la carte',\n        coordSection: 'Coordonnées géographiques',\n        coordLat: 'Latitude : ',\n        coordLong: 'Longitude : ',\n        coordDecimal: 'Degrés décimaux : ',\n        coordDMS: 'Degrés minutes secondes (DMS) : ',\n        utmSection: 'Coordonnées UTM',\n        utmZone: 'Zone : ',\n        utmEast: 'Abscisse : ',\n        utmNorth: 'Ordonnée : ',\n        ntsSection: 'Carte du SNRC',\n        altiSection: 'Élévation',\n        magSection: 'Déclinaison magnétique',\n        magDate: 'Date : ',\n        magDecli: 'Déclinaison magnétique (DD) : ',\n        magChange: 'Changement annuel (minutes/année) : ',\n        magDecliOut: '-ATTENTION- Hors de portée.',\n        magCompassOut: '-ATTENTION- Boussole peu fiable pour cette coordonnée.'\n    }\n};\nwindow.coordInfo = CoordInfo;\n\n\n//# sourceURL=webpack:///./coordInfo/index.ts?");

/***/ })

/******/ });