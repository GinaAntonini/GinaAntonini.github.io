"use strict";

const myLinks = () => {
	$(document).click((e) =>{
		if(e.target.id === "blogInNav"){
			$("#aboutContainer").addClass("hide");
			$("#jobContainer").addClass("hide");
			$("#blogContainer").removeClass("hide");
			$("#projectContainer").addClass("hide");
		}else if (e.target.id === "portfolioInNav") {
			$("#aboutContainer").addClass("hide");
			$("#jobContainer").addClass("hide");
			$("#blogContainer").addClass("hide");
			$("#projectContainer").removeClass("hide");
		}else if (e.target.id === "resumeInNav"){
			$("#aboutContainer").addClass("hide");
			$("#jobContainer").removeClass("hide");
			$("#blogContainer").addClass("hide");
			$("#projectContainer").addClass("hide");
		}else if (e.target.id === "aboutInNav"){
			$("#aboutContainer").removeClass("hide");
			$("#jobContainer").addClass("hide");
			$("#blogContainer").addClass("hide");
			$("#projectContainer").addClass("hide");
		}
	});
};

module.exports = {myLinks};

