'use strict';

angular.module('angularMobileDemoApp').controller('AppCtrl', function ($scope) {
  this.openPanel = null;

  this.todos = createTodos(100);
  this.remove = remove;

  function createTodos(count) {
    var i = 0,
      res = [];
    for (i=0; i<100; i++) {
      res.push({
        label: 'Todo '+i
      });
    }
    return res;
  }


  function remove(index) {
    this.todos.splice(index, 1);
  }

});
