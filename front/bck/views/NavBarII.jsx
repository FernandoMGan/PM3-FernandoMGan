// File C:\Home\Developing\PM3-FernandoMGan\front\src\views\NavBarII.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { takeTryLoguin, takeInLoguin, takeOutLoguin, showStateLoguin } from '../redux/loguinSlice';
import styles from '../components/NavBarII.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgCompanyLogo from '../assets/company/CompanyLogo.svg';
import UsrLogOut from '../assets/toolbar/user-spy.svg';
import UsrLogIn from '../assets/toolbar/user-id-svgrepo-com.svg';
import UsrLogTry from '../assets/toolbar/waiting-room-svgrepo-com.svg';
import { legacy_createStore } from 'redux';


const NavBarII = () => {
    const loguinState = useSelector(state => state.loguin.estado);
    const loguinLogo = useSelector(state => state.loguin.loguinLogo);
    const dispatch = useDispatch();

    const [logDsc, setLogDsc] = useState('');
    const [logImg, setLogImg] = useState(UsrLogOut);

    useEffect(() => {
        if (loguinState === 'OUT') {
            setLogImg(UsrLogOut);
            setLogDsc('Anonimo');
        } else if (loguinState === 'IN') {
            setLogImg(UsrLogIn);
            setLogDsc('Logueado');
        } else if (loguinState === 'TRY') {
            setLogImg(UsrLogTry);
            setLogDsc('Loguin en proceso');
        }
    }, [loguinState]);

    const handleMoveTo = (mOpc) => {
        switch (mOpc) {
            case 'FormCompany':
                // dispatch(showStateLoguin('anterior al cambio'));
                if (loguinState === 'OUT') {
                    dispatch(takeTryLoguin());
                } else if (loguinState === 'TRY') {
                    dispatch(takeInLoguin());
                } else if (loguinState === 'IN') {
                    dispatch(takeOutLoguin());
                }
                // dispatch(showStateLoguin('posterior al cambio'));
                break;
            case 'FormHome':
                // No es necesario hacer nada, Link manejará la navegación
                // alert(`Pasando por MoveTo Opc Menu :> ${mOpc} `)
                break;
            case 'FormSingIn':
                // alert(`Pasando por MoveTo Opc Menu :> ${mOpc} `)
                dispatch(takeTryLoguin());
                break;
            case 'FormSingOut':
                // alert(`Pasando por MoveTo Opc Menu :> ${mOpc} `)
                dispatch(takeOutLoguin());
                break;
            case 'FormSingUp':
                // Aquí deberías agregar el dispatch para registrar al usuario
                break;
            case 'FormState':
                dispatch(showStateLoguin('Actualmente'));
                break;
            case 'FormContacto':
                // Aquí deberías agregar el dispatch para manejar el contacto
                break;
            default:
                alert(`Opcion de menu desconocida :>> ${mOpc}`)
                break;
        }
    }

    return (
        <div className={styles.container + ' ' + styles.navbar}>
            <button className='navBarItm'><img className='navBarImg' src={ImgCompanyLogo} alt="Logo de Compania" height={"20rem"} onClick={() => { handleMoveTo('FormCompany') }} /></button>
            <Link to="/" onClick={() => { handleMoveTo('FormHome') }}>Home</Link>
            {loguinState === 'IN' && <button className='navBarItm'>Mis Turnos</button>}
            {loguinState === 'IN' && <button className='navBarItm'>Solicitar Turno</button>}
            {loguinState === 'OUT' && <Link to="/signin" onClick={() => { handleMoveTo('FormSingIn') }}>Iniciar Sesion</Link>}
            {(loguinState !== 'TRY' && loguinState !== 'OUT') && <Link to="/" onClick={() => { handleMoveTo('FormSingOut') }}>Cerrar Sesion</Link>}
            <button className='navBarItm' onClick={() => { handleMoveTo('FormState') }}>
                <img className='navBarImg' src={logImg} alt="Estado Loguin" height={"20rem"} />
                {logDsc}
            </button>
            {(loguinState !== 'TRY' && loguinState !== 'OUT') && <Link to="/signup" onClick={() => { handleMoveTo('FormSingUp') }}>Registrarse</Link>}
            <Link to="/singcall" onClick={() => { handleMoveTo('FormContacto') }}>Contacto</Link>
        </div>
    );
}

export default NavBarII;
