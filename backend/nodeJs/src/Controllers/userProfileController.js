const express = require("express");
const User = require("../models/User");
const router = express.Router();

const UserProfile = (req, res) => {
  //   const { name, email, contact, address } = req.body;
  const data = req.body;
  const userName = data.name;
  const userEmail = data.email;
  const userContact = data.contact;
  const userAddress = data.address;

  const newUserProfile = new UserProfile({
    name: userName,
    email: userEmail,
    contact: userContact,
    address: userAddress, // assuming these are coming from req.body
  });

  //   const newUserProfile = new UserProfile({ name, email, contact, address });
  newUserProfile
    .save()
    .then((data) => {
      res
        .status(201)
        .json({ message: "User profile added successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error occured", err });
    });
};

module.exports = UserProfile;
