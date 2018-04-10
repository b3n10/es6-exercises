"use strict";

var _templateObject = _taggedTemplateLiteral(["\n\thack message\n\t<img src=\"http://unsplash.it/50/50?random\" onload=\"alert('hacked%#$~');\"/>\n"], ["\n\thack message\n\t<img src=\"http://unsplash.it/50/50?random\" onload=\"alert('hacked%#$~');\"/>\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function sanitize(strings) {
	for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		values[_key - 1] = arguments[_key];
	}

	var dirty = strings.reduce(function (prev, next, i) {
		return "" + prev + next + (values[i] || "");
	}, "");
	return DOMPurify.sanitize(dirty);
}

var name = "Ben";
var about = sanitize(_templateObject);

var html = "\n\t<h2>" + name + "</h2>\n\t<p>" + about + "</p>\n";

var bio = document.querySelector(".bio");
bio.innerHTML = html;