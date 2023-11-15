import { Router } from 'express';
const router = Router();
import {get_login, post_login} from '../controllers/loginController.js'

// Rutas relacionadas con el login
// /login...
router.get('/', get_login);
router.post("/", post_login)


export default router;
