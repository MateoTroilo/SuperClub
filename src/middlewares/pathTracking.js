const pathTracking = (req, res, next) => {
  if (req.session?.history?.current !== req.originalUrl)
    req.session.history = {
      prev: req.session?.history?.current,
      current: req.originalUrl,
    }
  next()
}

module.exports = pathTracking
