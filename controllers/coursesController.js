// helpers
import { saludoByHora } from "../helpers/saludoHelper.js"

export async function get_login(req, res) {

    if(!req.session.usuario){
        res.render("noAllowed")
        return
    }

    let { nombre } = req.session.usuario


    res.render("courses", {nombre:nombre,  saludo: saludoByHora() })
}