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

  getProductWithCategory: async (req, res) => {
    try {
      const { category } = req.params
      const productsWithCategorys = (
        await (
          await fetch(`https://dhfakestore.herokuapp.com/api/products/`)
        ).json()
      ).filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
      
      if (!productsWithCategorys.length) {
        const productos = await (
          await fetch(`https://dhfakestore.herokuapp.com/api/products/`)
        ).json()
        return res.status(404).render('pages/notfound', {
          productos: productos.splice(0, 5),
          msg: 'categoria no encontrada',
        })
      }

      res.render('pages/productsSort', {
        title: `Productos de ${category}`,
        productos: productsWithCategorys,
      })
    } catch (error) {
      const productos = await (
        await fetch(`https://dhfakestore.herokuapp.com/api/products/`)
      ).json()
      res.status(404).render('pages/notfound', {
        productos: productos.splice(0, 5),
        msg: 'categoria no encontrada',
      })
    }
  },

  getIndex: async (_, res) => {
    try {
      const products = await (
        await fetch(
          'https://dhfakestore.herokuapp.com/api/products/mostwanted '
        )
      ).json()
      const teInteresan = await (
        await fetch('https://dhfakestore.herokuapp.com/api/products/suggested')
      ).json()

      res.render('pages/index', {
        teinteresan: teInteresan.slice(0, 5),
        lomaspedido: products.slice(0, 10),
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
      const { id } = req.params
      let currentProduct
      try {
        const req = await fetch(
          `https://dhfakestore.herokuapp.com/api/products/${id}`
        )
        currentProduct = await req.json()
      } catch (error) {
        const products = await (
          await fetch(
            'https://dhfakestore.herokuapp.com/api/products/mostwanted'
          )
        ).json()
        return res.status(404).render('pages/notfound', {
          productos: products.slice(0, 5),
          msg: 'Artículo no encontrado.',
        })
      }

      const teInteresaConCategoria = await (
        await fetch(
          `https://dhfakestore.herokuapp.com/api/products/${id}/related`
        )
      ).json()

      res.render('pages/product', {
        id,
        producto: currentProduct,
        productos: teInteresaConCategoria.splice(0, 5),
      })
    } catch (error) {
      res.status(501).redirect('/')
    }
  },
}

module.exports = controller
