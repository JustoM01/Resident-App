const {ApolloServer} = require('apollo-server-express');
const express = require('express')

// imports my typedefs  and resolvers
const {typeDefs, resolvers} = require('./gql')
// imports my database connection
const db = require('./db')







async function initServer() {
    const app = express();
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.use((req, res) => {
      res.send("Server started successfully");
    });
    const PORT = process.env.PORT || 5000;
  
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
    });
  }
  
  initServer();
