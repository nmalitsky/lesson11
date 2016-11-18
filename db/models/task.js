var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TaskSchema   = new Schema({
	name: {
		type: String,
		required: true
	},
	status: { 
		type: String, 
		enum: ['open', 'close'],
		default: 'open',
		required: true
	}, 
	user: {
		type: String
	}
});

module.exports = mongoose.model('Task', TaskSchema);