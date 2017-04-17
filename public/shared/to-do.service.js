'use strict';

angular.module('toDoListApp')
  .service('ToDoService', function ($http) {
    var self = this;

    self.create = function (todo) {
      return $http.post('/api/todo', { todo: todo, isDone: false, hasAttachment: false });
    }

    self.get = function (username) {
      return $http.get('/api/todos/' + username);
    }

    self.update = function (todo) {
      return $http.post('/api/todo', { id: todo._id, todo: todo.todo, isDone: todo.isDone, hasAttachment: todo.hasAttachment });
    }
  });