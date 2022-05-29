const express = require("express");
const app = express();
const fs = require("fs");
const port = 1999;

// app.get("/", (req, res) => {
//   res.send("Hi");
// });
function time(req, res, next) {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (day < 6 && day > 0 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.send("Error 404");
  }
}
app.use(time);
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
