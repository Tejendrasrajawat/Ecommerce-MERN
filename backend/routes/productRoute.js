const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
} = require("../controllers/productController");

// get api
router.route("/products").get(getAllProducts);
// post api
router.route("/products/new").post(createProduct);
// put api
router.route("/products/:id").put(updateProduct);

module.exports = router;
