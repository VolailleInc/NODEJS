const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  //With the below code you should always write Document module in full
  //The is shorten below just produce the form

  //The route below receives the form input from above.
  //This middleware can come before the "/add-product" middleware
  //and still work properly. The most important thing is for it to come
  // before the root ('/') middleware.

  //Note the order of the parameters req,res and next is very important
  // but you can ommit any if you dont need it in your current middleware
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
