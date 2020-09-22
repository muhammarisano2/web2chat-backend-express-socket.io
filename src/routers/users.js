const express = require('express')
const router = express.Router()
const usersController = require('../controlllers/user')

router
    .post('/register', usersController.register)
    .post('/login', usersController.login)

module.exports = router