const axios = require("axios")

class MovieService {
  static async search (req, res, next) {
    const { apikey, keyword } = req.query
    if (!keyword) next({ msg: "keyword query params is required for search", status: "bad_request" })
    try {
      const { data } = await axios.get(`http://www.omdbapi.com/?s=${keyword}&apikey=${apikey}`)
      res.status(200).json(data)
    } catch (err) {
      MovieService.throwErrResponse(err, next)
    }
  }

  static async getDetail (req, res, next) {
    const { id } = req.params
    const { apikey } = req.query
    try {
      const result = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
      // console.log(result)
      res.status(200).json(result.data)
    } catch (err) {
      MovieService.throwErrResponse(err, next)
    }
  }

  static throwErrResponse (err, next){
    const { response } = err
    console.log(err)
    if (response) next(response)
    else next(err)
  }

}

module.exports = MovieService