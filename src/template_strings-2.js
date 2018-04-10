const dog = {
	name: "Globy",
	age: 3,
	city: "Angeles",
	bio: "Always like to eat."
};

const markup = `
	<div class="dog">
		<h2>
			${dog.name}
			<span class="city">${dog.city}</span>
		</h2>
		<p class="bio">
			${dog.bio}
		</p>
	</div>
`;

console.log(markup);
