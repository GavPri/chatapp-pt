// * ----- Auth Login & Sign Up Controllers

// * Imports for routes.
const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat");
const crypto = require("crypto");

// * creating enviormental variables to keep data safe.
const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
  // * try catch block
  try {
    // ? What do we need to get from the front end? We can destructure it as we get everything from the req.body.
    const { fullName, username, password, phoneNumber } = req.body;
    // * Creating a random userID using crypto for each user
    // * This will create a random string of 16 hexodecimal digits
    const userId = crypto.randomBytes(16).toString("hex");

    // * Make a connection to stream with new user.
    // * We need to pass a few things to this.
    // ! These variable need to be kept a secret, we use enviornment variables.
    const serverClient = connect(api_key, api_secret, app_id);

    // * Use the server client to create a new user token
    // * Before that we need to create a new password. This will turn it from plain text to hashed.
    const hashedPassword = await bcrypt.hash(password, 10);

    // * creating the token
    const token = serverClient.createUserToken(userId);
    res
      .status(200)
      .json({ token, fullName, username, userId, hashedPassword, phoneNumber });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
const login = async (req, res) => {
  // * try catch block
  try {
    // * we only need username and password for login.
    const { username, password } = req.body;

    // * Connect the user to stream.
    const serverClient = connect(api_key, api_secret, app_id);

    // * Create a new instance of a stream chat. pass the keys
    const client = StreamChat.getInstance(api_key, api_secret);

    // * We have to query all the users from the database
    const { users } = await client.queryUsers({ name: username });

    // * check if the query returns a username
    if (!users.length)
      return res.status(400).json({ message: "User not found." });

    //  * If the user is found, compare their passowrd to the hashedpassword
    const success = await bcrypt.compare(password, users[0].hashedPassword);

    // * With a succesfull query we need to create a new user token.
    // * It has to be created using an existing user, hence `user[0].id`
    const token = serverClient.createUserToken(users[0].id);

    // * if this login is succesfull we need to send all the data back to the front end.
    if (success) {
      res
        .status(200)
        .json({
          token,
          fullName: users[0].fullName,
          username: username,
          userId: users[0].id,
        });
    } else {
        res.status(500).json({message: 'Issues logging in...try again'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// * Exporting the contollers as an object
module.exports = { signup, login };
