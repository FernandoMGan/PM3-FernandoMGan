// file /middlewares/auth.middleware.ts

import { Request, Response, NextFunction } from "express";
import { msgError, msgSuccess } from "../red/index.red"; // Corrige los nombres de las funciones
import { getAllUsers } from "../services/user.service";

// Implementa el middleware de prueba aquí según tus requisitos
const auth = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.headers;
    if (token === "autenticado") {
        next();
    } else {
        msgError(req, res, "Error. Falta autenticacion middle", 401); // Utiliza las funciones corregidas
    }
};

export default auth;
