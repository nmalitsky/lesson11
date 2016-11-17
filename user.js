'use strict';

module.exports = class User {
	constructor (user) {
		this.name = user.name;
		this.email = user.email;
	}

	show() {
		console.log(`User: ${this.name}, email: ${this.email}`);
	}

	toSearch() {
		let obj = {};

		if(this.name) obj['name'] = this.name;
		if(this.email) obj['email'] = this.email;

		return obj;
	}

	get obj() {
		return {name: this.name, email: this.email};
	}
}

