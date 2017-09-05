
const domString = (blogArray) => {
	let blogString = "";
	for (var i = 0; i < blogArray.length; i++){
		let blogCard = blogArray[i];
		blogString+=	`<div class="blogg col-md-4" id="blogCard-${i}">
							<h3 class="title">${blogCard.title}</h3>
							<h4 class="author">${blogCard.author}</h4>
							<h4 class="date">${blogCard.date}</h4>
							<p class="content">${blogCard.content}</p>
						</div>`;
	}
	writeToDom(blogString)
}

//this function allows the addition of the special div and replacement of blog content into the special div inner html
let specialDiv = document.getElementById("popUpDiv");

blogContainer.addEventListener("click", function(event){
	if (event.target.parentNode.classList.contains("blogg")){
		let cardContents = event.target.parentNode.innerHTML;
		showMe(event);
	};
});

const showMe = (event) => {
  const blogContent = event.target.parentNode.innerHTML;
  specialDiv.querySelector('.specialDivContainer').innerHTML = blogContent;
  specialDiv.classList.remove('hidden');
}


const writeToDom = (theBlogString) => {
	let blogContainerDiv = document.getElementById("blogContainer");
	blogContainerDiv.innerHTML += theBlogString;
}

function executeThisAfterBlogPostsLoads() {
	const blogsData = JSON.parse(this.responseText);
	domString(blogsData.blogs);
}

const executeThisIfBlogPostsErrors = () => {
	console.log("this is broken");
}

let myBlogs = new XMLHttpRequest();
myBlogs.addEventListener("load", executeThisAfterBlogPostsLoads);
myBlogs.addEventListener("error", executeThisIfBlogPostsErrors);
myBlogs.open("GET", "blog-posts.json");
myBlogs.send();

//this function allows the user to filter blog posts
let blogSearcher = document.getElementById("inputField");
let blogs = document.getElementById("blogContainer");

blogSearcher.addEventListener('keypress', function(event){
	console.log("event", event);
		let txt = blogSearcher.value;
		let results = blogs.filter(function(evt){
			console.log("filter blogs", evt);
			return evt.name.indexOf(txt)>-1;
		})

		domString(results);
})


