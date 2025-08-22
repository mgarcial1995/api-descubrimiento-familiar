export const successResponse = (
  data: any,
  message = "Operación exitosa",
  statusCode = 200
) => {
  return {
    success: true,
    statusCode,
    message,
    data,
  };
};

export const errorResponse = (
  message = "Ocurrió un error",
  statusCode = 500,
  data: any = null
) => {
  return {
    success: false,
    statusCode,
    message,
    data,
  };
};
