-- INSERT INTO empresas (nome, cnpj) values ('Bradesco', 76226679000101), ('Vale', 60924861000198), ('Cielo', 33762394000174);

-- ALTER TABLE empresas modify cnpj VARCHAR(14);

-- desc empresas;

INSERT INTO empresas_unidades (empresa_id, cidade_id, sede) values (1,1,1), (1,2,0), (2,1,0), (2,2,1);