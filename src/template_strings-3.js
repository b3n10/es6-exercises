const dogs = [
	{ name: "Globy", age: 3 },
	{ name: "Snoopy", age: 100 },
	{ name: "Garfield", age: 30 }
];

const markup = `
	<ul class="dogs">
	${dogs.map(dog => `
			<li>${dog.name} is ${dog.age * 7}</li>
			`)
		.join("")}
	</ul>
`;

console.log(markup);
