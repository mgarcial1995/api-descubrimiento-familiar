export interface IParticipante {
  nombres: string;
  apellidos: string;
  direccion: string;
  distrito: string;
  celular?: string;
  correo?: string;
  es_miembro: boolean;
  cuenta_fs?: string;
  crear_cuenta_fs?: boolean;
  asistio?: boolean;
  rol?: string;
}