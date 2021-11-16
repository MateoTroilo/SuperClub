const { heros, productos } = require("../../productos");

const controller = {
    getCart: (req, res) => {
        if (!req.session.loggedUser) res.redirect("/login");  
        res.render("pages/cart", { productos });
    },

    getCheckout: (_, res) => {
        res.render("pages/checkout");
    },

    getContact: (_, res) => {
        res.render("pages/contact");
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
};

module.exports = controller;
