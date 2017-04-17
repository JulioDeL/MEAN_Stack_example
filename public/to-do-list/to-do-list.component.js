'use strict';

var todoListCtrl = [
  'ToDoService',
  function (ToDoService) {
    var self = this;

    self.$onInit = function () {
      self.loadList();
    }

    self.loadList = function () {
      self.loading = true;
      ToDoService.get('test').then(todos => {
        self.todos = todos.data;
        self.loading = false;
      });
    }
  }
];

angular.module('toDoListApp').component('toDoList', {
  templateUrl: 'assets/to-do-list/to-do-list.component.html',
  controller: todoListCtrl
});