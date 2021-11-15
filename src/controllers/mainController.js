const { heros, productos } = require("../../productos");

const controller = {
    getCart: (_, res) => {
        res.render("pages/cart", { productos });
    },

    getCheckout: (_, res) => {
        res.status(501).render("pages/notfound", {
            productos,
            msg: "Estamos trabajando para implementar esta vista",
            status: 501,
        });
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
            status: 404,
        });
    },
    getProduct: (req, res) => {
        const { id } = req.params;
        const currentProduct = productos.find((product) => product.id === +id);
        if (!currentProduct)
            return res.status(404).render("pages/notfound", {
                productos,
                msg: "Artículo no encontrado.",
                status: 404,
            });
        res.render("pages/product", {
            id,
            producto: currentProduct,
            productos,
        });
    },
};

module.exports = controller;
