const productController = require("../controllers/productController");

const express = require("express");

const router = express.Router();


router.post('/product' , productController.addProduct );

router.get('/products' , productController.ProductList );

router.put("/products/:id" ,productController.productPublished );

router.post("/products/:id" , productController.productUpdate);

router.delete("/products/:id" , productController.deleteProduct);


module.exports = router;