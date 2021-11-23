const guestVerification = (req, res, next) => {
  const User = req.session?.loggedUser
  if (User) return res.redirect('/')
  next()
}

module.exports = guestVerification
