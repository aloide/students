import morgan from 'morgan';
import bodyParser from 'body-parser';
import express from 'express';
const app = express();
const m = morgan("short")
const port = 3000;

// Importar rutas
//const userRoutes = require('./routes/userRoutes.js').default;
import indexRoutes from "./routes/index.js";


// body parser
// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ejs view set
app.set("view engine", "ejs")

// no se para que esta esto xd
//app.use(json());

// Usar las rutas
//app.use('/api/users', userRoutes);
app.use("/", indexRoutes);

// morgan -- only in dev
app.use(m)





app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
