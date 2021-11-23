const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const registerController = require("../controllers/registerControllers");


const validaciones = [
    check("usuario")
      .notEmpty().withMessage("Este campo es obligatorio").bail()
      .withMessage("Username invalido"),
    check("email").notEmpty().withMessage("Este campo es obligatorio").bail().isEmail().trim().withMessage("Email invalido"),
    check("password")
      .notEmpty().withMessage("Este campo es obligatorio").bail()
      .isLength({ min: 8 }).withMessage("Debe contener un minimo de 8 caracteres").matches(/(?![a-zA-Z]*$)(?![0-9]*$)[a-zA-Z0-9]+/)
      .withMessage("Debe contener un caracter y un numero como minimo").trim()
      .not().contains("password").withMessage("No debe contener la palabra 'password' "),
  ];
  
router.get("/", registerController.getRegister);
router.post("/", validaciones, registerController.postRegister);

module.exports = router;
  