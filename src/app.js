import express from "express";
import connection from "./infra/connectDB.js";

//Criar o objeto express
const app = express();

//Configurando o express. No caso, estou pedindo para ele utilizar 
//o conversor Json do próprio express
app.use(express.json()); 

app.get('/',(req, res) => {
    res.status(200).send("Versão 1.0.0");
});


// EndPoints do Projeto
app.get('/projetos', (req, res) => {
   connection.query('SELECT * FROM projeto', (err, results) => {
    if (err) {
        res.status(500).send('Erro ao consultar o banco');
        return;
    }

    res.json(results);
   });
});

app.get('/projeto/:id/tarefas', (req, res) => {
    const project_id = req.params.id;

    connection.query(`SELECT * FROM tarefa WHERE projeto_id = ${project_id}`,  (err, results) => {
        if (err) {
            res.status(500).send('Erro ao consultar o banco ', err);
            return;
        };

        if (results.length === 0) {
            res.status(404).send('Nenhuma tarefa encontrada');
            return;
        };

        res.json(results);
    });
});

app.get('/tarefas', (req, res) => {
    connection.query('SELECT * FROM tarefa', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao consultar o banco');
            return;
        };

        res.json(results);
    });
});

export default app;