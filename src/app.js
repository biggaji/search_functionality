const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

const indexRouter = require("./routes/index");

// app middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));


// configure view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use("/", indexRouter);

app.use((req, res,next) => {
    res.render("404", {pageName: "Page not found"});
});

app.listen("5000", () => {
    console.log("server running on port 5000");
});