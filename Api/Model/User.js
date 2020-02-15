'use strict';

const mongoose = require('mongoose');
const {connect, disconnect} = require('../db_config/connection')

const userSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true
    }, 

    password: {
        type: String, 
        required: true, 
        min: 6
    }
})

const User = mongoose.model('User', userSchema)


Userschema.pre('save', async function() {
	const unencryptedPassword = this.password
	const saltRound = 10
	const encryptedPassword = await bcrypt.hash(unencryptedPassword, saltRound)
	this.password = encryptedPassword
	this.dateRegistered = Date.now()
})


Userschema.statics.findByUsername = async function(username){
	if(email === undefined) throw new Error('Username cannot be undefined')
	try{
		await connect()
		const result = await User.findOne({username})
		if(result == null) throw new Error('Cannot find user with this details in our system') 
		await disconnect()
		return result
	}catch(error){
		throw new Error(`Error performing this operation`)
	} 
}


Userschema.methods.generateJwt = async function() {
	try{
		await connect()
		const date = Date.now()
		const webTokenPayload = {id: this._id, date}
		const tokenSecret = 'bf91c77e9c8901104094c9bc56435cb1f0a451416e7ca8891a5225b3a962db55be1daf9a8fe0956b1e559c373708d72daf53d5a82f396caf55c833d871e4a67c';
		const jwtToken = await jwt.sign({webTokenPayload}, tokenSecret)
		await this.updateOne({$push: {tokens: jwtToken} })
		await disconnect()
		return {token: jwtToken}
	}catch(error){
		console.log(error.message)
		throw new Error('Error, generating the token')
	}
}



module.exports = User