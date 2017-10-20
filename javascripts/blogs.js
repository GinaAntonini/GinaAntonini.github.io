"use strict";

const dom = require('./dom');

let blogs = [];

const loadBlogs = () => {
$.get('../db/blog-posts.json').done((data) => {
	blogs = data.blogs;
	console.log(data);
	dom.createDomString(blogs);
}).fail((error) => {
	console.log(error);
});
};

module.exports = {loadBlogs};