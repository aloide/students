import express, { json } from 'express';
const app = express();
const port = 3000;

// Importar rutas
//const userRoutes = require('./routes/userRoutes.js').default;
import indexRoutes from "./routes/index.js";


app.use(json());

// Usar las rutas
//app.use('/api/users', userRoutes);
app.use("/", indexRoutes);



app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
