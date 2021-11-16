const express = require('express')
const mainController = require('../controllers/mainController')
const verificationUser = require('../middlewares/verificationUser')
const router = express.Router()

router.get('/product/:id', mainController.getProduct)
router.get('/products/:category', mainController.getProductWithCategory)
router.get('/cart', verificationUser, mainController.getCart)
router.post('/cart', verificationUser, mainController.postCart)
router.get('/checkout', verificationUser, mainController.getCheckout)
router.get('/contact', mainController.getContact)
router.get('/login', mainController.getLogin)
router.get('/register', mainController.getRegister)
router.get('/', mainController.getIndex)
router.get('*', mainController.getNotFound)

module.exports = router
