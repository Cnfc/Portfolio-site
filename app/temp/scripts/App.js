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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import Person from './modules/Person';
// import Person from "./modules"
// Person()

$(document).ready(function () {

	$("body, .left_side").niceScroll({
		horizrailenabled: false
	});

	$(".btn_mnu").click(function () {
		$(this).toggleClass("active");
		$(".left_side").toggleClass("active");
	});

	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: 'auto',
		gutterX: 5,
		gutterY: 5,
		onResize: function onResize() {
			wall.fitWidth();
		}
	});

	var images = wall.container.find("a");
	images.find("img").load(function () {
		wall.fitWidth();
	});

	$(".filter_label").click(function () {
		$(".filter_label").removeClass("active");
		var filter = $(this).addClass("active").data("filter");
		wall.filter(filter);
		setTimeout(function () {
			$(window).resize();
			wall.fitWidth();
		}, 400);
	});

	// Приближение и увеличение картинки
	// 	$(".gallery a").magnificPopup({
	// 		type : 'image',
	// 		gallery : {
	// 			enabled : true
	// 		},
	// 		removalDelay: 300,
	// 		mainClass: 'mfp-fade'
	// 	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", function () {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	});

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			alert("Thanks for your request!");
			setTimeout(function () {}, 1000);
		});
		return false;
	});
});
//show pictures
$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

/***/ })
/******/ ]);