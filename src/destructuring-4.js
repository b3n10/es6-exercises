function convert_currentcy(amt) {
	const currency = {
		USD: amt * 50,
		SNG: amt * 20,
		BAR: amt * 44
	};
	return currency;
}

const { SNG:sng, BAR:bar } = convert_currentcy(100);
console.log(`Singapore Dollars: ${sng}`);
console.log(`Bahrain Dollars: ${bar}`);


function tipCalc1({total, tip = 0.15, tax = 0.11}) {
	return total + (total * tip) + (total * tax);
}

const bill1 = tipCalc1({ total: 250 });
console.log(`Bill: ${bill1}`);

function tipCalc2({total:tt, tip:tp = 0.15, tax:tx = 0.11}) {
	return tt + (tt * tp) + (tt * tx);
}

const bill2 = tipCalc2({ tip: 0.10, total: 250 });
console.log(`Bill: ${bill2}`);

// pass default value for object
function tipCalc3({total:tt = 100, tip:tp = 0.15, tax:tx = 0.11} = {}) {
	return tt + (tt * tp) + (tt * tx);
}

const bill3 = tipCalc3();
console.log(`Bill: ${bill3}`);
