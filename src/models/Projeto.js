class Projeto {
    constructor(id, nome) {
        this._id = id;
        this._nome = nome;
    }

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
}

export default Projeto;