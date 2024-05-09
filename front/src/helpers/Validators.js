// File C:\Home\Developing\PM3-FernandoMGan\front\src\helpers\Validators.js 
// const DevMod = 'xxx in xxx\xxx.js';

const ValidatorsData = {
    isValidEndTypes: (param) => {
        return (param === 'get' || param === 'post' || param === 'put' || param === 'delete') ?
            param :
            {
                error: {
                    header: "Error en el tipo de endpoint",
                    data: `El parámetro recibido '${param}' no se reconoce como opción válida.`
                }
            };
    },
    isValidEndPoints: (param) => {
        let lstEndPointsUsuarios = ['usuarios', 'usuRegister', ];
        let lstEndPointsCredenciales = ['credenciales', 'credRegister', 'credRemove', 'credToggle'];
        let lstEndPointsTurnos = ['turnos', 'turnRegister', 'turnRemove', 'turnToggle'];
        let lstEndPoints = [...lstEndPointsUsuarios, ...lstEndPointsCredenciales, ...lstEndPointsTurnos];

        return lstEndPoints.includes(param) ?
            param :
            {
                error: {
                    header: "Error en el endpoint",
                    data: `El endpoint recibido '${param}' no existe o no está disponible.`
                }
            };
    },
    // Función para validar un correo electrónico utilizando una expresión regular
    isValidEmail: (email) => {
        // Expresión regular para validar un correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Función para validar una contraseña con ciertas características
    isValidPassword: (password) => {
        // Expresión regular para validar la contraseña
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/;
        return passwordRegex.test(password);
    },

    // Función para validar un nombre
    isValidNames: (name) => {
        // Expresión regular para validar el nombre (permitiendo letras de cualquier idioma, espacios, guiones y apóstrofes)
        const lastNameRegex = /^[\p{L}\s\-']+$/u;
        return lastNameRegex.test(name);
    }
};

export default ValidatorsData;
