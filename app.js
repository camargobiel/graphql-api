const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')

const { ApolloServer } = require('apollo-server-express')

const resolvers = require('./src/resolvers/characters.js')
const express = require('express')

const typeDefs = loadSchemaSync('./src/schemas/characters.graphql', {
  loaders: [new GraphQLFileLoader()]
})

const PORT = 3000

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  const app = express()

  await server.start()

  server.applyMiddleware({ app })

  app.get('/rest', (req, res) => {
    res.json({
      data: 'API is working...'
    })
  })

  app.listen(PORT, () => {
    console.log(`🚀  Server ready at: ${PORT}`)
  })
}

startServer()

/* module.exports = { server, typeDefs } */
