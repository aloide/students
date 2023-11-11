// Login Controller

export async function get_login(req, res) {
    // Buscar documento en Firestore con los valores de req.params.user y req.params.password
    //const user = await firestore.collection('users').where('username', '==', req.params.user).where('password', '==', req.params.password).get();
    //res.json(user);
    res.render("login")
}

export function get_create(req,res){
    // devuleve la vista para crear el usuario
    res.send("get create")
}

export function post_create(req,res){
    // crea el usuario en firebase
}

export function post_login(req, res){
    // busca el usuario...
    // valida la password...
    res.send("post login")
}

export function recoveryPassword(req, res){
    
}

