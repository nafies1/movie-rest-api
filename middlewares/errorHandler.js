module.exports = (err, req, res, next) => {
  let statusCode = 500
  let errorMsg = err ? { msg: err.msg } : {}
  if (err.status === 'bad_request') statusCode = 400
  else if (err.status === 'not_authorized') statusCode = 401
  else if (err.status === 'not_found') statusCode = 404
  else errorMsg = err
  res.status(statusCode).json(errorMsg)
}