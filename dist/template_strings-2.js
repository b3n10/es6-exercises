"use strict";

var dog = {
	name: "Globy",
	age: 3,
	city: "Angeles",
	bio: "Always like to eat."
};

var markup = "\n\t<div class=\"dog\">\n\t\t<h2>\n\t\t\t" + dog.name + "\n\t\t\t<span class=\"city\">" + dog.city + "</span>\n\t\t</h2>\n\t\t<p class=\"bio\">\n\t\t\t" + dog.bio + "\n\t\t</p>\n\t</div>\n";

console.log(markup);