const express = require('express')
const mainRoutes = require('./routes/mainRoutes')
const { check, validationResult, body } = require("express-validator");
const registerRoutes = require("./routes/registerRoutes");

const app = express()
const PORT = 3000

console.clear()

app.set("view engine", "ejs");

//validacion
app.use(express.urlencoded());
app.use(express.json());


app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use("/register", registerRoutes)
app.use('/', mainRoutes)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
