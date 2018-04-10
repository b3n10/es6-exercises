"use strict";

var _array = require("./array.js");

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = "sdf343";
var post = _array2.default.find(function (post) {
  return post.code === code;
});
var postIndex = _array2.default.findIndex(function (post) {
  return post.code === code;
});

console.log(post);
console.log("Index of " + code + ": " + postIndex);