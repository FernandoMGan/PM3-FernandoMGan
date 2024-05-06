// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\react plnt\src\views\LoguinSingIn.jsx

import React, { useState, useEffect } from 'react';
import CompanyLogo from '../assets/company/CompanyLogo.svg';
import styles from '../components/LoguinSingUp.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImgEye from '../assets/buttons/eye.svg';
import ImgEyeSlash from '../assets/buttons/eye-slash.svg';
import ImgCheck from '../assets/buttons/check.svg';
import ImgExclaOctagon from '../assets/buttons/exclamation-octagon.svg';
import ImgCancel from '../assets/buttons/x-octagon.svg';

const LoguinSingIn = () => {
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
        const secondPassword = event.target.value;
        const isPasswordMatch = userData.password === secondPassword;
        setIsPasswordSame(isPasswordMatch);
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
        document.getElementById("myFormSingIn").reset();
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
        const emailInput = document.getElementById('logEmail');
        const isValidEmail = validateEmail(emailInput.value);

        const clogPassword = document.getElementById('logPassword');
        // const clogPasswordChk = document.getElementById('logPasswordChk');

        // Actualizar estados de los campos de entrada
        setUserData({
            ...userData,
            // nombres: document.getElementById('logNombres').value,
            // apellidos: document.getElementById('logApellidos').value,
            email: emailInput.value,
            password: document.getElementById('logPassword').value,
            birthday: '', // Actualiza el estado del cumpleaños según sea necesario
            nDni: '' // Actualiza el estado del número de DNI según sea necesario
        });

        // Verificacion del formulario  
        let vmsg = '';
        // if (userData.nombres == '') { vmsg += 'EL/Los nombre/s no es valido \n' }
        // if (userData.apellidos == '') { vmsg += 'El apellido no es valido \n' }
        if (!isValidEmail) { vmsg += 'El email no es valido \n' }
        if (!isPasswordValid) { vmsg += 'El password no es valido \n' }
        // if (clogPassword.value !== clogPasswordChk.value) { vmsg += 'Los passwords no coinciden \n' }

        // console.log(`Muestra Resultante de vmsg :> ${vmsg}`);
        if (!vmsg == '') {
            alert(vmsg);
            return
        }
        alert(
            `Info de user Data .. :>> \n 
                Nombres : ${userData.nombres}  \n
                Apellidos : ${userData.apellidos}  \n
                Email : ${userData.email}  \n
                Password : ${userData.password}  \n`, userData);
    }

    return (
        <form onSubmit={handleOnSubmit} id='myFormSingIn'>
            <div className={styles['frm-cntd-ppal']}>
                <div className="container text-center" id="cntd-ppal">
                    <center>
                        <img src={CompanyLogo} alt="logo" className="logo" height="150" width="150" id="id-cmp-logo" />
                    </center>
                    <br />
                    <h3 className="subtitle">Bienvenido</h3>
                    <br />
                    {/* <input type="text" id="logNombres" name='nombres' placeholder="Ingresa tus nombres" className="input identid" onChange={handleInputChange} />
                    <input type="text" id="logApellidos" name='apellidos' placeholder="Ingresa tus apellidos" className="input identid" onChange={handleInputChange} /> */}
                    {/* <br /> */}
                    {/* <br /> */}
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
                    {/* <div className="passwd">
                        <label htmlFor="password" className="label">Repetir Contraseña Ingresada</label>
                        <div className="frmChkPswdChk">
                            <input type="password" id="logPasswordChk" placeholder="*********" className="input input-password" maxLength="12" onChange={handlePasswordCheck} />
                            <img className={styles.hidden} src={ImgEye} alt="Verif Password FP" id="idImgEyeChk" />
                            <img className={''} src={ImgEyeSlash} alt="Verif Password FP" id="idImgEyeSlashChk" onClick={() => togglePasswd('logPasswordChk', 'idImgEyeSlashChk')} />
                            <img className={isPasswordSame ? '' : styles.hidden} src={ImgCheck} alt="Verif Password FP" id="idImgCheckChk" />
                            <img className={isPasswordSame ? styles.hidden : ''} src={ImgExclaOctagon} alt="Verif Password FP" id="idImgExclaOctagonChk" />
                        </div>
                    </div>
                    <br /> */}
                    <br />
                    <div className="formLoguinButton">
                        <div className="formLoguinButton" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <input type="button" value="ACEPTAR " className="primary-button login-button" id="btnFormOk" onClick={handleOnSubmit} />
                            <input type="button" value="CANCELAR " className="secundary-button login-button" id="btnFormCancel" onClick={() => location.href = '../index.html'} />
                            {/* <input type="button" value="CANCELAR " className="secundary-button login-button" id="btnFormCancel" onClick={handleCancelClick} /> */}
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
    const clogPasswordChk = document.getElementById('logPasswordChk');
    const iChkOk = document.getElementById('idImgCheckChk');
    const iChkBad = document.getElementById('idImgExclaOctagonChk');

    console.log(`Pasando por Verif Pass WD Primer Password (${clogPassword.value}) , Segundo Password (${clogPasswordChk.value}) `);
    if (clogPassword.value === clogPasswordChk.value) {
        console.log(`Claves iguales, se muestra icono ok`);
        iChkOk.classList.remove(styles.hidden);
        iChkBad.classList.add(styles.hidden);
    } else {
        console.log(`Claves distintas, se muestra icono bad`);
        iChkOk.classList.add(styles.hidden);
        iChkBad.classList.remove(styles.hidden);
    }
}
export default LoguinSingIn;
