const song = {
	name: "Kilometro",
	artist: "Sarah G",
	year: 2016,
	album: "Great Unknown"
};

const markup = `
	<div class="song">
		<p>
			${song.name} - ${song.artist} - ${song.year}
			${song.album ? `(From Album: ${song.album})` : "No album"}
		</p>
	</div>
`;

console.log(markup);
