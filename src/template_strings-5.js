const icecreams = {
	flavors: ["double dutch", "rocky road", "cookies n cream", "vanilla"]
};

function renderFlavors(flavors) {
	return `
		<ul>
			${flavors.map(flavor => `<li>${flavor}</li>`).join("")}
		</ul>
		`;
}

const markup = `
	<div class="icecreams">
		${renderFlavors(icecreams.flavors)}
	</div>
`;

console.log(markup);
