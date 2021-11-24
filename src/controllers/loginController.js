const { validationResult } = require('express-validator')
const user = require('../models/User')
const bcrypt = require('bcrypt')

const controller = {
  getLogin: (req, res) => {
    res.render('pages/login')
  },

  postLogin: (req, res) => {
    const errors = validationResult(req)
    console.log(req.body)
    if (!errors.isEmpty()) {
      res.render('pages/login', {
        errors: errors.mapped(),
        old: req.body,
      })
    } else {
      let users = user.obtenerUsuarios()
      const errorsCurrent = errors.mapped()
      for (let i = 0; i < users.length; i++) {
        if (users[i].email !== req.body.email) {
          errorsCurrent.email = 'invalid email'
          continue
        }

        if (!bcrypt.compareSync(req.body.password, users[i].password)) {
          errorsCurrent.password = 'invalid password'
          continue
        }

        req.session.loggedUser = users[i]
        return res.status(200).send({
          msg: 'accepted',
        })
      }
      if (!req.session.loggedUser) {
        console.log()
        return res.status(401).send({
          errors: errorsCurrent,
          old: req.body,
        })
      }
    }
  },
}

module.exports = controller
