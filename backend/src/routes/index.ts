import { Router } from "express";
import {
	listFarmers,
	createFarmer,
	listProducts,
	createProduct,
	listConsumers,
	createConsumer,
	createOrder,
	listOrders,
} from "../controllers/basic.js";
//import { payOrder } from "../controllers/payments.js";

const router = Router();
// farmers
router.get("/farmers", listFarmers);
router.post("/farmers", createFarmer);

//product
router.get("/products", listProducts);
router.post("/products", createProduct);

//consumers
router.get("/consumers", listConsumers);
router.post("/consumers", createConsumer);

//orders
router.get("/orders", listOrders);
router.post("/orders", createOrder);
//router.post("/orders/pay", payOrder);

export default router;


