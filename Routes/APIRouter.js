const express = require("express");
const router = express.Router();
const Product = require("../Controller/ProductController");
const menu = require("../Controller/MenuController")
const slide = require("../Controller/SlideController")
const quantity = require("../Controller/QuantityController")
const payment = require("../Controller/PaymentController")
const order = require("../Controller/OrdersController")

router.get("/api", (request, response) => {
  response.send("welcome to api ");
});

router.get("/api/product-list/:pr_id", Product.getProductList);
router.get("/api/product-all-list", Product.getAllProductList);
router.get("/api/get-order-datails/:email", order.getOrderDetails);
router.get("/api/product-type-list/:type", Product.getProductTypeList);
router.get("/api/menu-list", menu.getMenuList);
router.get("/api/quantity-list", quantity.getQuantityList);
router.get("/api/slide-list", slide.getSlideList);
router.get("/api/menu-type-list/:type_id", menu.getMenuTypeList);

router.post("/api/product-filter-list",Product.ProductFilter)
router.post("/api/search-Product", Product.searchProduct);


router.post("/api/gen-product-order-id",payment.genProductOrderId)
router.post("/api/verify-payment", payment.verifyPayment);

module.exports = router;
