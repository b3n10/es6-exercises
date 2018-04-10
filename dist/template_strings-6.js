"use strict";

var _templateObject = _taggedTemplateLiteral(["The dog name is ", " and gender is ", ""], ["The dog name is ", " and gender is ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var dog = {
	name: "Globi",
	age: 3,
	gender: "Male"
};

function highlight(strings) {
	for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		values[_key - 1] = arguments[_key];
	}

	var str = "";
	strings.forEach(function (string, i) {
		str += string + ("" + (values[i] ? "<span class=\"hl\">" + values[i] + "</span>" : ""));
	});
	return str;
}

var sentence = highlight(_templateObject, dog.name, dog.gender);

console.log(sentence);