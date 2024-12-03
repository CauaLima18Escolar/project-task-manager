-- Exemplos de adição de registros
INSERT INTO projeto (nome) VALUES ('XXX');

-- Exemplos de consulta
SELECT * FROM projeto; -- Todas as colunas
SELECT id FROM projeto; -- Só a coluna id
SELECT nome FROM projeto; -- Só a coluna nome
SELECT id, nome FROM projeto; -- As duas colunas

-- Exemplos de consultas com where (condição)
SELECT * FROM projeto WHERE nome LIKE 'Gu%';
SELECT * FROM projeto WHERE id = 2;

-- Exemplo de exclusão de registros (PERIGOSO!)
-- delete from projeto;
-- delete from projeto where id = 3; (MENOS PERIGOSO MAS AINDA É PERIGOSO KKK)

-- Atualizar registros
UPDATE projeto SET nome = 'XXX' WHERE id = 1;