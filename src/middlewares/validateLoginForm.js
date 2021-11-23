const { check } = require("express-validator");

const validations = [
  check("email")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .bail()
    .isEmail()
    .trim()
    .withMessage("Ingrese un email válido"),
  check("password").notEmpty().withMessage("Este campo es obligatorio"),
];

module.exports = validations;
