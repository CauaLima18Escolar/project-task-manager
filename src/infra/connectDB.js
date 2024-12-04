import mysql from 'mysql2';

// Objeto que contém as configuracões de conexão com o banco MySQL
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_manager'
}

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
    if (error){
        console.log("Erro na conexão com o banco: ", error.message);
        process.exit(1);
    }

    console.log('Conexão realizada com sucesso');
});

export default connection;