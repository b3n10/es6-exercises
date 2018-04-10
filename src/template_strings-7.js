const dict = {
	TSM: "Tech and Stage Management",
	CT: "Connect Team",
	UT: "Ushering Team"
};

const fname = "Ben",
	lname = "Lleve";

function addAbbrevation(strings, ...values) {
	const abvr = values.map(value => {
		if (dict[value]) {
			return `<abbr title="${dict[value]}">${value}</abbr>`;
		}
		return value;
	});

	return strings.reduce((sentence, string, i) => {
		return `${sentence}${string}${abvr[i] || ""}`;
	}, "");
}

const sentence = addAbbrevation`My name is ${fname} ${lname} and intersted to join ${"TSM"}, ${"CT"} and ${"UT"}`;

const app = document.querySelector(".app");
app.innerHTML = sentence;
