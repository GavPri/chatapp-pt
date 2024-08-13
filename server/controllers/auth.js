// * ----- Auth Login & Sign Up Controllers

// * Imports for routes. 
const { connect } = require('getstream')
const bcrypt = require('bcrypt')
const StreamChat = require('stream-chat')
const crypto = require('crypto')

const signup = (req, res) => {
    // * try catch block 
    try {
        // ? What do we need to get from the front end? We can destructure it as we get everything from the req.body.
        const {fullName, username, password, phoneNumber} = req.body

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
    }
};
const login = (req, res) => {
  // * try catch block
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};



// * Exporting the contollers as an object
modules.exports = { signup , login}