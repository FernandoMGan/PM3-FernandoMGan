// File C:\Home\Developing\PM3-FernandoMGan\front\src\views\Home.jsx
// const DevMod = 'xxx in xxx\xxx.js';
// DevMsg.ByConsole(DevMod, 'Ctrol xx','Val xx');


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { useSelector, useDispatch } from 'react-redux';
import styles from './PlantillaHome.module.css'; // Importar estilos CSS desde el archivo externo
import 'bootstrap/dist/css/bootstrap.min.css';

const PlantillaHome = () => {
    // Aquí puedes colocar lógica y estado si es necesario
    const xx = () => {
        DevMsg.ByConsole('LoguinSignIn', 'Ingresando', `( xx :> ${xx} )  <-->  ( xx :> ${xx} ) `);
    };

    return (
        <div className={styles.container}>
            <h1>CONTROL HOME</h1>
        </div>
    );
}

export default PlantillaHome;
