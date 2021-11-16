const express = require('express')
const mainRoutes = require('./routes/mainRoutes')
const registerRoutes = require('./routes/registerRoutes')
const loginRoutes = require('./routes/loginRoutes')
const session = require('express-session')
const pathTracking = require('./middlewares/pathTracking')
const guestVerification = require('./middlewares/guestVerification')
const loggedUserMiddleware = require('./middlewares/loggedUserMiddleware')

const app = express()
const PORT = 3000

console.clear()

app.set('view engine', 'ejs')

//validacion
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(loggedUserMiddleware)
app.use(express.static('public'))

app.use(pathTracking)
app.use('/register', guestVerification, registerRoutes)
app.use('/login', guestVerification, loginRoutes)
app.use('/', mainRoutes)
app.set('views', 'src/views')

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
