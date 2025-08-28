import type { Request, Response } from "express";
import {
  asistioParticipante,
  crearParticipante,
  obtenerParticipante,
  obtenerParticipantes,
} from "../services/participante.service";
import type { IParticipante } from "../interfaces/participante.interface";
import { errorResponse, successResponse } from "../utils/response";

export const registroParticipante = async (req: Request, res: Response) => {
  try {
    const participante: IParticipante = req.body;
    const user = await crearParticipante(participante);
    return res
      .status(201)
      .json(
        successResponse(participante, "Participante creado con éxito", 201)
      );
  } catch (error: any) {
    return res
      .status(400)
      .json(errorResponse(error.message || "Error al crear participante", 400));
  }
};

export const datosParticipante = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await obtenerParticipante(id);
    return res
      .status(201)
      .json(successResponse(user, "Datos de participante obtenidos", 201));
  } catch (error: any) {
    return res
      .status(400)
      .json(
        errorResponse(
          error.message || "Error obtener datos de participante",
          400
        )
      );
  }
};

export const traerParticipantes = async (req: Request, res: Response) => {
  try {
    const user = await obtenerParticipantes();
    return res
      .status(201)
      .json(successResponse(user, "Participantes obtenidos", 201));
  } catch (error: any) {
    return res
      .status(400)
      .json(
        errorResponse(error.message || "Error al obtener participantes", 400)
      );
  }
};

export const asistenciaParticipantes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await asistioParticipante(id);
    return res
      .status(201)
      .json(successResponse(user, "Participante actualizado con exito", 201));
  } catch (error: any) {
    return res
      .status(400)
      .json(
        errorResponse(error.message || "Error al actualizar participante", 400)
      );
  }
};

export const healtCheck = (req: Request, res: Response) => {
  return res.status(201).json({ status: "ok", time: new Date().toISOString() });
};
