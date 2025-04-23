import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./src/controllers/userController.js";
import app from "./src/app.js";

dotenv.config();

const PORT = 3000;

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
  app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
  });
}).catch(err => console.error("Erro ao conectar ao banco:", err));
