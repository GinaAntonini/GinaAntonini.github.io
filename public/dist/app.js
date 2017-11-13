(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const dom = require('./dom');

let firebaseKey = '';
let sortedArray = [];


const setFirebaseKey = (key) => {
    firebaseKey = key; 
};

const apiKeys = () => {
    return new Promise ((resolve, reject) => {
        $.ajax({
            url: `db/apiKeys.json`
        }).done((data) => {
            resolve(data); 
        }).fail((error) => {
            reject(error); 
        });
    });
};

const retrieveKeys = () => {
    apiKeys().then((results) => {        
        setFirebaseKey(results.firebase);
        firebase.initializeApp(results.firebase);
        return getBlogs();
    }).then((blogs) => {
        dom.createBlogDomString(blogs);
        return getJobs();
    }).then((jobs) => {
        dom.createJobDomString(jobs);
        return getProjects();
    }).then((projects) => {
    	dom.createPortfolioDomString(projects);
    }).catch((error) => {
        console.log(error); 
    });
};

const getBlogs = () => {
    let blogs = []; 
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((fbBlogs) => { 
            if (fbBlogs !== null) {
                resolve(fbBlogs) ;
            }         
        }).catch((err) => {
            console.log(err);
        });
    }); 
}; 

const getJobs = () => {
    let jobs = []; 
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/jobs.json`).then((fbJobs) => { 
            if (fbJobs !== null) {
                resolve(fbJobs) ;
            }         
        }).catch((err) => {
            console.log(err);
        });
    }); 
}; 

const getProjects = () => {
    let projects = []; 
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/projects.json`).then((fbProjects) => { 
            if (fbProjects !== null) {
                resolve(fbProjects) ;
            }         
        }).catch((err) => {
            console.log(err);
        });
    }); 
}; 

module.exports = {retrieveKeys};
},{"./dom":2}],2:[function(require,module,exports){
"use strict";

const createBlogDomString = (blogz) => {
	let blogString = "";
	for (var i = 0; i < blogz.length; i++){
		blogString+=	`<div class="blogCard row">
							<h3 class="blogtitle">${blogz[i].title}</h3>
							<h4 class="blogauthor">${blogz[i].author}</h4>
							<h4 class="blogdate">${blogz[i].date}</h4>
							<p class="blogContent">${blogz[i].content}</p>
						</div>`;
	}

	printBlogsToDom(blogString);
};

const createJobDomString = (jobz) => {
	let jobString = "";
	for (var j = 0; j < jobz.length; j++){
		jobString+=	`<div class="jobCard row">
							<h2 class="job-title col-sm-6">${jobz[j].title}</h2>
							<div class='card-img'>
								<img src=${jobz[j].image}>
							</div>
							<div class="col-sm-6">
								<h3 class="dates">${jobz[j].dates}</h3>
							</div>
							<div class="jobInfo col-sm-6">
								<p class="jobDescription">${jobz[j].description}</p>
							</div>
						</div>`;
	}

	printJobsToDom(jobString);
};

const createPortfolioDomString = (projectz) => {
	let projectString = "";
	for (var k = 0; k < projectz.length; k++){
		projectString+= `<div class="projectCard row">
							<div class='projectImage'>
								<img src=${projectz[k].screenshot}>
							</div>
							<div class="projectDescription">
								<p>${projectz[k].description}</p>
							</div>
							<div class="projectLink">
								<p>${projectz[k].github}</p>
							</div>
						</div>`;
	}
	printProjectsToDom(projectString);
};


const printBlogsToDom = (strang) => {
	$('#blogContainer').html(strang);
};

const printJobsToDom = (strang) => {
	$('#jobContainer').html(strang);
};

const printProjectsToDom = (strang) => {
	$('#projectContainer').html(strang);
};

module.exports = {createBlogDomString, createJobDomString, createPortfolioDomString};


   
},{}],3:[function(require,module,exports){
"use strict";

const myLinks = () => {
	$(document).click((e) =>{
		if(e.target.id === "blogInNav"){
			$("#aboutContainer").addClass("hide");
			$("#jobContainer").addClass("hide");
			$("#blogContainer").removeClass("hide");
			$("#projectContainer").addClass("hide");
		}else if (e.target.id === "portfolioInNav") {
			$("#aboutContainer").addClass("hide");
			$("#jobContainer").addClass("hide");
			$("#blogContainer").addClass("hide");
			$("#projectContainer").removeClass("hide");
		}else if (e.target.id === "resumeInNav"){
			$("#aboutContainer").addClass("hide");
			$("#jobContainer").removeClass("hide");
			$("#blogContainer").addClass("hide");
			$("#projectContainer").addClass("hide");
		}else if (e.target.id === "aboutInNav"){
			$("#aboutContainer").removeClass("hide");
			$("#jobContainer").addClass("hide");
			$("#blogContainer").addClass("hide");
			$("#projectContainer").addClass("hide");
		}
	});
};

module.exports = {myLinks};


},{}],4:[function(require,module,exports){
"use strict";


const data = require('./data');
const events = require('./events');

data.retrieveKeys();
events.myLinks();



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



},{"./data":1,"./events":3}]},{},[4]);
