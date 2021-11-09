const express = require("express");
const data = require("./productos.js");
const app = express();
const port = 3000;
const { heros, productos } = data;
console.clear();

app.use(express.static("assets"));
app.set("view engine", "ejs");

app.get("/product/:id", (req, res) => {
    const { id } = req.params;
    res.render("pages/product", { id, productos });
});
app.get("/cart", (_, res) => res.render("pages/cart", { productos }));
app.get("/checkout", (_, res) => res.render("pages/checkout"));
app.get("/contact", (_, res) => res.render("pages/contact"));
app.get("/login", (_, res) => res.render("pages/login"));
app.get("/register", (_, res) => res.render("pages/register"));
app.get("/", (_, res) =>
    res.render("pages/index", {
        teinteresan: productos.slice(0, 4),
        lomaspedido: productos,
        image: "img/profile-pic.png",
        name: "marco",
        heros,
    })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
