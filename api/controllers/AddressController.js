/**
 * AddressController
 *
 * @description :: Server-side logic for managing addresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res){
		var user = req.user;
		console.log(user);
		Address.find().where({owner: user.id})
			.exec(function cb(err, results){
				if(err){
					console.log(err);
					return res.view('address/index');
				}
				addresses = results;
				return res.view('address/index', addresses);
			});
	},

	new: function(req, res){
		return res.view('address/new');
	},

	create: function(req, res){
		var name = req.param('name');
		var email = req.param('email');
		var address = req.param('address');
		var city = req.param('city');
		var user = req.user;
		Address.create({
				owner: user,
				name: name,
				email: email,
				address: address,
				city: city
			}).exec(function cb(err){
				if(err){
					console.log(err);
					return res.view('address/new');
				}
				console.log("created contact");
				return res.redirect('address/index');
			});

	}, 

	change: function(req, res){
		var id = req.query.id;
		Address.findOne({id: id})
			.exec(function cb(err, result){
				if(err){
					return res.badRequest();
				}
				contact = result;
				console.log(contact);
				return res.view('address/edit', contact);
			});
	},

	update: function(req, res){

		var id = req.param('id');
		var name = req.param('name');
		var email = req.param('email');
		var address = req.param('address');
		var city = req.param('city');

		Address.update(	{id: id}, 
						{	name: name, 
							email: email, 
							address: address,
							city: city})
				.exec(function cb(err, updated){
					if (err) {
						console.log(err);
						return res.badRequest();
					}

					console.log("updated contact");
					console.log(updated);
					return res.redirect('address/index');
				});
	},

	remove: function(req, res){
		var id = req.query.id;
		Address.destroy({id: id}).exec(function cb(err){
			if(err){
				console.log(err);
				return res.view('address/index');
			}
			return res.redirect('address/index');
		});
	} 


	
};

