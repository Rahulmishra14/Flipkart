import express from 'express';
import { userLogin, userSignUp } from '../controller/user-controller.js';
import { getProducts,getProductById } from '../controller/product-controller.js';
import { addPaymentGateway } from '../controller/payment-controller.js';

export const router=express.Router();

router.post("/signup",userSignUp);
router.post("/login",userLogin);

router.get("/products",getProducts);
router.get("/products/:id",getProductById);

router.post("/payment",addPaymentGateway);
