import mongoose, { Schema, type InferSchemaType } from "mongoose";


const ConsumerSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true, lowercase: true },
		phone: { type: String },
		address: { type: String },
		walletAddress: { type: String, index: true },
	},
	{ timestamps: true }
);

export type Consumer = InferSchemaType<typeof ConsumerSchema> & { _id: mongoose.Types.ObjectId };

export const ConsumerModel = mongoose.model<Consumer>("Consumer", ConsumerSchema);


