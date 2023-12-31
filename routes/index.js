import { Router } from 'express';
const router = Router();

// Importar y usar rutas específicas
import indexRoute from "./indexRoute.js"
import loginRoutes from "./loginRoutes.js"
import signupRoutes from "./signupRoutes.js"
import coursesRoutes from "./coursesRoute.js"

// ruta por defecto
router.use("/", indexRoute)

// Usar las rutas específicas
router.use("/login", loginRoutes)
router.use("/signup", signupRoutes)
router.use("/courses", coursesRoutes)

export default router;
