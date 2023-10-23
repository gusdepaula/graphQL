-- SELECT * FROM estados

-- SELECT nome, sigla as 'Nome do estado' from estados where regiao  = "Sul"

SELECT nome, regiao, populacao as 'Nome do estado' from estados where populacao  >= 10 order by populacao DESC