import { mailerSendEmail } from "../config/mailer";

// Rutas relacionadas con la autenticación
const express = require('express');

const respuesta = require('../red/respuestas');
const controlador = require('../controllers/authController');
const { route } = require('../app');
const { regCreate, regDelete } = require('../bd/mysql');

const router = express.Router();

router.get('/', regReadAll);
router.get('/:id', regReadOne);
router.post('/', regCreate);
router.put('/', regDelete);

// Asignar postSendEmail a POST /users/send-email
router.post('/syssendemail', mailerSendEmail);

async function regReadAll(req, res, next) {
    try {
        const items = await controlador.regReadAll();
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
};

async function regReadOne(req, res, next) {
    try {
        const items = await controlador.regReadOne(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
};

async function regCreate(req, res, next) {
    try {
        const items = await controlador.regCreate();
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
};
