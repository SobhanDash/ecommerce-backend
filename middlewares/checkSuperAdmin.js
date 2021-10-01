const check = (req, res, next) => {
  if (req.session.User.role == "SuperAdmin") {
    res.send(200).send("success");
  }
  res.status(401).send("Needs to be Super Admin");
};

module.exports = check;
