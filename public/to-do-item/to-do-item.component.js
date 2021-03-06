'use strict';

var todoItemCtrl = [
  'ToDoService',
  function (ToDoService) {
    var self = this;

    self.$onInit = function () {
      self.editing = false;
    }

    self.editTodo = function () {
      self.editing = true;
    }

    self.markTodoAsDone = function (todo) {
      todo.isDone = true;
      self.updateTodo(todo);
    }

    self.removeTodo = function (todo) {
      ToDoService.remove(todo).then(() => {
        self.onTodoRemoved();
      });
    }

    self.updateTodo = function (todo) {
      self.editing = false;
      ToDoService.update(todo);
    }
  }
];

angular.module('toDoListApp').component('toDoItem', {
  templateUrl: 'assets/to-do-item/to-do-item.component.html',
  controller: todoItemCtrl,
  bindings: {
    item: '<',
    onTodoRemoved: '&'
  }
});