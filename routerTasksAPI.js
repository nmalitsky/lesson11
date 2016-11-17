const express = require('express');
let Task = require('./db/models/task'); 

const TaskObj = require('./task');

const routerTasksAPI = express.Router();

// on routes that end in /tasks
// ----------------------------------------------------
routerTasksAPI.route('/tasks')

	// create the task (accessed at POST http://localhost:3000/api/tasks)
	.post((req, res) => {

        	let task = new Task(new TaskObj(req.body));

		task.save(err => {
			if(err) {
				res.status(400).send(err);
			} else {
				res.status(200).json({ message: 'Task created'});
			}
		});
	})

	// get all (req.query is ZERO) or some (filtered by req.query) tasks (accessed at GET http://localhost:3000/api/tasks)
	.get((req, res) => {

	        Task.find(new TaskObj(req.query).toSearch(), (err, tasks) => {
			if(err) {
				res.status(400).send(err);
			} else {
		            	res.status(200).json(tasks);
			}
	        });

	})

	// delete all (req.body is ZERO) or some (filtered by req.body) tasks (accessed at DELETE http://localhost:3000/api/tasks)
	.delete((req, res) => {

		Task.remove(new TaskObj(req.body).toSearch(), (err) => { // {} - remove all collection
			if(err) {
				res.status(400).send(err);
			} else {
		       		res.status(200).json({ message: 'Tasks are deleted' });
			}
		});
	});


// on routes that end in /tasks/:task_id
// ----------------------------------------------------
routerTasksAPI.route('/tasks/:task_id')

	.get(function(req, res) {

        	Task.findById(req.params.task_id, (err, task) => {
			if(err) {
				res.status(400).send(err);
			} else {
	            		res.status(200).json(task);
			}
        	});
    	})


	.put(function(req, res) {
		Task.findById(req.params.task_id, (err, task) => {
			if(err) {
				res.status(400).send(err);
			} else {
				let taskObj = new TaskObj(req.body).toSearch(); // toSearch() need if NOT COMPLETE obj properties in req.body, example only: { "status": "close" }
				Object.keys(taskObj).forEach(prop => { task[prop] = taskObj[prop]; });

				task.save((err) => {
					if(err) {
						res.status(400).send(err);
					} else {
						res.status(200).json({ message: 'Task updated' });
					}
				});
			}
	        });
	})

	.delete(function(req, res) {
		Task.remove({_id: req.params.task_id}, (err) => {
			if(err) {
				res.status(400).send(err);
			} else {
		       		res.status(200).json({ message: 'Task deleted' });
			}
		});
	});

module.exports = routerTasksAPI;