import mongoose from "mongoose";
import { logInfo, logError } from "../utils/logger.js";

export async function connectToDatabase(): Promise<void> {
	try {
		await mongoose.connect(process.env.MONGO_URI!);
		logInfo("Connected to  Lovtiti MongoDB");
	} catch (error) {
		logError("Failed to connect to MongoDB", error);
		process.exit(1);
	}
}


