// Make an array called blogs
// Add each of your existing blogs to the blogs array by making them into objects 
//with the following key, value pairs: title, content, date (you should have at least 5 blog objects)
// Loop over the blogs array and build up the HTML card elements using the values from your blog objects
// Add the HTML you created in the last step to the blog-holder element


var blogs = [];

var blog1 = {
 	title: "How I love thee CSS",
 	content: "Nam cursus ut massa vel interdum. Sed sodales ultricies vestibulum. Nam vel libero facilisis leo rutrum posuere. Morbi posuere ornare massa, vitae congue erat elementum id. Duis tincidunt quis massa nec ultrices. Curabitur vel vulputate mauris, eget venenatis ante. Cras molestie diam velit, eget tincidunt nisi fringilla eu. Etiam ut luctus sapien, in bibendum nisl. Integer eleifend turpis vel lorem ornare, quis venenatis velit facilisis. Aenean ligula erat, viverra et neque sit amet, consequat pharetra nulla. Nulla semper mauris libero, id suscipit metus aliquam ac. Aliquam efficitur egestas libero quis malesuada. Suspendisse lobortis enim sed dignissim sodales.",
 	author: "Posted by Gina Antonini",
	date: "July 28, 2017"
		
};

var blog2 = {
 	title: "Baby's First Javascript",
 	content: "Nam cursus ut massa vel interdum. Sed sodales ultricies vestibulum. Nam vel libero facilisis leo rutrum posuere. Morbi posuere ornare massa, vitae congue erat elementum id. Duis tincidunt quis massa nec ultrices. Curabitur vel vulputate mauris, eget venenatis ante. Cras molestie diam velit, eget tincidunt nisi fringilla eu. Etiam ut luctus sapien, in bibendum nisl. Integer eleifend turpis vel lorem ornare, quis venenatis velit facilisis. Aenean ligula erat, viverra et neque sit amet, consequat pharetra nulla. Nulla semper mauris libero, id suscipit metus aliquam ac. Aliquam efficitur egestas libero quis malesuada. Suspendisse lobortis enim sed dignissim sodales.",
 	author: "Posted by Gina Antonini",
	date: "July 29, 2017"
		
};

var blog3 = {
 	title: "How NSS Prepared Me for a Job in Web Development",
 	content: "Nam cursus ut massa vel interdum. Sed sodales ultricies vestibulum. Nam vel libero facilisis leo rutrum posuere. Morbi posuere ornare massa, vitae congue erat elementum id. Duis tincidunt quis massa nec ultrices. Curabitur vel vulputate mauris, eget venenatis ante. Cras molestie diam velit, eget tincidunt nisi fringilla eu. Etiam ut luctus sapien, in bibendum nisl. Integer eleifend turpis vel lorem ornare, quis venenatis velit facilisis. Aenean ligula erat, viverra et neque sit amet, consequat pharetra nulla. Nulla semper mauris libero, id suscipit metus aliquam ac. Aliquam efficitur egestas libero quis malesuada. Suspendisse lobortis enim sed dignissim sodales.",
 	author: "Posted by Gina Antonini",
	date: "August 18, 2017"
		
};

var blog4 = {
 	title: "The Deep Dark Truth About APIs",
 	content: "Nam cursus ut massa vel interdum. Sed sodales ultricies vestibulum. Nam vel libero facilisis leo rutrum posuere. Morbi posuere ornare massa, vitae congue erat elementum id. Duis tincidunt quis massa nec ultrices. Curabitur vel vulputate mauris, eget venenatis ante. Cras molestie diam velit, eget tincidunt nisi fringilla eu. Etiam ut luctus sapien, in bibendum nisl. Integer eleifend turpis vel lorem ornare, quis venenatis velit facilisis. Aenean ligula erat, viverra et neque sit amet, consequat pharetra nulla. Nulla semper mauris libero, id suscipit metus aliquam ac. Aliquam efficitur egestas libero quis malesuada. Suspendisse lobortis enim sed dignissim sodales.",
 	author: "Posted by Gina Antonini",
	date: "August 30, 2017"
		
};

var blog5 = {
 	title: "Study Group 101",
 	content: "Nam cursus ut massa vel interdum. Sed sodales ultricies vestibulum. Nam vel libero facilisis leo rutrum posuere. Morbi posuere ornare massa, vitae congue erat elementum id. Duis tincidunt quis massa nec ultrices. Curabitur vel vulputate mauris, eget venenatis ante. Cras molestie diam velit, eget tincidunt nisi fringilla eu. Etiam ut luctus sapien, in bibendum nisl. Integer eleifend turpis vel lorem ornare, quis venenatis velit facilisis. Aenean ligula erat, viverra et neque sit amet, consequat pharetra nulla. Nulla semper mauris libero, id suscipit metus aliquam ac. Aliquam efficitur egestas libero quis malesuada. Suspendisse lobortis enim sed dignissim sodales.",
 	author: "Posted by Gina Antonini",
	date: "September 7, 2017"
		
};

blogs.push(blog1)
blogs.push(blog2)
blogs.push(blog3)
blogs.push(blog4)
blogs.push(blog5)

console.log("Blog", blogs);

var blogContainer= document.getElementById("blogContainer");

for (var i = 0; i < blogs.length; i++) {

	var currentBlog = blogs[i];
	var domString = "";


	domString +=			'<div class="blog">';
	domString +=				'<header>';
	domString +=				'<h4>' + currentBlog.title + '</h4>';
	domString +=				'<p>' + currentBlog.author + '</p>';
	domString +=				'<p>' + currentBlog.date + '</p>';
	domString +=				'</header>';
	domString +=				'<section>';
	domString +=					'<p>' + currentBlog.content +'</p>';
	domString +=				'</section>';
	domString +=			'</div>';

console.log("Dom string from for loop", domString);
blogContainer.innerHTML += domString;

}








