import mongoose, { Schema, type InferSchemaType } from "mongoose";

const ProductSchema = new Schema(
	{
		farmerId: { type: Schema.Types.ObjectId, ref: "Farmer", required: true },
		name: { type: String, required: true },
		description: { type: String },
		priceWei: { type: String, required: true },
		stock: { type: Number, default: 0 },
		category: { type: String },
		images: [{ type: String }],
	},
	{ timestamps: true }
);

export type Product = InferSchemaType<typeof ProductSchema> & { _id: mongoose.Types.ObjectId };

export const ProductModel = mongoose.model<Product>("Product", ProductSchema);


