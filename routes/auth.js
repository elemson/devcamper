var express = require("express");
var router = express.Router();
const { register } = require("../controllers/auth");

router.route("/").post(register);

module.exports = router;
