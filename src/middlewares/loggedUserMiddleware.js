const Cart = require('../models/Cart')

const loggedUserMiddleware = (req, res, next) => {
  res.locals.isLogged = req.session.loggedUser
  res.locals.qty = Cart.lengthByUser(req.session.loggedUser?.email)
  next()
}

module.exports = loggedUserMiddleware
