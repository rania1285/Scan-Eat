const usercontroller = require("../controllers/user");
const authFbcontroller = require("../controllers/authFb");
const authEmailcontroller = require("../controllers/authEmail");
const regEmailcontroller = require("../controllers/RegEmail");

module.exports.setup = function (app) {
  app.post("/api/user/create", usercontroller.addUser);

  app.post("/api/user/facebook_auth", authFbcontroller.facebookAuth);
  app.post("/api/user/Login", authEmailcontroller.login);
  app.post("/api/user/Register", regEmailcontroller.register);
};
