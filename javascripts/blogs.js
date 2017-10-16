"use strict";

const dom = require('./dom');

let blogs = [];


$.get('../blog-posts.json').done((data) => {
	blogs = data.blogs;
	dom.createDomString(blogs);
}).fail((error) => {
	console.log(error);
});

const getBlogs = () => {
	return blogs;
};

module.exports = {getBlogs};