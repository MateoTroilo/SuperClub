const express = require("express");
const productos = require("./productos.js");
const app = express();
const port = 3000;

console.clear();

app.use(express.static("assets"));
app.set("view engine", "ejs");

app.get("/", (_, res) => res.render("pages/index"));
app.get("/cart", (_, res) => res.render("pages/cart"));
app.get("/checkout", (_, res) => res.render("pages/checkout"));
app.get("/contact", (_, res) => res.render("pages/contact"));
app.get("/product/:id", (req, res) => {
    const { id } = req.params;
    res.render("pages/product", { id, productos });
});
app.get("/login", (_, res) => res.render("pages/login"));
app.get("/register", (_, res) => res.render("pages/register"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
