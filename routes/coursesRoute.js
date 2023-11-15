import { Router } from 'express';
const router = Router();
import {get_login} from '../controllers/coursesController.js'

// Rutas relacionadas con el login
// /courses...
router.get('/', get_login);

// definicion de rutas por curso
// courses/{idCourse} : get


export default router;
