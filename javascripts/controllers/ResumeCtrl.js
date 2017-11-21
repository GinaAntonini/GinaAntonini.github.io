"use strict";

app.controller("ResumeCtrl", function($rootScope, $location, $scope, DataService){
	const getResume = () => {
		$scope.jobs = [];
    		DataService.getJobs($rootScope).then((results) => {
    		$scope.jobs = results;
    	}).catch((err) => {
    	console.log("error in getContacts", err);
   	});
   };
   getResume();
});