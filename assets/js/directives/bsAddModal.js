define([
		"jquery", 
		"todo",
		"text!partials/bs-add.html",
		"bootstrap"
		], function($, todo, bsAddTemplate){

	return todo.directive('bsAddModal', function(){
		return {
			restrict: 'A',
			scope:true,
			template: bsAddTemplate,
			controller: function($scope){
				
				$scope.initializeModal = function(elem){
					
					 var $el = $(elem); 

					$el.modal({
						show:false
					});

					$scope.$modalRoot = $el.data('bs.modal').$element;
				};

				$scope.showAddModal = function(){
					$scope.$modalRoot.modal('show');
				};

				$scope.hideAddModal = function(){
					$scope.$modalRoot.modal('hide');
				};
			},
			link: function(scope, elem, attrs){
				
				console.log('scope inside add');
				console.log(scope);
				scope.initializeModal(elem);

				scope.$watch('showAdd', function(value){
					if( value ){
						scope.showAddModal();
					}
					else
						scope.hideAddModal();
				});

				scope.$watch('addSuccess', function(value){
					if( value ){
						scope.hideAddModal();
						scope.addSuccess = false;
					}
				});
			}
		}
	});
});