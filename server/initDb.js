const { db } = require('./src/database.ts')
const { generate } = require('shortid')

let randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

let createEvents = async (type, count) => {
  for (let i = 0; i < count; i++) {
    let paths = ['/car/1', '/car/2', '/car/3']
    let data = {}
    await db.none(
      `
    INSERT INTO events (id, type, data, organization_id, path, created_at) 
      VALUES ($<id>, $<type>, $<data>::json, 'mycompany', $<path>, $<created_at>)
    
  `,
      {
        id: generate(),
        type,
        data,
        path: paths[i % paths.length],
        created_at: randomDate(new Date(2021, 0, 1), new Date()),
      }
    )
  }
}

let initDatabase = async () => {
  console.log('Start database init')

  try {
    await db.none(`
        CREATE TABLE IF NOT EXISTS events (
          id VARCHAR (14) PRIMARY KEY,
          type VARCHAR (255),
          data jsonb,
          organization_id VARCHAR (255),
          path VARCHAR (255),
          created_at timestamptz,
          updated_at timestamptz,
          deleted_at timestamptz
        )
      `)

    await createEvents('page_views', 10000)
    await createEvents('conversions', 1000)
  } catch (err) {
    console.log(err)
  }

  console.log('DB init done')
  process.exit(0)
}

initDatabase()
