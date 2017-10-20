"use strict";

const blogg = require('./blogs');
const dom = require('./dom');

blogg.loadBlogs();



// //this function allows the addition of the special div and replacement of blog content into the special div inner html
// let specialDiv = document.getElementById("popUpDiv");
// let blogContainerDiv = document.getElementById("blogContainer");


// blogContainerDiv.addEventListener("click", function(event){
// 	if (event.target.parentNode.classList.contains("blogg")){
// 		let cardContents = event.target.parentNode.innerHTML;
// 		showMe(event);
// 	}
// });

// const showMe = (event) => {
//   const blogContent = event.target.parentNode.innerHTML;
//   specialDiv.querySelector('.specialDivContainer').innerHTML = blogContent;
//   specialDiv.classList.remove('hidden');
// };


// const writeToDom = (theBlogString) => {
// 	let blogContainerDiv = document.getElementById("blogContainer");
// 	blogContainerDiv.innerHTML += theBlogString;
// };




// //this function allows the user to filter blog posts
// let blogSearcher = document.getElementById("inputField");
// let blogs = document.getElementById("blogContainer");

// blogSearcher.addEventListener('keypress', function(event){
// 	console.log("event", event);
// 		let txt = blogSearcher.value;
// 		let results = blogs.filter(function(evt){
// 			console.log("filter blogs", evt);
// 			return evt.name.indexOf(txt)>-1;
// 		});

// 		domString(results);
// });


