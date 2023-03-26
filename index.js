// Imports
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const { router } = require("./controllers/routes.js");


// Initializing
const port = 3005;
const hostname = "127.0.0.1"; //localhost
// const hostname = "92.255.77.197"; //timeweb

const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);

// Routes
app.get("/", (req, res) => {
  res.render("layouts/main", {
    message: "Hello World!!!",
  });
});

// Running an App
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
