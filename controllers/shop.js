exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getCatalog = (req, res, next) => {
  res.render("catalog");
};

exports.getCart = (req, res, next) => {
  res.render("cart");
};
