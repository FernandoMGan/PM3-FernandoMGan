const mySql = require('mySql');
const config = require('../config');
const { Module } = require('module');

// Variable de conexion a base de datos
const dbconfig = {
    host: config.mySql.host,
    user: config.mySql.user,
    password: config.mySql.password,
    database: config.mySql.database,
}

let conexion;

function conMySql() {
    conexion = mySql.createConnection(dbconfig);

    conexion.connect((err) => {
        if (err) {
            console.log('[Db error ???]', err);
            setTimeout(conMySql, 200);
        } else {
            console.log('Db conectada !!!');
        }
    });
    conexion.on('db error conect', err => {
        console.log('Db error conect', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conMySql();
        } else {
            throw error;
        }
    })
}
// Conectando a la base de datos
conMySql();

// Funciones para el metodo crud
function regCreate(table, data) {

}

function regReadOne(tabla, id) {

}

function regReadAll(tabla) {

}

function regUpdate(tabla, id) {

}

function regDelete(tabla, id) {

}

// Funciones de inicializacion
function regInit(tabla, data) {

}

module.exports = {
    regCreate, regReadOne, regReadAll, regUpdate, regDelete, regInit
}