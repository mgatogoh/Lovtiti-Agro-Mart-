import dotenv from "dotenv";
dotenv.config();

import { connectToDatabase } from "./config/db.js";
import app from "./app.js";
const port =process.env.PORT || 5000

async function start(): Promise<void> {
	//assertEnv();
	await connectToDatabase();
	app.listen(port, () => {
		console.log(`API listening on http://localhost:${port}`);
	});
}

start().catch((err) => {
	console.error(err);
	process.exit(1);
});


