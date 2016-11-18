'use strict';

module.exports = class Task {
	constructor (task) {
		this.name = task.name;
		this.status = task.status;
		this.user = task.user;
	}

	show() {
		console.log(`Task: ${this.name}, status: ${this.status}, linked to user: ${this.user}`);
	}

	toSearch() {
		let obj = {};

		if(this.name) obj['name'] = this.name;
		if(this.status) obj['status'] = this.status;
		if(this.user) obj['user'] = this.user;

		return obj;
	}

	get obj() {
		return {name: this.name, status: this.status, user: this.user};
	}
}

