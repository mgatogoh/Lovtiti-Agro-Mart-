import express, { type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";
//import routes from "./routes";
import morgan from "morgan";
import apiRoutes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/farm", apiRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Agro DApp Backend API" });
});


export default app;
