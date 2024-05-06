// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\react plnt\src\redux\actions.js  
import { createAction } from '@reduxjs/toolkit';

// Acciones para productos
export const addProduct = createAction('products/addProduct');
export const removeProduct = createAction('products/removeProduct');

// Acciones para historias
export const addHistory = createAction('historys/addHistory');
export const removeHistory = createAction('historys/removeHistory');

// Acciones para feedback
export const addFeedback = createAction('feedback/addFeedback');
export const removeFeedback = createAction('feedback/removeFeedback');

// Acciones para contactos
export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
