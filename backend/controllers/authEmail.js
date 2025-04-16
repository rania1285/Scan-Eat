const User = require("../models/user");
var mongoose = require("mongoose");
const mongo = require("mongodb");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "zDqzHrfOm/62S6iH";
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).lean();
  console.log(req.body.email);
  if (!user) {
    return res.json({ status: "error", error: "Invalid email/password" });
  }

  if (await bcrypt.compare(password, user.password)) {
    // the email, password combination is successful

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      JWT_SECRET
    );

    return res.json({ status: "ok", data: token });
  }

  res.json({ status: "error", error: "Invalid email/password" });
};
