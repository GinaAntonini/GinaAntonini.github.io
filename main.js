console.log("hello")

function domString(blogArray){
	var blogString = "";
	for (var i = 0; i < blogArray.length; i++){
		var blogCard = blogArray[i];
		blogString+=	`<div class="blogg col-md-4" id="blogCard-${i}">
							<h3 class="title">${blogCard.title}</h3>
							<h4 class="author">${blogCard.author}</h4>
							<h4 class="date">${blogCard.date}</h4>
							<p class="content">${blogCard.content}</p>
						</div>`;

	// let selectedCard= document.getElementById("blogCard-${i}");

	// selectedCard.addEventListener("click", function(event){
	// 	console.log(event);
	// })
	}
	writeToDom(blogString)
}

let specialDiv = document.getElementById("popUpDiv");

blogContainer.addEventListener("click", function(event){
	if (event.target.parentNode.classList.contains("blogg")){
		let cardContents = event.target.parentNode.innerHTML;
		showMe(event);
};
});
	// console.log(event);
	// console.log(event.target.parentNode.innerHTML); 
// })

function showMe(event) {
	event.target.parentNode.classList.remove('hidden');
}

function writeToDom(theBlogString) {
	const blogContainerDiv = document.getElementById("blogContainer");
	blogContainerDiv.innerHTML += theBlogString;
}

function executeThisAfterBlogPostsLoads() {
	const blogsData = JSON.parse(this.responseText);
	domString(blogsData.blogs);
}

function executeThisIfBlogPostsErrors() {
	console.log("this is broken");
}

let myBlogs = new XMLHttpRequest();
myBlogs.addEventListener("load", executeThisAfterBlogPostsLoads);
myBlogs.addEventListener("error", executeThisIfBlogPostsErrors);
myBlogs.open("GET", "blog-posts.json");
myBlogs.send();

//this function allows the user to filter blog posts 
let blogSearcher = document.getElementById("inputField");
let blogs = document.getElementById("blogContainer").classList("blogg");

blogSearcher.addEventListener('keypress', function(event){
	console.log("event", event);
	if(event.key === 'Enter'){
		let txt = blogSearcher.value;
		let results = blogs.filter(function(evt){
			console.log("filter blogs", evt);
			return evt.name.indexOf(txt)>-1;
		})
		domString(results);
	}
})

