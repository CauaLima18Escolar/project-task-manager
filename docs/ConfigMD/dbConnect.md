# Sobre dbConnect ✨

Este arquivo é responsável por importar e configurar a conexão entre nossa aplicação com o banco de dados MySQL. 

## Vamos entender melhor:

**1.** Nas primeiras duas linhas estamos importando duas bibliotecas (são vários comandos), "mysql" da biblioteca **"mysql2"** e em seguida importando "util" da biblioteca **"util"**.  
```javascript
import mysql from 'mysql2';
import util from "util";
```

**2.** Após isso, criamos um objeto que guarda informações importantes para a configuração de conexão: **host**, **user**, **password** e **database**.

```javascript
const dbConfig = {
    host: 'localhost',
    user: process.env.USER_DB || 'root',
    password: process.env.PASSWORD_DB || '',
    database: 'task_manager'
}
```

- **HOST:** Refere-se ao **endereço do servidor** em que o banco de dados está sendo executado. *"localhost"* significa que o banco de dados está sendo executado localmente, ou seja, o mesmo computador que a aplicação desenvolvida.

- **USER:** Refere-se ao **nome de usuário** usado para autenticar a conexão com o banco de dados. *"process.env.USER_DB"* é uma variável de ambiente criada em outro arquivo nomeado ".env". *"Root"* é um valor padrão utilizado pelo banco de dados

- **PASSWORD:** Refere-se a **senha do usuário** que será usado para autenticar a conexão. *"process.env.PASSWORD_DB"* é uma variável de ambiente criada em outro arquivo nomeado ".env". O valor padrão da password é uma string vazia ('') o que indica que não há nenhuma senha configurada para o usuário root.

- **DATABASE:** Refere-se ao **nome do banco de dados** com o qual a aplicação irá interagir.

<br>

**OBS:** Em USER e PASSWORD temos o operador **||** (or) presente e isso indica que ele vai pegar o valor que existir na variável de ambiente **OU** um valor padrão definido explicitamente no objeto dbConfig.

<br>

**3.** No trecho de código abaixo, criamos uma conexão com o banco de dados usando as configurações fornecidas no objeto anterior (dbConfig).

```javascript
const connection = mysql.createConnection(dbConfig);
```

**4.** Em seguida, chamamos o método (função) "connect" presente em "connection" (nosso objeto de conexão com o banco) que é utilizado para estabelecer a conexão com o banco. Passamos uma função para o método connect que tem como parâmetro "error" e serve para verificar **se** existem erros na conexão. **Se** não houver nenhum erro, o console exibirá "Conexão realizada com sucesso".

```javascript
connection.connect((error) => {
    if (error){
        console.log("Erro na conexão com o banco: ", error.message);
        process.exit(1);
    }

    console.log('Conexão realizada com sucesso');
});
```

**5.** Por fim o código abaixo transforma o método **query** em uma função baseada em Promises, permitindo usar async/await (JavaScript Assíncrono) em vez de callbacks e exporta a conexão configurada para que ela possa ser utilizada em outras partes do seu código.

```javascript
connection.query = util.promisify(connection.query).bind(connection)

export default connection;
```