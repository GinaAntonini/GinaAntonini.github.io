console.log("hello")

function domString(blogArray){
	var blogString = "";
	for (var i = 0; i < blogArray.length; i++){
		var blogCard = blogArray[i];
		blogString+=`<div class="blogg col-md-4" id="blogCard-${i}">`;
		blogString+=`<h3 class="title">${blogCard.title}</h3>`;
		blogString+=`<h4 class="author">${blogCard.author}</h4>`;
		blogString+=`<h4 class="date">${blogCard.date}</h4>`;
		blogString+=`<section>`;
		blogString+=`<p class="content">${blogCard.content}</p>`;
		blogString+=`</section>`;
		blogString+=`</div>`;
	}
	writeToDom(blogString);
}

let specialDiv = document.getElementById("blogCard-${i}");


function writeToDom(theBlogString) {
	var blogContainerDiv = document.getElementById("blogContainer");
	blogContainerDiv.innerHTML += theBlogString;
}

function executeThisAfterBlogPostsLoads() {
	var blogsData = JSON.parse(this.responseText);
	domString(blogsData.blogs);
}

function executeThisIfBlogPostsErrors() {
	console.log("this is broken");
}

var myBlogs = new XMLHttpRequest();
myBlogs.addEventListener("load", executeThisAfterBlogPostsLoads);
myBlogs.addEventListener("error", executeThisIfBlogPostsErrors);
myBlogs.open("GET", "blog-posts.json");
myBlogs.send();

