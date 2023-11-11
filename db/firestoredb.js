// firestore lib

// firestoreModule.js

import admin from 'firebase-admin';

// Inicializa Firebase con tu configuración
const serviceAccount = require('./path/to/your/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com'
});

// Exporta las funciones que necesitas

// Ejemplo de función para agregar un documento a una colección
exports.addDocument = async (collectionName, documentData) => {
  try {
    const db = admin.firestore();
    const collectionRef = db.collection(collectionName);
    const result = await collectionRef.add(documentData);
    console.log('Documento agregado con ID:', result.id);
    return result.id;
  } catch (error) {
    console.error('Error al agregar documento:', error);
    throw error;
  }
};

// Otros métodos que puedas necesitar...

// Cierra la conexión cuando sea necesario
exports.closeConnection = () => {
  admin.app().delete();
};

