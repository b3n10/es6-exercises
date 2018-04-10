const data1 = "Ben,Football,2018,29";
const [name, sports, year, age] = data1.split(",");
console.log(name, sports, year, age);

const data2 = "Mama, Papa, Tita, Ethan, Me";
const [mom, dad, ...others] = data2.split(",");
console.log(mom, dad, others);
