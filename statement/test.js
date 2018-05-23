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
}


function statement() {
	print(Infinity == Infinity)
	print(Infinity - Infinity == 0);
	if (1) {
		for (var num in [1, 2, 3]) {
			print(num);
		}
	}
}

function main() {
	statement()
	alertAll();

}

main();