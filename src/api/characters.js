const axios = require('axios')

const get = async () => {
  let data = {}

  await axios.get('https://rickandmortyapi.com/api/character').then((response) => {
    data = {
      info: response.data.info,
      characters: response.data.results
    }
  })

  return data
}

module.exports = { get }
