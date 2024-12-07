# Sobre dbInterface ✨

Este arquivo é responsável por **interagir** com a conexão ao banco de dados, utilizando a conexão configurada em dbConnect.js para executar consultas.

## Vamos entender melhor:

**1.** Lembra que exportamos connection do arquivo dbConnect.js? Pois é! Agora podemos importar e usar o objeto de conexão em qualquer parte do nosso código, e é exatamente isso que o trecho abaixo faz:

```javascript
import connection from "./dbConnect.js";
```

**2.** Em seguida, criamos um objeto chamado **DBInterface**, que possui um método chamado **query**. Este método precisa de dois parâmetros (sql e params) para a manipulação dos dados. O que acontece aqui é que o método query é responsável por realizar as consultas no banco de dados, de acordo com o que for passado para ele nos parâmetros.

Ou seja, esse objeto é capaz de tratar solicitações **GET** (leitura), **POST** (criação), **PUT** (atualização) e **DELETE** (exclusão). Além disso, ele conta com um tratamento de erros, implementado por meio de um bloco **try...catch**.

```javascript
const DBInterface = {
    async query(sql, params) {
        try {
            const results = await connection.query(sql, params);
            return results;
        } catch(err) {
            console.error('Erro no banco de dados: ', err.message);
            throw err;
        }
    }
};
```

**3.** Por fim, estamos exportando o objeto DBInterface para que ele possa ser utilizado em outras partes da nossa aplicação:

```javascript
export default DBInterface;
```