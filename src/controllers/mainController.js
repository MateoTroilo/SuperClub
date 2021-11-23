const { heros } = require('../../productos')
const Cart = require('../models/Cart')
const fetch = require('node-fetch')
const https = require('https')
const Productos = require('../models/Productos')
const agent = new https.Agent({
  rejectUnauthorized: false,
})

const controller = {
  getCart: async (req, res) => {
    const productos = await Productos.getData()
    let cart = Cart.findByUser(req.session.loggedUser?.email)?.cart
    let products = []
    if (!cart) res.render('pages/cart', { products, productos })
    else {
      for (const cartProduct of cart) {
        try {
          const product = await Productos.findBy(cartProduct.product)
          product.qty = cartProduct.qty
          delete product.mostWanted
          delete product.description
          delete product.category

          products.push(product)
        } catch (error) {
          console.error(error)
        }
      }
      res.render('pages/cart', { products })
    }
  },

  getCheckout: async (_, res) => {
    const productos = await Productos.getData()
    res.status(501).render('pages/notfound', {
      productos,
      msg: 'Estamos trabajando para implementar esta vista',
      status: 501,
    })
  },

  getContact: (_, res) => {
    res.render('pages/contact')
  },

  getLogin: (_, res) => {
    res.render('pages/login')
  },

  getRegister: (_, res) => {
    res.render('pages/register')
  },

  getNotFound: async (_, res) => {
    const productos = await Productos.getData()
    res.status(404).render('pages/notfound', {
      productos,
      msg: 'No encontramos lo que buscas.',
      status: 404,
    })
  },

  postCart: async (req, res) => {
    let { product } = req.body
    let cartData = {
      user: req.session.loggedUser?.email,
      product,
    }
    Cart.addCart(cartData)
    res.redirect(req.session?.history?.prev)
  },

  getProductWithCategory: async (req, res) => {
    try {
      const { category } = req.params
      const productsWithCategorys = (await Productos.getData()).filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )

      if (!productsWithCategorys.length) {
        const productos = await Productos.getData()
        return res.status(404).render('pages/notfound', {
          productos: productos.slice(0, 5),
          msg: 'Categoría no encontrada',
          status: 404,
        })
      }

      res.render('pages/productsSort', {
        title: `Productos de ${category}`,
        productos: productsWithCategorys,
      })
    } catch (error) {
      const productos = await Productos.getData()
      res.status(404).render('pages/notfound', {
        productos: productos.slice(0, 5),
        msg: 'Categoría no encontrada',
        status: 404,
      })
    }
  },

  getIndex: async (req, res) => {
    try {
      const mostwanted = await Productos.findBy('mostwanted')
      const teInteresan = await Productos.findBy('suggested')

      res.render('pages/index', {
        teinteresan: teInteresan.slice(0, 5),
        lomaspedido: mostwanted.slice(0, 10),
        heros,
      })
    } catch (error) {
      const mostwanted = await Productos.getData()
      res.status(500).render('pages/notfound', {
        productos: mostwanted.slice(0, 5),
        msg: 'Algo salio mal.',
        status: 500,
      })
    }
  },

  getProduct: async (req, res) => {
    try {
      const { id } = req.params
      let currentProduct
      try {
        currentProduct = await Productos.findBy(id)
      } catch (error) {
        const products = await Productos.getData()
        return res.status(404).render('pages/notfound', {
          productos: products.slice(0, 5),
          msg: 'Artículo no encontrado.',
          status: 404,
        })
      }

      const teInteresaConCategoria = await Productos.findBy(`${id}/related`)

      res.render('pages/product', {
        id,
        producto: currentProduct,
        productos: teInteresaConCategoria.slice(0, 5),
      })
    } catch (error) {
      const products = await Productos.getData()
      res.status(500).render('pages/notfound', {
        productos: products.slice(0, 5),
        msg: 'Algo salio mal.',
        status: 500,
      })
    }
  },
}

module.exports = controller
