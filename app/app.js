'use strict';

angular.module('angularMobileDemoApp', ['jqm'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/page1', {
        templateUrl: 'views/page1/page1.html',
        controller: 'Page1Ctrl',
        animation: 'page-slide'
      })
      .when('/page2/:todoIndex', {
        templateUrl: 'views/page2/page2.html',
        controller: 'Page2Ctrl',
        animation: 'page-slide'
      })
      .otherwise({
        redirectTo: '/page1'
      });
  });
