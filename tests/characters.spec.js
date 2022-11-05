const { app } = require('../app.js')
const request = require('supertest')

describe('Queries', () => {
  describe('Success', () => {
    it('query to characters should return data', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `{
            characters {
              id
            }
          }`
        })
        .set('Accept', 'application/json')
        .expect(200)

      expect(response.body.data.characters.length).toBe(20)
    })

    /* it('given id should return specific character', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `{
            characters {
              id
            }
          }`,
          variables: {
            id: 1
          }
        })
        .set('Accept', 'application/json')
        .expect(200)

      console.log(response.data)
    }) */
  })
})
