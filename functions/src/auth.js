require('dotenv').config()

const { SECRET } = process.env

exports.handler = async (event, context) => {
  const { pw } = await event.queryStringParameters
  if (pw === SECRET) {
    return {
      statusCode: 200,
      body: 'Password match!',
    }
  } return {
    statusCode: 401,
    body: 'Your password is wrong, loser.',
  }
}
