// * ----- Auth Login & Sign Up Controllers

// * Imports for routes. 
const { connect } = require('getstream')
const bcrypt = require('bcrypt')
const StreamChat = require('stream-chat')
const crypto = require('crypto')

// * creating enviormental variables to keep data safe. 
const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = (req, res) => {
    // * try catch block 
    try {
        // ? What do we need to get from the front end? We can destructure it as we get everything from the req.body.
        const {fullName, username, password, phoneNumber} = req.body
        // * Creating a random userID using crypto for each user
        // * This will create a random string of 16 hexodecimal digits
        const  userId = crypto.randomBytes(16).toString('hex')

        // * Make a connection to stream with new user.
        // * We need to pass a few things to this. 
        // ! These variable need to be kept a secret, we use enviornment variables. 
        const serverClient = connect(api_key, api_secret, app_id)

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