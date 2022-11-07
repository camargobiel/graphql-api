const axios = require('axios')

const getAllCharacters = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/character')
    .catch(error => console.log(error))

  if (response) return response.data.results
}

const getOneCharacter = async (id) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

  if (response) return response.data
}

module.exports = {
  getAllCharacters,
  getOneCharacter
}
