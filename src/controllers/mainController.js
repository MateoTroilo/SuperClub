const { heros, productos } = require("../../productos");
const Cart = require("../models/Cart");
const fetch = require("node-fetch");
const https = require("https");
const agent = new https.Agent({
    rejectUnauthorized: false,
});

let email = "agirlhasnoname@digitalhouse.com";

const controller = {
    getCart: async (req, res) => {
        let cart = Cart.findByUser(
            req.session.loggedUser?.email || email
        )?.cart;
        let products = [];
        if (!cart) res.render("pages/cart", { products, productos });
        else {
            for (const cartProduct of cart) {
                try {
                    const request = await fetch(
                        `https://dhfakestore.herokuapp.com/api/products/${cartProduct.product}`,
                        { agent }
                    );
                    let product = await request.json();
                    product.qty = cartProduct.qty;
                    delete product.mostWanted;
                    delete product.description;
                    delete product.category;

                    products.push(product);
                } catch (error) {
                    console.error(error);
                }
            }
            res.render("pages/cart", { products });
        }
    },

    getCheckout: (_, res) => {
      res.status(501).render("pages/notfound", {
          productos,
          msg: "Estamos trabajando para implementar esta vista",
          status: 501,
      })},

    getContact: (_, res) => {
        res.render("pages/contact");
    },

    getLogin: (_, res) => {
        res.render("pages/login");
    },

    getRegister: (_, res) => {
        res.render("pages/register");
    },


    getNotFound: (_, res) => {
        res.status(404).render("pages/notfound", {
            productos,
            msg: "No encontramos lo que buscas.",
            status: 404,
        });
    },
    
    postCart: (req, res) => {
        let { product } = req.body;
        let cartData = {
            user: req.session.loggedUser?.email || email,
            product,
        };
        Cart.addCart(cartData);
        res.render("pages/cart", { productos });
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
          status: 404
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
        status:404
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
          status:404
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
      const products = await (
        await fetch(
          'https://dhfakestore.herokuapp.com/api/products/mostwanted'
        )
      ).json()
      res.status(501).render('pages/notfound', {
        productos: products.slice(0, 5),
        msg: 'Algo salio mal.',
        status:501
      })
    }
  },
}

module.exports = controller
