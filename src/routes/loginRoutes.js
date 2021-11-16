const express = require("express");
const validateLoginForm = require("../middlewares/validateLoginForm");
const loginController = require("../controllers/loginController");

const router = express.Router();

router.get("/", loginController.getLogin);
router.post("/", validateLoginForm, loginController.postLogin);

module.exports = router;
