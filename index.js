const { ApolloServer } = require('@apollo/server');
const { typeDefs } = require("./src/typeDefs/index");
const { resolvers } = require("./src/resolvers/index");
const { startStandaloneServer } = require("@apollo/server/standalone"); 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const server = new ApolloServer({ typeDefs, resolvers } );
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

const startServer = async () => {
  const { url } = await startStandaloneServer(server);
  console.log("server listening on port " + url);
};

startServer();

