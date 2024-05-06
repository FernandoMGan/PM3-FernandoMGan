// file user.controllers.ts
import { Request, Response, NextFunction } from 'express';
import { getUsersService, getUsersByIdService, postCreateUsersService } from '../services/user.service';
import { msgSuccess, msgError } from '../red/index.red';
import { isValidEmail } from '../helpers/validator.data';
// import { getUserCredencialService } from '../services/credential.service';
console.log(`Pasando por el user controler Fernando`);

// Controlador para GET /users
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getUsersService();
        res.status(200).json({ success: true, message: 'Lista de Usuarios', users });
    } catch (err) {
        console.error("Error al obtener la lista de usuarios", err);
        res.status(500).json({ success: false, message: "Error al obtener la lista de usuarios" });
    }
};

// Controlador para GET /users/:id
export const getUsersById = async (req: Request, res: Response, next: NextFunction) => {
    const userId = parseInt(req.params.id);
    try {
        const user = await getUsersByIdService(userId);
        if (user) {
            res.status(200).json({ success: true, message: `Usuario con ID ${userId}`, data: { user } });
        } else {
            res.status(404).json({ success: false, message: `No se encontró ningún usuario con ID ${userId}` });
        }
    } catch (err) {
        console.error("Error al obtener el usuario", err);
        res.status(500).json({ success: false, message: `Error al obtener el usuario, id erroneo ${userId}` });
    }
};

// Controlador para POST /users
export const postCreateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, birthdate, nDni } = req.body;

    // Validar los datos de entrada
    if (!name || !email || !birthdate || !nDni) {
        return res.status(400).json({ success: false, message: "Faltan campos obligatorios" });
    }

    // Validar el formato del correo electrónico
    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, message: "El correo electrónico no es válido" });
    }

    try {
        // Crear el usuario
        const newUser = await postCreateUsersService(name, email, birthdate, nDni);
        console.log(`Mostrando los datos el usuario creado :> ${newUser}`);
        
        // Crear la credencial del usuario
        // await getUserCredencialService(newUser.id);

        // Éxito en la creación del usuario
        return res.status(201).json({ success: true, message: "Usuario creado exitosamente", data: { user: newUser } });
    } catch (err) {
        msgError(req, res, "Error al crear un nuevo usuario", 501);
    }
};

