export function obtenerFechaActual() {
    return new Date();
}

export function formatoFecha(fecha){
  const res = fecha.toDate().toLocaleString("en-GB")
  return res
}