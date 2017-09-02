console.log("hello")

function domString(blogArray){
	var blogString = "";
	for (var i = 0; i < blogArray.length; i++){
		var blogCard = blogArray[i];
		blogString+=`<div class="blogg" id="blogCard-${i}">`;
		blogString+=`<h2 class="title">${blogCard.title}</h2>`;
		blogString+=`<h3 class="author">${blogCard.author}</h3>`;
		blogString+=`<h3 class="date">${blogCard.date}</h3>`;
		blogString+=`<section>`;
		blogString+=`<p class="content">${blogCard.content}</p>`;
		blogString+=`</section>`;
		blogString+=`</div>`;
	}
	writeToDom(blogString);
}

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



// blogs.push(blog1)
// blogs.push(blog2)
// blogs.push(blog3)
// blogs.push(blog4)
// blogs.push(blog5)

// console.log("Blog", blogs);

// var blogContainer= document.getElementById("blogContainer");

// for (var i = 0; i < blogs.length; i++) {

// 	var currentBlog = blogs[i];
// 	var domString = "";


// 	domString +=			

// console.log("Dom string from for loop", domString);
// blogContainer.innerHTML += domString;

// }








