import posts from "./array.js";

const code = "sdf343";
const post = posts.find(post => post.code === code);
const postIndex = posts.findIndex(post => post.code === code);

console.log(post);
console.log(`Index of ${code}: ${postIndex}`);

