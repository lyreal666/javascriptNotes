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


function main() {
	var table = $('#course_table'); // 获取jquery对象
	// 使用get获取DOM对象
	var domTable = table.get();
	// 还可以通过DOM对象构成jquery对象来使用jqery的接口
	table = $(domTable);
	print(typeof domTable)

	// 基本选择器示例,返回的都是数组
	var ul = $('.ul-class');
	var lis = $('li');
	print(lis.length);
	print(Array.isArray(lis));
	print($.title);

	// 不存在返回[]
	var noExits = $('#12306');
	print(noExits instanceof Array);

	
	alertAll();

}

main();