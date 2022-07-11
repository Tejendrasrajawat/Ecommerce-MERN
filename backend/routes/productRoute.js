const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

// get api
router.route("/products").get(getAllProducts);
// post api
router.route("/products/new").post(createProduct);
// put api
router.route("/products/:id").put(updateProduct);
// delete api
router.route("/products/:id").delete(deleteProduct).get(getProductDetails);

module.exports = router;
