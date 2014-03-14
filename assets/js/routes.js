define([
		"todo",
		"angular",
		"text!partials/todos.html",
		"controllers/TodosController",
		"directives/bsModal",
		"directives/bsAddModal",
		"directives/jPaginate",
		"angularRoute"
		], 

		function(todo, angular, todosTemplate ){

		return todo.config(['$routeProvider', function($routeProvider){
				$routeProvider.when("/", {
					controller : 'TodosController',
					template : todosTemplate
				});
			}]);

});