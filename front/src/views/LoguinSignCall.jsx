// File C:\Home\Developing\PM3-FernandoMGan\front\src\views\LoguinSignCall.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '../assets/company/CompanyLogo.svg';
import styles from './LoguinSignCall.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { takeOutLoguin } from '../redux/loguinSlice';

const LoguinSignCall = () => {
    const [userData, setUserData] = useState({
        nombres: '',
        email: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos del usuario (userData.nombres y userData.email) a donde sea necesario
        alert(`Info de user Data .. :>> \n 
                Nombres : ${userData.nombres}  \n
                Email : ${userData.email}  \n`);
    }
    const handleOnAceptar = (event) => {
        handleOnSubmit = (event)
    }
    const handleOnCancelar = (event) => {
        dispatch(takeOutLoguin());
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className={styles['frm-cntd-ppal']}>
                <div className="container text-center" id="cntd-ppal">
                    <center>
                        <img src={CompanyLogo} alt="logo" className="logo" height="150" width="150" id="id-cmp-logo" />
                    </center>
                    <br />
                    <h3 className="subtitle">Regístrate para Acceder a Nuestros Servicios</h3>
                    <br />
                    <input type="text" id="logNombres" name='nombres' placeholder="Ingresa tus nombres" className="input identid" onChange={handleInputChange} />
                    <br />
                    <br />
                    <div className="passwd">
                        <div className="FrmButOutLineEmail ivv-cntd" id='idFrmButOutLineEmail' >
                            <div id='idFrmButOutLineEmailsc'>
                                <div className="FrmButOutLine ivv" id="idivv">
                                    <input type="email" className="input text-center" id="logEmail" name='email' placeholder="Ingresa un email válido" onChange={handleInputChange}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="formLoguinButton">
                        <div className="formLoguinButton" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="/">
                                <input type="button" value="ACEPTAR" className="secundary-button login-button" id="btnFormOk" onClick={handleOnAceptar} />
                            </Link>
                            <Link to="/">
                                <input type="button" value="CANCELAR" className="secundary-button login-button" id="btnFormCancel" onClick={handleOnCancelar}/>
                            </Link>
                            <input type="reset" value="LIMPIAR " className="secundary-button login-button" id="btnFormReset" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoguinSignCall;
