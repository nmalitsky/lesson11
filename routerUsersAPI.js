const express = require('express');
let User = require('./db/models/user'); 

const UserObj = require('./user');

const routerUsersAPI = express.Router();

// on routes that end in /users
// ----------------------------------------------------
routerUsersAPI.route('/users')

	// create the user (accessed at POST http://localhost:3000/api/users)
	.post((req, res) => {

        	let user = new User(new UserObj(req.body));

		user.save(err => {
			if(err) {
				res.status(400).send(err);
			} else {
				res.status(200).json({ message: 'User created'});
			}
		});
	})

	// get all (req.query is ZERO) or some (filtered by req.query) users (accessed at GET http://localhost:3000/api/users)
	.get((req, res) => {

	        User.find(new UserObj(req.query).toSearch(), (err, users) => {
			if(err) {
				res.status(400).send(err);
			} else {
		            	res.status(200).json(users);
			}
	        });

	})

	// delete all (req.body is ZERO) or some (filtered by req.body) users (accessed at DELETE http://localhost:3000/api/users)
	.delete((req, res) => {

		User.remove(new UserObj(req.body).toSearch(), (err) => { // {} - remove all collection
			if(err) {
				res.status(400).send(err);
			} else {
		       		res.status(200).json({ message: 'Users are deleted' });
			}
		});
	});


// on routes that end in /users/:user_id
// ----------------------------------------------------
routerUsersAPI.route('/users/:user_id')

	.get(function(req, res) {

        	User.findById(req.params.user_id, (err, user) => {
			if(err) {
				res.status(400).send(err);
			} else {
	            		res.status(200).json(user);
			}
        	});
    	})


	.put(function(req, res) {
		User.findById(req.params.user_id, (err, user) => {
			if(err) {
				res.status(400).send(err);
			} else {
				let userObj = new UserObj(req.body).toSearch(); // toSearch() need if NOT COMPLETE obj properties in req.body, example only: { "email": "aav@bbs.ru" }
				Object.keys(userObj).forEach(prop => { user[prop] = userObj[prop]; });

				user.save((err) => {
					if(err) {
						res.status(400).send(err);
					} else {
						res.status(200).json({ message: 'User updated' });
					}
				});
			}
	        });
	})

	.delete(function(req, res) {
		User.remove({_id: req.params.user_id}, (err) => {
			if(err) {
				res.status(400).send(err);
			} else {
		       		res.status(200).json({ message: 'User deleted' });
			}
		});
	});

routerUsersAPI.route('/users_closed_tasks_stat')
	.get((req, res) => {
		User.aggregate([
			{
			  $lookup : {
			    from: "tasks",
			    localField: "name",
			    foreignField: "user",
			    as: "tasks"
			    }
			},
			{$unwind: "$tasks"},
			{
			  $match: {
			    "tasks.status": "close"
			    }
			},
			{
			  $project: {
			    name: 1, 
			    count: {
			      $add: [1]
			      }
			    }
			  },
			{
			  $group: {
			    _id: "$name", 
			    closed_tasks: {
			      $sum: "$count"
			      }
			    }
			  },
			{
			  $sort: {
			    closed_tasks: -1
			    }
			  }	
		], (err, result) => {
		if(err) {
			res.status(400).send(err);
		} else {
			res.status(200).json(result);
		}
	    });
	});


module.exports = routerUsersAPI;