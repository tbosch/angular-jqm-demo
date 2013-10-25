'use strict';

angular.module('angularMobileDemoApp')
  .controller('Page2Ctrl', function($scope, $routeParams) {
    $scope.todo = $scope.app.todos[$routeParams.todoIndex];
  });
