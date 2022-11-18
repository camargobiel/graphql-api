const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')

const { ApolloServer } = require('apollo-server-express')

const resolvers = require('./src/resolvers/users.js')
const express = require('express')
require('dotenv').config()

const typeDefs = loadSchemaSync('./src/schemas/users.graphql', {
  loaders: [new GraphQLFileLoader()]
})

const app = express()

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: _ => 200
  })

  await server.start()

  server.applyMiddleware({ app })

  app.listen(process.env.PORT, () => {
    console.log(`🚀  Server ready at: http://localhost:${process.env.PORT}/graphql`)
  })
}

startServer()

module.exports = { app }
