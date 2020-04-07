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
  var svg = d3.select('#top_per').append('svg').attr('class', 'bubble_svg').attr('width', 1000).attr('height', 700); // .attr('style', 'border: thin white solid')
  // .style('background-color', 'white')

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
  var width = 800;
  var svg2 = d3.select("#stat_bar").append("svg").attr("width", 1000) // .attr("min-height", height)
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
    var nameRect = d3.select("#details").append('rect').attr('class', 'detail').attr('width', '100%').attr('height', 50).attr('style', 'border: thin #616161 solid');
    var statRect = d3.select("#details").append('rect').attr('class', 'detail2').attr('width', '100%').attr('height', 50).attr('style', 'border: thin #616161 solid');
    var statRect2 = d3.select("#details").append('rect').attr('class', 'detail2').attr('width', '100%').attr('height', 50).attr('style', 'border: thin #616161 solid');
    nameRect.append('text').attr('class', 'player_details').style('font-size', '28px').text(function (d) {
      return rTopPts[i]['2'];
    }).style('fill', function (d) {
      return rTopPts[i]['color'];
    });
    nameRect.append('text').attr('class', 'player_details2').style('font-size', '18px').text(function (d) {
      return 'Team: ' + rTopPts[i]['3'];
    }).style('fill', function (d) {
      return rTopPts[i]['color'];
    });
    statRect.append('text').attr('class', 'player_details3').style('font-size', '16px').text('GP  MIN  FGM  FGA  FGPCT  FG3M  FG3A  FG3PCT  FTA  FTPCT  OREB  DREB  REB  AST  STL  BLK  TO  PTS');
    statRect2.append('text').attr('class', 'player_details4').style('font-size', '18px').text(function (d) {
      return rTopPts[i]['4'] + '   ' + rTopPts[i]['5'] + '    ' + rTopPts[i]['6'] + '    ' + rTopPts[i]['7'] + '    ' + rTopPts[i]['8'] + '   ' + rTopPts[i]['9'] + ' ' + rTopPts[i]['10'] + ' ' + rTopPts[i]['11'] + ' ' + rTopPts[i]['12'] + ' ' + rTopPts[i]['13'] + ' ' + rTopPts[i]['14'] + ' ' + rTopPts[i]['15'] + ' ' + rTopPts[i]['16'] + ' ' + rTopPts[i]['17'] + ' ' + rTopPts[i]['18'] + ' ' + rTopPts[i]['19'] + ' ' + rTopPts[i]['20'] + ' ' + rTopPts[i]['21'] + ' ' + rTopPts[i]['22'];
    }); // .text(d => rTopPts[i]['2'])

    window.scrollBy(0, 300);
  });
  svg2.selectAll('rect').transition().duration(800).attr("x", function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZV9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGVyX2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdF9iYXIuanMiXSwibmFtZXMiOlsiYnViYmxlX2NoYXJ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwicGFjayIsInNpemUiLCJwYWRkaW5nIiwiZGF0YSIsInN0YXRzIiwic29ydCIsImEiLCJiIiwiaGllcmFyY2h5MSIsImhpZXJhcmNoeSIsImNoaWxkcmVuIiwic3VtIiwiZCIsInJvb3QiLCJsZWFmIiwic2VsZWN0QWxsIiwibGVhdmVzIiwiam9pbiIsIngiLCJ5IiwiY29sb3IiLCJ0ZXh0Iiwibm9kZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRfYmFyIiwib3V0ZXJfY2lyY2xlIiwibWFyZ2luIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdmcyIiwidG9wMjVwdHMiLCJzbGljZSIsImxlbmd0aCIsInJUb3BQdHMiLCJyZXZlcnNlIiwiY2hhcnQiLCJ5U2NhbGUiLCJzY2FsZUJhbmQiLCJyYW5nZSIsImRvbWFpbiIsIm1hcCIsInMiLCJzcGxpdCIsInlBeGlzIiwiY2FsbCIsImF4aXNMZWZ0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJ4QXhpcyIsImF4aXNUb3AiLCJ0aWNrcyIsImJhckdyb3VwcyIsImVudGVyIiwic3R5bGUiLCJiYW5kd2lkdGgiLCJhY3R1YWwiLCJpIiwib24iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJsaW5lIiwicmVtb3ZlIiwibmFtZVJlY3QiLCJzdGF0UmVjdCIsInN0YXRSZWN0MiIsIndpbmRvdyIsInNjcm9sbEJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QyxLQUxILENBS1MsV0FMVCxFQUtzQixNQUx0QixFQU1HQSxLQU5ILENBTVMsTUFOVCxFQU1pQixPQU5qQjtBQVNBeEIsTUFBSSxDQUFDaEMsTUFBTCxDQUFZLE1BQVosRUFDR0MsSUFESCxDQUNRLEdBRFIsRUFDYThCLEtBQUssR0FBRyxFQURyQixFQUVHOUIsSUFGSCxDQUVRLEdBRlIsRUFFYSxFQUZiLEVBR0dBLElBSEgsQ0FHUSxhQUhSLEVBR3VCLE9BSHZCLEVBSUdzQixJQUpILENBSVEsaUJBSlIsRUFLR2lDLEtBTEgsQ0FLUyxNQUxULEVBS2lCLE1BTGpCLEVBTUdBLEtBTkgsQ0FNUyxXQU5ULEVBTXNCLE1BTnRCO0FBUUF4QixNQUFJLENBQUNoQyxNQUFMLENBQVksTUFBWixFQUNHQyxJQURILENBQ1EsT0FEUixFQUNpQixRQURqQixFQUVHQSxJQUZILENBRVEsR0FGUixFQUVhOEIsS0FBSyxHQUFHRixNQUFNLEdBQUcsQ0FGOUIsRUFHRzVCLElBSEgsQ0FHUSxHQUhSLEVBR2E2QixNQUFNLEdBQUdELE1BQVQsR0FBa0IsRUFIL0IsRUFJRzVCLElBSkgsQ0FJUSxhQUpSLEVBSXVCLE9BSnZCLEVBS0dzQixJQUxILENBS1EsOEJBTFIsRUFNR2lDLEtBTkgsQ0FNUyxNQU5ULEVBTWlCLE1BTmpCO0FBUUF4QixNQUFJLENBQUNoQyxNQUFMLEdBM0w0QixDQTRMNUI7QUFFRCxDQTlMTSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBzdGF0cyBmcm9tICcuLi9kYXRhL3N0YXRzLmpzb24nO1xuXG5leHBvcnQgY29uc3QgYnViYmxlX2NoYXJ0ID0gKCkgPT4ge1xuICBsZXQgc3ZnID0gZDMuc2VsZWN0KCcjdG9wX3BlcicpLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignY2xhc3MnLCAnYnViYmxlX3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgMTAwMClcbiAgICAuYXR0cignaGVpZ2h0JywgNzAwKVxuICAgIC8vIC5hdHRyKCdzdHlsZScsICdib3JkZXI6IHRoaW4gd2hpdGUgc29saWQnKVxuICAgIC8vIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpXG4gIFxuICBsZXQgcGFjayA9IGQzLnBhY2soKS5zaXplKFs5MDAsIDcwMF0pLnBhZGRpbmcoMyk7XG4gIGxldCBkYXRhID0gc3RhdHMuc29ydCgoYSxiKSA9PiBiWycyMiddIC0gYVsnMjInXSk7XG4gIGxldCBoaWVyYXJjaHkxID0gZDMuaGllcmFyY2h5KHsgY2hpbGRyZW46IGRhdGEgfSkuc3VtKGQgPT4gZFsnMjInXSk7XG5cbiAgY29uc3Qgcm9vdCA9IHBhY2soaGllcmFyY2h5MSk7XG5cbiAgY29uc3QgbGVhZiA9IHN2Zy5zZWxlY3RBbGwoXCJnXCIpXG4gICAgLmRhdGEocm9vdC5sZWF2ZXMoKSlcbiAgICAuam9pbihcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXG4gICAgLy8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiBgdHJhbnNsYXRlKDAsMClgKVxuXG4gIGxlYWYuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJyXCIsIGQgPT4ge1xuICAgICAgaWYgKGQuZGF0YVsnMjInXSA+IDI4KSB7XG4gICAgICAgIHJldHVybiBkLmRhdGFbJzIyJ10gKyAzMFxuICAgICAgfSBlbHNlIGlmIChkLmRhdGFbJzIyJ10gPiAyNSkge1xuICAgICAgICByZXR1cm4gZC5kYXRhWycyMiddICsgMjVcbiAgICAgIH0gZWxzZSBpZiAoZC5kYXRhWycyMiddID4gMjApIHtcbiAgICAgICAgcmV0dXJuIGQuZGF0YVsnMjInXSArIDIwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZC5kYXRhWycyMiddICsgMjBcbiAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBkLmRhdGFbJzIyJ10gKyAxOClcbiAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAwLjk1KVxuICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IGQuZGF0YS5jb2xvcilcbiAgXG5cbiAgbGVhZi5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLnRleHQoZCA9PiBkLmRhdGFbJzIyJ10pXG5cbiAgLy8gbGV0IHZpcyA9IGxlYWYuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gIC8vICAgLmRhdGEobm9kZXMsIGQgPT4gZFsnMiddKVxuXG4gIC8vIGxlYWYuYXBwZW5kKFwiY2xpcFBhdGhcIilcbiAgLy8gICAuYXBwZW5kKFwidXNlXCIpXG4gIC8vICAgLmF0dHIoXCJ4bGluazpocmVmXCIsIGQgPT4gZC5sZWFmVWlkLmhyZWYpO1xuXG4gIC8vIGxlYWYuYXBwZW5kKFwidGV4dFwiKVxuICAvLyAgIC5hdHRyKFwiY2xpcC1wYXRoXCIsIGQgPT4gZC5jbGlwVWlkKVxuICAvLyAgIC5zZWxlY3RBbGwoXCJ0c3BhblwiKVxuICAvLyAgIC5kYXRhKGQgPT4gZC5kYXRhLm5hbWUuc3BsaXQoLyg/PVtBLVpdW2Etel0pfFxccysvZykpXG4gIC8vICAgLmpvaW4oXCJ0c3BhblwiKVxuICAvLyAgIC5hdHRyKFwieFwiLCAwKVxuICAvLyAgIC5hdHRyKFwieVwiLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSBub2Rlcy5sZW5ndGggLyAyICsgMC44fWVtYClcbiAgLy8gICAudGV4dChkID0+IGQpO1xuXG4gIC8vIGxlYWYuYXBwZW5kKFwidGl0bGVcIilcbiAgLy8gICAudGV4dChkID0+IGAke2QuZGF0YS50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGAke2QuZGF0YS50aXRsZX1gfSR7Zm9ybWF0KGQudmFsdWUpfWApO1xuXG4gIHJldHVybiBzdmcubm9kZSgpO1xufVxuXG4iLCJpbXBvcnQgeyBidWJibGVfY2hhcnQgfSBmcm9tIFwiLi9idWJibGVfY2hhcnRcIjtcbmltcG9ydCB7IG91dGVyX2NpcmNsZSB9IGZyb20gXCIuL291dGVyX2NpcmNsZVwiO1xuaW1wb3J0IHsgc3RhdF9iYXIgfSBmcm9tIFwiLi9zdGF0X2JhclwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGJ1YmJsZV9jaGFydCgpO1xuICBzdGF0X2JhcigpO1xuICBvdXRlcl9jaXJjbGUoKTtcbn0pOyIsImV4cG9ydCBjb25zdCBvdXRlcl9jaXJjbGUgPSAoKSA9PiB7XG4gIFxufSIsImltcG9ydCBzdGF0cyBmcm9tIFwiLi4vZGF0YS9zdGF0cy5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBzdGF0X2JhciA9ICgpID0+IHtcbiAgY29uc3QgbWFyZ2luID0gMTEwO1xuICBjb25zdCBoZWlnaHQgPSA4MDA7XG4gIGNvbnN0IHdpZHRoID0gODAwO1xuXG4gIGxldCBzdmcyID0gZDMuc2VsZWN0KFwiI3N0YXRfYmFyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgMTAwMClcbiAgICAvLyAuYXR0cihcIm1pbi1oZWlnaHRcIiwgaGVpZ2h0KVxuICAgIC5hdHRyKFwic3R5bGVcIiwgXCJib3JkZXI6IHRoaW4gd2hpdGUgc29saWRcIik7XG5cbiAgY29uc3QgdG9wMjVwdHMgPSBzdGF0cy5zb3J0KChhLCBiKSA9PiBiW1wiMjJcIl0gLSBhW1wiMjJcIl0pLnNsaWNlKDAsIHN0YXRzLmxlbmd0aCAvIDIgLSAxMCk7XG4gIFxuICBjb25zdCByVG9wUHRzID0gdG9wMjVwdHMucmV2ZXJzZSgpO1xuICBjb25zdCBjaGFydCA9IHN2ZzIuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbn0sICR7bWFyZ2lufSlgKVxuXG4gIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlQmFuZCgpXG4gICAgLnJhbmdlKFs2MDAsIDBdKVxuICAgIC5kb21haW4oclRvcFB0cy5tYXAocyA9PiBzWycyJ10uc3BsaXQoJyAnKVsxXSkpXG4gICAgLnBhZGRpbmcoMC40KTtcbiAgICBcbiAgbGV0IHlBeGlzID0gY2hhcnQuYXBwZW5kKCdnJylcbiAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpKTtcblxuICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgLmRvbWFpbihbMTYsIDM2XSlcblxuICBsZXQgeEF4aXMgPSBjaGFydC5hcHBlbmQoJ2cnKVxuICAgIC8vIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsIDcwMClgKVxuICAgIC5jYWxsKGQzLmF4aXNUb3AoeFNjYWxlKS50aWNrcyg3KSlcblxuICBjb25zdCBiYXJHcm91cHMgPSBjaGFydC5zZWxlY3RBbGwoKVxuICAgIC5kYXRhKHJUb3BQdHMpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKCdnJylcblxuICB4QXhpcy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEzcHgnKVxuICB5QXhpcy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEzcHgnKVxuICAgIC8vIC5zdHlsZSgnZm9udC1zdHlsZScsICdpdGFsaWMnKVxuICBcbiAgYmFyR3JvdXBzXG4gICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgLnN0eWxlKFwic3Ryb2tlXCIsIGQgPT4gZC5jb2xvcilcbiAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAwLjMwKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IGQuY29sb3IpXG4gICAgLmF0dHIoXCJ4XCIsIGQgPT4geFNjYWxlKGRbXCIyMlwiXSkpXG4gICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKGRbXCIyXCJdLnNwbGl0KFwiIFwiKVsxXSkpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBkID0+IDApXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgeVNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwieFwiLCAoYWN0dWFsLCBpLCByVG9wUHRzKSA9PiB5U2NhbGUoclRvcFB0c1tpXVtcIjIyXCJdKSlcbiAgXG4gICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihzLCBpKSB7XG4gICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAwLjg1KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCB5U2NhbGUuYmFuZHdpZHRoKCkgKyA1KTtcblxuICAgICAgY29uc3QgeCA9IHhTY2FsZShyVG9wUHRzW2ldW1wiMjJcIl0pO1xuXG4gICAgICBjb25zdCBsaW5lID0gY2hhcnRcbiAgICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJpZFwiLCBcImxpbWl0XCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgeClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCAwKVxuICAgICAgICAuYXR0cihcIngyXCIsIHgpXG4gICAgICAgIC5hdHRyKFwieTJcIiwgaGVpZ2h0KVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIm9yYW5nZVwiKTtcbiAgICB9KVxuXG4gICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuMjUpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHlTY2FsZS5iYW5kd2lkdGgoKSk7XG5cbiAgICAgIGNoYXJ0LnNlbGVjdEFsbChcIiNsaW1pdFwiKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24ocywgaSkge1xuICAgICAgY29uc3QgbmFtZVJlY3QgPSBkMy5zZWxlY3QoXCIjZGV0YWlsc1wiKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RldGFpbCcpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICcxMDAlJylcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDUwKVxuICAgICAgICAuYXR0cignc3R5bGUnLCAnYm9yZGVyOiB0aGluICM2MTYxNjEgc29saWQnKVxuXG4gICAgICBjb25zdCBzdGF0UmVjdCA9IGQzLnNlbGVjdChcIiNkZXRhaWxzXCIpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZGV0YWlsMicpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICcxMDAlJylcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDUwKVxuICAgICAgICAuYXR0cignc3R5bGUnLCAnYm9yZGVyOiB0aGluICM2MTYxNjEgc29saWQnKVxuICAgICAgY29uc3Qgc3RhdFJlY3QyID0gZDMuc2VsZWN0KFwiI2RldGFpbHNcIilcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdkZXRhaWwyJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgJzEwMCUnKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgNTApXG4gICAgICAgIC5hdHRyKCdzdHlsZScsICdib3JkZXI6IHRoaW4gIzYxNjE2MSBzb2xpZCcpXG4gICAgICBcbiAgICAgIG5hbWVSZWN0XG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAncGxheWVyX2RldGFpbHMnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcyOHB4JylcbiAgICAgICAgLnRleHQoZCA9PiByVG9wUHRzW2ldWycyJ10pXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gclRvcFB0c1tpXVsnY29sb3InXSlcbiAgICAgIG5hbWVSZWN0XG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAncGxheWVyX2RldGFpbHMyJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMThweCcpXG4gICAgICAgIC50ZXh0KGQgPT4gJ1RlYW06ICcgKyByVG9wUHRzW2ldWyczJ10pXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gclRvcFB0c1tpXVsnY29sb3InXSlcblxuICAgICAgc3RhdFJlY3RcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdwbGF5ZXJfZGV0YWlsczMnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNnB4JylcbiAgICAgICAgLnRleHQoJ0dQICBNSU4gIEZHTSAgRkdBICBGR1BDVCAgRkczTSAgRkczQSAgRkczUENUICBGVEEgIEZUUENUICBPUkVCICBEUkVCICBSRUIgIEFTVCAgU1RMICBCTEsgIFRPICBQVFMnKVxuICAgICAgc3RhdFJlY3QyXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAncGxheWVyX2RldGFpbHM0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMThweCcpXG4gICAgICAgIC50ZXh0KGQgPT4gclRvcFB0c1tpXVsnNCddICsgJyAgICcgKyByVG9wUHRzW2ldWyc1J10gKyAnICAgICcgKyByVG9wUHRzW2ldWyc2J10gKyAnICAgICcgKyByVG9wUHRzW2ldWyc3J10gKyAnICAgICcgKyByVG9wUHRzW2ldWyc4J10gKyAnICAgJyArIHJUb3BQdHNbaV1bJzknXSArICcgJyArIHJUb3BQdHNbaV1bJzEwJ10gKyAnICcgKyByVG9wUHRzW2ldWycxMSddICsgJyAnICsgclRvcFB0c1tpXVsnMTInXSArICcgJyArIHJUb3BQdHNbaV1bJzEzJ10gKyAnICcgKyByVG9wUHRzW2ldWycxNCddICsgJyAnICsgclRvcFB0c1tpXVsnMTUnXSArICcgJyArIHJUb3BQdHNbaV1bJzE2J10gKyAnICcgKyByVG9wUHRzW2ldWycxNyddICsgJyAnICsgclRvcFB0c1tpXVsnMTgnXSArICcgJyArIHJUb3BQdHNbaV1bJzE5J10gKyAnICcgKyByVG9wUHRzW2ldWycyMCddICsgJyAnICsgclRvcFB0c1tpXVsnMjEnXSArICcgJyArIHJUb3BQdHNbaV1bJzIyJ10pXG4gICAgICAgIC8vIC50ZXh0KGQgPT4gclRvcFB0c1tpXVsnMiddKVxuICAgICAgXG4gICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMzAwKTtcbiAgICB9KTtcblxuICBzdmcyLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig4MDApXG4gICAgLmF0dHIoXCJ4XCIsIGQgPT4geFNjYWxlKGRbXCIyMlwiXSkpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBkID0+IHhTY2FsZShkW1wiMjJcIl0pKVxuICAgIC5hdHRyKFwieFwiLCAoYWN0dWFsLCBpLCByVG9wUHRzKSA9PiB5U2NhbGUoclRvcFB0c1tpXVtcIjIyXCJdKSlcblxuICBiYXJHcm91cHNcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2YWx1ZVwiKVxuICAgIC5hdHRyKFwieFwiLCBkID0+IHhTY2FsZShkW1wiMjJcIl0pICsgMjQpXG4gICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKGRbXCIyXCJdLnNwbGl0KFwiIFwiKVsxXSkgKyA0ICsgeVNjYWxlLmJhbmR3aWR0aCgpIC8gMilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoZCA9PiBkW1wiMjJcIl0pXG4gICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgXG4gIGJhckdyb3Vwc1xuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInZhbHVlXCIpXG4gICAgLmF0dHIoXCJ4XCIsIGQgPT4geFNjYWxlKGRbXCIyMlwiXSkgLyAyKVxuICAgIC5hdHRyKFwieVwiLCBkID0+IHlTY2FsZShkW1wiMlwiXS5zcGxpdChcIiBcIilbMV0pICsgNSArIHlTY2FsZS5iYW5kd2lkdGgoKSAvIDIpXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgLnN0eWxlKCdmb250LXN0eWxlJywgJ2l0YWxpYycpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgLnRleHQoZCA9PiBkW1wiMlwiXSk7XG4gICAgXG5cbiAgc3ZnMi5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCd4Jywgd2lkdGggLyAyICsgbWFyZ2luKVxuICAgIC5hdHRyKCd5JywgNTApXG4gICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgLnRleHQoJ1RvcCAxNSBTY29yZXJzIGluIHRoZSBMZWFndWUnKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzMwcHgnKVxuICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgXG5cbiAgc3ZnMi5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCd4Jywgd2lkdGggKyAzMClcbiAgICAuYXR0cigneScsIDc1KVxuICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgLnRleHQoJ1BvaW50cyBQZXIgR2FtZScpXG4gICAgLnN0eWxlKCdmaWxsJywgJ3BpbmsnKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEzcHgnKVxuXG4gIHN2ZzIuYXBwZW5kKCd0ZXh0JylcbiAgICAuYXR0cignY2xhc3MnLCAnc291cmNlJylcbiAgICAuYXR0cigneCcsIHdpZHRoIC0gbWFyZ2luIC8gMilcbiAgICAuYXR0cigneScsIGhlaWdodCAtIG1hcmdpbiArIDIwKVxuICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgLnRleHQoJ1NvdXJjZTogTkJBIFN0YXRzLCAyMDE5LTIwMjAnKVxuICAgIC5zdHlsZSgnZmlsbCcsICdwaW5rJylcblxuICBzdmcyLmFwcGVuZCgpXG4gIC8vIGRldGFpbHNTdmcuYXBwZW5kKClcbiAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9