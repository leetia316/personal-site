require('dotenv').config()

const { GQL_TOKEN: envToken } = process.env

exports.handler = async (event) => {
  const { token } = event.queryStringParameters

  if (token === envToken) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Login successful.',
      }),
    }
  } return {
    statusCode: 401,
    body: JSON.stringify({
      message: 'Invalid login credentials.',
    }),
  }
}
