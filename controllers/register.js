const User = require("../models/mongo");
const bcrypt = require("bcrypt");
/**
 *
 * @param {*} req
 * @param {*} res
 * check if email already exists
 * password hash
 * transform email to lowercase
 * save
 */

const saltRounds = 10;
const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      fullName: "Sobhan Dash",
    });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
};
const registerSuperAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      fullName: "Sobhan Dash",
      role: "SuperAdmin",
    });
    const savedUser = await newUser.save();
    console.log(req.session.User);
    req.session.User = savedUser;
    res.status(201).send(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
};

module.exports = { register, registerSuperAdmin };
