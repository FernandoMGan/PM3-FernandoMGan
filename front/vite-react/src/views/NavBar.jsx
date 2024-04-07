import { useState } from 'react';
import styles from '../components/NavBar.module.css';
import ImgCompanyLogo from '../assets/company/ImgCompanyLogo.svg';
import ImgFIpng from '../assets/toolbar/fi.png';
import ImgFIsvg from '../assets/toolbar/fi.svg';
import ImgGemSvg from '../assets/toolbar/gem.svg';
import ImgListSvg from '../assets/toolbar/list.svg';
import ImgToolsSvg from '../assets/toolbar/tools.svg';
import ImgIncognitoSvg from '../assets/toolbar/incognito.svg';
import ImgWhatsAppSvg from '../assets/toolbar/whatsapp.svg';
import ImgLogInPng from '../assets/toolbar/butLogIn.png';
import ImgLogOffPng from '../assets/toolbar/butLogOff.png';

import ImgLogHrtPng from '../assets/toolbar/mnu-ham-hrt.png';
import ImgLogVrtPng from '../assets/toolbar/mnu-ham-vrt.png';
import ImgLogHrtSvg from '../assets/toolbar/mnu-ham-hrt.svg';
import ImgLogVrtSvg from '../assets/toolbar/mnu-ham-vrt.svg';

const NavBar = () => {
    //  Menu de Servicio Tecnico
    const [isMenuST, setIsMenuST] = useState(false);
    const toggleMenuST = () => {
        setIsMenuST(!isMenuST);
    };
    //  Menu de Loguin
    const [isMenuIn, setIsMenuIn] = useState(false);
    const toggleMenuIn = () => {
        setIsMenuIn(!isMenuIn);
    };

    //  Nav Bar
    return (
        <div className={styles.container + ' ' + styles.navbar}>
            <div className={styles['nav-left']}>
                <img src={ImgCompanyLogo} alt="Logo de la Compañia" />
                <h2 className={styles['company']}>Bpo Change</h2>
            </div>
            <div className={styles['nav-middle']}>
                <div className={styles['prog-bar-cntd hidden']} id="prog-bar-cntd">
                    <div className={styles['prog-bar-fndo']} id="prog-bar-fndo"></div>
                    <div className={styles['prog-bar-prc']} id="prog-bar-prc"></div>
                    <div className={styles['prog-bar-ley']} id="prog-bar-ley"></div>
                </div>
            </div>
            <div className={styles['nav-brand-name']}>
                <div className={styles['']}></div>
                <div className={styles['']}></div>
            </div>
            <div className={styles['nav-right']}>
                <div className={styles['nav-right-it']} onClick={toggleMenuST}>
                    <h3> Servicio Tecnico </h3>
                    <img id='ImgBrandMnu' src={isMenuST ? ImgLogHrtPng : ImgLogVrtPng} alt="Logo Brand Name" />
                </div>
                <div className={styles['separator-hr']}></div>
                <div className={styles['nav-right-it']} onClick={toggleMenuIn}>
                    <h3>{isMenuIn ? 'VUserLogued In' : 'VUserLogued Off'}</h3>
                    <img id='ImgLogIn' src={isMenuIn ? ImgLogInPng : ImgLogOffPng} alt="Logo Incognito" />
                    {/* {isMenuIn && (
                        <div className="dropdown" id='MnuLogInDW'></div>
                    )} */}
                </div>
                <div className={styles['separator-hr']}></div>
                <div className={styles['nav-right-it']}><h3> Contacto </h3></div>
            </div>
        </div>
    );
}

export default NavBar;
