const perfis = [
  { id: 1, nome: "comum" },
  { id: 2, nome: "administrador" },
  { id: 3, nome: "administrador" },
];

const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "jsilva@email.com",
    idade: 29,
    perfil_id: 1,
    status: "ATIVO",
  },
  {
    id: 2,
    nome: "Maria Silva",
    email: "msilva@email.com",
    idade: 25,
    perfil_id: 2,
    status: "INATIVO",
  },
  {
    id: 3,
    nome: "José da Silva",
    email: "zesilva@email.com",
    idade: 55,
    perfil_id: 3,
    status: "BLOQUEADO",
  },
];

module.exports = { usuarios, perfis };
