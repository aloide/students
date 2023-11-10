import { Router } from 'express';
const router = Router();

// Importar y usar rutas específicas
import userRoutes from './userRoutes';
//const productRoutes = require('./productRoutes');

// Usar las rutas específicas
router.use('/users', userRoutes);
//router.use('/products', productRoutes);

export default router;
