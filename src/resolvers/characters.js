const { get } = require('../api/characters.js')

let data = []
get().then((response) => { data = response })

const resolvers = {
  Query: {
    characters: () => data.characters
  }
}

module.exports = resolvers
