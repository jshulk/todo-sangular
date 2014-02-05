/**
 * Todo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  schema:true,
  adapter:'memory',
  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/


  	title : {
  		type : 'string',
  		required: true,
  		notEmpty:true
  	},
  	completed:{
  		type : 'boolean',
  		defaultsTo:false
  	}
    
  }

};
