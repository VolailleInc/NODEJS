const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.redirect("<h1>Hello From Express to users</h1>");
});

module.exports = router;
