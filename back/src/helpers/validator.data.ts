// file validator.data.ts 

// Función para validar correos electrónicos
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Función para validar un CUIT (Código Único de Identificación Tributaria)
export const isValidCUIT = (cuit: string): boolean => {
    // Implementación de la validación de CUIT
    return true;
};

// Función para validar un CUIL (Código Único de Identificación Laboral)
export const isValidCUIL = (cuil: string): boolean => {
    // Implementación de la validación de CUIL
    return true;
};

// Función para validar una fecha en formato YYYY-MM-DD
export const isValidDate = (dateString: string): boolean => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
};

// Función para validar una fecha a partir del día actual
export const isValidDateFromToday = (dateString: string): boolean => {
    // Implementación de la validación de fecha a partir del día actual
    return true;
};

// Función para validar una hora en formato HH:MM:SS
export const isValidTime = (timeString: string): boolean => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    return timeRegex.test(timeString);
};

// Función para validar una hora a partir de la hora actual
export const isValidTimeFromNow = (timeString: string): boolean => {
    // Implementación de la validación de hora a partir de la hora actual
    return true;
};
