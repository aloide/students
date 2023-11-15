import * as dotenv from 'dotenv';
dotenv.config()

import admin from 'firebase-admin';

// Inicializa Firebase con tu configuración
import serviceAccount from './config.js'
import { decodificarBase64 } from '../helpers/b64Helper.js';

//serviceAccount.private_key = decodificarBase64(process.env.FIRE_PRIVATE_KEY)
//serviceAccount.private_key_id = process.env.FIRE_PRIVATE_KEY_ID

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-project-id.firebaseio.com'
});

// Exporta las funciones que necesitas

// Ejemplo de función para agregar un documento a una colección
/**
 * 
 * @param {string} collectionName 
 * @param {string} documentData 
 * @returns string idResult
 */
export async function addDocument(collectionName, documentData) {
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

export async function setDocument(collectionName, idDocument, documentData){
    try {
        const db = admin.firestore();
        const collectionRef = db.collection(collectionName);
        const documentRef = collectionRef.doc(idDocument); // Aquí especificas el ID del documento
      
        await documentRef.set(documentData); // Utiliza el método set() para agregar el documento
      
        console.log('Documento agregado con ID:', idDocument);
      } catch (error) {
        console.error('Error al agregar documento:', error);
        throw error;
      }
}

export function getCollectionReference(collectionName){
    try {
        const db = admin.firestore()
        return db.collection(collectionName)

    } catch (error) {
        console.error('Error al agregar documento:', error);
        throw error;
    }
}


// Otros métodos que puedas necesitar...
/**
 * 
 * @param {string} collectionName 
 * @param {{firstField : string,operator: string,secondField: string}} query 
 * @returns object retrieved
 */
export async function simpleQuery(collectionName, query) {
    try {
        
        const db = admin.firestore();
        const collectionRef = db.collection(collectionName);
        const result = await collectionRef
            .where(query.firstField, query.operator, query.secondField).get()
        return result

    } catch (error) {
        console.error(("Error al buscar: " , error));
    }
}


// Cierra la conexión cuando sea necesario
export function closeConnectio() {
    admin.app().delete();
};

