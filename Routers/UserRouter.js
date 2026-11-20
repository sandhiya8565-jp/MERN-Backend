const express = require("express");
const router = express.Router();
const {SignupUser} = require("../ControllersControllers/UserController");

router.post("/signup", SignupUser);

module.exports = router;