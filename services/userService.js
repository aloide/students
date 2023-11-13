import { addDocument, simpleQuery } from '../db/firestoredb.js'


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

    console.log(result);

    return result.empty

}