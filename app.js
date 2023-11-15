import * as dotenv from 'dotenv';
dotenv.config()

console.log(process.env.TEST);

import morgan from 'morgan';
import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';

const app = express();
const m = morgan("short")
const port = process.env.PORT || 3000;
const secret_id = process.env.APP_SECRET || "secreto";

// Importar rutas
//const userRoutes = require('./routes/userRoutes.js').default;
import indexRoutes from "./routes/index.js";


// body parser
// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: secret_id, // Cambia esto por una cadena secreta más segura
  resave: false,
  saveUninitialized: false
}));


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
  console.log(`[EDO APP] Running in: http://localhost:${port}`);
});
