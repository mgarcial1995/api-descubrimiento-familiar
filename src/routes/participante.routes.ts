import { Router } from "express";
import { asistenciaParticipantes, datosParticipante, healtCheck, registroParticipante, traerParticipantes } from "../controllers/participante.controller";

const router = Router();

router.post("/registrar", registroParticipante);
router.get("/obtenerParticipante/:id", datosParticipante);
router.put("/asistenciaParticipante/:id", asistenciaParticipantes);
router.get("/obtenerParticipantes", traerParticipantes);
router.get("/healt", healtCheck);

export default router;