import { Router } from 'express';
import { get_login } from '../controllers/profileController.js';
const router = Router();

// ruta completa /profile/me
router.get('/me', get_login);

// control de otra ruta
router.get("/*", (req, res) => res.render("noAllowed"))


export default router