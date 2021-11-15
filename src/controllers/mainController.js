const { heros, productos } = require('../../productos')
const fetch = require('node-fetch')

const controller = {
  getCart: (_, res) => {
    res.render('pages/cart', { productos })
  },

  getCheckout: (_, res) => {
    res.render('pages/checkout')
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

  getIndex: async (_, res) => {
    try {
      const products = await (
        await fetch('https://dhfakestore.herokuapp.com/api/products/')
      ).json()
      const teInteresan = await (
        await fetch('https://dhfakestore.herokuapp.com/api/products/suggested')
      ).json()

      res.render('pages/index', {
        teinteresan: teInteresan.slice(0, 5),
        lomaspedido: products,
        heros,
      })
    } catch (error) {
      res.status(501).redirect('/')
    }
  },

  getNotFound: (_, res) => {
    res.status(404).render('pages/notfound', {
      productos,
      msg: 'No encontramos lo que buscas.',
    })
  },
  getProduct: async (req, res) => {
    try {
      const teInteresan = await (
        await fetch('https://dhfakestore.herokuapp.com/api/products/suggested')
      ).json()
      const products = await (
        await fetch('https://dhfakestore.herokuapp.com/api/products/')
      ).json()
      const { id } = req.params
      const currentProduct = products.find((product) => product.id === +id)
      if (!currentProduct)
        return res.status(404).render('pages/notfound', {
          productos: teInteresan,
          msg: 'Artículo no encontrado.',
        })
      res.render('pages/product', {
        id,
        producto: currentProduct,
        productos: teInteresan,
      })
    } catch (error) {
      res.status(501).redirect('/')
    }
  },
}

module.exports = controller
