//  file test.controller.ts

import { Request, Response, NextFunction } from 'express';
import { msgSuccess, msgError } from '../red/index.red';

export const testController = (req: Request, res: Response, next: NextFunction) => {
    // Lógica del controlador de pruebas
    res.send('Controlador de pruebas');
};
