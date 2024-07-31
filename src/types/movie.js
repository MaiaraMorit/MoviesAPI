//DEFINE TYPES
const { ApolloServer, gql } = require('apollo-server');

//SCHEMA
export const typeDefs = gql `
    type Movie {
        id: ID!
        title: String!
        year: Int!
        genre: String!
        director: String!
        image: String
    }

    type Query {
        movies:[Movie]
        movie(id: ID!): Movie
    }
    type Mutation {
        create(id: ID!, title: String!, year: Int!, genre: String!, director: String!, image: String): Movie
        update(id: ID!, title: String, year: Int, genre: String, director: String, image: String): Movie
        delete(id: ID!): Movie
    }
`;


//SCHEMA
//const typeDefs = gql `
//    type Movie {
//        id: ID!
//        title: String!
//        year: Int!
//        genre: String!
//        director: String!
//        image: String
//    }
//
//    type Query {
//        movies:[Movies] - pegar todos os filmes do db.
//        book(id: ID!): Book - pegar um filme do db selecionado por id.
//    }
//    type Mutation {
//        create(id: ID!, title: String!, year: Int!, genre: String!, director: String!, image: String): Movie  - Criar um novo filme.
//        update(id: ID!, title: String, year: Int, genre: String, director: String, image: String): Movie - atualizar um filme do db.
//        delete(id: ID!): Movie - excluir um filme do db.
//    }
//`;