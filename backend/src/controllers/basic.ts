import type { Request, Response } from "express";
import { FarmerModel } from "../models/Farmer.js";
import { ConsumerModel } from "../models/Consumer.js";
import { ProductModel } from "../models/Product.js";
import { OrderModel } from "../models/Order.js";
import { z } from "zod";

export async function listFarmers(_req: Request, res: Response) {
	const farmers = await FarmerModel.find().lean();
	res.json(farmers);
}

const upsertFarmerSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string().optional(),
	location: z.string().optional(),
	walletAddress: z.string().optional(),
});

export async function createFarmer(req: Request, res: Response) {
	const data = upsertFarmerSchema.parse(req.body);
	const created = await FarmerModel.create(data);
	res.status(201).json(created);
}

export async function listProducts(_req: Request, res: Response) {
	const products = await ProductModel.find().populate("farmerId").lean();
	res.json(products);
}

const upsertProductSchema = z.object({
	farmerId: z.string(),
	name: z.string(),
	description: z.string().optional(),
	priceWei: z.string(),
	stock: z.number().int().nonnegative().optional(),
	category: z.string().optional(),
	images: z.array(z.string()).optional(),
});

export async function createProduct(req: Request, res: Response) {
	const data = upsertProductSchema.parse(req.body);
	const created = await ProductModel.create(data);
	res.status(201).json(created);
}

export async function listConsumers(_req: Request, res: Response) {
	const consumers = await ConsumerModel.find().lean();
	res.json(consumers);
}

const upsertConsumerSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string().optional(),
	address: z.string().optional(),
	walletAddress: z.string().optional(),
});

export async function createConsumer(req: Request, res: Response) {
	const data = upsertConsumerSchema.parse(req.body);
	const created = await ConsumerModel.create(data);
	res.status(201).json(created);
}

const createOrderSchema = z.object({
	consumerId: z.string(),
	items: z.array(
		z.object({
			productId: z.string(),
			quantity: z.number().int().positive(),
			priceWei: z.string(),
		})
	),
	totalWei: z.string(),
});

export async function createOrder(req: Request, res: Response) {
	const data = createOrderSchema.parse(req.body);
	const created = await OrderModel.create({ ...data, status: "pending" });
	res.status(201).json(created);
}

export async function listOrders(_req: Request, res: Response) {
	const orders = await OrderModel.find().populate("consumerId").populate("items.productId").lean();
	res.json(orders);
}


