import express from "express";
import formidable from "express-formidable";

import { createProductController,
    getProductController,
    getSingleProductController,
    productPhotoController,
    deleteProductController,
    updateProductController,
    productFiltersController,
    productCountController,
    productListController,
    searchProductController,
    realtedProductController,
    productCategoryController,
    braintreeTokenController,
    braintreePaymentController,
    
 } from './../controllers/productController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// routes

router.post(
  "/create-product",
  formidable(), // Apply formidable middleware first
  requireSignIn,
  isAdmin,
  createProductController
);


router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );
// get product
router.get("/get-product", getProductController);


//single product
router.get("/get-product/:slug", getSingleProductController);


//get photo
router.get("/product-photo/:pid", productPhotoController);



//delete product
router.delete("/delete-product/:pid", deleteProductController);


//delete product
router.get("/product-filters", productFiltersController);


//product count
router.get("/product-count", productCountController);


//product count
router.get("/product-list/:page", productListController);
export default router;


//Serach Product
router.get("/search/:keyword", searchProductController);


//similar product
router.get("/related-product/:pid/:cid", realtedProductController);


//similar product
router.get("/product-category/:slug", productCategoryController);


// token
router.get("/braintree/token" , braintreeTokenController)

// payment

router.post("/braintree/payment",requireSignIn,braintreePaymentController)


