const express = require("express");
const mainRoutes = require("./assets/routes/mainRoutes");

const app = express();
const PORT = 3000;

console.clear();

app.use(express.static("assets"));
app.set("view engine", "ejs");

app.use("/", mainRoutes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
