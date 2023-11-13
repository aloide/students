// firestore lib

// firestoreModule.js

import admin from 'firebase-admin';

// Inicializa Firebase con tu configuración
import serviceAccount from './config.js'


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


/**
 * 
 * @param {string} collectionName 
 * @param {{firstField : string,operator: string,secondField: string}} firstQuery 
 * @param {{firstField : string,operator: string,secondField: string}} secondQuery 
 * @returns object retrieved
 */
export async function doubleQuery(collectionName, firstQuery, secondQuery){

    try{

        const db = admin.firestore();
        const collectionRef = db.collection(collectionName);
        const result = await collectionRef
            .where(firstQuery.firstField, firstQuery.operator, firstQuery.secondField)
            .where(secondQuery.firstField, secondQuery.operator, secondQuery.secondField)
            .get()
        return result

    }catch(error){
        console.error("Error al buscar: ", error);
    }
}

// Cierra la conexión cuando sea necesario
export function closeConnectio() {
    admin.app().delete();
};

