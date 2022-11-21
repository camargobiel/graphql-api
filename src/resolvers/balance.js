const db = require('../database/db.js')

const resolvers = {
  Mutation: {
    addBalance: async (_, { input }) => {
      const [response] = await db('balance')
        .insert({ current_balance: input })
        .returning('*')

      return {
        id: response.id,
        currentBalance: response.current_balance,
        userId: response.user_id
      }
    }
  }
}

module.exports = resolvers
