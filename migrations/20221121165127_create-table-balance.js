const tableName = 'balance'

exports.up = (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments()
    table.float('user_id')
    table.decimal('current_balance').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable(tableName)
}

exports.config = { transaction: false }
