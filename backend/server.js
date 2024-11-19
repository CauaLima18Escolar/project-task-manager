// Importando o Dotenv
import dotenv from "dotenv";
import app from "./src/app.js";

// Importando o Express
import express from "express";

dotenv.config();

// TCP
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor iniciado.')
});