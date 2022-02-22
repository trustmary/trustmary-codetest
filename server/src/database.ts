let pgp = require('pg-promise')()

const { DATABASE_URL = 'postgres://root:root@127.0.0.1:5433/trustmary-codetest', NODE_ENV = 'local' } = process.env

let cn = {
  connectionString: DATABASE_URL,
  ssl: undefined,
}

const db = pgp(cn)

module.exports = { db }
