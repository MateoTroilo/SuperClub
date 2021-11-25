const pathTracking = (req, res, next) => {
  if (req.session?.history?.current !== req.originalUrl) {
    const path = {
      prev: req.session?.history?.current,
      current: req.originalUrl,
    }
    req.session.history = path
  }
  next()
}

module.exports = pathTracking
