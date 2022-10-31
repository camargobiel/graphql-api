const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const typeDefs = loadSchemaSync('./schemas/books.graphql', {
  loaders: [new GraphQLFileLoader()]
})

const books = [
  {
    title: 'The Awakening'
  },
  {
    title: 'City of Glass'
  }
]

const startServer = async () => {
  const resolvers = {
    Query: {
      books: () => books
    }
  }

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
