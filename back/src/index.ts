// file index.ts - entry point de mi aplicacion 

// Requiriendo Datos de Entorno y Configuracion de Servidor
import { appConfig } from "./config/envs.config";
import server from "./server";

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

startServer();