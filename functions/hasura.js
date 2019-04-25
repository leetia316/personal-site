require('dotenv').config()

const { GQL_TOKEN: TOKEN, GQL_ROLE: ROLE } = process.env

exports.handler = async (event) => {
  const { token } = event.headers

  if (token === TOKEN) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Login successful.',
        'x-hasura-role': ROLE,
      }),
    }
  } return {
    statusCode: 401,
    body: JSON.stringify({
      message: 'Invalid login credentials.',
    }),
  }
}
