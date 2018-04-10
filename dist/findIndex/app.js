"use strict";

var posts = [{
	"code": "HIUdUkdf",
	"caption": "Text 1",
	"likes": 56,
	"id": "4523"
}, {
	"code": "sdf343",
	"caption": "Text 2",
	"likes": 6,
	"id": "4533"
}, {
	"code": "3423dsf",
	"caption": "Text 3",
	"likes": 3,
	"id": "4521"
}];

posts.find(function (post) {
	console.log(post.code);
});