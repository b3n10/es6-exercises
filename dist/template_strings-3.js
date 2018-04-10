"use strict";

var dogs = [{ name: "Globy", age: 3 }, { name: "Snoopy", age: 100 }, { name: "Garfield", age: 30 }];

var markup = "\n\t<ul class=\"dogs\">\n\t" + dogs.map(function (dog) {
	return "\n\t\t\t<li>" + dog.name + " is " + dog.age * 7 + "</li>\n\t\t\t";
}).join("") + "\n\t</ul>\n";

console.log(markup);