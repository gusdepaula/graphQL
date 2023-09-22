const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "Bom dia";
  },
  horaAtual() {
    return `${new Date()}`;
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Ana da Web",
      email: "anadaweb@email.com",
      idade: 23,
      salario_real: 1234.56,
      vip: true,
    };
  },
  produtoEmDestaque() {
    return {
      nome: "Notebook Gamer",
      preco: 4890.89,
      desconto: 0.15,
    };
  },
  numerosMegaSena() {
    // return [4, 8, 13, 27, 33, 54];
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(() => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, args) {
    const selecionados = usuarios.filter((u) => u.id === args.id);
    return selecionados ? selecionados[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const selecionados = perfis.filter((p) => p.id === id);
    return selecionados ? selecionados[0] : null;
  },
};
