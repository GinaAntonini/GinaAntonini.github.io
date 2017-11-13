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


   