// File C:\Home\Developing\PM3-FernandoMGan\front\src\views\Home.jsx

import React from 'react';
import styles from '../components/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar las imágenes
import img01 from '../assets/pub/foto-01.jpg';
import img02 from '../assets/pub/foto-02.jpg';
import img03 from '../assets/pub/foto-03.jpg';
import img04 from '../assets/pub/foto-04.jpg';
import img05 from '../assets/pub/foto-05.jpg';
import img06 from '../assets/pub/foto-06.jpg';
import img07 from '../assets/pub/foto-07.jpg';
import img08 from '../assets/pub/foto-08.jpg';

const Home = () => {
    return (
        <div className={styles.cntdhome}>
            <img className={styles.image} src={img01} alt="Clinica 01" />
            <img className={styles.image} src={img02} alt="Clinica 02" />
            <img className={styles.image} src={img03} alt="Clinica 03" />
            <img className={styles.image} src={img04} alt="Clinica 04" />
            <img className={styles.image} src={img05} alt="Clinica 05" />
            <img className={styles.image} src={img06} alt="Clinica 06" />
            <img className={styles.image} src={img07} alt="Clinica 07" />
            <img className={styles.image} src={img08} alt="Clinica 08" />
        </div>
    );
}

export default Home;
