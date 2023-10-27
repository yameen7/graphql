const { ApolloServer } = require('@apollo/server');
const { typeDefs } = require("./src/typeDefs/index");
const { resolvers } = require("./src/resolvers/index");
const { startStandaloneServer } = require("@apollo/server/standalone"); 
const mongoose = require("mongoose");
const server = new ApolloServer({ typeDefs, resolvers } );

mongoose
  .connect('mongodb+srv://admin:fX5hm0b6LX56RFIH@cluster0.hd0kk9y.mongodb.net/Test?retryWrites=true&w=majority')
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

const startServer = async () => {
  const { url } = await startStandaloneServer(server);
  console.log("server listening on port " + url);
};

startServer();

