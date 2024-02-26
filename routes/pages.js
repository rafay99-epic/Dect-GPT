const express = require("express");
const router = express.Router();

//This will render the home page
router.get("/", (req, res) => {
  res.render("./pages/index");
});

module.exports = router;
