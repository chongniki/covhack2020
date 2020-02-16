'use strict'

const twilio = require('twilio')
const env = require('dotenv')
env.config()

const accountSid  = process.env.SID
const authToken = process.env.Token
const client = twilio(accountSid, authToken)
const phoneNumber = process.env.Phone

function sendMessage(message) {
    client.messages.create({
        body: 'CodePro',
        from: phoneNumber,
        to: '+447510616477'
   }).then(message => console.log(message.sid)).catch((error) => {
       console.log('error occured!', error)
   })
}


module.exports = { sendMessage }