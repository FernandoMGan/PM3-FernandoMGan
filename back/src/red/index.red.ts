// file index.red.ts

import { Request, Response } from "express";

const msgSuccess = function (req: Request, res: Response, mensaje: string = '', status: number = 200, data?: any) {
    // const usersJson = JSON.stringify(data); // Convertir el arreglo de objetos a JSON
    res.status(status).json({
        header: {
            status: status,
            error: false
        },
        message: mensaje,
        data
    });
};

const msgError = function (req: Request, res: Response, mensaje: string = '', status: number = 500, data?: any) {
    res.status(status).json({
        header: {
            status: status,
            error: true
        },
        message: mensaje
    });
};

export { msgSuccess, msgError };