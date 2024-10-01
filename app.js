const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("./users/login.ejs");
});
app.listen("8080", () => {
  console.log("app is listening");
});
