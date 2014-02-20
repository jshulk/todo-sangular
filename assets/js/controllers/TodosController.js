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


		$scope.editTodo = function(todo){
			$scope.editedTodo = angular.copy(todo);
		};

		todosFactory.getTodos().success(function (data){
			
			$scope.todos = data;

		}).error( function(err){
			console.log(err);

		});


		$scope.updateOriginal = function(todo){
			todo = todo[0];
			for( var i = 0, len=$scope.todos.length; i < len; i++){
				if( todo.id === $scope.todos[i].id)
					$scope.todos[i] = todo;
			}
		};


		$scope.updateTodo = function(todo){
			
			todosFactory.updateTodo(todo).success(function(data){
				console.log('update successful');
				$scope.updateOriginal(data);
				$scope.updateSuccess = true;
			}).error(function(todo){
				console.log('todo updated');
				console.log('revert the changes');
			});
		};

	}]);
});