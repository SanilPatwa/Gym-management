const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/home", (req, res) => {
  res.render("./listings/home.ejs");
});
app.get("/home", (req, res) => {
  res.render("./users/login.ejs");
});
app.listen("8080", () => {
  console.log("app is listening");
});
