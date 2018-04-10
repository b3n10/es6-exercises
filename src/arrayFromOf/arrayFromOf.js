const p = Array.from(document.getElementsByTagName("p"), name => name.textContent);

function addNum() {
	return Array.from(arguments).reduce((p, n) => p + n);
}

const names = Array.of("ben", "ethan", "jiroh", "papa");

export { p, addNum, names };
