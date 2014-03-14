define([
		"angular",
		 "todo",
		 "text!partials/pagination.html"
		 ], 
		function(angular, app, paginationTemplate ){

	return app.directive('jPaginate', function(){


		var domUtil = {

			getElem: function (id) {
				return this.wrap(document.getElementById(id));
			},
			wrap: function (el) {
				return el ? angular.element(el) : null;
			},
			getVisibleElems: function(elems){
				var style,
					visibleElems = [];

				for(var i = 0, len = elems.length; i <len; i++){
					style = window.getComputedStyle(elems[i]);
					
					if(style.display!='none')
						visibleElems.push(elems[i]);
				}

				return angular.element(visibleElems);
			}
		};

		var defaults = {

				        containerID: "",
				        first: false,
				        previous: "← previous",
				        next: "next →",
				        last: false,
				        links: "numeric", // blank || title
				        startPage: 1,
				        perPage: 10,
				        midRange: 5,
				        startRange: 1,
				        endRange: 1,
				        keyBrowse: false,
				        scrollBrowse: false,
				        pause: 0,
				        clickStop: false,
				        delay: 50,
				        direction: "forward", // backwards || auto || random ||
				        animation: "", // http://daneden.me/animate/ - any entrance animations
				        fallback: 400,
				        minHeight: true,
				        callback: undefined // function( pages, items ) { }
		};

		function Plugin(element, options) {
		
		    this.options = angular.extend({}, defaults, options);

		    this._container = domUtil.getElem(this.options.containerID);
		    if (!this._container.length) return;

		    //this.jQwindow = $(window);
		    //this.jQdocument = $(document);

		    this._holder = element;
		    this._nav = {};

		    this._first = domUtil.wrap( this.options.first );
		    this._previous = domUtil.wrap(this.options.previous);
		    this._next = domUtil.wrap(this.options.next);
		    this._last = domUtil.wrap(this.options.last);

		    /* only visible items! */
		    this._items = domUtil.getVisibleElems(this._container.children());
		    this._itemsShowing = angular.element([]);
		    this._itemsHiding = angular.element([]);

		    this._numPages = Math.ceil(this._items.length / this.options.perPage);
		    this._currentPageNum = this.options.startPage;

		    this._clicked = false;
		    //this._cssAnimSupport = this.getCSSAnimationSupport();

		    this.init();
	  }

	  Plugin.prototype = {

	  	constructor: Plugin,

	  	init: function() {

	  		this.setNav();
	  		this.paginate( this._currentPageNum );
	  	},

	  	setNav: function () {
	  		var navHtml = this.writeNav();
	  	},

	  	writeNav: function(){

	  	}
	  
	  };





		return {
			restrict : 'EA',
			scope:true,
			template: 
					'<a  ng-repeat="i in getNumber(numPages) track by $index"
						 ng-click "linkSelected($index)"
						 ng-class = "getCssClass($index)">{{$index}}'+
					  '</a>',
			controller: function ($scope) {

				this.initializePagination = function ( paginationOptions, holder ) {
					
					this.options = angular.extend({}, paginationOptions, defaults );					
					this._holder = angular.element(holder);
				    this._nav = {};

				    this.totalRecords = $scope.totalRecords;
				    this.perPage = $scope.perPage;
				    this.currentPageNum = this.options.startPage;

				    this._first = angular.element(this.options.first);
				    this._previous = angular.element(this.options.previous);
				    this._next = angular.element(this.options.next);
				    this._last = angular.element(this.options.last);

				    this._itemsShowing = angular.element([]);
    				this._itemsHiding = angular.element([]);

    				this._numPages = Math.ceil(this.totalRecords / this.options.perPage);
    				this._currentPageNum = this.options.startPage;

					
					this.render();
					
				};

				this.setWatchers = function(){
						var self = this;

						$scope.$watchCollection('[totalRecords, perPage]', function(newValues) {
							self.totalRecords = newValues[0];
							self.perPage = newValues[1];
							$scope.numPages = Math.ceil(self.totalRecords / self.perPage);
							//self.render();
						});

				};

				this.render = function(){
					this.setNav();
				};
				setNav: function(){

				};
			},
			link: function(scope, element, attrs, controller ){
				$scope.getNumber = function(n){
					return new Array(n);
				};
				$scope.getCssClass = function(index, param){

				};

				controller.setWatchers();
				controller.initializePagination( scope.paginationOptions, element );

			}

		};
	});

});