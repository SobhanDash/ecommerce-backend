const { isValidEmail, isValidPassword } = require("../utils/UtilMethods");

/**
 * @params {*} req
 * @params {*} res
 * @params {*} next
 * @description
 * email validate - string
 * password validate
 * password == confirmPassword
 */

const registerInitChecks = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword === password &&
    isValidEmail(email) &&
    isValidPassword(password)
  ) {
    next();
  } else {
    res.status(401).send("Initial Checks Failed!");
  }
};

module.exports = registerInitChecks;
