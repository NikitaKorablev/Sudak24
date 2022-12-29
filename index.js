const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const port = 3005;
const hostname = "127.0.0.1";

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

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.render("layouts/main", {
    message: "Hello World!!!",
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});