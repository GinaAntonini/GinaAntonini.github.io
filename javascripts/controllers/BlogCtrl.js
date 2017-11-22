"use strict";

app.controller("BlogCtrl", function($rootScope, $location, $scope, DataService){
	const getBlog = () => {
		$scope.blogs = [];
    		DataService.getBlogs().then((results) => {
            $scope.blogs = results;
    	}).catch((err) => {
    	console.log("error in getBlog", err);
   	});
   };
   getBlog();
});