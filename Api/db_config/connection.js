'use strict'

const mongoose  = require('mongoose')

const connect = async() => {
	const config = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	const dbUrl = 'mongodb+srv://buggyman026:BXWT3-db@cluster0-k7g5j.mongodb.net/test?retryWrites=true&w=majority'
	return mongoose.connect(dbUrl, config)
}

const disconnect = async() => mongoose.connection.close()

module.exports = { connect, disconnect }