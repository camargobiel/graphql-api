const tableName = 'users'

exports.up = (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable(tableName)
}

exports.config = { transaction: false }
