var express = require("express");
const { routes } = require("../app");
var router = express.Router();
var registerInitChecks = require("../middlewares/registerChecks");
var { register, registerSuperAdmin } = require("../controllers/register");
var check = require("../middlewares/checkSuperAdmin");

/* GET home page. */
router.get("/", function (req, res, next) {
  const sess = req.session;
  sess.username = "sobhan";
  res.render("index", { title: "Express" });
});

router.get("/test", function (req, res, next) {
  console.log("Redis Value", req.session.username);
  res.render("index", { title: "Express" });
});
/**
 * @requires {email, password, confirmPassword} - req.body
 * @description
 * Security, Performance & Edge Cases - 3 things to keep in mind while building api
 */

router.post("/register", registerInitChecks, register);
router.get("/super", check);
router.post("/register-super-admin", registerInitChecks, registerSuperAdmin);

module.exports = router;
