'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.Todo = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.addTodo = addTodo;
exports.changeTodoStatus = changeTodoStatus;
exports.getTodo = getTodo;
exports.getTodos = getTodos;
exports.getUser = getUser;
exports.getViewer = getViewer;
exports.markAllTodos = markAllTodos;
exports.removeTodo = removeTodo;
exports.removeCompletedTodos = removeCompletedTodos;
exports.renameTodo = renameTodo;

var _events = require('../server/events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = exports.Todo = function Todo() {
  (0, _classCallCheck3.default)(this, Todo);
};

var User = exports.User = function User() {
  (0, _classCallCheck3.default)(this, User);
};

// Mock authenticated ID
var VIEWER_ID = 'me';

// Mock user data
var viewer = new User();
viewer.id = VIEWER_ID;
var usersById = (0, _defineProperty3.default)({}, VIEWER_ID, viewer);

// Mock todo data
var todosById = {};
var todoIdsByUser = (0, _defineProperty3.default)({}, VIEWER_ID, []);
var nextTodoId = 0;
addTodo('Taste JavaScript', true);
addTodo('Buy a unicorn', false);
addTodo('todo3', false);
addTodo('todo4', false);
addTodo('todo5', false);
addTodo('todo6', false);
addTodo('todo7', false);
addTodo('todo8', false);

function addTodo(text, complete) {
  var todo = new Todo();
  todo.complete = !!complete;
  todo.id = '' + nextTodoId++;
  todo.text = text;
  todosById[todo.id] = todo;
  todoIdsByUser[VIEWER_ID].push(todo.id);
  return todo.id;
}

function changeTodoStatus(id, complete) {

  var todo = getTodo(id);
  todo.complete = complete;
  _events2.default.emit('amqp.changes', { id: id });
}

function getTodo(id) {
  return todosById[id];
}

function getTodos() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'any';

  var todos = todoIdsByUser[VIEWER_ID].map(function (id) {
    return todosById[id];
  });
  if (status === 'any') {
    return todos;
  }
  return todos.filter(function (todo) {
    return todo.complete === (status === 'completed');
  });
}

function getUser(id) {
  return usersById[id];
}

function getViewer() {
  return getUser(VIEWER_ID);
}

function markAllTodos(complete) {
  var changedTodos = [];
  getTodos().forEach(function (todo) {
    if (todo.complete !== complete) {
      todo.complete = complete;
      changedTodos.push(todo);
    }
  });
  return changedTodos.map(function (todo) {
    return todo.id;
  });
}

function removeTodo(id) {
  var todoIndex = todoIdsByUser[VIEWER_ID].indexOf(id);
  if (todoIndex !== -1) {
    todoIdsByUser[VIEWER_ID].splice(todoIndex, 1);
  }
  delete todosById[id];
}

function removeCompletedTodos() {
  var todosToRemove = getTodos().filter(function (todo) {
    return todo.complete;
  });
  todosToRemove.forEach(function (todo) {
    return removeTodo(todo.id);
  });
  return todosToRemove.map(function (todo) {
    return todo.id;
  });
}

function renameTodo(id, text) {
  var todo = getTodo(id);
  todo.text = text;
}
//# sourceMappingURL=database.js.map