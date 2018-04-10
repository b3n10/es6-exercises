function dogLoop(array) {
	let result = "";
	for (let [index, value] of array.entries()) {
		result += `[${index}]: ${value}\n`;
	}
	return result;
}

function addUpNumbers() {
	let sum = 0;
	for (let num of arguments) {
		sum += num;
	}
	return sum;
}

export { dogLoop, addUpNumbers };
