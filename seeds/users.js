const tableName = 'users'

exports.seed = async (knex) => {
  await knex(tableName).insert([
    {
      name: 'Gabriel',
      email: 'camargoobiel@gmail.com',
      password: '123'
    },
    {
      name: 'Lucas',
      email: 'lucas@teste.com',
      password: '456'
    }
  ])
}
