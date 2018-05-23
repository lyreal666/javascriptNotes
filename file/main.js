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

var fileOp = function () {
	var fileInput = document.querySelector('#inputFile');
	var preview = document.querySelector('#preview');
	var fileInfo = document.querySelector('#fileInfo');
	// HTML5以前js提供对文件操作基本没有
	fileInput.addEventListener('change', function (e) {
		preview.style.backgroundImage = '';
		if (!fileInput.value) {
			alert('没有选择文件');
		}
		var file = fileInput.files[0];
		fileInfo.innerHTML = 'filename: ' + file.name + "<br>fileSize: " + file.size + 
		"<br>fileModifile: " + file.lastModifiedDate + "<br>type: " + file.type;
		if (file.type !== 'image/jg' && file.type !== 'image/png' && file.type !== "image/gif") {
			alert('选择的不是图片!');
		}
		var reader = new FileReader();
		reader.onload = function (f) {
			var data = f.target.result;
			preview.style.backgroundImage = 'url(' + data + ')';
		}
		reader.readAsDataURL(file);
	});
	
}

function main() {
	fileOp();
	alertAll();

}

main();