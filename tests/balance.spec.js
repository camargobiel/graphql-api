const { app } = require('../app.js')
const request = require('supertest')

describe('Mutations', () => {
  describe('Success', () => {
    it('Insert into balance should return success', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `mutation {
            AddBalance(input: ${50}) {
              id
              userId
              currentBalance
            }
          }`
        })
        .set('Accept', 'application/json')
        .expect(200)

      expect(response.body.data.AddBalance).toStrictEqual({
        id: '1',
        userId: null,
        currentBalance: 50
      })
    })
  })
})
