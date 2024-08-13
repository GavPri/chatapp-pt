// * Require express
const express = require("express");

// * Get a router from that express instance
const router = express.Router()

// * All of the authentication routes will be post routes. We are sending data from the front end to the back end. 
router.post('/signup')
router.post('/login')
