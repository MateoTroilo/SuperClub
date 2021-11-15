const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

router.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const currentProduct = productos.find((product) => product.id === +id);
  if (!currentProduct) return res.render("pages/notfound", { productos });
  res.render("pages/product", { id, producto: currentProduct, productos });
});
router.get("/cart", mainController.getCart);
router.get("/checkout", mainController.getCheckout);
router.get("/contact", mainController.getContact);
router.get("/login", mainController.getLogin);
router.get("/register", mainController.getRegister);
router.get("/", mainController.getIndex);
router.get("*", mainController.getNotFound);

module.exports = router;
