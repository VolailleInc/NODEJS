const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//Since request doesn't parse the body object
//we need to register a parser by installing a tool
//call body-parser and call it inside app.use()
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
//app.use(express.urlencoded({extended:true}))
// app.use("/", (req, res, next) => {
//   console.log("This always runs!");
//   next();
// });
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
