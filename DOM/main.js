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

var getDOMNode = function () {
	// 3种基本方式
	var table = document.getElementById('course_table'); // 获取单个节点
	table = document.getElementsByTagName('table')[0]; // 获取一组
	table = document.getElementsByClassName('table_course')[0];

	// 操作孩子节点
	var children = table.children;
	var fChild = table.firstElementChild;
	var lChild = table.lastElementChild;

	// 使用CSS选择器
	var table = document.querySelector('#course_table');
	var tables = document.querySelectorAll('.trs');
	print(tables.length);
	var arr = [1, 2, 3];
	print(Array.isArray(arr));
	print(Array.isArray(tables)); // 不是数组，类似数组

	var ob = {
		name: 'ly',
		age: 20
	};
	print(ob.length); // undefine
};

//-----------------update---------------------//
var update = function () {
	var table = document.querySelector('.table_course');
	alert(table.innerHTML);
	alert(table.outerHTML);
	var div = document.querySelector('#div-id')
	alert(div.innerText);// 浏览器上看到啥样子就啥样子
	alert(div.textContent); // 源代码是啥样子就啥样子，不会将多个空格转换成一个空格，不会异常开头元素
	var div1 = div.querySelector('#div-id1');
	div1.innerText = `床前明月光
疑是地上霜，
举头望明月，
低头思故乡`; // 浏览器就显示这样，缩进可能有点不一样
	var div2 = div.querySelector('.div-class1');
	div2.style.color = 'red'; // 修改css样式
	div2.textContent = `问君能有几多愁?
恰是一江春水向东流.......`; // 效果就是将它插到源代码中
};

//--------------insert--------------------//
var insert = function () {
	var ul = document.querySelector('.ul-class');

	// 使用已有元素
	print('尾部插入原本在头部的元素!!!')
	var firstChild = ul.firstElementChild;
	ul.append(firstChild); // 使用原有元素插入会从原有位置删除那个元素

	// 创建新元素再插入
	print('在头部插入新建的元素');
	var January = document.createElement('li');
	January.id = 'janu';
	January.color = 'red';
	January.innerText = 'janu';
	ul.insertBefore(January, ul.firstElementChild);

};

//------------------delete-------------------------//
var _delete = function () {
	// 先找到父亲节点
	// removeChild
	// 注意js是一门到处是引用的语言，删除一个孩子时，其childern引用的孩子减1
	var ul = document.querySelector('.ul-class');
	ul.removeChild(ul.children[0]);
	ul.removeChild(ul.children[1]); // 删除的是最开始的第3个
	// 如果想从头删到尾应该每次删除[0]
};

function main() {
	// getDOMNode();
	// update();
	// insert();
	var trs = $('tr');
	
	// _delete();

	alertAll();

}

main();