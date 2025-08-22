import type { IParticipante } from "../interfaces/participante.interface";
import type { PostgrestError } from "@supabase/supabase-js";
import { supabase } from "../config/supabaseClient";

export const crearParticipante = async (body: IParticipante) => {
  const { data, error } = await supabase
    .from("participante")
    .insert(body)
    .select();
  if (error) {
    if ((error as PostgrestError).code === "23505") {
      throw new Error("El número de documento ya está registrado.");
    }
    throw new Error(error.message);
  }
  return data?.[0];
};