const { db } = require('../database')

export async function getConversions() {
  return db.any(/*sql*/ `SELECT * FROM events`)
}
