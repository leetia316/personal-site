import faunadb from 'faunadb'

require('dotenv').config()

const { FDB_SECRET } = process.env
const q = faunadb.query
const client = new faunadb.Client({ secret: FDB_SECRET })

exports.handler = async (event) => {
  const { headline, content } = event.queryStringParameters
  try {
    const update = await client.query(q.Update(q.Ref(q.Class('pages'), '229902600182432269'), {
      data: {
        headline,
        content,
      },
    }))
    const updatedFields = update.data
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Fields updated successfully!',
        updatedFields,
      }),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    }
  }
}
