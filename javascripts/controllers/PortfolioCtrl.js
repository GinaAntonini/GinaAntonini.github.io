"use strict";

app.controller("PortfolioCtrl", function($rootScope, $location, $scope, DataService){
	const getPortfolio = () => {
		$scope.projects = [];
    		DataService.getProjects().then((results) => {
            $scope.projects = results;
    	}).catch((err) => {
    	console.log("error in getPortfolio", err);
   	});
   };
   getPortfolio();
});