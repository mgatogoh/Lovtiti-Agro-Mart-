import mongoose, { Schema, type InferSchemaType } from "mongoose";

const OrderSchema = new Schema(
	{
		consumerId: { type: Schema.Types.ObjectId, ref: "Consumer", required: true },
		items: [
			{
				productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
				quantity: { type: Number, required: true, min: 1 },
				priceWei: { type: String, required: true },
			},
		],
		totalWei: { type: String, required: true },
		status: {
			type: String,
			enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
			default: "pending",
		},
		paymentTxHash: { type: String },
	},
	{ timestamps: true }
);

export type Order = InferSchemaType<typeof OrderSchema> & { _id: mongoose.Types.ObjectId };

export const OrderModel = mongoose.model<Order>("Order", OrderSchema);


