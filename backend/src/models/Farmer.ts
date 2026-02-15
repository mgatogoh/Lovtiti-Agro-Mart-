import mongoose, { Schema, type InferSchemaType } from "mongoose";


const FarmerSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true, lowercase: true },
		phone: { type: String },
		location: { type: String },
		walletAddress: { type: String, index: true },
	},
	{ timestamps: true }
);

export type Farmer = InferSchemaType<typeof FarmerSchema> & { _id: mongoose.Types.ObjectId };

export const FarmerModel = mongoose.model<Farmer>("Farmer", FarmerSchema);


