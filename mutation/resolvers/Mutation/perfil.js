const { perfis, proximoId } = require("../../data/db");

function indiceUsuario(filtro) {
  if (!filtro) return -1;
  const { id, email } = filtro;
  if (id) {
    return perfis.findIndex((u) => u.id === id);
  }

  return -1;
}

module.exports = {
  novoPerfil(_, { dados }) {
    const nomeExistente = perfis.some((u) => u.nome === dados.nome);
    if (nomeExistente) throw new Error("Perfil já cadastrado");
    const novo = {
      id: proximoId(),
      ...dados,
    };

    perfis.push(novo);
    return novo;
  },
  excluirPerfil(_, { filtro }) {
    const i = indicePerfil(filtro);

    if (i < 0) return null;
    const excluidos = perfis.splice(i, 1);
    return excluidos ? excluidos[0] : null;
  },
  alterarPerfil(_, { filtro, dados }) {
    const i = indicePerfil(filtro);
    if (i < 0) return null;

    perfis[i].nome = dados.nome;
    perfis[i].email = dados.email;
    if (dados.idade) perfis[i].idade = dados.idade;

    // const usuario = {
    //   ...perfis[i],
    //   ...args,
    // };

    // perfis.splice(i, 1, usuario);
    // return usuario;
    return perfis[i];
  },
};
