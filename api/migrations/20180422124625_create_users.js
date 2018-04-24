
exports.up = (knex, Promise) =>
  knex.schema.createTable('users', (table) => {
  table.increments('id').unsigned().primary()
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('authors')
