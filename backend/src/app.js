import express from "express";

// Criar o objeto Express
const app = express();

// Configurando o Express. No caso, estou pedindo para ele utilizar o conversor Json do próprio Express.
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Versão 1.0.0');
});

export default app;