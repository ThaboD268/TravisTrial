'use strict'
const path = require('path')
const express = require('express')
const session = require('express-session')
const identity = require('identity')
const User = require('./public/scripts/user')
const mainRouter = require('./mainRouter')
require('./controllers/signup')(identity)

// Initialize web app
const app = express()

app.use('/', mainRouter)

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, './public/scripts')))
app.use(express.static(path.join(__dirname, './public/images')))
app.use('/public', express.static('./public'))

app.use(passport.initialize())
app.use(passport.session())

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`)
})
