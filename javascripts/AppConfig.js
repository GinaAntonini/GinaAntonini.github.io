'use strict';

app.run(function($location, $rootScope, FIREBASE_CONFIG){
  console.log("hello3");
    firebase.initializeApp(FIREBASE_CONFIG);
});

    app.config(function($routeProvider){
        $routeProvider
          .when("/about", {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
          })
          .when("/blog", {
            templateUrl: 'partials/blog.html',
            controller: 'BlogCtrl'
          })
          .when("/resume", {
            templateUrl: 'partials/resume.html',
            controller: 'ResumeCtrl'
          })
          .when("/portfolio", {
            templateUrl: 'partials/portfolio.html',
            controller: 'PortfolioCtrl'
          })
          .otherwise('/about');
      });