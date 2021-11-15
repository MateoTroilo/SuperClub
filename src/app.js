const express = require('express')
const mainRoutes = require('./routes/mainRoutes')

const app = express()
const PORT = 3000

console.clear()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use('/', mainRoutes)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
