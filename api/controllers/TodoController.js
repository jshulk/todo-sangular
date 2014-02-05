/**
 * TodoController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to TodoController)
   */
  _config: {

  		blueprints: {
					  	actions: false,
		  				shortcuts: false,
		  				rest:false  			
		  		  }

  },

  create: function(req, res, next){
  	var params = req.params.all();

  	Todo.create(params, function(err, todo){
  		if(err) return next(err);

  		res.json(todo);
  	});
  },

  find: function(req, res, next){

  	function isShortCut(id){
  		if( id =='find' || id=='update' || id == 'create' || id == 'destroy')
  			return true;
  	}

  	var id = req.param("id"),
  		idShortcut = isShortCut(id),
  		where,
  		options;

  		if(idShortcut === true)
  			return next();

  		if( id ) {
  			Todo.findOne(id, function(err, todo){
  				if( todo === undefined) return res.notFound();
  				if( err ) return next(err);

  				res.json(todo);
  			});
  		}
  		else{
  			where = req.param("where");

  			if( _.isString(where) )
  				where = JSON.parse(where);

  			options  = {
	  			limit : req.param('limit') || undefined,
	  			sort : req.param('sort') || undefined,
	  			skip : req.param('skip') || undefined,
	  			where : where || undefined
	  		};

	  		Todo.find(options, function(err, todo){
	  			if( todo === undefined) return res.notFound();
	  			if( err ) return next(err);

	  			res.json(todo);
	  		});
  		}


  },

  update: function(req, res, next){
  	var id = req.param("id"),
  		params = req.params.all();


  		if(!id)
  			return res.badRequest("no id provided");

  		Todo.update(id, params, function(err, todo){
  			if( todo.length === 0 ) return res.notFound();
  			if(err) return next(err);

  			res.json(todo);
  		});
  },

  destroy: function(req, res, next){
  	var id = req.param('id');

  	if(!id)
  		return res.badRequest();

  	Todo.findOne(id).done(function(err, todo){

  		if(todo == undefined)
  			return res.notFound();
  		if(err)
  			return next(err);

  		todo.destroy(function(err){
  			if(err)
  				return next(err);

  			res.json(todo);
  		});

  	});
  }




  
};
