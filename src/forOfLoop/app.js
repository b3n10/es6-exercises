import { dogLoop, addUpNumbers } from "./forOfLoop";
const dogs = ["Globi", "Snupy", "Gerard", "Box"];

console.log(dogLoop(dogs));
console.log("Total:", addUpNumbers(2, 3, 2, 4));

for (let c of "Ben") {
	console.log(`${c}`);
}
/*
import * as forOfLoop from "./forOfLoop";

const dogs = ["Globi", "Snupy", "Gerard", "Box"];
console.log(forOfLoop.dogLoop(dogs));
*/
