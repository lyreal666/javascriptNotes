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

function _object() {
	var course = {
		'kch': '625300',
		'kcName': '大学物理',
		count: 4,
		'course-time': 3 // 最后一个键值对不要加,，加了有些浏览器会报错
	};
	// 取属性
	print(course.kch);-
	print(course['course-time']);
	print(course.bjhs); //访问不存在的属性
	course.kcName = '计算机英语';
	print(course.kcName);

	// 动态类型语言
	course.department = '电子物理学院'
	delete course.department
	print(course.department)

	// 判断属性是否存在
	print('kch' in course);
	print('toString' in course)
	print(course.hasOwnProperty('toString'))

}


function main() {
	_object();
	alertAll();

}

main();