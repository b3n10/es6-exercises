"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var p = Array.from(document.getElementsByTagName("p"), function (name) {
	return name.textContent;
});

function addNum() {
	return Array.from(arguments).reduce(function (p, n) {
		return p + n;
	});
}

var names = Array.of("ben", "ethan", "jiroh", "papa");

exports.p = p;
exports.addNum = addNum;
exports.names = names;