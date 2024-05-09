import axios from 'axios';

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
    },
    ByApi: async (typ, dst, params, security) => {},
    ByMokup:()=> {},
};

export default DevSearch;
