const path = require("path");

const express = require("express");
const { body } = require("express-validator/check");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body("price").isFloat(),
    body("description")
      .isLength({ min: 5, max: 400 })
      .trim(),
    body("imageUrl")
      .trim()
      .isString()
      .not()
      .isEmpty()
  ],
  isAuth,
  adminController.postAddProduct
);

// /admin/edit-product/:productId => GET
router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

// /admin/edit-product => POST
router.post(
  "/edit-product",
  [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body("price").isFloat(),
    body("description")
      .isLength({ min: 5, max: 400 })
      .trim(),
    body("imageUrl")
      .trim()
      .isString()
      .not()
      .isEmpty()
  ],
  isAuth,
  adminController.postEditProduct
);

// /admin/product/:productId => DELETE
router.delete("/product/:productId", isAuth, adminController.deleteProduct);

module.exports = router;
