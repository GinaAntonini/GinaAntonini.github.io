"use strict";


//this function allows the addition of the special div and replacement of blog content into the special div inner html
$('#blogContainer').click((event) => {
	if (event.target.parent().classList.contains("blogg")){
		let cardContents = event.target.parent().innerHTML;
		showMe(event);
	}
});

const showMe = (event) => {
  const blogContent = event.target.parent().innerHTML;
  specialDiv.querySelector('.specialDivContainer').innerHTML = blogContent;
  specialDiv.classList.remove('hidden');
};

//this function allows the user to filter blog posts
$('#inputField').keypress((event) => {
	console.log("event", event);
		let txt = blogSearcher.value;
		let results = $('#blogContainer').filter(function(evt){
			console.log("filter blogs", evt);
			return evt.name.indexOf(txt)>-1;
		});

		dom.createDomString(results);
});

module.exports = {};