const express = require('express')
const app = express()
const port = 3000

app.use(express.static('assets'))
app.set('view engine', 'ejs')

app.get('/', (_, res) => res.render('index'))
app.get('/cart', (_, res) => res.render('cart'))
app.get('/checkout', (_, res) => res.render('checkout'))
app.get('/contact', (_, res) => res.render('contact'))
app.get('/product:id', (req, res) => res.render('product'))
app.get('/login', (_, res) => res.render('login'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
