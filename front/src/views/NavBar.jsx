// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\react plnt\src\views\NavBar.jsx 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

import ProgressBar from './ProgressBar'; // Asegúrate de que la ruta del archivo sea correcta
import MsgMarquesinasina from './MsgMarquesina';
import styles from '../components/NavBar.module.css';
import ImgCompanyLogo from '../assets/company/CompanyLogo.svg';
import ImgMenuHamHrz from '../assets/toolbar/mnu-ham-hrt.svg';
import ImgMenuHamVrt from '../assets/toolbar/mnu-ham-vrt.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addListener } from '@reduxjs/toolkit';
import UsrLogAnonimous from '../assets/toolbar/user-spy.svg'; // Corregir la importación
import UsrLogIn from '../assets/toolbar/Email-button-01.svg'; // Corregir la importación
import UsrContacts from '../assets/toolbar/Email-button-01.svg'; // Corregir la importación
import UsrEmail from '../assets/toolbar/Email-button-05.svg'

const NavBar = () => {
    const [usrStore, setUsrStore] = useState('No Logueado'); // Utilizar useState para usrStore
    const [isLoguedApp, setIsLoguedApp] = useState(false);

    useEffect(() => {
        // Simulación de inicio de sesión
        // setIsLoguedApp(true);
        // Cargar el texto y la imagen según el estado de inicio de sesión
        setUsrStore(isLoguedApp ? 'Usuario Logueado' : 'No Logueado');
    }, [isLoguedApp]); // Ejecutar cuando cambie el estado de inicio de sesión

    const [vMnuServicio, setMnuServicio] = useState('Tools Serv Tecnico');
    const [vMsgMarquesina, setvMsgMarquesina] = useState('');
    const [vProgBarLeyend, setvProgBarLeyend] = useState('');
    const [vProgBarPrcnt, setvProgBarPrcnt] = useState(0);
    const [isMenuVertical, setIsMenuVertical] = useState(false); // Estado para controlar la orientación del menú
    const [isMenuApp, setIsMenuApp] = useState(false); // Estado Incial
    const [vlUserData, vlUserCredential] = useState();

    const toggleMenuApp = () => {
        setIsMenuApp(prevState => !prevState);
    };

    const toggleLoguedApp = () => {
        handleMoveTo('FormLoguin');

        // previo al formulario de loguin 
        // setIsLoguedApp(prevState => !prevState);
        // fncSetUsr();
        // isLoguedApp ? fncSetUsr() : 'Hiden';
        // isLoguedApp ? setvMsgMarquesina('Lo siento a ocurrido un Error,  Por favor consulta con el soporte o revisa las credenciales') : setvMsgMarquesina('Felicitaciones te has logueado en nuestro sistema');
    };

    const toogleMnuAllOff = () => {
        setIsMenuApp(false);
        setIsLoguedApp(false);
    };

    const handleMenuClick = (pMnuOpc) => {
        switch (pMnuOpc) {
            case 'Mnu-Idioma':
                break;
            case 'Mnu-CerrarSesion':
                fncSetMnuAdmView(false); // Oculta Menu Sistema
                setIsMenuApp(false);
                setIsLoguedApp(false);
                setIsMenuVertical(false);
                break;
            case 'Mnu-TblUsuarios':
                console.log(`El menu que has elegido fue .>> ${pMnuOpc}`);
                break;
            case 'Mnu-TblCredenciales':
                console.log(`El menu que has elegido fue .>> ${pMnuOpc}`);
                break;
            case 'MnuAppointments':
                console.log(`El menu que has elegido fue .>> ${pMnuOpc}`);
                break;
            default:
                console.log(`El menu que has elegido fue .>> ${pMnuOpc}`);
                break;
        }
    };

    const toogleMnuAll = (pMnuOpc) => {
    };

    const toggleMenuOrientation = () => {
        setIsMenuVertical(prevState => !prevState); // Alternar entre vertical y horizontal
        if (ImgMenuHamVrt) {
            // nav-mnu-SrvTec Habilitar
            isLoguedApp ? vMsgMarquesina('Felicitaciones te has logueado en nuestro sistema') : vMsgMarquesina('Lo siento a ocurrido un Error,  Por favor consulta con el soporte o revisa las credenciales');

        } else {
            // nav-mnu-SrvTec DesHabilitar
        };
    };

    // Función para validar si el usuario es administrador
    const fncValLocAdmin = (vlUserCredential) => {
        if (vlUserCredential.idUsuario !== 0 && vlUserCredential.idRole !== 3) {
            return '';
        } else {
            return 'hidden';
        }
    };
    // Llamada a la función para validar el estado del usuario
    const userAdminClass = fncValLocAdmin(vlUserCredential);

    const handleSignUpClick = () => {
        console.log(`Pasando por signup en handleSignUpClick .`);
        // <Link to="/signup" />
        window.location.href = '/signup';
        // history.push('/signup');
    };

    const handleMoveTo = (opcMnu) => {
        console.log(`Pasando por handle move to ${opcMnu}`);
        switch (opcMnu) {
            case 'FormHome': // handleMoveTo('FormLoguin')
                window.location.href = '/';
                break;

            case 'FormLoguin': // handleMoveTo('FormLoguin')
                window.location.href = '/signin';
                break;

            case 'FormSingUp': // handleMoveTo('FormSingUp')
                window.location.href = '/signup';
                break;

            case 'FormContacto':
                window.location.href = '/contacto';
                break;

            default:
                alert(`Testing move to  ${opcMnu}`);
                break;
        }
    };

    return (
        <>
            <div className={styles.container + ' ' + styles.navbar}>
                <div className={`${styles['nav-left']} ${styles['seccmpt']}`}>
                    <img src={ImgCompanyLogo} alt="Logo de la Compañia.." />
                    <h5 className={styles['company']} onClick={() => { handleMoveTo('FormHome') }}> Bpo Clinics</h5>
                </div>
                <div className={styles['separator-hr']}></div>
                <div className={`${styles['nav-middle']}`}>
                    <div className={`${styles['ctrl-cntd-prog-bar']} ${styles['seccmpt']}`}>
                        <ProgressBar
                            vProgBarLeyend={vProgBarLeyend}
                            vProgBarMinimo={0}
                            vProgBarMaximo={100}
                            vProgBarValue={vProgBarPrcnt}
                        />
                    </div>
                    <div className={`${styles['ctrl-msg-markee']} ${styles['seccmpt']}`} >
                        <MsgMarquesinasina msg={vMsgMarquesina} />
                    </div>
                </div>
                <div className={styles['separator-hr']}></div>

                <div className={`${styles['nav-rigth']}`}>
                    <div className={`${styles['nav-brand-name']} ${styles['seccmpt']} ${styles['hidden']} `} id='nav-mnu-app-ico'>
                        {/* Aquí se alternará entre las imágenes horizontal y vertical */}
                        <img
                            src={isMenuApp ? ImgMenuHamVrt : ImgMenuHamHrz}
                            alt="Ícono del menú"
                            id='id-mnu-ham-app'
                            onClick={toggleMenuApp}
                        />
                    </div>
                    <div className={`${styles['nav-brand-name']} ${styles['seccmpt']} ${styles['hidden']} `} id='nav-mnu-app-mnu'>
                        <h3 id='id-mnu-srv-app' onClick={toggleMenuApp}>Menu de Admin</h3>
                    </div>

                    <div className={styles['separator-hr']} id='id-sep-der-brandname'></div>
                    <div className={`${styles['nav-brand-name']} ${styles['seccmpt']}`}>
                        {/* Aquí se alternará entre las imágenes horizontal y vertical */}
                        <img
                            src={isMenuVertical ? ImgMenuHamVrt : ImgMenuHamHrz}
                            alt="Ícono del menú"
                            id='id-mnu-ham-app'
                            // onClick={()=>{handleMoveTo('MnuVertical')}}
                            onClick={toggleMenuOrientation}
                        />

                    </div>
                    <div className={styles['separator-hr']} id='id-sep-der-brandname'></div>
                    <div className={`${styles['nav-brand-name']} ${styles['seccmpt']}`}>
                        <h6>{usrStore}</h6>
                        <img src={UsrLogAnonimous} alt="Logo Anonimous" id='idusricon' height="2rem" onClick={() => { handleMoveTo('MnuVertical') }} />
                    </div>
                    <div className={styles['separator-hr']} id='id-sep-der-mnulogueo'></div>

                    <div className={`${styles['nav-brand-name']} ${styles['seccmpt']}`} >
                        <h3 onClick={() => { handleMoveTo('FormContacto') }}> Contacto </h3>
                        <img src={UsrEmail} alt="Icono de Contacto" id='idusremail' height="2rem" onClick={() => { handleMoveTo('FormContacto') }} />
                    </div>
                </div>
            </div>
            <div className={`${styles['nav-mnu-menu-app']}  ${isMenuApp ? '' : styles.hidden} ${styles['seccmpt']}`} id='id-nav-mnu-MenuApp'>
                <h3 className={`${styles['nav-mnu-menu-app-tit']}`}> -- Adminstrador -- </h3>
                <div className={styles['separator-vr']} id='id-sep'></div>
                <h3 className={`${styles['nav-mnu-menu-app-itm']}`} onClick={() => handleMenuClick('MnuUsuarios')} id='MnuUsuarios'>Usuarios</h3>
                <h3 className={`${styles['nav-mnu-menu-app-itm']}`} onClick={() => handleMenuClick('MnuCredenciales')} id='MnuCredenciales'>Credenciales</h3>
                <h3 className={`${styles['nav-mnu-menu-app-itm']}`} onClick={() => handleMenuClick('MnuAppointments')} id='MnuAppointments'>Turnos</h3>
            </div>
            <div className={`${styles['nav-mnu-usr-logoff']} ${isMenuVertical ? '' : styles.hidden} ${isLoguedApp ? styles.hidden : ''} ${styles['seccmpt']}`} id='frm-nav-mnu-usr-logoff'>
                <h3 className={`${styles['nav-mnu-menu-app-tit']}`}>[ Loguin Usuario Anonimo ]</h3>
                <div className={styles['separator-vr']} id='id-sep'></div>
                <h3 className={`${styles['nav-mnu-menu-app-itm']}`} onClick={toggleLoguedApp} id='id-nav-mnu-MenuAppIniciar'>Iniciar </h3>
                <h3><br /></h3>
                <div className={styles['separator-vr']} id='id-sep'></div>
                <h3 className={`${styles['nav-mnu-menu-app-itm']}`} onClick={() => { handleMoveTo('FormSingUp') }} >Registrarse</h3>
            </div>
            <div className={`${styles['nav-mnu-usr-login']}  ${isMenuVertical ? '' : styles.hidden} ${isLoguedApp ? '' : styles.hidden} ${styles['seccmpt']}`} id='frm-nav-mnu-usr-login'>
                <h3 className={`${styles['nav-mnu-menu-app-tit']}`}>[ Menu Usuario Registrado ]</h3>
                <div className={styles['separator-vr']} id='id-sep'></div>
                <h3 className={`${styles['nav-mnu-menu-app-itm']}`} >Perfil de Usuario</h3>
                <div className={styles['separator-vr']} id='id-sep'></div>
                <h3 className={`${styles['nav-mnu-menu-app-itm']}`} >Calendario de Turnos</h3>
                <h3 className={`${styles['nav-mnu-menu-app-itm']}`} >Solicitar un Turno</h3>
                <div className={styles['separator-vr']} id='id-sep'></div>
                <h3 className={`${styles['nav-mnu-menu-app-itm']}`} onClick={() => handleMenuClick('Mnu-CerrarSesion')} id='id-nav-mnu-MenuAppCerrar'>Cerrar Sesion</h3>
            </div>
        </>
    );
}

function fncSetUsr() {
    const isAdmin = window.confirm('¿El usuario es administrador?');
    if (isAdmin) {
        const vlUserData = { id: 1, nombres: 'Usu ADM', apellidos: 'Admin', email: 'admin@gmail.com', birthday: '11/11/1971', nDni: '22457444', idEstado: 1 };
        const vlUserCredential = { id: 1, idUsuario: 1, loguin: 'root', password: '..', idRole: 1, idEstado: 1 };
        console.log(`Datos aportados (User Admin) :> `, vlUserData, vlUserCredential);
        fncSetMnuAdmView(true); // Muestra Menu Sistema
        return { vlUserData, vlUserCredential };
    } else {
        const vlUserData = { id: 4, nombres: 'Usu TEST', apellidos: 'Test', email: 'test@gmail.com', birthday: '11/11/2021', nDni: '11000222', idEstado: 1 };
        const vlUserCredential = { id: 2, idUsuario: 4, loguin: 'test', password: '..', idRole: 3, idEstado: 1 };
        console.log(`Datos aportados (User Std) :> `, vlUserData, vlUserCredential);
        fncSetMnuAdmView(false); // Oculta Menu Sistema
        return { vlUserData, vlUserCredential };
    }
}

function fncSetMnuAdmView(pSet) {
    const idMnuAppIco = document.getElementById('nav-mnu-app-ico');
    const idMnuAppMnu = document.getElementById('nav-mnu-app-mnu');

    if (pSet) {
        idMnuAppIco.classList.remove(styles.hidden);
        idMnuAppMnu.classList.remove(styles.hidden);
    } else {
        idMnuAppIco.classList.add(styles.hidden);
        idMnuAppMnu.classList.add(styles.hidden);
    }
}
export default NavBar;