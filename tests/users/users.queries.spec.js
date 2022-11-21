const { app } = require('../../app.js')
const request = require('supertest')

describe('Queries', () => {
  describe('Success', () => {
    it('query to users should return all users', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `{
            users {
              id
              name
              email
            }
          }`
        })
        .set('Accept', 'application/json')
        .expect(200)

      expect(response.body.data.users).toStrictEqual([
        {
          id: 1,
          name: 'Gabriel',
          email: 'camargoobiel@gmail.com'
        },
        {
          id: 2,
          name: 'Lucas',
          email: 'lucas@teste.com'
        }
      ])
    })

    it('given id should return specific user', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `{
            user(id: ${1}) {
              name
            }
          }`
        })
        .set('Accept', 'application/json')
        .expect(200)

      expect(response.body.data.user).toStrictEqual({
        name: 'Gabriel'
      })
    })
  })
})
