const { getAllCharacters, getOneCharacter } = require('../api/characters-api.js')

const resolvers = {
  Query: {
    characters: async _ => {
      return await getAllCharacters()
    },
    character: async (_, args) => {
      return await getOneCharacter(args.id)
    }
  }
}

module.exports = resolvers
