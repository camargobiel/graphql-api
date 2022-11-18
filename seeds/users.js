const tableName = 'users'

exports.seed = async (knex) => {
  await knex(tableName).insert([
    {
      name: 'Gabriel',
      email: 'camargoobiel@gmail.com'
    },
    {
      name: 'Lucas',
      email: 'lucas@teste.com'
    }
  ])
}
