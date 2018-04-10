"use strict";

var icecreams = {
	flavors: ["double dutch", "rocky road", "cookies n cream", "vanilla"]
};

function renderFlavors(flavors) {
	return "\n\t\t<ul>\n\t\t\t" + flavors.map(function (flavor) {
		return "<li>" + flavor + "</li>";
	}).join("") + "\n\t\t</ul>\n\t\t";
}

var markup = "\n\t<div class=\"icecreams\">\n\t\t" + renderFlavors(icecreams.flavors) + "\n\t</div>\n";

console.log(markup);