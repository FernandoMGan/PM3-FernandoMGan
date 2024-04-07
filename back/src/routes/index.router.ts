// /routes/index.router.ts

import { Router } from "express";
import { routeHandler } from '../controllers/index.controller';
import { getUsers, getUserById, createUser } from '../controllers/user.controller';
import { testController } from '../controllers/test.controller';
import auth from "../middlewares/auth.middleware";

const router: Router = Router();

// Manejar la ruta raíz
router.get('/', routeHandler);

// Agregar rutas de usuarios
router.get('/users', auth, getUsers); // Asignar getUsers a GET /users
router.get('/users/:id', auth, getUserById); // Asignar getUserById a GET /users/:id

router.post('/users/register', auth, createUser); // Asignar createUser a POST /users

// Agregar rutas de testing
router.get('/tests', auth, testController);

export default router;

// GET /users       => Obtener todos los usuarios
// GET /users/:id   => Obtener todos los usuarios

// POST /users/register => Crear un nuevo usuario