import express from "express";
import userRoutes from "./controllers/userController.js";
import functionRoutes from "./controllers/functionController.js";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/functions", functionRoutes);

export default app;
