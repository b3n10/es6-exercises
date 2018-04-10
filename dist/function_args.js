"use strict";

function savings(budget) {
	var expense = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 89;
	var tithes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

	return budget - (expense + tithes);
}

console.log("Savings: " + savings(100, 89, 10));