import { Router } from 'express';
const router = Router();

import {get_create, post_create} from '../controllers/signupController.js'

// Rutas relacionadas con el signup
// /signup

router.get("/", get_create)
router.post("/", post_create)

export default router;
