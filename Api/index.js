'use strict'

const Koa = require('koa')
const cors = require('@koa/cors')
const app = new Koa()
const port = process.env.PORT || 8080


app.use(cors())
const facebook_router = require('./Routes/facebook')
app.use(facebook_router.routes())

app.listen(port)