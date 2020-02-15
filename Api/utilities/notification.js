'use strict'

const twillo = require('twilio')
const accountSid = 'ACf6e0e256a52580175c718059a888a1cb'
const authToken = '2974a94f91a0b8f0d466cb65037f41ac';
const client = twillo(accountSid, authToken)

function sendMessage(message) {
    client.messages.create({
     body: 'Your child is in wrong hands',
     from: '+447480780255',
     to: '+447510616477'
    }).then(message => console.log(message.sid)) 
    .catch(error => console.log(error.message))
}

module.exports = { sendMessage }