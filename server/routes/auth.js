// * Require express
const express = require("express");

// * Get a router from that express instance
const router = express.Router()

// * Importing the controllers 
const { signup, login } = require('../controllers/auth.js')

// * All of the authentication routes will be post routes. We are sending data from the front end to the back end. 
// ? We want functions to run on each call, these are the controllers.
router.post('/signup')
router.post('/login')
