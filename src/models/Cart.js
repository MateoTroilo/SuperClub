const fs = require('fs')
const path = require('path')

const Cart = {
  fileName: path.resolve(__dirname, '../data/carts.json'),

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
  },

  generateId: function () {
    let allCarts = this.getData()
    let finalCart = allCarts.pop()
    if (finalCart) {
      return finalCart.id + 1
    }
    return 1
  },

  findByUser: function (userEmail) {
    let allCarts = this.getData()
    let cart = allCarts.find((cart) => cart.user === userEmail)
    return cart
  },

  findCartIndex: function (userEmail) {
    let allCarts = this.getData()
    let cartIndex = allCarts.findIndex((cart) => cart.user === userEmail)
    return cartIndex === -1 ? null : cartIndex
  },

  addCart: function (cartData) {
    if (!cartData.user) return false
    let allCarts = this.getData()
    let cartIndex = this.findCartIndex(cartData.user)

    if (!cartIndex) {
      let newCart = {
        id: this.generateId(),
        user: cartData.user,
        cart: [
          {
            product: cartData.product,
            qty: 1,
          },
        ],
      }
      allCarts.push(newCart)
    } else {
      let productIndex = allCarts[cartIndex].cart.findIndex(
        (product) => product.product == cartData.product
      )
      if (productIndex != -1) {
        allCarts[cartIndex].cart[productIndex].qty++
      } else {
        allCarts[cartIndex].cart.push({
          product: cartData.product,
          qty: 1,
        })
      }
    }

    fs.writeFileSync(this.fileName, JSON.stringify(allCarts, null, '  '))
    return true
  },
}

module.exports = Cart
