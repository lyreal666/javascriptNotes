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

	alertAll();

}

main();