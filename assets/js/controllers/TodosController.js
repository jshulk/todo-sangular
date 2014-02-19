define([
		"angular", 
		"todo",
		"factories/TodosFactory"
		], 
		function(angular, todo){

	return todo.controller('TodosController', 
		['$scope', 'todosFactory',	function($scope, todosFactory){

		
		$scope.editedTodo = null;
		$scope.updateSuccess = false;

		todosFactory.getTodos().success(function (data){
			
			$scope.todos = data;

		}).error( function(err){
			console.log(err);

		});



		$scope.editTodo = function(todo){
			$scope.editedTodo = todo;
		};

		$scope.updateTodo = function(todo){
			
			todosFactory.updateTodo(todo).success(function(data){
				console.log('update successful');
				$scope.updateSuccess = true;
			}).error(function(todo){
				console.log('todo updated');
				console.log('revert the changes');
			});
		};

	}]);
});