// /routes/index.router.ts

import { Router } from "express";
import { routeHandler } from '../controllers/index.controller';
import { getUsers, getUsersById, postCreateUser } from '../controllers/user.controller';
import { mailerSendEmail } from '../config/mailer';
import auth from "../middlewares/auth.middleware";

const router: Router = Router();

// Manejar la ruta raíz
router.get('/', routeHandler);

// Agregar rutas de usuarios
router.get('/users', auth, getUsers); // Asignar getUsers a GET /users
router.get('/users/:id', auth, getUsersById); // Asignar getUserById a GET /users/:id
router.post('/users/register', auth, postCreateUser); // Asignar createUser a POST /users

// Asignar postSendEmail a POST /users/send-email
router.post('/syssendemail', auth, mailerSendEmail);

export default router;