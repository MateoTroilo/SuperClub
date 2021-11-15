const express = require("express");
const { productos } = require("../../productos");
const mainController = require("../controllers/mainController");
const router = express.Router();

router.get("/product/:id", mainController.getProduct);
router.get("/cart", mainController.getCart);
router.get("/checkout", mainController.getCheckout);
router.get("/contact", mainController.getContact);
router.get("/register", mainController.getRegister);
router.get("/", mainController.getIndex);
router.get("*", mainController.getNotFound);

module.exports = router;
