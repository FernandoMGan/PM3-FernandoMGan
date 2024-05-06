// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\react plnt\src\redux\store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
