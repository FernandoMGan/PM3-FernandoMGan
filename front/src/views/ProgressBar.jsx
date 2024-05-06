// File ProgressBar.jsx

import React, { useState } from 'react';
import styles from '../components/ProgressBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProgressBar = ({ vProgBarLeyend, vProgBarMinimo, vProgBarMaximo, vProgBarValue }) => {

    const vHidden = vProgBarValue === 100;

    // Calcular el porcentaje de avance
    const percent = (vProgBarValue / (vProgBarMaximo - vProgBarMinimo)) * 100;

    // Establecer el ancho del componente en porcentaje
    const percentWidth = `${percent/2}%`;

    // Clase para ocultar el componente cuando se alcanza el 100%
    const hiddenClass = vHidden ? styles.hidden : '';

    

    return (
        <div className={`${styles['progress-container']} ${hiddenClass}`} id='id-cmpt-ppal'>
            <div className={`${styles['progress-fondo']} ${hiddenClass}`} id='id-cmpt-fondo'><h5></h5></div>
            <div className={`${styles['progress-porc']} ${hiddenClass}`} id='id-cmpt-porc' style={{ width: percentWidth }}><h5></h5></div>
            <div className={`${styles['progress-leyend']} ${hiddenClass}`} id='id-cmpt-leyend'><h6>{vProgBarLeyend}</h6></div>
        </div>        
    );
}

export default ProgressBar;