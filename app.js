const express = require("express");
const path = require("path");

const PORT = 1313;

var app = express();

app.use(express.static("image"));

app.get("/static", (req, res) => {
  res.render("static");
});

const publicDirectory = path.join(__dirname, "./assets");
app.use(express.static(publicDirectory));

app.use(express.json());

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/", require("./routes/pages"));

app.listen(PORT, () => {
  console.log("Node Server & website is running on port: " + PORT);
});
