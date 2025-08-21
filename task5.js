const database = {
	studentsList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			tolov: false
		}
	},

	create(user) {
		this.studentsList[user.name] = user
		return this.studentsList
	},

	read(name) {
		return this.studentsList[name]
	},

	update(name, user) {
		this.studentsList[name] = { ...this.studentsList[name], ...user }
		return this.studentsList
	},

	delete(name) {
		delete this.studentsList[name]
		return `${name} o'chirildi`
	}
}

database.create({
	name: "vali",
	age: 25,
	id: 124,
	tolov: true
})

database.update("xamidullo", {
	name: "azizbek",
	age: 21,
	tolov: true
})

database.delete("azizbek")

console.table(database.studentsList)