// * Creating a basic express node.js server
const express = require("express");

// * Cross origin requests
const cors = require("cors");

// * ------  App routes -------
const authRoutes = require("./routes/auth.js")

//  * Create an App instance
const app = express();

// *Specify the port for the backend
const PORT = process.env.PORT || 5000;

// *Using dotenv to call enviorment variables.
require("dotenv").config();

// * Setting up the apps middleware
app.use(cors()); // ? Allows us to use cross origin requests.
app.use(express.json()); // ? Allows us to use json payloads from the front end to the back end.
app.use(express.urlencoded()); // ? Built in middleware with express.js

// * ------  App routes -------

// ? Home route takes a url '/' , inthis case, create a call back function with req and res as parameters
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//  * Adding routes from routes/auth.js to be used across the application
// * specify the start of the url, and the routes we have imported above.
app.use('/auth', authRoutes)

// * Check to make sure the server is running
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
