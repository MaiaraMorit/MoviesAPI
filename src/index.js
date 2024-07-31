//START SERVER
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./types/movie');
const { resolvers } = require('./resolvers/movie-resolver')

const app = new ApolloServer({ typeDefs, resolvers });
//Run server
app.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});