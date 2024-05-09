// FIle C:\Home\Developing\PM3-FernandoMGan\front\src\helpers\DevSearches.js 
const DevMod = 'DevSearches in helpers\DevSearches.js';

import axios from 'axios';
import DevMsg from './DevsMsgs';
import { mkUsers } from '../mokups/mkUsers';
import ValidatorsData from './Validators';

const DevSearch = {
    knows: {
        Nombre: 'DevsSearch',
        Funcionalidad: 'Esta función proporciona una forma fácil y flexible de interactuar con diferentes endpoints de una API, abstrayendo la lógica de la solicitud HTTP y manejando los errores de manera consistente.',
        Seguridad: {
            tipo: 'txt / jwt',
            token: 'autenticado'
        },
        Parametros: {
            tipoPeticion: 'El tipo de petición HTTP (GET, POST, PUT, DELETE).',
            destino: 'El destino del endpoint de la API (usuRegister, usuLoguin, usuAppointments).',
            data: 'Los datos a enviar con la solicitud (opcional).'
        },
        Respuesta: 'Sync / Async', // Respuesta sincrónica o asíncrona
        Uso: `DevsSearch.ByApi('get', 'usuLoguin', { id: 'usuario', password: 'contraseña' });` // Ejemplo de uso
    }, // 
    ByMokup: async (typ, dst, security, params) => {
        // 
        DevMsg(DevMod, 'valid tipo de enpoint', ValidatorsData.isValidEndTypes(typ))
        DevMsg(DevMod, 'valid tipo de enpoint', ValidatorsData.isValidEndPoints(dst))

        if (!ValidatorsData.isValidEndTypes(typ) || !ValidatorsData.isValidEndPoints(dst) || this.Seguridad.tipo !== null || params !== null) {
            return {};
        }
        //        
        let endtype = typ // tipo de consuilta
        let endhost = ''; // URL del host
        let endpoint = ''; // Endpoint específico
        let endparams = ''; // Parametros Endpoint

        switch (dst) {
            case 'usuarios':
                return mkUsers;
                break;
            case 'credenciales':
                // Definir la URL y el endpoint correspondientes
                break;
            case 'turnos':
                // Definir la URL y el endpoint correspondientes
                break;
            default:
                return {};
                break;
        }
    },
    ByApi: async (typ, dst, params, security) => {
        let endtype = ''; // tipo de consuilta
        let endhost = ''; // URL del host
        let endpoint = ''; // Endpoint específico
        let endparams = ''; // Parametros Endpoint

        switch (dst) {
            case 'usuRegister':
                // Definir la URL y el endpoint correspondientes
                break;
            case 'usuLoguin':
                host = 'http://localhost:3000/';
                endpoint = `users`;
                endparams = `/id:${params.id}?password=${params.password}`;
                break;
            case 'usuAppointments':
                // Definir la URL y el endpoint correspondientes
                break;
            default:
                break;
        }

        try {
            // Realizar la solicitud HTTP según el tipo especificado
            let config = {};
            if (security.type === 'txt') {
                config.headers = {
                    Authorization: `Basic ${security.token}` // Autenticación básica
                };
            } else if (security.type === 'jwt') {
                config.headers = {
                    Authorization: `Bearer ${security.token}` // Token JWT
                };
            }

            const response = await axios[typ](host + endpoint + endparams, config);

            console.log('Datos recibidos:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error:', error.message);
            throw error;
        }

    }
};

export default DevSearch;
