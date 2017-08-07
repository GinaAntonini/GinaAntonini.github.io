// Make an array called blogs
// Add each of your existing blogs to the blogs array by making them into objects 
//with the following key, value pairs: title, content, date (you should have at least 5 blog objects)
// Loop over the blogs array and build up the HTML card elements using the values from your blog objects
// Add the HTML you created in the last step to the blog-holder element


var blogs = [];

var blog1 = {
 	title: "Rumination Over My First Month at NSS",
 	content: "<p>I'd like to use this blog for storage of concepts I've learned during my time at NSS, so without further ado, here is the list of topics covered this week!<li>Arrays</li><li>For Loops</li><li>Functions</li></p><p>In addition to a useful summary for future reference, there will also be lots of feelings (feels?) shared. </p><p>For the first two weeks of class I felt comfortable with everything that was going on while learning HTML and CSS. I have control over HTML, and  CSS makes me feel like Picasso. I thoroughly enjoy getting lost in CSS (this involves 2-3 cycles of: 1) Make things more design-y, 2) Love how it turned out, and 3) End up hating how it turned out and scrapping the whole style sheet)...I think I enter some sort of trance after about an hour, but I am pretty sure I am fully enjoying the process.</p><p>Javascript, however, makes me feel like I'm learning to walk again (an experience I don't remember but I am sure it was challenging). In a pretty short period I experienced a wide range of emotions around the process of learning--from helplessness, dejection and surprise, to determination, and anticipation of the next puzzle to solve. As for our in class assignments and homework, it definitely feels great to get to the solution, but the road there is not easy. Right now I am relying heavily on the awesome people in my studygroup to bounce ideas around. Thanks, eastside_and_down, you're keeping me going...</p>",
 	author: "Posted by Gina Antonini",
	date: "July 30, 2017"
		
};

var blog2 = {
 	title: "GitHub 102",
 	content: "<p>The past two weeks were spently mainly learning more about GitHub, doing Javascript exercises, and learning how to work in teams. The Javascript exercises are getting increasingly difficult, but are still fun for me, so that's a good thing! I am still having a lot of difficulty figuring out the first steps for solving the exercises. One practice that has helped me a lot is seeking out extra exercises online so that I can get better at that. I'm still relying heavily on group time to get through the assignments.</p><p>Sometimes I find it hard to keep up with teammates because our skill levels are different but I try not to let it discourage me. After watching the in class demonstration of a group working through a GitHub project I realized how important it is to plan projects out when working with a team. And especially when trying to solve an assignment on my own.</p><p>Right now I am attempting to finish up the converter exercise. The end goal is to create a program that converts a temperature from celsius to farenheit and vice-versa. I think I finally have all of the functions needed to make the program work, but am struggling while trying to debug syntax errors, etc. Something I want to get better at is naming conventions for my variables and functions, as several times I confused myself and startied getting frustrated.</p>",
 	author: "Posted by Gina Antonini",
	date: "August 6, 2017"
		
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








