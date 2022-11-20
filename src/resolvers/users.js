const db = require('../database/db.js')

const resolvers = {
  Query: {
    users: async _ => await db('users'),
    user: async (_, args) => await db('users').where({ id: args.id }).first()
  }
}

module.exports = resolvers
