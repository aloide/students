import { Router } from 'express';
const router = Router();

// Rutas relacionadas con el login
// /login...
router.get('/', (req, res)=>{
    res.render("index")
});


export default router;
