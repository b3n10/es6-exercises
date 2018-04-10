"use strict";

var dog = {
	name: "Globi",
	age: 3,
	loc: "Angeles",
	food: "meat"
};

var name = dog.name,
    food = dog.food;


console.log("Dog name: " + name);
console.log("Food: " + food);

// nested data

var globi = {
	character: {
		eyes: "black",
		skin: "furry",
		nails: "short"
	}
};

var _globi$character = globi.character,
    eyes = _globi$character.eyes,
    skin = _globi$character.skin,
    nails = _globi$character.nails;

console.log(name + "'s characteristics are " + eyes + " eyes, " + skin + " skin and " + nails + " nails");

// renaming destructuring variable names
var e1 = globi.character.eyes;

console.log("I just renamed " + e1 + " eyes variable");

var settings = { width: 500, color: "black" };
// defaul values for destructured variables
// only use defaut if not set from object
var _settings$width = settings.width,
    width = _settings$width === undefined ? 200 : _settings$width,
    _settings$height = settings.height,
    height = _settings$height === undefined ? 50 : _settings$height,
    _settings$color = settings.color,
    color = _settings$color === undefined ? "red" : _settings$color;

console.log("Default settings: " + width + " width, " + height + " height, " + color + " color");

// destructure, rename with default values
var _eyes = { eyes: "black" },
    _eyes$eyes = _eyes.eyes,
    e = _eyes$eyes === undefined ? "blue" : _eyes$eyes,
    _eyes$skin = _eyes.skin,
    s = _eyes$skin === undefined ? "furry" : _eyes$skin;

console.log("Eyes: " + e + ", Skin: " + s);