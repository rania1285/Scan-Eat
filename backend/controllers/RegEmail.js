const User = require("../models/user");
var mongoose = require("mongoose");
const mongo = require("mongodb");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  const { email, password: plainTextPassword } = req.body;
  console.log(req.body.email);
  /* if (!email || typeof email !== "string") {
    return res.json({ status: "error", error: "Invalid email" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  } */

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      email,
      password,
    });
    console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({ status: "error", error: "email already in use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
};
