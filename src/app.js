import express from "express";
import userRoutes from "./controllers/userController.js";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

export default app;
