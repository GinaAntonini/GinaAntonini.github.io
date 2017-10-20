"use strict";

const createDomString = (blogz) => {
	let blogString = "";
	for (var i = 0; i < blogz.length; i++){
		blogString+=	`<div class="blogCard col-md-4">
							<h3 class="title">${blogz[i].title}</h3>
							<h4 class="author">${blogz[i].author}</h4>
							<h4 class="date">${blogz[i].date}</h4>
							<p class="content">${blogz[i].content}</p>
						</div>`;
	}

	printToDom(blogString);
};

const printToDom = (strang) => {
	$('#blogContainer').html(strang);
};

module.exports = {createDomString};


   