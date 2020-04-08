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
  var svg = d3.select('#top_per').append('svg').attr('class', 'bubble_svg').attr('width', 1000).attr('height', 640); // .attr('style', 'border: thin white solid')
  // .style('background-color', 'white')

  var pack = d3.pack().size([1000, 600]).padding(3);
  var data = _data_stats_json__WEBPACK_IMPORTED_MODULE_0__.sort(function (a, b) {
    return b['22'] - a['22'];
  }).slice(0, 30);
  var hierarchy1 = d3.hierarchy({
    children: data
  }).sum(function (d) {
    return d['22'];
  });
  var root = pack(hierarchy1);
  var leaf = svg.selectAll("g").data(root.leaves()).join("g").attr("transform", function (d) {
    return "translate(500,360)";
  }).on('click', function () {
    svg.selectAll('g').attr('transform', function (d) {
      return "translate(".concat(d.x, ",").concat(d.y, ")");
    });
  }); // .attr("transform", d => `translate(0,0)`)

  var circles = leaf.append("circle").attr('class', 'stat-circles').attr("r", function (d) {
    if (d.data['22'] > 28) {
      return d.data['22'] + 25;
    } else if (d.data['22'] > 25) {
      return d.data['22'] + 20;
    } else if (d.data['22'] > 20) {
      return d.data['22'] + 15;
    } else {
      return d.data['22'] + 15;
    }
  }) // d.data['22'] + 18)
  .attr("fill-opacity", 0.70).attr("fill", function (d) {
    return 'black';
  }).attr('stroke', function (d) {
    return d.data.color;
  }).attr('stroke-width', function (d) {
    return 4;
  });
  leaf.append("text").style('fill', 'white').style('text-anchor', 'middle') // .style('font-size', '25px')
  .style('font-size', function (d) {
    return d.r / 1.5;
  }).text(function (d) {
    return d.data['22'];
  });
  leaf.append("text").attr('dy', '1.5em').style('fill', 'white').style('text-anchor', 'middle').style('font-size', function (d) {
    return d.r / 3;
  }).text(function (d) {
    return d.data['2'].split(' ').slice(1);
  });
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
  var svg2 = d3.select("#stat_bar").append("svg").attr("width", 1000); // .attr("min-height", height)
  // .attr("style", "border: thin white solid");

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
    var nameRect = d3.select("#details").append('rect').attr('class', 'detail').attr('width', '100%').attr('height', 50); // .attr('style', 'border-top: thin #616161 solid')

    var statRect = d3.select("#details").append('rect').attr('class', 'detail2').attr('width', '100%').attr('height', 50); // .attr('style', 'border: thin #616161 solid')

    var statRect2 = d3.select("#details").append('rect').attr('class', 'detail3').attr('width', '100%').attr('height', 50); // .attr('style', 'border: thin #616161 solid')

    nameRect.append('text').attr('class', 'player_details').style('font-size', '28px').text(function (d) {
      return rTopPts[i]['2'];
    }).style('color', function (d) {
      return rTopPts[i]['color'];
    });
    nameRect.append('text').attr('class', 'player_details2').style('font-size', '18px').text(function (d) {
      return 'Team: ' + rTopPts[i]['3'];
    }).style('color', function (d) {
      return rTopPts[i]['color'];
    });
    statRect.append('text').attr('class', 'player_details3').style('font-size', '18px') // .text('GP  MIN  FGM  FGA  FGPCT  FG3M  FG3A  FG3PCT  FTA  FTPCT  OREB  DREB  REB  AST  STL  BLK  TO  PTS')
    .text(function (d) {
      return 'Pts:  ' + rTopPts[i]['22'] + '   |   ' + 'Reb:  ' + rTopPts[i]['17'] + '   |   ' + 'Ast:  ' + rTopPts[i]['18'] + '   |   ' + 'Stl:  ' + rTopPts[i]['19'] + '   |   ' + 'Blk:  ' + rTopPts[i]['20'] + '   |   ' + 'TOV:  ' + rTopPts[i]['21'] + '   |   ' + 'GP:  ' + rTopPts[i]['4'] + '   |   ' + 'Min:  ' + rTopPts[i]['5'];
    });
    statRect2.append('text').attr('class', 'player_details4').style('font-size', '17px') // .text(d => rTopPts[i]['4'] + '   ' + rTopPts[i]['5'] + '    ' + rTopPts[i]['6'] + '      ' + rTopPts[i]['7'] + '    ' + rTopPts[i]['8'] + '    ' + rTopPts[i]['9'] + '    ' + rTopPts[i]['10'] + ' ' + rTopPts[i]['11'] + ' ' + rTopPts[i]['12'] + ' ' + rTopPts[i]['13'] + ' ' + rTopPts[i]['14'] + ' ' + rTopPts[i]['15'] + ' ' + rTopPts[i]['16'] + ' ' + rTopPts[i]['17'] + ' ' + rTopPts[i]['18'] + ' ' + rTopPts[i]['19'] + ' ' + rTopPts[i]['20'] + ' ' + rTopPts[i]['21'] + ' ' + rTopPts[i]['22'])
    .text(function (d) {
      return 'Advanced:    Eff_Rank:  ' + rTopPts[i]['1'] + '    |    ' + 'Eff:  ' + rTopPts[i]['23'] + '    |    ' + 'Fg_Pct:  ' + rTopPts[i]['8'] + '    |    ' + 'Fg3_Pct:  ' + rTopPts[i]['11'] + '    |    ' + 'Ft_Pct:  ' + rTopPts[i]['14'];
    });
    window.scrollBy(0, 350);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZV9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGVyX2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdF9iYXIuanMiXSwibmFtZXMiOlsiYnViYmxlX2NoYXJ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwicGFjayIsInNpemUiLCJwYWRkaW5nIiwiZGF0YSIsInN0YXRzIiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJoaWVyYXJjaHkxIiwiaGllcmFyY2h5IiwiY2hpbGRyZW4iLCJzdW0iLCJkIiwicm9vdCIsImxlYWYiLCJzZWxlY3RBbGwiLCJsZWF2ZXMiLCJqb2luIiwib24iLCJ4IiwieSIsImNpcmNsZXMiLCJjb2xvciIsInN0eWxlIiwiciIsInRleHQiLCJzcGxpdCIsIm5vZGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0X2JhciIsIm91dGVyX2NpcmNsZSIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwic3ZnMiIsInRvcDI1cHRzIiwibGVuZ3RoIiwiclRvcFB0cyIsInJldmVyc2UiLCJjaGFydCIsInlTY2FsZSIsInNjYWxlQmFuZCIsInJhbmdlIiwiZG9tYWluIiwibWFwIiwicyIsInlBeGlzIiwiY2FsbCIsImF4aXNMZWZ0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJ4QXhpcyIsImF4aXNUb3AiLCJ0aWNrcyIsImJhckdyb3VwcyIsImVudGVyIiwiYmFuZHdpZHRoIiwiYWN0dWFsIiwiaSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImxpbmUiLCJyZW1vdmUiLCJuYW1lUmVjdCIsInN0YXRSZWN0Iiwic3RhdFJlY3QyIiwid2luZG93Iiwic2Nyb2xsQnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUNoQyxNQUFJQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFVBQVYsRUFBc0JDLE1BQXRCLENBQTZCLEtBQTdCLEVBQ1BDLElBRE8sQ0FDRixPQURFLEVBQ08sWUFEUCxFQUVQQSxJQUZPLENBRUYsT0FGRSxFQUVPLElBRlAsRUFHUEEsSUFITyxDQUdGLFFBSEUsRUFHUSxHQUhSLENBQVYsQ0FEZ0MsQ0FLOUI7QUFDQTs7QUFFRixNQUFJQyxJQUFJLEdBQUdKLEVBQUUsQ0FBQ0ksSUFBSCxHQUFVQyxJQUFWLENBQWUsQ0FBQyxJQUFELEVBQU8sR0FBUCxDQUFmLEVBQTRCQyxPQUE1QixDQUFvQyxDQUFwQyxDQUFYO0FBQ0EsTUFBSUMsSUFBSSxHQUFHQyw2Q0FBSyxDQUFDQyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsV0FBU0EsQ0FBQyxDQUFDLElBQUQsQ0FBRCxHQUFVRCxDQUFDLENBQUMsSUFBRCxDQUFwQjtBQUFBLEdBQVgsRUFBdUNFLEtBQXZDLENBQTZDLENBQTdDLEVBQWdELEVBQWhELENBQVg7QUFDQSxNQUFJQyxVQUFVLEdBQUdiLEVBQUUsQ0FBQ2MsU0FBSCxDQUFhO0FBQUVDLFlBQVEsRUFBRVI7QUFBWixHQUFiLEVBQWlDUyxHQUFqQyxDQUFxQyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDLElBQUQsQ0FBTDtBQUFBLEdBQXRDLENBQWpCO0FBRUEsTUFBTUMsSUFBSSxHQUFHZCxJQUFJLENBQUNTLFVBQUQsQ0FBakI7QUFFQSxNQUFNTSxJQUFJLEdBQUdwQixHQUFHLENBQUNxQixTQUFKLENBQWMsR0FBZCxFQUNWYixJQURVLENBQ0xXLElBQUksQ0FBQ0csTUFBTCxFQURLLEVBRVZDLElBRlUsQ0FFTCxHQUZLLEVBR1ZuQixJQUhVLENBR0wsV0FISyxFQUdRLFVBQUFjLENBQUM7QUFBQTtBQUFBLEdBSFQsRUFJVk0sRUFKVSxDQUlQLE9BSk8sRUFJRSxZQUFXO0FBQ3RCeEIsT0FBRyxDQUFDcUIsU0FBSixDQUFjLEdBQWQsRUFDR2pCLElBREgsQ0FDUSxXQURSLEVBQ3FCLFVBQUFjLENBQUM7QUFBQSxpQ0FBaUJBLENBQUMsQ0FBQ08sQ0FBbkIsY0FBd0JQLENBQUMsQ0FBQ1EsQ0FBMUI7QUFBQSxLQUR0QjtBQUVELEdBUFUsQ0FBYixDQWRnQyxDQXNCOUI7O0FBRUYsTUFBTUMsT0FBTyxHQUFHUCxJQUFJLENBQUNqQixNQUFMLENBQVksUUFBWixFQUNiQyxJQURhLENBQ1IsT0FEUSxFQUNDLGNBREQsRUFFYkEsSUFGYSxDQUVSLEdBRlEsRUFFSCxVQUFBYyxDQUFDLEVBQUk7QUFDZCxRQUFJQSxDQUFDLENBQUNWLElBQUYsQ0FBTyxJQUFQLElBQWUsRUFBbkIsRUFBdUI7QUFDckIsYUFBT1UsQ0FBQyxDQUFDVixJQUFGLENBQU8sSUFBUCxJQUFlLEVBQXRCO0FBQ0QsS0FGRCxNQUVPLElBQUlVLENBQUMsQ0FBQ1YsSUFBRixDQUFPLElBQVAsSUFBZSxFQUFuQixFQUF1QjtBQUM1QixhQUFPVSxDQUFDLENBQUNWLElBQUYsQ0FBTyxJQUFQLElBQWUsRUFBdEI7QUFDRCxLQUZNLE1BRUEsSUFBSVUsQ0FBQyxDQUFDVixJQUFGLENBQU8sSUFBUCxJQUFlLEVBQW5CLEVBQXVCO0FBQzVCLGFBQU9VLENBQUMsQ0FBQ1YsSUFBRixDQUFPLElBQVAsSUFBZSxFQUF0QjtBQUNELEtBRk0sTUFFQTtBQUNMLGFBQU9VLENBQUMsQ0FBQ1YsSUFBRixDQUFPLElBQVAsSUFBZSxFQUF0QjtBQUNEO0FBQ0EsR0FaVyxFQWFaO0FBYlksR0FjYkosSUFkYSxDQWNSLGNBZFEsRUFjUSxJQWRSLEVBZWJBLElBZmEsQ0FlUixNQWZRLEVBZUEsVUFBQWMsQ0FBQztBQUFBLFdBQUksT0FBSjtBQUFBLEdBZkQsRUFnQmJkLElBaEJhLENBZ0JSLFFBaEJRLEVBZ0JFLFVBQUFjLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNWLElBQUYsQ0FBT29CLEtBQVg7QUFBQSxHQWhCSCxFQWlCYnhCLElBakJhLENBaUJSLGNBakJRLEVBaUJRLFVBQUFjLENBQUM7QUFBQSxXQUFJLENBQUo7QUFBQSxHQWpCVCxDQUFoQjtBQW9CQUUsTUFBSSxDQUFDakIsTUFBTCxDQUFZLE1BQVosRUFDQzBCLEtBREQsQ0FDTyxNQURQLEVBQ2UsT0FEZixFQUVDQSxLQUZELENBRU8sYUFGUCxFQUVzQixRQUZ0QixFQUdBO0FBSEEsR0FJQ0EsS0FKRCxDQUlPLFdBSlAsRUFJb0IsVUFBQVgsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1ksQ0FBRixHQUFNLEdBQVY7QUFBQSxHQUpyQixFQUtDQyxJQUxELENBS00sVUFBQWIsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1YsSUFBRixDQUFPLElBQVAsQ0FBSjtBQUFBLEdBTFA7QUFPQVksTUFBSSxDQUFDakIsTUFBTCxDQUFZLE1BQVosRUFDQ0MsSUFERCxDQUNNLElBRE4sRUFDWSxPQURaLEVBRUN5QixLQUZELENBRU8sTUFGUCxFQUVlLE9BRmYsRUFHQ0EsS0FIRCxDQUdPLGFBSFAsRUFHc0IsUUFIdEIsRUFJQ0EsS0FKRCxDQUlPLFdBSlAsRUFJb0IsVUFBQVgsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1ksQ0FBRixHQUFNLENBQVY7QUFBQSxHQUpyQixFQUtDQyxJQUxELENBS00sVUFBQWIsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1YsSUFBRixDQUFPLEdBQVAsRUFBWXdCLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUJuQixLQUF2QixDQUE2QixDQUE3QixDQUFKO0FBQUEsR0FMUDtBQU9BLFNBQU9iLEdBQUcsQ0FBQ2lDLElBQUosRUFBUDtBQUNELENBM0RNLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbERwQyxvRUFBWTtBQUNacUMsNERBQVE7QUFDUkMsb0VBQVk7QUFDYixDQUpELEU7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNLENBRWpDLENBRk0sQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1ELFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDNUIsTUFBTUUsTUFBTSxHQUFHLEdBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsR0FBZjtBQUNBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0FBRUEsTUFBSUMsSUFBSSxHQUFHeEMsRUFBRSxDQUFDQyxNQUFILENBQVUsV0FBVixFQUF1QkMsTUFBdkIsQ0FBOEIsS0FBOUIsRUFDUkMsSUFEUSxDQUNILE9BREcsRUFDTSxJQUROLENBQVgsQ0FMNEIsQ0FPMUI7QUFDQTs7QUFFRixNQUFNc0MsUUFBUSxHQUFHakMsNkNBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVBLENBQUMsQ0FBQyxJQUFELENBQUQsR0FBVUQsQ0FBQyxDQUFDLElBQUQsQ0FBckI7QUFBQSxHQUFYLEVBQXdDRSxLQUF4QyxDQUE4QyxDQUE5QyxFQUFpREosNkNBQUssQ0FBQ2tDLE1BQU4sR0FBZSxDQUFmLEdBQW1CLEVBQXBFLENBQWpCO0FBRUEsTUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLE9BQVQsRUFBaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdMLElBQUksQ0FBQ3RDLE1BQUwsQ0FBWSxHQUFaLEVBQ1hDLElBRFcsQ0FDTixXQURNLHNCQUNvQmtDLE1BRHBCLGVBQytCQSxNQUQvQixPQUFkO0FBR0EsTUFBTVMsTUFBTSxHQUFHOUMsRUFBRSxDQUFDK0MsU0FBSCxHQUNaQyxLQURZLENBQ04sQ0FBQyxHQUFELEVBQU0sQ0FBTixDQURNLEVBRVpDLE1BRlksQ0FFTE4sT0FBTyxDQUFDTyxHQUFSLENBQVksVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQyxHQUFELENBQUQsQ0FBT3BCLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCLENBQUo7QUFBQSxHQUFiLENBRkssRUFHWnpCLE9BSFksQ0FHSixHQUhJLENBQWY7QUFLQSxNQUFJOEMsS0FBSyxHQUFHUCxLQUFLLENBQUMzQyxNQUFOLENBQWEsR0FBYixFQUNUbUQsSUFEUyxDQUNKckQsRUFBRSxDQUFDc0QsUUFBSCxDQUFZUixNQUFaLENBREksQ0FBWjtBQUdBLE1BQU1TLE1BQU0sR0FBR3ZELEVBQUUsQ0FBQ3dELFdBQUgsR0FDWlIsS0FEWSxDQUNOLENBQUMsQ0FBRCxFQUFJVCxLQUFKLENBRE0sRUFFWlUsTUFGWSxDQUVMLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FGSyxDQUFmO0FBSUEsTUFBSVEsS0FBSyxHQUFHWixLQUFLLENBQUMzQyxNQUFOLENBQWEsR0FBYixFQUNWO0FBRFUsR0FFVG1ELElBRlMsQ0FFSnJELEVBQUUsQ0FBQzBELE9BQUgsQ0FBV0gsTUFBWCxFQUFtQkksS0FBbkIsQ0FBeUIsQ0FBekIsQ0FGSSxDQUFaO0FBSUEsTUFBTUMsU0FBUyxHQUFHZixLQUFLLENBQUN6QixTQUFOLEdBQ2ZiLElBRGUsQ0FDVm9DLE9BRFUsRUFFZmtCLEtBRmUsR0FHZjNELE1BSGUsQ0FHUixHQUhRLENBQWxCO0FBS0F1RCxPQUFLLENBQUNyQyxTQUFOLENBQWdCLE1BQWhCLEVBQ0dRLEtBREgsQ0FDUyxXQURULEVBQ3NCLE1BRHRCO0FBRUF3QixPQUFLLENBQUNoQyxTQUFOLENBQWdCLE1BQWhCLEVBQ0dRLEtBREgsQ0FDUyxXQURULEVBQ3NCLE1BRHRCLEVBdkM0QixDQXlDMUI7O0FBRUZnQyxXQUFTLENBQ04xRCxNQURILENBQ1UsTUFEVixFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQixLQUZqQixFQUdHeUIsS0FISCxDQUdTLFFBSFQsRUFHbUIsVUFBQVgsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1UsS0FBTjtBQUFBLEdBSHBCLEVBSUdDLEtBSkgsQ0FJUyxjQUpULEVBSXlCLENBSnpCLEVBS0d6QixJQUxILENBS1EsY0FMUixFQUt3QixJQUx4QixFQU1HQSxJQU5ILENBTVEsTUFOUixFQU1nQixVQUFBYyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDVSxLQUFOO0FBQUEsR0FOakIsRUFPR3hCLElBUEgsQ0FPUSxHQVBSLEVBT2EsVUFBQWMsQ0FBQztBQUFBLFdBQUlzQyxNQUFNLENBQUN0QyxDQUFDLENBQUMsSUFBRCxDQUFGLENBQVY7QUFBQSxHQVBkLEVBUUdkLElBUkgsQ0FRUSxHQVJSLEVBUWEsVUFBQWMsQ0FBQztBQUFBLFdBQUk2QixNQUFNLENBQUM3QixDQUFDLENBQUMsR0FBRCxDQUFELENBQU9jLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCLENBQUQsQ0FBVjtBQUFBLEdBUmQsRUFTRzVCLElBVEgsQ0FTUSxPQVRSLEVBU2lCLFVBQUFjLENBQUM7QUFBQSxXQUFJLENBQUo7QUFBQSxHQVRsQixFQVVHZCxJQVZILENBVVEsUUFWUixFQVVrQjJDLE1BQU0sQ0FBQ2dCLFNBQVAsRUFWbEIsRUFXRzNELElBWEgsQ0FXUSxHQVhSLEVBV2EsVUFBQzRELE1BQUQsRUFBU0MsQ0FBVCxFQUFZckIsT0FBWjtBQUFBLFdBQXdCRyxNQUFNLENBQUNILE9BQU8sQ0FBQ3FCLENBQUQsQ0FBUCxDQUFXLElBQVgsQ0FBRCxDQUE5QjtBQUFBLEdBWGIsRUFhR3pDLEVBYkgsQ0FhTSxZQWJOLEVBYW9CLFVBQVM0QixDQUFULEVBQVlhLENBQVosRUFBZTtBQUMvQmhFLE1BQUUsQ0FBQ0MsTUFBSCxDQUFVLElBQVYsRUFDR2dFLFVBREgsR0FFR0MsUUFGSCxDQUVZLEdBRlosRUFHRy9ELElBSEgsQ0FHUSxjQUhSLEVBR3dCLElBSHhCLEVBSUdBLElBSkgsQ0FJUSxRQUpSLEVBSWtCMkMsTUFBTSxDQUFDZ0IsU0FBUCxLQUFxQixDQUp2QztBQU1BLFFBQU10QyxDQUFDLEdBQUcrQixNQUFNLENBQUNaLE9BQU8sQ0FBQ3FCLENBQUQsQ0FBUCxDQUFXLElBQVgsQ0FBRCxDQUFoQjtBQUVBLFFBQU1HLElBQUksR0FBR3RCLEtBQUssQ0FDZjNDLE1BRFUsQ0FDSCxNQURHLEVBRVZDLElBRlUsQ0FFTCxJQUZLLEVBRUMsT0FGRCxFQUdWQSxJQUhVLENBR0wsSUFISyxFQUdDcUIsQ0FIRCxFQUlWckIsSUFKVSxDQUlMLElBSkssRUFJQyxDQUpELEVBS1ZBLElBTFUsQ0FLTCxJQUxLLEVBS0NxQixDQUxELEVBTVZyQixJQU5VLENBTUwsSUFOSyxFQU1DbUMsTUFORCxFQU9WbkMsSUFQVSxDQU9MLFFBUEssRUFPSyxRQVBMLENBQWI7QUFRRCxHQTlCSCxFQWdDR29CLEVBaENILENBZ0NNLFlBaENOLEVBZ0NvQixZQUFXO0FBQzNCdkIsTUFBRSxDQUFDQyxNQUFILENBQVUsSUFBVixFQUNHZ0UsVUFESCxHQUVHQyxRQUZILENBRVksR0FGWixFQUdHL0QsSUFISCxDQUdRLGNBSFIsRUFHd0IsSUFIeEIsRUFJR0EsSUFKSCxDQUlRLFFBSlIsRUFJa0IyQyxNQUFNLENBQUNnQixTQUFQLEVBSmxCO0FBTUFqQixTQUFLLENBQUN6QixTQUFOLENBQWdCLFFBQWhCLEVBQTBCZ0QsTUFBMUI7QUFDRCxHQXhDSCxFQTBDRzdDLEVBMUNILENBMENNLE9BMUNOLEVBMENlLFVBQVM0QixDQUFULEVBQVlhLENBQVosRUFBZTtBQUMxQixRQUFNSyxRQUFRLEdBQUdyRSxFQUFFLENBQUNDLE1BQUgsQ0FBVSxVQUFWLEVBQ2RDLE1BRGMsQ0FDUCxNQURPLEVBRWRDLElBRmMsQ0FFVCxPQUZTLEVBRUEsUUFGQSxFQUdkQSxJQUhjLENBR1QsT0FIUyxFQUdBLE1BSEEsRUFJZEEsSUFKYyxDQUlULFFBSlMsRUFJQyxFQUpELENBQWpCLENBRDBCLENBTXhCOztBQUVGLFFBQU1tRSxRQUFRLEdBQUd0RSxFQUFFLENBQUNDLE1BQUgsQ0FBVSxVQUFWLEVBQ2RDLE1BRGMsQ0FDUCxNQURPLEVBRWRDLElBRmMsQ0FFVCxPQUZTLEVBRUEsU0FGQSxFQUdkQSxJQUhjLENBR1QsT0FIUyxFQUdBLE1BSEEsRUFJZEEsSUFKYyxDQUlULFFBSlMsRUFJQyxFQUpELENBQWpCLENBUjBCLENBYXhCOztBQUNGLFFBQU1vRSxTQUFTLEdBQUd2RSxFQUFFLENBQUNDLE1BQUgsQ0FBVSxVQUFWLEVBQ2ZDLE1BRGUsQ0FDUixNQURRLEVBRWZDLElBRmUsQ0FFVixPQUZVLEVBRUQsU0FGQyxFQUdmQSxJQUhlLENBR1YsT0FIVSxFQUdELE1BSEMsRUFJZkEsSUFKZSxDQUlWLFFBSlUsRUFJQSxFQUpBLENBQWxCLENBZDBCLENBbUJ4Qjs7QUFFRmtFLFlBQVEsQ0FDTG5FLE1BREgsQ0FDVSxNQURWLEVBRUdDLElBRkgsQ0FFUSxPQUZSLEVBRWlCLGdCQUZqQixFQUdHeUIsS0FISCxDQUdTLFdBSFQsRUFHc0IsTUFIdEIsRUFJR0UsSUFKSCxDQUlRLFVBQUFiLENBQUM7QUFBQSxhQUFJMEIsT0FBTyxDQUFDcUIsQ0FBRCxDQUFQLENBQVcsR0FBWCxDQUFKO0FBQUEsS0FKVCxFQUtHcEMsS0FMSCxDQUtTLE9BTFQsRUFLa0IsVUFBQVgsQ0FBQztBQUFBLGFBQUkwQixPQUFPLENBQUNxQixDQUFELENBQVAsQ0FBVyxPQUFYLENBQUo7QUFBQSxLQUxuQjtBQU1BSyxZQUFRLENBQ0xuRSxNQURILENBQ1UsTUFEVixFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQixpQkFGakIsRUFHR3lCLEtBSEgsQ0FHUyxXQUhULEVBR3NCLE1BSHRCLEVBSUdFLElBSkgsQ0FJUSxVQUFBYixDQUFDO0FBQUEsYUFBSSxXQUFXMEIsT0FBTyxDQUFDcUIsQ0FBRCxDQUFQLENBQVcsR0FBWCxDQUFmO0FBQUEsS0FKVCxFQUtHcEMsS0FMSCxDQUtTLE9BTFQsRUFLa0IsVUFBQVgsQ0FBQztBQUFBLGFBQUkwQixPQUFPLENBQUNxQixDQUFELENBQVAsQ0FBVyxPQUFYLENBQUo7QUFBQSxLQUxuQjtBQU9BTSxZQUFRLENBQ0xwRSxNQURILENBQ1UsTUFEVixFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQixpQkFGakIsRUFHR3lCLEtBSEgsQ0FHUyxXQUhULEVBR3NCLE1BSHRCLEVBSUU7QUFKRixLQUtHRSxJQUxILENBS1EsVUFBQWIsQ0FBQztBQUFBLGFBQUksV0FBVzBCLE9BQU8sQ0FBQ3FCLENBQUQsQ0FBUCxDQUFXLElBQVgsQ0FBWCxHQUE4QixTQUE5QixHQUEwQyxRQUExQyxHQUFxRHJCLE9BQU8sQ0FBQ3FCLENBQUQsQ0FBUCxDQUFXLElBQVgsQ0FBckQsR0FBd0UsU0FBeEUsR0FBb0YsUUFBcEYsR0FBK0ZyQixPQUFPLENBQUNxQixDQUFELENBQVAsQ0FBVyxJQUFYLENBQS9GLEdBQWtILFNBQWxILEdBQThILFFBQTlILEdBQXlJckIsT0FBTyxDQUFDcUIsQ0FBRCxDQUFQLENBQVcsSUFBWCxDQUF6SSxHQUE0SixTQUE1SixHQUF3SyxRQUF4SyxHQUFtTHJCLE9BQU8sQ0FBQ3FCLENBQUQsQ0FBUCxDQUFXLElBQVgsQ0FBbkwsR0FBc00sU0FBdE0sR0FBa04sUUFBbE4sR0FBNk5yQixPQUFPLENBQUNxQixDQUFELENBQVAsQ0FBVyxJQUFYLENBQTdOLEdBQWdQLFNBQWhQLEdBQTRQLE9BQTVQLEdBQXNRckIsT0FBTyxDQUFDcUIsQ0FBRCxDQUFQLENBQVcsR0FBWCxDQUF0USxHQUF3UixTQUF4UixHQUFvUyxRQUFwUyxHQUErU3JCLE9BQU8sQ0FBQ3FCLENBQUQsQ0FBUCxDQUFXLEdBQVgsQ0FBblQ7QUFBQSxLQUxUO0FBT0FPLGFBQVMsQ0FDTnJFLE1BREgsQ0FDVSxNQURWLEVBRUdDLElBRkgsQ0FFUSxPQUZSLEVBRWlCLGlCQUZqQixFQUdHeUIsS0FISCxDQUdTLFdBSFQsRUFHc0IsTUFIdEIsRUFJRTtBQUpGLEtBS0dFLElBTEgsQ0FLUSxVQUFBYixDQUFDO0FBQUEsYUFBSSw2QkFBNkIwQixPQUFPLENBQUNxQixDQUFELENBQVAsQ0FBVyxHQUFYLENBQTdCLEdBQStDLFdBQS9DLEdBQTZELFFBQTdELEdBQXdFckIsT0FBTyxDQUFDcUIsQ0FBRCxDQUFQLENBQVcsSUFBWCxDQUF4RSxHQUEyRixXQUEzRixHQUF5RyxXQUF6RyxHQUF1SHJCLE9BQU8sQ0FBQ3FCLENBQUQsQ0FBUCxDQUFXLEdBQVgsQ0FBdkgsR0FBeUksV0FBekksR0FBdUosWUFBdkosR0FBc0tyQixPQUFPLENBQUNxQixDQUFELENBQVAsQ0FBVyxJQUFYLENBQXRLLEdBQXlMLFdBQXpMLEdBQXVNLFdBQXZNLEdBQXFOckIsT0FBTyxDQUFDcUIsQ0FBRCxDQUFQLENBQVcsSUFBWCxDQUF6TjtBQUFBLEtBTFQ7QUFPQVEsVUFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLEdBQW5CO0FBQ0QsR0EzRkg7QUE2RkFqQyxNQUFJLENBQUNwQixTQUFMLENBQWUsTUFBZixFQUNHNkMsVUFESCxHQUVHQyxRQUZILENBRVksR0FGWixFQUdHL0QsSUFISCxDQUdRLEdBSFIsRUFHYSxVQUFBYyxDQUFDO0FBQUEsV0FBSXNDLE1BQU0sQ0FBQ3RDLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBVjtBQUFBLEdBSGQsRUFJR2QsSUFKSCxDQUlRLE9BSlIsRUFJaUIsVUFBQWMsQ0FBQztBQUFBLFdBQUlzQyxNQUFNLENBQUN0QyxDQUFDLENBQUMsSUFBRCxDQUFGLENBQVY7QUFBQSxHQUpsQixFQUtHZCxJQUxILENBS1EsR0FMUixFQUthLFVBQUM0RCxNQUFELEVBQVNDLENBQVQsRUFBWXJCLE9BQVo7QUFBQSxXQUF3QkcsTUFBTSxDQUFDSCxPQUFPLENBQUNxQixDQUFELENBQVAsQ0FBVyxJQUFYLENBQUQsQ0FBOUI7QUFBQSxHQUxiO0FBT0FKLFdBQVMsQ0FDTjFELE1BREgsQ0FDVSxNQURWLEVBRUdDLElBRkgsQ0FFUSxPQUZSLEVBRWlCLE9BRmpCLEVBR0dBLElBSEgsQ0FHUSxHQUhSLEVBR2EsVUFBQWMsQ0FBQztBQUFBLFdBQUlzQyxNQUFNLENBQUN0QyxDQUFDLENBQUMsSUFBRCxDQUFGLENBQU4sR0FBa0IsRUFBdEI7QUFBQSxHQUhkLEVBSUdkLElBSkgsQ0FJUSxHQUpSLEVBSWEsVUFBQWMsQ0FBQztBQUFBLFdBQUk2QixNQUFNLENBQUM3QixDQUFDLENBQUMsR0FBRCxDQUFELENBQU9jLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCLENBQUQsQ0FBTixHQUErQixDQUEvQixHQUFtQ2UsTUFBTSxDQUFDZ0IsU0FBUCxLQUFxQixDQUE1RDtBQUFBLEdBSmQsRUFLRzNELElBTEgsQ0FLUSxhQUxSLEVBS3VCLFFBTHZCLEVBTUcyQixJQU5ILENBTVEsVUFBQWIsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQyxJQUFELENBQUw7QUFBQSxHQU5ULEVBT0dXLEtBUEgsQ0FPUyxNQVBULEVBT2lCLE9BUGpCO0FBU0FnQyxXQUFTLENBQ04xRCxNQURILENBQ1UsTUFEVixFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQixPQUZqQixFQUdHQSxJQUhILENBR1EsR0FIUixFQUdhLFVBQUFjLENBQUM7QUFBQSxXQUFJc0MsTUFBTSxDQUFDdEMsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFOLEdBQWtCLENBQXRCO0FBQUEsR0FIZCxFQUlHZCxJQUpILENBSVEsR0FKUixFQUlhLFVBQUFjLENBQUM7QUFBQSxXQUFJNkIsTUFBTSxDQUFDN0IsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxDQUFPYyxLQUFQLENBQWEsR0FBYixFQUFrQixDQUFsQixDQUFELENBQU4sR0FBK0IsQ0FBL0IsR0FBbUNlLE1BQU0sQ0FBQ2dCLFNBQVAsS0FBcUIsQ0FBNUQ7QUFBQSxHQUpkLEVBS0czRCxJQUxILENBS1EsYUFMUixFQUt1QixRQUx2QixFQU1HeUIsS0FOSCxDQU1TLE1BTlQsRUFNaUIsT0FOakIsRUFPR0EsS0FQSCxDQU9TLFlBUFQsRUFPdUIsUUFQdkIsRUFRR0EsS0FSSCxDQVFTLFdBUlQsRUFRc0IsTUFSdEIsRUFTR0UsSUFUSCxDQVNRLFVBQUFiLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUMsR0FBRCxDQUFMO0FBQUEsR0FUVDtBQVlBdUIsTUFBSSxDQUFDdEMsTUFBTCxDQUFZLE1BQVosRUFDR0MsSUFESCxDQUNRLEdBRFIsRUFDYW9DLEtBQUssR0FBRyxDQUFSLEdBQVlGLE1BRHpCLEVBRUdsQyxJQUZILENBRVEsR0FGUixFQUVhLEVBRmIsRUFHR0EsSUFISCxDQUdRLGFBSFIsRUFHdUIsUUFIdkIsRUFJRzJCLElBSkgsQ0FJUSw4QkFKUixFQUtHRixLQUxILENBS1MsV0FMVCxFQUtzQixNQUx0QixFQU1HQSxLQU5ILENBTVMsTUFOVCxFQU1pQixPQU5qQjtBQVNBWSxNQUFJLENBQUN0QyxNQUFMLENBQVksTUFBWixFQUNHQyxJQURILENBQ1EsR0FEUixFQUNhb0MsS0FBSyxHQUFHLEVBRHJCLEVBRUdwQyxJQUZILENBRVEsR0FGUixFQUVhLEVBRmIsRUFHR0EsSUFISCxDQUdRLGFBSFIsRUFHdUIsT0FIdkIsRUFJRzJCLElBSkgsQ0FJUSxpQkFKUixFQUtHRixLQUxILENBS1MsTUFMVCxFQUtpQixNQUxqQixFQU1HQSxLQU5ILENBTVMsV0FOVCxFQU1zQixNQU50QjtBQVFBWSxNQUFJLENBQUN0QyxNQUFMLENBQVksTUFBWixFQUNHQyxJQURILENBQ1EsT0FEUixFQUNpQixRQURqQixFQUVHQSxJQUZILENBRVEsR0FGUixFQUVhb0MsS0FBSyxHQUFHRixNQUFNLEdBQUcsQ0FGOUIsRUFHR2xDLElBSEgsQ0FHUSxHQUhSLEVBR2FtQyxNQUFNLEdBQUdELE1BQVQsR0FBa0IsRUFIL0IsRUFJR2xDLElBSkgsQ0FJUSxhQUpSLEVBSXVCLE9BSnZCLEVBS0cyQixJQUxILENBS1EsOEJBTFIsRUFNR0YsS0FOSCxDQU1TLE1BTlQsRUFNaUIsTUFOakI7QUFRQVksTUFBSSxDQUFDdEMsTUFBTCxHQTdMNEIsQ0E4TDVCO0FBRUQsQ0FoTU0sQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgc3RhdHMgZnJvbSAnLi4vZGF0YS9zdGF0cy5qc29uJztcblxuZXhwb3J0IGNvbnN0IGJ1YmJsZV9jaGFydCA9ICgpID0+IHtcbiAgbGV0IHN2ZyA9IGQzLnNlbGVjdCgnI3RvcF9wZXInKS5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2J1YmJsZV9zdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIDEwMDApXG4gICAgLmF0dHIoJ2hlaWdodCcsIDY0MClcbiAgICAvLyAuYXR0cignc3R5bGUnLCAnYm9yZGVyOiB0aGluIHdoaXRlIHNvbGlkJylcbiAgICAvLyAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxuICBcbiAgbGV0IHBhY2sgPSBkMy5wYWNrKCkuc2l6ZShbMTAwMCwgNjAwXSkucGFkZGluZygzKTtcbiAgbGV0IGRhdGEgPSBzdGF0cy5zb3J0KChhLGIpID0+IGJbJzIyJ10gLSBhWycyMiddKS5zbGljZSgwLCAzMCk7XG4gIGxldCBoaWVyYXJjaHkxID0gZDMuaGllcmFyY2h5KHsgY2hpbGRyZW46IGRhdGEgfSkuc3VtKGQgPT4gZFsnMjInXSk7XG5cbiAgY29uc3Qgcm9vdCA9IHBhY2soaGllcmFyY2h5MSk7XG5cbiAgY29uc3QgbGVhZiA9IHN2Zy5zZWxlY3RBbGwoXCJnXCIpXG4gICAgLmRhdGEocm9vdC5sZWF2ZXMoKSlcbiAgICAuam9pbihcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IGB0cmFuc2xhdGUoNTAwLDM2MClgKVxuICAgIC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYClcbiAgICB9KVxuICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSgwLDApYClcblxuICBjb25zdCBjaXJjbGVzID0gbGVhZi5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAuYXR0cignY2xhc3MnLCAnc3RhdC1jaXJjbGVzJylcbiAgICAuYXR0cihcInJcIiwgZCA9PiB7XG4gICAgICBpZiAoZC5kYXRhWycyMiddID4gMjgpIHtcbiAgICAgICAgcmV0dXJuIGQuZGF0YVsnMjInXSArIDI1XG4gICAgICB9IGVsc2UgaWYgKGQuZGF0YVsnMjInXSA+IDI1KSB7XG4gICAgICAgIHJldHVybiBkLmRhdGFbJzIyJ10gKyAyMFxuICAgICAgfSBlbHNlIGlmIChkLmRhdGFbJzIyJ10gPiAyMCkge1xuICAgICAgICByZXR1cm4gZC5kYXRhWycyMiddICsgMTVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkLmRhdGFbJzIyJ10gKyAxNVxuICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGQuZGF0YVsnMjInXSArIDE4KVxuICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuNzApXG4gICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4gJ2JsYWNrJylcbiAgICAuYXR0cignc3Ryb2tlJywgZCA9PiBkLmRhdGEuY29sb3IpXG4gICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIGQgPT4gNClcbiAgXG5cbiAgbGVhZi5hcHBlbmQoXCJ0ZXh0XCIpXG4gIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgLy8gLnN0eWxlKCdmb250LXNpemUnLCAnMjVweCcpXG4gIC5zdHlsZSgnZm9udC1zaXplJywgZCA9PiBkLnIgLyAxLjUpXG4gIC50ZXh0KGQgPT4gZC5kYXRhWycyMiddKVxuXG4gIGxlYWYuYXBwZW5kKFwidGV4dFwiKVxuICAuYXR0cignZHknLCAnMS41ZW0nKVxuICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gIC5zdHlsZSgnZm9udC1zaXplJywgZCA9PiBkLnIgLyAzKVxuICAudGV4dChkID0+IGQuZGF0YVsnMiddLnNwbGl0KCcgJykuc2xpY2UoMSkpXG5cbiAgcmV0dXJuIHN2Zy5ub2RlKCk7XG59XG5cbiIsImltcG9ydCB7IGJ1YmJsZV9jaGFydCB9IGZyb20gXCIuL2J1YmJsZV9jaGFydFwiO1xuaW1wb3J0IHsgb3V0ZXJfY2lyY2xlIH0gZnJvbSBcIi4vb3V0ZXJfY2lyY2xlXCI7XG5pbXBvcnQgeyBzdGF0X2JhciB9IGZyb20gXCIuL3N0YXRfYmFyXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgYnViYmxlX2NoYXJ0KCk7XG4gIHN0YXRfYmFyKCk7XG4gIG91dGVyX2NpcmNsZSgpO1xufSk7IiwiZXhwb3J0IGNvbnN0IG91dGVyX2NpcmNsZSA9ICgpID0+IHtcbiAgXG59IiwiaW1wb3J0IHN0YXRzIGZyb20gXCIuLi9kYXRhL3N0YXRzLmpzb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0YXRfYmFyID0gKCkgPT4ge1xuICBjb25zdCBtYXJnaW4gPSAxMTA7XG4gIGNvbnN0IGhlaWdodCA9IDgwMDtcbiAgY29uc3Qgd2lkdGggPSA4MDA7XG5cbiAgbGV0IHN2ZzIgPSBkMy5zZWxlY3QoXCIjc3RhdF9iYXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCAxMDAwKVxuICAgIC8vIC5hdHRyKFwibWluLWhlaWdodFwiLCBoZWlnaHQpXG4gICAgLy8gLmF0dHIoXCJzdHlsZVwiLCBcImJvcmRlcjogdGhpbiB3aGl0ZSBzb2xpZFwiKTtcblxuICBjb25zdCB0b3AyNXB0cyA9IHN0YXRzLnNvcnQoKGEsIGIpID0+IGJbXCIyMlwiXSAtIGFbXCIyMlwiXSkuc2xpY2UoMCwgc3RhdHMubGVuZ3RoIC8gMiAtIDEwKTtcbiAgXG4gIGNvbnN0IHJUb3BQdHMgPSB0b3AyNXB0cy5yZXZlcnNlKCk7XG4gIGNvbnN0IGNoYXJ0ID0gc3ZnMi5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2lufSwgJHttYXJnaW59KWApXG5cbiAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVCYW5kKClcbiAgICAucmFuZ2UoWzYwMCwgMF0pXG4gICAgLmRvbWFpbihyVG9wUHRzLm1hcChzID0+IHNbJzInXS5zcGxpdCgnICcpWzFdKSlcbiAgICAucGFkZGluZygwLjQpO1xuICAgIFxuICBsZXQgeUF4aXMgPSBjaGFydC5hcHBlbmQoJ2cnKVxuICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkpO1xuXG4gIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAuZG9tYWluKFsxNiwgMzZdKVxuXG4gIGxldCB4QXhpcyA9IGNoYXJ0LmFwcGVuZCgnZycpXG4gICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgNzAwKWApXG4gICAgLmNhbGwoZDMuYXhpc1RvcCh4U2NhbGUpLnRpY2tzKDcpKVxuXG4gIGNvbnN0IGJhckdyb3VwcyA9IGNoYXJ0LnNlbGVjdEFsbCgpXG4gICAgLmRhdGEoclRvcFB0cylcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ2cnKVxuXG4gIHhBeGlzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTNweCcpXG4gIHlBeGlzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTNweCcpXG4gICAgLy8gLnN0eWxlKCdmb250LXN0eWxlJywgJ2l0YWxpYycpXG4gIFxuICBiYXJHcm91cHNcbiAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAuc3R5bGUoXCJzdHJva2VcIiwgZCA9PiBkLmNvbG9yKVxuICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuMzApXG4gICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4gZC5jb2xvcilcbiAgICAuYXR0cihcInhcIiwgZCA9PiB4U2NhbGUoZFtcIjIyXCJdKSlcbiAgICAuYXR0cihcInlcIiwgZCA9PiB5U2NhbGUoZFtcIjJcIl0uc3BsaXQoXCIgXCIpWzFdKSlcbiAgICAuYXR0cihcIndpZHRoXCIsIGQgPT4gMClcbiAgICAuYXR0cihcImhlaWdodFwiLCB5U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgLmF0dHIoXCJ4XCIsIChhY3R1YWwsIGksIHJUb3BQdHMpID0+IHlTY2FsZShyVG9wUHRzW2ldW1wiMjJcIl0pKVxuICBcbiAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKHMsIGkpIHtcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuODUpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHlTY2FsZS5iYW5kd2lkdGgoKSArIDUpO1xuXG4gICAgICBjb25zdCB4ID0geFNjYWxlKHJUb3BQdHNbaV1bXCIyMlwiXSk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSBjaGFydFxuICAgICAgICAuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImlkXCIsIFwibGltaXRcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCB4KVxuICAgICAgICAuYXR0cihcInkxXCIsIDApXG4gICAgICAgIC5hdHRyKFwieDJcIiwgeClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCBoZWlnaHQpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwib3JhbmdlXCIpO1xuICAgIH0pXG5cbiAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC4yNSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgeVNjYWxlLmJhbmR3aWR0aCgpKTtcblxuICAgICAgY2hhcnQuc2VsZWN0QWxsKFwiI2xpbWl0XCIpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbihzLCBpKSB7XG4gICAgICBjb25zdCBuYW1lUmVjdCA9IGQzLnNlbGVjdChcIiNkZXRhaWxzXCIpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZGV0YWlsJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgJzEwMCUnKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgNTApXG4gICAgICAgIC8vIC5hdHRyKCdzdHlsZScsICdib3JkZXItdG9wOiB0aGluICM2MTYxNjEgc29saWQnKVxuXG4gICAgICBjb25zdCBzdGF0UmVjdCA9IGQzLnNlbGVjdChcIiNkZXRhaWxzXCIpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZGV0YWlsMicpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICcxMDAlJylcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDUwKVxuICAgICAgICAvLyAuYXR0cignc3R5bGUnLCAnYm9yZGVyOiB0aGluICM2MTYxNjEgc29saWQnKVxuICAgICAgY29uc3Qgc3RhdFJlY3QyID0gZDMuc2VsZWN0KFwiI2RldGFpbHNcIilcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdkZXRhaWwzJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgJzEwMCUnKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgNTApXG4gICAgICAgIC8vIC5hdHRyKCdzdHlsZScsICdib3JkZXI6IHRoaW4gIzYxNjE2MSBzb2xpZCcpXG4gICAgICBcbiAgICAgIG5hbWVSZWN0XG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAncGxheWVyX2RldGFpbHMnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcyOHB4JylcbiAgICAgICAgLnRleHQoZCA9PiByVG9wUHRzW2ldWycyJ10pXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCBkID0+IHJUb3BQdHNbaV1bJ2NvbG9yJ10pXG4gICAgICBuYW1lUmVjdFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3BsYXllcl9kZXRhaWxzMicpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE4cHgnKVxuICAgICAgICAudGV4dChkID0+ICdUZWFtOiAnICsgclRvcFB0c1tpXVsnMyddKVxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgZCA9PiByVG9wUHRzW2ldWydjb2xvciddKVxuXG4gICAgICBzdGF0UmVjdFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3BsYXllcl9kZXRhaWxzMycpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE4cHgnKVxuICAgICAgICAvLyAudGV4dCgnR1AgIE1JTiAgRkdNICBGR0EgIEZHUENUICBGRzNNICBGRzNBICBGRzNQQ1QgIEZUQSAgRlRQQ1QgIE9SRUIgIERSRUIgIFJFQiAgQVNUICBTVEwgIEJMSyAgVE8gIFBUUycpXG4gICAgICAgIC50ZXh0KGQgPT4gJ1B0czogICcgKyByVG9wUHRzW2ldWycyMiddICsgJyAgIHwgICAnICsgJ1JlYjogICcgKyByVG9wUHRzW2ldWycxNyddICsgJyAgIHwgICAnICsgJ0FzdDogICcgKyByVG9wUHRzW2ldWycxOCddICsgJyAgIHwgICAnICsgJ1N0bDogICcgKyByVG9wUHRzW2ldWycxOSddICsgJyAgIHwgICAnICsgJ0JsazogICcgKyByVG9wUHRzW2ldWycyMCddICsgJyAgIHwgICAnICsgJ1RPVjogICcgKyByVG9wUHRzW2ldWycyMSddICsgJyAgIHwgICAnICsgJ0dQOiAgJyArIHJUb3BQdHNbaV1bJzQnXSArICcgICB8ICAgJyArICdNaW46ICAnICsgclRvcFB0c1tpXVsnNSddKVxuXG4gICAgICBzdGF0UmVjdDJcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdwbGF5ZXJfZGV0YWlsczQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxN3B4JylcbiAgICAgICAgLy8gLnRleHQoZCA9PiByVG9wUHRzW2ldWyc0J10gKyAnICAgJyArIHJUb3BQdHNbaV1bJzUnXSArICcgICAgJyArIHJUb3BQdHNbaV1bJzYnXSArICcgICAgICAnICsgclRvcFB0c1tpXVsnNyddICsgJyAgICAnICsgclRvcFB0c1tpXVsnOCddICsgJyAgICAnICsgclRvcFB0c1tpXVsnOSddICsgJyAgICAnICsgclRvcFB0c1tpXVsnMTAnXSArICcgJyArIHJUb3BQdHNbaV1bJzExJ10gKyAnICcgKyByVG9wUHRzW2ldWycxMiddICsgJyAnICsgclRvcFB0c1tpXVsnMTMnXSArICcgJyArIHJUb3BQdHNbaV1bJzE0J10gKyAnICcgKyByVG9wUHRzW2ldWycxNSddICsgJyAnICsgclRvcFB0c1tpXVsnMTYnXSArICcgJyArIHJUb3BQdHNbaV1bJzE3J10gKyAnICcgKyByVG9wUHRzW2ldWycxOCddICsgJyAnICsgclRvcFB0c1tpXVsnMTknXSArICcgJyArIHJUb3BQdHNbaV1bJzIwJ10gKyAnICcgKyByVG9wUHRzW2ldWycyMSddICsgJyAnICsgclRvcFB0c1tpXVsnMjInXSlcbiAgICAgICAgLnRleHQoZCA9PiAnQWR2YW5jZWQ6ICAgIEVmZl9SYW5rOiAgJyArIHJUb3BQdHNbaV1bJzEnXSArICcgICAgfCAgICAnICsgJ0VmZjogICcgKyByVG9wUHRzW2ldWycyMyddICsgJyAgICB8ICAgICcgKyAnRmdfUGN0OiAgJyArIHJUb3BQdHNbaV1bJzgnXSArICcgICAgfCAgICAnICsgJ0ZnM19QY3Q6ICAnICsgclRvcFB0c1tpXVsnMTEnXSArICcgICAgfCAgICAnICsgJ0Z0X1BjdDogICcgKyByVG9wUHRzW2ldWycxNCddKVxuICAgICAgXG4gICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMzUwKTtcbiAgICB9KTtcblxuICBzdmcyLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig4MDApXG4gICAgLmF0dHIoXCJ4XCIsIGQgPT4geFNjYWxlKGRbXCIyMlwiXSkpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBkID0+IHhTY2FsZShkW1wiMjJcIl0pKVxuICAgIC5hdHRyKFwieFwiLCAoYWN0dWFsLCBpLCByVG9wUHRzKSA9PiB5U2NhbGUoclRvcFB0c1tpXVtcIjIyXCJdKSlcblxuICBiYXJHcm91cHNcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2YWx1ZVwiKVxuICAgIC5hdHRyKFwieFwiLCBkID0+IHhTY2FsZShkW1wiMjJcIl0pICsgMjQpXG4gICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKGRbXCIyXCJdLnNwbGl0KFwiIFwiKVsxXSkgKyA0ICsgeVNjYWxlLmJhbmR3aWR0aCgpIC8gMilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoZCA9PiBkW1wiMjJcIl0pXG4gICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgXG4gIGJhckdyb3Vwc1xuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInZhbHVlXCIpXG4gICAgLmF0dHIoXCJ4XCIsIGQgPT4geFNjYWxlKGRbXCIyMlwiXSkgLyAyKVxuICAgIC5hdHRyKFwieVwiLCBkID0+IHlTY2FsZShkW1wiMlwiXS5zcGxpdChcIiBcIilbMV0pICsgNSArIHlTY2FsZS5iYW5kd2lkdGgoKSAvIDIpXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgLnN0eWxlKCdmb250LXN0eWxlJywgJ2l0YWxpYycpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgLnRleHQoZCA9PiBkW1wiMlwiXSk7XG4gICAgXG5cbiAgc3ZnMi5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCd4Jywgd2lkdGggLyAyICsgbWFyZ2luKVxuICAgIC5hdHRyKCd5JywgNTApXG4gICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgLnRleHQoJ1RvcCAxNSBTY29yZXJzIGluIHRoZSBMZWFndWUnKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzMwcHgnKVxuICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgXG5cbiAgc3ZnMi5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCd4Jywgd2lkdGggKyAzMClcbiAgICAuYXR0cigneScsIDc1KVxuICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgLnRleHQoJ1BvaW50cyBQZXIgR2FtZScpXG4gICAgLnN0eWxlKCdmaWxsJywgJ3BpbmsnKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEzcHgnKVxuXG4gIHN2ZzIuYXBwZW5kKCd0ZXh0JylcbiAgICAuYXR0cignY2xhc3MnLCAnc291cmNlJylcbiAgICAuYXR0cigneCcsIHdpZHRoIC0gbWFyZ2luIC8gMilcbiAgICAuYXR0cigneScsIGhlaWdodCAtIG1hcmdpbiArIDIwKVxuICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgLnRleHQoJ1NvdXJjZTogTkJBIFN0YXRzLCAyMDE5LTIwMjAnKVxuICAgIC5zdHlsZSgnZmlsbCcsICdwaW5rJylcblxuICBzdmcyLmFwcGVuZCgpXG4gIC8vIGRldGFpbHNTdmcuYXBwZW5kKClcbiAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9