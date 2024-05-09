// File C:\Home\Developing\PM3-FernandoMGan\front\src\views\LoguinSignIn.jsx
const DevMod = 'LoguinSignIn in views\LoguinSignIn.js';
// DevMsg.ByConsole(DevMod, 'Ctrol xx','Val xx');

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { takeInLoguin, takeOutLoguin, toggleLoguin } from '../redux/loguinSlice';

import CompanyLogo from '../assets/company/CompanyLogo.svg';
import styles from './LoguinSignIn.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImgEye from '../assets/buttons/eye.svg';
import ImgEyeSlash from '../assets/buttons/eye-slash.svg';
import ImgCheck from '../assets/buttons/check.svg';
import ImgExclaOctagon from '../assets/buttons/exclamation-octagon.svg';
import ImgCancel from '../assets/buttons/x-octagon.svg';
import ValidatorsData from '../helpers/Validators';
import DevMsg from '../helpers/DevsMsgs';
import DevSearch from '../helpers/DevSearches';
import Swal from 'sweetalert2';
import { mkUsers } from '../mokups/mkUsers';



const LoguinSignIn = () => {
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        password: '',
        birthday: '',
        nDni: ''
    });
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordSame, setIsPasswordSame] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        const emailInput = document.getElementById('logEmail');
        const isValidEmail = validateEmail(emailInput.value);
        const imgCheckEmail = document.getElementById('idImgCheckEmail');
        const imgCancelEmail = document.getElementById('idImgCancelEmail');

        if (isValidEmail) {
            imgCheckEmail.classList.remove(styles.hidden);
            imgCancelEmail.classList.add(styles.hidden);
        } else {
            imgCheckEmail.classList.add(styles.hidden);
            imgCancelEmail.classList.remove(styles.hidden);
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handlePasswordChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        setIsPasswordValid(validatePassword(value));
        fncVerifPassWD();
    };

    const handlePasswordCheck = (event) => {
        // const secondPassword = event.target.value;
        // const isPasswordMatch = userData.password === secondPassword;
        // setIsPasswordSame(isPasswordMatch);
        fncVerifPassWD();
    };

    useEffect(() => {
        const logEmailInput = document.getElementById('logEmail');
        logEmailInput.addEventListener('input', handleEmailChange);

        return () => {
            logEmailInput.removeEventListener('input', handleEmailChange);
        };
    }, []);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/;
        return passwordRegex.test(password);
    };

    const handleClear = () => {
        document.getElementById("myFormRegistry").reset();
        setIsPasswordValid(false);
        setIsPasswordSame(false);
        setShowPassword(false);

        const imgCheckEmail = document.getElementById('idImgCheckEmail');
        const imgCancelEmail = document.getElementById('idImgCancelEmail');
        imgCheckEmail.classList.add(styles.hidden);
        imgCancelEmail.classList.remove(styles.hidden);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const clogEmailInput = document.getElementById('logEmail').value;
        const clogPassword = document.getElementById('logPassword').value;

        const isValidEmail = ValidatorsData.isValidEmail(clogEmailInput);
        const isValidPassword = ValidatorsData.isValidPassword(clogPassword);

        DevMsg.ByConsole(DevMod, 'Click Aceptar', `( clogEmailInput :> ${clogEmailInput} )  <-->  ( clogPassword :> ${clogPassword} ) `);
        DevMsg.ByConsole(DevMod, 'Click Aceptar', `( isValidEmail :> ${isValidEmail} )  <-->  ( isValidPassword :> ${isValidPassword} ) `);

        if (!isValidEmail || !isValidPassword) {
            Swal.fire(`Ups !! algo ha pasado \n\n loguin erroneo`);
            return
        }
        // Navega de vuelta a la página de inicio
        // history.push('/'); // Reemplaza '/' con la ruta de tu página de inicio si es diferente
        
        
    }
    const handleOnAceptar = (event) => {
        dispatch(takeInLoguin());
        handleOnSubmit = (event)
    }
    const handleOnCancelar = (event) => {
        dispatch(takeOutLoguin());
    }

    return (
        <form onSubmit={handleOnSubmit} id='myFormRegistry'>
            <div className={styles['frm-cntd-ppal']}>
                <div className="container text-center" id="cntd-ppal">
                    <center>
                        <img src={CompanyLogo} alt="logo" className="logo" height="150" width="150" id="id-cmp-logo" />
                    </center>
                    <br />
                    <h3 className="subtitle">Ingresa tu email y la contraseña</h3>
                    <h3 className="subtitle">para acceder</h3>
                    {/* <br /> */}
                    {/* <input type="text" id="logNombres" name='nombres' placeholder="Ingresa tus nombres" className="input identid" onChange={handleInputChange} /> */}
                    {/* <input type="text" id="logApellidos" name='apellidos' placeholder="Ingresa tus apellidos" className="input identid" onChange={handleInputChange} /> */}
                    {/* <br /> */}
                    <br />
                    <div className="passwd">
                        <div className="FrmButOutLineEmail ivv-cntd" id='idFrmButOutLineEmail' >
                            <div id='idFrmButOutLineEmailsc'>
                                <div className="FrmButOutLine ivv" id="idivv">
                                    <input type="email" className="input text-center" id="logEmail" name='email' placeholder="Ingresa un email válido" onChange={handleEmailChange}></input>
                                    <img className={styles.hidden} src={ImgCheck} alt="Verif Password FP" id="idImgCheckEmail" />
                                    <img className={''} src={ImgCancel} alt="Verif Password FP" id="idImgCancelEmail" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="passwd">
                        <label htmlFor="password" className="label">Se recomienda una contraseña de (6 a 12 dígitos, 1 Mayúscula, 1 Número y al menos 1 Carácter)</label>
                        <div className="frmChkPswd">
                            <input type="password" id="logPassword" name='password' placeholder="*********" className="input input-password" maxLength="12" width="70%" onChange={handlePasswordChange} />
                            <img className={styles.hidden} src={ImgEye} alt="Verif Password FP" id="idImgEye" />
                            <img className={''} src={ImgEyeSlash} alt="Verif Password FP" id="idImgEyeSlash" onClick={() => togglePasswd('logPassword', 'idImgEyeSlash')} />
                            <img className={isPasswordValid ? '' : styles.hidden} src={ImgCheck} alt="Verif Password FP" id="idImgCheck" />
                            <img className={isPasswordValid ? styles.hidden : ''} src={ImgExclaOctagon} alt="Verif Password FP" id="idImgExclaOctagon" />
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
                            <input type="button" value="LIMPIAR " className="secundary-button login-button" id="btnFormReset" onClick={handleClear} />

                        </div>
                    </div>
                    <script src="../js/main.js"></script>
                </div>
            </div>
        </form>
    );
};

function togglePasswd(inputId, eyeOpenId) {
    var passwordInput = document.getElementById(inputId);
    var eyeOpenIcon = document.getElementById(eyeOpenId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeOpenIcon.src = ImgEye;
        eyeOpenIcon.style.fill = "green";
    } else {
        passwordInput.type = 'password';
        eyeOpenIcon.src = ImgEyeSlash;
        eyeOpenIcon.style.fill = "red";
    }
}
function fncVerifPassWD() {
    const clogPassword = document.getElementById('logPassword');
    const iChkOk = document.getElementById('idImgCheckChk');
    const iChkBad = document.getElementById('idImgExclaOctagonChk');
}
export default LoguinSignIn;
