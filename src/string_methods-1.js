const course1 = "CS50";
console.log( course1, "starts with 'CS':", course1.startsWith("CS") );
const course2 = "2018-CS50";
console.log( course2, "starts with 'CS' after year:", course2.startsWith("CS", 5) );

const course3 = course2 + "-en";
console.log(course3, "ends with english: ", course3.endsWith("en"));
const course4 = course3 + "-q3";
console.log(course4, "ends with english before q3: ", course4.endsWith("en", 12));

const course5 = course3;
console.log(course5, "includes CS50: ", course5.includes("CS50"));

const nissan = "Nissan";
const honda = "Honda";
const suzuki = "Suzuki";

function leftPad(str, length = 20) {
	return `> ${" ".repeat(length - str.length)}${str}`;
}

console.log(leftPad(nissan));
console.log(leftPad(honda));
console.log(leftPad(suzuki));
