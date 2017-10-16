"use strict";

const createDomString = (blogArray) => {
	let blogString = "";
	for (var i = 0; i < blogArray.length; i++){
		let blogCard = blogArray[i];
		blogString +=	`<div class="blogg col-md-4" id="blogCard-${i}">
							<h3 class="title">${blogCard.title}</h3>
							<h4 class="author">${blogCard.author}</h4>
							<h4 class="date">${blogCard.date}</h4>
							<p class="content">${blogCard.content}</p>
						</div>`;
	}
	writeToDom(blogString);
};

const writeToDom = (theBlogString) => {
	$('#blogContainer').html(theBlogString);
};

module.exports = createDomString;
