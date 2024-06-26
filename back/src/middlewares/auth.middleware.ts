// file /middlewares/auth.middleware.ts

import { Request, Response, NextFunction } from "express";
import { msgError, msgSuccess } from "../red/index.red"; // Corrige los nombres de las funciones

// Implementa el middleware de prueba aquí según tus requisitos
const auth = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.headers;
    if (token === "autenticado") {
        next();
    } else {
        msgError(req, res, "Error de Token, No autorizado, Credenciales invalidas.", 401); // Utiliza las funciones corregidas
    }
};

export default auth;
