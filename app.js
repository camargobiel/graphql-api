const path = require('path')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeResolvers } = require('@graphql-tools/merge')
const { mergeTypeDefs } = require('@graphql-tools/merge')

const { ApolloServer } = require('apollo-server-express')

const express = require('express')
require('dotenv').config()

const typesArray = loadFilesSync(path.join(__dirname, './src/schemas/*.graphql'))
const typeDefs = mergeTypeDefs(typesArray)

const resolverFiles = loadFilesSync(path.join(__dirname, './src/resolvers/*.js'))
const resolvers = mergeResolvers(resolverFiles)

const app = express()

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: _ => 200
  })

  await server.start()

  server.applyMiddleware({ app })

  if (!module.parent) {
    app.listen(process.env.PORT, () => {
      console.log(`🚀  Server ready at: http://localhost:${process.env.PORT}/graphql`)
    })
  }
}

startServer()

module.exports = { app }
