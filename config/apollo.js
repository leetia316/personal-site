module.exports = {
  clientConfigs: {
    default: {
      httpEndpoint: process.env.GQL_ENDPOINT,
      httpLinkOptions: {
        headers: {
          token: process.env.GQL_TOKEN,
        },
      },
    },
  },
}
