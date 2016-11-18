const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

let mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:6565/lesson11'); // connect to users storage

// middleware to use for all requests
app.use((req, res, next) => {
	console.log(req.url); // logged url
	next();
});

// path - /api/users
app.use('/api', require('./routerUsersAPI'));

// path - /api/tasks
app.use('/api', require('./routerTasksAPI'));

// middleware for handling all errors
// ATTENTION - must be AFTER ALL middlewares (app.use(...)) for exclude errors
app.use((err, req, res, next) => {
	res.status(err.status ? err.status : 500).end(err.message);
});

app.all('/*', (req, res) => {
	res.status(400).json({ message: 'Undefinded URL - use /api/users OR /api/tasks OR /api/tasks_close_stat' });
});

app.listen(port);
console.log('Listening Task Manager CRUD API on port ' + port);
