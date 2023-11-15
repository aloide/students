// 
const users = [
    {
      "id": "654d8d29c74b9f593bcee4e4",
      "name": "Kay"
    },
    {
      "id": "654d8d29041be10aa9819d86",
      "name": "Marianne"
    },
    {
      "id": "654d8d2982ea79e794ae0d1c",
      "name": "Latisha"
    }
  ]; // Simulación de una base de datos

export function getAllUsers(req, res) {
  res.json(users);
}

export function getUserById(req, res) {
  const userId = req.params.id;
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
}

export function createUser(req, res) {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
}

export function updateUser(req, res) {
  const userId = req.params.id;
  // Actualizar la información del usuario en la base de datos
  res.json({ message: 'Usuario actualizado' });
}

export function deleteUser(req, res) {
  const userId = req.params.id;
  // Eliminar al usuario de la base de datos
  res.json({ message: 'Usuario eliminado' });
}
