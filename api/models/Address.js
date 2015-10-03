/**
* Address.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	owner: { model: 'User', required: true},
  	name: { type: 'string'}, 
  	email: { type: 'email'},
  	address: { type: 'string'},
  	city: { type: 'string'}

  }
};

