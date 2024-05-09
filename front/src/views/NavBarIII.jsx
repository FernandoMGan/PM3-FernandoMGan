// File C:\Home\Developing\PM3-FernandoMGan\front\src\views\NavBarIII.jsx
const DevMod = 'NavBarIII in views\NavBarIII.js';
// DevMsg.ByConsole(DevMod, 'Ctrol xx','Val xx');

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './NavBarIII.module.css';
import ImgCompanyLogo from '../assets/company/CompanyLogo.svg';
import UsrLogOut from '../assets/toolbar/user-spy.svg';
import UsrLogIn from '../assets/toolbar/user-id-svgrepo-com.svg';
import UsrLogTry from '../assets/toolbar/waiting-room-svgrepo-com.svg';

import { toggleLoguin, takeTryLoguin, takeOutLoguin } from '../redux/loguinSlice.js';
import DevMsg from '../helpers/DevsMsgs.js';
import Swal from 'sweetalert2';

const NavBarIII = () => {
    const sesionState = useSelector(state => state.loguin.estado);
    const sesionIcon = useSelector(state => state.loguin.estadoLogo);
    const sesionDesc = useSelector(state => state.loguin.estadoDesc);
    const loguinApellido = useSelector(state => state.loguin.apellido);
    const loguinNombres = useSelector(state => state.loguin.nombre);
    const loguinDesc = `${loguinApellido} ${(loguinApellido || loguinNombres) ? ',' : ''} ${loguinNombres}`

    const dispatch = useDispatch();

    useEffect(() => {
        // Ejecuta handleMoveTo('MoveToEstado') cuando el componente se monte
        handleMoveTo('MoveToEstado');
    }, []); // El array de dependencias vacío asegura que se ejecute solo una vez al montar el componente


    const handleMoveTo = (pMnu) => {
        switch (pMnu) {
            case 'MoveToCompany':
                dispatch(toggleLoguin());
                DevMsg.ByConsole('NavBarIII', 'Click Icon Company Nuevo', sesionState);
                break;
            case 'MoveToHome':
                break;
            case 'MoveToMisTurnos':
                break;
            case 'MoveToSolTurno':
                break;
            case 'MoveToLogIn':
                dispatch(takeTryLoguin());
                break;
            case 'MoveToLogOut':
                dispatch(takeOutLoguin());
                break;
            case 'MoveToEstado':
                DevMsg.ByConsole('NavBarIII', 'Inicio Form State', sesionState);
                DevMsg.ByConsole('NavBarIII', 'Inicio Form Icon', sesionIcon);
                DevMsg.ByConsole('NavBarIII', 'Inicio Form Dsc', sesionDesc);
                break;
            case 'MoveToLogUp':
                break;
            case 'MoveToLogCall':
                break;
            default:
                DevMsg.ByConsole('NavBarIII', 'Click Icon Menu', `Opcion Fue :> ${pMnu} Estado es :> ${sesionState}`);
                break;
        }
    };

    return (
        <div className={styles.container + ' ' + styles.navbar}>
            <button className='navBarItm'><img className='navBarImg' src={ImgCompanyLogo} alt="Logo de Compania" height={"20rem"} onClick={() => { handleMoveTo('MoveToCompany') }} /></button>
            <Link to="/" className='navBarItm'>Home</Link> 
            {sesionState === 'IN' && <button className='navBarItm' onClick={() => { handleMoveTo('MoveToMisTurnos') }} >Mis Turnos</button>}
            {sesionState === 'IN' && <button className='navBarItm' onClick={() => { handleMoveTo('MoveToSolTurno') }} >Solicitar Turno</button>}
            {sesionState === 'OUT' && <Link to="/signin" className='navBarItm' onClick={() => { handleMoveTo('MoveToLogIn') }}>Iniciar Sesion</Link>} 
            {sesionState === 'IN' && <button className='navBarItm' onClick={() => { handleMoveTo('MoveToLogOut') }} >Cerrar Sesion</button>}
            <button className='navBarItm' onClick={() => { handleMoveTo('MoveToEstado') }} >
                {loguinDesc}
                {sesionState === 'OUT' && <img className='navBarImg' src={UsrLogOut} alt="Logo de Loguin Out" height={"20rem"} />}
                {sesionState === 'TRY' && <img className='navBarImg' src={UsrLogTry} alt="Logo de Loguin Try" height={"20rem"} />}
                {sesionState === 'IN' && <img className='navBarImg' src={UsrLogIn} alt="Logo de Loguin In" height={"20rem"} />}
                {sesionDesc}
            </button>
            {sesionState === 'OUT' && <Link to="/signup" className='navBarItm'>Registrarse</Link>} 
            {sesionState === 'OUT' && <Link to="/signcall" className='navBarItm'>Contacto</Link>} 
        </div>
    );

}

export default NavBarIII;


