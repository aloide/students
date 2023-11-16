export async function get_login(req, res) {

    if(!req.session.usuario){
        res.render("noAllowed")
        return
    }

    const perfil = req.session.usuario

    res.render("profile", { profile:perfil })
}