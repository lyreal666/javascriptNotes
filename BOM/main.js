'use strict'
/*
* for in 循环
*/
var RESULT = '';

function print(newOutput) {
	RESULT += newOutput + '\n';
}

function alertAll() {
	alert(RESULT);
	RESULT = '';
}



function main() {
	// window
	print(`the inner width is ${window.innerWidth}`);
	print(`the inner height is ${window.innerHeight}`);
	print(`the outer width is ${window.outerWidth}`);
	print(`the outer height is ${window.outerHeight}`);

	// navigator
	print(`appName: ${navigator.appName}`);
	print(`appVersion: ${navigator.appVersion}`);
	print(`appLang: ${navigator.language}`);
	print(`appPlatform: ${navigator.platform}`);
	print(`user-Agent: ${navigator.userAgent}`);
	print(`vendor: ${navigator.vendor}`); //供应商
	print(`cpu: ${navigator.oscpu}`);
	print(`cookieEnable: ${navigator.cookieEnabled}`);
	print(`appCodeName: ${navigator.appCodeName}`);

	// 浏览器信息可以被用户修改，不一定符合真实情况
	// 不要利用后去到到信息去做兼容性
	// 应该利用不存在返回undefine
	var width = window.innerWidth || document.body.clientWidth;

	// screen
	print('screen width: ' + screen.width);
	print('screen height: ' + screen.height);
	print('screen clor depth: ' + screen.colorDepth)

	alertAll();

	// location
	print('url: ' + location.href);
	print('protocol: ' + location.protocol);
	print('hostname: ' + location.hostname);
	print('port: ' + location.port);
	print('pathName: ' + location.pathName);
	print('param: ' + location.search);
	print('hash: ' + location.hash);
 
 	alertAll();
 	// document, histor, 
 	// docunment.cookie , tittlw
 	// history.back histoy,forward

}

main();
print(`the inner width is ${window.innerWidth}`);