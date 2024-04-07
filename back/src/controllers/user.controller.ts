// file user.controllers.ts

import { Request, Response, NextFunction } from 'express';
import { msgSuccess, msgError } from '../red/index.red'; // Asumiendo que aquí tienes tus funciones de respuesta estandarizadas
// import { usuariosInit } from '../mocaps/index.mocaps'; // Importa los datos de usuarios desde el mockup
import { getAllUsers } from '../services/user.service';
import { infoUsuarios } from '../mocaps/users.mocaps';
import { send } from 'process';

// Controlador para GET /users
export const getUsers = (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = getAllUsers(); // Obtener todos los usuarios
        const usersJson = JSON.stringify(users)
        msgSuccess(req, res, 'Lista de Usuarios', 201, users); // Enviar los usuarios como respuesta
    } catch (err) {
        msgError(req, res, "Error al obtener la lista de usuarios", 501);
    }
};

// Controlador para GET /users/:id
export const getUserById = (req: Request, res: Response, next: NextFunction) => {
    const userId = parseInt(req.params.id); // Convertir el ID de cadena a número
    try {
        const user = infoUsuarios.find(user => user.id === userId); // Buscar el usuario por su ID
        if (user) {
            msgSuccess(req, res, `Usuario con ID ${userId} obtenido con éxito`, 200, user); // Enviar el usuario como respuesta
        } else {
            msgError(req, res, `No se encontró ningún usuario con ID ${userId}`, 404);
        }
    } catch (err) {
        msgError(req, res, "Error al obtener el usuario", 501);
    }
};

// Controlador para POST /users
export const createUser = (req: Request, res: Response, next: NextFunction) => {
    const { razonFantasia, razonSocial, observacion } = req.body;
    // Aquí puedes agregar la lógica para crear un nuevo usuario y agregarlo a la lista de usuarios
    try {
        // Supongamos que el nuevo usuario se crea con un ID único basado en la longitud de la lista de usuarios existentes
        // nuevoUsuario = usuariosInit();
        // usuarios.push(nuevoUsuario);
        msgSuccess(req, res, "Creando un nuevo usuario", 201);
    } catch (err) {
        msgError(req, res, "Error en lista de usuarios Lines 45", 500);
    }
};
