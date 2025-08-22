import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import participanteRoutes from "./routes/participante.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/participante", participanteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
