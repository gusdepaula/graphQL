const { ApolloServer, gql } = require("apollo-server");

const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "jsilva@email.com",
    idade: 29,
  },
  {
    id: 2,
    nome: "Maria Silva",
    email: "msilva@email.com",
    idade: 25,
  },
  {
    id: 3,
    nome: "José da Silva",
    email: "zesilva@email.com",
    idade: 55,
  },
];

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  # Pontos de entrada da sua API!
  type Query {
    ola: String
    horaAtual: Date
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]
  }
`;

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
  },
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto) {
        return produto.preco * (1 - produto.desconto);
      } else {
        return produto.preco;
      }
    },
  },
  Query: {
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
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`executando em ${url}`);
});
