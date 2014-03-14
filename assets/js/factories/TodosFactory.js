define(["todo"], function(todo){
	return todo.factory("todosFactory", 

		['$http', function($http){

			return {

				getTodos: function(){
					return $http.get("/todo?limit=10&skip=10" );
				},
				updateTodo: function(todo){
					return $http.put('/todo/'+todo.id, todo );
				},
				addTodo: function(todo){
					return $http.post('/todo', todo);
				},
				removeTodo: function(todo){
						return $http.delete('/todo/'+todo.id, todo);
				}

			};
	}]);
});