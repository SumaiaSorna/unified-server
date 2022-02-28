const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const db = require("./config/connection");

const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const PORT = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

app.use(cors());

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
});
