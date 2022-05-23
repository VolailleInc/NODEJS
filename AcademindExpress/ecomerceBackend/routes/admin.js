const express = require("express");

const path = require("path");

const rootDir = require("../utils/path.js");

const router = express.Router();

// /admin/add-product=>GET
router.get("/", (req, res, next) => {
  res.status(200).sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product=>POST
router.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
