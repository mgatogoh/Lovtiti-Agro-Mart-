// import type { Request, Response } from "express";
// import { z } from "zod";
// import { sendPayment } from "../services/payment.js";
// import { OrderModel } from "../models/Order.js";
// import { ProductModel } from "../models/Product.js";

// const payOrderSchema = z.object({ orderId: z.string() });

// export async function payOrder(req: Request, res: Response) {
// 	const { orderId } = payOrderSchema.parse(req.body);
// 	const order = await OrderModel.findById(orderId).lean();
// 	if (!order) return res.status(404).json({ message: "Order not found" });

// 	// naive split: pay the farmer of the first product
// 	const firstItem = order.items[0];
// 	if (!firstItem) return res.status(400).json({ message: "Order has no items" });
// 	const product = await ProductModel.findById(firstItem.productId).populate("farmerId");
// 	if (!product || !product.farmerId) return res.status(400).json({ message: "Product/farmer missing" });

// 	const farmer: any = product.farmerId; // populated
// 	if (!farmer.walletAddress) return res.status(400).json({ message: "Farmer wallet missing" });

// 	const result = await sendPayment(farmer.walletAddress, order.totalWei);
// 	await OrderModel.findByIdAndUpdate(orderId, { status: "paid", paymentTxHash: result.txHash });
// 	res.json({ ok: true, txHash: result.txHash });
// }


