# Modelos utilizados na criação das tabelas do projeto

```sql
-- Modelo de tabela 'Projeto'
create table projeto (
   	id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(300) not null
);

-- Modelo de tabela 'Tarefa'
CREATE TABLE tarefa (
    id int AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(200) not null,
    descricao text,
    STATUS ENUM('pendente', 'em progesso', 'concluída') DEFAULT 'pendente',
    data_criacao timestamp DEFAULT CURRENT_TIMESTAMP,
    prioridade ENUM('baixa', 'média', 'alta') DEFAULT 'média',
    projeto_id int not null,
    FOREIGN KEY (projeto_id) REFERENCES projeto(id) ON DELETE CASCADE
);
```

## Observações: 

<br>

**AUTO_INCREMENT** -> Significa que esse valor será automaticamente incrementado ao longo da tabela.

**PRIMARY KEY** -> Significa que esse valor é uma **chave primária** do registro em questão, ou seja, é uma chave que não se repete e faz referência apenas à um registro. 

**VARCHAR( N )** -> Significa que o valor em questão da tabela será limitado a uma quantidade **N** de caracteres.



-- Inserir projetos
INSERT INTO projeto (nome) VALUES ('Exploração Espacial');
INSERT INTO projeto (nome) VALUES ('Fábrica de Invenções');
INSERT INTO projeto (nome) VALUES ('Cidade Inteligente');

-- Inserir tarefas para o Projeto "Exploração Espacial"
INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES ('Lançamento da Nave', 'Preparar a nave para a missão a Marte, incluindo a verificação dos sistemas de propulsão.', 1);
INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES ('Treinamento dos Astronautas', 'Ensinar os astronautas a realizar manobras espaciais avançadas, incluindo a caminhada no espaço.', 1);
INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES ('Monitoramento de Asteroides', 'Configurar telescópios para monitorar possíveis asteroides que possam interferir na missão.', 1);

-- Inserir tarefas para o Projeto "Fábrica de Invenções"
INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES ('Criação do Robô Futurista', 'Desenvolver um robô que possa realizar tarefas domésticas e ajudar na educação.', 2);
INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES ('Invenção de Transporte Sem Roda', 'Criar um veículo capaz de se mover sem rodas, usando princípios de levitação magnética.', 2);
INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES ('Impressão 3D de Comidas', 'Desenvolver uma impressora 3D capaz de criar alimentos nutritivos a partir de ingredientes básicos.', 2);

-- Inserir tarefas para o Projeto "Cidade Inteligente"
INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES ('Sistema de Trânsito Autônomo', 'Desenvolver e testar um sistema de tráfego que utiliza inteligência artificial para otimizar o fluxo de veículos.', 3);
INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES ('Construção de Edifícios Ecológicos', 'Planejar e construir prédios que utilizam energia solar, reciclagem de água e materiais sustentáveis.', 3);
INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES ('Rede de Internet Ultra Rápida', 'Instalar uma rede de internet de alta velocidade que abranja toda a cidade, com baixa latência e alta confiabilidade.', 3);
