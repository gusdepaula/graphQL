-- SELECT e.nome as Estado, c.nome as Cidade, regiao as Região from estados e, cidades c WHERE e.id = c.estado_id;

SELECT c.nome as Cidade, e.nome as Estado, regiao as Região from estados e INNER JOIN cidades c on e.id = c.estado_id;