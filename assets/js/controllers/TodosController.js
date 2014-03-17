define([
		"angular", 
		"todo",
		"factories/TodosFactory"
		], 
		function(angular, todo){

	return todo.controller('TodosController', 
		['$scope', 'todosFactory',	function($scope, todosFactory){

		$scope.message = 'hello world';
		
		$scope.paginationOptions ={
			name : 'ng-paginate'
		};

		$scope.totalRecords = 70;
		$scope.perPage = 5;
		$scope.paginationOptions = {};
		$scope.perPageOptions = [5, 10, 15];

		$scope.loadData = function(num, perPage){
			$scope.perPage = perPage;
			$scope.getTodos({
				limit:$scope.perPage,
				skip : (num-1)*$scope.perPage
			})
		};



		$scope.editedTodo = null;
		$scope.updateSuccess = false;
		$scope.addSuccess = false;
		$scope.showAdd = false;


		$scope.editTodo = function(todo){
			$scope.editedTodo = angular.copy(todo);
		};



		$scope.getTodos = function(params){

			todosFactory.getTodos(params).success(function (data){
			
			$scope.todos = data;

			}).error( function(err){
				console.log(err);

			});
		};

		$scope.getTodos({
			limit : $scope.perPage,
			skip : 0
		});
		

		$scope.showAddTodo = function(){
			$scope.showAdd = true;
			console.log('shwos add todo called');
		};

		$scope.addTodo = function(todo){
			todosFactory.addTodo(todo.newTodo).then( function(response){

				$scope.todos.push(response.data);

				$scope.addSuccess = true;
			
			}, function(err){
				console.log('err');
				console.log(err);
			});
		};
		$scope.removeTodo = function(todo){
			console.log('remove todo  called');
			console.log(todo);
			todosFactory.removeTodo(todo).then(function(response){
				$scope.todos.splice($scope.todos.indexOf(todo), 1);
			}, function(err){
				console.log(err);
			});
		};

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