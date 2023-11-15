import { addDocument, simpleQuery, getCollectionReference } from '../db/firestoredb.js'


export async function crearUsuario(dto){
    try{
        return await addDocument("/users", dto)
    }catch(error){
        return null
    }
}

export async function existeUsuario(dto){

    let result = await simpleQuery("/users",{
        "firstField":"username",
        "operator":"==",
        "secondField":dto.username
    })

    // true si no existe el usuario
    return result.empty

}

export async function obtenerUsuario(idUsuario, paswd){
    try {
        let dbref = getCollectionReference("/users")
        //console.log(idUsuario, paswd);

        let result = await dbref
            .where("id","==",idUsuario)
            .where("paswd","==",paswd)
            .get()
        
        return result
    } catch (error) {
        console.error("Error al consultar");
        throw error
    }

}
