// controllers/index.controller.ts
import { Request, Response, NextFunction } from 'express';
import { appConfig } from '../config/envs.config';
import { msgSuccess, msgError } from '../red/index.red'; // Importa las funciones de respuestas
import { getUsers, getUsersById, postCreateUser } from '../controllers/user.controller';


// console.log(`        Flag Devs - Inicializando controladores  - controllers/index.controller.ts `);

export const routeHandler = (req: Request, res: Response, next: NextFunction) => {
    const { url } = req;

    // Si la URL coincide exactamente con la ruta raíz
    if (url === '/') {
        const msg = `Bienvenido a '${appConfig.PROYECTO}', Servidor Escuchando.`;
        msgSuccess(req, res, msg, 201);
    } 
    // Si la URL comienza con '/users'
    else if (url.startsWith('/users')) {
        // Utiliza las funciones de controlador de usuario importadas
        getUsers(req, res, next);
    } 
    // Agregar aquí más condiciones para otras rutas si es necesario
    // Por ejemplo, si agregas más rutas en el futuro, añade condiciones para ellas aquí.
    else {
        const msg = `Bienvenido a '${appConfig.PROYECTO}', Endpoint desconocido, revise la documentacion.`;
        msgError(req, res, msg, 404);
    }
};

// console.log(`        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- `);
