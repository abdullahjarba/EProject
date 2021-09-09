const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/catalog", shopController.getCatalog);

router.get("/cart", shopController.getCart);

module.exports = router;
