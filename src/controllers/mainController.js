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
        res.render("pages/checkout");
    },

    getContact: (_, res) => {
        res.render("pages/contact");
    },

    getLogin: (_, res) => {
        res.render("pages/login");
    },

    getRegister: (_, res) => {
        res.render("pages/register");
    },

    getIndex: (_, res) => {
        res.render("pages/index", {
            teinteresan: productos.slice(0, 4),
            lomaspedido: productos,
            heros,
        });
    },

    getNotFound: (_, res) => {
        res.status(404).render("pages/notfound", {
            productos,
            msg: "No encontramos lo que buscas.",
        });
    },
    getProduct: (req, res) => {
        const { id } = req.params;
        const currentProduct = productos.find((product) => product.id === +id);
        if (!currentProduct)
            return res.status(404).render("pages/notfound", {
                productos,
                msg: "Artículo no encontrado.",
            });
        res.render("pages/product", {
            id,
            producto: currentProduct,
            productos,
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
};

module.exports = controller;
