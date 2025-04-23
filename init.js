import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./src/controllers/userController.js";

dotenv.config();

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/users", userRoutes);

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
  app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
  });
}).catch(err => console.error("Erro ao conectar ao banco:", err));
