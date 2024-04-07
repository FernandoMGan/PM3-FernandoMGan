// file envs.ts - 

import "dotenv/config";

// Interfaz para la configuración de la aplicación
interface AppConfig {
    PUERTO: number;
    PROYECTO: string;
}

// Interfaz para la configuración de la base de datos
interface DBConfig {
    BD_USER: string;
    BD_PASS: string;
    BD_TYPE: string;
    BD_PROYECT: string;
    BD_NOMBRE: string;
    BD_COLECCION: string;
    BD_URI: string;
}

// Interfaz para la configuración de las APIs externas
interface ExternalAPIConfig {
    PUBLIC_KEY: string;
    PRIVATE_KEY: string;
}

// Carga de variables de entorno y creación de objetos de configuración
const appConfig: AppConfig = {
    PUERTO: parseInt(process.env.PORT || "3000"), // Se ajustó para leer el puerto desde las variables de entorno o establecerlo en 3000 si no está definido
    PROYECTO: process.env.PROYECTO || "Bpo Servicio Tecnico"
};

const dbConfig: DBConfig = {
    BD_USER: process.env.BD_USER || "Aqui_su_usuario_de_mongo",
    BD_PASS: process.env.BD_PASS || "Aqui_su_clave_para_mongo_db",
    BD_TYPE: process.env.BD_TYPE || "Mongo_DB",
    BD_PROYECT: process.env.BD_PROYECT || "Proyecto",
    BD_NOMBRE: process.env.BD_NOMBRE || "Proyecto",
    BD_COLECCION: process.env.BD_COLECCION || "Proyecto",
    BD_URI: process.env.BD_URI || "mongodb+srv://MONGO_USER:MONGO_PASS@bpochange.del6rll.mongodb.net/MONGO_CLUSTER?retryWrites=true&w=majority&appName=MONGO_COLECCION"
};

const priAPIConfig: ExternalAPIConfig = {
    PUBLIC_KEY: process.env.PRI_PUBLIC_KEY || "Key_publica_Especifico_de_una_api_de_terceros",
    PRIVATE_KEY: process.env.PRI_PRIVATE_KEY || "Key_privada_Especifico_de_una_api_de_terceros"
};

export { appConfig, dbConfig, priAPIConfig };
