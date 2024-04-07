// 01 - Construccion del servidor
const express = require('express');
const app = express;

// 02 - Levantando el servidor

app.listen(3000, () => {
    console.log('Server Listen On Port 3000');
});

// 03 - Llamar al enrutador y conectar el espacio de trabajo
const {Router} = require('express');
const router = Router();
app.request(router);

// 04 - Crea las rutas
router.get('/', (req,res)=>{ 
    res.status(200).send({
        mesage:'Todo Ok en Lectura'
    });
});
router.post('/', (req,res)=>{
    res.status(200).send({
        mesage:'Todo Ok en Grabacion'
    });
});
// 05 - xx
// 06 - xx
// 07 - xx
// 08 - xx
// 09 - xx
// 10 - xx

// Info General del proceso
// -- index - Entry Point del Proyecto
// -- .env - Informacion sensible del proyecto 
// -- server - configuracion de modulos del proyecto
// -- oreden - Ruta recibe peticion, le pide al controlador que lo maneje y le pide a los servicios que le devuelva la informacion
// -- 
// -- 
// -- 

