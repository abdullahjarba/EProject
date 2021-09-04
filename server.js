const express = require("express");
const app = express();

const userRoutes = express.require("./Routes/userRoutes");
const orderItemRoutes = express.require("./Routes/orderItemRoutes");
const productRoutes = express.require("./Routes/productRoutes");
const orderRoutes = express.require("./Routes/orderRoutes");

app.get("/", function (req, res) {
    res.render();
  
});


app.use("/user",userRoutes);


app.use("/product", productRoutes);


app.use("/orderItem", orderItemRoutes);

app.use("/order", orderRoutes);


app.listen(8080,() => {
  console.log("server runing");
});
