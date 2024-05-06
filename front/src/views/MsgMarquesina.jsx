// File MarquesinaMsg.jsx

import React from 'react';
import styles from '../components/MarquesinaMsg.module.css';

const MsgMarquesinasina = ({ msg }) => {
    return (
        <div className={styles['marquee-container']}>
            <h5 className={styles['marquee-text']}>{msg}</h5>
        </div>
    )
}

export default MsgMarquesinasina;