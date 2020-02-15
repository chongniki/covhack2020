'use strict'
const Router = require('koa-router')
const router = new Router()
const bodyParser = require('koa-bodyparser')
const User = require('../Model/User')

router.post('/register_user', bodyParser() ,(ctx) => {
    const {username, password} = ctx.request.body
    const user = new User({username, password})
    try{
        cnx.response.status = 201
        await user.save()
        ctx.body = { 'message': 'User is created in our system' }
    }catch(exception) {
        cnx.response.status = 400
        cnx.body = {error: 'Error saving the user'}
    }
})

router.post('/login_user', bodyParser() ,(ctx) => {
    const {username, password} = ctx.request.body
    const user = new User({username, password})
    try{
        cnx.response.status = 201
        await user.save()
        ctx.body = { 'message': 'User is created in our system' }
    }catch(exception) {
        cnx.response.status = 400
        cnx.body = {error: 'Error saving the user'}
    }
})

