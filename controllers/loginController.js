// service
import { obtenerUsuario } from "../services/userService.js"

// helpers
import { convertirBase64 } from "../helpers/b64Helper.js"
import { convertirSha256 } from "../helpers/sha256Helper.js"

export async function get_login(req, res) {
    res.render("login", {message:""})
}

export function get_anon(req, res){
    res.send("Viendo como anonimo...")
}

export async function post_login(req, res){
    // crea el dto
    let {username: id} = req.body
    let paswd = convertirBase64(convertirSha256(req.body.paswd))

    // busca el usuario y valida la contra...
    let usuarioDb = await obtenerUsuario(id, paswd)

    let usuarioIsEmpty = usuarioDb.empty
    //console.log(usuarioIsEmpty);

    if(usuarioIsEmpty){
        res.render("login", {message:"El usuario no es valido"})
        return
    }

    let isActive = usuarioDb.docs[0].get("active")
    //console.log(">>>>>>>>> ", isActive);


    if(!isActive){
        res.render("login",{message:"El registro del usuario esta siendo procesado"})
        return
    }

    let userToSession = {
        id:id,
        nombre: usuarioDb.docs[0].get("name"),
        tipo: usuarioDb.docs[0].get("tipo")
    }

    req.session.usuario = userToSession
    res.redirect("/courses")
}

export function recoveryPassword(req, res){
    res.send("recuperar contraseña...")
}

