const fs = require('fs')

module.exports = (req, res, next) => {
  const { apikey } = req.query

  if (apikey == process.env.API_KEY) next()
  else next({ msg: 'Please input the correct API key in query params', status: 'not_authorized'})
}