// File C:\Home\Developing\PM3-FernandoMGan\front\src\redux\store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

