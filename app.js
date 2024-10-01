const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("./listings/home.ejs");
});
app.listen("8080", () => {
  console.log("app is listening");
});
