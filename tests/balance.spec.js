const { app } = require('../app.js')
const request = require('supertest')

describe('Mutations', () => {
  describe('Success', () => {
    it('Insert into balance should return success', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `mutation {
            addBalance(input: ${50}) {
              id
              userId
              currentBalance
            }
          }`
        })
        .set('Accept', 'application/json')
        .expect(200)

      expect(response.body.data.addBalance).toStrictEqual({
        id: '1',
        userId: null,
        currentBalance: 50
      })
    })
  })
})
