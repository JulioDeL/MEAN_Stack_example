'use strict';

var addToDoCtrl = [
  'ToDoService',
  function (ToDoService) {
    var self = this;

    self.newTodo = '';
    self.saving = false;

    self.createTodo = function (newTodo) {
      self.saving = true;
      ToDoService.create(newTodo).then(() => {
        self.onTodoCreated();
        self.saving = false;
        self.newTodo = '';
      });
    }
  }
];

angular.module('toDoListApp').component('addToDo', {
  templateUrl: 'assets/add-to-do/add-to-do.component.html',
  controller: addToDoCtrl,
  bindings: {
    onTodoCreated: '&'
  }
});