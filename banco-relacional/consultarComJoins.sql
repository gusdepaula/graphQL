-- SELECT * from cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;

-- SELECT * FROM prefeitos;

-- SELECT * from cidades c LEFT OUTER JOIN prefeitos p ON c.id = p.cidade_id;

-- SELECT * from cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;

-- SELECT * from cidades c FULL JOIN prefeitos p ON c.id = p.cidade_id;


 SELECT * from cidades c LEFT OUTER JOIN prefeitos p ON c.id = p.cidade_id
 UNION ALL
SELECT * from cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;