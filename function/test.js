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
}

// 普通形式
function abs(x) {
	if (x >= 0) {
		return x;
	} else {
		return -x;
	}
}

// lambda形式
var abs = function (x) {
	if (x >= 0) {
		return x;
	} else {
		return -x;
	}
};

function foo(a, b, c) {
	for (var i = 0; i != arguments.length; ++i) {
		print(arguments[i]);
	} 
	if  (arguments.length === 2) {
		c = a;;
		a = b;
		b = c; 
	}
}

function sum(...rest) {
	var result = 0;
	for (var e of rest) {
		result += e;
	}
	return result;
}

function returnErr() {
	return {name: 'returnErr'};
		 {name: 'returnErr'} // 应该写到上面一行去
}


function main() {
	// 参数问题
	// 可以多穿参数
	print(abs(-1, 4));
	print(foo(1, 3, 5));
	print(sum(1, 2, 3));
	print(returnErr().name);

	

}

main();
alertAll();