"use strict";

var _forOfLoop = require("./forOfLoop");

var dogs = ["Globi", "Snupy", "Gerard", "Box"];

console.log((0, _forOfLoop.dogLoop)(dogs));
console.log("Total:", (0, _forOfLoop.addUpNumbers)(2, 3, 2, 4));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = "Ben"[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var c = _step.value;

		console.log("" + c);
	}
	/*
 import * as forOfLoop from "./forOfLoop";
 
 const dogs = ["Globi", "Snupy", "Gerard", "Box"];
 console.log(forOfLoop.dogLoop(dogs));
 */
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}