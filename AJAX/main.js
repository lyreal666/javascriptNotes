'use strict'
/*
* 
*/
var RESULT = '';

function print(newOutput) {
	RESULT += newOutput + '\n';
}

function alertAll() {
	alert(RESULT);
	RESULT = '';
}

function ajaxSimple() {
	var resultDiv = document.querySelect('#fileInfo');
	var success = function (responseText) {
		resultDiv.innerHTML = responseText;
	};
	var failed = function (ErrorCode) {
		resultDiv,innerHTML = "ErrorCode: " + ErrorCode;
	};

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject('Microsoft XMLHTTP');
	}

	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			// 请求完成
			if (request.status === 200) {
				// 请求成功
				return success(request.responseText);
			} else {
				return failed(request.status);
			}
		} else {
			// 请求继续
		}
	}
	request.open('GET', url);
	request.send();
}

// 由于安全限制，js不允许跨域请求，不包括css, js 别人的东西随意让你请求?
// 实现跨域请求的俩种方式
// 方式1： jsnop---利用js请求吾限制
// 方式2: CORS--cross origon resource sharing需要H5支持
// cors如果是get,put,普通post只需要浏览器请求是检查对方响应头中接受请求控制域是否包含location站点
// 如果是json post或其他请求浏览器会先发送一个options请求,再检查响应头是否包含该请求方法和接受请求控制域

function main() {
	$.get('http://jwc.jxnu.edu.cn/').done((data) => {
		print(data.slice(0,20));
	}).fail((xhr, status) => {
		print('error:' + xhr.status + 'retcode:' + status);
	}).always(() => {
		print('end.....');
	})
	alertAll();

}

main();