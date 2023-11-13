// service
import { validarUsuario } from "../services/userService.js"

// helpers
import { convertirBase64 } from "../helpers/b64Helper.js"
import { convertirSha256 } from "../helpers/sha256Helper.js"

export async function get_login(req, res) {
    res.render("login")
}

export function get_anon(req, res){
    res.send("Viendo como anonimo...")
}

export async function post_login(req, res){
    // crea el dto
    let {username} = req.body
    let paswd = convertirBase64(convertirSha256(req.body.paswd))

    // busca el usuario y valida la contra...
    let usuarioNoExiste = await validarUsuario(username, paswd)

    console.log(">>>>>>>>> ", usuarioNoExiste);


    if(!usuarioNoExiste){
        res.render("login", {message:"El usuario no es valido"})
        return
    }


    // muestra la vista de home
    // guarda dto en sesion
    // y muestra el course/home
    // res.render("courses", {nombre:"PEpe", saludo:"HoLa"})
    res.redirect("/courses")
}

export function recoveryPassword(req, res){
    res.send("recuperar contraseña...")
}

