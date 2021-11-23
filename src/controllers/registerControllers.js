const { validationResult } = require('express-validator')
const user = require('../models/User')

const registerController = {
  getRegister: (req, res) => {
    res.render('pages/register')
  },
  postRegister: (req, res) => {
    let errors = validationResult(req)

    if (errors.isEmpty()) {
      const usuarioEncontrado = user.findByEmail(req.body.email)
      if (usuarioEncontrado) {
        res.render('pages/register', {
          errors: { email: { msg: 'Ya existe un usuario con este mail' } },
        })
      } else {
        user.addUser(req.body)
      }
      res.render('pages/register', {
        msgExito: 'Se registro satifactoriamente!',
      })
    } else {
      console.log(errors.errors)
      console.log(req.body)
      res.render('pages/register', { errors: errors.mapped(), old: req.body })
    }
  },
}

module.exports = registerController
