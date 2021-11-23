const { validationResult } = require('express-validator')
const user = require('../models/User')
const bcrypt = require('bcrypt')

const controller = {
  getLogin: (req, res) => {
    res.render('pages/login')
  },

  postLogin: (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.render('pages/login', {
        errors: errors.mapped(),
        old: req.body,
      })
    } else {
      let users = user.obtenerUsuarios()
      for (let i = 0; i < users.length; i++) {
        if (
          users[i].email == req.body.email &&
          bcrypt.compareSync(req.body.password, users[i].password)
        ) {
          req.session.loggedUser = users[i]
          return res.redirect(req.session?.history?.prev || '/')
        }
      }
      if (!req.session.loggedUser) {
        return res.render('pages/login', {
          errors: errors.mapped(),
          old: req.body,
        })
      }
    }
  },
}


module.exports = controller
