const { heros, productos } = require("../../productos");

const controller = {
  getCart: (_, res) => {
    res.render("pages/cart", { productos });
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
    res.render("pages/notfound", { productos });
  },
};

module.exports = controller;
