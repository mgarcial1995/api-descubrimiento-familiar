import { Router } from "express";
import { registroParticipante } from "../controllers/participante.controller";

const router = Router();

router.post("/registrar", registroParticipante);

export default router;