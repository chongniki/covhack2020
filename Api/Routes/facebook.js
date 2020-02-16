'use strict'

const Router = require('koa-router')
const router = new Router()
const bodyParser = require('koa-bodyparser')
const axios = require('axios')

router.post('/send_posts', bodyParser() , async (ctx) => {
    const reqBody = ctx.request.body
    const posts = reqBody.posts
    const resp =  await axios.post('http://127.0.0.1:5000/data', {"messages": posts})
    ctx.body = { "data": resp.data }
})

module.exports = router
