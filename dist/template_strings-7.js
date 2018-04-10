"use strict";

var _templateObject = _taggedTemplateLiteral(["My name is ", " ", " and intersted to join ", ", ", " and ", ""], ["My name is ", " ", " and intersted to join ", ", ", " and ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var dict = {
	TSM: "Tech and Stage Management",
	CT: "Connect Team",
	UT: "Ushering Team"
};

var fname = "Ben",
    lname = "Lleve";

function addAbbrevation(strings) {
	for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		values[_key - 1] = arguments[_key];
	}

	var abvr = values.map(function (value) {
		if (dict[value]) {
			return "<abbr title=\"" + dict[value] + "\">" + value + "</abbr>";
		}
		return value;
	});

	return strings.reduce(function (sentence, string, i) {
		return "" + sentence + string + (abvr[i] || "");
	}, "");
}

var sentence = addAbbrevation(_templateObject, fname, lname, "TSM", "CT", "UT");

var app = document.querySelector(".app");
app.innerHTML = sentence;