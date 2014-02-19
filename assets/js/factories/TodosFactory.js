define(["todo"], function(todo){
	return todo.factory("todosFactory", 

		['$http', function($http){

			return {

				getTodos: function(){
					return $http.get("/todo");
				},
				updateTodo: function(todo){
					return $http.put('/todo/'+todo.id, todo );
				}

			};
	}]);
});