// file index.ts - entry point de mi aplicacion 

// Requiriendo Datos de Entorno y Configuracion de Servidor
import { appConfig } from "./config/envs.config";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
    .then(res => {
        console.log(`Conexion Correcta con la base de datos.`);
        startServer();
    })

// Puesta en marcha del servidor
function startServer() {
    server.listen(appConfig.PUERTO, () => {
        const vmsg = `        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
            Flag Devs - Inicio de Servidor.     
            ::>>    Proyecto : ${appConfig.PROYECTO} , Escuchando en Puerto ${appConfig.PUERTO} 
            -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- `;
        console.log(vmsg); 
    })
}

