import crypto from 'crypto'

// Función para convertir un string en un string sha256
export function convertirSha256(string) {
  //const crypto = require('crypto');
  const hash = crypto.createHash('sha256');
  hash.update(string);
  return hash.digest('hex');
}
