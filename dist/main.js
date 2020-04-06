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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/stats.json":
/*!*************************!*\
  !*** ./data/stats.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"0\":203507,\"1\":1,\"2\":\"Giannis Antetokounmpo\",\"3\":\"MIL\",\"4\":57,\"5\":30.9,\"6\":10.9,\"7\":20,\"8\":0.547,\"9\":1.5,\"10\":4.8,\"11\":0.306,\"12\":6.3,\"13\":10,\"14\":0.633,\"15\":2.3,\"16\":11.5,\"17\":13.7,\"18\":5.8,\"19\":1,\"20\":1,\"21\":3.7,\"22\":29.6,\"23\":34.8,\"color\":\"green\"},{\"0\":201935,\"1\":2,\"2\":\"James Harden\",\"3\":\"HOU\",\"4\":61,\"5\":36.7,\"6\":9.9,\"7\":22.7,\"8\":0.435,\"9\":4.4,\"10\":12.6,\"11\":0.352,\"12\":10.1,\"13\":11.8,\"14\":0.861,\"15\":1,\"16\":5.3,\"17\":6.4,\"18\":7.4,\"19\":1.7,\"20\":0.9,\"21\":4.5,\"22\":34.4,\"23\":31.8,\"color\":\"red\"},{\"0\":203076,\"1\":3,\"2\":\"Anthony Davis\",\"3\":\"LAL\",\"4\":55,\"5\":34.3,\"6\":9.2,\"7\":18.1,\"8\":0.511,\"9\":1.2,\"10\":3.5,\"11\":0.335,\"12\":7,\"13\":8.3,\"14\":0.845,\"15\":2.3,\"16\":7.1,\"17\":9.4,\"18\":3.1,\"19\":1.5,\"20\":2.4,\"21\":2.5,\"22\":26.7,\"23\":30.5,\"color\":\"yellow\"},{\"0\":1629029,\"1\":4,\"2\":\"Luka Doncic\",\"3\":\"DAL\",\"4\":54,\"5\":33.3,\"6\":9.5,\"7\":20.6,\"8\":0.461,\"9\":2.9,\"10\":9.1,\"11\":0.318,\"12\":6.8,\"13\":9.1,\"14\":0.752,\"15\":1.3,\"16\":8,\"17\":9.3,\"18\":8.7,\"19\":1.1,\"20\":0.2,\"21\":4.2,\"22\":28.7,\"23\":30.4,\"color\":\"blue\"},{\"0\":2544,\"1\":5,\"2\":\"LeBron James\",\"3\":\"LAL\",\"4\":60,\"5\":34.9,\"6\":9.8,\"7\":19.6,\"8\":0.498,\"9\":2.2,\"10\":6.4,\"11\":0.349,\"12\":4,\"13\":5.7,\"14\":0.697,\"15\":1,\"16\":6.9,\"17\":7.9,\"18\":10.6,\"19\":1.2,\"20\":0.5,\"21\":4,\"22\":25.7,\"23\":30.4,\"color\":\"yellow\"},{\"0\":203999,\"1\":6,\"2\":\"Nikola Jokic\",\"3\":\"DEN\",\"4\":65,\"5\":32.3,\"6\":7.9,\"7\":14.9,\"8\":0.528,\"9\":1.1,\"10\":3.5,\"11\":0.314,\"12\":3.4,\"13\":4.1,\"14\":0.813,\"15\":2.4,\"16\":7.8,\"17\":10.2,\"18\":6.9,\"19\":1.2,\"20\":0.7,\"21\":3.1,\"22\":20.2,\"23\":28.2,\"color\":\"lightblue\"},{\"0\":202355,\"1\":7,\"2\":\"Hassan Whiteside\",\"3\":\"POR\",\"4\":61,\"5\":31.3,\"6\":6.9,\"7\":11.1,\"8\":0.618,\"9\":0.1,\"10\":0.1,\"11\":0.571,\"12\":2.5,\"13\":3.7,\"14\":0.68,\"15\":4,\"16\":10.2,\"17\":14.2,\"18\":1.2,\"19\":0.4,\"20\":3.1,\"21\":1.9,\"22\":16.3,\"23\":27.9,\"color\":\"red\"},{\"0\":203081,\"1\":8,\"2\":\"Damian Lillard\",\"3\":\"POR\",\"4\":58,\"5\":36.9,\"6\":9.2,\"7\":20,\"8\":0.457,\"9\":3.9,\"10\":9.9,\"11\":0.394,\"12\":6.7,\"13\":7.6,\"14\":0.888,\"15\":0.5,\"16\":3.8,\"17\":4.3,\"18\":7.8,\"19\":1,\"20\":0.4,\"21\":2.9,\"22\":28.9,\"23\":27.8,\"color\":\"red\"},{\"0\":202695,\"1\":9,\"2\":\"Kawhi Leonard\",\"3\":\"LAC\",\"4\":51,\"5\":32.2,\"6\":9.3,\"7\":19.9,\"8\":0.469,\"9\":2.1,\"10\":5.7,\"11\":0.366,\"12\":6.1,\"13\":6.9,\"14\":0.889,\"15\":1,\"16\":6.3,\"17\":7.3,\"18\":5,\"19\":1.8,\"20\":0.6,\"21\":2.7,\"22\":26.9,\"23\":27.5,\"color\":\"lightblue\"},{\"0\":203083,\"1\":10,\"2\":\"Andre Drummond\",\"3\":\"CLE\",\"4\":57,\"5\":32.9,\"6\":7.3,\"7\":13.8,\"8\":0.533,\"9\":0.1,\"10\":0.6,\"11\":0.143,\"12\":3,\"13\":5.2,\"14\":0.575,\"15\":4.4,\"16\":10.8,\"17\":15.2,\"18\":2.7,\"19\":1.9,\"20\":1.6,\"21\":3.6,\"22\":17.7,\"23\":26.9,\"color\":\"maroon\"},{\"0\":1627734,\"1\":11,\"2\":\"Domantas Sabonis\",\"3\":\"IND\",\"4\":62,\"5\":34.8,\"6\":7.4,\"7\":13.7,\"8\":0.54,\"9\":0.3,\"10\":1.1,\"11\":0.254,\"12\":3.5,\"13\":4.8,\"14\":0.723,\"15\":3,\"16\":9.4,\"17\":12.4,\"18\":5,\"19\":0.8,\"20\":0.5,\"21\":2.7,\"22\":18.5,\"23\":26.8,\"color\":\"yellow\"},{\"0\":201566,\"1\":12,\"2\":\"Russell Westbrook\",\"3\":\"HOU\",\"4\":53,\"5\":35.9,\"6\":10.7,\"7\":22.6,\"8\":0.474,\"9\":1,\"10\":3.8,\"11\":0.254,\"12\":5.1,\"13\":6.5,\"14\":0.777,\"15\":1.8,\"16\":6.3,\"17\":8,\"18\":7,\"19\":1.7,\"20\":0.3,\"21\":4.5,\"22\":27.5,\"23\":26.7,\"color\":\"red\"},{\"0\":1629027,\"1\":13,\"2\":\"Trae Young\",\"3\":\"ATL\",\"4\":60,\"5\":35.3,\"6\":9.1,\"7\":20.8,\"8\":0.437,\"9\":3.4,\"10\":9.5,\"11\":0.361,\"12\":8,\"13\":9.3,\"14\":0.86,\"15\":0.5,\"16\":3.7,\"17\":4.3,\"18\":9.3,\"19\":1.1,\"20\":0.1,\"21\":4.8,\"22\":29.6,\"23\":26.6,\"color\":\"red\"},{\"0\":203497,\"1\":14,\"2\":\"Rudy Gobert\",\"3\":\"UTA\",\"4\":62,\"5\":34.5,\"6\":5.7,\"7\":8.2,\"8\":0.698,\"9\":0,\"10\":0,\"11\":0,\"12\":3.7,\"13\":5.9,\"14\":0.621,\"15\":3.4,\"16\":10.3,\"17\":13.7,\"18\":1.5,\"19\":0.8,\"20\":2,\"21\":1.9,\"22\":15.1,\"23\":26.4,\"color\":\"lightgreen\"},{\"0\":203078,\"1\":15,\"2\":\"Bradley Beal\",\"3\":\"WAS\",\"4\":57,\"5\":36,\"6\":10.4,\"7\":22.9,\"8\":0.455,\"9\":3,\"10\":8.4,\"11\":0.353,\"12\":6.8,\"13\":8,\"14\":0.842,\"15\":0.9,\"16\":3.3,\"17\":4.2,\"18\":6.1,\"19\":1.2,\"20\":0.4,\"21\":3.4,\"22\":30.5,\"23\":25.4,\"color\":\"navy\"},{\"0\":1627732,\"1\":16,\"2\":\"Ben Simmons\",\"3\":\"PHI\",\"4\":54,\"5\":35.8,\"6\":6.7,\"7\":11.4,\"8\":0.585,\"9\":0,\"10\":0.1,\"11\":0.333,\"12\":3.3,\"13\":5.3,\"14\":0.627,\"15\":2,\"16\":5.8,\"17\":7.8,\"18\":8.2,\"19\":2.1,\"20\":0.6,\"21\":3.6,\"22\":16.7,\"23\":25.2,\"color\":\"blue\"},{\"0\":1628389,\"1\":17,\"2\":\"Bam Adebayo\",\"3\":\"MIA\",\"4\":65,\"5\":34.4,\"6\":6.3,\"7\":11.1,\"8\":0.567,\"9\":0,\"10\":0.2,\"11\":0.077,\"12\":3.6,\"13\":5.3,\"14\":0.69,\"15\":2.5,\"16\":8,\"17\":10.5,\"18\":5.1,\"19\":1.2,\"20\":1.3,\"21\":2.8,\"22\":16.2,\"23\":25.1,\"color\":\"red\"},{\"0\":202696,\"1\":18,\"2\":\"Nikola Vucevic\",\"3\":\"ORL\",\"4\":54,\"5\":32.6,\"6\":7.9,\"7\":16.9,\"8\":0.47,\"9\":1.5,\"10\":4.6,\"11\":0.329,\"12\":2.1,\"13\":2.7,\"14\":0.781,\"15\":2.4,\"16\":8.6,\"17\":11,\"18\":3.7,\"19\":0.9,\"20\":0.9,\"21\":1.4,\"22\":19.5,\"23\":25,\"color\":\"lightblue\"},{\"0\":202710,\"1\":19,\"2\":\"Jimmy Butler\",\"3\":\"MIA\",\"4\":54,\"5\":34.3,\"6\":6.1,\"7\":13.4,\"8\":0.454,\"9\":0.5,\"10\":2.2,\"11\":0.248,\"12\":7.6,\"13\":9.1,\"14\":0.833,\"15\":1.8,\"16\":4.8,\"17\":6.6,\"18\":6.1,\"19\":1.7,\"20\":0.5,\"21\":2.2,\"22\":20.2,\"23\":24.3,\"color\":\"red\"},{\"0\":1626164,\"1\":20,\"2\":\"Devin Booker\",\"3\":\"PHX\",\"4\":62,\"5\":36.1,\"6\":8.8,\"7\":18,\"8\":0.487,\"9\":2,\"10\":5.6,\"11\":0.36,\"12\":6.5,\"13\":7.1,\"14\":0.916,\"15\":0.4,\"16\":3.7,\"17\":4.2,\"18\":6.6,\"19\":0.7,\"20\":0.3,\"21\":3.9,\"22\":26.1,\"23\":24,\"color\":\"orange\"},{\"0\":201942,\"1\":21,\"2\":\"DeMar DeRozan\",\"3\":\"SAS\",\"4\":61,\"5\":34.3,\"6\":8.2,\"7\":15.7,\"8\":0.526,\"9\":0.1,\"10\":0.5,\"11\":0.267,\"12\":5.5,\"13\":6.6,\"14\":0.843,\"15\":0.6,\"16\":5,\"17\":5.6,\"18\":5.6,\"19\":1,\"20\":0.2,\"21\":2.4,\"22\":22.2,\"23\":23.8,\"color\":\"gray\"},{\"0\":1627783,\"1\":22,\"2\":\"Pascal Siakam\",\"3\":\"TOR\",\"4\":53,\"5\":35.5,\"6\":8.7,\"7\":18.9,\"8\":0.459,\"9\":2.2,\"10\":6,\"11\":0.359,\"12\":4.2,\"13\":5.2,\"14\":0.8,\"15\":1.1,\"16\":6.5,\"17\":7.5,\"18\":3.6,\"19\":1,\"20\":0.9,\"21\":2.5,\"22\":23.6,\"23\":23,\"color\":\"red\"},{\"0\":1627742,\"1\":23,\"2\":\"Brandon Ingram\",\"3\":\"NOP\",\"4\":56,\"5\":34.3,\"6\":8.4,\"7\":18,\"8\":0.466,\"9\":2.4,\"10\":6.3,\"11\":0.387,\"12\":5.1,\"13\":5.9,\"14\":0.858,\"15\":0.9,\"16\":5.4,\"17\":6.3,\"18\":4.3,\"19\":1,\"20\":0.7,\"21\":3.1,\"22\":24.3,\"23\":22.9,\"color\":\"red\"},{\"0\":202685,\"1\":24,\"2\":\"Jonas Valanciunas\",\"3\":\"MEM\",\"4\":62,\"5\":26.3,\"6\":6.2,\"7\":10.6,\"8\":0.586,\"9\":0.5,\"10\":1.3,\"11\":0.367,\"12\":2,\"13\":2.7,\"14\":0.732,\"15\":3.1,\"16\":8.2,\"17\":11.2,\"18\":1.8,\"19\":0.4,\"20\":1.1,\"21\":1.7,\"22\":14.9,\"23\":22.5,\"color\":\"blue\"},{\"0\":1628369,\"1\":25,\"2\":\"Jayson Tatum\",\"3\":\"BOS\",\"4\":59,\"5\":34.6,\"6\":8.5,\"7\":18.9,\"8\":0.448,\"9\":2.8,\"10\":7.1,\"11\":0.398,\"12\":3.8,\"13\":4.7,\"14\":0.806,\"15\":1,\"16\":6.1,\"17\":7.1,\"18\":2.9,\"19\":1.4,\"20\":0.9,\"21\":2.2,\"22\":23.6,\"23\":22.3,\"color\":\"green\"},{\"0\":203114,\"1\":26,\"2\":\"Khris Middleton\",\"3\":\"MIL\",\"4\":55,\"5\":30.1,\"6\":7.7,\"7\":15.5,\"8\":0.499,\"9\":2.4,\"10\":5.8,\"11\":0.418,\"12\":3.2,\"13\":3.6,\"14\":0.908,\"15\":0.7,\"16\":5.5,\"17\":6.2,\"18\":4.1,\"19\":0.9,\"20\":0.1,\"21\":2.1,\"22\":21.1,\"23\":22.3,\"color\":\"green\"},{\"0\":101108,\"1\":27,\"2\":\"Chris Paul\",\"3\":\"OKC\",\"4\":63,\"5\":31.8,\"6\":6.3,\"7\":12.8,\"8\":0.489,\"9\":1.6,\"10\":4.4,\"11\":0.362,\"12\":3.6,\"13\":4,\"14\":0.9,\"15\":0.3,\"16\":4.6,\"17\":4.9,\"18\":6.8,\"19\":1.6,\"20\":0.1,\"21\":2.2,\"22\":17.7,\"23\":22,\"color\":\"blue\"},{\"0\":200768,\"1\":28,\"2\":\"Kyle Lowry\",\"3\":\"TOR\",\"4\":52,\"5\":36.6,\"6\":5.9,\"7\":14.3,\"8\":0.417,\"9\":2.9,\"10\":8.3,\"11\":0.354,\"12\":4.9,\"13\":5.7,\"14\":0.861,\"15\":0.6,\"16\":4.3,\"17\":4.8,\"18\":7.7,\"19\":1.3,\"20\":0.4,\"21\":3,\"22\":19.7,\"23\":21.9,\"color\":\"red\"},{\"0\":200746,\"1\":29,\"2\":\"LaMarcus Aldridge\",\"3\":\"SAS\",\"4\":53,\"5\":33.1,\"6\":7.4,\"7\":15,\"8\":0.493,\"9\":1.2,\"10\":3,\"11\":0.389,\"12\":3,\"13\":3.6,\"14\":0.827,\"15\":1.9,\"16\":5.5,\"17\":7.4,\"18\":2.4,\"19\":0.7,\"20\":1.6,\"21\":1.4,\"22\":18.9,\"23\":21.4,\"color\":\"gray\"},{\"0\":204001,\"1\":30,\"2\":\"Kristaps Porzingis\",\"3\":\"DAL\",\"4\":51,\"5\":31.3,\"6\":6.6,\"7\":15.8,\"8\":0.42,\"9\":2.5,\"10\":7.1,\"11\":0.349,\"12\":3.5,\"13\":4.5,\"14\":0.776,\"15\":1.7,\"16\":7.7,\"17\":9.5,\"18\":1.7,\"19\":0.7,\"20\":2.1,\"21\":1.6,\"22\":19.2,\"23\":21.4,\"color\":\"blue\"},{\"0\":201567,\"1\":31,\"2\":\"Kevin Love\",\"3\":\"CLE\",\"4\":56,\"5\":31.8,\"6\":5.8,\"7\":13,\"8\":0.45,\"9\":2.6,\"10\":7,\"11\":0.374,\"12\":3.3,\"13\":3.9,\"14\":0.854,\"15\":1,\"16\":8.8,\"17\":9.8,\"18\":3.2,\"19\":0.6,\"20\":0.3,\"21\":2.5,\"22\":17.6,\"23\":21.3,\"color\":\"red\"},{\"0\":203897,\"1\":32,\"2\":\"Zach LaVine\",\"3\":\"CHI\",\"4\":60,\"5\":34.8,\"6\":9,\"7\":20,\"8\":0.45,\"9\":3.1,\"10\":8.1,\"11\":0.38,\"12\":4.5,\"13\":5.6,\"14\":0.802,\"15\":0.7,\"16\":4.1,\"17\":4.8,\"18\":4.2,\"19\":1.5,\"20\":0.5,\"21\":3.4,\"22\":25.5,\"23\":21,\"color\":\"red\"},{\"0\":201950,\"1\":33,\"2\":\"Jrue Holiday\",\"3\":\"NOP\",\"4\":55,\"5\":34.9,\"6\":7.7,\"7\":16.9,\"8\":0.452,\"9\":2.1,\"10\":5.9,\"11\":0.357,\"12\":2.2,\"13\":3.1,\"14\":0.7,\"15\":1.3,\"16\":3.6,\"17\":4.9,\"18\":6.9,\"19\":1.7,\"20\":0.8,\"21\":2.9,\"22\":19.6,\"23\":20.7,\"color\":\"red\"},{\"0\":203944,\"1\":34,\"2\":\"Julius Randle\",\"3\":\"NYK\",\"4\":64,\"5\":32.5,\"6\":7.2,\"7\":15.7,\"8\":0.46,\"9\":1,\"10\":3.6,\"11\":0.277,\"12\":4,\"13\":5.5,\"14\":0.733,\"15\":2.4,\"16\":7.4,\"17\":9.7,\"18\":3.1,\"19\":0.8,\"20\":0.3,\"21\":3,\"22\":19.5,\"23\":20.5,\"color\":\"orange\"},{\"0\":202330,\"1\":35,\"2\":\"Gordon Hayward\",\"3\":\"BOS\",\"4\":45,\"5\":33.4,\"6\":6.8,\"7\":13.5,\"8\":0.502,\"9\":1.6,\"10\":4.2,\"11\":0.392,\"12\":2.1,\"13\":2.5,\"14\":0.847,\"15\":1,\"16\":5.5,\"17\":6.5,\"18\":4.1,\"19\":0.8,\"20\":0.4,\"21\":1.8,\"22\":17.3,\"23\":20.3,\"color\":\"green\"},{\"0\":1626149,\"1\":36,\"2\":\"Montrezl Harrell\",\"3\":\"LAC\",\"4\":63,\"5\":27.8,\"6\":7.5,\"7\":12.9,\"8\":0.58,\"9\":0,\"10\":0.3,\"11\":0,\"12\":3.7,\"13\":5.6,\"14\":0.658,\"15\":2.6,\"16\":4.5,\"17\":7.1,\"18\":1.7,\"19\":0.6,\"20\":1.1,\"21\":1.7,\"22\":18.6,\"23\":20.1,\"color\":\"lightblue\"},{\"0\":202699,\"1\":37,\"2\":\"Tobias Harris\",\"3\":\"PHI\",\"4\":65,\"5\":34.5,\"6\":7.6,\"7\":16.1,\"8\":0.472,\"9\":1.8,\"10\":5,\"11\":0.362,\"12\":2.4,\"13\":2.9,\"14\":0.806,\"15\":0.8,\"16\":5.9,\"17\":6.8,\"18\":3.2,\"19\":0.8,\"20\":0.5,\"21\":1.5,\"22\":19.4,\"23\":20,\"color\":\"blue\"},{\"0\":1628378,\"1\":38,\"2\":\"Donovan Mitchell\",\"3\":\"UTA\",\"4\":63,\"5\":34.4,\"6\":8.9,\"7\":19.6,\"8\":0.453,\"9\":2.5,\"10\":6.8,\"11\":0.364,\"12\":4,\"13\":4.6,\"14\":0.859,\"15\":0.7,\"16\":3.7,\"17\":4.4,\"18\":4.2,\"19\":1,\"20\":0.2,\"21\":2.7,\"22\":24.2,\"23\":20,\"color\":\"lightgreen\"},{\"0\":1628368,\"1\":39,\"2\":\"De'Aaron Fox\",\"3\":\"SAC\",\"4\":45,\"5\":31.7,\"6\":7.3,\"7\":15.4,\"8\":0.475,\"9\":1,\"10\":3.4,\"11\":0.307,\"12\":4.8,\"13\":6.8,\"14\":0.703,\"15\":0.7,\"16\":3.4,\"17\":4,\"18\":6.8,\"19\":1.4,\"20\":0.5,\"21\":3.1,\"22\":20.4,\"23\":19.9,\"color\":\"purple\"},{\"0\":1628983,\"1\":40,\"2\":\"Shai Gilgeous-Alexander\",\"3\":\"OKC\",\"4\":63,\"5\":35.1,\"6\":7,\"7\":14.8,\"8\":0.473,\"9\":1.2,\"10\":3.5,\"11\":0.351,\"12\":4,\"13\":5,\"14\":0.801,\"15\":0.7,\"16\":5.4,\"17\":6.1,\"18\":3.3,\"19\":1.1,\"20\":0.7,\"21\":1.9,\"22\":19.3,\"23\":19.8,\"color\":\"blue\"},{\"0\":1626156,\"1\":41,\"2\":\"D'Angelo Russell\",\"3\":\"MIN\",\"4\":45,\"5\":32.3,\"6\":8,\"7\":18.8,\"8\":0.426,\"9\":3.5,\"10\":9.6,\"11\":0.367,\"12\":3.6,\"13\":4.4,\"14\":0.809,\"15\":0.4,\"16\":3.6,\"17\":3.9,\"18\":6.3,\"19\":1.1,\"20\":0.3,\"21\":3.3,\"22\":23.1,\"23\":19.8,\"color\":\"lightgreen\"},{\"0\":202689,\"1\":42,\"2\":\"Kemba Walker\",\"3\":\"BOS\",\"4\":50,\"5\":31.8,\"6\":7,\"7\":16.6,\"8\":0.421,\"9\":3.3,\"10\":8.8,\"11\":0.377,\"12\":3.9,\"13\":4.5,\"14\":0.867,\"15\":0.7,\"16\":3.4,\"17\":4.1,\"18\":4.9,\"19\":0.9,\"20\":0.5,\"21\":2.1,\"22\":21.2,\"23\":19.3,\"color\":\"green\"},{\"0\":1627759,\"1\":43,\"2\":\"Jaylen Brown\",\"3\":\"BOS\",\"4\":50,\"5\":34,\"6\":7.6,\"7\":15.4,\"8\":0.49,\"9\":2.1,\"10\":5.6,\"11\":0.381,\"12\":3.2,\"13\":4.3,\"14\":0.736,\"15\":1.1,\"16\":5.3,\"17\":6.4,\"18\":2.2,\"19\":1.1,\"20\":0.3,\"21\":2.3,\"22\":20.4,\"23\":19.1,\"color\":\"green\"},{\"0\":203468,\"1\":44,\"2\":\"CJ McCollum\",\"3\":\"POR\",\"4\":62,\"5\":36,\"6\":8.9,\"7\":19.5,\"8\":0.453,\"9\":2.8,\"10\":7.4,\"11\":0.38,\"12\":2,\"13\":2.6,\"14\":0.75,\"15\":0.7,\"16\":3.4,\"17\":4.1,\"18\":4.3,\"19\":0.7,\"20\":0.6,\"21\":1.9,\"22\":22.5,\"23\":19.1,\"color\":\"red\"},{\"0\":203500,\"1\":45,\"2\":\"Steven Adams\",\"3\":\"OKC\",\"4\":58,\"5\":27,\"6\":4.5,\"7\":7.6,\"8\":0.591,\"9\":0,\"10\":0.1,\"11\":0.333,\"12\":1.9,\"13\":3.2,\"14\":0.59,\"15\":3.4,\"16\":6,\"17\":9.4,\"18\":2.4,\"19\":0.9,\"20\":1.1,\"21\":1.5,\"22\":10.9,\"23\":18.8,\"color\":\"blue\"},{\"0\":201937,\"1\":46,\"2\":\"Ricky Rubio\",\"3\":\"PHX\",\"4\":57,\"5\":31.6,\"6\":4.4,\"7\":10.7,\"8\":0.412,\"9\":1.2,\"10\":3.3,\"11\":0.351,\"12\":3.1,\"13\":3.6,\"14\":0.853,\"15\":0.7,\"16\":3.9,\"17\":4.6,\"18\":8.9,\"19\":1.5,\"20\":0.2,\"21\":2.7,\"22\":13.1,\"23\":18.8,\"color\":\"orange\"},{\"0\":1627832,\"1\":47,\"2\":\"Fred VanVleet\",\"3\":\"TOR\",\"4\":48,\"5\":35.8,\"6\":6,\"7\":14.6,\"8\":0.409,\"9\":2.7,\"10\":7,\"11\":0.388,\"12\":2.9,\"13\":3.5,\"14\":0.843,\"15\":0.4,\"16\":3.4,\"17\":3.8,\"18\":6.6,\"19\":1.9,\"20\":0.3,\"21\":2.3,\"22\":17.6,\"23\":18.7,\"color\":\"red\"},{\"0\":1627763,\"1\":48,\"2\":\"Malcolm Brogdon\",\"3\":\"IND\",\"4\":48,\"5\":30.7,\"6\":6,\"7\":13.7,\"8\":0.439,\"9\":1.3,\"10\":4.1,\"11\":0.313,\"12\":3,\"13\":3.4,\"14\":0.895,\"15\":0.8,\"16\":3.9,\"17\":4.7,\"18\":7.1,\"19\":0.7,\"20\":0.2,\"21\":2.4,\"22\":16.3,\"23\":18.6,\"color\":\"yellow\"},{\"0\":1628386,\"1\":49,\"2\":\"Jarrett Allen\",\"3\":\"BKN\",\"4\":64,\"5\":25.7,\"6\":4.2,\"7\":6.5,\"8\":0.646,\"9\":0,\"10\":0.1,\"11\":0,\"12\":2.3,\"13\":3.7,\"14\":0.62,\"15\":3,\"16\":6.4,\"17\":9.5,\"18\":1.3,\"19\":0.6,\"20\":1.3,\"21\":1.1,\"22\":10.6,\"23\":18.5,\"color\":\"gray\"},{\"0\":201586,\"1\":50,\"2\":\"Serge Ibaka\",\"3\":\"TOR\",\"4\":50,\"5\":27.5,\"6\":6.5,\"7\":12.5,\"8\":0.518,\"9\":1.3,\"10\":3.3,\"11\":0.398,\"12\":1.8,\"13\":2.4,\"14\":0.748,\"15\":2.1,\"16\":6.2,\"17\":8.3,\"18\":1.5,\"19\":0.5,\"20\":0.8,\"21\":2,\"22\":16,\"23\":18.5,\"color\":\"red\"}]");

/***/ }),

/***/ "./src/bubble_chart.js":
/*!*****************************!*\
  !*** ./src/bubble_chart.js ***!
  \*****************************/
/*! exports provided: bubble_chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble_chart", function() { return bubble_chart; });
/* harmony import */ var _data_stats_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/stats.json */ "./data/stats.json");
var _data_stats_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/stats.json */ "./data/stats.json", 1);

var bubble_chart = function bubble_chart() {
  var svg = d3.select('#top_per').append('svg').attr('width', 900).attr('height', 700).attr('style', 'border: thin white solid'); // .style('background-color', 'white')

  var pack = d3.pack().size([900, 700]).padding(3);
  var data = _data_stats_json__WEBPACK_IMPORTED_MODULE_0__.sort(function (a, b) {
    return b['22'] - a['22'];
  });
  var hierarchy1 = d3.hierarchy({
    children: data
  }).sum(function (d) {
    return d['22'];
  });
  var root = pack(hierarchy1);
  var leaf = svg.selectAll("g").data(root.leaves()).join("g").attr("transform", function (d) {
    return "translate(".concat(d.x + 1, ",").concat(d.y + 1, ")");
  }); // .attr("transform", d => `translate(0,0)`)

  leaf.append("circle").attr("r", function (d) {
    if (d.data['22'] > 28) {
      return d.data['22'] + 30;
    } else if (d.data['22'] > 25) {
      return d.data['22'] + 25;
    } else if (d.data['22'] > 20) {
      return d.data['22'] + 20;
    } else {
      return d.data['22'] + 20;
    }
  }) // d.data['22'] + 18)
  .attr("fill-opacity", 0.95).attr("fill", function (d) {
    return d.data.color;
  });
  leaf.append("text").text(function (d) {
    return d.data['22'];
  }); // let vis = leaf.selectAll("circle")
  //   .data(nodes, d => d['2'])
  // leaf.append("clipPath")
  //   .append("use")
  //   .attr("xlink:href", d => d.leafUid.href);
  // leaf.append("text")
  //   .attr("clip-path", d => d.clipUid)
  //   .selectAll("tspan")
  //   .data(d => d.data.name.split(/(?=[A-Z][a-z])|\s+/g))
  //   .join("tspan")
  //   .attr("x", 0)
  //   .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
  //   .text(d => d);
  // leaf.append("title")
  //   .text(d => `${d.data.title === undefined ? "" : `${d.data.title}`}${format(d.value)}`);

  return svg.node();
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bubble_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble_chart */ "./src/bubble_chart.js");
/* harmony import */ var _outer_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outer_circle */ "./src/outer_circle.js");
/* harmony import */ var _stat_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat_bar */ "./src/stat_bar.js");



document.addEventListener("DOMContentLoaded", function () {
  Object(_bubble_chart__WEBPACK_IMPORTED_MODULE_0__["bubble_chart"])();
  Object(_stat_bar__WEBPACK_IMPORTED_MODULE_2__["stat_bar"])();
  Object(_outer_circle__WEBPACK_IMPORTED_MODULE_1__["outer_circle"])();
});

/***/ }),

/***/ "./src/outer_circle.js":
/*!*****************************!*\
  !*** ./src/outer_circle.js ***!
  \*****************************/
/*! exports provided: outer_circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outer_circle", function() { return outer_circle; });
var outer_circle = function outer_circle() {};

/***/ }),

/***/ "./src/stat_bar.js":
/*!*************************!*\
  !*** ./src/stat_bar.js ***!
  \*************************/
/*! exports provided: stat_bar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stat_bar", function() { return stat_bar; });
/* harmony import */ var _data_stats_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/stats.json */ "./data/stats.json");
var _data_stats_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/stats.json */ "./data/stats.json", 1);

var stat_bar = function stat_bar() {
  var margin = 110;
  var height = 800;
  var width = 700;
  var svg2 = d3.select("#stat_bar").append("svg").attr("width", 900) // .attr("min-height", height)
  .attr("style", "border: thin white solid");
  var top25pts = _data_stats_json__WEBPACK_IMPORTED_MODULE_0__.sort(function (a, b) {
    return b["22"] - a["22"];
  }).slice(0, _data_stats_json__WEBPACK_IMPORTED_MODULE_0__.length / 2 - 10);
  var rTopPts = top25pts.reverse();
  var chart = svg2.append('g').attr('transform', "translate(".concat(margin, ", ").concat(margin, ")"));
  var yScale = d3.scaleBand().range([600, 0]).domain(rTopPts.map(function (s) {
    return s['2'].split(' ')[1];
  })).padding(0.4);
  var yAxis = chart.append('g').call(d3.axisLeft(yScale));
  var xScale = d3.scaleLinear().range([0, width]).domain([16, 36]);
  var xAxis = chart.append('g') // .attr('transform', `translate(0, 700)`)
  .call(d3.axisTop(xScale).ticks(7));
  var barGroups = chart.selectAll().data(rTopPts).enter().append('g');
  xAxis.selectAll('text').style('font-size', '13px');
  yAxis.selectAll('text').style('font-size', '13px'); // .style('font-style', 'italic')

  barGroups.append("rect").attr("class", "bar").style("stroke", function (d) {
    return d.color;
  }).style("stroke-width", 2).attr("fill-opacity", 0.30).attr("fill", function (d) {
    return d.color;
  }).attr("x", function (d) {
    return xScale(d["22"]);
  }).attr("y", function (d) {
    return yScale(d["2"].split(" ")[1]);
  }).attr("width", function (d) {
    return 0;
  }).attr("height", yScale.bandwidth()).attr("x", function (actual, i, rTopPts) {
    return yScale(rTopPts[i]["22"]);
  }).on("mouseenter", function (s, i) {
    d3.select(this).transition().duration(300).attr("fill-opacity", 0.85).attr("height", yScale.bandwidth() + 5);
    var x = xScale(rTopPts[i]["22"]);
    var line = chart.append("line").attr("id", "limit").attr("x1", x).attr("y1", 0).attr("x2", x).attr("y2", height).attr("stroke", "orange");
  }).on("mouseleave", function () {
    d3.select(this).transition().duration(300).attr("fill-opacity", 0.25).attr("height", yScale.bandwidth());
    chart.selectAll("#limit").remove();
  }).on("click", function (s, i) {
    var statRect = d3.select("#details").append('rect').attr('class', 'detail').attr('width', '100%').attr('height', 100).attr('style', 'border: thin #616161 solid');
  });
  svg2.selectAll('rect').transition().duration(1000).attr("x", function (d) {
    return xScale(d["22"]);
  }).attr("width", function (d) {
    return xScale(d["22"]);
  }).attr("x", function (actual, i, rTopPts) {
    return yScale(rTopPts[i]["22"]);
  });
  barGroups.append("text").attr("class", "value").attr("x", function (d) {
    return xScale(d["22"]) + 24;
  }).attr("y", function (d) {
    return yScale(d["2"].split(" ")[1]) + 4 + yScale.bandwidth() / 2;
  }).attr("text-anchor", "middle").text(function (d) {
    return d["22"];
  }).style('fill', 'white');
  barGroups.append("text").attr("class", "value").attr("x", function (d) {
    return xScale(d["22"]) / 2;
  }).attr("y", function (d) {
    return yScale(d["2"].split(" ")[1]) + 5 + yScale.bandwidth() / 2;
  }).attr("text-anchor", "middle").style('fill', 'white').style('font-style', 'italic').style('font-size', '15px').text(function (d) {
    return d["2"];
  });
  svg2.append('text').attr('x', width / 2 + margin).attr('y', 50).attr('text-anchor', 'middle').text('Top 15 Scorers in the League').style('font-size', '30px').style('fill', 'white');
  svg2.append('text').attr('x', width + 30).attr('y', 75).attr('text-anchor', 'start').text('Points Per Game').style('fill', 'pink').style('font-size', '13px');
  svg2.append('text').attr('class', 'source').attr('x', width - margin / 2).attr('y', height - margin + 20).attr('text-anchor', 'start').text('Source: NBA Stats, 2019-2020').style('fill', 'pink');
  svg2.append(); // detailsSvg.append()
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZV9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGVyX2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdF9iYXIuanMiXSwibmFtZXMiOlsiYnViYmxlX2NoYXJ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwicGFjayIsInNpemUiLCJwYWRkaW5nIiwiZGF0YSIsInN0YXRzIiwic29ydCIsImEiLCJiIiwiaGllcmFyY2h5MSIsImhpZXJhcmNoeSIsImNoaWxkcmVuIiwic3VtIiwiZCIsInJvb3QiLCJsZWFmIiwic2VsZWN0QWxsIiwibGVhdmVzIiwiam9pbiIsIngiLCJ5IiwiY29sb3IiLCJ0ZXh0Iiwibm9kZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRfYmFyIiwib3V0ZXJfY2lyY2xlIiwibWFyZ2luIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdmcyIiwidG9wMjVwdHMiLCJzbGljZSIsImxlbmd0aCIsInJUb3BQdHMiLCJyZXZlcnNlIiwiY2hhcnQiLCJ5U2NhbGUiLCJzY2FsZUJhbmQiLCJyYW5nZSIsImRvbWFpbiIsIm1hcCIsInMiLCJzcGxpdCIsInlBeGlzIiwiY2FsbCIsImF4aXNMZWZ0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJ4QXhpcyIsImF4aXNUb3AiLCJ0aWNrcyIsImJhckdyb3VwcyIsImVudGVyIiwic3R5bGUiLCJiYW5kd2lkdGgiLCJhY3R1YWwiLCJpIiwib24iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJsaW5lIiwicmVtb3ZlIiwic3RhdFJlY3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUNoQyxNQUFJQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFVBQVYsRUFBc0JDLE1BQXRCLENBQTZCLEtBQTdCLEVBQ1BDLElBRE8sQ0FDRixPQURFLEVBQ08sR0FEUCxFQUVQQSxJQUZPLENBRUYsUUFGRSxFQUVRLEdBRlIsRUFHUEEsSUFITyxDQUdGLE9BSEUsRUFHTywwQkFIUCxDQUFWLENBRGdDLENBSzlCOztBQUVGLE1BQUlDLElBQUksR0FBR0osRUFBRSxDQUFDSSxJQUFILEdBQVVDLElBQVYsQ0FBZSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWYsRUFBMkJDLE9BQTNCLENBQW1DLENBQW5DLENBQVg7QUFDQSxNQUFJQyxJQUFJLEdBQUdDLDZDQUFLLENBQUNDLElBQU4sQ0FBVyxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSxXQUFTQSxDQUFDLENBQUMsSUFBRCxDQUFELEdBQVVELENBQUMsQ0FBQyxJQUFELENBQXBCO0FBQUEsR0FBWCxDQUFYO0FBQ0EsTUFBSUUsVUFBVSxHQUFHWixFQUFFLENBQUNhLFNBQUgsQ0FBYTtBQUFFQyxZQUFRLEVBQUVQO0FBQVosR0FBYixFQUFpQ1EsR0FBakMsQ0FBcUMsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQyxJQUFELENBQUw7QUFBQSxHQUF0QyxDQUFqQjtBQUVBLE1BQU1DLElBQUksR0FBR2IsSUFBSSxDQUFDUSxVQUFELENBQWpCO0FBRUEsTUFBTU0sSUFBSSxHQUFHbkIsR0FBRyxDQUFDb0IsU0FBSixDQUFjLEdBQWQsRUFDVlosSUFEVSxDQUNMVSxJQUFJLENBQUNHLE1BQUwsRUFESyxFQUVWQyxJQUZVLENBRUwsR0FGSyxFQUdWbEIsSUFIVSxDQUdMLFdBSEssRUFHUSxVQUFBYSxDQUFDO0FBQUEsK0JBQWlCQSxDQUFDLENBQUNNLENBQUYsR0FBTSxDQUF2QixjQUE0Qk4sQ0FBQyxDQUFDTyxDQUFGLEdBQU0sQ0FBbEM7QUFBQSxHQUhULENBQWIsQ0FiZ0MsQ0FpQjlCOztBQUVGTCxNQUFJLENBQUNoQixNQUFMLENBQVksUUFBWixFQUNHQyxJQURILENBQ1EsR0FEUixFQUNhLFVBQUFhLENBQUMsRUFBSTtBQUNkLFFBQUlBLENBQUMsQ0FBQ1QsSUFBRixDQUFPLElBQVAsSUFBZSxFQUFuQixFQUF1QjtBQUNyQixhQUFPUyxDQUFDLENBQUNULElBQUYsQ0FBTyxJQUFQLElBQWUsRUFBdEI7QUFDRCxLQUZELE1BRU8sSUFBSVMsQ0FBQyxDQUFDVCxJQUFGLENBQU8sSUFBUCxJQUFlLEVBQW5CLEVBQXVCO0FBQzVCLGFBQU9TLENBQUMsQ0FBQ1QsSUFBRixDQUFPLElBQVAsSUFBZSxFQUF0QjtBQUNELEtBRk0sTUFFQSxJQUFJUyxDQUFDLENBQUNULElBQUYsQ0FBTyxJQUFQLElBQWUsRUFBbkIsRUFBdUI7QUFDNUIsYUFBT1MsQ0FBQyxDQUFDVCxJQUFGLENBQU8sSUFBUCxJQUFlLEVBQXRCO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsYUFBT1MsQ0FBQyxDQUFDVCxJQUFGLENBQU8sSUFBUCxJQUFlLEVBQXRCO0FBQ0Q7QUFDQSxHQVhMLEVBWUk7QUFaSixHQWFHSixJQWJILENBYVEsY0FiUixFQWF3QixJQWJ4QixFQWNHQSxJQWRILENBY1EsTUFkUixFQWNnQixVQUFBYSxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDVCxJQUFGLENBQU9pQixLQUFYO0FBQUEsR0FkakI7QUFpQkFOLE1BQUksQ0FBQ2hCLE1BQUwsQ0FBWSxNQUFaLEVBQ0d1QixJQURILENBQ1EsVUFBQVQsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1QsSUFBRixDQUFPLElBQVAsQ0FBSjtBQUFBLEdBRFQsRUFwQ2dDLENBdUNoQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBT1IsR0FBRyxDQUFDMkIsSUFBSixFQUFQO0FBQ0QsQ0EzRE0sQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRDlCLG9FQUFZO0FBQ1orQiw0REFBUTtBQUNSQyxvRUFBWTtBQUNiLENBSkQsRTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FFakMsQ0FGTSxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUQsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUM1QixNQUFNRSxNQUFNLEdBQUcsR0FBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxHQUFmO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEdBQWQ7QUFFQSxNQUFJQyxJQUFJLEdBQUdsQyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxXQUFWLEVBQXVCQyxNQUF2QixDQUE4QixLQUE5QixFQUNSQyxJQURRLENBQ0gsT0FERyxFQUNNLEdBRE4sRUFFVDtBQUZTLEdBR1JBLElBSFEsQ0FHSCxPQUhHLEVBR00sMEJBSE4sQ0FBWDtBQUtBLE1BQU1nQyxRQUFRLEdBQUczQiw2Q0FBSyxDQUFDQyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxHQUFVRCxDQUFDLENBQUMsSUFBRCxDQUFyQjtBQUFBLEdBQVgsRUFBd0MwQixLQUF4QyxDQUE4QyxDQUE5QyxFQUFpRDVCLDZDQUFLLENBQUM2QixNQUFOLEdBQWUsQ0FBZixHQUFtQixFQUFwRSxDQUFqQjtBQUVBLE1BQU1DLE9BQU8sR0FBR0gsUUFBUSxDQUFDSSxPQUFULEVBQWhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHTixJQUFJLENBQUNoQyxNQUFMLENBQVksR0FBWixFQUNYQyxJQURXLENBQ04sV0FETSxzQkFDb0I0QixNQURwQixlQUMrQkEsTUFEL0IsT0FBZDtBQUdBLE1BQU1VLE1BQU0sR0FBR3pDLEVBQUUsQ0FBQzBDLFNBQUgsR0FDWkMsS0FEWSxDQUNOLENBQUMsR0FBRCxFQUFNLENBQU4sQ0FETSxFQUVaQyxNQUZZLENBRUxOLE9BQU8sQ0FBQ08sR0FBUixDQUFZLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUMsR0FBRCxDQUFELENBQU9DLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCLENBQUo7QUFBQSxHQUFiLENBRkssRUFHWnpDLE9BSFksQ0FHSixHQUhJLENBQWY7QUFLQSxNQUFJMEMsS0FBSyxHQUFHUixLQUFLLENBQUN0QyxNQUFOLENBQWEsR0FBYixFQUNUK0MsSUFEUyxDQUNKakQsRUFBRSxDQUFDa0QsUUFBSCxDQUFZVCxNQUFaLENBREksQ0FBWjtBQUdBLE1BQU1VLE1BQU0sR0FBR25ELEVBQUUsQ0FBQ29ELFdBQUgsR0FDWlQsS0FEWSxDQUNOLENBQUMsQ0FBRCxFQUFJVixLQUFKLENBRE0sRUFFWlcsTUFGWSxDQUVMLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FGSyxDQUFmO0FBSUEsTUFBSVMsS0FBSyxHQUFHYixLQUFLLENBQUN0QyxNQUFOLENBQWEsR0FBYixFQUNWO0FBRFUsR0FFVCtDLElBRlMsQ0FFSmpELEVBQUUsQ0FBQ3NELE9BQUgsQ0FBV0gsTUFBWCxFQUFtQkksS0FBbkIsQ0FBeUIsQ0FBekIsQ0FGSSxDQUFaO0FBSUEsTUFBTUMsU0FBUyxHQUFHaEIsS0FBSyxDQUFDckIsU0FBTixHQUNmWixJQURlLENBQ1YrQixPQURVLEVBRWZtQixLQUZlLEdBR2Z2RCxNQUhlLENBR1IsR0FIUSxDQUFsQjtBQUtBbUQsT0FBSyxDQUFDbEMsU0FBTixDQUFnQixNQUFoQixFQUNHdUMsS0FESCxDQUNTLFdBRFQsRUFDc0IsTUFEdEI7QUFFQVYsT0FBSyxDQUFDN0IsU0FBTixDQUFnQixNQUFoQixFQUNHdUMsS0FESCxDQUNTLFdBRFQsRUFDc0IsTUFEdEIsRUF2QzRCLENBeUMxQjs7QUFFRkYsV0FBUyxDQUNOdEQsTUFESCxDQUNVLE1BRFYsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUIsS0FGakIsRUFHR3VELEtBSEgsQ0FHUyxRQUhULEVBR21CLFVBQUExQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDUSxLQUFOO0FBQUEsR0FIcEIsRUFJR2tDLEtBSkgsQ0FJUyxjQUpULEVBSXlCLENBSnpCLEVBS0d2RCxJQUxILENBS1EsY0FMUixFQUt3QixJQUx4QixFQU1HQSxJQU5ILENBTVEsTUFOUixFQU1nQixVQUFBYSxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDUSxLQUFOO0FBQUEsR0FOakIsRUFPR3JCLElBUEgsQ0FPUSxHQVBSLEVBT2EsVUFBQWEsQ0FBQztBQUFBLFdBQUltQyxNQUFNLENBQUNuQyxDQUFDLENBQUMsSUFBRCxDQUFGLENBQVY7QUFBQSxHQVBkLEVBUUdiLElBUkgsQ0FRUSxHQVJSLEVBUWEsVUFBQWEsQ0FBQztBQUFBLFdBQUl5QixNQUFNLENBQUN6QixDQUFDLENBQUMsR0FBRCxDQUFELENBQU8rQixLQUFQLENBQWEsR0FBYixFQUFrQixDQUFsQixDQUFELENBQVY7QUFBQSxHQVJkLEVBU0c1QyxJQVRILENBU1EsT0FUUixFQVNpQixVQUFBYSxDQUFDO0FBQUEsV0FBSSxDQUFKO0FBQUEsR0FUbEIsRUFVR2IsSUFWSCxDQVVRLFFBVlIsRUFVa0JzQyxNQUFNLENBQUNrQixTQUFQLEVBVmxCLEVBV0d4RCxJQVhILENBV1EsR0FYUixFQVdhLFVBQUN5RCxNQUFELEVBQVNDLENBQVQsRUFBWXZCLE9BQVo7QUFBQSxXQUF3QkcsTUFBTSxDQUFDSCxPQUFPLENBQUN1QixDQUFELENBQVAsQ0FBVyxJQUFYLENBQUQsQ0FBOUI7QUFBQSxHQVhiLEVBYUdDLEVBYkgsQ0FhTSxZQWJOLEVBYW9CLFVBQVNoQixDQUFULEVBQVllLENBQVosRUFBZTtBQUMvQjdELE1BQUUsQ0FBQ0MsTUFBSCxDQUFVLElBQVYsRUFDRzhELFVBREgsR0FFR0MsUUFGSCxDQUVZLEdBRlosRUFHRzdELElBSEgsQ0FHUSxjQUhSLEVBR3dCLElBSHhCLEVBSUdBLElBSkgsQ0FJUSxRQUpSLEVBSWtCc0MsTUFBTSxDQUFDa0IsU0FBUCxLQUFxQixDQUp2QztBQU1BLFFBQU1yQyxDQUFDLEdBQUc2QixNQUFNLENBQUNiLE9BQU8sQ0FBQ3VCLENBQUQsQ0FBUCxDQUFXLElBQVgsQ0FBRCxDQUFoQjtBQUVBLFFBQU1JLElBQUksR0FBR3pCLEtBQUssQ0FDZnRDLE1BRFUsQ0FDSCxNQURHLEVBRVZDLElBRlUsQ0FFTCxJQUZLLEVBRUMsT0FGRCxFQUdWQSxJQUhVLENBR0wsSUFISyxFQUdDbUIsQ0FIRCxFQUlWbkIsSUFKVSxDQUlMLElBSkssRUFJQyxDQUpELEVBS1ZBLElBTFUsQ0FLTCxJQUxLLEVBS0NtQixDQUxELEVBTVZuQixJQU5VLENBTUwsSUFOSyxFQU1DNkIsTUFORCxFQU9WN0IsSUFQVSxDQU9MLFFBUEssRUFPSyxRQVBMLENBQWI7QUFRRCxHQTlCSCxFQWdDRzJELEVBaENILENBZ0NNLFlBaENOLEVBZ0NvQixZQUFXO0FBQzNCOUQsTUFBRSxDQUFDQyxNQUFILENBQVUsSUFBVixFQUNHOEQsVUFESCxHQUVHQyxRQUZILENBRVksR0FGWixFQUdHN0QsSUFISCxDQUdRLGNBSFIsRUFHd0IsSUFIeEIsRUFJR0EsSUFKSCxDQUlRLFFBSlIsRUFJa0JzQyxNQUFNLENBQUNrQixTQUFQLEVBSmxCO0FBTUFuQixTQUFLLENBQUNyQixTQUFOLENBQWdCLFFBQWhCLEVBQTBCK0MsTUFBMUI7QUFDRCxHQXhDSCxFQTBDR0osRUExQ0gsQ0EwQ00sT0ExQ04sRUEwQ2UsVUFBU2hCLENBQVQsRUFBWWUsQ0FBWixFQUFlO0FBQzFCLFFBQU1NLFFBQVEsR0FBR25FLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFVBQVYsRUFBc0JDLE1BQXRCLENBQTZCLE1BQTdCLEVBQ2RDLElBRGMsQ0FDVCxPQURTLEVBQ0EsUUFEQSxFQUVkQSxJQUZjLENBRVQsT0FGUyxFQUVBLE1BRkEsRUFHZEEsSUFIYyxDQUdULFFBSFMsRUFHQyxHQUhELEVBSWRBLElBSmMsQ0FJVCxPQUpTLEVBSUEsNEJBSkEsQ0FBakI7QUFPRCxHQWxESDtBQW9EQStCLE1BQUksQ0FBQ2YsU0FBTCxDQUFlLE1BQWYsRUFDRzRDLFVBREgsR0FFR0MsUUFGSCxDQUVZLElBRlosRUFHRzdELElBSEgsQ0FHUSxHQUhSLEVBR2EsVUFBQWEsQ0FBQztBQUFBLFdBQUltQyxNQUFNLENBQUNuQyxDQUFDLENBQUMsSUFBRCxDQUFGLENBQVY7QUFBQSxHQUhkLEVBSUdiLElBSkgsQ0FJUSxPQUpSLEVBSWlCLFVBQUFhLENBQUM7QUFBQSxXQUFJbUMsTUFBTSxDQUFDbkMsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFWO0FBQUEsR0FKbEIsRUFLR2IsSUFMSCxDQUtRLEdBTFIsRUFLYSxVQUFDeUQsTUFBRCxFQUFTQyxDQUFULEVBQVl2QixPQUFaO0FBQUEsV0FBd0JHLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDdUIsQ0FBRCxDQUFQLENBQVcsSUFBWCxDQUFELENBQTlCO0FBQUEsR0FMYjtBQU9BTCxXQUFTLENBQ050RCxNQURILENBQ1UsTUFEVixFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQixPQUZqQixFQUdHQSxJQUhILENBR1EsR0FIUixFQUdhLFVBQUFhLENBQUM7QUFBQSxXQUFJbUMsTUFBTSxDQUFDbkMsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFOLEdBQWtCLEVBQXRCO0FBQUEsR0FIZCxFQUlHYixJQUpILENBSVEsR0FKUixFQUlhLFVBQUFhLENBQUM7QUFBQSxXQUFJeUIsTUFBTSxDQUFDekIsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxDQUFPK0IsS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FBRCxDQUFOLEdBQStCLENBQS9CLEdBQW1DTixNQUFNLENBQUNrQixTQUFQLEtBQXFCLENBQTVEO0FBQUEsR0FKZCxFQUtHeEQsSUFMSCxDQUtRLGFBTFIsRUFLdUIsUUFMdkIsRUFNR3NCLElBTkgsQ0FNUSxVQUFBVCxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDLElBQUQsQ0FBTDtBQUFBLEdBTlQsRUFPRzBDLEtBUEgsQ0FPUyxNQVBULEVBT2lCLE9BUGpCO0FBU0FGLFdBQVMsQ0FDTnRELE1BREgsQ0FDVSxNQURWLEVBRUdDLElBRkgsQ0FFUSxPQUZSLEVBRWlCLE9BRmpCLEVBR0dBLElBSEgsQ0FHUSxHQUhSLEVBR2EsVUFBQWEsQ0FBQztBQUFBLFdBQUltQyxNQUFNLENBQUNuQyxDQUFDLENBQUMsSUFBRCxDQUFGLENBQU4sR0FBa0IsQ0FBdEI7QUFBQSxHQUhkLEVBSUdiLElBSkgsQ0FJUSxHQUpSLEVBSWEsVUFBQWEsQ0FBQztBQUFBLFdBQUl5QixNQUFNLENBQUN6QixDQUFDLENBQUMsR0FBRCxDQUFELENBQU8rQixLQUFQLENBQWEsR0FBYixFQUFrQixDQUFsQixDQUFELENBQU4sR0FBK0IsQ0FBL0IsR0FBbUNOLE1BQU0sQ0FBQ2tCLFNBQVAsS0FBcUIsQ0FBNUQ7QUFBQSxHQUpkLEVBS0d4RCxJQUxILENBS1EsYUFMUixFQUt1QixRQUx2QixFQU1HdUQsS0FOSCxDQU1TLE1BTlQsRUFNaUIsT0FOakIsRUFPR0EsS0FQSCxDQU9TLFlBUFQsRUFPdUIsUUFQdkIsRUFRR0EsS0FSSCxDQVFTLFdBUlQsRUFRc0IsTUFSdEIsRUFTR2pDLElBVEgsQ0FTUSxVQUFBVCxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDLEdBQUQsQ0FBTDtBQUFBLEdBVFQ7QUFZQWtCLE1BQUksQ0FBQ2hDLE1BQUwsQ0FBWSxNQUFaLEVBQ0dDLElBREgsQ0FDUSxHQURSLEVBQ2E4QixLQUFLLEdBQUcsQ0FBUixHQUFZRixNQUR6QixFQUVHNUIsSUFGSCxDQUVRLEdBRlIsRUFFYSxFQUZiLEVBR0dBLElBSEgsQ0FHUSxhQUhSLEVBR3VCLFFBSHZCLEVBSUdzQixJQUpILENBSVEsOEJBSlIsRUFLR2lDLEtBTEgsQ0FLUyxXQUxULEVBS3NCLE1BTHRCLEVBTUdBLEtBTkgsQ0FNUyxNQU5ULEVBTWlCLE9BTmpCO0FBU0F4QixNQUFJLENBQUNoQyxNQUFMLENBQVksTUFBWixFQUNHQyxJQURILENBQ1EsR0FEUixFQUNhOEIsS0FBSyxHQUFHLEVBRHJCLEVBRUc5QixJQUZILENBRVEsR0FGUixFQUVhLEVBRmIsRUFHR0EsSUFISCxDQUdRLGFBSFIsRUFHdUIsT0FIdkIsRUFJR3NCLElBSkgsQ0FJUSxpQkFKUixFQUtHaUMsS0FMSCxDQUtTLE1BTFQsRUFLaUIsTUFMakIsRUFNR0EsS0FOSCxDQU1TLFdBTlQsRUFNc0IsTUFOdEI7QUFRQXhCLE1BQUksQ0FBQ2hDLE1BQUwsQ0FBWSxNQUFaLEVBQ0dDLElBREgsQ0FDUSxPQURSLEVBQ2lCLFFBRGpCLEVBRUdBLElBRkgsQ0FFUSxHQUZSLEVBRWE4QixLQUFLLEdBQUdGLE1BQU0sR0FBRyxDQUY5QixFQUdHNUIsSUFISCxDQUdRLEdBSFIsRUFHYTZCLE1BQU0sR0FBR0QsTUFBVCxHQUFrQixFQUgvQixFQUlHNUIsSUFKSCxDQUlRLGFBSlIsRUFJdUIsT0FKdkIsRUFLR3NCLElBTEgsQ0FLUSw4QkFMUixFQU1HaUMsS0FOSCxDQU1TLE1BTlQsRUFNaUIsTUFOakI7QUFRQXhCLE1BQUksQ0FBQ2hDLE1BQUwsR0FwSjRCLENBcUo1QjtBQUVELENBdkpNLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0YXRzIGZyb20gJy4uL2RhdGEvc3RhdHMuanNvbic7XG5cbmV4cG9ydCBjb25zdCBidWJibGVfY2hhcnQgPSAoKSA9PiB7XG4gIGxldCBzdmcgPSBkMy5zZWxlY3QoJyN0b3BfcGVyJykuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIDkwMClcbiAgICAuYXR0cignaGVpZ2h0JywgNzAwKVxuICAgIC5hdHRyKCdzdHlsZScsICdib3JkZXI6IHRoaW4gd2hpdGUgc29saWQnKVxuICAgIC8vIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpXG4gIFxuICBsZXQgcGFjayA9IGQzLnBhY2soKS5zaXplKFs5MDAsIDcwMF0pLnBhZGRpbmcoMyk7XG4gIGxldCBkYXRhID0gc3RhdHMuc29ydCgoYSxiKSA9PiBiWycyMiddIC0gYVsnMjInXSk7XG4gIGxldCBoaWVyYXJjaHkxID0gZDMuaGllcmFyY2h5KHsgY2hpbGRyZW46IGRhdGEgfSkuc3VtKGQgPT4gZFsnMjInXSk7XG5cbiAgY29uc3Qgcm9vdCA9IHBhY2soaGllcmFyY2h5MSk7XG5cbiAgY29uc3QgbGVhZiA9IHN2Zy5zZWxlY3RBbGwoXCJnXCIpXG4gICAgLmRhdGEocm9vdC5sZWF2ZXMoKSlcbiAgICAuam9pbihcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXG4gICAgLy8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiBgdHJhbnNsYXRlKDAsMClgKVxuXG4gIGxlYWYuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJyXCIsIGQgPT4ge1xuICAgICAgaWYgKGQuZGF0YVsnMjInXSA+IDI4KSB7XG4gICAgICAgIHJldHVybiBkLmRhdGFbJzIyJ10gKyAzMFxuICAgICAgfSBlbHNlIGlmIChkLmRhdGFbJzIyJ10gPiAyNSkge1xuICAgICAgICByZXR1cm4gZC5kYXRhWycyMiddICsgMjVcbiAgICAgIH0gZWxzZSBpZiAoZC5kYXRhWycyMiddID4gMjApIHtcbiAgICAgICAgcmV0dXJuIGQuZGF0YVsnMjInXSArIDIwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZC5kYXRhWycyMiddICsgMjBcbiAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBkLmRhdGFbJzIyJ10gKyAxOClcbiAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAwLjk1KVxuICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IGQuZGF0YS5jb2xvcilcbiAgXG5cbiAgbGVhZi5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLnRleHQoZCA9PiBkLmRhdGFbJzIyJ10pXG5cbiAgLy8gbGV0IHZpcyA9IGxlYWYuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gIC8vICAgLmRhdGEobm9kZXMsIGQgPT4gZFsnMiddKVxuXG4gIC8vIGxlYWYuYXBwZW5kKFwiY2xpcFBhdGhcIilcbiAgLy8gICAuYXBwZW5kKFwidXNlXCIpXG4gIC8vICAgLmF0dHIoXCJ4bGluazpocmVmXCIsIGQgPT4gZC5sZWFmVWlkLmhyZWYpO1xuXG4gIC8vIGxlYWYuYXBwZW5kKFwidGV4dFwiKVxuICAvLyAgIC5hdHRyKFwiY2xpcC1wYXRoXCIsIGQgPT4gZC5jbGlwVWlkKVxuICAvLyAgIC5zZWxlY3RBbGwoXCJ0c3BhblwiKVxuICAvLyAgIC5kYXRhKGQgPT4gZC5kYXRhLm5hbWUuc3BsaXQoLyg/PVtBLVpdW2Etel0pfFxccysvZykpXG4gIC8vICAgLmpvaW4oXCJ0c3BhblwiKVxuICAvLyAgIC5hdHRyKFwieFwiLCAwKVxuICAvLyAgIC5hdHRyKFwieVwiLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSBub2Rlcy5sZW5ndGggLyAyICsgMC44fWVtYClcbiAgLy8gICAudGV4dChkID0+IGQpO1xuXG4gIC8vIGxlYWYuYXBwZW5kKFwidGl0bGVcIilcbiAgLy8gICAudGV4dChkID0+IGAke2QuZGF0YS50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGAke2QuZGF0YS50aXRsZX1gfSR7Zm9ybWF0KGQudmFsdWUpfWApO1xuXG4gIHJldHVybiBzdmcubm9kZSgpO1xufVxuXG4iLCJpbXBvcnQgeyBidWJibGVfY2hhcnQgfSBmcm9tIFwiLi9idWJibGVfY2hhcnRcIjtcbmltcG9ydCB7IG91dGVyX2NpcmNsZSB9IGZyb20gXCIuL291dGVyX2NpcmNsZVwiO1xuaW1wb3J0IHsgc3RhdF9iYXIgfSBmcm9tIFwiLi9zdGF0X2JhclwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGJ1YmJsZV9jaGFydCgpO1xuICBzdGF0X2JhcigpO1xuICBvdXRlcl9jaXJjbGUoKTtcbn0pOyIsImV4cG9ydCBjb25zdCBvdXRlcl9jaXJjbGUgPSAoKSA9PiB7XG4gIFxufSIsImltcG9ydCBzdGF0cyBmcm9tIFwiLi4vZGF0YS9zdGF0cy5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBzdGF0X2JhciA9ICgpID0+IHtcbiAgY29uc3QgbWFyZ2luID0gMTEwO1xuICBjb25zdCBoZWlnaHQgPSA4MDA7XG4gIGNvbnN0IHdpZHRoID0gNzAwO1xuXG4gIGxldCBzdmcyID0gZDMuc2VsZWN0KFwiI3N0YXRfYmFyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgOTAwKVxuICAgIC8vIC5hdHRyKFwibWluLWhlaWdodFwiLCBoZWlnaHQpXG4gICAgLmF0dHIoXCJzdHlsZVwiLCBcImJvcmRlcjogdGhpbiB3aGl0ZSBzb2xpZFwiKTtcblxuICBjb25zdCB0b3AyNXB0cyA9IHN0YXRzLnNvcnQoKGEsIGIpID0+IGJbXCIyMlwiXSAtIGFbXCIyMlwiXSkuc2xpY2UoMCwgc3RhdHMubGVuZ3RoIC8gMiAtIDEwKTtcbiAgXG4gIGNvbnN0IHJUb3BQdHMgPSB0b3AyNXB0cy5yZXZlcnNlKCk7XG4gIGNvbnN0IGNoYXJ0ID0gc3ZnMi5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2lufSwgJHttYXJnaW59KWApXG5cbiAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVCYW5kKClcbiAgICAucmFuZ2UoWzYwMCwgMF0pXG4gICAgLmRvbWFpbihyVG9wUHRzLm1hcChzID0+IHNbJzInXS5zcGxpdCgnICcpWzFdKSlcbiAgICAucGFkZGluZygwLjQpO1xuICAgIFxuICBsZXQgeUF4aXMgPSBjaGFydC5hcHBlbmQoJ2cnKVxuICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkpO1xuXG4gIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAuZG9tYWluKFsxNiwgMzZdKVxuXG4gIGxldCB4QXhpcyA9IGNoYXJ0LmFwcGVuZCgnZycpXG4gICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgNzAwKWApXG4gICAgLmNhbGwoZDMuYXhpc1RvcCh4U2NhbGUpLnRpY2tzKDcpKVxuXG4gIGNvbnN0IGJhckdyb3VwcyA9IGNoYXJ0LnNlbGVjdEFsbCgpXG4gICAgLmRhdGEoclRvcFB0cylcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ2cnKVxuXG4gIHhBeGlzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTNweCcpXG4gIHlBeGlzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTNweCcpXG4gICAgLy8gLnN0eWxlKCdmb250LXN0eWxlJywgJ2l0YWxpYycpXG4gIFxuICBiYXJHcm91cHNcbiAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAuc3R5bGUoXCJzdHJva2VcIiwgZCA9PiBkLmNvbG9yKVxuICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuMzApXG4gICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4gZC5jb2xvcilcbiAgICAuYXR0cihcInhcIiwgZCA9PiB4U2NhbGUoZFtcIjIyXCJdKSlcbiAgICAuYXR0cihcInlcIiwgZCA9PiB5U2NhbGUoZFtcIjJcIl0uc3BsaXQoXCIgXCIpWzFdKSlcbiAgICAuYXR0cihcIndpZHRoXCIsIGQgPT4gMClcbiAgICAuYXR0cihcImhlaWdodFwiLCB5U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgLmF0dHIoXCJ4XCIsIChhY3R1YWwsIGksIHJUb3BQdHMpID0+IHlTY2FsZShyVG9wUHRzW2ldW1wiMjJcIl0pKVxuICBcbiAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKHMsIGkpIHtcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuODUpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHlTY2FsZS5iYW5kd2lkdGgoKSArIDUpO1xuXG4gICAgICBjb25zdCB4ID0geFNjYWxlKHJUb3BQdHNbaV1bXCIyMlwiXSk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSBjaGFydFxuICAgICAgICAuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImlkXCIsIFwibGltaXRcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCB4KVxuICAgICAgICAuYXR0cihcInkxXCIsIDApXG4gICAgICAgIC5hdHRyKFwieDJcIiwgeClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCBoZWlnaHQpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwib3JhbmdlXCIpO1xuICAgIH0pXG5cbiAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC4yNSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgeVNjYWxlLmJhbmR3aWR0aCgpKTtcblxuICAgICAgY2hhcnQuc2VsZWN0QWxsKFwiI2xpbWl0XCIpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbihzLCBpKSB7XG4gICAgICBjb25zdCBzdGF0UmVjdCA9IGQzLnNlbGVjdChcIiNkZXRhaWxzXCIpLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdkZXRhaWwnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAnMTAwJScpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMDApXG4gICAgICAgIC5hdHRyKCdzdHlsZScsICdib3JkZXI6IHRoaW4gIzYxNjE2MSBzb2xpZCcpXG4gICAgICBcbiAgXG4gICAgfSk7XG5cbiAgc3ZnMi5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAuYXR0cihcInhcIiwgZCA9PiB4U2NhbGUoZFtcIjIyXCJdKSlcbiAgICAuYXR0cihcIndpZHRoXCIsIGQgPT4geFNjYWxlKGRbXCIyMlwiXSkpXG4gICAgLmF0dHIoXCJ4XCIsIChhY3R1YWwsIGksIHJUb3BQdHMpID0+IHlTY2FsZShyVG9wUHRzW2ldW1wiMjJcIl0pKVxuXG4gIGJhckdyb3Vwc1xuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInZhbHVlXCIpXG4gICAgLmF0dHIoXCJ4XCIsIGQgPT4geFNjYWxlKGRbXCIyMlwiXSkgKyAyNClcbiAgICAuYXR0cihcInlcIiwgZCA9PiB5U2NhbGUoZFtcIjJcIl0uc3BsaXQoXCIgXCIpWzFdKSArIDQgKyB5U2NhbGUuYmFuZHdpZHRoKCkgLyAyKVxuICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChkID0+IGRbXCIyMlwiXSlcbiAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICBcbiAgYmFyR3JvdXBzXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwidmFsdWVcIilcbiAgICAuYXR0cihcInhcIiwgZCA9PiB4U2NhbGUoZFtcIjIyXCJdKSAvIDIpXG4gICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKGRbXCIyXCJdLnNwbGl0KFwiIFwiKVsxXSkgKyA1ICsgeVNjYWxlLmJhbmR3aWR0aCgpIC8gMilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCAnaXRhbGljJylcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAudGV4dChkID0+IGRbXCIyXCJdKTtcbiAgICBcblxuICBzdmcyLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoJ3gnLCB3aWR0aCAvIDIgKyBtYXJnaW4pXG4gICAgLmF0dHIoJ3knLCA1MClcbiAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAudGV4dCgnVG9wIDE1IFNjb3JlcnMgaW4gdGhlIExlYWd1ZScpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMzBweCcpXG4gICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICBcblxuICBzdmcyLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoJ3gnLCB3aWR0aCArIDMwKVxuICAgIC5hdHRyKCd5JywgNzUpXG4gICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAudGV4dCgnUG9pbnRzIFBlciBHYW1lJylcbiAgICAuc3R5bGUoJ2ZpbGwnLCAncGluaycpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTNweCcpXG5cbiAgc3ZnMi5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCdjbGFzcycsICdzb3VyY2UnKVxuICAgIC5hdHRyKCd4Jywgd2lkdGggLSBtYXJnaW4gLyAyKVxuICAgIC5hdHRyKCd5JywgaGVpZ2h0IC0gbWFyZ2luICsgMjApXG4gICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAudGV4dCgnU291cmNlOiBOQkEgU3RhdHMsIDIwMTktMjAyMCcpXG4gICAgLnN0eWxlKCdmaWxsJywgJ3BpbmsnKVxuXG4gIHN2ZzIuYXBwZW5kKClcbiAgLy8gZGV0YWlsc1N2Zy5hcHBlbmQoKVxuICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=