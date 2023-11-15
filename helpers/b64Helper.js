// Función para convertir un string en base 64
export function convertirBase64(string) {
  return Buffer.from(string).toString('base64');
  //return btoa(string)
}


// Función para decodificar un string en base 64
export function decodificarBase64(data) {

  if (typeof atob === "function") {
    return atob(data);
  } else if (typeof Buffer === "function") {
    return Buffer.from(data, "base64").toString("utf-8");
  } else {
    throw new Error("Failed to determine the platform specific decoder");
  }

}
