const { RequestLog } = require('../models')

class RequestLogController {
  static async createLogRequest (req, res, next) {
    const [ szEndpoint, szParameter ] = req.url.split("?")

    try {
      await RequestLog.create({
        dtmRequestDate: new Date(),
        szEndpoint,
        szParameter
      })
      // console.log(savedLog?.dataValues)
      next()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = RequestLogController