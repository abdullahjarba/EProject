const express = require("express");

const app = express();

const authRoutes = require("./Routes/auth");
const shopRoutes = require("./Routes/shop");
const adminRoutes = require("./Routes/admin");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(authRoutes);

app.use(shopRoutes);

app.use(adminRoutes);

app.listen(8080, () => {
  console.log("server is running");
});
