import faunadb from 'faunadb'

require('dotenv').config()

const { FDB_SECRET } = process.env
const q = faunadb.query
const client = new faunadb.Client({ secret: FDB_SECRET })

exports.handler = async () => {
  try {
    const res = await client.query(q.Get(q.Ref('classes/pages/229902600182432269')))
    return {
      statusCode: 200,
      body: JSON.stringify(res.data),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    }
  }
}
