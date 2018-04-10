"use strict";

var course1 = "CS50";
console.log(course1, "starts with 'CS':", course1.startsWith("CS"));
var course2 = "2018-CS50";
console.log(course2, "starts with 'CS' after year:", course2.startsWith("CS", 5));

var course3 = course2 + "-en";
console.log(course3, "ends with english: ", course3.endsWith("en"));
var course4 = course3 + "-q3";
console.log(course4, "ends with english before q3: ", course4.endsWith("en", 12));

var course5 = course3;
console.log(course5, "includes CS50: ", course5.includes("CS50"));

var nissan = "Nissan";
var honda = "Honda";
var suzuki = "Suzuki";

function leftPad(str) {
	var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

	return "> " + " ".repeat(length - str.length) + str;
}

console.log(leftPad(nissan));
console.log(leftPad(honda));
console.log(leftPad(suzuki));