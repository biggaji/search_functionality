require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

const indexRouter = require("./src/routes/index");
const { show404error } = require("./src/controller/404controlller");
const searchRouter = require("./src/routes/search");

// app middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));


// configure view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "src/views"));
app.use("/", indexRouter);
app.use("/", searchRouter);

// this middleware handles 404 page
app.use(show404error);

app.listen("5000", () => {
    console.log("server running on port 5000");
});