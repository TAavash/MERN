const express = require("express");
const userProfile = require("../Controllers/userProfileController");
const app = express();

app.post("/userProfile", userProfile);


module.exports = app;   