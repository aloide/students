// Función para convertir un string en base 64
export function convertirBase64(string) {
  return Buffer.from(string).toString('base64');
}

