import { addDocument, simpleQuery, doubleQuery } from '../db/firestoredb.js'


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

export async function validarUsuario(usuario, paswd){
    let result = await doubleQuery("/users",{
        "firstField":"username",
        "operator":"==",
        "secondField":usuario
    },{
        "firstField":"paswd",
        "operator":"==",
        "secondField":paswd
    })

    // true si esta bien el usuario
    return !result.empty
}

// TODO: implementar algo para validar el usuario, password y active