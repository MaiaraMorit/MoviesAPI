

//DEFINE TYPES

//DEFINE RESOLVERS

//CREATE SERVER

//START SERVER
const { ApolloServer, gql } = require('apollo-server');

const app = new ApolloServer({ typeDefs, resolvers });
//Run server
app.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});