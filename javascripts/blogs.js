"use strict";

const dom = require('./dom');

let blogs = [];
let jobs = [];

const loadBlogs = () => {
$.get('../db/blog-posts.json').done((data) => {
	blogs = data.blogs;
	console.log(data);
	dom.createBlogDomString(blogs);
}).fail((error) => {
	console.log(error);
});
};

const loadJobs = () => {
$.get('../db/resume.json').done((data) => {
	jobs = data.jobs;
	console.log(data);
	dom.createJobDomString(jobs);
}).fail((error) => {
	console.log(error);
});
};

module.exports = {loadBlogs, loadJobs};

