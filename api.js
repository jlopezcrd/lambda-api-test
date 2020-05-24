// Require the framework and instantiate it
const api = require('lambda-api')()

// Define a route
api.get('/status', async (req, res) => {
  return { status: 'ok' }
})

api.get('/README.md', async (req, res) => {
  res.sendFile('./README.md')
})

module.exports = api
