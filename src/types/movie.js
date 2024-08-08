//DEFINE TYPES
const { gql } = require('apollo-server');

//SCHEMA
const typeDefs = gql `
    type Movie {
        id: ID!
        title: String!
        year: Int!
        genre: String!
        director: String!
        image: String
    }
    type DeleteMovieResult {
    success: Boolean!
    message: String
    }


    type Query {
        movies:[Movie]
        movie(id: ID!): Movie
    }
    type Mutation {
        create(title: String!, year: Int!, genre: String, director: String!, image: String): Movie
        update(id: ID!, title: String, year: Int, genre: String, director: String, image: String): Movie
        delete(id: ID!): DeleteMovieResult
    }
`;

module.exports = { typeDefs };

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