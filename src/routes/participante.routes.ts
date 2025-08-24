import { Router } from "express";
import { asistenciaParticipantes, datosParticipante, registroParticipante, traerParticipantes } from "../controllers/participante.controller";

const router = Router();

router.post("/registrar", registroParticipante);
router.get("/obtenerParticipante/:id", datosParticipante);
router.put("/asistenciaParticipante/:id", asistenciaParticipantes);
router.get("/obtenerParticipantes", traerParticipantes);

export default router;