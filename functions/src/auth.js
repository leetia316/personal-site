require('dotenv').config()

const { SECRET } = process.env
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'text/plain',
}

exports.handler = async (event, context) => {
  const { pw } = event.queryStringParameters
  if (pw === SECRET) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        auth: true,
      }),
    }
  } return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      auth: false,
    }),
  }
}
