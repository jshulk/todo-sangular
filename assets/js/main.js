require.config({
	baseUrl: '/js',
	shim:{
		bootstrap:['jquery'],
		angularRoute: ['angular'],
		angular: {
			exports:'angular'
		}
	},
	paths:{
		jquery : 'libs/jquery-1.9.1.min',
		text : 'libs/text',
		angular: 'libs/angular',
		angularRoute: 'libs/angular-route',
		bootstrap : 'libs/bootstrap.min'
	}
});

require([ 
		'todo', 
		'angular', 
		'angularRoute', 
		'routes'
		], function(todo, angular){

		angular.element().ready(function(){
			angular.bootstrap(document, ['todoSangular']);
		});	
});