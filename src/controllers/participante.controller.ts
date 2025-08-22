import type { Request, Response } from "express";
import { crearParticipante } from "../services/participante.service";
import type { IParticipante } from "../interfaces/participante.interface";
import { errorResponse, successResponse } from "../utils/response";

export const registroParticipante = async (req: Request, res: Response) => {
  try {
    const participante: IParticipante = req.body;
    const user = await crearParticipante(participante);
    return res
      .status(201)
      .json(successResponse(participante, "Participante creado con éxito", 201));
  } catch (error: any) {
    return res
      .status(400)
      .json(errorResponse(error.message || "Error al crear participante", 400));
  }
};
