// File C:\Home\Developing\PM3-FernandoMGan\front\src\redux\reducer.js

import { combineReducers } from 'redux';
import loguinReducer from './loguinSlice'; // Importa tu reducer loguinSlice

const rootReducer = combineReducers({
  loguin: loguinReducer, // Agrega tu reducer loguinSlice al rootReducer
});

export default rootReducer;

