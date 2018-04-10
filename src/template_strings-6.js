const dog = {
	name: "Globi",
	age: 3,
	gender: "Male"
};

function highlight(strings, ...values) {
	let str = "";
	strings.forEach((string, i) => {
		str += string + `${values[i] ? `<span class="hl">${values[i]}</span>` : ""}`;
	});
	return str;
}

const sentence = highlight`The dog name is ${dog.name} and gender is ${dog.gender}`;

console.log(sentence);
