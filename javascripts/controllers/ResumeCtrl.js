"use strict";

app.controller("ResumeCtrl", function($rootScope, $location, $scope, DataService){
	const getResume = () => {
		$scope.jobs = [];
    		DataService.getJobs().then((results) => {
            $scope.jobs = results;
    	}).catch((err) => {
    	console.log("error in getResume", err);
   	});
   };
   getResume();
});