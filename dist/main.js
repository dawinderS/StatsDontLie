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
  var svg = d3.select('.pts').append('svg').attr('class', 'bubble_svg').attr('width', 1000).attr('height', 640); // .attr('style', 'border: thin white solid')
  // .style('background-color', 'white')

  var width = 1000;
  var height = 640;
  var pack = d3.pack().size([1000, 640]).padding(3);
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
      return 'translate(' + d.x + ',' + d.y + ')';
    }); // svg.selectAll('g')
    //   .attr('transform', (d,i) => {
    //     let x = 0;
    //     let y = 0;
    //     if (i < 6 ) {
    //       x = (i%6) * 140 + 140;
    //       y = 120 * Math.floor(i / 6) + 115;
    //     } else if (i < 12) {
    //       x = (i % 6) * 123 + 190;
    //       y = 115 * Math.floor(i / 6) + 115;
    //     } else if (i < 18) {
    //       x = (i % 6) * 115 + 210;
    //       y = 110 * Math.floor(i / 6) + 115;
    //     } else if (i < 24) {
    //       x = (i % 6) * 105 + 240;
    //       y = 105 * Math.floor(i / 6) + 115;
    //     } else if (i < 30) {
    //       x = (i % 6) * 95 + 260;
    //       y = 100 * Math.floor(i / 6) + 115;
    //     }
    //     return "translate(" + [x,y] + ")"
    //   })
    // document.querySelector('.leaves').style.display = 'none'
  });
  var circles = leaf.append("circle").attr('class', 'stat-circles').attr("r", function (d) {
    if (d.data['22'] > 29) {
      return d.data['22'] + 25;
    } else if (d.data['22'] > 25) {
      return d.data['22'] + 20;
    } else if (d.data['22'] > 20) {
      return d.data['22'] + 15;
    } else {
      return d.data['22'] + 15;
    }
  }).attr("fill-opacity", 0.85).attr("fill", function (d) {
    return 'black';
  }).attr('stroke', function (d) {
    return d.data.color;
  }).attr('stroke-width', function (d) {
    return 4;
  }).on('click', function (s, i) {
    // if (document.getElementsByClassName('.bubble_svg').style.left = '500px') {
    //   console.log('hello');
    // }
    var nameRect = d3.select("#deets").append('rect').attr('class', 'detail').attr('width', '100%').attr('height', 50); // .attr('style', 'border-top: thin #616161 solid')

    var statRect = d3.select("#deets").append('rect').attr('class', 'detail2').attr('width', '100%').attr('height', 50); // .attr('style', 'border: thin #616161 solid')

    var statRect2 = d3.select("#deets").append('rect').attr('class', 'detail3').attr('width', '100%').attr('height', 50); // .attr('style', 'border: thin #616161 solid')

    nameRect.append('text').attr('class', 'player_details').style('font-size', '28px').text(function (d) {
      return data[i]['2'];
    }).style('color', function (d) {
      return data[i]['color'];
    });
    nameRect.append('text').attr('class', 'player_details2').style('font-size', '18px').text(function (d) {
      return 'Team: ' + data[i]['3'];
    }).style('color', function (d) {
      return data[i]['color'];
    });
    statRect.append('text').attr('class', 'player_details3').style('font-size', '18px') // .text('GP  MIN  FGM  FGA  FGPCT  FG3M  FG3A  FG3PCT  FTA  FTPCT  OREB  DREB  REB  AST  STL  BLK  TO  PTS')
    .text(function (d) {
      return 'Pts:  ' + data[i]['22'] + '   |   ' + 'Reb:  ' + data[i]['17'] + '   |   ' + 'Ast:  ' + data[i]['18'] + '   |   ' + 'Stl:  ' + data[i]['19'] + '   |   ' + 'Blk:  ' + data[i]['20'] + '   |   ' + 'TOV:  ' + data[i]['21'] + '   |   ' + 'GP:  ' + data[i]['4'] + '   |   ' + 'Min:  ' + data[i]['5'];
    });
    statRect2.append('text').attr('class', 'player_details4').style('font-size', '17px') // .text(d => data[i]['4'] + '   ' + data[i]['5'] + '    ' + data[i]['6'] + '      ' + data[i]['7'] + '    ' + data[i]['8'] + '    ' + data[i]['9'] + '    ' + data[i]['10'] + ' ' + data[i]['11'] + ' ' + data[i]['12'] + ' ' + data[i]['13'] + ' ' + data[i]['14'] + ' ' + data[i]['15'] + ' ' + data[i]['16'] + ' ' + data[i]['17'] + ' ' + data[i]['18'] + ' ' + data[i]['19'] + ' ' + data[i]['20'] + ' ' + data[i]['21'] + ' ' + data[i]['22'])
    .text(function (d) {
      return 'Advanced:    Eff_Rank:  ' + data[i]['1'] + '    |    ' + 'Eff:  ' + data[i]['23'] + '    |    ' + 'Fg_Pct:  ' + data[i]['8'] + '    |    ' + 'Fg3_Pct:  ' + data[i]['11'] + '    |    ' + 'Ft_Pct:  ' + data[i]['14'];
    });
    window.scrollBy(0, 100);
  });
  leaf.append("text").style('fill', 'white').style('text-anchor', 'middle') // .style('font-size', '25px')
  .style('font-size', function (d) {
    return d.r / 1.5;
  }).text(function (d) {
    return d.data['22'];
  }).attr('dy', '0.25em');
  leaf.append("text").attr('dy', '1.7em').style('fill', 'white').style('text-anchor', 'middle').style('font-size', function (d) {
    return d.r / 3;
  }).text(function (d) {
    return d.data['2'].split(' ').slice(1);
  });
  leaf.append("text").attr('dy', '-1.9em').style('fill', 'white').style('text-anchor', 'middle').style('font-size', function (d) {
    return d.r / 3.9;
  }).text(function (d) {
    return d.data['2'].split(' ').slice(0, 1);
  }); ////////////////////////////////////////////////////////////////////////////////

  var leaf2 = svg.selectAll("h").data(root.leaves()).join("h").attr("transform", function (d) {
    return "translate(250,300)";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZV9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGVyX2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdF9iYXIuanMiXSwibmFtZXMiOlsiYnViYmxlX2NoYXJ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwid2lkdGgiLCJoZWlnaHQiLCJwYWNrIiwic2l6ZSIsInBhZGRpbmciLCJkYXRhIiwic3RhdHMiLCJzb3J0IiwiYSIsImIiLCJzbGljZSIsImhpZXJhcmNoeTEiLCJoaWVyYXJjaHkiLCJjaGlsZHJlbiIsInN1bSIsImQiLCJyb290IiwibGVhZiIsInNlbGVjdEFsbCIsImxlYXZlcyIsImpvaW4iLCJvbiIsIngiLCJ5IiwiY2lyY2xlcyIsImNvbG9yIiwicyIsImkiLCJuYW1lUmVjdCIsInN0YXRSZWN0Iiwic3RhdFJlY3QyIiwic3R5bGUiLCJ0ZXh0Iiwid2luZG93Iiwic2Nyb2xsQnkiLCJyIiwic3BsaXQiLCJsZWFmMiIsIm5vZGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0X2JhciIsIm91dGVyX2NpcmNsZSIsIm1hcmdpbiIsInN2ZzIiLCJ0b3AyNXB0cyIsImxlbmd0aCIsInJUb3BQdHMiLCJyZXZlcnNlIiwiY2hhcnQiLCJ5U2NhbGUiLCJzY2FsZUJhbmQiLCJyYW5nZSIsImRvbWFpbiIsIm1hcCIsInlBeGlzIiwiY2FsbCIsImF4aXNMZWZ0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJ4QXhpcyIsImF4aXNUb3AiLCJ0aWNrcyIsImJhckdyb3VwcyIsImVudGVyIiwiYmFuZHdpZHRoIiwiYWN0dWFsIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibGluZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFD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LEVBQ2FDLEtBQUssR0FBRyxDQUFSLEdBQVkyQyxNQUR6QixFQUVHNUMsSUFGSCxDQUVRLEdBRlIsRUFFYSxFQUZiLEVBR0dBLElBSEgsQ0FHUSxhQUhSLEVBR3VCLFFBSHZCLEVBSUdpQyxJQUpILENBSVEsOEJBSlIsRUFLR0QsS0FMSCxDQUtTLFdBTFQsRUFLc0IsTUFMdEIsRUFNR0EsS0FOSCxDQU1TLE1BTlQsRUFNaUIsT0FOakI7QUFTQWEsTUFBSSxDQUFDOUMsTUFBTCxDQUFZLE1BQVosRUFDR0MsSUFESCxDQUNRLEdBRFIsRUFDYUMsS0FBSyxHQUFHLEVBRHJCLEVBRUdELElBRkgsQ0FFUSxHQUZSLEVBRWEsRUFGYixFQUdHQSxJQUhILENBR1EsYUFIUixFQUd1QixPQUh2QixFQUlHaUMsSUFKSCxDQUlRLGlCQUpSLEVBS0dELEtBTEgsQ0FLUyxNQUxULEVBS2lCLE1BTGpCLEVBTUdBLEtBTkgsQ0FNUyxXQU5ULEVBTXNCLE1BTnRCO0FBUUFhLE1BQUksQ0FBQzlDLE1BQUwsQ0FBWSxNQUFaLEVBQ0dDLElBREgsQ0FDUSxPQURSLEVBQ2lCLFFBRGpCLEVBRUdBLElBRkgsQ0FFUSxHQUZSLEVBRWFDLEtBQUssR0FBRzJDLE1BQU0sR0FBRyxDQUY5QixFQUdHNUMsSUFISCxDQUdRLEdBSFIsRUFHYUUsTUFBTSxHQUFHMEMsTUFBVCxHQUFrQixFQUgvQixFQUlHNUMsSUFKSCxDQUlRLGFBSlIsRUFJdUIsT0FKdkIsRUFLR2lDLElBTEgsQ0FLUSw4QkFMUixFQU1HRCxLQU5ILENBTVMsTUFOVCxFQU1pQixNQU5qQjtBQVFBYSxNQUFJLENBQUM5QyxNQUFMLEdBN0w0QixDQThMNUI7QUFFRCxDQWhNTSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBzdGF0cyBmcm9tICcuLi9kYXRhL3N0YXRzLmpzb24nO1xuXG5leHBvcnQgY29uc3QgYnViYmxlX2NoYXJ0ID0gKCkgPT4ge1xuICBsZXQgc3ZnID0gZDMuc2VsZWN0KCcucHRzJykuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCdjbGFzcycsICdidWJibGVfc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCAxMDAwKVxuICAgIC5hdHRyKCdoZWlnaHQnLCA2NDApXG4gICAgLy8gLmF0dHIoJ3N0eWxlJywgJ2JvcmRlcjogdGhpbiB3aGl0ZSBzb2xpZCcpXG4gICAgLy8gLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJylcbiAgbGV0IHdpZHRoID0gMTAwMDtcbiAgbGV0IGhlaWdodCA9IDY0MDtcblxuICBsZXQgcGFjayA9IGQzLnBhY2soKS5zaXplKFsxMDAwLCA2NDBdKS5wYWRkaW5nKDMpO1xuICBsZXQgZGF0YSA9IHN0YXRzLnNvcnQoKGEsYikgPT4gYlsnMjInXSAtIGFbJzIyJ10pLnNsaWNlKDAsIDMwKTtcbiAgbGV0IGhpZXJhcmNoeTEgPSBkMy5oaWVyYXJjaHkoeyBjaGlsZHJlbjogZGF0YSB9KS5zdW0oZCA9PiBkWycyMiddKTtcblxuICBjb25zdCByb290ID0gcGFjayhoaWVyYXJjaHkxKTtcblxuICBjb25zdCBsZWFmID0gc3ZnLnNlbGVjdEFsbChcImdcIilcbiAgICAuZGF0YShyb290LmxlYXZlcygpKVxuICAgIC5qb2luKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSg1MDAsMzYwKWApXG4gICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkKSB7IHJldHVybiAndHJhbnNsYXRlKCcgKyBkLnggKyAnLCcgKyBkLnkgKyAnKSc7IH0pXG4gICAgICAvLyBzdmcuc2VsZWN0QWxsKCdnJylcbiAgICAgIC8vICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLGkpID0+IHtcbiAgICAgIC8vICAgICBsZXQgeCA9IDA7XG4gICAgICAvLyAgICAgbGV0IHkgPSAwO1xuICAgICAgLy8gICAgIGlmIChpIDwgNiApIHtcbiAgICAgIC8vICAgICAgIHggPSAoaSU2KSAqIDE0MCArIDE0MDtcbiAgICAgIC8vICAgICAgIHkgPSAxMjAgKiBNYXRoLmZsb29yKGkgLyA2KSArIDExNTtcbiAgICAgIC8vICAgICB9IGVsc2UgaWYgKGkgPCAxMikge1xuICAgICAgLy8gICAgICAgeCA9IChpICUgNikgKiAxMjMgKyAxOTA7XG4gICAgICAvLyAgICAgICB5ID0gMTE1ICogTWF0aC5mbG9vcihpIC8gNikgKyAxMTU7XG4gICAgICAvLyAgICAgfSBlbHNlIGlmIChpIDwgMTgpIHtcbiAgICAgIC8vICAgICAgIHggPSAoaSAlIDYpICogMTE1ICsgMjEwO1xuICAgICAgLy8gICAgICAgeSA9IDExMCAqIE1hdGguZmxvb3IoaSAvIDYpICsgMTE1O1xuICAgICAgLy8gICAgIH0gZWxzZSBpZiAoaSA8IDI0KSB7XG4gICAgICAvLyAgICAgICB4ID0gKGkgJSA2KSAqIDEwNSArIDI0MDtcbiAgICAgIC8vICAgICAgIHkgPSAxMDUgKiBNYXRoLmZsb29yKGkgLyA2KSArIDExNTtcbiAgICAgIC8vICAgICB9IGVsc2UgaWYgKGkgPCAzMCkge1xuICAgICAgLy8gICAgICAgeCA9IChpICUgNikgKiA5NSArIDI2MDtcbiAgICAgIC8vICAgICAgIHkgPSAxMDAgKiBNYXRoLmZsb29yKGkgLyA2KSArIDExNTtcbiAgICAgIC8vICAgICB9XG5cbiAgICAgIC8vICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBbeCx5XSArIFwiKVwiXG4gICAgICAvLyAgIH0pXG4gXG4gICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVhdmVzJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH0pXG5cbiAgY29uc3QgY2lyY2xlcyA9IGxlYWYuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ3N0YXQtY2lyY2xlcycpXG4gICAgLmF0dHIoXCJyXCIsIGQgPT4ge1xuICAgICAgaWYgKGQuZGF0YVsnMjInXSA+IDI5KSB7XG4gICAgICAgIHJldHVybiBkLmRhdGFbJzIyJ10gKyAyNVxuICAgICAgfSBlbHNlIGlmIChkLmRhdGFbJzIyJ10gPiAyNSkge1xuICAgICAgICByZXR1cm4gZC5kYXRhWycyMiddICsgMjBcbiAgICAgIH0gZWxzZSBpZiAoZC5kYXRhWycyMiddID4gMjApIHtcbiAgICAgICAgcmV0dXJuIGQuZGF0YVsnMjInXSArIDE1XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZC5kYXRhWycyMiddICsgMTVcbiAgICAgIH1cbiAgICAgIH0pXG4gICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC44NSlcbiAgICAuYXR0cihcImZpbGxcIiwgZCA9PiAnYmxhY2snKVxuICAgIC5hdHRyKCdzdHJva2UnLCBkID0+IGQuZGF0YS5jb2xvcilcbiAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgZCA9PiA0KVxuICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAocywgaSkge1xuICAgICAgLy8gaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJy5idWJibGVfc3ZnJykuc3R5bGUubGVmdCA9ICc1MDBweCcpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gICAgICAvLyB9XG4gICAgICBjb25zdCBuYW1lUmVjdCA9IGQzLnNlbGVjdChcIiNkZWV0c1wiKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RldGFpbCcpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICcxMDAlJylcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDUwKVxuICAgICAgLy8gLmF0dHIoJ3N0eWxlJywgJ2JvcmRlci10b3A6IHRoaW4gIzYxNjE2MSBzb2xpZCcpXG5cbiAgICAgIGNvbnN0IHN0YXRSZWN0ID0gZDMuc2VsZWN0KFwiI2RlZXRzXCIpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZGV0YWlsMicpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICcxMDAlJylcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDUwKVxuICAgICAgLy8gLmF0dHIoJ3N0eWxlJywgJ2JvcmRlcjogdGhpbiAjNjE2MTYxIHNvbGlkJylcbiAgICAgIGNvbnN0IHN0YXRSZWN0MiA9IGQzLnNlbGVjdChcIiNkZWV0c1wiKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RldGFpbDMnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAnMTAwJScpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCA1MClcbiAgICAgIC8vIC5hdHRyKCdzdHlsZScsICdib3JkZXI6IHRoaW4gIzYxNjE2MSBzb2xpZCcpXG5cbiAgICAgIG5hbWVSZWN0XG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAncGxheWVyX2RldGFpbHMnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcyOHB4JylcbiAgICAgICAgLnRleHQoZCA9PiBkYXRhW2ldWycyJ10pXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCBkID0+IGRhdGFbaV1bJ2NvbG9yJ10pXG4gICAgICBuYW1lUmVjdFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3BsYXllcl9kZXRhaWxzMicpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE4cHgnKVxuICAgICAgICAudGV4dChkID0+ICdUZWFtOiAnICsgZGF0YVtpXVsnMyddKVxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgZCA9PiBkYXRhW2ldWydjb2xvciddKVxuXG4gICAgICBzdGF0UmVjdFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3BsYXllcl9kZXRhaWxzMycpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE4cHgnKVxuICAgICAgICAvLyAudGV4dCgnR1AgIE1JTiAgRkdNICBGR0EgIEZHUENUICBGRzNNICBGRzNBICBGRzNQQ1QgIEZUQSAgRlRQQ1QgIE9SRUIgIERSRUIgIFJFQiAgQVNUICBTVEwgIEJMSyAgVE8gIFBUUycpXG4gICAgICAgIC50ZXh0KGQgPT4gJ1B0czogICcgKyBkYXRhW2ldWycyMiddICsgJyAgIHwgICAnICsgJ1JlYjogICcgKyBkYXRhW2ldWycxNyddICsgJyAgIHwgICAnICsgJ0FzdDogICcgKyBkYXRhW2ldWycxOCddICsgJyAgIHwgICAnICsgJ1N0bDogICcgKyBkYXRhW2ldWycxOSddICsgJyAgIHwgICAnICsgJ0JsazogICcgKyBkYXRhW2ldWycyMCddICsgJyAgIHwgICAnICsgJ1RPVjogICcgKyBkYXRhW2ldWycyMSddICsgJyAgIHwgICAnICsgJ0dQOiAgJyArIGRhdGFbaV1bJzQnXSArICcgICB8ICAgJyArICdNaW46ICAnICsgZGF0YVtpXVsnNSddKVxuXG4gICAgICBzdGF0UmVjdDJcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdwbGF5ZXJfZGV0YWlsczQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxN3B4JylcbiAgICAgICAgLy8gLnRleHQoZCA9PiBkYXRhW2ldWyc0J10gKyAnICAgJyArIGRhdGFbaV1bJzUnXSArICcgICAgJyArIGRhdGFbaV1bJzYnXSArICcgICAgICAnICsgZGF0YVtpXVsnNyddICsgJyAgICAnICsgZGF0YVtpXVsnOCddICsgJyAgICAnICsgZGF0YVtpXVsnOSddICsgJyAgICAnICsgZGF0YVtpXVsnMTAnXSArICcgJyArIGRhdGFbaV1bJzExJ10gKyAnICcgKyBkYXRhW2ldWycxMiddICsgJyAnICsgZGF0YVtpXVsnMTMnXSArICcgJyArIGRhdGFbaV1bJzE0J10gKyAnICcgKyBkYXRhW2ldWycxNSddICsgJyAnICsgZGF0YVtpXVsnMTYnXSArICcgJyArIGRhdGFbaV1bJzE3J10gKyAnICcgKyBkYXRhW2ldWycxOCddICsgJyAnICsgZGF0YVtpXVsnMTknXSArICcgJyArIGRhdGFbaV1bJzIwJ10gKyAnICcgKyBkYXRhW2ldWycyMSddICsgJyAnICsgZGF0YVtpXVsnMjInXSlcbiAgICAgICAgLnRleHQoZCA9PiAnQWR2YW5jZWQ6ICAgIEVmZl9SYW5rOiAgJyArIGRhdGFbaV1bJzEnXSArICcgICAgfCAgICAnICsgJ0VmZjogICcgKyBkYXRhW2ldWycyMyddICsgJyAgICB8ICAgICcgKyAnRmdfUGN0OiAgJyArIGRhdGFbaV1bJzgnXSArICcgICAgfCAgICAnICsgJ0ZnM19QY3Q6ICAnICsgZGF0YVtpXVsnMTEnXSArICcgICAgfCAgICAnICsgJ0Z0X1BjdDogICcgKyBkYXRhW2ldWycxNCddKVxuXG4gICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMTAwKTtcbiAgICB9KTtcbiAgICBcbiAgbGVhZi5hcHBlbmQoXCJ0ZXh0XCIpXG4gIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgLy8gLnN0eWxlKCdmb250LXNpemUnLCAnMjVweCcpXG4gIC5zdHlsZSgnZm9udC1zaXplJywgZCA9PiBkLnIgLyAxLjUpXG4gIC50ZXh0KGQgPT4gZC5kYXRhWycyMiddKVxuICAuYXR0cignZHknLCAnMC4yNWVtJylcblxuICBsZWFmLmFwcGVuZChcInRleHRcIilcbiAgLmF0dHIoJ2R5JywgJzEuN2VtJylcbiAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGQgPT4gZC5yIC8gMylcbiAgLnRleHQoZCA9PiBkLmRhdGFbJzInXS5zcGxpdCgnICcpLnNsaWNlKDEpKVxuICBsZWFmLmFwcGVuZChcInRleHRcIilcbiAgLmF0dHIoJ2R5JywgJy0xLjllbScpXG4gIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgLnN0eWxlKCdmb250LXNpemUnLCBkID0+IGQuciAvIDMuOSlcbiAgLnRleHQoZCA9PiBkLmRhdGFbJzInXS5zcGxpdCgnICcpLnNsaWNlKDAsMSkpXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIGNvbnN0IGxlYWYyID0gc3ZnLnNlbGVjdEFsbChcImhcIilcbiAgICAuZGF0YShyb290LmxlYXZlcygpKVxuICAgIC5qb2luKFwiaFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSgyNTAsMzAwKWApXG5cbiAgcmV0dXJuIHN2Zy5ub2RlKCk7XG59XG5cbiIsImltcG9ydCB7IGJ1YmJsZV9jaGFydCB9IGZyb20gXCIuL2J1YmJsZV9jaGFydFwiO1xuaW1wb3J0IHsgb3V0ZXJfY2lyY2xlIH0gZnJvbSBcIi4vb3V0ZXJfY2lyY2xlXCI7XG5pbXBvcnQgeyBzdGF0X2JhciB9IGZyb20gXCIuL3N0YXRfYmFyXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgYnViYmxlX2NoYXJ0KCk7XG4gIHN0YXRfYmFyKCk7XG4gIG91dGVyX2NpcmNsZSgpO1xuXG59KTsiLCJleHBvcnQgY29uc3Qgb3V0ZXJfY2lyY2xlID0gKCkgPT4ge1xuICBcbn0iLCJpbXBvcnQgc3RhdHMgZnJvbSBcIi4uL2RhdGEvc3RhdHMuanNvblwiO1xuXG5leHBvcnQgY29uc3Qgc3RhdF9iYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1hcmdpbiA9IDExMDtcbiAgY29uc3QgaGVpZ2h0ID0gODAwO1xuICBjb25zdCB3aWR0aCA9IDgwMDtcblxuICBsZXQgc3ZnMiA9IGQzLnNlbGVjdChcIiNzdGF0X2JhclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIDEwMDApXG4gICAgLy8gLmF0dHIoXCJtaW4taGVpZ2h0XCIsIGhlaWdodClcbiAgICAvLyAuYXR0cihcInN0eWxlXCIsIFwiYm9yZGVyOiB0aGluIHdoaXRlIHNvbGlkXCIpO1xuXG4gIGNvbnN0IHRvcDI1cHRzID0gc3RhdHMuc29ydCgoYSwgYikgPT4gYltcIjIyXCJdIC0gYVtcIjIyXCJdKS5zbGljZSgwLCBzdGF0cy5sZW5ndGggLyAyIC0gMTApO1xuICBcbiAgY29uc3QgclRvcFB0cyA9IHRvcDI1cHRzLnJldmVyc2UoKTtcbiAgY29uc3QgY2hhcnQgPSBzdmcyLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW59LCAke21hcmdpbn0pYClcblxuICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUJhbmQoKVxuICAgIC5yYW5nZShbNjAwLCAwXSlcbiAgICAuZG9tYWluKHJUb3BQdHMubWFwKHMgPT4gc1snMiddLnNwbGl0KCcgJylbMV0pKVxuICAgIC5wYWRkaW5nKDAuNCk7XG4gICAgXG4gIGxldCB5QXhpcyA9IGNoYXJ0LmFwcGVuZCgnZycpXG4gICAgLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKSk7XG5cbiAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgIC5kb21haW4oWzE2LCAzNl0pXG5cbiAgbGV0IHhBeGlzID0gY2hhcnQuYXBwZW5kKCdnJylcbiAgICAvLyAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCA3MDApYClcbiAgICAuY2FsbChkMy5heGlzVG9wKHhTY2FsZSkudGlja3MoNykpXG5cbiAgY29uc3QgYmFyR3JvdXBzID0gY2hhcnQuc2VsZWN0QWxsKClcbiAgICAuZGF0YShyVG9wUHRzKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZCgnZycpXG5cbiAgeEF4aXMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxM3B4JylcbiAgeUF4aXMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxM3B4JylcbiAgICAvLyAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCAnaXRhbGljJylcbiAgXG4gIGJhckdyb3Vwc1xuICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgIC5zdHlsZShcInN0cm9rZVwiLCBkID0+IGQuY29sb3IpXG4gICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC4zMClcbiAgICAuYXR0cihcImZpbGxcIiwgZCA9PiBkLmNvbG9yKVxuICAgIC5hdHRyKFwieFwiLCBkID0+IHhTY2FsZShkW1wiMjJcIl0pKVxuICAgIC5hdHRyKFwieVwiLCBkID0+IHlTY2FsZShkW1wiMlwiXS5zcGxpdChcIiBcIilbMV0pKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgZCA9PiAwKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHlTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAuYXR0cihcInhcIiwgKGFjdHVhbCwgaSwgclRvcFB0cykgPT4geVNjYWxlKHJUb3BQdHNbaV1bXCIyMlwiXSkpXG4gIFxuICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24ocywgaSkge1xuICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC44NSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgeVNjYWxlLmJhbmR3aWR0aCgpICsgNSk7XG5cbiAgICAgIGNvbnN0IHggPSB4U2NhbGUoclRvcFB0c1tpXVtcIjIyXCJdKTtcblxuICAgICAgY29uc3QgbGluZSA9IGNoYXJ0XG4gICAgICAgIC5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgXCJsaW1pdFwiKVxuICAgICAgICAuYXR0cihcIngxXCIsIHgpXG4gICAgICAgIC5hdHRyKFwieTFcIiwgMClcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCB4KVxuICAgICAgICAuYXR0cihcInkyXCIsIGhlaWdodClcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJvcmFuZ2VcIik7XG4gICAgfSlcblxuICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAwLjI1KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCB5U2NhbGUuYmFuZHdpZHRoKCkpO1xuXG4gICAgICBjaGFydC5zZWxlY3RBbGwoXCIjbGltaXRcIikucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKHMsIGkpIHtcbiAgICAgIGNvbnN0IG5hbWVSZWN0ID0gZDMuc2VsZWN0KFwiI2RldGFpbHNcIilcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdkZXRhaWwnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAnMTAwJScpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCA1MClcbiAgICAgICAgLy8gLmF0dHIoJ3N0eWxlJywgJ2JvcmRlci10b3A6IHRoaW4gIzYxNjE2MSBzb2xpZCcpXG5cbiAgICAgIGNvbnN0IHN0YXRSZWN0ID0gZDMuc2VsZWN0KFwiI2RldGFpbHNcIilcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdkZXRhaWwyJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgJzEwMCUnKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgNTApXG4gICAgICAgIC8vIC5hdHRyKCdzdHlsZScsICdib3JkZXI6IHRoaW4gIzYxNjE2MSBzb2xpZCcpXG4gICAgICBjb25zdCBzdGF0UmVjdDIgPSBkMy5zZWxlY3QoXCIjZGV0YWlsc1wiKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RldGFpbDMnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAnMTAwJScpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCA1MClcbiAgICAgICAgLy8gLmF0dHIoJ3N0eWxlJywgJ2JvcmRlcjogdGhpbiAjNjE2MTYxIHNvbGlkJylcbiAgICAgIFxuICAgICAgbmFtZVJlY3RcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdwbGF5ZXJfZGV0YWlscycpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzI4cHgnKVxuICAgICAgICAudGV4dChkID0+IHJUb3BQdHNbaV1bJzInXSlcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsIGQgPT4gclRvcFB0c1tpXVsnY29sb3InXSlcbiAgICAgIG5hbWVSZWN0XG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAncGxheWVyX2RldGFpbHMyJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMThweCcpXG4gICAgICAgIC50ZXh0KGQgPT4gJ1RlYW06ICcgKyByVG9wUHRzW2ldWyczJ10pXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCBkID0+IHJUb3BQdHNbaV1bJ2NvbG9yJ10pXG5cbiAgICAgIHN0YXRSZWN0XG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAncGxheWVyX2RldGFpbHMzJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMThweCcpXG4gICAgICAgIC8vIC50ZXh0KCdHUCAgTUlOICBGR00gIEZHQSAgRkdQQ1QgIEZHM00gIEZHM0EgIEZHM1BDVCAgRlRBICBGVFBDVCAgT1JFQiAgRFJFQiAgUkVCICBBU1QgIFNUTCAgQkxLICBUTyAgUFRTJylcbiAgICAgICAgLnRleHQoZCA9PiAnUHRzOiAgJyArIHJUb3BQdHNbaV1bJzIyJ10gKyAnICAgfCAgICcgKyAnUmViOiAgJyArIHJUb3BQdHNbaV1bJzE3J10gKyAnICAgfCAgICcgKyAnQXN0OiAgJyArIHJUb3BQdHNbaV1bJzE4J10gKyAnICAgfCAgICcgKyAnU3RsOiAgJyArIHJUb3BQdHNbaV1bJzE5J10gKyAnICAgfCAgICcgKyAnQmxrOiAgJyArIHJUb3BQdHNbaV1bJzIwJ10gKyAnICAgfCAgICcgKyAnVE9WOiAgJyArIHJUb3BQdHNbaV1bJzIxJ10gKyAnICAgfCAgICcgKyAnR1A6ICAnICsgclRvcFB0c1tpXVsnNCddICsgJyAgIHwgICAnICsgJ01pbjogICcgKyByVG9wUHRzW2ldWyc1J10pXG5cbiAgICAgIHN0YXRSZWN0MlxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3BsYXllcl9kZXRhaWxzNCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE3cHgnKVxuICAgICAgICAvLyAudGV4dChkID0+IHJUb3BQdHNbaV1bJzQnXSArICcgICAnICsgclRvcFB0c1tpXVsnNSddICsgJyAgICAnICsgclRvcFB0c1tpXVsnNiddICsgJyAgICAgICcgKyByVG9wUHRzW2ldWyc3J10gKyAnICAgICcgKyByVG9wUHRzW2ldWyc4J10gKyAnICAgICcgKyByVG9wUHRzW2ldWyc5J10gKyAnICAgICcgKyByVG9wUHRzW2ldWycxMCddICsgJyAnICsgclRvcFB0c1tpXVsnMTEnXSArICcgJyArIHJUb3BQdHNbaV1bJzEyJ10gKyAnICcgKyByVG9wUHRzW2ldWycxMyddICsgJyAnICsgclRvcFB0c1tpXVsnMTQnXSArICcgJyArIHJUb3BQdHNbaV1bJzE1J10gKyAnICcgKyByVG9wUHRzW2ldWycxNiddICsgJyAnICsgclRvcFB0c1tpXVsnMTcnXSArICcgJyArIHJUb3BQdHNbaV1bJzE4J10gKyAnICcgKyByVG9wUHRzW2ldWycxOSddICsgJyAnICsgclRvcFB0c1tpXVsnMjAnXSArICcgJyArIHJUb3BQdHNbaV1bJzIxJ10gKyAnICcgKyByVG9wUHRzW2ldWycyMiddKVxuICAgICAgICAudGV4dChkID0+ICdBZHZhbmNlZDogICAgRWZmX1Jhbms6ICAnICsgclRvcFB0c1tpXVsnMSddICsgJyAgICB8ICAgICcgKyAnRWZmOiAgJyArIHJUb3BQdHNbaV1bJzIzJ10gKyAnICAgIHwgICAgJyArICdGZ19QY3Q6ICAnICsgclRvcFB0c1tpXVsnOCddICsgJyAgICB8ICAgICcgKyAnRmczX1BjdDogICcgKyByVG9wUHRzW2ldWycxMSddICsgJyAgICB8ICAgICcgKyAnRnRfUGN0OiAgJyArIHJUb3BQdHNbaV1bJzE0J10pXG4gICAgICBcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAzNTApO1xuICAgIH0pO1xuXG4gIHN2ZzIuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDgwMClcbiAgICAuYXR0cihcInhcIiwgZCA9PiB4U2NhbGUoZFtcIjIyXCJdKSlcbiAgICAuYXR0cihcIndpZHRoXCIsIGQgPT4geFNjYWxlKGRbXCIyMlwiXSkpXG4gICAgLmF0dHIoXCJ4XCIsIChhY3R1YWwsIGksIHJUb3BQdHMpID0+IHlTY2FsZShyVG9wUHRzW2ldW1wiMjJcIl0pKVxuXG4gIGJhckdyb3Vwc1xuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInZhbHVlXCIpXG4gICAgLmF0dHIoXCJ4XCIsIGQgPT4geFNjYWxlKGRbXCIyMlwiXSkgKyAyNClcbiAgICAuYXR0cihcInlcIiwgZCA9PiB5U2NhbGUoZFtcIjJcIl0uc3BsaXQoXCIgXCIpWzFdKSArIDQgKyB5U2NhbGUuYmFuZHdpZHRoKCkgLyAyKVxuICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChkID0+IGRbXCIyMlwiXSlcbiAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICBcbiAgYmFyR3JvdXBzXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwidmFsdWVcIilcbiAgICAuYXR0cihcInhcIiwgZCA9PiB4U2NhbGUoZFtcIjIyXCJdKSAvIDIpXG4gICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKGRbXCIyXCJdLnNwbGl0KFwiIFwiKVsxXSkgKyA1ICsgeVNjYWxlLmJhbmR3aWR0aCgpIC8gMilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCAnaXRhbGljJylcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAudGV4dChkID0+IGRbXCIyXCJdKTtcbiAgICBcblxuICBzdmcyLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoJ3gnLCB3aWR0aCAvIDIgKyBtYXJnaW4pXG4gICAgLmF0dHIoJ3knLCA1MClcbiAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAudGV4dCgnVG9wIDE1IFNjb3JlcnMgaW4gdGhlIExlYWd1ZScpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMzBweCcpXG4gICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICBcblxuICBzdmcyLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoJ3gnLCB3aWR0aCArIDMwKVxuICAgIC5hdHRyKCd5JywgNzUpXG4gICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAudGV4dCgnUG9pbnRzIFBlciBHYW1lJylcbiAgICAuc3R5bGUoJ2ZpbGwnLCAncGluaycpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTNweCcpXG5cbiAgc3ZnMi5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCdjbGFzcycsICdzb3VyY2UnKVxuICAgIC5hdHRyKCd4Jywgd2lkdGggLSBtYXJnaW4gLyAyKVxuICAgIC5hdHRyKCd5JywgaGVpZ2h0IC0gbWFyZ2luICsgMjApXG4gICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAudGV4dCgnU291cmNlOiBOQkEgU3RhdHMsIDIwMTktMjAyMCcpXG4gICAgLnN0eWxlKCdmaWxsJywgJ3BpbmsnKVxuXG4gIHN2ZzIuYXBwZW5kKClcbiAgLy8gZGV0YWlsc1N2Zy5hcHBlbmQoKVxuICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=