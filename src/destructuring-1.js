const dog = {
	name: "Globi",
	age: 3,
	loc: "Angeles",
	food: "meat"
};

const { name, food } = dog;

console.log(`Dog name: ${name}`);
console.log(`Food: ${food}`);

// nested data

const globi = {
	character: {
		eyes: "black",
		skin: "furry",
		nails: "short"
	}
};

const { eyes, skin, nails } = globi.character;
console.log(`${name}'s characteristics are ${eyes} eyes, ${skin} skin and ${nails} nails`);

// renaming destructuring variable names
const { eyes:e1 } = globi.character;
console.log(`I just renamed ${e1} eyes variable`);

const settings = { width: 500, color: "black" };
// defaul values for destructured variables
// only use defaut if not set from object
const { width = 200, height = 50, color = "red" } = settings;
console.log(`Default settings: ${width} width, ${height} height, ${color} color`);

// destructure, rename with default values
const { eyes: e = "blue", skin: s = "furry" } = { eyes: "black" };
console.log(`Eyes: ${e}, Skin: ${s}`);
