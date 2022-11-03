const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const resolvers = require('./src/resolvers/characters.js')

const typeDefs = loadSchemaSync('./src/schemas/characters.graphql', {
  loaders: [new GraphQLFileLoader()]
})

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 }
  })

  console.log(`🚀  Server ready at: ${url}`)
}

startServer()
