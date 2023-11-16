// service
import { crearUsuario, existeUsuario } from '../services/userService.js';
// helpers
import { convertirBase64 } from '../helpers/b64Helper.js';
import { convertirSha256 } from '../helpers/sha256Helper.js';
import { obtenerFechaActual } from '../helpers/dateHelper.js';


export function get_create(req, res) {
    res.render("signup")
}


export async function post_create(req, res) {

    let {documento: id, tipo, name, lastname} = req.body

    let paswd =  convertirBase64(convertirSha256(req.body.paswd))

    let dto = {name, lastname, id, paswd,tipo: "e", active:false, created: obtenerFechaActual()}


    // validacion del dto con la db
    let permiteContinuar = await existeUsuario(dto)

    if(!permiteContinuar) {
        res.send({"message":"Ya existe usuario"}).status(400)
        return
    }

    // el usuario no existe asi que hay que crearlo
    let idNewUser = await crearUsuario(dto)

    if(idNewUser == null){
        res.render("error",{"message":"error","status":400})
    }
    //res.send({"userid":idNewUser})
    res.redirect("/login")
}