const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /shop => GET
router.get('/', shopController.getIndex);

// /shop/products => GET
router.get('/products', shopController.getProducts);

// /shop/products/:productId => GET
router.get('/products/:productId', shopController.getProduct);

// /shop/cart => GET
router.get('/cart', isAuth, shopController.getCart);

// /shop/cart => POST
router.post('/cart', isAuth, shopController.postCart);

// /shop/cart-delete-item => POST
router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);

// /shop/ccheckout => GET
router.get('/checkout', isAuth, shopController.getCheckout);

// /shop/orders => GET
router.get('/orders', isAuth, shopController.getOrders);

// /shop/orders/:orderId => GET
router.get('/orders/:orderId', isAuth, shopController.getInvoice);

module.exports = router;
