

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getCatalog = (req, res, next) => {

  db.execute("SELECT * FROM products")
    .then((products) => {
      res.render("catalog", {
        prods: products[0],
        pageTitle: 'All Products',
        path: '/catalog'
      });
    })
    .catch((err) => {
      console.log("err");
    });

};

exports.getCart = (req, res, next) => {
  db.execute("SELECT * FROM cart_items")
    .then((items) => {
      res.render("cart", {
        prods: items[0],
        pageTitle: 'cart_items',
        path: '/cart'
      });
    })
    .catch((err) => {
      console.log("err");
    });

};
