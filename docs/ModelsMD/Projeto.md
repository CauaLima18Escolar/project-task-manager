# Sobre Projeto ✨

Este arquivo é responsável por definir o modelo "Projeto", que é representado por uma classe com atributos e métodos para manipular os dados associados a um projeto.

## Vamos entender melhor:

**1.** Primeiro, criamos uma classe chamada Projeto.
Ela serve como um molde para criar objetos que representam projetos.

Dentro dessa classe, temos um construtor, que é uma função especial usada para inicializar os atributos do objeto assim que ele é criado.
O construtor recebe dois parâmetros: **id** e **nome**.

Esses valores são usados para configurar os atributos privados da classe, que são definidos com um prefixo _ para indicar que não devem ser acessados diretamente fora da classe

```javascript
class Projeto {
    constructor(id, nome) {
        this._id = id;
        this._nome = nome;
    }

    // ... Resto do código ...

}
```

**2.** Dentro da classe nos temos alguns métodos que são usados para definir ou ler o ID ou nome de um projeto criado por essa classe:

```javascript
setID(id){
        this._id = id;
    }

    setNome(nome){
        this._nome = nome;
    }

    getID(){
        return this._id;
    }

    getNome(){
        return this._nome;
    }
```

**3.** Agora exportamos nosso modelo de Projeto para utilizar em outro contexto do nosso projeto:

```javascript
export default Projeto;
```