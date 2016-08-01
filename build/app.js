/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	//require('../html-template/index.html');
	function checking() {
		var boolean = '';
		var u = navigator.userAgent;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		var iosUrl = "https://itunes.apple.com/cn/app/fan-ti-tfboys-dai-yan-zuo/id905863254?mt=8";
		var androidUrl = "http://download.afanti100.com/apk_downloads/huodong/cn_lejent_afanti_huodong.apk";
		//var myappUrl   = "http://down.myapp.com/myapp/smart_ajax/com.tencent.android.qqdownloader/1000047_53687285_1469760959544.apk?fsname=YYB.998886.12e7818719c44d4cc51fb32ab6aa8cf9.myapp_touch.apk"
		if (isIOS) {
			return iosUrl;
		} else {
			return androidUrl;
		}
	}
	function handleClick() {
		sendMsg();
	}

	var entry = document.getElementById('entry');
	var resource = checking();
	entry.href = resource;
	// function sendMsg(){
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.open('GET','http://localhost:8080');
	// 	xhr.onreadystatechange = function(){
	// 　　　　if ( xhr.readyState == 4 && xhr.status == 200 ) {
	// 　　　　　　console.log( '4',xhr.responseText );
	// 　　　　}
	// 	}
	// 	xhr.timeout = 5000;
	// 　xhr.ontimeout = function(event){
	// 　　　console.log('统计请求超时');
	// 		 xhr.send();
	// 　}
	// 	xhr.send();
	// }
	//entry.addEventListener('click',handleClick,false)

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	!function (a, b) {
		function c() {
			var b = f.getBoundingClientRect().width;
			b / i > 540 && (b = 540 * i);
			var c = b / 10;
			f.style.fontSize = c + "px", k.rem = a.rem = c;
		}

		var d,
		    e = a.document,
		    f = e.documentElement,
		    g = e.querySelector('meta[name="viewport"]'),
		    h = e.querySelector('meta[name="flexible"]'),
		    i = 0,
		    j = 0,
		    k = b.flexible || (b.flexible = {});
		if (g) {
			console.warn("将根据已有的meta标签来设置缩放比例");
			var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
			l && (j = parseFloat(l[1]), i = parseInt(1 / j));
		} else if (h) {
			var m = h.getAttribute("content");
			if (m) {
				var n = m.match(/initial\-dpr=([\d\.]+)/),
				    o = m.match(/maximum\-dpr=([\d\.]+)/);
				n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)));
			}
		}
		if (!i && !j) {
			var p = a.navigator.userAgent,
			    q = (!!p.match(/android/gi), !!p.match(/iphone/gi)),
			    r = q && !!p.match(/OS 9_3/),
			    s = a.devicePixelRatio;
			i = q && !r ? s >= 3 && (!i || i >= 3) ? 3 : s >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i;
		}
		if (f.setAttribute("data-dpr", i), !g) if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);else {
			var t = e.createElement("div");
			t.appendChild(g), e.write(t.innerHTML);
		}
		a.addEventListener("resize", function () {
			clearTimeout(d), d = setTimeout(c, 300);
		}, !1), a.addEventListener("pageshow", function (a) {
			a.persisted && (clearTimeout(d), d = setTimeout(c, 300));
		}, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
			e.body.style.fontSize = 12 * i + "px";
		}, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
			var b = parseFloat(a) * this.rem;
			return "string" == typeof a && a.match(/rem$/) && (b += "px"), b;
		}, k.px2rem = function (a) {
			var b = parseFloat(a) / this.rem;
			return "string" == typeof a && a.match(/px$/) && (b += "rem"), b;
		};
	}(window, window.lib || (window.lib = {}));

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);