'use strict'

const Router = require('koa-router')
const router = new Router()
const bodyParser = require('koa-bodyparser')

router.post('/send_posts', bodyParser() ,(ctx) => {
    const reqBody = ctx.request.body
    const posts = reqBody.posts
    ctx.body = {'name': 'Vinayak', posts}
})

module.exports = router
