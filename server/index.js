// * Creating a basic express node.js server
const express = require("express");

// * Cross origin requests
const cors = require("cors");

//  * Create an App instance
const app = express();

// *Specify the port for the backend
const PORT = process.env.PORT || 5000;

// *Using dotenv to call enviorment variables.
require("dotenv").config();
