"use strict";

var song = {
	name: "Kilometro",
	artist: "Sarah G",
	year: 2016,
	album: "Great Unknown"
};

var markup = "\n\t<div class=\"song\">\n\t\t<p>\n\t\t\t" + song.name + " - " + song.artist + " - " + song.year + "\n\t\t\t" + (song.album ? "(From Album: " + song.album + ")" : "No album") + "\n\t\t</p>\n\t</div>\n";

console.log(markup);