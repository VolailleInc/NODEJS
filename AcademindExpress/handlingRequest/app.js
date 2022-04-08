const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//Since request doesn't parse the body object
//we need to register a parser by installing a tool
//call body-parser and call it inside app.use()
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);
//app.use(express.urlencoded({extended:true}))
// app.use("/", (req, res, next) => {
//   console.log("This always runs!");
//   next();
// });

app.listen(3000);
