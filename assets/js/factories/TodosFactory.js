define(["todo"], function(todo){
	return todo.factory("todosFactory", 

		['$http', function($http){

			return {

				getTodos: function(params){
					
					return $http.get("/todo?limit="+params.limit+"&skip="+params.skip);
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