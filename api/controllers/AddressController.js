/**
 * AddressController
 *
 * @description :: Server-side logic for managing addresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res){
		console.log(req);
		console.log("test");
		return res.view('address/index');
	}
	
};

