const db = require('../database/db.js')

const resolvers = {
  Query: {
    users: async _ => await db('users'),
    user: async (_, arg) => await db('users').where({ id: arg.id }).first()
  }
}

module.exports = resolvers
