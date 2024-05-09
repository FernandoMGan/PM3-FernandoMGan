// File C:\Home\Developing\PM3-FernandoMGan\front\src\helpers\DevsMsgs.js

const DevMsg = {
    // Función para enviar mensaje al usuario
    ByConsole: (src, msg, val) => {
        // Armado de mensaje para la consola
        const vMsg = `Origen : ${src} \n Desc  : ${msg} \n Valor : ${val} \n`
        console.log(vMsg);
        return vMsg;
    },
};

export default DevMsg;