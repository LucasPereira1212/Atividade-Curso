import "dotenv/config";
import express from "express";
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.listen(4000, () => console.log("API de Ecommerce está online"));
