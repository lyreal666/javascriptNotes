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

var testPromise = () => {
	
}

function main() {

	alertAll();

}

main();