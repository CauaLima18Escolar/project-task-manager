import mysql from 'mysql2';
import util from "util"

// Objeto que contém as configuracões de conexão com o banco MySQL
const dbConfig = {
    host: 'localhost',
    user: process.env.USER_DB || 'root',
    password: process.env.PASSWORD_DB || '',
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

// Transforma o método query do objeto connection em promise
connection.query = util.promisify(connection.query).bind(connection)

export default connection;