/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {

	var todos = [
		{ title : "Finish angular app", completed:false},
		{ title : "Go to mall", completed:true},
		{ title : "Get groceries", completed:true},
		{ title : "Go to party", completed:false},
		{ title : "Get a haircut", completed:false},
		{ title : "Learn rails", completed:false},
		{ title : "Learn Angular js", completed:false},
		{ title : "write pagination directive", completed:false},
		{ title : "Use bum-smack plugin", completed:false},
		{ title : "Infinite scroll implementation", completed:false},
		{ title : "Get a theme for the blog", completed:false},
		{ title : "Start writing blogposts", completed:false},
		{ title : "Eat something", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Finish angular app", completed:false},
		{ title : "Go to mall", completed:true},
		{ title : "Get groceries", completed:true},
		{ title : "Go to party", completed:false},
		{ title : "Get a haircut", completed:false},
		{ title : "Learn rails", completed:false},
		{ title : "Learn Angular js", completed:false},
		{ title : "write pagination directive", completed:false},
		{ title : "Use bum-smack plugin", completed:false},
		{ title : "Infinite scroll implementation", completed:false},
		{ title : "Get a theme for the blog", completed:false},
		{ title : "Start writing blogposts", completed:false},
		{ title : "Eat something", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Finish angular app", completed:false},
		{ title : "Go to mall", completed:true},
		{ title : "Get groceries", completed:true},
		{ title : "Go to party", completed:false},
		{ title : "Get a haircut", completed:false},
		{ title : "Learn rails", completed:false},
		{ title : "Learn Angular js", completed:false},
		{ title : "write pagination directive", completed:false},
		{ title : "Use bum-smack plugin", completed:false},
		{ title : "Infinite scroll implementation", completed:false},
		{ title : "Get a theme for the blog", completed:false},
		{ title : "Start writing blogposts", completed:false},
		{ title : "Eat something", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Finish angular app", completed:false},
		{ title : "Go to mall", completed:true},
		{ title : "Get groceries", completed:true},
		{ title : "Go to party", completed:false},
		{ title : "Get a haircut", completed:false},
		{ title : "Learn rails", completed:false},
		{ title : "Learn Angular js", completed:false},
		{ title : "write pagination directive", completed:false},
		{ title : "Use bum-smack plugin", completed:false},
		{ title : "Infinite scroll implementation", completed:false},
		{ title : "Get a theme for the blog", completed:false},
		{ title : "Start writing blogposts", completed:false},
		{ title : "Eat something", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},
		{ title : "Learn expressjs", completed:false},

	];

	todos.forEach(function(todo){
		Todo.create(todo, function(err, todo){
			if(err){
				console.log('error occurred');
				console.log(err);
				cb();
			}
		});
	});

  cb();
};