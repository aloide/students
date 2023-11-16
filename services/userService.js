import { addDocument, simpleQuery, getCollectionReference, setDocument } from '../db/firestoredb.js'


export async function crearUsuario(dto){
    try{
        //return await addDocument("/users", dto)
        if(!dto.id) throw Error("Imposible crear usuario sin id")

        await setDocument("/users",dto.id,dto)
        return dto.id

    }catch(error){
        return null
    }
}

export async function existeUsuario(dto){

    let result = await simpleQuery("/users",{
        "firstField":"id",
        "operator":"==",
        "secondField":dto.id
    })

    // true si no existe el usuario
    return result == undefined || result.empty

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
