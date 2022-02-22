const express = require('express')
const app = express()

import { getConversions } from './controller/conversions'

app.get('/', async function (req: any, res: any) {
  let conversions = await getConversions()
  res.send(conversions)
})

app.listen(3005)
