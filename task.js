'use strict';

module.exports = class Task {
	constructor (task) {
		this.name = task.name;
		this.status = task.status;
		this.user_id = task.user_id;
	}

	show() {
		console.log(`Task: ${this.name}, status: ${this.status}, linked to user (ID): ${this.user_id}`);
	}

	toSearch() {
		let obj = {};

		if(this.name) obj['name'] = this.name;
		if(this.status) obj['status'] = this.status;
		if(this.user_id) obj['user_id'] = this.user_id;

		return obj;
	}

	get obj() {
		return {name: this.name, status: this.status, user_id: this.user_id};
	}
}

