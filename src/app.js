const express = require("express");
const session = require("express-session");
const mainRoutes = require("./routes/mainRoutes");

const app = express();

const PORT = 3000;

console.clear();

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use("/", mainRoutes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
