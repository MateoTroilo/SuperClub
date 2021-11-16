const verificationUser = (req, res, next) => {
  const User = req.session?.loggedUser
  if (!User) return res.redirect('/login')
  next()
}

module.exports = verificationUser
