'use strict'
/*
* js 字符串和python的字符春有点像，
* 但是多行字符串和格式化输出不一样
*/

var RESULT = '';

function print(newOutput) {
	RESULT += newOutput + '\n';
}

function alertAll() {
	alert(RESULT);
}

//------------------实例----------------------//
function someExample() {
	var str1 = '我吃柠檬';
	print(str1);
	var str2 = "我爱学习";
	print(str2);
	var str3 = "I'm not a good man";
	print(str3);
	var str4 = '"双引号"可以直接在单引号表示的字符串里卖弄';
	print(str4);
}

//------------------------多行字符串-----------------------------//
function multiLinesString() {
	print(`人生苦短
py是岸
珍爱生命
远离c++`);
}

//------------------------------ 模板字符串--------------------------------//
function templateString() {
	var girl = '美女';
	var state = '很好';
	// 类似python的format函数
	var words = `今天天气${state}
${girl},星期日你有空吗?`;
print(words);
}

//----------------------------------字符串操作-------------------------------------//
function stringOPs() {
	// 获取长度
	var str0 = 'abcdefg杯';
	print(str0.length);
	// 测试下对字符串赋值(字符串是常量，早期版本js运行效率低有一部分的锅要js字符串去背)
	print('TI'[0]) ;// 貌似处理c那种低级语言标准库的字符串都可以索引操作
	var str1 = 'linux';
	// str1[3] = 'a'; // strict模式不能通过
	print(str1);
	// 一些函数
	print('abCdEfG'.toLowerCase());
	print('hjkl'.toUpperCase());
	print('Google,MS,IBM'.split(',')[0]);
	print('*******ytj********'.indexOf('ytj')); // 可以用于模糊搜索
	// 测试下数组是不是也有indexOf
	var arr = ['Gnome', 'KDE'];
    print(arr.indexOf('KDE')); // 猜测String 是Array子类，或者都继承自Iterator?
    var sbstr = 'substring';
    print(sbstr.substring(3));
    print(sbstr);

}


function main() {
	// someExample();
	// multiLinesString();
	// templateString();
	stringOPs();
	alertAll();

}

main();