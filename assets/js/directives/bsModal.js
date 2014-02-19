define(['jquery', "todo", 'bootstrap'], function($, todo){

	return todo.directive('bsModal', function(){

		return {
			restrict : 'A',
			scope:{
				editedTodo : '=bsModal',
				updateTodo : '&cb',
				updateFlag : '@upflag'
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
					if(value)
						$editModal.modal('hide');
				});

			}
		}

	});
});