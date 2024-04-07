// file server.ts - Definicion de Servidor

// Seteos iniciales - Servidor Express - Plantilla
import express from "express";
import router from "./routes/index.router"; // Importar el router principal

// Definiendo Hilos de Servidor
const server = express();

server.use(express.json()); // Agrega paréntesis para llamar a la función json
server.use(router); // Agrega el router principal

export default server;
