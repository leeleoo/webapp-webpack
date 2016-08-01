//require('../html-template/index.html');
import './flexiable.js';
import './main.less';
function checking(){
	var boolean    = '';
	var u          = navigator.userAgent;
	var isAndroid  = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isIOS      = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	var iosUrl     = "https://itunes.apple.com/cn/app/fan-ti-tfboys-dai-yan-zuo/id905863254?mt=8";
	var androidUrl = "http://download.afanti100.com/apk_downloads/huodong/cn_lejent_afanti_huodong.apk";
	//var myappUrl   = "http://down.myapp.com/myapp/smart_ajax/com.tencent.android.qqdownloader/1000047_53687285_1469760959544.apk?fsname=YYB.998886.12e7818719c44d4cc51fb32ab6aa8cf9.myapp_touch.apk"
	if(isIOS){
		return iosUrl
	}else{
		return androidUrl
	}
}
function handleClick(){
	sendMsg()
}

var entry    = document.getElementById('entry');
var resource = checking()
entry.href   = resource;
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
