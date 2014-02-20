define([
		'jquery', 
		"todo", 
		'text!partials/bs-modal.html',
		'bootstrap'], 
		function($, todo, bsModalTemplate){

	return todo.directive('bsModal', function(){

		return {
			template: bsModalTemplate,
			restrict : 'A',
			scope:{
				editedTodo : '=edTodo',
				updateTodo : '&updateCallback',
				updateSuccess : '=successFlag'
			},
			link: function(scope, element, attrs) {
				var $el,
					$editModal;

					console.log('scope');
					console.log(scope);
					console.log(attrs);

				function init(){
					
					$el = $(element);


					$el.modal({
						show:false
					});

					$editModal = $el.data('bs.modal').$element;


				}

				init();

				scope.$watch('editedTodo', function(value){

					if(value)
						$editModal.modal('show');
				});

				scope.$watch('updateSuccess', function(value){
					console.log('watching updateflag');
					if(value){
						$editModal.modal('hide');
						scope.updateSuccess = false;
					}
						
				});

			}
		}

	});
});