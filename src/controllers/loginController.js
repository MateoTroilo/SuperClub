const { validationResult } = require("express-validator");

const controller = {
  getLogin: (_, res) => {
    res.render("pages/login");
  },

  postLogin: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("pages/login", { errors: errors.mapped(), old: req.body });
    } else {
      res.redirect("/");
    }
  },
};

module.exports = controller;
