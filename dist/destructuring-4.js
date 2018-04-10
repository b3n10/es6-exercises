"use strict";

function convert_currentcy(amt) {
	var currency = {
		USD: amt * 50,
		SNG: amt * 20,
		BAR: amt * 44
	};
	return currency;
}

var _convert_currentcy = convert_currentcy(100),
    sng = _convert_currentcy.SNG,
    bar = _convert_currentcy.BAR;

console.log("Singapore Dollars: " + sng);
console.log("Bahrain Dollars: " + bar);

function tipCalc1(_ref) {
	var total = _ref.total,
	    _ref$tip = _ref.tip,
	    tip = _ref$tip === undefined ? 0.15 : _ref$tip,
	    _ref$tax = _ref.tax,
	    tax = _ref$tax === undefined ? 0.11 : _ref$tax;

	return total + total * tip + total * tax;
}

var bill1 = tipCalc1({ total: 250 });
console.log("Bill: " + bill1);

function tipCalc2(_ref2) {
	var tt = _ref2.total,
	    _ref2$tip = _ref2.tip,
	    tp = _ref2$tip === undefined ? 0.15 : _ref2$tip,
	    _ref2$tax = _ref2.tax,
	    tx = _ref2$tax === undefined ? 0.11 : _ref2$tax;

	return tt + tt * tp + tt * tx;
}

var bill2 = tipCalc2({ tip: 0.10, total: 250 });
console.log("Bill: " + bill2);

// pass default value for object
function tipCalc3() {
	var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    _ref3$total = _ref3.total,
	    tt = _ref3$total === undefined ? 100 : _ref3$total,
	    _ref3$tip = _ref3.tip,
	    tp = _ref3$tip === undefined ? 0.15 : _ref3$tip,
	    _ref3$tax = _ref3.tax,
	    tx = _ref3$tax === undefined ? 0.11 : _ref3$tax;

	return tt + tt * tp + tt * tx;
}

var bill3 = tipCalc3();
console.log("Bill: " + bill3);