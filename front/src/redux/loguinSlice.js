// File C:\Home\Developing\PM3-FernandoMGan\front\src\redux\loguinSlice.js

import { createSlice } from "@reduxjs/toolkit";
import UsrLogOut from '../assets/toolbar/user-spy.svg';
import UsrLogIn from '../assets/toolbar/user-id-svgrepo-com.svg';
import UsrLogTry from '../assets/toolbar/waiting-room-svgrepo-com.svg';

const LoguinState = {
    OUT: 'OUT',
    TRY: 'TRY',
    IN: 'IN',
};

export const loguinSlice = createSlice({
    name: 'loguin',
    initialState: {
        estado: LoguinState.OUT,
        estadoLogo: UsrLogOut,
        estadoDesc: ' ( Sesion Anonima ) ',
        id: 0,
        nombre: '',
        apellido: '',
        email: '',
        birthdate: '',
        nDni: '',
        credentialsId: '',
        username: '',
        password: '',
        role: '',
        roleDsc: ''
    },
    reducers: {
        toggleLoguin: (state) => {
            const nextState = {
                OUT: { estado: LoguinState.TRY, estadoLogo: UsrLogTry, estadoDesc: ' ( Intento de loguin ) ' },
                TRY: { estado: LoguinState.IN, estadoLogo: UsrLogIn, estadoDesc: ` ( Sesion Iniciada ) ` },
                IN: { estado: LoguinState.OUT, estadoLogo: UsrLogOut, estadoDesc: ' ( Sesion Anonima ) ' }
            };

            const currentState = state.estado;
            const nextStateConfig = nextState[currentState];
            Object.assign(state, nextStateConfig);
        },
        takeTryLoguin: (state) => {
            state.estado = LoguinState.TRY;
            state.estadoLogo = UsrLogTry;
            state.estadoDesc = ' ( Intento de loguin ) ';
        },
        takeInLoguin: (state) => {
            state.estado = LoguinState.IN;
            state.estadoLogo = UsrLogIn;
            state.estadoDesc = ` ( Sesion Iniciada ) `; // ${state.apellido}, ${state.nombre}
        },
        takeOutLoguin: (state) => {
            state.estado = LoguinState.OUT;
            state.estadoLogo = UsrLogOut;
            state.estadoDesc = ' ( Sesion Anonima ) ';
        },
        showStateLoguin: (state, action) => {
            const message = action.payload;
            alert(`El estado del loguin ( ${message} ) es :> ${state.estadoDesc}, El usuario en linea es :> ${state.apellido}, ${state.nombre}`);
        },
        x: (state, action) => { },
        xx: (state, action) => { },
    }
});

export const { toggleLoguin, takeTryLoguin, takeInLoguin, takeOutLoguin, showStateLoguin } = loguinSlice.actions;

export default loguinSlice.reducer;
