const { getAllCharacters } = require('../api/characters-api.js')

const resolvers = {
  Query: {
    characters: async _ => {
      return await getAllCharacters()
    }
  }
}

module.exports = resolvers
